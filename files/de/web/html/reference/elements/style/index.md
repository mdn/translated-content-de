---
title: "`<style>`: HTML-Element für Stilinformationen"
short-title: <style>
slug: Web/HTML/Reference/Elements/style
l10n:
  sourceCommit: b58d84c261b9cfa66d46a070ba205c53e18ee3e0
---

Das **`<style>`**-[HTML](/de/docs/Web/HTML)-Element enthält Stilinformationen für ein Dokument oder einen Teil davon. Es enthält CSS, das auf den Inhalt des Dokuments angewendet wird, in dem sich das `<style>`-Element befindet.

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
  - : Dieses Attribut gibt ausdrücklich an, dass bestimmte Vorgänge blockiert werden sollen, bis kritische Unterressourcen geladen und das Stylesheet auf das Dokument angewendet wurde. Über {{cssxref("@import")}} eingebundene Stylesheets gelten im Allgemeinen als kritische Unterressourcen, {{cssxref("background-image")}} und Schriftarten dagegen nicht. Die zu blockierenden Vorgänge müssen als durch Leerzeichen getrennte Liste der unten aufgeführten Blocking-Tokens angegeben werden. Derzeit gibt es nur ein Token:
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `style`-Elemente im `<head>` des Dokuments können das Rendern blockieren. Standardmäßig blockiert ein `style`-Element im `<head>` das Rendern, wenn der Browser es beim Parsen entdeckt. Wird ein solches `style`-Element dynamisch per Skript hinzugefügt, müssen Sie zusätzlich `blocking = "render"` setzen, damit es das Rendern blockiert.

- `media`
  - : Dieses Attribut legt fest, für welche Medien der Stil angewendet werden soll. Sein Wert ist eine [Media Query](/de/docs/Web/CSS/Guides/Media_queries/Using). Fehlt das Attribut, gilt standardmäßig `all`.
- `nonce`
  - : Eine kryptografische {{Glossary("Nonce", "Nonce")}} (eine einmalig verwendete Zahl), mit der Inline-Stile im Rahmen einer [style-src-Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) zugelassen werden können. Der Server muss bei jeder Übermittlung einer Richtlinie einen eindeutigen Nonce-Wert erzeugen. Die Nonce darf nicht erraten werden können, da sich die Richtlinie für eine Ressource sonst leicht umgehen lässt.
- `title`
  - : Dieses Attribut legt Gruppen [alternativer Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) fest.

### Veraltete Attribute

- `type` {{deprecated_inline}}
  - : Dieses Attribut sollte nicht angegeben werden. Falls es angegeben wird, sind nur eine leere Zeichenfolge oder ein Wert zulässig, der ohne Berücksichtigung der Groß- und Kleinschreibung `text/css` entspricht.

## Hinweise zur Verwendung

Das `<style>`-Element befindet sich üblicherweise im {{htmlelement("head")}} des Dokuments. Es kann auch im [Inhalt eines Templates](/de/docs/Web/API/HTMLTemplateElement/content) eines {{htmlelement("template")}}-Elements verwendet werden, der beliebige Elemente enthalten kann. Im {{htmlelement("body")}} kann es als erstes Kindelement seines Elternelements verwendet werden (siehe [Verwendung von `<style>` im Body](#using_style_in_the_body)).

Wenn Sie mehrere `<style>`- und `<link>`-Elemente in Ihr Dokument aufnehmen, werden sie in der Reihenfolge, in der sie im Dokument stehen, auf das DOM angewendet. Achten Sie auf die richtige Reihenfolge, um unerwartete Auswirkungen der Kaskade zu vermeiden.

Wie `<link>`-Elemente können auch `<style>`-Elemente `media`-Attribute mit [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) enthalten. So können Sie interne Stylesheets abhängig von Medieneigenschaften wie der Breite des Viewports gezielt auf Ihr Dokument anwenden.

### Verwendung von `<style>` im Body

Ein `<style>`-Element kann dort verwendet werden, wo Flow Content erwartet wird, beispielsweise im {{htmlelement("body")}}, sofern es das erste Kindelement seines Elternelements ist und sein Stylesheet nur dieses Elternelement und dessen Nachfahren gestaltet:

- Jede Stilregel muss innerhalb einer {{cssxref("@scope")}}-Regel ohne Scope-Root-Selektor stehen, beispielsweise `@scope { ... }` oder `@scope to (.x) { ... }`. Eine solche `@scope`-Regel ist auf das Elternelement des `<style>`-Elements beschränkt. Sie kann selbst in Regeln wie {{cssxref("@media")}}, {{cssxref("@supports")}}, {{cssxref("@container")}}, {{cssxref("@starting-style")}} oder {{cssxref("@layer")}} verschachtelt sein.
- Eine `@scope`-Regel mit Scope-Root-Selektor, beispielsweise `@scope (.card) { ... }`, muss ebenfalls in einer `@scope`-Regel ohne Scope-Root-Selektor verschachtelt sein.
- Das Stylesheet darf keine {{cssxref("@import")}}-Regeln enthalten.

Browser wenden jedes `<style>`-Element im Body an. Ein Element, das diese Regeln nicht einhält, ist jedoch ungültiges HTML. Die Regeln stellen sicher, dass ein `<style>`-Element im Body keine Inhalte nachträglich umgestaltet, die der Browser möglicherweise bereits gerendert hat – mit Ausnahme seines Elternelements.

At-Regeln wie {{cssxref("@font-face")}}, {{cssxref("@keyframes")}} und {{cssxref("@property")}} definieren Namen für das gesamte Dokument. Um zu vermeiden, dass möglicherweise bereits gerenderte Inhalte umgestaltet werden, sollten Sie solche Namen nur innerhalb des Elternelements des `<style>`-Elements verwenden und Namen wählen, die an keiner anderen Stelle im Dokument verwendet werden.

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

Ein `<style>`-Element kann auch innerhalb eines {{HTMLElement("template")}}-Elements stehen. Die Stile bleiben inaktiv, bis der Template-Inhalt instanziiert und in das Dokument eingefügt wird.

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

In diesem Beispiel verwenden wir zwei `<style>`-Elemente. Beachten Sie, dass widersprüchliche Deklarationen im späteren `<style>`-Element diejenigen im früheren überschreiben, sofern sie die gleiche [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) haben.

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

In diesem Beispiel bauen wir auf dem vorherigen auf und fügen dem zweiten `<style>`-Element ein `media`-Attribut hinzu. Dadurch wird es nur angewendet, wenn der Viewport weniger als 500px breit ist.

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

### Auf einen Bereich beschränkte Stile im Body

In diesem Beispiel ist ein `<style>`-Element das erste Kindelement eines {{htmlelement("aside")}}-Elements. Seine Regeln stehen innerhalb einer `@scope`-Regel ohne Scope-Root-Selektor und gelten daher nur für das `<aside>`-Element und dessen Nachfahren.

```html
<aside>
  <style>
    @scope {
      :scope {
        background-color: lightyellow;
        padding: 0 1rem;
      }
      p {
        font-weight: bold;
      }
    }
  </style>
  <p>Did you know? Octopuses have three hearts.</p>
</aside>
<p>This paragraph isn't styled, because it's outside the aside.</p>
```

Eine Regel wie `p { margin: 0; }` außerhalb der `@scope`-Regel würde das HTML ungültig machen, da sie nicht auf das `<aside>`-Element beschränkt wäre.

#### Ergebnis

{{EmbedLiveSample('Scoped_styles_in_the_body', '100%', '150')}}

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
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow Content</a
        >.
      </td>
    </tr>
    <tr>
      <th>Zulässiger Inhalt</th>
      <td>
        Textinhalt, der dem <code>type</code>-Attribut entspricht, also
        <code>text/css</code>.
      </td>
    </tr>
    <tr>
      <th>Weglassen von Tags</th>
      <td>Weder das Start- noch das End-Tag darf weggelassen werden.</td>
    </tr>
    <tr>
      <th>Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadateninhalt</a
        > akzeptiert. Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow Content</a
        > akzeptiert, sofern es dessen erstes Kindelement ist.
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

- Das {{HTMLElement("link")}}-Element, mit dem sich externe Stylesheets auf ein Dokument anwenden lassen.
- [Alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)
