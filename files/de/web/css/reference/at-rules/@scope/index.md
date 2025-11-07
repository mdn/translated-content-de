---
title: "@scope"
slug: Web/CSS/Reference/At-rules/@scope
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`@scope`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) ermöglicht es Ihnen, Elemente in bestimmten DOM-Subbäumen zu selektieren, wobei Elemente präzise anvisiert werden können, ohne zu spezifische Selektoren zu schreiben, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu koppeln.

In JavaScript kann `@scope` über das CSS-Objektmodell-Interface [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) aufgerufen werden.

## Syntax

Die `@scope` At-Regel enthält einen oder mehrere Regelsätze (genannt **scoped style rules**) und definiert einen Bereich, in dem sie auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block innerhalb Ihres CSS, wobei ein Vorspannbereich enthalten ist, der **Scope-Root** und optionale **Scope-Limit**-Selektoren umfasst — diese definieren die oberen und unteren Grenzen des Scopes.

   ```css
   @scope (scope root) to (scope limit) {
     /* … */
   }
   ```

2. Als Inline-Styles innerhalb eines {{htmlelement("style")}}-Elements in Ihrem HTML, wobei der Vorspann weggelassen wird und der eingeschlossene Regelsatz automatisch auf das umgebende Elternelement des `<style>`-Elements beschränkt wird.

   ```html
   <parent-element>
     <style>
       @scope {
         /* rulesets */
       }
     </style>
   </parent-element>
   ```

   Es ist auch möglich, ein Inline-`@scope` mit einem Scope-Limit-Selektor zu kombinieren, wie bei `@scope to (Scope-Limit) { ... }`.

## Beschreibung

Ein komplexes Webdokument könnte Komponenten wie Kopfzeilen, Fußzeilen, Nachrichtenartikel, Karten, Medienplayer, Anzeigen und andere umfassen. Mit zunehmender Komplexität wird das effektive Verwalten des Stylings dieser Komponenten zu einem größeren Problem, und eine effektive Begrenzung der Styles hilft uns, diese Komplexität zu bewältigen. Betrachten Sie den folgenden DOM-Baum:

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

Wenn Sie das {{htmlelement("img")}}-Element innerhalb des {{htmlelement("section")}} mit einer Klasse `article-body` auswählen wollten, könnten Sie Folgendes tun:

- Einen Selektor wie `.feature > .article-body > img` schreiben. Das hat jedoch eine hohe Spezifität und ist schwer zu überschreiben und ist auch stark an die DOM-Struktur gebunden. Wenn sich Ihre Markup-Struktur in Zukunft ändert, müssen Sie möglicherweise Ihr CSS neu schreiben.
- Etwas weniger Spezifisches wie `.article-body img` schreiben. Das würde jedoch alle Bilder innerhalb des `section` auswählen.

Hier kommt `@scope` ins Spiel. Es erlaubt Ihnen, einen präzisen Bereich zu definieren, innerhalb dessen Ihre Selektoren Elemente anvisieren dürfen. Zum Beispiel könnten Sie das oben genannte Problem mit einem eigenständigen `@scope`-Block wie dem folgenden lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body` Scope-Root-Selektor definiert die obere Grenze des DOM-Baum-Scopes, in dem der Regelsatz angewendet wird, und der `figure` Scope-Limit-Selektor definiert die untere Grenze. Dadurch werden nur {{htmlelement("img")}} Elemente innerhalb eines `<section>` mit einer Klasse von `article-body`, aber nicht innerhalb von {{htmlelement("figure")}} Elementen, ausgewählt.

> [!NOTE]
> Diese Art von Scoping — mit einer oberen und unteren Grenze — wird allgemein als **Donut-Scope** bezeichnet.

Die obere Grenze des Scopes ist inklusiv und die untere Grenze ist exklusiv. Um dieses Verhalten zu ändern, können Sie entweder den Selektor mit einem universalen Kind-Selektor kombinieren. Zum Beispiel würde `@scope (Scope-Root) to (Scope-Limit > *)` beide Grenzen inklusiv machen, während `@scope (Scope-Root > *) to (Scope-Limit)` beide Grenzen exklusiv machen würde, während `@scope (Scope-Root > *) to (Scope-Limit > *)` eine exklusive obere Grenze und eine inklusive untere Grenze geben würde.

Wenn Sie alle Bilder innerhalb eines `<section>` mit einer Klasse von `article-body` auswählen möchten, können Sie das Scope-Limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope`-Block inline innerhalb eines `<style>`-Elements einfügen, das sich wiederum innerhalb des `<section>` mit einer Klasse von `article-body` befindet:

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
> Es ist wichtig zu verstehen, dass `@scope` zwar erlaubt, das Anwendungsgebiet von Selektoren auf spezifische DOM-Subbäume zu isolieren, es aber nicht die angewendeten Styles vollständig auf diese Subbäume isoliert. Dies wird am deutlichsten bei der Vererbung — Eigenschaften, die von Kindern geerbt werden (zum Beispiel {{cssxref("color")}} oder {{cssxref("font-family")}}), werden trotzdem vererbt, auch über jedes festgelegte Scope-Limit hinaus.

### `:scope` Pseudoklasse innerhalb von `@scope`-Blöcken

Im Kontext eines `@scope`-Blocks bietet die {{cssxref(":scope")}}-Pseudoklasse eine bequeme Möglichkeit, Styles direkt auf den Scope-Root anzuwenden, wie folgt:

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

- Ein Scope-Limit kann `:scope` verwenden, um eine spezifische Beziehungsanforderung zwischen dem Scope-Limit und dem Root festzulegen. Zum Beispiel:

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

- Scoped-Style-Regelsätze können den Subtree nicht verlassen. Selektionen wie `:scope + p` sind ungültig, da diese Selektion außerhalb des Subtrees läge.

- Es ist durchaus gültig, den Scope-Root und das Scope-Limit als Selektorliste zu definieren, in welchem Fall mehrere Scopes definiert werden. Im folgenden Beispiel werden die Styles auf jedes `<img>` innerhalb eines `<section>` mit einer Klasse `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es innerhalb eines `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Innerhalb einer `@scope`-Regel verhalten sich sowohl einfache Selektoren als auch der [`&`](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) Nesting-Selektor so, als ob `:where(:scope)` dem Selektor vorangestellt wäre.
Da {{cssxref(":where", ":where()")}} die Spezifität auf Null reduziert, fügen einfache Selektoren und `&` kein zusätzliches Gewicht hinzu. Das Spezifitätsgewicht wird durch den Rest des Selektors bestimmt.
Zum Beispiel entspricht die Spezifität des `& img`-Selectors der Spezifität von `:where(:scope) img` (0-0-1).

> [!WARNING]
> Die Spezifität von `&` innerhalb von `@scope`-Blöcken wird je nach Browser-Engine und Release-Version unterschiedlich behandelt.
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

Im Gegensatz dazu wird durch die explizite Verwendung von `:scope` der Scope-Root ausgewählt und fügt Klassenspezifität hinzu (0-1-0), da `:scope` eine [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist.
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

`@scope` fügt ein neues Kriterium zur [CSS-Cascade](/de/docs/Web/CSS/CSS_cascade) hinzu: **Scoping Nähe**. Dies besagt, dass, wenn zwei Scopes widersprüchliche Styles haben, der Style angewendet wird, der die kleinste Anzahl von Sprüngen in der DOM-Baumhierarchie zum Scope-Root hat. Betrachten wir ein Beispiel, um zu verstehen, was das bedeutet.

Nehmen Sie das folgende HTML-Snippet, in dem unterschiedlich thematisierte Karten ineinander geschachtelt sind:

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

Wenn Sie die Theme-CSS so schreiben würden, würden Sie auf Probleme stoßen:

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

Der innerste Absatz soll schwarz gefärbt sein, weil er sich in einer Karte mit hellem Thema befindet. Er wird jedoch von sowohl `.light-theme p` als auch `.dark-theme p` anvisiert. Da die `.dark-theme p`-Regel später in der Quellreihenfolge erscheint, wird sie angewendet, und der Absatz endet fälschlicherweise als weiß eingefärbt.

Um das zu beheben, können Sie `@scope` wie folgt verwenden:

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

Jetzt wird der innerste Absatz korrekt schwarz eingefärbt. Dies liegt daran, dass er nur eine Ebene in der DOM-Baumhierarchie vom Scope-Root `.light-theme` entfernt ist, aber zwei Ebenen vom Scope-Root `.dark-theme`. Daher gewinnt der helle Style.

> [!NOTE]
> Scoping-Nähe übertrumpft die Quellreihenfolge, wird jedoch von anderen, höherrangigen Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/Reference/Values/important), [Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) übergangen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von Scope-Roots

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme`- und `.dark-scheme`-Klasse zu erfassen. Beachten Sie, wie `:scope` verwendet wird, um den Scope-Roots selbst Styling zu verleihen. In diesem Beispiel sind die Scope-Roots die {{htmlelement("div")}}-Elemente, denen die Klassen zugewiesen sind.

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

Der obige Code rendert folgendermaßen:

{{EmbedLiveSample("Basic style inside scope roots", "100%", "150")}}

### Scope-Roots und Scope-Limits

In diesem Beispiel haben wir ein HTML-Snippet, das der DOM-Struktur entspricht, die wir im [Beschreibung](#beschreibung) Abschnitt zuvor besprochen haben. Diese Struktur stellt eine typische Artikelzusammenfassung dar. Die Schlüsselfunktionen, die zu beachten sind, sind die {{htmlelement("img")}}-Elemente, die auf verschiedenen Ebenen in der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist es zu zeigen, wie man einen Scope-Root und ein Scope-Limit verwendet, um `<img>`-Elemente zu stylen, beginnend an der Spitze der Hierarchie, aber nur bis zu (und nicht einschließlich) dem `<img>` innerhalb des {{htmlelement("figure")}}-Elements — im Effekt ein Donut-Scope erstellt wird.

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

- Der erste `@scope`-Block definiert sein Scope-Root als Elemente mit einer Klasse `.feature` (in diesem Fall nur das äußere `<article>`), und zeigt damit, wie `@scope` verwendet werden kann, um ein spezifisches HTML-Subset zu thematisieren.
- Der zweite `@scope`-Block definiert auch sein Scope-Root als Elemente mit einer Klasse `.feature`, aber auch ein Scope-Limit von `figure`. Dies stellt sicher, dass enthaltende Regelsätze nur auf übereinstimmende Elemente innerhalb des Scope-Roots angewendet werden (`<article class="feature"> ... </article>` in diesem Fall), die **nicht** innerhalb von nachgeordneten `<figure>`-Elementen verschachtelt sind. Dieser `@scope`-Block enthält einen einzelnen Regelsatz, der `<img>`-Elemente mit einem dicken schwarzen Rahmen und einer goldenen Hintergrundfarbe stylt.

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

Im gerenderten Code beachten Sie, wie alle `<img>`-Elemente mit dem dicken Rahmen und der goldenen Hintergrundfarbe gestylt sind, außer dasjenige innerhalb des `<figure>`-Elements (beschriftet "Mein Infografik").

{{EmbedLiveSample("Scope roots and scope limits", "100%", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Definition des `&` Selektors in einer `@scope` Regel](https://css.oddbird.net/scope/parent-selector/) auf css.oddbird.net (2025)
- [Begrenzen Sie die Reichweite Ihrer Selektoren mit der CSS-`@scope`-At-Regel](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
