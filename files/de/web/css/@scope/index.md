---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
---

{{CSSRef}}

Die **`@scope`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, Elemente in bestimmten DOM-Unterbäumen auszuwählen. Dadurch können Sie Elemente präzise anvisieren, ohne allzu spezifische Selektoren zu schreiben, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng mit der DOM-Struktur zu verknüpfen.

In JavaScript kann `@scope` über die CSS-Objektmodell-Schnittstelle [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) aufgerufen werden.

## Syntax

Die `@scope`-At-Regel enthält einen oder mehrere Regelsätze (sogenannte **scoped style rules**) und definiert einen Geltungsbereich, in dem sie auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block in Ihrem CSS, der einen Vorlaufabschnitt enthält, der **Scope-Root**- und optional **Scope-Limit**-Selektoren beinhaltet – diese definieren die oberen und unteren Grenzen des Geltungsbereichs.

   ```css
   @scope (scope root) to (scope limit) {
     rulesets
   }
   ```

2. Als Inline-Styles innerhalb eines {{htmlelement("style")}}-Elements in Ihrem HTML, in diesem Fall wird der Vorlauf weggelassen und der eingeschlossene Regelsatz wird automatisch auf das umschließende Elternelement des `<style>`-Elements beschränkt.

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

Ein komplexes Webdokument könnte Komponenten wie Header, Footer, Nachrichtenartikel, Karten, Mediaplayer, Anzeigen und andere enthalten. Mit zunehmender Komplexität wird das effektive Management der Stile für diese Komponenten zu einem Anliegen, und eine effektive Eingrenzung der Stile hilft, diese Komplexität zu bewältigen. Betrachten Sie den folgenden DOM-Baum:

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

Wenn Sie das {{htmlelement("img")}}-Element innerhalb des {{htmlelement("section")}} mit der Klasse `article-body` auswählen wollten, könnten Sie Folgendes tun:

- Einen Selektor wie `.feature > .article-body > img` schreiben. Das hat jedoch eine hohe Spezifität und ist schwer zu überschreiben und zudem eng mit der DOM-Struktur verknüpft. Wenn sich Ihre Markup-Struktur in Zukunft ändert, müssten Sie möglicherweise Ihr CSS neu schreiben.
- Etwas weniger Spezifisches wie `.article-body img` schreiben. Dies würde jedoch alle Bilder innerhalb des `section` auswählen.

Hier ist `@scope` nützlich. Es ermöglicht Ihnen, einen genauen Geltungsbereich zu definieren, innerhalb dessen Ihre Selektoren Elemente anvisieren können. Zum Beispiel könnten Sie das obige Problem mit einem eigenständigen `@scope`-Block wie dem folgenden lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body`-Scope-Root-Selektor definiert die obere Grenze des DOM-Baum-Geltungsbereichs, in dem der Regelsatz angewendet wird, und der `figure`-Scope-Limit-Selektor definiert die untere Grenze. Infolgedessen werden nur {{htmlelement("img")}}-Elemente innerhalb eines `<section>` mit der Klasse `article-body`, jedoch nicht innerhalb von {{htmlelement("figure")}}-Elementen, ausgewählt.

> [!NOTE]
> Diese Art der Eingrenzung — mit einer oberen und unteren Grenze — wird allgemein als **Donut-Scope** bezeichnet.

Die obere Grenze des Scopes ist inklusive und die untere Grenze exklusiv. Um dieses Verhalten zu ändern, können Sie beide Selektoren mit einem universellen Kindselektor kombinieren. Zum Beispiel würde `@scope (scope root) to (scope limit > *)` beide Grenzen inklusive machen, `@scope (scope root > *) to (scope limit)` würde beide Grenzen exklusiv machen, während `@scope (scope root > *) to (scope limit > *)` eine exklusive obere und eine inklusive untere Grenze geben würde.

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
> Es ist wichtig zu verstehen, dass, obwohl `@scope` es Ihnen ermöglicht, die Anwendung von Selektoren auf bestimmte DOM-Unterbäume zu isolieren, die angewendeten Stile nicht vollständig auf diese Unterbäume beschränkt sind. Dies ist am auffälligsten bei der Vererbung — Eigenschaften, die von Kindern geerbt werden (z. B. {{cssxref("color")}} oder {{cssxref("font-family")}}), werden immer noch vererbt, über jedes gesetzte Scope-Limit hinaus.

### Die `:scope` Pseudo-Klasse

Im Kontext eines `@scope`-Blocks repräsentiert die {{cssxref(":scope")}}-Pseudo-Klasse die Scope-Root — sie bietet eine einfache Möglichkeit, Stile direkt auf die Scope-Root anzuwenden, von innerhalb des Geltungsbereichs:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Tatsächlich wird `:scope` implizit allen eingeschlossenen Stilregeln vorangestellt. Wenn Sie möchten, können Sie `:scope` explizit voranstellen oder den [Verschachtelungsselektor](/de/docs/Web/CSS/CSS_nesting) (`&`) voranstellen, um denselben Effekt zu erzielen, falls Sie diese Darstellungen leichter verständlich finden.

Die drei Regeln im folgenden Block sind alle gleichwertig darin, was sie auswählen:

```css
@scope (.feature) {
  img { ... }

  :scope img { ... }

  & img { ... }
}
```

### Hinweise zur Verwendung von Scoped-Selektoren

- Ein Scope-Limit kann `:scope` verwenden, um eine spezifische Beziehungsanforderung zwischen dem Scope-Limit und dem Root zu spezifizieren. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) { ... }
  ```

- Ein Scope-Limit kann Elemente außerhalb des Scope-Roots mit `:scope` referenzieren. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) { ... }
  ```

- Eingeschlossene Stilregeln können den Unterbaum nicht verlassen. Auswahlen wie `:scope + p` sind ungültig, da diese Auswahl außerhalb des Unterbaums läge.

- Es ist durchaus zulässig, die Scope-Root und das Limit als eine Selektorliste zu definieren, wobei in diesem Fall mehrere Scopes definiert werden. Im folgenden Beispiel werden die Stile auf jedes `<img>` angewendet, das sich innerhalb eines `<section>` mit einer Klasse von `article-hero` oder `article-body` befindet, jedoch nicht, wenn es innerhalb eines `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Das Einfügen eines Regelsatzes in einen `@scope`-Block beeinträchtigt nicht die Spezifität seines Selektors, unabhängig von den innerhalb des Scope-Roots und Limits verwendeten Selektoren. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie jedoch beschließen, die Pseudo-Klasse `:scope` explizit an Ihre Scoped-Selektoren voranzustellen, müssen Sie sie bei der Berechnung ihrer Spezifität einbeziehen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Wenn der `&`-Selektor innerhalb eines `@scope`-Blocks verwendet wird, repräsentiert `&` den Scope-Root-Selektor; er wird intern als dieser Selektor berechnet, der in eine {{cssxref(":is", ":is()")}}-Pseudo-Klassenfunktion eingeschlossen ist. Also zum Beispiel in:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

ist `& img` gleichwertig zu `:is(figure, #primary) img`. Da `:is()` die Spezifität seines spezifischsten Arguments übernimmt (`#primary` in diesem Fall), ist die Spezifität des eingeschlossenen `& img`-Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

### Der Unterschied zwischen `:scope` und `&` in `@scope`

`:scope` repräsentiert den übereinstimmenden Scope-Root, während `&` den Selektor darstellt, der verwendet wird, um den Scope-Root zu finden. Aus diesem Grund ist es möglich, `&` mehrfach zu verketten. Sie können jedoch `:scope` nur einmal verwenden — Sie können keinen Scope-Root innerhalb eines Scope-Roots matchen.

```css
@scope (.feature) {
  /* Selects a .feature inside the matched root .feature */
  & & { ... }

  /* Doesn't work */
  :scope :scope { ... }
}
```

### Wie `@scope`-Konflikte gelöst werden

`@scope` fügt ein neues Kriterium zu der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade) hinzu: **Scoping-Nähe**. Dies besagt, dass, wenn zwei Scopes widersprüchliche Stile haben, der Stil angewendet wird, der die geringste Anzahl an Sprüngen in der DOM-Baum-Hierarchie zum Scope-Root hat. Schauen wir uns ein Beispiel an, um zu sehen, was das bedeutet.

Betrachten Sie den folgenden HTML-Code-Ausschnitt, in dem verschieden thematisierte Karten ineinander verschachtelt sind:

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

Wenn Sie das Theme-CSS so schreiben, stoßen Sie auf ein Problem:

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

Der innerste Absatz sollte schwarz gefärbt werden, weil er sich innerhalb einer Karte mit hellem Thema befindet. Er wird jedoch sowohl von `.light-theme p` als auch von `.dark-theme p` anvisiert. Da die `.dark-theme p`-Regel später in der Quellreihenfolge erscheint, wird sie angewendet, und der Absatz wird fälschlicherweise weiß gefärbt.

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

Jetzt wird der innerste Absatz korrekt schwarz gefärbt. Das liegt daran, dass er nur eine Ebene der DOM-Baum-Hierarchie vom `.light-theme`-Scope-Root entfernt ist, aber zwei Ebenen vom `.dark-theme`-Scope-Root. Daher gewinnt der helle Stil.

> [!NOTE]
> Scoping-Nähe übertrumpft die Quellreihenfolge, wird aber selbst von anderen, höher priorisierten Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) übertroffen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von Scope-Roots

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme` und `.dark-scheme` Klasse entsprechend zu matchen. Beachten Sie, wie `:scope` verwendet wird, um die Scope-Roots selbst auszuwählen und zu gestalten. In diesem Beispiel sind die Scope-Roots die {{htmlelement("div")}}-Elemente, die die Klassen angewendet haben.

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

Der obige Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Basic style inside scope roots", "100%", "150") }}

### Scope-Roots und Scope-Limits

In diesem Beispiel haben wir einen HTML-Schnipsel, der der DOM-Struktur entspricht, über die wir zuvor im Abschnitt [Beschreibung](#beschreibung) gesprochen haben. Diese Struktur stellt eine typische Artikelzusammenfassung dar. Die wichtigsten Eigenschaften zu beachten sind die {{htmlelement("img")}}-Elemente, die auf verschiedenen Ebenen in der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist es zu zeigen, wie man einen Scope-Root und ein Limit verwendet, um `<img>`-Elemente ab der obersten Hierarchie zu gestalten, jedoch nur bis hinunter (und nicht einschließlich) zu den `<img>`-Elementen im {{htmlelement("figure")}}-Element — im Grunde genommen ein Donut-Scope zu erstellen.

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

- Der erste `@scope`-Block definiert seinen Scope-Root als Elemente mit einer Klasse von `.feature` (in diesem Fall nur das äußere `<article>`), um zu demonstrieren, wie `@scope` verwendet werden kann, um einem spezifischen HTML-Subset einen Stil zu verleihen.
- Der zweite `@scope`-Block definiert ebenfalls seinen Scope-Root als Elemente mit einer Klasse von `.feature`, aber auch ein Scope-Limit von `figure`. Dies stellt sicher, dass die enthaltenen Regelsätze nur auf übereinstimmende Elemente innerhalb des Scope-Roots (`<article class="feature"> ... </article>` in diesem Fall) angewendet werden, die **nicht** innerhalb von Nachkommen-`<figure>`-Elementen verschachtelt sind. Dieser `@scope`-Block enthält einen einzelnen Regelsatz, der `<img>`-Elemente mit einem dicken schwarzen Rahmen und einer goldenen Hintergrundfarbe gestaltet.

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

Im gerenderten Code beachten Sie, wie alle `<img>`-Elemente mit dem dicken Rahmen und der goldenen Hintergrundfarbe gestaltet werden, außer dem einen innerhalb des `<figure>`-Elements (beschriftet als "Meine Infografik").

{{ EmbedLiveSample("Scope roots and scope limits", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Beschränken Sie die Reichweite Ihrer Selektoren mit der CSS `@scope` At-Regel](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
