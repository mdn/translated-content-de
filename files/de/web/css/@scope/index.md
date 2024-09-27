---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`@scope`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, Elemente in bestimmten DOM-Teilbäumen auszuwählen, um Elemente präzise zu bestimmen, ohne übermäßig spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu koppeln.

In JavaScript kann auf `@scope` über die CSS-Objektmodell-Schnittstelle [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) zugegriffen werden.

## Syntax

Die `@scope` At-Regel enthält eine oder mehrere Regelmengen (genannt **scoped style rules**) und definiert einen Geltungsbereich, in dem sie auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block innerhalb Ihres CSS, wobei es einen Vorspannbereich umfasst, der **scope root** und optionale **scope limit** Selektoren enthält — diese definieren die oberen und unteren Grenzen des Geltungsbereichs.

   ```css
   @scope (scope root) to (scope limit) {
     rulesets
   }
   ```

2. Als Inline-Stile innerhalb eines {{htmlelement("style")}}-Elements in Ihrem HTML enthalten, wobei der Vorspannbereich weggelassen wird, und die eingeschlossene Regelmenge automatisch auf das übergeordnete Element des `<style>` Elements begrenzt ist.

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

Ein komplexes Webdokument könnte Komponenten wie Header, Footer, Nachrichtenartikel, Karten, Mediaplayer, Anzeigen und andere enthalten. Mit zunehmender Komplexität wird das effektive Verwalten des Stylings dieser Komponenten zu einem größeren Problem, und die effektive Begrenzung von Stilen hilft uns, diese Komplexität zu bewältigen. Betrachten wir den folgenden DOM-Baum:

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

Wenn Sie das {{htmlelement("img")}} Element innerhalb des {{htmlelement("section")}} mit einer Klasse von `article-body` auswählen möchten, könnten Sie Folgendes tun:

- Einen Selektor wie `.feature > .article-body > img` schreiben. Das hat jedoch eine hohe Spezifität, ist schwer zu überschreiben und fest mit der DOM-Struktur gekoppelt. Wenn sich Ihre Markup-Struktur in Zukunft ändert, müssen Sie möglicherweise Ihr CSS umschreiben.
- Etwas weniger Spezifisches wie `.article-body img` schreiben. Das würde jedoch alle Bilder innerhalb des `section` auswählen.

Hier kommt `@scope` ins Spiel. Es erlaubt Ihnen, einen präzisen Bereich zu definieren, innerhalb dessen Ihre Selektoren Elemente ansprechen dürfen. Zum Beispiel könnten Sie das oben genannte Problem mit einem eigenständigen `@scope` Block wie dem folgenden lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body` scope root Selektor definiert die obere Grenze des DOM-Baum-Bereichs, in dem die Regelmenge angewendet wird, und der `figure` scope limit Selektor definiert die untere Grenze. Als Ergebnis werden nur {{htmlelement("img")}} Elemente innerhalb eines `<section>` mit einer Klasse von `article-body`, jedoch nicht innerhalb von {{htmlelement("figure")}} Elementen, ausgewählt.

> [!NOTE]
> Diese Art der Begrenzung — mit einer oberen und einer unteren Grenze — wird gemeinhin als **Donut-Bereich** bezeichnet.

Wenn Sie alle Bilder innerhalb eines `<section>` mit einer Klasse von `article-body` auswählen möchten, können Sie das scope limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope` Block inline innerhalb eines `<style>` Elements einschließen, das wiederum innerhalb des `<section>` mit der Klasse `article-body` ist:

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
> Es ist wichtig zu verstehen, dass, während `@scope` es Ihnen ermöglicht, die Anwendung von Selektoren auf spezifische DOM-Teilbäume einzuschränken, es die angewendeten Stile nicht vollständig innerhalb dieser Teilbäume isoliert hält. Dies ist am deutlichsten bei Vererbung zu bemerken — Eigenschaften, die von Kindern geerbt werden (zum Beispiel {{cssxref("color")}} oder {{cssxref("font-family")}}), werden weiterhin über ein festgelegtes scope limit hinaus vererbt.

### Die `:scope` Pseudo-Klasse

Im Kontext eines `@scope` Blocks repräsentiert die {{cssxref(":scope")}} Pseudo-Klasse die scope root — sie bietet eine einfache Möglichkeit, Stile auf die scope root selbst anzuwenden, von innerhalb des Bereichs:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Tatsächlich wird `:scope` implizit allen scoped style rules vorangestellt. Wenn Sie möchten, können Sie `:scope` explizit voranstellen oder den [Nesting](/de/docs/Web/CSS/CSS_nesting) Selektor (`&`) voranstellen, um denselben Effekt zu erzielen, wenn Sie diese Darstellungen leichter verständlich finden.

Die drei Regeln im folgenden Block sind alle gleichwertig hinsichtlich dessen, was sie auswählen:

```css
@scope (.feature) {
  img { ... }

  :scope img { ... }

  & img { ... }
}
```

### Anmerkungen zur Verwendung von selektierten Selektoren

- Ein scope limit kann `:scope` verwenden, um eine spezifische Beziehungsanforderung zwischen dem scope limit und dem root zu spezifizieren. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) { ... }
  ```

- Ein scope limit kann Elemente außerhalb des scope root mit `:scope` referenzieren. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) { ... }
  ```

- Scoped style Regeln können den Teilbaum nicht verlassen. Auswahlen wie `:scope + p` sind ungültig, weil diese Auswahl außerhalb des Teilbaums liegen würde.

- Es ist völlig valide, den scope root und das limit als Selektorliste zu definieren, in welchem Fall mehrere Bereiche definiert werden. Im folgenden Beispiel werden die Stile auf jedes `<img>` innerhalb eines `<section>` mit einer Klasse von `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es in einem `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Das Einschließen eines Regelwerks innerhalb eines `@scope` Blocks beeinflusst nicht die Spezifität seines Selektors, unabhängig von den innerhalb des scope root und limit verwendeten Selektoren. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie sich jedoch entscheiden, die `:scope` Pseudo-Klasse ausdrücklich Ihren scoped Selektoren voranzustellen, müssen Sie dies beim Berechnen ihrer Spezifität berücksichtigen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Bei der Verwendung des `&` Selektors innerhalb eines `@scope` Blocks repräsentiert `&` den scope root Selektor; es wird intern als dieser Selektor innerhalb einer {{cssxref(":is", ":is()")}} Pseudo-Klassenfunktion berechnet. Zum Beispiel, in:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` ist gleichwertig zu `:is(figure, #primary) img`. Da `:is()` die Spezifität seines spezifischsten Arguments (`#primary` in diesem Fall) übernimmt, ist die Spezifität des scoped `& img` Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

### Der Unterschied zwischen `:scope` und `&` innerhalb von `@scope`

`:scope` repräsentiert den erfassten scope root, während `&` den Selektor repräsentiert, der verwendet wird, um den scope root zu erfassen. Daher ist es möglich, `&` mehrmals zu verketten. Sie können `:scope` jedoch nur einmal verwenden — Sie können keinen scope root innerhalb eines scope root erfassen.

```css
@scope (.feature) {
  /* Selects a .feature inside the matched root .feature */
  & & { ... }

  /* Doesn't work */
  :scope :scope { ... }
}
```

### Wie `@scope` Konflikte gelöst werden

`@scope` fügt ein neues Kriterium zur [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade) hinzu: **Scoping-Nähe**. Dies besagt, dass, wenn zwei Bereiche widersprüchliche Styles haben, der Stil angewendet wird, der die geringste Anzahl von Sprüngen entlang der DOM-Baum-Hierarchie zum scope root hat. Lassen Sie uns ein Beispiel betrachten, um zu sehen, was das bedeutet.

Nehmen Sie den folgenden HTML-Auszug, in dem unterschiedlich thematisierte Karten ineinander verschachtelt sind:

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

Wenn Sie das Thema CSS so schreiben würden, hätten Sie ein Problem:

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

Der innerste Absatz soll schwarz gefärbt sein, da er sich innerhalb einer Karte im hellen Thema befindet. Er wird jedoch sowohl von `.light-theme p` als auch `.dark-theme p` angesprochen. Da die `.dark-theme p` Regel später in der Quellreihenfolge erscheint, wird sie angewendet, und der Absatz wird fälschlicherweise weiß eingefärbt.

Um dies zu beheben, können Sie `@scope` folgendermaßen verwenden:

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

Nun ist der innerste Absatz korrekt schwarz eingefärbt. Dies liegt daran, dass er nur eine Dom Baum-Hierarchiestufe vom `.light-theme` scope root entfernt ist, aber zwei Stufen vom `.dark-theme` scope root entfernt. Daher gewinnt der helle Stil.

> [!NOTE]
> Scoping-Nähe übertrumpft die Quellreihenfolge, wird aber selbst von anderen, höher priorisierten Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Ebenen](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/Specificity) übertroffen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von scope roots

In diesem Beispiel verwenden wir zwei separate `@scope` Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme` und `.dark-scheme` Klasse abzugleichen. Beachten Sie, wie `:scope` verwendet wird, um die scope roots selbst auszuwählen und zu gestalten. In diesem Beispiel sind die scope roots die {{htmlelement("div")}} Elemente, auf die die Klassen angewendet werden.

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

Der obige Code rendert wie folgt:

{{ EmbedLiveSample("Basic style inside scope roots", "100%", "150") }}

### Scope roots und scope limits

In diesem Beispiel haben wir einen HTML-Auszug, der die DOM-Struktur abgleicht, die wir bereits im [Beschreibung](#beschreibung) Abschnitt besprochen haben. Diese Struktur stellt eine typische Artikelzusammenfassung dar. Die Schlüsselelemente sind die {{htmlelement("img")}} Elemente, die auf verschiedenen Ebenen in der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist es, zu zeigen, wie ein scope root und limit verwendet werden kann, um `<img>` Elemente zu gestalten, beginnend bei der Spitze der Hierarchie, jedoch nur bis zu (und nicht einschließlich) dem `<img>` innerhalb des {{htmlelement("figure")}} Elements — in der eigentlichen Schaffung eines Donut-Bereichs.

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

In unserem CSS haben wir zwei `@scope` Blöcke:

- Der erste `@scope` Block definiert seine scope root als Elemente mit einer Klasse von `.feature` (in diesem Fall nur das äußere `<div>`), was zeigt, wie `@scope` verwendet werden kann, um ein spezifisches HTML-Subset zu gestalten.
- Der zweite `@scope` Block definiert ebenfalls seine scope root als Elemente mit einer Klasse von `.feature`, aber zusätzlich definiert er ein scope limit von `figure`. Dies stellt sicher, dass die enthaltenen Regelmengen nur auf übereinstimmende Elemente innerhalb der scope root (`<div class="figure"> ... </div>` in diesem Fall) angewandt werden, die **nicht** innerhalb nachgeordneter `<figure>` Elemente verschachtelt sind. Dieser `@scope` Block enthält eine einzelne Regelmenge, die `<img>` Elemente mit einem dicken schwarzen Rand und einer goldenen Hintergrundfarbe gestaltet.

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

Im gerenderten Code beachten Sie, wie alle `<img>` Elemente mit dem dicken Rand und der goldenen Hintergrundfarbe gestaltet sind, mit Ausnahme desjenigen innerhalb des `<figure>` Elements (als "My infographic" bezeichnet).

{{ EmbedLiveSample("Scope roots and scope limits", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Beschränken Sie die Reichweite Ihrer Selektoren mit der CSS `@scope` At-Regel](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
