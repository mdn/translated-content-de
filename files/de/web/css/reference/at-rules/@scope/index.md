---
title: "`@scope` CSS at-rule"
short-title: "@scope"
slug: Web/CSS/Reference/At-rules/@scope
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@scope`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht es Ihnen, Elemente in bestimmten DOM-Teilbäumen auszuwählen. Sie können Elemente gezielt ansprechen, ohne overly-spezifische Selektoren zu verwenden, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu binden.

In JavaScript kann `@scope` über die CSS-Objektmodell-Schnittstelle [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) angesprochen werden.

## Syntax

Die `@scope` At-Regel enthält einen oder mehrere Regelsets (genannt **gecoped Style-Regeln**) und definiert ein Scope, in dem diese auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block in Ihrem CSS, wobei ein Prelude-Abschnitt enthalten ist, der **Scope-Root** und optionale **Scope-Limit** Selektoren umfasst — diese definieren die oberen und unteren Grenzen des Scopes.

   ```css
   @scope (scope root) to (scope limit) {
     /* … */
   }
   ```

2. Als Inline-Stile innerhalb eines {{htmlelement("style")}}-Elements in Ihrem HTML, wobei das Prelude weggelassen wird und das eingeschlossene Regelset automatisch auf das umschließende Elternelement des `<style>`-Elements beschränkt wird.

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

Ein komplexes Webdokument könnte Komponenten wie Kopf- und Fußzeilen, Nachrichtenartikel, Karten, Mediaplayer, Werbung und andere enthalten. Mit zunehmender Komplexität wird das effektive Management des Stylings für diese Komponenten zu einem größeren Problem, und eine effektive Scoping von Styles hilft uns, diese Komplexität zu bewältigen. Betrachten wir den folgenden DOM-Baum:

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

- Schreiben Sie einen Selektor wie `.feature > .article-body > img`. Dies hat jedoch eine hohe Spezifität und ist schwer zu überschreiben und auch eng an die DOM-Struktur gebunden. Wenn Ihre Markup-Struktur sich in Zukunft ändert, müssen Sie möglicherweise Ihr CSS neu schreiben.
- Schreiben Sie etwas weniger Spezifisches wie `.article-body img`. Dies würde jedoch alle Bilder innerhalb des `section` auswählen.

Hier ist `@scope` nützlich. Es ermöglicht Ihnen, ein genaues Scope zu definieren, innerhalb dessen Ihre Selektoren Elemente ansprechen dürfen. Zum Beispiel könnten Sie das oben genannte Problem mit einem eigenständigen `@scope` Block wie folgt lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body` Scope-Root-Selektor definiert die Obergrenze des DOM-Baum-Scopes, in dem das Regelset angewendet wird, und der `figure` Scope-Limit-Selektor definiert die Untergrenze. Dadurch werden nur {{htmlelement("img")}} Elemente innerhalb eines `<section>` mit der Klasse `article-body`, aber nicht innerhalb von {{htmlelement("figure")}} Elementen ausgewählt.

> [!NOTE]
> Diese Art von Scoping – mit einer oberen und unteren Grenze – wird häufig als **Donut-Scope** bezeichnet.

Die obere Grenze des Scopes ist inklusive und die untere Grenze ist exklusiv. Um dieses Verhalten zu ändern, können Sie jeden Selektor mit einem universellen Kind-Selektor kombinieren. Zum Beispiel würde `@scope (scope root) to (scope limit > *)` beide Grenzen inklusive machen, `@scope (scope root > *) to (scope limit)` würde beide Grenzen exklusiv machen, während `@scope (scope root > *) to (scope limit > *)` eine exklusive obere Grenze und eine inklusive untere Grenze geben würde.

Wenn Sie alle Bilder innerhalb eines `<section>` mit der Klasse `article-body` auswählen möchten, können Sie das Scope-Limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope` Block inline innerhalb eines `<style>`-Elements einschließen, das wiederum innerhalb des `<section>` mit der Klasse `article-body` liegt:

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
> Es ist wichtig zu verstehen, dass, während `@scope` es Ihnen ermöglicht, die Anwendung von Selektoren auf bestimmte DOM-Teilbäume zu isolieren, es die angewendeten Styles nicht vollständig innerhalb dieser Teilbäume isoliert. Dies ist am deutlichsten bei Vererbung sichtbar — Eigenschaften, die von Kindern geerbt werden (zum Beispiel {{cssxref("color")}} oder {{cssxref("font-family")}}), werden unabhängig von einem festgelegten Scope-Limit weiterhin geerbt.

### `:scope` Pseudoklasse innerhalb von `@scope` Blöcken

Im Kontext eines `@scope` Blocks bietet die {{cssxref(":scope")}} Pseudoklasse eine bequeme Möglichkeit, Stile direkt auf das Scope-Root anzuwenden, wie folgt:

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

- `:scope` fügt eine Klasse-Level-Spezifität hinzu (siehe [Spezifität in @scope](#specificity_in_scope) für Details).

- Ein Scope-Limit kann `:scope` verwenden, um eine spezifische Beziehungsanforderung zwischen dem Scope-Limit und Root anzugeben. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) {
    /* … */
  }
  ```

- Ein Scope-Limit kann unter Verwendung von `:scope` auf Elemente außerhalb des Scope-Roots verweisen. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) {
    /* … */
  }
  ```

- Gecopte Style-Regeln können den Teilbaum nicht verlassen. Auswahlen wie `:scope + p` sind ungültig, da diese Auswahl außerhalb des Teilbaums liegen würde.

- Es ist völlig gültig, das Scope-Root und Limit als Selektorliste zu definieren, in diesem Fall werden mehrere Scopes definiert. Im folgenden Beispiel werden die Styles auf jedes `<img>` innerhalb eines `<section>` mit einer Klasse von `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es innerhalb eines `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Innerhalb einer `@scope` Regel verhalten sich sowohl nackte Selektoren als auch der [`&`](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) Nesting-Selektor, als ob `:where(:scope)` dem Selektor vorangestellt wäre. Da {{cssxref(":where()")}} null [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) hat, fügen nackte Selektoren und `&` null Gewicht hinzu. Das Spezifitätsgewicht wird durch den Rest des Selektors bestimmt. Zum Beispiel ist die Spezifität des `& img`-Selektors äquivalent zur Spezifität von `:where(:scope) img` (0-0-1).

> [!WARNING]
> Die Spezifität von `&` innerhalb von `@scope` Blöcken wird je nach Browser-Engine und Veröffentlichungsversion unterschiedlich behandelt.
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

Im Gegensatz dazu wird bei expliziter Verwendung von `:scope` das Scope-Root ausgewählt und eine Klassenspezifität hinzugefügt (0-1-0), da `:scope` eine [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist. Im folgenden Codeblock hat `:scope img` eine Spezifität von 0-1-1:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
    /* … */
  }
}
```

### Wie `@scope` Konflikte gelöst werden

`@scope` fügt der [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade) ein neues Kriterium hinzu: **Scoping-Proximität**. Dieses besagt, dass, wenn zwei Scopes konfliktierende Stile haben, der Stil angewendet wird, der die kleinste Anzahl von Sprüngen im DOM-Baum zur Scope-Root aufweist. Lassen Sie uns ein Beispiel anschauen, um zu verstehen, was das bedeutet.

Betrachten Sie den folgenden HTML-Ausschnitt, bei dem unterschiedlich designte Karten ineinander verschachtelt sind:

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

Wenn Sie das Theme-CSS so schreiben, würden Sie auf Probleme stoßen:

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

Der innerste Absatz soll in Schwarz gefärbt sein, da er sich innerhalb einer Karte mit hellem Thema befindet. Er wird jedoch sowohl von `.light-theme p` als auch von `.dark-theme p` angesprochen. Da die Regel `.dark-theme p` später in der Quellreihenfolge erscheint, wird sie angewendet, und der Absatz wird fälschlicherweise weiß gefärbt.

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

Nun wird der innerste Absatz korrekt in Schwarz gefärbt. Dies liegt daran, dass er nur einen DOM-Baum-Hierarchiestufen vom `.light-theme` Scope-Root entfernt ist, aber zwei Stufen vom `.dark-theme` Scope-Root entfernt ist. Daher gewinnt der helle Stil.

> [!NOTE]
> Die Scoping-Proximität übertrumpft die Quellreihenfolge, wird aber selbst von anderen, höherprioren Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/Reference/Values/important), [Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) überschrieben.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb der Scope-Roots

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme` bzw. `.dark-scheme` Klasse zu matchen. Beachten Sie, wie `:scope` verwendet wird, um die Scope-Roots selbst auszuwählen und zu stylen. In diesem Beispiel sind die Scope-Roots die {{htmlelement("div")}}-Elemente, denen die Klassen zugewiesen sind.

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

Der obige Code rendert sich wie folgt:

{{EmbedLiveSample("Basic style inside scope roots", "100%", "150")}}

### Scope-Roots und Scope-Limits

In diesem Beispiel haben wir einen HTML-Ausschnitt, der der DOM-Struktur entspricht, über die wir früher im [Beschreibung](#beschreibung) Abschnitt gesprochen haben. Diese Struktur stellt eine typische Artikelzusammenfassung dar. Die wichtigsten Merkmale, die beachtet werden müssen, sind die {{htmlelement("img")}}-Elemente, die auf verschiedenen Ebenen in der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist es, zu zeigen, wie man ein Scope-Root und ein Limit verwendet, um `<img>`-Elemente zu stylen, und zwar von oben in der Hierarchie beginnend, aber nur bis (und nicht einschließlich) des `<img>` innerhalb des {{htmlelement("figure")}}-Elements, wodurch effektiv ein Donut-Scope entsteht.

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

- Der erste `@scope`-Block definiert sein Scope-Root als Elemente mit einer Klasse von `.feature` (in diesem Fall nur das äußere `<article>`), was demonstriert, wie `@scope` verwendet werden kann, um ein spezifisches HTML-Subset zu thematisieren.
- Der zweite `@scope`-Block definiert ebenfalls sein Scope-Root als Elemente mit einer Klasse von `.feature`, aber er definiert auch ein Scope-Limit von `figure`. Dies stellt sicher, dass enthaltene Regelsets nur auf übereinstimmende Elemente im Scope-Root angewendet werden (`<article class="feature"> ... </article>` in diesem Fall), die **nicht** innerhalb nachgeordneter `<figure>`-Elemente verschachtelt sind. Dieser `@scope`-Block enthält ein einzelnes Regelset, das `<img>`-Elemente mit einem dicken schwarzen Rahmen und einer goldenen Hintergrundfarbe stylt.

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

Im gerenderten Code beachten Sie, wie alle `<img>`-Elemente mit dem dicken Rahmen und der goldenen Hintergrundfarbe gestylt sind, außer demjenigen innerhalb des `<figure>`-Elements (beschriftet als "My infographic").

{{EmbedLiveSample("Scope roots and scope limits", "100%", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Definierung des `&` Selektors in einer `@scope` Regel](https://css.oddbird.net/scope/parent-selector/) auf css.oddbird.net (2025)
- [Beschränken Sie die Reichweite Ihrer Selektoren mit der CSS `@scope`-At-Regel](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
