---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Die **`@scope`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, Elemente in bestimmten DOM-Unterbäumen auszuwählen, um Elemente präzise zu targetieren, ohne zu spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu binden.

In JavaScript kann auf `@scope` über die CSS-Objektmodell-Schnittstelle [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) zugegriffen werden.

## Syntax

Die `@scope`-At-Regel enthält ein oder mehrere Regelmengen (sogenannte **scoped style rules**) und definiert einen Bereich, in dem sie auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block innerhalb Ihres CSS, wobei er einen Vorspannabschnitt enthält, der **Scope-Root**- und optionale **Scope-Limit**-Selektoren umfasst — diese definieren die oberen und unteren Grenzen des Bereichs.

   ```css
   @scope (scope root) to (scope limit) {
     /* … */
   }
   ```

2. Als Inline-Stile, die innerhalb eines {{htmlelement("style")}}-Elements in Ihrem HTML enthalten sind. In diesem Fall wird der Vorspann weggelassen und der eingeschlossene Regelblock wird automatisch auf das umschließende Elternelement des `<style>`-Elements angewendet.

   ```html
   <parent-element>
     <style>
       @scope {
         /* rulesets */
       }
     </style>
   </parent-element>
   ```

   Es ist auch möglich, ein Inline-`@scope` mit einem Scope-Limit-Selektor zu kombinieren, z. B. `@scope to (scope limit) { ... }`.

## Beschreibung

Ein komplexes Webdokument könnte Komponenten wie Header, Footer, Nachrichtenartikel, Karten, Mediaplayer, Anzeigen und andere enthalten. Mit zunehmender Komplexität wird das effektive Verwalten des Stylings dieser Komponenten immer wichtiger, und effektives Scoping von Stilen hilft uns, diese Komplexität zu verwalten. Betrachten wir den folgenden DOM-Baum:

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

- Einen Selektor wie `.feature > .article-body > img` schreiben. Dies hat jedoch eine hohe Spezifität und ist schwer zu überschreiben und außerdem eng an die DOM-Struktur gekoppelt. Wenn sich Ihre Markup-Struktur in Zukunft ändert, müssen Sie möglicherweise Ihr CSS umschreiben.
- Etwas weniger Spezifisches wie `.article-body img` schreiben. Dies würde jedoch alle Bilder innerhalb des `section`-Elements auswählen.

Hier kommt `@scope` ins Spiel. Es ermöglicht Ihnen, einen präzisen Bereich zu definieren, in dem Ihre Selektoren Elemente targetieren können. Zum Beispiel könnten Sie das obige Problem mit einem eigenständigen `@scope`-Block wie dem folgenden lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body`-Scope-Root-Selektor definiert die obere Grenze des DOM-Baum-Bereichs, in dem der Regelblock angewendet wird, und der `figure`-Scope-Limit-Selektor definiert die untere Grenze. Dadurch werden nur {{htmlelement("img")}}-Elemente innerhalb eines `<section>` mit der Klasse `article-body`, aber nicht innerhalb von {{htmlelement("figure")}}-Elementen ausgewählt.

> [!NOTE]
> Diese Art des Scopings — mit einer oberen und unteren Grenze — wird allgemein als **Donut Scope** bezeichnet.

Die obere Grenze des Bereichs ist inklusive und die untere Grenze ist exklusiv. Um dieses Verhalten zu ändern, können Sie jeden Selektor mit einem universellen Kindselektor kombinieren. Zum Beispiel würde `@scope (scope root) to (scope limit > *)` beide Grenzen inklusiv machen, `@scope (scope root > *) to (scope limit)` würde beide Grenzen exklusiv machen, während `@scope (scope root > *) to (scope limit > *)` eine exklusive obere Grenze und eine inklusive untere Grenze ergeben würde.

Wenn Sie alle Bilder innerhalb eines `<section>` mit der Klasse `article-body` auswählen möchten, können Sie das Scope-Limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope`-Block inline innerhalb eines `<style>`-Elements einfügen, das sich wiederum innerhalb des `<section>` mit der Klasse `article-body` befindet:

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
> Es ist wichtig zu verstehen, dass, obwohl `@scope` es Ihnen ermöglicht, die Anwendung von Selektoren auf bestimmte DOM-Unterbäume zu isolieren, die angewandten Stile nicht vollständig innerhalb dieser Unterbäume isoliert werden. Dies ist am auffälligsten bei der Vererbung — Eigenschaften, die von Kindern geerbt werden (zum Beispiel {{cssxref("color")}} oder {{cssxref("font-family")}}) werden weiterhin jenseits eines festgelegten Scope-Limits vererbt.

### Pseudo-Klasse `:scope` innerhalb von `@scope`-Blöcken

Im Kontext eines `@scope`-Blocks bietet die {{cssxref(":scope")}}-Pseudo-Klasse eine bequeme Möglichkeit, Stile direkt auf den Scope-Root anzuwenden, so:

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

- `:scope` fügt Spezifität auf Klassenebene hinzu (siehe [Spezifität in @scope](#specificity_in_scope) für Details).

- Ein Scope-Limit kann `:scope` verwenden, um eine spezifische Beziehungsanforderung zwischen dem Scope-Limit und dem Root zu spezifizieren. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) {
    /* … */
  }
  ```

- Ein Scope-Limit kann Elemente außerhalb des Scope-Roots mithilfe von `:scope` referenzieren. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) {
    /* … */
  }
  ```

- Scoped-Style-Regeln können den Unterbaum nicht verlassen. Selektionen wie `:scope + p` sind ungültig, da diese Selektion außerhalb des Unterbaums liegen würde.

- Es ist völlig zulässig, den Scope-Root und das Limit als Selektorenliste zu definieren, in diesem Fall werden mehrere Bereiche definiert. Im folgenden Beispiel werden die Stile auf jedes `<img>` innerhalb eines `<section>` mit der Klasse `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es innerhalb eines `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Innerhalb einer `@scope`-Regel verhalten sich sowohl nackte Selektoren als auch der [`&`](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) Nesting-Selektor so, als ob `:where(:scope)` dem Selektor vorangestellt wäre. Da {{cssxref(":where", ":where()")}} eine Spezifität von null hat, fügen nackte Selektoren und `&` kein Gewicht hinzu. Das Spezifitätsgewicht wird durch den Rest des Selektors bestimmt. Zum Beispiel ist die Spezifität des `& img` Selektors äquivalent zur Spezifität von `:where(:scope) img` (0-0-1).

> [!WARNING]
> Die Spezifität von `&` innerhalb von `@scope`-Blöcken wird je nach Browser-Engine und Release-Version unterschiedlich behandelt. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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

Im Gegensatz dazu wählt `:scope` explizit den Scope-Root aus und fügt Spezifität auf Klassenebene hinzu (0-1-0), da `:scope` eine [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist. Im folgenden Codeblock hat `:scope img` eine Spezifität von 0-1-1:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
    /* … */
  }
}
```

### Wie `@scope`-Konflikte gelöst werden

`@scope` fügt ein neues Kriterium zur [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade) hinzu: **Scoping-Proximität**. Dies besagt, dass, wenn zwei Scopes in Stilkonflikten stehen, der Stil angewendet wird, der die geringste Anzahl von Schritten die DOM-Baum-Hierarchie hinauf zum Scope-Root entfernt ist. Schauen wir uns ein Beispiel an, um zu sehen, was das bedeutet.

Betrachten Sie das folgende HTML-Snippet, in dem unterschiedlich gestaltete Karten ineinander verschachtelt sind:

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

Wenn Sie das Thema CSS wie folgt schreiben, würden Sie auf Probleme stoßen:

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

Der innerste Absatz sollte schwarz gefärbt sein, weil er sich in einer Karte mit hellem Thema befindet. Er wird jedoch sowohl von `.light-theme p` als auch von `.dark-theme p` anvisiert. Da die `.dark-theme p` Regel später in der Quellreihenfolge erscheint, wird sie angewendet und der Absatz wird fälschlicherweise weiß gefärbt.

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

Nun wird der innerste Absatz korrekt schwarz gefärbt. Dies liegt daran, dass er nur eine DOM-Baum-Hierarchieebene vom `.light-theme`-Scope-Root entfernt ist, aber zwei Ebenen vom `.dark-theme`-Scope-Root entfernt. Daher gewinnt der helle Stil.

> [!NOTE]
> Scoping-Proximität überstimmt die Quellreihenfolge, wird jedoch von anderen, höher priorisierten Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) überschrieben.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von Scope-Roots

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme` und `.dark-scheme` Klasse entsprechend zu gestalten. Beachten Sie, wie `:scope` verwendet wird, um die Scope-Roots selbst auszuwählen und zu stylen. In diesem Beispiel sind die Scope-Roots die {{htmlelement("div")}}-Elemente, die die Klassen haben.

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

{{EmbedLiveSample("Basic style inside scope roots", "100%", "150")}}

### Scope-Roots und Scope-Limits

In diesem Beispiel haben wir ein HTML-Snippet, das die in der [Beschreibung](#beschreibung)-Sektion erwähnte DOM-Struktur nachbildet. Diese Struktur stellt eine typische Artikelzusammenfassung dar. Die Schlüsselfunktionen sind die {{htmlelement("img")}}-Elemente, die auf verschiedenen Ebenen in der Struktur verschachtelt sind.

Ziel dieses Beispiels ist es zu zeigen, wie man ein Scope-Root und ein Limit verwendet, um `<img>`-Elemente von oben in der Hierarchie zu stylen, aber nur bis (und nicht einschließlich) des `<img>` innerhalb des {{htmlelement("figure")}}-Elements — im Effekt einen Donut-Scope zu erstellen.

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
- Der zweite `@scope`-Block definiert ebenfalls sein Scope-Root als Elemente mit einer Klasse von `.feature`, aber auch ein Scope-Limit von `figure`. Dies stellt sicher, dass die enthaltenen Regelblöcke nur auf passende Elemente innerhalb des Scope-Roots (in diesem Fall `<article class="feature"> ... </article>`) angewendet werden, die **nicht** innerhalb von herausragenden `<figure>`-Elementen verschachtelt sind. Dieser `@scope`-Block enthält eine einzelne Regelmenge, die `<img>`-Elemente mit einem dicken schwarzen Rahmen und einer goldenen Hintergrundfarbe stylt.

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

Im gerenderten Code wird beachtet, dass alle `<img>`-Elemente mit dem dicken Rahmen und der goldenen Hintergrundfarbe gestaltet sind, außer dem innerhalb des `<figure>`-Elements (beschriftet "Mein Infografik").

{{EmbedLiveSample("Scope roots and scope limits", "100%", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Den `&` Selektor in einer `@scope`-Regel definieren](https://css.oddbird.net/scope/parent-selector/) auf css.oddbird.net (2025)
- [Die Reichweite Ihrer Selektoren mit der CSS `@scope`-At-Regel begrenzen](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
