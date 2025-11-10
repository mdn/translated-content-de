---
title: "@scope"
slug: Web/CSS/Reference/At-rules/@scope
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`@scope`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht es Ihnen, Elemente in bestimmten DOM-Subtrees auszuwählen. Dadurch können Elemente präzise ohne übermäßig spezifische Selektoren, die schwer zu überschreiben sind, und ohne eine enge Kopplung Ihrer Selektoren an die DOM-Struktur anvisiert werden.

In JavaScript kann `@scope` über die CSS-Objektmodell-Schnittstelle [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) zugegriffen werden.

## Syntax

Die `@scope` At-Regel enthält ein oder mehrere Regelsets (genannt **scoped style rules**) und definiert einen Anwendungsbereich, in dem sie auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block innerhalb Ihres CSS, wobei er einen Präambel-Abschnitt enthält, der **Scope-Root** und optionale **Scope-Limit**-Selektoren umfasst — diese definieren die oberen und unteren Grenzen des Bereichs.

   ```css
   @scope (scope root) to (scope limit) {
     /* … */
   }
   ```

2. Als Inline-Styles innerhalb eines {{htmlelement("style")}}-Elements in Ihrem HTML, wobei die Präambel weggelassen wird und das eingeschlossene Regelset automatisch auf das Eltern-Element des `<style>`-Elements beschränkt wird.

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

Ein komplexes Webdokument kann Komponenten wie Header, Footer, Nachrichtenartikel, Karten, Mediaplayer, Anzeigen und andere enthalten. Mit zunehmender Komplexität wird das effektive Management der Gestaltung dieser Komponenten wichtiger, und eine effektive Bereichsbegrenzung der Stile hilft, diese Komplexität zu bewältigen. Betrachten Sie den folgenden DOM-Baum:

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

Wenn Sie das {{htmlelement("img")}}-Element innerhalb des {{htmlelement("section")}} mit einer Klasse von `article-body` auswählen wollten, könnten Sie Folgendes tun:

- Einen Selektor wie `.feature > .article-body > img` schreiben. Dieser hat jedoch eine hohe Spezifität, ist schwer zu überschreiben und eng an die DOM-Struktur geknüpft. Wenn sich Ihre Markup-Struktur in Zukunft ändert, müssen Sie möglicherweise Ihr CSS umschreiben.
- Etwas weniger Spezifisches wie `.article-body img` schreiben. Das würde jedoch alle Bilder innerhalb des `section` auswählen.

Hier kommt `@scope` ins Spiel. Es ermöglicht Ihnen, einen genauen Bereich zu definieren, in dem Ihre Selektoren Elemente anvisieren können. Zum Beispiel könnten Sie das obige Problem mit einem eigenständigen `@scope`-Block wie dem folgenden lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der Scope-Root-Selektor `.article-body` definiert die obere Grenze des DOM-Baum-Bereichs, in dem das Regelset angewendet wird, und der Scope-Limit-Selektor `figure` definiert die untere Grenze. Als Ergebnis werden nur {{htmlelement("img")}}-Elemente innerhalb eines `<section>` mit einer Klasse von `article-body`, aber nicht innerhalb von {{htmlelement("figure")}}-Elementen ausgewählt.

> [!NOTE]
> Diese Art der Bereichsbegrenzung — mit einer oberen und unteren Grenze — wird allgemein als **Donut-Scope** bezeichnet.

Die obere Grenze des Scopes ist inklusive, und die untere Grenze ist exklusiv. Um dieses Verhalten zu ändern, können Sie beide Selektoren mit einem universellen Kindselektor kombinieren. Zum Beispiel würde `@scope (scope root) to (scope limit > *)` beide Grenzen inklusive machen, `@scope (scope root > *) to (scope limit)` würde beide Grenzen exklusiv machen, während `@scope (scope root > *) to (scope limit > *)` eine exklusive obere und eine inklusive untere Grenze ergibt.

Wenn Sie alle Bilder innerhalb eines `<section>` mit einer Klasse von `article-body` auswählen möchten, können Sie das Scope-Limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope`-Block inline innerhalb eines `<style>`-Elements einfügen, das wiederum innerhalb des `<section>` mit einer Klasse von `article-body` liegt:

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
> Es ist wichtig zu verstehen, dass `@scope` zwar die Anwendbarkeit von Selektoren auf bestimmte DOM-Subtrees isolieren kann, die angewandten Stile jedoch nicht vollständig innerhalb dieser Subtrees isoliert sind. Dies ist am deutlichsten bei der Vererbung zu bemerken — Eigenschaften, die von Kindern geerbt werden (z.B. {{cssxref("color")}} oder {{cssxref("font-family")}}), werden weiterhin über jedes festgelegte Scope-Limit hinaus geerbt.

### `:scope` Pseudo-Klasse innerhalb von `@scope`-Blöcken

Im Kontext eines `@scope`-Blocks bietet die {{cssxref(":scope")}} Pseudo-Klasse eine bequeme Möglichkeit, direkt Stile auf das Scope-Root anzuwenden, so dass:

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

- `:scope` fügt Klassenspezifität hinzu (siehe [Spezifität in @scope](#specificity_in_scope) für Details).

- Ein Scope-Limit kann `:scope` verwenden, um eine spezifische Beziehungsanforderung zwischen dem Scope-Limit und dem Root anzugeben. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) {
    /* … */
  }
  ```

- Ein Scope-Limit kann Elemente außerhalb des Scope-Roots über `:scope` referenzieren. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) {
    /* … */
  }
  ```

- Abgegrenzte Stilregeln können dem Subtree nicht entkommen. Auswahlen wie `:scope + p` sind ungültig, da diese Auswahl außerhalb des Subtrees liegen würde.

- Es ist vollkommen gültig, Scope-Root und -Limit als Selektorenliste zu definieren, wobei in diesem Fall mehrere Bereiche definiert werden. Im folgenden Beispiel werden die Stile auf jedes `<img>` innerhalb eines `<section>` mit einer Klasse von `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es in einem `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Innerhalb einer `@scope`-Regel verhalten sich sowohl einfache Selektoren als auch der [`&`](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) Vervielfältigungsselektor, als ob `:where(:scope)` dem Selektor vorangestellt wäre.
Da {{cssxref(":where", ":where()")}} eine Spezifität von null hat, erhöhen einfache Selektoren und `&` kein Gewicht. Das Spezifitätsgewicht wird vom Rest des Selektors bestimmt.
Zum Beispiel hat der `& img`-Selektor die gleiche Spezifität wie `:where(:scope) img` (0-0-1).

> [!WARNING]
> Die Spezifität von `&` innerhalb von `@scope`-Blöcken wird je nach Browser-Engine und -Version unterschiedlich gehandhabt.
> Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für Details.

In beiden Fällen im folgenden Codeblock stammt die einzige Spezifität von `img`:

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

Im Gegensatz dazu wählt `:scope` explizit das Scope-Root aus und fügt Klassenspezifität (0-1-0) hinzu, da `:scope` eine [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist.
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

`@scope` fügt ein neues Kriterium zur [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade) hinzu: **Scoping-Proximität**. Dies besagt, dass bei zwei Bereichen mit widersprüchlichen Stilen derjenige angewendet wird, der die wenigsten Sprünge im DOM-Baum zur SCOPE-Root benötigt. Schauen wir uns ein Beispiel dazu an.

Betrachten Sie den folgenden HTML-Ausschnitt, in dem unterschiedlich gestaltete Karten ineinander verschachtelt sind:

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

Wenn Sie das thematische CSS wie folgt schreiben würden, hätten Sie ein Problem:

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

Der innerste Absatz soll schwarz gefärbt sein, weil er sich in einer Karte mit hellem Thema befindet. Er wird jedoch sowohl von `.light-theme p` als auch von `.dark-theme p` anvisiert. Da die Regel `.dark-theme p` später in der Quellreihenfolge erscheint, wird sie angewendet, und der Absatz wird fälschlicherweise weiß eingefärbt.

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

Jetzt wird der innerste Absatz korrekt schwarz eingefärbt. Dies liegt daran, dass er nur eine DOM-Baum-Hierarchieebene vom `.light-theme`-Scope-Root entfernt ist, jedoch zwei Ebenen vom `.dark-theme`-Scope-Root entfernt. Daher gewinnt der helle Stil.

> [!NOTE]
> Die Scoping-Proximität überstimmt die Quellreihenfolge, wird jedoch von anderen, höherpriorisierten Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/Reference/Values/important), [Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) überstimmt.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von Scope-Roots

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme` und `.dark-scheme` Klasse abzugleichen. Beachten Sie, wie `:scope` verwendet wird, um die Scope-Roots selbst zu selektieren und zu gestalten. In diesem Beispiel sind die Scope-Roots die {{htmlelement("div")}}-Elemente, die die angewendeten Klassen haben.

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

Der obige Code wird wie folgt gerendert:

{{EmbedLiveSample("Basic style inside scope roots", "100%", "150")}}

### Scope-Roots und Scope-Limits

In diesem Beispiel haben wir einen HTML-Ausschnitt, der der in der [Beschreibung](#beschreibung) besprochenen DOM-Struktur entspricht. Diese Struktur stellt eine typische Artikelzusammenfassung dar. Die Hauptmerkmale sind die {{htmlelement("img")}}-Elemente, die auf verschiedenen Ebenen in der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist es, zu zeigen, wie man ein Scope-Root und ein Limit verwendet, um `<img>`-Elemente vom oberen Ende der Hierarchie zu stylen, jedoch nur bis (und ohne) das `<img>` innerhalb des {{htmlelement("figure")}}-Elements — in Effekt ein Donut-Scope zu schaffen.

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

- Der erste `@scope`-Block definiert sein Scope-Root als Elemente mit einer Klasse von `.feature` (in diesem Fall nur das äußere `<article>`), was zeigt, wie `@scope` verwendet werden kann, um ein spezifisches HTML-Subset zu gestalten.
- Der zweite `@scope`-Block definiert ebenfalls sein Scope-Root als Elemente mit einer Klasse von `.feature`, aber auch ein Scope-Limit von `figure`. Dies stellt sicher, dass eingeschlossene Regelsets nur auf übereinstimmende Elemente innerhalb des Scope-Roots angewendet werden, die **nicht** in Nachkommen `<figure>`-Elementen verschachtelt sind. Dieser `@scope`-Block enthält ein einzelnes Regelset, das `<img>`-Elemente mit einem dicken schwarzen Rand und einer goldenen Hintergrundfarbe gestaltet.

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

Im gerenderten Code, beachten Sie, dass alle `<img>`-Elemente mit dem dicken Rand und der goldenen Hintergrundfarbe gestaltet sind, außer demjenigen innerhalb des `<figure>`-Elements (beschriftet "My infographic").

{{EmbedLiveSample("Scope roots and scope limits", "100%", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Defining the `&` selector in a `@scope` rule](https://css.oddbird.net/scope/parent-selector/) auf css.oddbird.net (2025)
- [Limit the reach of your selectors with the CSS `@scope` at-rule](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
