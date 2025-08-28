---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: 4708192749fe1ab205f018cd78f1422aa7b25050
---

Die **`@scope`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, Elemente in bestimmten DOM-Unterbäumen auszuwählen, Elemente präzise anzusprechen, ohne zu spezifische Selektoren zu schreiben, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu binden.

In JavaScript kann `@scope` über das CSS-Objektmodell-Interface [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) zugegriffen werden.

## Syntax

Die `@scope`-At-Regel enthält eine oder mehrere Regelsätze (bezeichnet als **scoped style rules**) und definiert einen Bereich, in dem diese auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block innerhalb Ihres CSS, wobei er einen Präambelabschnitt enthält, der **scope root** und optionale **scope limit** Selektoren umfasst — diese definieren die oberen und unteren Grenzen des Anwendungsbereichs.

   ```css
   @scope (scope root) to (scope limit) {
     /* … */
   }
   ```

2. Als Inline-Stile, die innerhalb eines {{htmlelement("style")}}-Elements in Ihrem HTML enthalten sind, wobei die Präambel weggelassen wird und der eingeschlossene Regelsatz automatisch auf das umgebende Elternelement des `<style>`-Elements beschränkt ist.

   ```html
   <parent-element>
     <style>
       @scope {
         /* rulesets */
       }
     </style>
   </parent-element>
   ```

   Es ist auch möglich, ein Inline-`@scope` mit einem Bereichsbeschränkungsselektor zu kombinieren, wie in `@scope to (scope limit) { ... }`.

## Beschreibung

Ein komplexes Web-Dokument könnte Komponenten wie Header, Footer, Nachrichtenartikel, Karten, Mediaplayer, Anzeigen und andere enthalten. Mit zunehmender Komplexität wird das effektive Verwalten des Stylings für diese Komponenten immer wichtiger, und eine effektive Bereichsfestlegung der Styles hilft uns, diese Komplexität zu bewältigen. Betrachten Sie den folgenden DOM-Baum:

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

- Einen Selektor wie `.feature > .article-body > img` schreiben. Das hat jedoch eine hohe Spezifität, ist also schwer zu überschreiben, und ist auch eng an die DOM-Struktur gekoppelt. Wenn Ihre Markup-Struktur in Zukunft geändert wird, müssen Sie möglicherweise Ihr CSS umschreiben.
- Etwas weniger Spezifisches schreiben wie `.article-body img`. Das würde jedoch alle Bilder innerhalb des `section` auswählen.

Hier ist `@scope` nützlich. Es ermöglicht Ihnen, einen präzisen Anwendungsbereich zu definieren, innerhalb dessen Ihre Selektoren Elemente ansprechen können. Zum Beispiel könnten Sie das oben genannte Problem mit einem eigenständigen `@scope`-Block wie folgt lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body` scope root Selektor definiert die obere Grenze des DOM-Baum Anwendungsbereichs, in dem der Regelsatz angewendet wird, und der `figure` scope limit Selektor definiert die untere Grenze. Infolgedessen werden nur {{htmlelement("img")}}-Elemente in einem `<section>` mit einer Klasse von `article-body`, aber nicht innerhalb von {{htmlelement("figure")}}-Elementen, ausgewählt.

> [!NOTE]
> Diese Art der Bereichsfestlegung — mit einer oberen und unteren Grenze — wird häufig als **donut scope** bezeichnet.

Die obere Grenze des Anwendungsbereichs ist inklusive und die untere Grenze exklusiv. Um dieses Verhalten zu ändern, können Sie entweder den Selektor mit einem universellen Kind-Selektor kombinieren. Zum Beispiel, `@scope (scope root) to (scope limit > *)` würde beide Grenzen inklusiv machen, `@scope (scope root > *) to (scope limit)` würde beide Grenzen exklusiv machen, während `@scope (scope root > *) to (scope limit > *)` eine exklusive obere und eine inklusive untere Grenze geben würde.

Wenn Sie alle Bilder innerhalb eines `<section>` mit einer Klasse von `article-body` auswählen möchten, können Sie die Bereichsbeschränkung weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope`-Block inline innerhalb eines `<style>`-Elements enthalten, das seinerseits innerhalb des `<section>` mit einer Klasse von `article-body` ist:

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
> Es ist wichtig zu verstehen, dass, obwohl `@scope` es Ihnen ermöglicht, die Anwendung von Selektoren auf bestimmte DOM-Unterbäume zu isolieren, es die angewendeten Styles nicht vollständig innerhalb dieser Unterbäume isoliert. Dies ist am auffälligsten bei Vererbung — Eigenschaften, die von Kindern geerbt werden (z. B. {{cssxref("color")}} oder {{cssxref("font-family")}}), werden immer noch vererbt, jenseits einer festgelegten Bereichsbeschränkung.

### `:scope` Pseudo-Klasse innerhalb von `@scope` Blöcken

Im Kontext eines `@scope` Blocks bietet die {{cssxref(":scope")}} Pseudo-Klasse eine bequeme Möglichkeit, Styles direkt auf das scope root anzuwenden, wie folgt:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Hier einige Überlegungen zu `:scope` innerhalb von `@scope` Blöcken:

- `:scope` fügt eine Klassen-Spezifität hinzu (siehe [Spezifität in @scope](#specificity_in_scope) für Details).

- Eine Bereichsbeschränkung kann `:scope` verwenden, um eine spezifische Beziehungsanforderung zwischen der Bereichsbeschränkung und dem Root anzugeben. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) {
    /* … */
  }
  ```

- Eine Bereichsbeschränkung kann Elemente außerhalb des scope root mit `:scope` referenzieren. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) {
    /* … */
  }
  ```

- Bereichsgebundene Stilregeln können nicht aus dem Unterbaum entweichen. Auswahlen wie `:scope + p` sind ungültig, da diese Auswahl außerhalb des Unterbaums wäre.

- Es ist absolut gültig, das scope root und die Begrenzung als Selektorliste zu definieren, in welchem Fall mehrere Bereiche definiert werden. Im folgenden Beispiel werden die Styles auf jedes `<img>` innerhalb eines `<section>` mit der Klasse `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es innerhalb eines `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Innerhalb einer `@scope` Regel verhalten sich sowohl nackte Selektoren als auch `&` so, als wäre `:where(:scope)` dem Selektor vorangestellt.
Da [`:where()`](/de/docs/Web/CSS/:where) keine Spezifität hat, fügen nackte Selektoren und `&` kein Gewicht hinzu und nur die Spezifität des restlichen Selektors zählt.
Ein `& img` Selektor ist gleichbedeutend damit, `:where(:scope) img` zu schreiben.

In beiden Fällen im folgenden Beispiel kommt die einzige Spezifität von `img` (`0-0-1`):

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

Im Gegensatz dazu, mit der expliziten Verwendung von `:scope` wird das scope root ausgewählt und fügt eine Klassen-Spezifität (`0-1-0`) hinzu, da `:scope` eine Pseudo-Klasse ist.
Im folgenden Beispiel hat `:scope img` eine Spezifität von `0-1-1`:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
    /* … */
  }
}
```

### Wie `@scope` Konflikte gelöst werden

`@scope` fügt ein neues Kriterium zur [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade) hinzu: **Scoping-Nähe**. Dies besagt, dass wenn zwei Bereiche widersprüchliche Styles haben, der Stil angewendet wird, der die kleinste Anzahl von Sprüngen in der DOM-Baum-Hierarchie bis zum scope root hat. Schauen wir uns ein Beispiel an, um zu sehen, was das bedeutet.

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

Wenn Sie das Thema CSS so schreiben, würden Sie in Schwierigkeiten geraten:

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

Der innerste Absatz soll schwarz gefärbt sein, da er sich innerhalb einer Karte im "light" Theme befindet. Er wird jedoch sowohl von `.light-theme p` als auch von `.dark-theme p` angesprochen. Da die Regel `.dark-theme p` später in der Quellreihenfolge erscheint, wird sie angewendet und der Absatz wird fälschlicherweise weiß gefärbt.

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

Nun ist der innerste Absatz korrekt schwarz gefärbt. Dies liegt daran, dass er nur eine Ebene in der DOM-Baum-Hierarchie vom `.light-theme` scope root entfernt ist, aber zwei Ebenen vom `.dark-theme` scope root entfernt. Daher gewinnt der "light" Style.

> [!NOTE]
> Die Scoping-Nähe übertrumpft die Quellreihenfolge, wird jedoch von anderen, höherpriorisierten Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Layer](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) übergangen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von scope roots

In diesem Beispiel verwenden wir zwei separate `@scope` Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme` und `.dark-scheme` Klasse jeweils anzusprechen. Beachten Sie, wie `:scope` verwendet wird, um Styling direkt auf die scope roots selbst anzuwenden. In diesem Beispiel sind die scope roots die {{htmlelement("div")}} Elemente, denen die Klassen zugewiesen sind.

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

### Scope roots und scope limits

In diesem Beispiel haben wir einen HTML-Ausschnitt, der der DOM-Struktur entspricht, die wir zuvor im Abschnitt [Beschreibung](#beschreibung) erwähnt haben. Diese Struktur stellt eine typische Artikelausfassung dar. Die wichtigsten Merkmale, die zu beachten sind, sind die {{htmlelement("img")}}-Elemente, die auf verschiedenen Ebenen in der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist es, zu zeigen, wie man einen scope root und limit verwendet, um `<img>` Elemente zu stylen, beginnend an der Spitze der Hierarchie, jedoch nur bis (und einschließlich) der `<img>` innerhalb des {{htmlelement("figure")}}-Elements — effektiv einen donut scope erstellend.

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

- Der erste `@scope` Block definiert seinen scope root als Elemente mit einer Klasse von `.feature` (in diesem Fall nur das äußere `<article>`), um zu zeigen, wie `@scope` verwendet werden kann, um ein spezifisches HTML-Subset zu gestalten.
- Der zweite `@scope` Block definiert ebenfalls seinen scope root als Elemente mit einer Klasse von `.feature`, definiert aber auch eine Bereichsbeschränkung von `figure`. Dies stellt sicher, dass enthaltene Regelsätze nur auf übereinstimmende Elemente innerhalb des scope root (`<article class="feature"> ... </article>` in diesem Fall) angewendet werden, die **nicht** innerhalb von Nachkommen- `<figure>`-Elementen verschachtelt sind. Dieser `@scope` Block enthält einen einzigen Regelsatz, der `<img>` Elemente mit einem dicken schwarzen Rahmen und einer goldenen Hintergrundfarbe stylt.

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

Im gerenderten Code beachten Sie, wie alle `<img>`-Elemente mit dem dicken Rahmen und der goldenen Hintergrundfarbe gestylt sind, außer dem innerhalb des `<figure>`-Elements (beschriftet "My infographic").

{{EmbedLiveSample("Scope roots and scope limits", "100%", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Beschränken Sie die Reichweite Ihrer Selektoren mit der CSS `@scope` At-Regel](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
