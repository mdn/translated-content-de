---
title: unicode-bidi
slug: Web/CSS/unicode-bidi
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`unicode-bidi`** [CSS](/de/docs/Web/CSS) Eigenschaft, zusammen mit der {{cssxref("direction")}} Eigenschaft, bestimmt, wie bidirektionaler Text in einem Dokument behandelt wird. Wenn ein Textblock beispielsweise sowohl von links nach rechts als auch von rechts nach links verläuft, verwendet der User-Agent einen komplexen Unicode-Algorithmus, um zu entscheiden, wie der Text angezeigt werden soll. Die `unicode-bidi` Eigenschaft überschreibt diesen Algorithmus und ermöglicht es dem Entwickler, die Texteinbettung zu steuern.

{{InteractiveExample("CSS Demo: unicode-bidi")}}

```css interactive-example-choice
unicode-bidi: normal;
```

```css interactive-example-choice
unicode-bidi: bidi-override;
```

```css interactive-example-choice
unicode-bidi: plaintext;
```

```css interactive-example-choice
unicode-bidi: isolate-override;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p class="transition-all" id="example-element">
    בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ.
  </p>
</section>
```

Die `unicode-bidi` und {{cssxref("direction")}} Eigenschaften sind die einzigen Eigenschaften, die nicht durch die {{cssxref("all")}} Kurzform betroffen sind.

> [!WARNING]
> Diese Eigenschaft ist für Designer von Document Type Definitions (DTD) vorgesehen. Webdesigner und ähnliche Autoren **sollten sie nicht** überschreiben.

## Syntax

```css
/* Keyword values */
unicode-bidi: normal;
unicode-bidi: embed;
unicode-bidi: isolate;
unicode-bidi: bidi-override;
unicode-bidi: isolate-override;
unicode-bidi: plaintext;

/* Global values */
unicode-bidi: inherit;
unicode-bidi: initial;
unicode-bidi: revert;
unicode-bidi: revert-layer;
unicode-bidi: unset;
```

### Werte

- `normal`
  - : Das Element bietet keine zusätzliche Einbettungsebene bezüglich des bidirektionalen Algorithmus. Bei Inline-Elementen funktioniert die implizite Umordnung über die Elementgrenzen hinweg.
- `embed`
  - : Wenn das Element inline ist, öffnet dieser Wert eine zusätzliche Einbettungsebene bezüglich des bidirektionalen Algorithmus. Die Richtung dieser Einbettungsebene wird durch die {{Cssxref("direction")}} Eigenschaft angegeben.
- `bidi-override`
  - : Für Inline-Elemente wird ein Override erstellt. Für Block-Container-Elemente wird ein Override für Inline-Ebenen-Nachkommen erstellt, die sich nicht innerhalb eines anderen Block-Container-Elements befinden. Dies bedeutet, dass innerhalb des Elements die Umordnung streng in der Reihenfolge gemäß der {{Cssxref("direction")}} Eigenschaft erfolgt; der implizite Teil des bidirektionalen Algorithmus wird ignoriert.
- `isolate`
  - : Dieses Schlüsselwort zeigt an, dass die Richtung des Elementcontainers berechnet werden soll, ohne den Inhalt dieses Elements zu berücksichtigen. Das Element ist daher von seinen Geschwistern _isoliert_. Bei der Anwendung seines bidirektionalen Auflösungsalgorithmus behandelt der Container das Element als eines oder mehrere `U+FFFC Object Replacement Character`, d.h. wie ein Bild.
- `isolate-override`
  - : Dieses Schlüsselwort wendet das Isolationsverhalten des `isolate`-Schlüsselworts auf den umgebenden Inhalt und das Override-Verhalten des `bidi-override`-Schlüsselworts auf den inneren Inhalt an.
- `plaintext`
  - : Dieses Schlüsselwort sorgt dafür, dass die Richtung des Elements berechnet wird, ohne den bidirektionalen Zustand seines übergeordneten Elements oder den Wert der {{cssxref("direction")}} Eigenschaft zu berücksichtigen. Die Richtung wird unter Verwendung der P2- und P3-Regeln des Unicode-Bidirectional-Algorithmus berechnet. Dieser Wert ermöglicht die Darstellung von Daten, die bereits mit einem Tool formatiert wurden, das dem Unicode-Bidirectional-Algorithmus folgt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### CSS

```css
.bible-quote {
  direction: rtl;
  unicode-bidi: embed;
}
```

### HTML

```html
<div class="bible-quote">A line of text</div>
<div>Another line of text</div>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("direction")}}
- SVG {{SVGAttr("unicode-bidi")}} Attribut
- [Umgang mit unterschiedlichen Textausrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
