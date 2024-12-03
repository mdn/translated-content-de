---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: 4a5b85ef295cf8f663bc23dad6918bb9bcc49dce
---

{{CSSRef}}

Die **`@scope`**-Regel in [CSS](/de/docs/Web/CSS) ermöglicht es Ihnen, Elemente in bestimmten DOM-Teilbäumen auszuwählen, um Elemente präzise anzusteuern, ohne zu spezifische Selektoren zu schreiben, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu koppeln.

In JavaScript kann auf `@scope` über das CSS-Objektmodell-Interface [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) zugegriffen werden.

## Syntax

Die `@scope`-Regel enthält ein oder mehrere Regelsets (bezeichnet als **scoped style rules**) und definiert einen Geltungsbereich, in dem sie auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block innerhalb Ihres CSS, wobei er einen Vorspannbereich enthält, der **Scope-Root** und optionale **Scope-Limit**-Selektoren umfasst — diese definieren die oberen und unteren Grenzen des Geltungsbereiches.

   ```css
   @scope (scope root) to (scope limit) {
     rulesets
   }
   ```

2. Als inline Styles innerhalb eines {{htmlelement("style")}}-Elements in Ihrem HTML, wobei der Vorspannbereich weggelassen wird und das eingeschlossene Regelset automatisch an das umschließende Elternelement des `<style>`-Elements gebunden wird.

   ```html
   <parent-element>
     <style>
       @scope {
         rulesets
       }
     </style>
   </parent-element>
   ```

## Beschreibung

Ein komplexes Webdokument könnte Komponenten wie Kopfzeilen, Fußzeilen, Nachrichtenartikel, Karten, Mediaplayer, Anzeigen und andere enthalten. Mit zunehmender Komplexität wird das effektive Verwenden von Styles für diese Komponenten schwieriger, und eine effektive Eingrenzung von Styles hilft, diese Komplexität zu bewältigen. Betrachten wir den folgenden DOM-Baum:

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

Wenn Sie das {{htmlelement("img")}}-Element innerhalb des {{htmlelement("section")}}-Elements mit der Klasse `article-body` auswählen möchten, könnten Sie folgendes tun:

- Schreiben Sie einen Selektor wie `.feature > .article-body > img`. Das hat jedoch eine hohe Spezifität, ist schwer zu überschreiben und eng an die DOM-Struktur gekoppelt. Wenn sich Ihre Markup-Struktur in der Zukunft ändert, müssen Sie möglicherweise Ihr CSS neu schreiben.
- Schreiben Sie etwas weniger Spezifisches wie `.article-body img`. Dies würde jedoch alle Bilder innerhalb des `section`-Elements auswählen.

Hier kommt `@scope` ins Spiel. Es erlaubt Ihnen, einen genauen Bereich zu definieren, innerhalb dessen Ihre Selektoren Elemente ansteuern dürfen. Zum Beispiel könnten Sie das obige Problem mit einem eigenständigen `@scope`-Block wie dem folgenden lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body`-Scope-Root-Selektor definiert die obere Grenze des DOM-Baum-Geltungsbereiches, in dem das Regelset angewendet wird, und der `figure`-Scope-Limit-Selektor definiert die untere Grenze. Dadurch werden nur {{htmlelement("img")}}-Elemente innerhalb eines `<section>`-Elements mit der Klasse `article-body`, aber nicht innerhalb von {{htmlelement("figure")}}-Elementen, ausgewählt.

> [!NOTE]
> Diese Art der Eingrenzung — mit einer oberen und unteren Grenze — wird allgemein als **Donut-Scope** bezeichnet.

Wenn Sie alle Bilder innerhalb eines `<section>` mit der Klasse `article-body` auswählen möchten, können Sie das Scope-Limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope`-Block inline innerhalb eines `<style>`-Elements aufnehmen, das sich wiederum innerhalb des `<section>` mit der Klasse `article-body` befindet:

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
> Es ist wichtig zu verstehen, dass, obwohl `@scope` es Ihnen ermöglicht, die Anwendung von Selektoren auf bestimmte DOM-Teilbäume zu isolieren, die angewandten Styles nicht vollständig innerhalb dieser Teilbäume isoliert werden. Dies ist am auffälligsten bei der Vererbung — Eigenschaften, die von Kindern geerbt werden (wie {{cssxref("color")}} oder {{cssxref("font-family")}}), werden immer noch vererbt, über jede festgelegte Scope-Grenze hinaus.

### Die `:scope` Pseudoklasse

Im Kontext eines `@scope`-Blocks repräsentiert die {{cssxref(":scope")}}-Pseudoklasse den Scope-Root — sie bietet eine einfache Möglichkeit, Styles auf den Scope-Root selbst anzuwenden, von innerhalb des Scopes:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Tatsächlich wird `:scope` implizit allen scoped style rules vorangestellt. Wenn Sie möchten, können Sie `:scope` explizit voranstellen oder den [nesting](/de/docs/Web/CSS/CSS_nesting)-Selektor (`&`) voranstellen, um denselben Effekt zu erzielen, falls Sie diese Darstellungen leichter verständlich finden.

Die drei Regeln im folgenden Block sind alle äquivalent in dem, was sie auswählen:

```css
@scope (.feature) {
  img { ... }

  :scope img { ... }

  & img { ... }
}
```

### Hinweise zur Verwendung von scoped Selektoren

- Ein Scope-Limit kann `:scope` verwenden, um eine bestimmte Beziehungsanforderung zwischen dem Scope-Limit und dem Root anzugeben. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) { ... }
  ```

- Ein Scope-Limit kann Elemente außerhalb des Scope-Root mithilfe von `:scope` referenzieren. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) { ... }
  ```

- Scoped style rules können den Teilbaum nicht verlassen. Selektionen wie `:scope + p` sind ungültig, da diese Auswahl außerhalb des Teilbaums liegen würde.

- Es ist völlig legitim, den Scope-Root und das Limit als Selektorliste zu definieren, wobei in diesem Fall mehrere Scopes definiert werden. Im folgenden Beispiel werden die Styles auf jedes `<img>` innerhalb eines `<section>` mit der Klasse `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es in einem `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Das Einfügen eines Regelsets innerhalb eines `@scope`-Blocks beeinflusst nicht die Spezifität seines Selektors, unabhängig von den Selektoren, die innerhalb des Scope-Root und des Limits verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie sich jedoch entscheiden, die `:scope`-Pseudoklasse explizit Ihren scoped Selektoren voranzustellen, müssen Sie dies bei der Berechnung ihrer Spezifität berücksichtigen. `:scope` hat, wie alle regulären Pseudoklassen, eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Bei der Verwendung des `&`-Selektors innerhalb eines `@scope`-Blocks repräsentiert `&` den Scope-Root-Selektor; es wird intern als dieser Selektor, der in eine {{cssxref(":is", ":is()")}}-Pseudoklassenfunktion gekapselt ist, berechnet. Also zum Beispiel in:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` ist äquivalent zu `:is(figure, #primary) img`. Da `:is()` die Spezifität seines spezifischsten Arguments annimmt (`#primary` in diesem Fall), beträgt die Spezifität des scoped `& img`-Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

### Der Unterschied zwischen `:scope` und `&` innerhalb von `@scope`

`:scope` repräsentiert den übereinstimmenden Scope-Root, während `&` den Selektor repräsentiert, der verwendet wird, um den Scope-Root zu treffen. Deshalb ist es möglich, `&` mehrfach zu verketten. Sie können `:scope` jedoch nur einmal verwenden — Sie können keinen Scope-Root innerhalb eines Scope-Roots treffen.

```css
@scope (.feature) {
  /* Selects a .feature inside the matched root .feature */
  & & { ... }

  /* Doesn't work */
  :scope :scope { ... }
}
```

### Wie `@scope`-Konflikte gelöst werden

`@scope` fügt ein neues Kriterium zur [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade) hinzu: **Scope-Nähe**. Dies besagt, dass bei zwei Scopes, die in Konflikt stehende Styles haben, derjenige Style angewendet wird, der die kleinste Anzahl von Sprüngen im DOM-Baum zur Scope-Root hat. Schauen wir uns ein Beispiel an, um zu sehen, was das bedeutet.

Nehmen Sie den folgenden HTML-Ausschnitt, in dem verschieden thematisierte Karten nacheinander verschachtelt sind:

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

Wenn Sie das Thema-CSS so schreiben würden, hätten Sie Schwierigkeiten:

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

Der innerste Absatz sollte schwarz gefärbt sein, da er sich innerhalb einer Karte mit hellstem Thema befindet. Jedoch wird er sowohl durch `.light-theme p` als auch `.dark-theme p` angesprochen. Da die `.dark-theme p`-Regel später in der Quellreihenfolge erscheint, wird sie angewendet und der Absatz wird fälschlicherweise weiß gefärbt.

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

Nun ist der innerste Absatz korrekt schwarz gefärbt. Das liegt daran, dass er nur eine DOM-Baum-Hierarchieebene von der `.light-theme`-Scope-Root entfernt ist, jedoch zwei Ebenen von der `.dark-theme`-Scope-Root entfernt. Daher gewinnt der helle Style.

> [!NOTE]
> Scope-Nähe übersteuert die Quellreihenfolge, wird jedoch selbst durch andere, höher priorisierte Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Schichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/Specificity) übersteuert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von Scope-Roots

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme` und `.dark-scheme` Klasse jeweils anzusprechen. Beachten Sie, wie `:scope` verwendet wird, um die Scope-Roots selbst auszuwählen und zu stylen. In diesem Beispiel sind die Scope-Roots die {{htmlelement("div")}}-Elemente, die die Klassen auf sich haben.

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

{{ EmbedLiveSample("Basic style inside scope roots", "100%", "150") }}

### Scope-Roots und Scope-Limits

In diesem Beispiel haben wir einen HTML-Ausschnitt, der der DOM-Struktur entspricht, von der wir im Abschnitt [Beschreibung](#beschreibung) zuvor gesprochen haben. Diese Struktur repräsentiert eine typische Artikelzusammenfassung. Die wichtigsten Merkmale sind die {{htmlelement("img")}}-Elemente, die auf verschiedenen Ebenen in der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist es, zu zeigen, wie man einen Scope-Root und ein Limit verwendet, um `<img>`-Elemente ab der Spitze der Hierarchie zu stylen, aber nur soweit (und nicht einschließlich) das `<img>` innerhalb des {{htmlelement("figure")}}-Elements — also effektiv ein Donut-Scope zu erstellen.

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

- Der erste `@scope`-Block definiert seinen Scope-Root als Elemente mit einer Klasse von `.feature` (in diesem Fall nur das äußere `<article>`), und demonstriert, wie `@scope` verwendet werden kann, um ein spezifisches HTML-Subset zu thematisieren.
- Der zweite `@scope`-Block definiert ebenfalls seinen Scope-Root als Elemente mit einer Klasse von `.feature`, definiert aber auch ein Scope-Limit von `figure`. Dies stellt sicher, dass enthaltene Regelsets nur auf übereinstimmende Elemente innerhalb des Scope-Roots angewendet werden (`<article class="feature"> ... </article>` in diesem Fall), die **nicht** innerhalb absteigender `<figure>`-Elemente verschachtelt sind. Dieser `@scope`-Block enthält ein einzelnes Regelset, das `<img>`-Elemente mit einem dicken schwarzen Rahmen und einer goldenen Hintergrundfarbe stylt.

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

Im gerenderten Code beachten Sie, wie alle `<img>`-Elemente mit dem dicken Rahmen und der goldenen Hintergrundfarbe gestylt sind, mit Ausnahme desjenigen innerhalb des `<figure>`-Elements (beschriftet "My infographic").

{{ EmbedLiveSample("Scope roots and scope limits", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Limit the reach of your selectors with the CSS `@scope` at-rule](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
