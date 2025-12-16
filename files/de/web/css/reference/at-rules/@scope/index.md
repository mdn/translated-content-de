---
title: "@scope"
slug: Web/CSS/Reference/At-rules/@scope
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`@scope`**-[CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht es Ihnen, Elemente in bestimmten DOM-Unterbäumen auszuwählen und dabei Elemente präzise zu adressieren, ohne übermäßig spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind und ohne Ihre Selektoren zu eng an die DOM-Struktur zu koppeln.

In JavaScript kann `@scope` über die CSS-Objektmodell-Schnittstelle [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) verwendet werden.

## Syntax

Die `@scope`-At-Regel enthält einen oder mehrere Regelsätze (genannt **scoped style rules**) und definiert einen Bereich, in dem diese auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block innerhalb Ihres CSS, wobei es einen Vorlaufabschnitt enthält, der **Scope-Root**- und optionale **Scope-Limit**-Selektoren umfasst — diese definieren die oberen und unteren Grenzen des Scopes.

   ```css
   @scope (scope root) to (scope limit) {
     /* … */
   }
   ```

2. Als Inline-Stile innerhalb eines {{htmlelement("style")}}-Elements in Ihrem HTML, in diesem Fall wird der Vorlauf weggelassen und der eingeschlossene Regelsatz automatisch auf das umschließende Elternelement des `<style>`-Elements begrenzt.

   ```html
   <parent-element>
     <style>
       @scope {
         /* rulesets */
       }
     </style>
   </parent-element>
   ```

   Es ist auch möglich, ein Inline-`@scope` mit einem Scope-Limit-Selektor zu kombinieren, wie in `@scope to (scope limit) { ... }`.

## Beschreibung

Ein komplexes Webdokument kann Komponenten wie Header, Footer, Nachrichtenartikel, Karten, Mediaplayer, Anzeigen und andere enthalten. Mit zunehmender Komplexität wird das effektive Management der Stilgestaltung dieser Komponenten immer wichtiger, und eine effektive Bereichseingrenzung der Stile hilft uns, diese Komplexität zu bewältigen. Betrachten wir den folgenden DOM-Baum:

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

Wenn Sie das {{htmlelement("img")}}-Element innerhalb des {{htmlelement("section")}} mit einer Klasse von `article-body` auswählen möchten, könnten Sie Folgendes tun:

- Schreiben Sie einen Selektor wie `.feature > .article-body > img`. Das hat jedoch eine hohe Spezifität, ist schwer zu überschreiben und ist auch eng an die DOM-Struktur gekoppelt. Wenn sich Ihre Markup-Struktur in der Zukunft ändert, müssten Sie Ihr CSS möglicherweise neu schreiben.
- Schreiben Sie etwas weniger Spezifisches wie `.article-body img`. Das würde jedoch alle Bilder innerhalb des `section` auswählen.

Hier ist `@scope` nützlich. Es ermöglicht Ihnen, einen präzisen Bereich zu definieren, innerhalb dessen Ihre Selektoren Elemente adressieren dürfen. Zum Beispiel könnten Sie das oben genannte Problem mit einem eigenständigen `@scope`-Block wie dem folgenden lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body`-Scope-Root-Selektor definiert die obere Grenze des DOM-Bereiches, in dem der Regelsatz angewendet wird, und der `figure`-Scope-Limit-Selektor definiert die untere Grenze. Dadurch werden nur {{htmlelement("img")}}-Elemente innerhalb eines `<section>` mit einer Klasse von `article-body`, aber nicht innerhalb von {{htmlelement("figure")}}-Elementen, ausgewählt.

> [!NOTE]
> Diese Art der Begrenzung — mit einer oberen und unteren Grenze — wird häufig als **Donut-Scope** bezeichnet.

Die obere Grenze des Scopes ist inklusive und die untere Grenze exklusive. Um dieses Verhalten zu ändern, können Sie jeden Selektor mit einem universellen Kind-Selektor kombinieren. Zum Beispiel würde `@scope (scope root) to (scope limit > *)` beide Grenzen inklusiv machen, `@scope (scope root > *) to (scope limit)` würde beide Grenzen exklusiv machen, während `@scope (scope root > *) to (scope limit > *)` eine exklusive obere Grenze und eine inklusive untere Grenze ergeben würde.

Wenn Sie alle Bilder innerhalb eines `<section>` mit einer Klasse von `article-body` auswählen möchten, können Sie das Scope-Limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope`-Block inline innerhalb eines `<style>`-Elements einfügen, das wiederum innerhalb des `<section>` mit einer Klasse von `article-body` ist:

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
> Es ist wichtig zu verstehen, dass, obwohl `@scope` es Ihnen ermöglicht, die Anwendung von Selektoren auf spezifische DOM-Unterbäume zu isolieren, es die angewendeten Stile nicht vollständig auf diese Unterbäume isoliert. Dies ist am auffälligsten bei Vererbung — Eigenschaften, die von den Kindern geerbt werden (zum Beispiel {{cssxref("color")}} oder {{cssxref("font-family")}}), werden jenseits eines festgelegten Scope-Limits weiterhin vererbt.

### `:scope` Pseudo-Klasse innerhalb von `@scope`-Blöcken

Im Kontext eines `@scope`-Blocks bietet die {{cssxref(":scope")}}-Pseudo-Klasse eine bequeme Möglichkeit, direkt Stile auf den Scope-Root anzuwenden, wie folgt:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Hier sind einige Überlegungen für `:scope` innerhalb von `@scope`-Blöcken:

- `:scope` fügt eine Klassenebenenspezifität hinzu (siehe [Spezifität in @scope](#specificity_in_scope) für Details).

- Ein Scope-Limit kann `:scope` verwenden, um eine bestimmte Beziehunganforderung zwischen dem Scope-Limit und dem Root festzulegen. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) {
    /* … */
  }
  ```

- Ein Scope-Limit kann Elemente außerhalb des Scope-Roots mit `:scope` referenzieren. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) {
    /* … */
  }
  ```

- Abgegrenzte Stilregeln können den Unterbaum nicht verlassen. Selektionen wie `:scope + p` sind ungültig, da diese Selektion außerhalb des Unterbaums wäre.

- Es ist völlig gültig, den Scope-Root und das Limit als Selektorliste zu definieren, in welchem Fall mehrere Scopes definiert werden. Im folgenden Beispiel werden die Stile auf jedes `<img>` innerhalb eines `<section>` mit einer Klasse von `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es in einem `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Innerhalb einer `@scope`-Regel verhalten sich sowohl nackte Selektoren als auch der [`&`](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)-Nestselektor so, als ob `:where(:scope)` dem Selektor vorangestellt wäre.
Da {{cssxref(":where()")}} keine [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) hat, fügen nackte Selektoren und `&` kein Gewicht hinzu. Das Spezifitätsgewicht wird durch den Rest des Selektors bestimmt.
Zum Beispiel ist die Spezifität des `& img`-Selektors gleich der Spezifität von `:where(:scope) img` (0-0-1).

> [!WARNING]
> Die Spezifität von `&` innerhalb von `@scope`-Blöcken wird je nach Browser-Engine und Veröffentlichungsversion unterschiedlich behandelt.
> Überprüfen Sie [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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

Im Gegensatz dazu wählt die explizite Verwendung von `:scope` den Scope-Root aus und fügt eine Klassenebenenspezifität (0-1-0) hinzu, da `:scope` eine [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist.
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

`@scope` fügt der [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade) ein neues Kriterium hinzu: **Scoping-Nähe**. Dies besagt, dass, wenn zwei Scopes widersprüchliche Stile haben, der Stil angewendet wird, der die geringste Anzahl von Sprüngen bis zum Scope-Root im DOM-Baum aufweist. Schauen wir uns ein Beispiel an, um zu sehen, was das bedeutet.

Betrachten Sie das folgende HTML-Snippet, in dem verschiedenartige Kartenthemen ineinander verschachtelt sind:

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

Wenn Sie das Thema-CSS auf folgende Weise schreiben, würden Sie Probleme bekommen:

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

Der innerste Absatz soll schwarz gefärbt sein, da er sich in einer Karte mit leichtem Thema befindet. Er wird jedoch sowohl von `.light-theme p` als auch von `.dark-theme p` angesprochen. Da die `.dark-theme p`-Regel später in der Quellreihenfolge erscheint, wird sie angewendet, und der Absatz wird fälschlicherweise weiß gefärbt.

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

Jetzt wird der innerste Absatz korrekt schwarz gefärbt. Dies liegt daran, dass er nur eine Ebene der DOM-Baum-Hierarchie von der `.light-theme`-Scope-Root entfernt ist, aber zwei Ebenen vom `.dark-theme`-Scope-Root entfernt. Daher gewinnt der helle Stil.

> [!NOTE]
> Scoping-Nähe übertrifft die Quellreihenfolge, wird jedoch von anderen, höher priorisierten Kriterien, wie [Wichtigkeit](/de/docs/Web/CSS/Reference/Values/important), [Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity), überschrieben.

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von Scope-Roots

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit den Klassen `.light-scheme` und `.dark-scheme` zu treffen. Beachten Sie, wie `:scope` verwendet wird, um die Scope-Roots selbst auszuwählen und zu gestalten. In diesem Beispiel sind die Scope-Roots die {{htmlelement("div")}}-Elemente, die die Klassen zugewiesen haben.

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

### Scope-Roots und Scope-Limits

In diesem Beispiel haben wir ein HTML-Snippet, das der in der [Beschreibung](#beschreibung) besprochenen DOM-Struktur entspricht. Diese Struktur stellt eine typische Artikelzusammenfassung dar. Die wichtigsten Merkmale sind die {{htmlelement("img")}}-Elemente, die auf verschiedenen Ebenen der Struktur verschachtelt sind.

Ziel dieses Beispiels ist es zu zeigen, wie ein Scope-Root und ein Limit verwendet werden, um `<img>`-Elemente ab der Spitze der Hierarchie zu gestalten, jedoch nur bis zu (und nicht einschließlich) dem `<img>` innerhalb des {{htmlelement("figure")}}-Elements — so entsteht effektiv ein Donut-Scope.

#### HTML

```html
<article class="feature">
  <section class="article-hero">
    <h2>Article heading</h2>
    <img alt="image" src="" />
  </section>

  <section class="article-body">
    <h3>Article subheading</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod
      consectetur leo, nec eleifend quam volutpat vitae. Duis quis felis at
      augue imperdiet aliquam. Morbi at felis et massa mattis lacinia. Cras
      pharetra velit nisi, ac efficitur magna luctus nec.
    </p>

    <img alt="image" src="" />

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <figure>
      <img alt="image" src="" />
      <figcaption>My infographic</figcaption>
    </figure>
  </section>

  <footer>
    <p>Written by Chris Mills.</p>
    <img alt="image" src="" />
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

- Der erste `@scope`-Block definiert sein Scope-Root als Elemente mit einer Klasse von `.feature` (in diesem Fall nur das äußere `<article>`), was demonstriert, wie `@scope` verwendet werden kann, um ein spezifisches HTML-Subset zu gestalten.
- Der zweite `@scope`-Block definiert ebenfalls sein Scope-Root als Elemente mit einer Klasse von `.feature`, legt jedoch auch ein Scope-Limit von `figure` fest. Dies stellt sicher, dass die enthaltenen Regelsätze nur auf übereinstimmende Elemente innerhalb des Scope-Roots angewendet werden (`<article class="feature"> ... </article>` in diesem Fall), die nicht innerhalb nachfolgender `<figure>`-Elemente verschachtelt sind. Dieser `@scope`-Block enthält einen einzelnen Regelsatz, der `<img>`-Elemente mit einem dicken schwarzen Rand und einer goldenen Hintergrundfarbe gestaltet.

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

Im gerenderten Code ist zu beachten, dass alle `<img>`-Elemente mit dem dicken Rand und dem goldenen Hintergrund gestaltet werden, außer das innerhalb des `<figure>`-Elements (beschriftet "Meine Infografik").

{{EmbedLiveSample("Scope roots and scope limits", "100%", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Definition des `&`-Selektors in einer `@scope`-Regel](https://css.oddbird.net/scope/parent-selector/) auf css.oddbird.net (2025)
- [Begrenzen Sie die Reichweite Ihrer Selektoren mit der CSS-`@scope`-Regel](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
