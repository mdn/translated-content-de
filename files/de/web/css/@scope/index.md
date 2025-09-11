---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: 943a9ba8905fbdb3966f0dd6d49f7652e3de94b3
---

Die **`@scope`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, Elemente in bestimmten DOM-Unterbäumen zu selektieren und Elemente präzise zu targetieren, ohne übermäßig spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu stark an die DOM-Struktur zu koppeln.

In JavaScript kann `@scope` über die CSS-Objektmodell-Schnittstelle [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) zugegriffen werden.

## Syntax

Die `@scope` At-Regel enthält einen oder mehrere Regelsets (genannt **scoped style rules**) und definiert einen Bereich, in dem sie auf die ausgewählten Elemente angewendet werden sollen. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block in Ihrem CSS, in diesem Fall enthält er einen Vorspann, der die **scope root**- und optionalen **scope limit**-Selektoren beinhaltet — diese definieren die oberen und unteren Grenzen des Bereichs.

   ```css
   @scope (scope root) to (scope limit) {
     /* … */
   }
   ```

2. Als Inline-Stile, die in einem {{htmlelement("style")}}-Element in Ihrem HTML enthalten sind, in diesem Fall wird der Vorspann weggelassen und das eingeschlossene Regelset wird automatisch auf das umschließende Elternelement des `<style>`-Elements angewendet.

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

Ein komplexes Web-Dokument kann Komponenten wie Header, Footer, Nachrichtenartikel, Karten, Mediaplayer, Anzeigen und andere enthalten. Mit zunehmender Komplexität wird das effektive Management der Stilisierung dieser Komponenten wichtiger, und eine effektive Bereichsdefinition der Stile hilft uns, diese Komplexität zu bewältigen. Betrachten wir den folgenden DOM-Baum:

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

Wenn Sie das {{htmlelement("img")}}-Element innerhalb des {{htmlelement("section")}} mit der Klasse `article-body` auswählen möchten, könnten Sie Folgendes tun:

- Einen Selektor schreiben wie `.feature > .article-body > img`. Dies hat jedoch eine hohe Spezifität, so dass es schwer zu überschreiben ist und auch stark an die DOM-Struktur gekoppelt ist. Wenn sich Ihre Markup-Struktur in der Zukunft ändert, müssen Sie möglicherweise Ihr CSS neu schreiben.
- Etwas weniger Spezifisches schreiben wie `.article-body img`. Dies würde jedoch alle Bilder innerhalb des `section` auswählen.

Hier ist `@scope` nützlich. Es ermöglicht Ihnen, einen präzisen Bereich zu definieren, innerhalb dessen Ihre Selektoren Elemente anvisieren können. Zum Beispiel könnten Sie das obige Problem mit einem eigenständigen `@scope` Block wie dem folgenden lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body` scope root-Selektor definiert die obere Grenze des DOM-Baumbereichs, in dem das Regelset angewendet wird, und der `figure` scope limit-Selektor definiert die untere Grenze. Als Ergebnis werden nur {{htmlelement("img")}}-Elemente innerhalb eines `<section>` mit der Klasse `article-body`, aber nicht innerhalb von {{htmlelement("figure")}}-Elementen ausgewählt.

> [!NOTE]
> Diese Art des Scopings — mit einer oberen und unteren Grenze — wird häufig als **donut scope** bezeichnet.

Die obere Grenze des Bereichs ist inklusive und die untere Grenze ist exklusiv. Um dieses Verhalten zu ändern, können Sie jeden Selektor mit einem universellen Kind-Selektor kombinieren. Zum Beispiel würde `@scope (scope root) to (scope limit > *)` beide Grenzen inklusive machen, `@scope (scope root > *) to (scope limit)` würde beide Grenzen exklusiv machen, während `@scope (scope root > *) to (scope limit > *)` eine exklusive obere Grenze und eine inklusive untere Grenze geben würde.

Wenn Sie alle Bilder innerhalb eines `<section>` mit der Klasse `article-body` auswählen möchten, können Sie das scope limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope` Block inline in ein `<style>`-Element einfügen, das wiederum innerhalb des `<section>` mit der Klasse `article-body` befindet:

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
> Es ist wichtig zu verstehen, dass `@scope` es Ihnen zwar ermöglicht, die Anwendung von Selektoren auf bestimmte DOM-Unterbäume zu isolieren, es jedoch nicht die angewandten Stile vollständig innerhalb dieser Unterbäume isoliert. Dies ist am deutlichsten bei der Vererbung zu erkennen — Eigenschaften, die von Kindern geerbt werden (zum Beispiel {{cssxref("color")}} oder {{cssxref("font-family")}}) werden immer noch vererbt, über alle gesetzten Bereichsgrenzen hinaus.

### `:scope` Pseudo-Klasse innerhalb von `@scope` Blöcken

Im Kontext eines `@scope` Blocks bietet die {{cssxref(":scope")}} Pseudo-Klasse eine bequeme Möglichkeit, direkt Stile auf die scope root anzuwenden, wie folgt:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Hier sind einige Überlegungen zu `:scope` innerhalb von `@scope` Blöcken:

- `:scope` fügt eine Spezifität auf Klassenebene hinzu (siehe [Spezifität in @scope](#specificity_in_scope) für Details).

- Ein scope limit kann `:scope` verwenden, um eine spezifische Beziehungsbedingung zwischen dem scope limit und der root anzugeben. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) {
    /* … */
  }
  ```

- Ein scope limit kann mit `:scope` Elemente außerhalb der scope root referenzieren. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) {
    /* … */
  }
  ```

- Gezielte Stilregeln können den Unterbaum nicht verlassen. Selektionen wie `:scope + p` sind ungültig, weil diese Selektion außerhalb des Unterbaums liegt.

- Es ist völlig in Ordnung, die scope root und das limit als Selektorliste zu definieren, in diesem Fall werden mehrere Bereiche definiert. Im folgenden Beispiel werden die Stile auf jedes `<img>` innerhalb eines `<section>` mit einer Klasse von `article-hero` oder `article-body` angewendet, aber nicht, wenn es in einem `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Innerhalb einer `@scope` Regel verhalten sich sowohl nackte Selektoren als auch der [`&`](/de/docs/Web/CSS/Nesting_selector) Verschachtelungsselektor, als ob `:where(:scope)` dem Selektor vorangestellt wäre.
Da {{cssxref(":where", ":where()")}} null [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat, fügen nackte Selektoren und `&` kein Gewicht hinzu. Das Spezifitätsgewicht wird durch den Rest des Selektors bestimmt.
Beispielsweise ist die Spezifität des `& img` Selektors gleich der Spezifität von `:where(:scope) img` (0-0-1).

> [!WARNING]
> Die Spezifität von `&` innerhalb von `@scope` Blöcken wird je nach Browser-Engine und Release-Version unterschiedlich gehandhabt.
> Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für Details.

In beiden Fällen im folgenden Codeblock kommt die einzige Spezifität von `img`:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img {
    /* … */
  }

  /* & img also has a specificity of 0-0-1 */
  & img {
    /* … */
  }
}
```

Im Gegensatz dazu wählt `:scope` explizit die scope root aus und fügt Spezifität auf Klassenebene hinzu (0-1-0), da `:scope` eine [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) ist.
Im folgenden Codeblock hat `:scope img` eine Spezifität von 0-1-1:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
    /* … */
  }
}
```

### Wie `@scope`-Konflikte gelöst werden

`@scope` fügt der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade) ein neues Kriterium hinzu: **Scoping-Nähe**. Dies besagt, dass wenn zwei Bereiche widersprüchliche Stile haben, der Stil angewendet wird, der die kleinste Anzahl von Sprüngen im DOM-Baum-Hierarchie zur scope root hat. Schauen wir uns ein Beispiel an, um zu sehen, was das bedeutet.

Nehmen Sie das folgende HTML-Schnipsel, bei dem unterschiedlich gestaltete Karten ineinander verschachtelt sind:

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

Wenn Sie das Theme-CSS so schreiben würden, hätten Sie Probleme:

```css
.light-theme {
  background: #cccccc;
}

.dark-theme {
  background: #333333;
}

.light-theme p {
  color: black;
}

.dark-theme p {
  color: white;
}
```

Der innerste Absatz soll schwarz gefärbt sein, da er sich in einer Karte mit einem hellen Thema befindet. Er wird jedoch sowohl durch `.light-theme p` als auch `.dark-theme p` getroffen. Da die `.dark-theme p` Regel später in der Quellreihenfolge erscheint, wird sie angewendet, und der Absatz wird fälschlicherweise weiß gefärbt.

Um dies zu beheben, können Sie `@scope` wie folgt verwenden:

```css
@scope (.light-theme) {
  :scope {
    background: #cccccc;
  }
  p {
    color: black;
  }
}

@scope (.dark-theme) {
  :scope {
    background: #333333;
  }
  p {
    color: white;
  }
}
```

Jetzt ist der innerste Absatz korrekt schwarz gefärbt. Dies liegt daran, dass er nur eine DOM-Baum-Hierarchieebene von der `.light-theme` scope root entfernt ist, aber zwei Ebenen von der `.dark-theme` scope root entfernt ist. Daher gewinnt der helle Stil.

> [!NOTE]
> Die Scoping-Nähe übertrifft die Quellreihenfolge, wird jedoch selbst von anderen, höher priorisierten Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) übertroffen.

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von Bereichswurzeln

In diesem Beispiel verwenden wir zwei separate `@scope` Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme` bzw. `.dark-scheme` Klasse abzugleichen. Beachten Sie, wie `:scope` verwendet wird, um die Bereichswurzeln selbst auszuwählen und ihnen Styling zu geben. In diesem Beispiel sind die Bereichswurzeln die {{htmlelement("div")}}-Elemente, die die Klassen an ihnen angewendet haben.

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

{{EmbedLiveSample("Basic style inside scope roots", "100%", "150")}}

### Bereichswurzeln und Bereichsgrenzen

In diesem Beispiel haben wir ein HTML-Snippet, das die DOM-Struktur abgleicht, über die wir früher im Abschnitt [Beschreibung](#beschreibung) gesprochen haben. Diese Struktur stellt eine typische Artikelzusammenfassung dar. Die wesentlichen Merkmale sind die {{htmlelement("img")}}-Elemente, die auf verschiedenen Ebenen in der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist es zu zeigen, wie man eine Bereichswurzel und Limits verwendet, um `<img>`-Elemente zu stylen, beginnend an der Spitze der Hierarchie, aber nur bis zu dem Punkt (und nicht einschließlich) des `<img>`-Elements innerhalb des {{htmlelement("figure")}}-Elements — effektiv einen Donut-Bereich zu erschaffen.

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

- Der erste `@scope` Block definiert seine Bereichswurzel als Elemente mit einer Klasse von `.feature` (in diesem Fall nur das äußere `<article>`), was zeigt, wie `@scope` verwendet werden kann, um einem spezifischen HTML-Subset ein Thema zuzuweisen.
- Der zweite `@scope` Block definiert auch seine Bereichswurzel als Elemente mit einer Klasse von `.feature`, definiert jedoch auch eine Bereichsgrenze von `figure`. Dies stellt sicher, dass die enthaltenen Regelsets nur auf übereinstimmende Elemente innerhalb der Bereichswurzel (in diesem Fall `<article class="feature"> ... </article>`) angewendet werden, die **nicht** innerhalb von Nachkommen-`<figure>`-Elementen verschachtelt sind. Dieser `@scope` Block enthält ein einziges Regelset, das `<img>`-Elemente mit einem dicken schwarzen Rand und einer goldenen Hintergrundfarbe stilisiert.

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

Im gerenderten Code beachten Sie, wie alle `<img>` Elemente mit dem dicken Rand und goldenen Hintergrund gestylt sind, außer dem einen innerhalb des `<figure>` Elements (beschriftet "Mein Schaubild").

{{EmbedLiveSample("Scope roots and scope limits", "100%", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Defining the `&` selector in a `@scope` rule](https://css.oddbird.net/scope/parent-selector/) auf css.oddbird.net (2025)
- [Limit the reach of your selectors with the CSS `@scope` at-rule](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
