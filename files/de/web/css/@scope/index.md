---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@scope`** [CSS](/de/docs/Web/CSS)-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, Elemente in spezifischen DOM-Subtrees auszuwählen. Dies erlaubt eine präzise Zielauswahl von Elementen, ohne extrem spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne, dass Ihre Selektoren zu stark an die DOM-Struktur gebunden sind.

In JavaScript kann auf `@scope` über die CSS-Objektmodell-Schnittstelle [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) zugegriffen werden.

## Syntax

Die `@scope`-At-Regel enthält eine oder mehrere Regelmengen (bezeichnet als **scoped style rules**) und definiert einen Bereich, in dem sie auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block innerhalb Ihrer CSS, in diesem Fall enthält es einen Präambel-Bereich, der **Scope-Root**- und optionale **Scope-Limit**-Selektoren umfasst – diese definieren die obere und untere Grenze des Bereichs.

   ```css
   @scope (scope root) to (scope limit) {
     rulesets
   }
   ```

2. Als Inline-Stile, die in einem {{htmlelement("style")}}-Element in Ihrem HTML enthalten sind. In diesem Fall fehlt die Präambel, und die eingeschlossene Regelmenge wird automatisch auf das übergeordnete Element des `<style>`-Elements beschränkt.

   ```html
   <parent-element>
     <style>
       @scope {
         rulesets
       }
     </style>
   </parent-element>
   ```

## Beschreibung

Ein komplexes Webdokument könnte Komponenten wie Header, Footer, Nachrichtenartikel, Karten, Mediaplayer, Werbeanzeigen und andere enthalten. Mit zunehmender Komplexität wird es immer schwieriger, die Stile dieser Komponenten effektiv zu verwalten, und eine effektive Bereichsbegrenzung der Stile hilft uns, diese Komplexität zu bewältigen. Betrachten wir den folgenden DOM-Baum:

```plain-nolint
body
└─ article.feature
   ├─ section.article-hero
   │  ├─ h2
   │  └─ img
   │
   ├─ section.article-body
   │  ├─ h3
   │  ├─ p
   │  ├─ img
   │  ├─ p
   │  └─ figure
   │     ├─ img
   │     └─ figcaption
   │
   └─ footer
      ├─ p
      └─ img
```

Wenn Sie das {{htmlelement("img")}}-Element innerhalb der {{htmlelement("section")}} mit einer Klasse `article-body` auswählen möchten, könnten Sie Folgendes tun:

- Schreiben Sie einen Selektor wie `.feature > .article-body > img`. Dieser hat jedoch eine hohe Spezifität, ist daher schwer zu überschreiben und zudem stark an die DOM-Struktur gebunden. Wenn sich Ihre Markup-Struktur zukünftig ändert, könnten Sie gezwungen sein, Ihr CSS neu zu schreiben.
- Schreiben Sie etwas weniger Spezifisches wie `.article-body img`. Das würde jedoch alle Bilder innerhalb der `section` auswählen.

Hier ist `@scope` nützlich. Es ermöglicht Ihnen, einen genauen Bereich zu definieren, innerhalb dessen Ihre Selektoren Elemente anvisieren dürfen. Zum Beispiel könnten Sie das obige Problem mit einem eigenständigen `@scope`-Block wie folgt lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body` Scope-Root-Selektor definiert die obere Grenze des DOM-Baum-Bereichs, in dem die Regelmenge angewendet wird, und der `figure` Scope-Limit-Selektor definiert die untere Grenze. Daher werden nur {{htmlelement("img")}}-Elemente innerhalb einer `<section>` mit einer Klasse `article-body`, aber nicht innerhalb von {{htmlelement("figure")}}-Elementen ausgewählt.

> [!NOTE]
> Diese Art der Bereichsbegrenzung — mit einer oberen und unteren Grenze — wird allgemein als **Donut-Scope** bezeichnet.

Wenn Sie alle Bilder innerhalb einer `<section>` mit einer Klasse `article-body` auswählen möchten, können Sie das Scope-Limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie können Ihren `@scope`-Block inline innerhalb eines `<style>`-Elements einfügen, das wiederum innerhalb der `<section>` mit der Klasse `article-body` enthalten ist:

```html
<section class="article-body">
  <style>
    @scope {
      img {
        border: 5px solid black;
        background-color: goldenrod;
      }
    }
  </style>

  <!-- ... -->
</section>
```

> [!NOTE]
> Es ist wichtig zu verstehen, dass, obwohl `@scope` es ermöglicht, die Anwendung von Selektoren auf spezifische DOM-Subtrees zu isolieren, dies die angewendeten Stile nicht vollständig auf diese Subtrees begrenzt. Dies ist bei Vererbung besonders auffällig — Eigenschaften, die von Kindern geerbt werden (z. B. {{cssxref("color")}} oder {{cssxref("font-family")}}), werden unabhängig von jedem festgelegten Scope-Limit weiterhin vererbt.

### Die `:scope`-Pseudoklasse

Im Kontext eines `@scope`-Blocks stellt die {{cssxref(":scope")}}-Pseudoklasse die Scope-Root dar – sie bietet eine einfache Möglichkeit, den Scope-Root direkt aus dem Scope heraus zu stylen:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Tatsächlich wird `:scope` implizit vor allen scoped style rules hinzugefügt. Wenn Sie möchten, können Sie `:scope` explizit hinzufügen oder den [Nesting](/de/docs/Web/CSS/CSS_nesting)-Selektor (`&`) voranstellen, wenn Sie diese Darstellungen als verständlicher empfinden.

Die drei Regeln im folgenden Block sind alle gleichwertig in dem, was sie auswählen:

```css
@scope (.feature) {
  img { ... }

  :scope img { ... }

  & img { ... }
}
```

### Hinweise zur Verwendung von Scoped-Selektoren

- Ein Scope-Limit kann `:scope` benutzen, um eine spezifische Beziehungsanforderung zwischen dem Scope-Limit und der Root zu definieren. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) { ... }
  ```

- Ein Scope-Limit kann Elemente außerhalb der Scope-Root mit `:scope` referenzieren. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) { ... }
  ```

- Scoped style rules können den Subtree nicht verlassen. Selektionen wie `:scope + p` sind ungültig, weil diese Auswahl außerhalb des Subtrees läge.

- Es ist völlig valide, die Scope-Root und das Limit als Selektorliste zu definieren, wodurch mehrere Scopes definiert werden. Im folgenden Beispiel werden die Stile auf jedes `<img>` innerhalb einer `<section>` mit der Klasse `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es innerhalb eines `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Das Einfügen einer Regelmenge in einen `@scope`-Block beeinflusst nicht die Spezifität ihres Selektors, unabhängig von den Selektoren, die innerhalb der Scope-Root und des Limits verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie jedoch entscheiden, die `:scope`-Pseudoklasse explizit vor Ihre Scoped-Selektoren zu setzen, müssen Sie sie bei der Berechnung der Spezifität berücksichtigen. `:scope` hat, wie alle regulären Pseudoklassen, eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Beim Verwenden des `&`-Selectors innerhalb eines `@scope`-Blocks repräsentiert `&` den Scope-Root-Selektor; intern wird er als dieser Selektor umschlossen innerhalb einer {{cssxref(":is", ":is()")}}-Pseudoklassendunktion berechnet. Beispielsweise:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` entspricht `:is(figure, #primary) img`. Da `:is()` die Spezifität seines spezifischsten Arguments übernimmt (`#primary` in diesem Fall), ist die Spezifität des Scoped-Selectors `& img` daher 1-0-0 + 0-0-1 = 1-0-1.

### Der Unterschied zwischen `:scope` und `&` innerhalb von `@scope`

`:scope` repräsentiert die übereinstimmende Scope-Root, während `&` den Selektor repräsentiert, der verwendet wird, um die Scope-Root zu matchen. Aufgrund dessen ist es möglich, `&` mehrfach zu verketten. `:scope` hingegen kann nur einmal verwendet werden — Sie können keine Scope-Root innerhalb einer anderen Scope-Root matchen.

```css
@scope (.feature) {
  /* Selects a .feature inside the matched root .feature */
  & & { ... }

  /* Doesn't work */
  :scope :scope { ... }
}
```

### Wie `@scope`-Konflikte gelöst werden

`@scope` fügt ein neues Kriterium zur [CSS-Cascade](/de/docs/Web/CSS/CSS_cascade) hinzu: **Scoping-Nähe**. Dies besagt, dass, wenn zwei Scopes widersprüchliche Stile haben, der Stil angewendet wird, der die geringste Anzahl von Sprüngen im DOM-Baum zur Scope-Root aufweist. Schauen wir uns ein Beispiel an, um zu sehen, was das bedeutet.

Betrachten Sie den folgenden HTML-Schnipsel, bei dem unterschiedlich thematisierte Karten ineinander verschachtelt sind:

```html
<div class="light-theme">
  <p>Light theme text</p>
  <div class="dark-theme">
    <p>Dark theme text</p>
    <div class="light-theme">
      <p>Light theme text</p>
    </div>
  </div>
</div>
```

Wenn Sie die Theme-CSS wie folgt schreiben, stoßen Sie auf Probleme:

```css
.light-theme {
  background: #ccc;
}

.dark-theme {
  background: #333;
}

.light-theme p {
  color: black;
}

.dark-theme p {
  color: white;
}
```

Der innerste Absatz soll schwarz gefärbt sein, da er sich innerhalb einer Light-Theme-Karte befindet. Er wird jedoch sowohl von `.light-theme p` als auch von `.dark-theme p` adressiert. Da sich die `.dark-theme p`-Regel später in der Quellordnung befindet, wird sie angewendet, und der Absatz wird fälschlicherweise weiß gefärbt.

Um dies zu beheben, können Sie `@scope` wie folgt verwenden:

```css
@scope (.light-theme) {
  :scope {
    background: #ccc;
  }
  p {
    color: black;
  }
}

@scope (.dark-theme) {
  :scope {
    background: #333;
  }
  p {
    color: white;
  }
}
```

Nun wird der innerste Absatz korrekt schwarz gefärbt. Dies liegt daran, dass er nur eine DOM-Hierarchieebene von der `.light-theme` Scope-Root entfernt ist, aber zwei Ebenen von der `.dark-theme` Scope-Root. Daher gewinnt der Light-Stil.

> [!NOTE]
> Scoping-Nähe überstimmt die Quellordnung, wird jedoch selbst durch andere, höher priorisierte Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Layer](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) überschrieben.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von Scope-Roots

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme`- und `.dark-scheme`-Klasse zu adressieren. Beachten Sie, wie `:scope` verwendet wird, um den Scope-Roots selbst Stile zu geben. In diesem Beispiel sind die Scope-Roots die {{htmlelement("div")}}-Elemente, die diese Klassen haben.

#### HTML

```html
<div class="light-scheme">
  <p>
    MDN contains lots of information about
    <a href="/en-US/docs/Web/HTML">HTML</a>,
    <a href="/en-US/docs/Web/CSS">CSS</a>, and
    <a href="/en-US/docs/Web/JavaScript">JavaScript</a>.
  </p>
</div>

<div class="dark-scheme">
  <p>
    MDN contains lots of information about
    <a href="/en-US/docs/Web/HTML">HTML</a>,
    <a href="/en-US/docs/Web/CSS">CSS</a>, and
    <a href="/en-US/docs/Web/JavaScript">JavaScript</a>.
  </p>
</div>
```

#### CSS

```css hidden
div {
  padding: 10px;
}
```

```css
@scope (.light-scheme) {
  :scope {
    background-color: plum;
  }

  a {
    color: darkmagenta;
  }
}

@scope (.dark-scheme) {
  :scope {
    background-color: darkmagenta;
    color: antiquewhite;
  }

  a {
    color: plum;
  }
}
```

#### Ergebnis

Der obige Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Basic style inside scope roots", "100%", "150") }}

### Scope-Roots und Scope-Limits

In diesem Beispiel haben wir einen HTML-Snippet, der die in der [Beschreibung](#beschreibung) besprochene DOM-Struktur widerspiegelt. Diese Struktur repräsentiert eine typische Artikelzusammenfassung. Die Hauptmerkmale sind die {{htmlelement("img")}}-Elemente, die auf verschiedenen Ebenen in der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist es zu zeigen, wie man eine Scope-Root und ein Limit verwenden kann, um `<img>`-Elemente vom Beginn der Hierarchie zu stylen, aber nur bis (und nicht einschließlich) des `<img>` innerhalb des {{htmlelement("figure")}}-Elements — effektiv wird ein Donut-Scope erstellt.

#### HTML

```html
<article class="feature">
  <section class="article-hero">
    <h2>Article heading</h2>
    <img alt="image" />
  </section>

  <section class="article-body">
    <h3>Article subheading</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod
      consectetur leo, nec eleifend quam volutpat vitae. Duis quis felis at
      augue imperdiet aliquam. Morbi at felis et massa mattis lacinia. Cras
      pharetra velit nisi, ac efficitur magna luctus nec.
    </p>

    <img alt="image" />

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <figure>
      <img alt="image" />
      <figcaption>My infographic</figcaption>
    </figure>
  </section>

  <footer>
    <p>Written by Chris Mills.</p>
    <img alt="image" />
  </footer>
</article>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

article {
  margin-bottom: 20px;
  padding: 10px;
  border: 2px solid gray;
}

.article-hero,
.article-body,
article footer {
  padding: 20px;
  margin: 10px;
  border: 2px solid lightgray;
}

img {
  height: 100px;
  width: 100%;
  display: block;
  background-color: lightgray;
  color: black;
  padding: 10px;
}
```

In unserem CSS haben wir zwei `@scope`-Blöcke:

- Der erste `@scope`-Block definiert seine Scope-Root als Elemente mit einer Klasse `.feature` (in diesem Fall nur das äußere `<article>`). Dadurch wird gezeigt, wie `@scope` verwendet werden kann, um ein spezifisches HTML-Subset zu thematisieren.
- Der zweite `@scope`-Block definiert ebenfalls seine Scope-Root als Elemente mit einer Klasse `.feature`, definiert jedoch auch eine Scope-Limit von `figure`. Dadurch wird sichergestellt, dass die enthaltenen Regelmengen nur auf passende Elemente innerhalb der Scope-Root (in diesem Fall `<article class="feature"> ... </article>`) angewendet werden, die **nicht** innerhalb nachfolgender `<figure>`-Elemente verschachtelt sind. Dieser `@scope`-Block enthält eine einfache Regelmenge, die `<img>`-Elemente mit einem dicken schwarzen Rahmen und einer goldenen Hintergrundfarbe stylt.

```css
/* Scoped CSS */

@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }

  figure {
    background-color: white;
    border: 2px solid black;
    color: black;
    padding: 10px;
  }
}

/* Donut scope */

@scope (.feature) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

#### Ergebnis

Im gerenderten Code ist zu beachten, dass alle `<img>`-Elemente mit dem dicken Rahmen und einer goldenen Hintergrundfarbe gestylt werden, mit Ausnahme desjenigen innerhalb des `<figure>`-Elements (beschriftet als "My infographic").

{{ EmbedLiveSample("Scope roots and scope limits", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Beschränken Sie den Geltungsbereich Ihrer Selektoren mit der CSS-`@scope`-At-Regel](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
