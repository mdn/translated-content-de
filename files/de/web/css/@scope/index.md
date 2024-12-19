---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`@scope`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, Elemente in bestimmten DOM-Subbäumen auszuwählen und präzise anzusprechen, ohne übermäßig spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu koppeln.

In JavaScript kann `@scope` über die CSS-Objektmodell-Schnittstelle [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) zugegriffen werden.

## Syntax

Die `@scope`-At-Regel enthält eine oder mehrere Regelsets (als **scoped style rules** bezeichnet) und definiert einen Geltungsbereich, in dem diese auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block in Ihrem CSS, bei dem es einen Präludiumsabschnitt gibt, der **scope root** und optionale **scope limit** Selektoren enthält — diese definieren die obere und untere Grenze des Geltungsbereichs.

   ```css
   @scope (scope root) to (scope limit) {
     rulesets
   }
   ```

2. Als Inline-Styles, die innerhalb eines {{htmlelement("style")}}-Elements in Ihrem HTML enthalten sind, wobei das Präludium weggelassen wird und das eingeschlossene Regelset automatisch auf das umschließende Elternelement des `<style>`-Elements beschränkt wird.

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

Ein komplexes Webdokument könnte Komponenten wie Header, Footer, Nachrichtenartikel, Karten, Mediaplayer, Anzeigen und andere umfassen. Mit steigender Komplexität wird das effektive Management der Stilregeln für diese Komponenten zunehmend zu einer Herausforderung, und eine effektive Begrenzung der Stile hilft uns, diese Komplexität zu bewältigen. Betrachten Sie den folgenden DOM-Baum:

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

Wenn Sie das {{htmlelement("img")}}-Element innerhalb des {{htmlelement("section")}} mit einer Klasse von `article-body` auswählen möchten, könnten Sie Folgendes tun:

- Schreiben Sie einen Selektor wie `.feature > .article-body > img`. Das hat jedoch eine hohe Spezifität, ist schwer zu überschreiben und eng mit der DOM-Struktur verbunden. Wenn sich Ihre Markup-Struktur in Zukunft ändert, müssen Sie möglicherweise Ihr CSS umschreiben.
- Schreiben Sie etwas weniger Spezifisches wie `.article-body img`. Das würde jedoch alle Bilder innerhalb des `section` auswählen.

Hier ist `@scope` nützlich. Es ermöglicht Ihnen, einen genauen Geltungsbereich zu definieren, innerhalb dessen Ihre Selektoren Elemente ansprechen dürfen. Zum Beispiel könnten Sie das obige Problem mit einem eigenständigen `@scope`-Block wie dem folgenden lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body` scope root Selektor definiert die obere Grenze des DOM-Baum-Geltungsbereichs, in dem das Regelset angewendet wird, und der `figure` scope limit Selektor definiert die untere Grenze. Dadurch werden nur {{htmlelement("img")}}-Elemente innerhalb eines `<section>` mit einer Klasse von `article-body`, jedoch nicht innerhalb von {{htmlelement("figure")}}-Elementen ausgewählt.

> [!NOTE]
> Diese Art der Begrenzung — mit einer oberen und unteren Grenze — wird allgemein als **donut scope** bezeichnet.

Wenn Sie alle Bilder innerhalb eines `<section>` mit einer Klasse von `article-body` auswählen möchten, können Sie das scope limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope`-Block inline innerhalb eines `<style>`-Elements einschließen, das sich wiederum innerhalb des `<section>` mit einer Klasse von `article-body` befindet:

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
> Es ist wichtig zu verstehen, dass, obwohl `@scope` es ermöglicht, die Anwendung von Selektoren auf bestimmte DOM-Subbäume zu isolieren, die angewandten Stile nicht vollständig auf diese Subbäume beschränkt sind. Dies ist am deutlichsten bei der Vererbung zu erkennen — Eigenschaften, die von Kindern vererbt werden (zum Beispiel {{cssxref("color")}} oder {{cssxref("font-family")}}) werden weiterhin, über jedes festgelegte scope limit hinaus, vererbt.

### Die `:scope` Pseudo-Klasse

Im Kontext eines `@scope`-Blocks repräsentiert die {{cssxref(":scope")}}-Pseudo-Klasse die scope root — sie bietet einen einfachen Weg, um Stile auf die scope root selbst anzuwenden, von innerhalb des Geltungsbereichs:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Tatsächlich wird `:scope` implizit allen scoped style rules vorangestellt. Wenn Sie möchten, können Sie `:scope` explizit voranstellen oder den [Verschachtelung](/de/docs/Web/CSS/CSS_nesting)-Selektor (`&`) hinzufügen, um denselben Effekt zu erzielen, wenn Sie diese Darstellungen leichter verständlich finden.

Die drei Regeln im folgenden Block sind alle gleichwertig, was sie auswählen:

```css
@scope (.feature) {
  img { ... }

  :scope img { ... }

  & img { ... }
}
```

### Hinweise zur Verwendung von scoped Selektoren

- Ein scope limit kann `:scope` verwenden, um eine spezifische Beziehungsanforderung zwischen dem scope limit und root festzulegen. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) { ... }
  ```

- Ein scope limit kann Elemente außerhalb der scope root mit `:scope` referenzieren. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) { ... }
  ```

- Scoped style rules können den Subbaum nicht verlassen. Auswahlen wie `:scope + p` sind ungültig, da diese Auswahl sich außerhalb des Subbaums befinden würde.

- Es ist absolut zulässig, die scope root und limit als Selektorliste zu definieren, in diesem Fall werden mehrere Geltungsbereiche definiert. Im folgenden Beispiel werden die Stile auf jedes `<img>` innerhalb eines `<section>` mit einer Klasse von `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es innerhalb eines `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Das Einschließen eines Regelsets in einen `@scope`-Block beeinflusst nicht die Spezifität seines Selektors, unabhängig von den innerhalb der scope root und limit verwendeten Selektoren. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie sich jedoch entscheiden, die `:scope`-Pseudo-Klasse explizit Ihren scoped Selektoren voranzustellen, müssen Sie diese bei der Berechnung ihrer Spezifität berücksichtigen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Wenn Sie den `&`-Selektor innerhalb eines `@scope`-Blocks verwenden, repräsentiert `&` den scope root Selektor; es wird intern berechnet als dieser Selektor, der innerhalb einer {{cssxref(":is", ":is()")}}-Pseudo-Klassenfunktion eingepackt ist. So ist zum Beispiel:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` ist äquivalent zu `:is(figure, #primary) img`. Da `:is()` die Spezifität seines spezifischsten Arguments annimmt (`#primary` in diesem Fall), beträgt die Spezifität des scoped `& img` Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

### Der Unterschied zwischen `:scope` und `&` innerhalb von `@scope`

`:scope` repräsentiert die übereinstimmende scope root, während `&` den Selektor repräsentiert, der verwendet wird, um die scope root zu erreichen. Aus diesem Grund ist es möglich, `&` mehrmals zu verketten. Sie können jedoch nur `:scope` einmal verwenden — Sie können keine scope root innerhalb einer scope root erreichen.

```css
@scope (.feature) {
  /* Selects a .feature inside the matched root .feature */
  & & { ... }

  /* Doesn't work */
  :scope :scope { ... }
}
```

### Wie `@scope`-Konflikte gelöst werden

`@scope` fügt ein neues Kriterium zur [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade) hinzu: **scoping proximity**. Dies besagt, dass, wenn zwei Geltungsbereiche widersprüchliche Stile haben, der Stil angewendet wird, der die kleinste Anzahl von Sprüngen in der DOM-Baum-Hierarchie zur scope root hat. Lassen Sie uns ein Beispiel betrachten, um zu sehen, was das bedeutet.

Nehmen Sie das folgende HTML-Snippet, bei dem unterschiedlich gestaltete Karten ineinander verschachtelt sind:

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

Wenn Sie das Themen-CSS so schreiben würden, würden Sie auf Probleme stoßen:

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

Der innerste Absatz soll schwarz gefärbt werden, weil er sich innerhalb einer Karte mit hellem Thema befindet. Er wird jedoch sowohl durch `.light-theme p` als auch durch `.dark-theme p` angezielt. Da die `.dark-theme p`-Regel später in der Quellreihenfolge erscheint, wird sie angewendet und der Absatz wird fälschlicherweise weiß gefärbt.

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

Nun wird der innerste Absatz korrekt schwarz gefärbt. Dies liegt daran, dass er nur eine DOM-Baum-Hierarchieebene von der `.light-theme` scope root entfernt ist, aber zwei Ebenen von der `.dark-theme` scope root entfernt. Daher gewinnt der helle Stil.

> [!NOTE]
> Scoping proximity übertrifft die Quellreihenfolge, wird jedoch selbst von anderen, höher priorisierten Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Layern](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/Specificity) übertroffen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von scope roots

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme`- und `.dark-scheme`-Klasse entsprechend auszuwählen. Beachten Sie, wie `:scope` verwendet wird, um die scope roots selbst auszuwählen und zu stylen. In diesem Beispiel sind die scope roots die {{htmlelement("div")}}-Elemente, denen die Klassen zugewiesen sind.

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

### Scope roots und scope limits

In diesem Beispiel haben wir ein HTML-Snippet, das der DOM-Struktur entspricht, über die wir zuvor im Abschnitt [Beschreibung](#beschreibung) gesprochen haben. Diese Struktur stellt eine typische Artikelzusammenfassung dar. Die Schlüsselmerkmale, die es zu beachten gilt, sind die {{htmlelement("img")}}-Elemente, die auf verschiedenen Ebenen in der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist es zu zeigen, wie man eine scope root und ein limit verwendet, um `<img>`-Elemente ab der Spitze der Hierarchie zu stylen, jedoch nur bis zum Punkt (und nicht einschließlich) des `<img>` innerhalb des {{htmlelement("figure")}}-Elements — effektiv einen donut scope zu erzeugen.

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

- Der erste `@scope`-Block definiert seine scope root als Elemente mit einer Klasse von `.feature` (in diesem Fall nur das äußere `<article>`), was zeigt, wie `@scope` verwendet werden kann, um einem spezifischen HTML-Subset ein Thema zuzuteilen.
- Der zweite `@scope`-Block definiert ebenfalls seine scope root als Elemente mit einer Klasse von `.feature`, definiert jedoch auch ein scope limit von `figure`. Dies stellt sicher, dass enthaltene Regelsets nur auf übereinstimmende Elemente innerhalb der scope root angewendet werden (`<article class="feature"> ... </article>` in diesem Fall), die **nicht** innerhalb von Nachkommen `<figure>`-Elementen verschachtelt sind. Dieser `@scope`-Block enthält ein einzelnes Regelset, das `<img>`-Elemente mit einem dicken schwarzen Rand und einer goldenen Hintergrundfarbe stylt.

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

In dem gerenderten Code beachten Sie, wie alle `<img>`-Elemente mit dem dicken Rand und der goldenen Hintergrundfarbe gestylt werden, außer dasjenige innerhalb des `<figure>`-Elements (beschriftet "My infographic").

{{ EmbedLiveSample("Scope roots and scope limits", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Limit the reach of your selectors with the CSS `@scope` at-rule](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
