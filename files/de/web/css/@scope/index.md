---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: 5a195171d06aee3d9c1c78d71c7f0c3a060f5263
---

{{CSSRef}}

Die **`@scope`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, Elemente in bestimmten DOM-Teilbäumen auszuwählen. Dadurch können Sie Elemente gezielt auswählen, ohne zu spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng mit der DOM-Struktur zu verknüpfen.

Im JavaScript kann `@scope` über das CSS-Objektmodell-Interface [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) zugänglich gemacht werden.

## Syntax

Die `@scope` At-Regel enthält einen oder mehrere Regelsets (genannt **scoped style rules**) und definiert einen Geltungsbereich, in dem diese auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block innerhalb Ihres CSS, wobei es einen Vorlaufabschnitt enthält, der **Scope-Root** und optionale **Scope-Limit**-Selektoren enthält — diese definieren die oberen und unteren Grenzen des Geltungsbereichs.

   ```css
   @scope (scope root) to (scope limit) {
     /* … */
   }
   ```

2. Als Inline-Stile in einem {{htmlelement("style")}}-Element in Ihrem HTML, in diesem Fall wird der Vorlauf weggelassen, und das eingeschlossene Regelset wird automatisch auf das umschließende Elternelement des `<style>`-Elements angewendet.

   ```html
   <parent-element>
     <style>
       @scope {
         rulesets
       }
     </style>
   </parent-element>
   ```

   Es ist auch möglich, ein Inline-`@scope` mit einem Scope-Limit-Selektor zu kombinieren, wie in `@scope to (scope limit) { ... }`.

## Beschreibung

Ein komplexes Webdokument könnte Komponenten wie Header, Footer, Nachrichtenartikel, Karten, Mediaplayer, Werbungen und andere enthalten. Mit zunehmender Komplexität wird es wichtiger, das Styling dieser Komponenten effektiv zu verwalten, und eine effektive Eingrenzung von Stilen hilft, diese Komplexität zu bewältigen. Betrachten Sie den folgenden DOM-Baum:

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

Wenn Sie das {{htmlelement("img")}}-Element innerhalb des {{htmlelement("section")}} mit der Klasse `article-body` auswählen wollten, könnten Sie folgendes tun:

- Schreiben Sie einen Selektor wie `.feature > .article-body > img`. Das hat jedoch eine hohe Spezifität und ist schwer zu überschreiben, und ist auch eng mit der DOM-Struktur verbunden. Wenn sich Ihre Markup-Struktur in Zukunft ändert, müssten Sie möglicherweise Ihr CSS umschreiben.
- Schreiben Sie etwas weniger Spezifisches wie `.article-body img`. Das würde jedoch alle Bilder innerhalb des `section` auswählen.

Hier ist `@scope` nützlich. Es erlaubt Ihnen, einen präzisen Geltungsbereich zu definieren, innerhalb dessen Ihre Selektoren Elemente anvisieren können. Zum Beispiel könnten Sie das oben genannte Problem mit einem eigenständigen `@scope`-Block wie dem folgenden lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body`-Scope-Root-Selektor definiert die obere Grenze des DOM-Baum-Geltungsbereichs, in dem das Regelset angewendet wird. Der `figure`-Scope-Limit-Selektor definiert die untere Grenze. Als Ergebnis werden nur {{htmlelement("img")}}-Elemente innerhalb eines `<section>` mit der Klasse `article-body`, jedoch nicht innerhalb von {{htmlelement("figure")}}-Elementen, ausgewählt.

> [!NOTE]
> Diese Art der Eingrenzung — mit einer oberen und einer unteren Grenze — wird häufig als **Donut-Scope** bezeichnet.

Die obere Grenze des Scopes ist inklusive, und die untere Grenze ist exklusiv. Um dieses Verhalten zu ändern, können Sie einen der Selektoren mit einem universellen Kind-Selektor kombinieren. Zum Beispiel würde `@scope (scope root) to (scope limit > *)` beide Grenzen inklusive machen, `@scope (scope root > *) to (scope limit)` würde beide Grenzen exklusiv machen, während `@scope (scope root > *) to (scope limit > *)` eine exklusive obere und eine inklusive untere Grenze geben würde.

Wenn Sie alle Bilder innerhalb eines `<section>` mit der Klasse `article-body` auswählen möchten, können Sie das Scope-Limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope`-Block Inline in ein `<style>`-Element einschließen, das wiederum innerhalb des `<section>` mit der Klasse `article-body` enthalten ist:

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
> Es ist wichtig zu verstehen, dass `@scope` es Ihnen zwar ermöglicht, die Anwendung von Selektoren auf bestimmte DOM-Teilbäume zu isolieren, es isoliert jedoch nicht die angewendeten Stile vollständig innerhalb dieser Teilbäume. Dies ist am auffälligsten bei Vererbung — Eigenschaften, die von Kindern vererbt werden (zum Beispiel {{cssxref("color")}} oder {{cssxref("font-family")}}), werden über das festgelegte Scope-Limit hinaus vererbt.

### Die `:scope` Pseudo-Klasse

Im Kontext eines `@scope`-Blocks repräsentiert die {{cssxref(":scope")}}-Pseudo-Klasse den Scope-Root — sie bietet eine einfache Möglichkeit, Stile auf den Scope-Root selbst anzuwenden, von innerhalb des Scopes:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Tatsächlich wird `:scope` allen Bereichs-Stilregeln implizit vorangestellt. Wenn Sie möchten, können Sie `:scope` explizit voranstellen oder den [nesting](/de/docs/Web/CSS/CSS_nesting) Selektor (`&`) voranstellen, um denselben Effekt zu erzielen, wenn Sie diese Darstellungen einfacher zu verstehen finden.

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

### Hinweise zur Verwendung von Bereichsselektoren

- Ein Scope-Limit kann `:scope` verwenden, um eine spezielle Beziehungsanforderung zwischen dem Scope-Limit und dem Root anzugeben. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) {
    /* … */
  }
  ```

- Ein Scope-Limit kann sich auf Elemente außerhalb des Scope-Root mit `:scope` beziehen. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) {
    /* … */
  }
  ```

- Bereichs-Stilregeln können nicht aus dem Teilbaum heraustreten. Selektionen wie `:scope + p` sind ungültig, weil diese Selektion außerhalb des Teilbaums wäre.

- Es ist vollkommen gültig, das Scope-Root und Limit als Selektorliste zu definieren, in diesem Fall werden mehrere Scopes definiert. Im folgenden Beispiel werden die Stile auf jedes `<img>` innerhalb eines `<section>` mit einer Klasse `article-hero` oder `article-body` angewendet, aber nicht, wenn es in ein `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Ein Regelset in einem `@scope`-Block beeinflusst die Spezifität seines Selektors nicht, unabhängig von den Selektoren, die im Scope-Root und Limit verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img {
    /* … */
  }
}
```

Wenn Sie sich jedoch entscheiden, die `:scope`-Pseudoklasse explizit Ihren Bereichsselektoren voranzustellen, müssen Sie diese in die Berechnung ihrer Spezifität einbeziehen. `:scope`, wie alle regulären Pseudoklassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
    /* … */
  }
}
```

Wenn Sie den `&`-Selektor innerhalb eines `@scope`-Blocks verwenden, repräsentiert `&` den Scope-Root-Selektor; er wird intern als jener Selektor berechnet, der in eine {{cssxref(":is", ":is()")}}-Pseudoklassenfunktion eingebettet ist. So zum Beispiel in:

```css
@scope (figure, #primary) {
  & img {
    /* … */
  }
}
```

`& img` ist gleichbedeutend mit `:is(figure, #primary) img`. Da `:is()` die Spezifität seines spezifischsten Arguments übernimmt (`#primary`, in diesem Fall), ist die Spezifität des Bereichsselektors `& img` daher 1-0-0 + 0-0-1 = 1-0-1.

### Der Unterschied zwischen `:scope` und `&` innerhalb von `@scope`

`:scope` repräsentiert den übereinstimmenden Scope-Root, während `&` den Selektor repräsentiert, der dem Scope-Root zugeordnet ist. Aus diesem Grund ist es möglich, `&` mehrfach zu verketten. `:scope` können Sie jedoch nur einmal verwenden — Sie können einen Scope-Root nicht innerhalb eines Scope-Root übereinstimmen.

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

### Wie `@scope`-Konflikte gelöst werden

`@scope` fügt ein neues Kriterium zur [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade) hinzu: **Scoping-Nähe**. Dies besagt, dass, wenn zwei Scopes widersprüchliche Stile haben, der Stil angewendet wird, bei dem die Anzahl der Schritte im DOM-Baum-Hierarchie zu dem Scope-Root am kleinsten ist. Schauen wir uns ein Beispiel an, um zu sehen, was das bedeutet.

Betrachten Sie das folgende HTML-Snippet, bei dem unterschiedliche Themenkarten ineinander verschachtelt sind:

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

Wenn Sie das ThemencSS so schreiben würden, hätten Sie Schwierigkeiten:

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

Der innerste Absatz sollte schwarz gefärbt sein, da er sich in einer hellen Themenkarte befindet. Er wird jedoch sowohl von der Regel `.light-theme p` als auch durch `.dark-theme p` angesprochen. Da die `.dark-theme p`-Regel später in der Quellreihenfolge erscheint, wird sie angewendet, und der Absatz wird fälschlicherweise weiß eingefärbt.

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

Jetzt wird der innerste Absatz korrekt schwarz gefärbt. Dies liegt daran, dass er nur eine DOM-Baum-Hierarchieebene vom `.light-theme`-Scope-Root entfernt ist, aber zwei Ebenen vom `.dark-theme`-Scope-Root entfernt. Daher gewinnt der helle Stil.

> [!NOTE]
> Scoping-Nähe übertrumpft die Quellreihenfolge, wird aber selbst durch andere, höher priorisierte Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) überschrieben.

## Formelle Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil in Bereichs-Roots

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme` und `.dark-scheme`-Klasse jeweils abzugleichen. Beachten Sie, wie `:scope` verwendet wird, um den Bereichs-Roots selbst Stile zuzuweisen. In diesem Beispiel sind die Bereichs-Roots die {{htmlelement("div")}}-Elemente, die die Klassen angewendet haben.

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

{{ EmbedLiveSample("Basic style inside scope roots", "100%", "150") }}

### Bereichs-Roots und Bereichs-Limits

In diesem Beispiel haben wir ein HTML-Snippet, das der DOM-Struktur entspricht, die wir früher im [Beschreibung](#beschreibung)-Abschnitt besprochen haben. Diese Struktur stellt eine typische Artikelzusammenfassung dar. Die Hauptmerkmale sind die {{htmlelement("img")}}-Elemente, die auf verschiedenen Ebenen in der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist es, zu zeigen, wie Sie ein Scope-Root und ein Limit verwenden, um `<img>`-Elemente von der Spitze der Hierarchie aus zu stylen, aber nur bis zu (und nicht einschließlich) dem `<img>` innerhalb des {{htmlelement("figure")}}-Elements — effektiv die Erstellung eines Donut-Scopes.

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

- Der erste `@scope`-Block definiert sein Scope-Root als Elemente mit einer Klasse von `.feature` (in diesem Fall nur das äußere `<article>`), und zeigt damit, wie `@scope` verwendet werden kann, um ein spezifisches HTML-Subset zu stylen.
- Der zweite `@scope`-Block definiert ebenfalls das Scope-Root als Elemente mit einer Klasse von `.feature`, definiert jedoch auch ein Scope-Limit von `figure`. Dies stellt sicher, dass die enthaltenen Regelsets nur auf übereinstimmende Elemente innerhalb des Scope-Roots angewendet werden (`<article class="feature"> ... </article>` in diesem Fall), die **nicht** innerhalb von untergeordneten `<figure>`-Elementen verschachtelt sind. Dieser `@scope`-Block enthält ein einzelnes Regelset, das `<img>`-Elemente mit einem dicken schwarzen Rahmen und einer goldenen Hintergrundfarbe stylt.

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

Im gerenderten Code beachten Sie, wie alle `<img>`-Elemente mit dem dicken Rahmen und der goldenen Hintergrundfarbe gestylt werden, mit Ausnahme desjenigen innerhalb des `<figure>`-Elements (beschriftet als "Mein Infografik").

{{ EmbedLiveSample("Scope roots and scope limits", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Beschränken Sie die Reichweite Ihrer Selektoren mit der CSS-`@scope`-At-Regel](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
