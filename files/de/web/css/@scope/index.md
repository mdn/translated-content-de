---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`@scope`**-Regel ([CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule)) ermöglicht es Ihnen, Elemente in bestimmten DOM-Subbäumen auszuwählen, um Elemente präzise zu erfassen, ohne übermäßig spezifische Selektoren zu schreiben, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu binden.

In JavaScript kann auf `@scope` über die CSS-Objektmodell-Schnittstelle [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) zugegriffen werden.

## Syntax

Die `@scope`-Regel enthält einen oder mehrere Regelsätze (bezeichnet als **scoped style rules**) und definiert einen Bereich, in dem sie auf ausgewählte Elemente angewendet werden sollen. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block innerhalb Ihrer CSS, in dem Fall enthält es einen Vorspannabschnitt, der **Scope-Root**- und optionale **Scope-Limit**-Selektoren umfasst — diese definieren die oberen und unteren Grenzen des Bereichs.

   ```css
   @scope (scope root) to (scope limit) {
     /* … */
   }
   ```

2. Als Inline-Stile innerhalb eines {{htmlelement("style")}}-Elements in Ihrem HTML, wobei der Vorspann weggelassen wird und der eingeschlossene Regelsatz automatisch auf das umgebende Elternelement des `<style>`-Elements beschränkt wird.

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

Ein komplexes Webdokument könnte Komponenten wie Kopfzeilen, Fußzeilen, Nachrichtenartikel, Karten, Medienwiedergabegeräte, Anzeigen und mehr enthalten. Mit zunehmender Komplexität wird das effektive Verwalten der Stile dieser Komponenten zu einer größeren Herausforderung, und das wirksame Eingrenzen von Stilen hilft uns, diese Komplexität zu bewältigen. Betrachten wir den folgenden DOM-Baum:

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

Wenn Sie das {{htmlelement("img")}}-Element innerhalb des {{htmlelement("section")}}, das eine Klasse `article-body` hat, auswählen wollten, könnten Sie Folgendes tun:

- Schreiben Sie einen Selektor wie `.feature > .article-body > img`. Dies hat jedoch eine hohe Spezifität und ist daher schwer überschreibbar und auch eng an die DOM-Struktur gebunden. Wenn sich Ihre Markup-Struktur in der Zukunft ändert, müssen Sie möglicherweise Ihr CSS neu schreiben.
- Schreiben Sie etwas weniger Spezifisches wie `.article-body img`. Dies würde jedoch alle Bilder innerhalb des `section` auswählen.

Hier ist `@scope` nützlich. Es ermöglicht Ihnen, einen genauen Bereich zu definieren, in dem Ihre Selektoren Elemente erfassen. Zum Beispiel könnten Sie das obige Problem mit einem eigenständigen `@scope`-Block wie dem folgenden lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body`-Scope-Root-Selektor definiert die obere Grenze des DOM-Baum-Bereichs, in dem der Regelsatz angewendet wird, und der `figure`-Scope-Limit-Selektor definiert die untere Grenze. Als Ergebnis werden nur {{htmlelement("img")}}-Elemente innerhalb eines `<section>` mit einer Klasse `article-body`, jedoch nicht innerhalb von {{htmlelement("figure")}}-Elementen, ausgewählt.

> [!NOTE]
> Diese Art des Scopings — mit einer oberen und unteren Grenze — wird allgemein als **Donut-Scope** bezeichnet.

Die obere Grenze des Scopes ist inklusive und die untere Grenze exklusiv. Um dieses Verhalten zu ändern, können Sie entweder den Selektor mit einem universellen Kind-Selektor kombinieren. Zum Beispiel würde `@scope (scope root) to (scope limit > *)` beide Grenzen inklusive machen, `@scope (scope root > *) to (scope limit)` würde beide Grenzen exklusiv machen, während `@scope (scope root > *) to (scope limit > *)` eine exklusive obere und eine inklusive untere Grenze geben würde.

Wenn Sie alle Bilder innerhalb eines `<section>` mit einer Klasse `article-body` auswählen möchten, können Sie das Scope-Limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope`-Block inline innerhalb eines `<style>`-Elements einfügen, das wiederum innerhalb des `<section>` mit der Klasse `article-body` liegt:

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
> Es ist wichtig zu verstehen, dass `@scope`, während es Ihnen ermöglicht, die Anwendung von Selektoren auf bestimmte DOM-Subbäume zu isolieren, die angewendeten Stile nicht vollständig auf diese Subbäume isoliert. Dies ist am auffälligsten bei Vererbung — Eigenschaften, die von Kindern geerbt werden (zum Beispiel {{cssxref("color")}} oder {{cssxref("font-family")}}), werden weiterhin vererbt, über jede gesetzte Scope-Grenze hinaus.

### Die `:scope`-Pseudoklasse

Im Kontext eines `@scope`-Blocks repräsentiert die {{cssxref(":scope")}}-Pseudoklasse die Scope-Root — sie bietet eine einfache Möglichkeit, Stile auf den Scope-Root selbst anzuwenden, von innerhalb des Scopes:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Tatsächlich wird `:scope` implizit allen skopierten Stilregeln vorangestellt. Wenn Sie möchten, können Sie `:scope` explizit voranstellen oder den [Verschachtelungsselektor](/de/docs/Web/CSS/CSS_nesting) (`&`) voranstellen, um denselben Effekt zu erzielen, wenn Sie diese Darstellungen als verständlicher empfinden.

Die drei Regeln im folgenden Block sind alle hinsichtlich ihrer Auswahl gleichwertig:

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

### Hinweise zur Verwendung von Scoped-Selektoren

- Ein Scope-Limit kann `:scope` verwenden, um eine spezifische Beziehungsanforderung zwischen dem Scope-Limit und dem Root anzugeben. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) {
    /* … */
  }
  ```

- Ein Scope-Limit kann mit `:scope` auf Elemente außerhalb des Scope-Roots verweisen. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) {
    /* … */
  }
  ```

- Ausgewählte Stilregeln können den Subtree nicht verlassen. Auswahlen wie `:scope + p` sind ungültig, weil diese Auswahl außerhalb des Subtrees liegen würde.

- Es ist völlig zulässig, den Scope-Root und das Limit als Selektorenliste zu definieren. In diesem Fall werden mehrere Scopes definiert. Im folgenden Beispiel werden die Stile auf jedes `<img>` innerhalb eines `<section>` mit einer Klasse `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es in einem `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Das Einfügen eines Regelsatzes in einen `@scope`-Block beeinflusst nicht die Spezifität seines Selektors, unabhängig von den Selektoren, die innerhalb des Scope-Roots und des Limits verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img {
    /* … */
  }
}
```

Wenn Sie sich jedoch entscheiden, die `:scope`-Pseudoklasse explizit Ihren skopierten Selektoren voranzustellen, müssen Sie sie bei der Berechnung ihrer Spezifität berücksichtigen. `:scope`, wie alle regulären Pseudoklassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
    /* … */
  }
}
```

Bei Verwendung des `&`-Selektors innerhalb eines `@scope`-Blocks repräsentiert `&` den Scope-Root-Selektor; es wird intern als dieser Selektor, der in eine {{cssxref(":is", ":is()")}}-Pseudoklassenfunktion gewickelt ist, berechnet. Zum Beispiel, in:

```css
@scope (figure, #primary) {
  & img {
    /* … */
  }
}
```

ist `& img` gleichwertig mit `:is(figure, #primary) img`. Da `:is()` die Spezifität seines spezifischsten Arguments übernimmt (`#primary` in diesem Fall), beträgt die Spezifität des skopierten `& img`-Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

### Der Unterschied zwischen `:scope` und `&` innerhalb von `@scope`

`:scope` repräsentiert den übereinstimmenden Scope-Root, während `&` den Selektor darstellt, der verwendet wird, um den Scope-Root zu vergleichen. Aufgrund dessen ist es möglich, `&` mehrfach zu verketten. Sie können jedoch `:scope` nur einmal verwenden — Sie können keinen Scope-Root innerhalb eines Scope-Roots vergleichen.

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

`@scope` fügt ein neues Kriterium zur [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade) hinzu: **Scoping-Nähe**. Dies besagt, dass, wenn zwei Scopes widersprüchliche Stile haben, der Stil angewendet wird, der die geringste Anzahl von Sprüngen in der DOM-Baum-Hierarchie bis zum Scope-Root hat. Schauen wir uns ein Beispiel an, um zu sehen, was das bedeutet.

Nehmen Sie den folgenden HTML-Ausschnitt, in dem verschiedene Themenkarten ineinander verschachtelt sind:

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

Wenn Sie das Thema-CSS so schreiben, würden Sie auf Probleme stoßen:

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

Der innerste Absatz soll schwarz eingefärbt werden, weil er innerhalb einer Karte mit hellem Thema liegt. Er wird jedoch sowohl von `.light-theme p` als auch von `.dark-theme p` angesprochen. Weil die `.dark-theme p`-Regel später in der Quellreihenfolge erscheint, wird sie angewendet, und der Absatz wird fälschlicherweise weiß eingefärbt.

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

Jetzt wird der innerste Absatz korrekt schwarz eingefärbt. Dies liegt daran, dass er nur eine Ebene der DOM-Baum-Hierarchie vom `.light-theme` Scope-Root entfernt ist, aber zwei Ebenen vom `.dark-theme` Scope-Root entfernt ist. Daher gewinnt der hellere Stil.

> [!NOTE]
> Scoping-Nähe überlagert die Quellreihenfolge, wird aber selbst von anderen, höherpriorisierten Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Layer](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) überschrieben.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von Scope-Roots

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme`- und `.dark-scheme`-Klasse entsprechend zu erfassen. Beachten Sie, wie `:scope` verwendet wird, um den Scope-Roots selbst Stil zu geben und sie zu erfassen. In diesem Beispiel sind die Scope-Roots die {{htmlelement("div")}}-Elemente, denen die Klassen zugewiesen sind.

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

{{ EmbedLiveSample("Grundlegender Stil innerhalb von Scope-Roots", "100%", "150") }}

### Scope-Roots und Scope-Limits

In diesem Beispiel haben wir einen HTML-Ausschnitt, der der DOM-Struktur entspricht, über die wir früher im [Beschreibung](#beschreibung)-Abschnitt gesprochen haben. Diese Struktur repräsentiert eine typische Artikelle-Übersicht. Die wichtigsten Merkmale, die zu beachten sind, sind die {{htmlelement("img")}}-Elemente, die auf verschiedenen Ebenen in der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist es, zu zeigen, wie man einen Scope-Root und ein Limit verwendet, um `<img>`-Elemente zu stylen, beginnend oben in der Hierarchie, aber nur so weit nach unten (und nicht inklusive) wie das `<img>` innerhalb des {{htmlelement("figure")}}-Elements — tatsächlich ein Donut-Scope zu erstellen.

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

- Der erste `@scope`-Block definiert seinen Scope-Root als Elemente mit einer Klasse von `.feature` (in diesem Fall nur das äußere `<article>`), zeigt, wie `@scope` verwendet werden kann, um ein spezifisches HTML-Subset zu thematisieren.
- Der zweite `@scope`-Block definiert ebenfalls seinen Scope-Root als Elemente mit einer Klasse von `.feature`, aber auch ein Scope-Limit von `figure`. Dies stellt sicher, dass enthaltene Regelsätze nur auf übereinstimmende Elemente innerhalb des Scope-Roots (in diesem Fall `<article class="feature"> ... </article>`) angewendet werden, die **nicht** innerhalb von nachfolgenden `<figure>`-Elementen verschachtelt sind. Dieser `@scope`-Block enthält einen einzigen Regelsatz, der `<img>`-Elemente mit einem dicken schwarzen Rahmen und einer goldenen Hintergrundfarbe stylt.

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

Im gerenderten Code beachten Sie, wie alle `<img>`-Elemente mit dem dicken Rahmen und der goldenen Hintergrundfarbe gestylt sind, außer für das innerhalb des `<figure>`-Elements (beschriftet "Mein Infografik").

{{ EmbedLiveSample("Scope-Roots und Scope-Limits", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Begrenzen Sie die Reichweite Ihrer Selektoren mit der CSS `@scope`-Regel (in Englisch)](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
