---
title: "@scope"
slug: Web/CSS/@scope
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`@scope`**-[CSS](/de/docs/Web/CSS)-[Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, Elemente in bestimmten DOM-Teilbäumen auszuwählen und gezielt anzusprechen, ohne übermäßig spezifische Selektoren zu schreiben, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu koppeln.

In JavaScript kann `@scope` über die CSS-Objektmodell-Schnittstelle {{DOMxRef("CSSScopeRule")}} aufgerufen werden.

## Syntax

Die `@scope`-Regel enthält ein oder mehrere Regelsätze (genannt **scoped style rules**) und definiert einen Bereich, in dem sie auf ausgewählte Elemente angewendet werden. `@scope` kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block in Ihrem CSS, wobei ein Prelude-Abschnitt inkludiert ist, der **Scope-Root**- und optionale **Scope-Limit**-Selektoren umfasst – diese definieren die oberen und unteren Grenzen des Bereichs.

   ```css
   @scope (scope root) to (scope limit) {
     règlesets
   }
   ```

2. Als inline Styles in einem {{htmlelement("style")}}-Element in Ihrem HTML, wobei der Prelude weggelassen wird und der eingeschlossene Regelsatz automatisch in den umgebenden Elternelement-Bereich des `<style>`-Elements integriert ist.

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

Ein komplexes Web-Dokument könnte Komponenten wie Header, Footer, Nachrichtenartikel, Karten, Media-Player, und Anzeigen enthalten. Je mehr die Komplexität zunimmt, desto wichtiger wird das effektive Management des Stylings dieser Komponenten. Effektives Scoping der Styles hilft dabei, diese Komplexität zu bewältigen. Betrachten wir den folgenden DOM-Baum:

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

Wenn Sie das {{htmlelement("img")}}-Element innerhalb eines {{htmlelement("section")}} mit der Klasse `article-body` auswählen möchten, könnten Sie Folgendes tun:

- Einen Selektor wie `.feature > .article-body > img` schreiben. Das hat jedoch eine hohe Spezifität, die schwer zu überschreiben ist, und ist auch eng an die DOM-Struktur gekoppelt. Sollte sich die Struktur Ihres Markups zukünftig ändern, könnte es notwendig sein, Ihr CSS umzuschreiben.
- Etwas weniger Spezifisches wie `.article-body img` schreiben. Das würde jedoch alle Bilder innerhalb der `section` auswählen.

Hier ist `@scope` nützlich. Es ermöglicht Ihnen, einen genauen Bereich zu definieren, innerhalb dessen Ihre Selektoren erlaubt sind, Elemente anzusprechen. Sie könnten das oben genannte Problem mit einem eigenständigen `@scope`-Block wie dem folgenden lösen:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Der `.article-body`-Scope-Root-Selektor definiert die obere Grenze des DOM-Baum-Scope, in dem der Regelsatz angewendet wird, und der `figure`-Scope-Limit-Selektor definiert die untere Grenze. Somit werden nur {{htmlelement("img")}}-Elemente innerhalb eines `<section>` mit der Klasse `article-body`, aber nicht innerhalb von {{htmlelement("figure")}}-Elementen ausgewählt.

> [!NOTE]
> Diese Art von Scoping — mit einer oberen und unteren Grenze — wird oft als **Donut Scope** bezeichnet.

Wenn Sie alle Bilder innerhalb eines `<section>` mit der Klasse `article-body` auswählen möchten, können Sie das Scope-Limit weglassen:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Oder Sie könnten Ihren `@scope`-Block inline innerhalb eines `<style>`-Elements platzieren, das wiederum innerhalb des `<section>` mit der Klasse `article-body` steht:

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
> Es ist wichtig zu verstehen, dass, obwohl `@scope` es ermöglicht, die Anwendung von Selektoren auf bestimmte DOM-Teilbäume zu isolieren, die angewendeten Stile nicht vollständig innerhalb dieser Teilbäume isoliert sind. Dies ist am auffälligsten bei der Vererbung — Eigenschaften, die von Kindern geerbt werden (zum Beispiel {{cssxref("color")}} oder {{cssxref("font-family")}}), werden weiterhin vererbt, über jede festgelegte Scope-Grenze hinaus.

### Die `:scope` Pseudoklasse

Im Kontext eines `@scope`-Blocks steht die {{cssxref(":scope")}}-Pseudoklasse für den Scope-Root — sie bietet eine einfache Möglichkeit, Styles auf den Scope-Root selbst anzuwenden, von innerhalb des Scope:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Tatsächlich wird `:scope` implizit allen scoped style rules vorangestellt. Wenn Sie möchten, können Sie `:scope` explizit voranstellen oder den [Verschachtelungsselektor](/de/docs/Web/CSS/CSS_nesting) (`&`) verwenden, um den gleichen Effekt zu erzielen, wenn Sie diese Darstellungen leichter verständlich finden.

Die drei Regeln im folgenden Block sind in dem, was sie auswählen, gleichwertig:

```css
@scope (.feature) {
  img { ... }

  :scope img { ... }

  & img { ... }
}
```

### Hinweise zur Verwendung von Scoped-Selektoren

- Ein Scope-Limit kann `:scope` verwenden, um eine spezifische Beziehungsanforderung zwischen dem Scope-Limit und Root anzugeben. Zum Beispiel:

  ```css
  /* figure ist nur ein Limit, wenn es ein direktes Kind des :scope ist */
  @scope (.article-body) to (:scope > figure) { ... }
  ```

- Ein Scope-Limit kann Elemente außerhalb des Scope-Roots mit `:scope` referenzieren. Zum Beispiel:

  ```css
  /* figure ist nur ein Limit, wenn das :scope innerhalb von .feature ist */
  @scope (.article-body) to (.feature :scope figure) { ... }
  ```

- Scoped style rules können den Teilbaum nicht verlassen. Selektionen wie `:scope + p` sind ungültig, weil diese Auswahl außerhalb des Teilbaums liegen würde.

- Es ist vollkommen legitim, sowohl den Scope-Root als auch das Limit als Selektorliste zu definieren, in welchem Fall mehrere Scopes definiert werden. Im folgenden Beispiel werden die Styles auf jedes `<img>` innerhalb eines `<section>` mit der Klasse `article-hero` oder `article-body`, aber nicht wenn es innerhalb eines `<figure>` genestet ist, angewendet:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spezifität in `@scope`

Die Einbeziehung eines Regelsatzes innerhalb eines `@scope`-Blocks beeinflusst nicht die Spezifität des Selektors, unabhängig von den Selektoren, die innerhalb des Scope-Roots und Limits verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img hat eine Spezifität von 0-0-1, wie erwartet */
  img { ... }
}
```

Falls Sie sich entscheiden, die `:scope`-Pseudoklasse explizit Ihren Scoped-Selektoren voranzustellen, müssen Sie diese in die Berechnung ihrer Spezifität einbeziehen. `:scope`, wie alle regulären Pseudoklassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img hat eine Spezifität von 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Bei der Verwendung des `&`-Selektors innerhalb eines `@scope`-Blocks repräsentiert `&` den Scope-Root-Selektor; er wird intern als dieser Selektor, eingebettet in eine {{cssxref(":is", ":is()")}}-Pseudoklassenfunktion, berechnet. Also zum Beispiel, in:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` ist gleichwertig mit `:is(figure, #primary) img`. Da `:is()` die Spezifität seines spezifischsten Arguments annimmt (`#primary`, in diesem Fall), ist die Spezifität des scoped `& img`-Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

### Der Unterschied zwischen `:scope` und `&` innerhalb von `@scope`

`:scope` repräsentiert den gefundenen Scope-Root, während `&` den Selektor repräsentiert, der verwendet wird, um den Scope-Root zu finden. Deshalb ist es möglich, `&` mehrfach zu verketten. Sie können `:scope` jedoch nur einmal verwenden — Sie können keinen Scope-Root innerhalb eines Scope-Roots anvisieren.

```css
@scope (.feature) {
  /* Wählt eine .feature innerhalb der gefundenen Root .feature aus */
  & & { ... }

  /* Funktioniert nicht */
  :scope :scope { ... }
}
```

### Wie Konflikte in `@scope` gelöst werden

`@scope` fügt ein neues Kriterium zur [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade) hinzu: **Scoping-Nähe**. Dies besagt, dass wenn zwei Scopes widersprüchliche Stile haben, der Stil angewendet wird, der die geringste Anzahl an Sprüngen den DOM-Baum entlang bis zum Scope-Root hat. Sehen wir uns ein Beispiel an, um zu verstehen, was dies bedeutet.

Betrachten Sie den folgenden HTML-Schnipsel, bei dem unterschiedliche Themenkarten ineinander verschachtelt sind:

```html
<div class="light-theme">
  <p>Text im Light Theme</p>
  <div class="dark-theme">
    <p>Text im Dark Theme</p>
    <div class="light-theme">
      <p>Text im Light Theme</p>
    </div>
  </div>
</div>
```

Wenn Sie das CSS für das Thema wie folgt schreiben würden, würden Sie Probleme bekommen:

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

Der innerste Absatz sollte schwarz gefärbt werden, da er in einer Light-Theme-Karte enthalten ist. Er wird jedoch sowohl von `.light-theme p` als auch von `.dark-theme p` ausgewählt. Da die `.dark-theme p`-Regel später in der Quellreihenfolge erscheint, wird sie angewendet, und der Absatz wird fälschlicherweise weiß gefärbt.

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

Jetzt wird der innerste Absatz korrekt schwarz gefärbt. Das liegt daran, dass er nur eine DOM-Baum-Hierarchie-Ebene vom `.light-theme`-Scope-Root entfernt ist, aber zwei Ebenen vom `.dark-theme`-Scope-Root. Somit gewinnt der Light-Style.

> [!NOTE]
> Die Scoping-Nähe übersteuert die Quellreihenfolge, wird jedoch selbst von anderen, höher priorisierten Kriterien wie [Bedeutung](/de/docs/Web/CSS/important), [Layers](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/Specificity) übersteuert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Stil innerhalb von Scopes

In diesem Beispiel verwenden wir zwei separate `@scope`-Blöcke, um Links innerhalb von Elementen mit einer `.light-scheme`- bzw. `.dark-scheme`-Klasse zuzuordnen. Beachten Sie, wie `:scope` verwendet wird, um den Scope-Roots selbst Styling zu verleihen. In diesem Beispiel sind die Scope-Roots die {{htmlelement("div")}}-Elemente, denen die Klassen zugeordnet sind.

#### HTML

```html
<div class="light-scheme">
  <p>
    MDN enthält viele Informationen über
    <a href="/de/docs/Web/HTML">HTML</a>,
    <a href="/de/docs/Web/CSS">CSS</a> und
    <a href="/de/docs/Web/JavaScript">JavaScript</a>.
  </p>
</div>

<div class="dark-scheme">
  <p>
    MDN enthält viele Informationen über
    <a href="/de/docs/Web/HTML">HTML</a>,
    <a href="/de/docs/Web/CSS">CSS</a> und
    <a href="/de/docs/Web/JavaScript">JavaScript</a>.
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

#### Resultat

Der obige Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Grundlegender Stil innerhalb von Scopes", "100%", "150") }}

### Scope-Roots und Scope-Limits

In diesem Beispiel haben wir ein HTML-Schnipsel, das der DOM-Struktur entspricht, über die wir zuvor im Abschnitt [Beschreibung](#beschreibung) gesprochen haben. Diese Struktur repräsentiert eine typische Artikelzusammenfassung. Die wichtigsten Merkmale sind die {{htmlelement("img")}}-Elemente, die auf verschiedenen Ebenen innerhalb der Struktur verschachtelt sind.

Das Ziel dieses Beispiels ist es zu zeigen, wie man einen Scope-Root und ein Limit verwenden kann, um `<img>`-Elemente von der Spitze der Hierarchie an zu stylen, jedoch nur bis zu (und ohne) das `<img>` innerhalb des {{htmlelement("figure")}}-Elements — effektiv einen Donut-Scope zu erstellen.

#### HTML

```html
<article class="feature">
  <section class="article-hero">
    <h2>Artikelüberschrift</h2>
    <img alt="Bild" />
  </section>

  <section class="article-body">
    <h3>Artikel-Unterüberschrift</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod
      consectetur leo, nec eleifend quam volutpat vitae. Duis quis felis at
      augue imperdiet aliquam. Morbi at felis et massa mattis lacinia. Cras
      pharetra velit nisi, ac efficitur magna luctus nec.
    </p>

    <img alt="Bild" />

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <figure>
      <img alt="Bild" />
      <figcaption>Meine Infografik</figcaption>
    </figure>
  </section>

  <footer>
    <p>Geschrieben von Chris Mills.</p>
    <img alt="Bild" />
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

- Der erste `@scope`-Block definiert sein Scope-Root als Elemente mit der Klasse `.feature` (in diesem Fall nur das äußere `<div>`), und demonstriert, wie `@scope` verwendet werden kann, um einen bestimmten HTML-Ausschnitt zu thematisieren.
- Der zweite `@scope`-Block definiert ebenfalls sein Scope-Root als Elemente mit der Klasse `.feature`, ergänzt jedoch ein Scope-Limit von `figure`. Dies stellt sicher, dass enthaltene Regelsätze nur auf übereinstimmende Elemente innerhalb des Scope-Roots angewendet werden (`<div class="figure"> ... </div>` in diesem Fall), die **nicht** innerhalb von nachgeordneten `<figure>`-Elementen verschachtelt sind. Dieser `@scope`-Block enthält einen einzelnen Regelsatz, der `<img>`-Elemente mit einem dicken schwarzen Rahmen und einer goldenen Hintergrundfarbe stylt.

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

/* Donut-Scope */

@scope (.feature) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

#### Resultat

Im gerenderten Code, beachten Sie, wie alle `<img>`-Elemente mit dem dicken Rahmen und dem goldenen Hintergrund gestylt sind, mit Ausnahme desjenigen innerhalb des `<figure>`-Elements (bezeichnet mit "Meine Infografik").

{{ EmbedLiveSample("Scope-Roots und Scope-Limits", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":scope")}}
- {{DOMxRef("CSSScopeRule")}}
- [Begrenzen Sie die Reichweite Ihrer Selektoren mit der CSS-`@scope`-Regel](https://developer.chrome.com/docs/css-ui/at-scope) auf developer.chrome.com (2023)
