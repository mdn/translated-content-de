---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`@scope`** [CSS-](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, Elemente in spezifischen DOM-Unterbäumen auszuwählen. Dadurch können Sie Elemente präzise anvisieren, ohne allzu spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu koppeln.

In JavaScript kann `@scope` über die CSS-Objektmodell-Schnittstelle [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule) angesprochen werden.

## Syntax

Die `@scope` At-Regel enthält eine oder mehrere Regelsets (genannt **scoped style rules**) und definiert einen Geltungsbereich, in dem sie auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block innerhalb Ihres CSS, in dem Fall beinhaltet er einen Präambel-Abschnitt, der **scope root** und optionale **scope limit** Selektoren enthält — diese definieren die oberen und unteren Grenzen des Scopes.

   ```css
   @scope (scope root) to (scope limit) {
     rulesets
   }
   ```

2. Als Inline-Stile, die innerhalb eines {{htmlelement("style")}} Elements in Ihrem HTML enthalten sind, in diesem Fall wird die Präambel weggelassen, und das eingeschlossene Regelset wird automatisch auf das umschließende Elternelement des `<style>` Elements angewendet.

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

Ein komplexes Webdokument könnte Komponenten wie Kopfzeilen, Fußzeilen, Nachrichtenartikel, Karten, Mediaplayer, Anzeigen und andere enthalten. Mit zunehmender Komplexität wird das effektive Management der Stile für diese Komponenten immer wichtiger, und das effektive Scoping von Stilen hilft uns dabei, diese Komplexität zu bewältigen. Betrachten wir den folgenden DOM-Baum:

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

Wenn Sie das {{htmlelement("img")}}-Element im {{htmlelement("section")}} mit einer Klasse `article-body` auswählen möchten, könnten Sie Folgendes tun:

- Einen Selektor wie `.feature > .article-body > img` schreiben. Dieser hat jedoch eine hohe Spezifität, die schwer zu überschreiben ist, und ist auch eng an die DOM-Struktur gekoppelt. Wenn sich Ihre Markup-Struktur in Zukunft ändert, könnten Sie Ihren CSS umschreiben müssen.
- Etwas weniger Spezifisches wie `.article-body img` schreiben. Allerdings würde das alle Bilder im `section` auswählen.

Hier ist `@scope` nützlich. Es ermöglicht Ihnen, ein präzises Scope zu definieren, innerhalb dessen Ihre Selektoren erlaubt sind, Elemente zu targetieren. Zum Beispiel könnten Sie das obige Problem mit einem eigenständigen `@scope` Block lösen wie folgt:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body` Scope-Root-Selektor definiert die obere Grenze des DOM-Baums, in der das Regelset angewendet wird, und der `figure` Scope-Limit-Selektor definiert die untere Grenze. Als Ergebnis werden nur {{htmlelement("img")}}-Elemente innerhalb eines `<section>` mit einer Klasse `article-body`, aber nicht innerhalb von {{htmlelement("figure")}}-Elementen, ausgewählt.

> [!NOTE]
> Diese Art der Scoping — mit einer oberen und unteren Grenze — wird üblicherweise als **Donut-Scope** bezeichnet.

Wenn Sie alle Bilder innerhalb eines `<section>` mit einer Klasse `article-body` auswählen möchten, können Sie das Scope-Limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope` Block inline innerhalb eines `<style>` Elements einfügen, das wiederum innerhalb des `<section>` mit einer Klasse `article-body` ist:

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
> Es ist wichtig zu verstehen, dass, obwohl `@scope` es Ihnen erlaubt, die Anwendung von Selektoren auf bestimmte DOM-Unterbäume zu isolieren, es die angewandten Stile nicht vollständig innerhalb dieser Unterbäume isoliert. Dies ist am auffälligsten bei Vererbung — Eigenschaften, die von Kindern geerbt werden (zum Beispiel {{cssxref("color")}} oder {{cssxref("font-family")}}), werden weiterhin vererbt, über jedes gesetzte Scope-Limit hinaus.

### Die `:scope` Pseudo-Klasse

Im Kontext eines `@scope` Blockes repräsentiert die {{cssxref(":scope")}} Pseudo-Klasse den Scope-Root — sie bietet eine einfache Möglichkeit, Stile auf den Scope-Root selbst anzuwenden, von innen heraus:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Tatsächlich wird `:scope` implizit allen Scoped-Style-Rules vorangestellt. Wenn Sie möchten, können Sie `:scope` explizit voranstellen oder den [Nesting](/de/docs/Web/CSS/CSS_nesting) Selektor (`&`) voranstellen, um den gleichen Effekt zu erzielen, wenn Sie diese Darstellungen leichter verständlich finden.

Die drei Regeln im folgenden Block sind alle äquivalent in dem, was sie auswählen:

```css
@scope (.feature) {
  img { ... }

  :scope img { ... }

  & img { ... }
}
```

### Hinweise zur Verwendung von Scoped-Selektoren

- Ein Scope-Limit kann `:scope` verwenden, um eine spezifische Beziehungsanforderung zwischen dem Scope-Limit und dem Root festzulegen. Zum Beispiel:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) { ... }
  ```

- Ein Scope-Limit kann Elemente außerhalb des Scope-Root mit `:scope` referenzieren. Zum Beispiel:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) { ... }
  ```

- Scoped-Style-Rules können nicht dem Unterbaum entkommen. Selektionen wie `:scope + p` sind ungültig, da jene Auswahl außerhalb des Unterbaums läge.

- Es ist vollkommen gültig, den Scope-Root und das Limit als Selektorliste zu definieren, in diesem Fall werden mehrere Scopes definiert. Im folgenden Beispiel werden die Stile auf jedes `<img>` innerhalb eines `<section>` mit einer Klasse `article-hero` oder `article-body` angewendet, jedoch nicht, wenn es innerhalb eines `<figure>` verschachtelt ist:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Das Einfügen eines Regelsets in einen `@scope` Block beeinträchtigt nicht die Spezifität des Selektors, unabhängig von den innerhalb des Scope-Roots und Limits verwendeten Selektoren. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie jedoch entscheiden, explizit die `:scope` Pseudo-Klasse Ihren Scoped-Selektoren voranzustellen, müssen Sie dies bei der Berechnung ihrer Spezifität berücksichtigen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Beim Verwenden des `&` Selektors innerhalb eines `@scope` Blocks repräsentiert `&` den Scope-Root-Selektor; es wird intern berechnet als jener Selektor, eingehüllt in eine {{cssxref(":is", ":is()")}} Pseudo-Klassen-Funktion. Zum Beispiel, in:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` ist gleichbedeutend mit `:is(figure, #primary) img`. Da `:is()` die Spezifität seines spezifischsten Arguments übernimmt (`#primary`, in diesem Fall), ist die Spezifität des Scoped `& img` Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

### Der Unterschied zwischen `:scope` und `&` innerhalb von `@scope`

`:scope` repräsentiert den gematchten Scope-Root, während `&` den Selektor repräsentiert, der verwendet wurde, um den Scope-Root zu matchen. Aufgrund dessen ist es möglich, `&` mehrmals zu ketten. Sie können jedoch `:scope` nur einmal verwenden — Sie können keinen Scope-Root innerhalb eines Scope-Roots matchen.

```css
@scope (.feature) {
  /* Selects a .feature inside the matched root .feature */
  & & { ... }

  /* Doesn't work */
  :scope :scope { ... }
}
```

### Wie `@scope` Konflikte gelöst werden

`@scope` fügt ein neues Kriterium zur [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade) hinzu: **Scoping-Nähe**. Dies besagt, dass, wenn zwei Scopes widersprüchliche Stile haben, der Stil angewendet wird, der die geringste Anzahl an Sprüngen in der DOM-Baum-Hierarchie zum Scope-Root hat. Lassen Sie uns ein Beispiel betrachten, um zu sehen, was dies bedeutet.

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

Wenn Sie das Thema CSS so schreiben, würden Sie auf ein Problem stoßen:

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

Der innerste Absatz sollte schwarz gefärbt sein, da er sich innerhalb einer Karte im Lichtthema befindet. Er wird jedoch sowohl von `.light-theme p` als auch von `.dark-theme p` anvisiert. Da die `.dark-theme p` Regel später in der Quellreihenfolge erscheint, wird sie angewendet, und der Absatz wird fälschlicherweise weiß gefärbt.

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

Nun wird der innerste Absatz korrekt schwarz gefärbt. Dies liegt daran, dass er nur eine Ebene der DOM-Baum-Hierarchie entfernt ist vom `.light-theme` Scope-Root, aber zwei Ebenen vom `.dark-theme` Scope-Root entfernt. Daher gewinnt der helle Stil.

> [!NOTE]
> Scoping-Nähe übertrumpft die Quellreihenfolge, wird jedoch selbst von anderen, höher priorisierten Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Layern](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/Specificity) übertroffen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von Scope-Roots

In diesem Beispiel verwenden wir zwei separate `@scope` Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme` und `.dark-scheme` Klasse entsprechend zu matchen. Beachten Sie, wie `:scope` verwendet wird, um die Scope-Roots selbst auszuwählen und zu stylen. In diesem Beispiel sind die Scope-Roots die {{htmlelement("div")}} Elemente, die die Klassen auf sich tragen.

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

In diesem Beispiel haben wir einen HTML-Ausschnitt, der die zuvor in der [Beschreibung](#beschreibung) Abschnitt besprochene DOM-Struktur nachbildet. Diese Struktur stellt eine typische Artikelzusammenfassung dar. Die wichtigen Merkmale sind die {{htmlelement("img")}} Elemente, die auf verschiedenen Ebenen in der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist zu zeigen, wie man ein Scope-Root und ein Limit verwendet, um `<img>` Elemente zu stylen, beginnend an der Spitze der Hierarchie, aber nur so weit herunter (und nicht einschließlich) des `<img>` innerhalb des {{htmlelement("figure")}} Elements — im Effekt ein Donut-Scope zu erstellen.

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

- Der erste `@scope` Block definiert sein Scope-Root als Elemente mit einer Klasse `.feature` (in diesem Fall nur das äußere `<div>`), zeigt, wie `@scope` verwendet werden kann, um ein spezifisches HTML-Subset zu thematisieren.
- Der zweite `@scope` Block definiert auch sein Scope-Root als Elemente mit einer Klasse `.feature`, fügt jedoch ein Scope-Limit von `figure` hinzu. Dies stellt sicher, dass die enthaltenen Regelsets nur auf passende Elemente innerhalb des Scope-Roots angewendet werden (`<div class="feature"> ... </div>` in diesem Fall), die **nicht** in verschachtelten `<figure>` Elementen enthalten sind. Dieser `@scope` Block enthält ein einzelnes Regelset, das `<img>` Elemente mit einem dicken schwarzen Rand und einem goldenen Hintergrund färbt.

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

Im gerenderten Code beachten Sie, wie alle `<img>` Elemente mit dem dicken Rand und goldenem Hintergrund gestylt sind, außer dem innerhalb des `<figure>` Elements (beschriftet "Mein Infografik").

{{ EmbedLiveSample("Scope roots and scope limits", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- [`CSSScopeRule`](/de/docs/Web/API/CSSScopeRule)
- [Begrenzen Sie die Reichweite Ihrer Selektoren mit der CSS `@scope` At-Regel](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
