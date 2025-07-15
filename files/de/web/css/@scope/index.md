---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@scope`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, Elemente in bestimmten DOM-Unterbäumen auszuwählen und zielgerichtet anzusprechen, ohne dabei unnötig spezifische Selektoren zu schreiben, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu binden.

In JavaScript kann `@scope` über die CSS-Objektmodell-Schnittstelle [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) aufgerufen werden.

## Syntax

Die `@scope` At-Regel enthält einen oder mehrere Regelsets (genannt **scoped style rules**) und definiert einen Geltungsbereich, in dem diese auf ausgewählte Elemente angewandt werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block in Ihrem CSS. In diesem Fall enthält er einen Präambel-Abschnitt mit **scope root** und optionalen **scope limit** Selektoren — diese definieren die oberen und unteren Grenzen des Geltungsbereichs.

   ```css
   @scope (scope root) to (scope limit) {
     /* … */
   }
   ```

2. Als Inline-Stile, die in einem {{htmlelement("style")}}-Element Ihres HTML enthalten sind. In diesem Fall wird die Präambel weggelassen, und das eingeschlossene Regelset wird automatisch auf das umgebende Elternelement des `<style>`-Elements angewendet.

   ```html
   <parent-element>
     <style>
       @scope {
         /* rulesets */
       }
     </style>
   </parent-element>
   ```

   Es ist auch möglich, ein Inline-`@scope` mit einem scope limit Selektor zu kombinieren, wie in `@scope to (scope limit) { ... }`.

## Beschreibung

Ein komplexes Webdokument kann Komponenten wie Header, Footer, Nachrichtenartikel, Karten, Mediaplayer, Anzeigen und andere umfassen. Wenn die Komplexität zunimmt, wird das effektive Management des Stylings dieser Komponenten immer wichtiger, und ein effektives Scoping der Stile hilft uns, diese Komplexität zu bewältigen. Betrachten wir den folgenden DOM-Baum:

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

- Schreiben Sie einen Selektor wie `.feature > .article-body > img`. Allerdings hat dieser eine hohe Spezifität und ist schwer zu überschreiben und zudem eng an die DOM-Struktur gebunden. Wenn sich Ihre Markup-Struktur in Zukunft ändert, müssen Sie möglicherweise Ihr CSS neu schreiben.
- Schreiben Sie etwas weniger Spezifisches wie `.article-body img`. Allerdings würde das alle Bilder in der `section` auswählen.

Hier ist `@scope` nützlich. Es ermöglicht Ihnen, einen präzisen Geltungsbereich festzulegen, innerhalb dessen Ihre Selektoren auf Elemente abzielen können. Zum Beispiel könnten Sie das oben genannte Problem mit einem eigenständigen `@scope`-Block wie dem folgenden lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body` scope root Selektor definiert die obere Grenze des DOM-Baum-Geltungsbereichs, in dem das Regelset angewandt wird, und der `figure` scope limit Selektor definiert die untere Grenze. Dadurch werden nur {{htmlelement("img")}}-Elemente innerhalb eines `<section>` mit der Klasse `article-body`, aber nicht in {{htmlelement("figure")}}-Elementen ausgewählt.

> [!NOTE]
> Diese Art des Scopings — mit einer oberen und einer unteren Grenze — wird allgemein als **Donut-Scope** bezeichnet.

Die obere Grenze des Scopes ist inklusive und die untere Grenze ist exklusive. Um dieses Verhalten zu ändern, können Sie entweder Selektor mit einem universellen Kind-Selektor kombinieren. Zum Beispiel würde `@scope (scope root) to (scope limit > *)` beide Grenzen inklusiv machen, `@scope (scope root > *) to (scope limit)` würde beide Grenzen exklusiv machen, während `@scope (scope root > *) to (scope limit > *)` eine exklusive obere Grenze und eine inklusive untere Grenze bieten würde.

Wenn Sie alle Bilder innerhalb eines `<section>` mit der Klasse `article-body` auswählen möchten, können Sie das scope limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope`-Block inline in einem `<style>`-Element einfügen, das sich wiederum innerhalb des `<section>` mit der Klasse `article-body` befindet:

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
> Es ist wichtig zu verstehen, dass, obwohl `@scope` erlaubt, die Anwendung von Selektoren auf bestimmte DOM-Unterbäume zu isolieren, es die tatsächlich angewandten Stile nicht vollständig auf diese Unterbäume isoliert. Dies ist am deutlichsten bei der Vererbung — Eigenschaften, die von Kindern geerbt werden (zum Beispiel {{cssxref("color")}} oder {{cssxref("font-family")}}), werden weiterhin vererbt, über jeden gesetzten scope limit hinaus.

### Die `:scope` Pseudo-Klasse

Im Kontext eines `@scope`-Blocks repräsentiert die {{cssxref(":scope")}} Pseudo-Klasse den scope root — sie bietet eine einfache Möglichkeit, Stile auf den scope root selbst anzuwenden, von innerhalb des Scopes:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Tatsächlich wird `:scope` implizit allen scoped style rules vorangestellt. Wenn Sie möchten, können Sie `:scope` explizit voranstellen oder den [Nesting](/de/docs/Web/CSS/CSS_nesting) Selektor (`&`) voranstellen, um denselben Effekt zu erzielen, wenn Sie diese Darstellungen leichter verständlich finden.

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

- Ein scope limit kann `:scope` verwenden, um eine spezifische Beziehungsanforderung zwischen Scope Limit und Root festzulegen. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) {
    /* … */
  }
  ```

- Ein scope limit kann Elemente außerhalb des scope root mit `:scope` referenzieren. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) {
    /* … */
  }
  ```

- Scoped style rules können dem Unterbaum nicht entkommen. Selektionen wie `:scope + p` sind ungültig, da diese Auswahl außerhalb des Unterbaums liegen würde.

- Es ist vollkommen gültig, den scope root und das limit als Selektorliste zu definieren, in diesem Fall werden mehrere Scopes definiert. Im folgenden Beispiel werden die Stile auf jedes `<img>` innerhalb eines `<section>` mit der Klasse `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es innerhalb eines `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Das Einfügen eines Regelsets in einen `@scope`-Block beeinflusst die Spezifität seines Selektors nicht, unabhängig von den Selektoren, die innerhalb des scope root und des limits verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img {
    /* … */
  }
}
```

Wenn Sie jedoch entscheiden, die `:scope` Pseudo-Klasse ausdrücklich Ihren scoped Selektoren voranstellen, müssen Sie sie bei der Berechnung ihrer Spezifität berücksichtigen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
    /* … */
  }
}
```

Wenn Sie den `&`-Selektor innerhalb eines `@scope`-Blocks verwenden, repräsentiert `&` den scope root Selektor; es wird intern als dieser Selektor berechnet, der innerhalb einer {{cssxref(":is", ":is()")}} Pseudo-Klasse Funktion eingeschlossen ist. Zum Beispiel in:

```css
@scope (figure, #primary) {
  & img {
    /* … */
  }
}
```

`& img` ist äquivalent zu `:is(figure, #primary) img`. Da `:is()` die Spezifität seines spezifischsten Arguments übernimmt (`#primary` in diesem Fall), beträgt die Spezifität des scoped `& img` Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

### Der Unterschied zwischen `:scope` und `&` innerhalb von `@scope`

`:scope` repräsentiert den übereinstimmenden scope root, während `&` den Selektor repräsentiert, der verwendet wird, um den scope root zu erfassen. Aufgrund dieser Tatsache ist es möglich, `&` mehrfach zu verketten. Sie können jedoch `:scope` nur einmal verwenden — Sie können keinen scope root innerhalb eines anderen scope root erfassen.

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

`@scope` fügt ein neues Kriterium zur [CSS-Cascade](/de/docs/Web/CSS/CSS_cascade) hinzu: **scoping proximity**. Dies besagt, dass, wenn zwei Scopes widersprüchliche Stile haben, der Stil angewandt wird, der die geringste Anzahl von Sprüngen in der DOM-Baumhierarchie zum scope root hat. Lassen Sie uns ein Beispiel betrachten, um zu sehen, was das bedeutet.

Betrachten Sie den folgenden HTML-Ausschnitt, in dem unterschiedlich thematisierte Karten ineinander verschachtelt sind:

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

Wenn Sie das Themen-CSS so schreiben würden, könnten Sie in Schwierigkeiten geraten:

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

Der innerste Absatz sollte schwarz gefärbt sein, da er sich innerhalb einer hellen Themenkarte befindet. Doch er wird sowohl von `.light-theme p` als auch von `.dark-theme p` angesprochen. Da die Regel `.dark-theme p` später in der Quellreihenfolge erscheint, wird sie angewendet, und der Absatz wird fälschlicherweise weiß gefärbt.

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

Nun wird der innerste Absatz korrekt schwarz gefärbt. Dies liegt daran, dass er nur eine Ebene in der DOM-Baum-Hierarchie vom `.light-theme` scope root entfernt ist, jedoch zwei Ebenen vom `.dark-theme` scope root. Daher gewinnt der helle Stil.

> [!NOTE]
> Scoping proximity übertrumpft die Quellreihenfolge, wird jedoch selbst durch andere, höher priorisierte Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Layer](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) überstimmt.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von scope roots

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links in Elementen mit einer `.light-scheme`- bzw. `.dark-scheme`-Klasse anzusprechen. Beachten Sie, wie `:scope` verwendet wird, um den scope roots selbst Stil zu verleihen. In diesem Beispiel sind die scope roots die {{htmlelement("div")}}-Elemente, denen die Klassen zugeordnet sind.

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

Der obige Code wird so gerendert:

{{ EmbedLiveSample("Basic style inside scope roots", "100%", "150") }}

### Scope roots und scope limits

In diesem Beispiel haben wir einen HTML-Ausschnitt, der der DOM-Struktur entspricht, die wir zuvor im Abschnitt [Beschreibung](#beschreibung) behandelt haben. Diese Struktur repräsentiert eine typische Artikelzusammenfassung. Die wichtigsten Merkmale sind die {{htmlelement("img")}}-Elemente, die sich auf verschiedenen Ebenen in der Struktur befinden.

Das Ziel dieses Beispiels ist es, zu zeigen, wie man einen scope root und ein limit nutzt, um `<img>`-Elemente von der Spitze der Hierarchie an zu stylen, aber nur bis (und nicht einschließlich) der `<img>`-Elemente innerhalb des {{htmlelement("figure")}}-Elements — effektiv ein Donut-Scope zu erstellen.

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

- Der erste `@scope`-Block definiert seinen scope root als Elemente mit einer Klasse von `.feature` (in diesem Fall nur das äußere `<article>`), was demonstriert, wie `@scope` verwendet werden kann, um ein spezifisches HTML-Subset zu thematisieren.
- Der zweite `@scope`-Block definiert ebenfalls seinen scope root als Elemente mit einer Klasse von `.feature`, aber auch ein scope limit von `figure`. Dies stellt sicher, dass enthaltene Regelsets nur auf passende Elemente innerhalb des scope root (`<article class="feature"> ... </article>` in diesem Fall) angewandt werden, die **nicht** in untergeordneten `<figure>`-Elementen verschachtelt sind. Dieser `@scope`-Block enthält ein einzelnes Regelset, das `<img>`-Elemente mit einem dicken schwarzen Rahmen und einer goldenen Hintergrundfarbe stylt.

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

Im gerenderten Code beachten Sie, wie alle `<img>`-Elemente mit dem dicken Rahmen und dem goldenen Hintergrund gestylt sind, außer dem im `<figure>`-Element (beschriftet "Meine Infografik").

{{ EmbedLiveSample("Scope roots and scope limits", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Beschränken Sie die Reichweite Ihrer Selektoren mit der CSS `@scope` At-Regel](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
