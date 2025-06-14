---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{CSSRef}}

Die **`@scope`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, Elemente in spezifischen DOM-Subtrees auszuwählen. Damit können Sie Elemente präzise anvisieren, ohne übermäßig spezifische Selektoren zu schreiben, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu koppeln.

In JavaScript kann auf `@scope` über die CSS-Objektmodell-Schnittstelle [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) zugegriffen werden.

## Syntax

Die `@scope` At-Regel enthält ein oder mehrere Regeln (genannt **scoped style rules\***) und definiert einen Geltungsbereich, in dem sie auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block innerhalb Ihres CSS, in welchem Fall es einen Präambel-Abschnitt enthält, der **scope root** und optionale **scope limit** Selektoren beinhaltet — diese definieren die oberen und unteren Grenzen des Geltungsbereichs.

   ```css
   @scope (scope root) to (scope limit) {
     /* … */
   }
   ```

2. Als Inline-Stile, die innerhalb eines {{htmlelement("style")}} Elements in Ihrem HTML enthalten sind, in welchem Fall der Präambel-Abschnitt weggelassen wird und das umschlossene Regelwerk automatisch auf das umschließende Elternelement des `<style>` Elements beschränkt wird.

   ```html
   <parent-element>
     <style>
       @scope {
         /* rulesets */
       }
     </style>
   </parent-element>
   ```

   Es ist auch möglich, ein Inline-`@scope` mit einem scope limit-Selektor zu kombinieren, wie in `@scope to (scope limit) { ... }`.

## Beschreibung

Ein komplexes Webdokument könnte Komponenten wie Header, Footer, Nachrichtenartikel, Karten, Mediaplayer, Anzeigen und mehr enthalten. Mit zunehmender Komplexität wird das effektive Verwalten der Stile für diese Komponenten zu einem größeren Anliegen, und effektives Scoping von Stilen hilft uns, diese Komplexität zu bewältigen. Betrachten wir den folgenden DOM-Baum:

```plain
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

- Schreiben Sie einen Selektor wie `.feature > .article-body > img`. Das hat jedoch eine hohe Spezifität und ist schwer zu überschreiben und auch eng an die DOM-Struktur gekoppelt. Wenn sich Ihre Markup-Struktur in Zukunft ändert, müssen Sie möglicherweise Ihr CSS neu schreiben.
- Schreiben Sie etwas weniger Spezifisches wie `.article-body img`. Allerdings wählt das alle Bilder innerhalb des `section` aus.

Hier ist `@scope` nützlich. Es erlaubt Ihnen, einen präzisen Geltungsbereich zu definieren, innerhalb dessen Ihre Selektoren Elemente gezielt anvisieren dürfen. Zum Beispiel, Sie könnten das oben genannte Problem mit einem eigenständigen `@scope` Block wie folgt lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body` scope root-Selektor definiert die obere Grenze des DOM-Baum-Geltungsbereichs, in welchem das Regelwerk angewendet wird, und der `figure` scope limit-Selektor definiert die untere Grenze. Folglich werden nur {{htmlelement("img")}} Elemente innerhalb eines `<section>` mit einer Klasse von `article-body`, aber nicht innerhalb von {{htmlelement("figure")}} Elementen ausgewählt.

> [!NOTE]
> Diese Art von Scoping — mit einer oberen und unteren Grenze — wird allgemein als **Donut-Geltungsbereich** bezeichnet.

Die obere Grenze des Geltungsbereichs ist inklusiv und die untere Grenze ist exklusiv. Um dieses Verhalten zu ändern, können Sie entweder den Selektor durch einen universellen Kind-Selektor kombinieren. Zum Beispiel, `@scope (scope root) to (scope limit > *)` würde beide Grenzen inklusiv machen, `@scope (scope root > *) to (scope limit)` würde beide Grenzen exklusiv machen, während `@scope (scope root > *) to (scope limit > *)` eine exklusive obere und eine inklusive untere Grenze geben würde.

Wenn Sie alle Bilder innerhalb eines `<section>` mit einer Klasse von `article-body` auswählen möchten, können Sie das scope limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope` Block inline innerhalb eines `<style>` Elements einfügen, das wiederum innerhalb des `<section>` mit einer Klasse von `article-body` liegt:

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
> Es ist wichtig zu verstehen, dass, während `@scope` Ihnen erlaubt, die Anwendung von Selektoren auf spezifische DOM-Subtrees zu isolieren, es nicht die angewendeten Stile vollständig innerhalb dieser Subtrees isoliert. Dies ist am auffälligsten bei der Vererbung — Eigenschaften, die von Kindern geerbt werden (zum Beispiel {{cssxref("color")}} oder {{cssxref("font-family")}}) werden immer noch vererbt, über das gesetzte scope limit hinaus.

### Die `:scope` Pseudoklasse

Im Kontext eines `@scope` Blocks repräsentiert die {{cssxref(":scope")}} Pseudoklasse den scope root — sie bietet eine einfache Möglichkeit, Stile auf den scope root selbst anzuwenden, von innerhalb des Geltungsbereichs:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Tatsächlich wird `:scope` implizit allen scoped style rules vorangestellt. Wenn Sie möchten, können Sie ausdrücklich `:scope` voranstellen oder den [nesting](/de/docs/Web/CSS/CSS_nesting) Selektor (`&`) voranstellen, um den gleichen Effekt zu erzielen, falls Sie diese Darstellungen leichter verständlich finden.

Die drei Regeln im folgenden Block sind alle gleichwertig in dem, was sie auswählen:

```css
@scope (.feature) {
  img {
    /* … */
  }

  :scope img {
    /* … */
  }

  & img {
    /* … */
  }
}
```

### Hinweise zur Verwendung von scoped Selektoren

- Ein scope limit kann `:scope` verwenden, um eine spezifische Beziehungsanforderung zwischen dem scope limit und root festzulegen. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) {
    /* … */
  }
  ```

- Ein scope limit kann Elemente außerhalb des scope root unter Verwendung von `:scope` referenzieren. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) {
    /* … */
  }
  ```

- Scoped style rules können den Subtree nicht verlassen. Selektionen wie `:scope + p` sind ungültig, da diese Auswahl außerhalb des Subtrees liegen würde.

- Es ist völlig gültig, den scope root und das limit als Selektorliste zu definieren, in welchem Fall mehrere Scopes definiert werden. Im folgenden Beispiel werden die Stile auf jedes `<img>` innerhalb eines `<section>` mit einer Klasse von `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es innerhalb eines `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Das Einfügen eines Regelwerks innerhalb eines `@scope` Blocks beeinflusst nicht die Spezifität seines Selektors, unabhängig von den Selektoren, die innerhalb des scope root und limit verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img {
    /* … */
  }
}
```

Wenn Sie sich jedoch entscheiden, die `:scope` Pseudoklasse ausdrücklich Ihren scoped Selektoren voranzustellen, müssen Sie sie bei der Berechnung ihrer Spezifität berücksichtigen. `:scope`, wie alle regulären Pseudoklassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
    /* … */
  }
}
```

Bei der Verwendung des `&` Selektors innerhalb eines `@scope` Blocks repräsentiert `&` den scope root-Selektor; es wird intern als dieser Selektor berechnet, eingerahmt in eine {{cssxref(":is", ":is()")}} Pseudoklassefunktion. Zum Beispiel, in:

```css
@scope (figure, #primary) {
  & img {
    /* … */
  }
}
```

`& img` ist äquivalent zu `:is(figure, #primary) img`. Da `:is()` die Spezifität seines spezifischsten Arguments (`#primary` in diesem Fall) anwendet, beträgt die Spezifität des scoped `& img` Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

### Der Unterschied zwischen `:scope` und `&` innerhalb von `@scope`

`:scope` repräsentiert den zugeordneten scope root, während `&` den Selektor repräsentiert, der verwendet wird, um den scope root zuzuordnen. Daher ist es möglich, `&` mehrere Male zu verketten. Sie können `:scope` jedoch nur einmal verwenden — Sie können nicht einen scope root innerhalb eines scope root zuordnen.

```css
@scope (.feature) {
  /* Selects a .feature inside the matched root .feature */
  & & {
    /* … */
  }

  /* Doesn't work */
  :scope :scope {
    /* … */
  }
}
```

### Wie `@scope` Konflikte aufgelöst werden

`@scope` fügt ein neues Kriterium zur [CSS Cascade](/de/docs/Web/CSS/CSS_cascade) hinzu: **scoping proximity**. Dies besagt, dass wenn zwei Scopes widersprüchliche Stile haben, der Stil angewendet wird, der die geringste Anzahl von Sprüngen in der DOM-Baum-Hierarchie zum scope root aufweist. Lassen Sie uns ein Beispiel betrachten, um zu sehen, was das bedeutet.

Nehmen Sie den folgenden HTML-Ausschnitt, in dem unterschiedlich gestaltete Karten ineinander verschachtelt sind:

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

Wenn Sie das Theme-CSS so schreiben würden, hätten Sie ein Problem:

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

Der innerste Absatz soll schwarz gefärbt sein, weil er in einer Karte mit hellem Thema enthalten ist. Allerdings wird er sowohl von `.light-theme p` als auch von `.dark-theme p` angesprochen. Da die Regel `.dark-theme p` später in der Quellreihenfolge erscheint, wird sie angewendet und der Absatz wird fälschlicherweise weiß gefärbt.

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

Jetzt ist der innerste Absatz korrekt schwarz gefärbt. Dies liegt daran, dass er nur eine Hierarchieebene im DOM-Baum vom `.light-theme` scope root entfernt ist, aber zwei Ebenen vom `.dark-theme` scope root entfernt ist. Daher gewinnt der helle Stil.

> [!NOTE]
> Scoping proximity überlagert die Quellreihenfolge, wird jedoch selbst durch andere, höher priorisierte Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) überschrieben.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von Scope-Roots

In diesem Beispiel verwenden wir zwei separate `@scope` Blocks, um Links innerhalb von Elementen mit einer `.light-scheme` und `.dark-scheme` Klasse abzugleichen. Beachten Sie, wie `:scope` verwendet wird, um die scope roots selbst auszuwählen und zu stilisieren. In diesem Beispiel sind die scope roots die {{htmlelement("div")}} Elemente, denen die Klassen zugewiesen sind.

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

Der obige Code wird folgendermaßen gerendert:

{{ EmbedLiveSample("Grundlegender Stil innerhalb von Scope-Roots", "100%", "150") }}

### Scope-Roots und Scope-Limits

In diesem Beispiel haben wir einen HTML-Ausschnitt, der der DOM-Struktur entspricht, über die wir vorher im Abschnitt [Beschreibung](#beschreibung) gesprochen haben. Diese Struktur stellt eine typische Artikelzusammenfassung dar. Die Schlüsselpunkte, die zu beachten sind, sind die {{htmlelement("img")}} Elemente, die auf verschiedenen Ebenen in der Struktur geschachtelt sind.

Das Ziel dieses Beispiels ist es zu zeigen, wie man einen scope root und ein limit verwendet, um `<img>` Elemente von oben in der Hierarchie zu stilisieren, aber nur so weit herunter (und das `<img>` im {{htmlelement("figure")}} Element nicht einschließend) — im Effekt einen Donut-Geltungsbereich erstellend.

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

In unserem CSS haben wir zwei `@scope` Blocks:

- Der erste `@scope` Block definiert seinen scope root als Elemente mit einer Klasse von `.feature` (in diesem Fall nur das äußere `<article>`), was zeigt, wie `@scope` verwendet werden kann, um einem spezifischen HTML-Subset ein Thema zu geben.
- Der zweite `@scope` Block definiert ebenfalls seinen scope root als Elemente mit einer Klasse von `.feature`, aber auch ein scope limit von `figure`. Dies stellt sicher, dass eingeschlossene Regelwerke nur auf übereinstimmende Elemente innerhalb des scope root (`<article class="feature"> ... </article>` in diesem Fall) angewendet werden, die NICHT in abgeleiteten `<figure>` Elementen verschachtelt sind. Dieser `@scope` Block enthält ein einzelnes Regelwerk, das `<img>` Elemente mit einem dicken schwarzen Rand und einer goldenen Hintergrundfarbe stilisiert.

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

Im gerenderten Code ist zu beachten, dass alle `<img>` Elemente mit dem dicken Rand und der goldenen Hintergrundfarbe gestylt sind, außer demjenigen im `<figure>` Element (beschriftet mit "Mein Infografik").

{{ EmbedLiveSample("Scope-Roots und Scope-Limits", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Limit the reach of your selectors with the CSS `@scope` at-rule](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
