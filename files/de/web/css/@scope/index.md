---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: f28085e76dfe4ef1987473b101db1338b41ed27f
---

{{CSSRef}}

Die **`@scope`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, Elemente in bestimmten DOM-Unterbäumen auszuwählen. Damit können Sie Elemente gezielt ansprechen, ohne übermäßig spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu koppeln.

In JavaScript kann auf `@scope` über die CSS-Objektmodell-Schnittstelle [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) zugegriffen werden.

## Syntax

Die `@scope`-At-Regel enthält eine oder mehrere Regelsätze (bezeichnet als **scoped style rules**) und definiert einen Bereich, in dem diese auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block in Ihrem CSS, wobei es einen Präludium-Abschnitt gibt, der **Scope-Root**- und optionale **Scope-Limit**-Selektoren enthält — diese definieren die oberen und unteren Grenzen des Umfangs.

   ```css
   @scope (scope root) to (scope limit) {
     rulesets
   }
   ```

2. Als Inline-Stile innerhalb eines {{htmlelement("style")}}-Elements in Ihrem HTML, wobei das Präludium weggelassen wird und der eingeschlossene Regelsatz automatisch auf das umschließende übergeordnete Element des `<style>`-Elements angewendet wird.

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

Ein komplexes Webdokument könnte Komponenten wie Header, Footer, Nachrichtenartikel, Karten, Medien-Player, Anzeigen und andere enthalten. Mit zunehmender Komplexität wird das effektive Management des Stylings für diese Komponenten zu einer größeren Herausforderung, und eine effektive Eingrenzung der Stile hilft uns, diese Komplexität zu bewältigen. Betrachten wir den folgenden DOM-Baum:

```plain-nolint
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

Wenn Sie das {{htmlelement("img")}}-Element innerhalb des {{htmlelement("section")}} mit der Klasse `article-body` auswählen wollten, könnten Sie Folgendes tun:

- Einen Selektor wie `.feature > .article-body > img` schreiben. Das hat jedoch eine hohe Spezifität und ist schwer zu überschreiben, zudem ist es stark an die DOM-Struktur gebunden. Wenn sich Ihre Markup-Struktur in Zukunft ändert, müssten Sie möglicherweise Ihr CSS neu schreiben.
- Etwas weniger Spezifisches wie `.article-body img` schreiben. Das würde jedoch alle Bilder innerhalb des `section` auswählen.

Hier ist `@scope` nützlich. Es ermöglicht Ihnen, einen präzisen Bereich zu definieren, innerhalb dessen Ihre Selektoren Elemente ansprechen können. Zum Beispiel könnten Sie das oben genannte Problem mit einem eigenständigen `@scope`-Block wie folgt lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der Scope-Root-Selektor `.article-body` definiert die obere Grenze des DOM-Baum-Bereichs, in dem der Regelsatz angewendet wird, und der Scope-Limit-Selektor `figure` definiert die untere Grenze. Infolgedessen werden nur {{htmlelement("img")}}-Elemente innerhalb eines `<section>` mit einer Klasse `article-body`, aber nicht innerhalb von {{htmlelement("figure")}}-Elementen ausgewählt.

> [!NOTE]
> Diese Art der Eingrenzung – mit einer oberen und einer unteren Grenze – wird allgemein als **Donut-Bereich** bezeichnet.

Die obere Grenze eines Bereichs ist inklusiv und die untere Grenze exklusiv. Um dieses Verhalten zu ändern, können Sie entweder den Selektor mit einem universellen Kind-Selektor kombinieren. Zum Beispiel würde `@scope (scope root) to (scope limit > *)` beide Grenzen inklusiv machen, `@scope (scope root > *) to (scope limit)` würde beide Grenzen exklusiv machen, während `@scope (scope root > *) to (scope limit > *)` eine exklusive obere Grenze und eine inklusive untere Grenze geben würde.

Wenn Sie alle Bilder innerhalb eines `<section>` mit einer Klasse `article-body` auswählen möchten, können Sie das Scope-Limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope`-Block inline innerhalb eines `<style>`-Elements einfügen, das wiederum innerhalb eines `<section>` mit einer Klasse `article-body` ist:

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
> Es ist wichtig zu verstehen, dass `@scope`, obwohl es Ihnen ermöglicht, die Anwendung von Selektoren auf bestimmte DOM-Unterbäume zu isolieren, die angewendeten Stile nicht vollständig auf diese Unterbäume beschränkt. Dies ist am auffälligsten bei der Vererbung – Eigenschaften, die von Kindern geerbt werden (zum Beispiel {{cssxref("color")}} oder {{cssxref("font-family")}}), werden über die festgelegte Bereichsgrenze hinaus vererbt.

### Die `:scope` Pseudoklasse

Im Kontext eines `@scope`-Blocks repräsentiert die {{cssxref(":scope")}} Pseudoklasse die Scope-Root – sie bietet eine einfache Möglichkeit, Stile auf das Scope-Root selbst anzuwenden, von innen heraus:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

In der Tat wird `:scope` implizit allen scopen Style-Regeln vorangestellt. Wenn Sie möchten, können Sie `:scope` explizit voranstellen oder den [Nesting](/de/docs/Web/CSS/CSS_nesting)-Selektor (`&`) voranstellen, um denselben Effekt zu erzielen, wenn Sie diese Darstellungen leichter verständlich finden.

Die drei Regeln im folgenden Block sind alle gleichwertig in dem, was sie auswählen:

```css
@scope (.feature) {
  img { ... }

  :scope img { ... }

  & img { ... }
}
```

### Hinweise zur Nutzung von scopen Selektoren

- Ein Scope-Limit kann `:scope` verwenden, um eine spezifische Beziehungsanforderung zwischen dem Scope-Limit und dem Root festzulegen. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) { ... }
  ```

- Ein Scope-Limit kann auf Elemente außerhalb des Scope-Roots unter Verwendung von `:scope` verweisen. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) { ... }
  ```

- Scopen Style-Regeln können den Unterbaum nicht verlassen. Selektionen wie `:scope + p` sind ungültig, da diese Auswahl außerhalb des Unterbaums wäre.

- Es ist vollkommen gültig, das Scope-Root und das Limit als Selektorliste zu definieren, in diesem Fall werden mehrere Bereiche definiert. Im folgenden Beispiel werden die Stile auf jedes `<img>` innerhalb eines `<section>` mit einer Klasse `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es innerhalb eines `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Das Einfügen eines Regelsatzes in einen `@scope`-Block beeinflusst nicht die Spezifität seines Selektors, unabhängig von den Selektoren, die innerhalb des Scope-Roots und -Limits verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie sich jedoch dafür entscheiden, die `:scope` Pseudoklasse explizit vor Ihre scopen Selektoren zu stellen, müssen Sie diese berücksichtigen, wenn Sie deren Spezifität berechnen. `:scope`, wie alle regulären Pseudoklassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Wenn Sie den `&`-Selektor innerhalb eines `@scope`-Blocks verwenden, stellt `&` den Scope-Root-Selektor dar; er wird intern als dieser Selektor innerhalb einer {{cssxref(":is", ":is()")}} Pseudoklasse-Funktion berechnet. Zum Beispiel in:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` ist äquivalent zu `:is(figure, #primary) img`. Da `:is()` die Spezifität seines spezifischsten Arguments übernimmt (`#primary` in diesem Fall), beträgt die Spezifität des scopen `& img`-Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

### Der Unterschied zwischen `:scope` und `&` innerhalb von `@scope`

`:scope` repräsentiert das übereinstimmende Scope-Root, während `&` den Selektor darstellt, der verwendet wird, um das Scope-Root zu matchen. Daher ist es möglich, `&` mehrmals zu verketten. Sie können jedoch `:scope` nur einmal verwenden – Sie können nicht ein Scope-Root innerhalb eines Scope-Roots matchen.

```css
@scope (.feature) {
  /* Selects a .feature inside the matched root .feature */
  & & { ... }

  /* Doesn't work */
  :scope :scope { ... }
}
```

### Wie `@scope`-Konflikte gelöst werden

`@scope` fügt ein neues Kriterium zur [CSS Cascade](/de/docs/Web/CSS/CSS_cascade) hinzu: **Scoping-Nähe**. Dies besagt, dass wenn zwei Scopes widersprüchliche Stile haben, der Stil angewendet wird, der die geringste Anzahl von Sprüngen in der DOM-Baum-Hierarchie bis zum Scope-Root hat. Schauen wir uns ein Beispiel an, um zu sehen, was das bedeutet.

Nehmen Sie den folgenden HTML-Schnipsel, bei dem unterschiedlich gestaltete Karten ineinander verschachtelt sind:

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

Wenn Sie das Thema-CSS so schreiben, laufen Sie in Schwierigkeiten:

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

Der innerste Absatz sollte schwarz gefärbt sein, da er sich in einer lichtthematischen Karte befindet. Er wird jedoch sowohl von `.light-theme p` als auch von `.dark-theme p` angesprochen. Da die Regel `.dark-theme p` später in der Quellreihenfolge erscheint, wird sie angewendet, und der Absatz wird falsch weiß gefärbt.

Um das zu beheben, können Sie `@scope` wie folgt verwenden:

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

Jetzt wird der innerste Absatz korrekt schwarz gefärbt. Das liegt daran, dass er nur eine Ebene in der DOM-Baum-Hierarchie vom Scope-Root `.light-theme` entfernt ist, aber zwei Ebenen vom Scope-Root `.dark-theme` entfernt ist. Daher gewinnt der helle Stil.

> [!NOTE]
> Die Scoping-Nähe übertrifft die Quellreihenfolge, wird jedoch von anderen, höher priorisierten Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Layers](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) übertroffen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von Scope-Roots

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme`- und `.dark-scheme`-Klasse entsprechend zu matchen. Beachten Sie, wie `:scope` verwendet wird, um die Scope-Roots selbst zu selektieren und zu stylen. In diesem Beispiel sind die Scope-Roots die {{htmlelement("div")}}-Elemente, die die Klassen auf sich haben.

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

{{ EmbedLiveSample("Basic style inside scope roots", "100%", "150") }}

### Scope-Roots und Scope-Limits

In diesem Beispiel haben wir einen HTML-Schnipsel, der mit der DOM-Struktur übereinstimmt, über die wir zuvor im [Beschreibung](#beschreibung)-Abschnitt gesprochen haben. Diese Struktur repräsentiert eine typische Artikelsammlung. Die wichtigsten Merkmale sind die {{htmlelement("img")}}-Elemente, die in verschiedenen Ebenen in der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist es zu zeigen, wie man einen Scope-Root und ein Limit verwendet, um `<img>`-Elemente ab der oberen Hierarchieebene zu stylen, jedoch nur so weit (und nicht einschließlich) des `<img>` innerhalb des {{htmlelement("figure")}}-Elements – im Effekt einen Donut-Bereich zu schaffen.

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

- Der erste `@scope`-Block definiert seinen Scope-Root als Elemente mit einer Klasse `.feature` (in diesem Fall nur das äußere `<article>`), was zeigt, wie `@scope` verwendet werden kann, um ein spezifisches HTML-Subset zu gestalten.
- Der zweite `@scope`-Block definiert ebenfalls seinen Scope-Root als Elemente mit einer Klasse `.feature`, jedoch auch als Scope-Limit `figure`. Dies stellt sicher, dass eingeschlossene Regelsätze nur auf übereinstimmende Elemente innerhalb des Scope-Roots angewendet werden (`<article class="feature"> ... </article>` in diesem Fall), die **nicht** innerhalb von Nachkommen-`<figure>`-Elementen verschachtelt sind. Dieser `@scope`-Block enthält einen einzigen Regelsatz, der `<img>`-Elemente mit einem dicken schwarzen Rand und einer goldenen Hintergrundfarbe stylt.

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

Im gerenderten Code beachten Sie, wie alle `<img>`-Elemente mit dem dicken Rand und der goldenen Hintergrundfarbe gestylt sind, außer für das innerhalb des `<figure>`-Elements (beschriftet mit "Meine Infografik").

{{ EmbedLiveSample("Scope roots and scope limits", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Limit the reach of your selectors with the CSS `@scope` at-rule](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
