---
title: unicode-bidi
slug: Web/CSS/Reference/Properties/unicode-bidi
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`unicode-bidi`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt zusammen mit der {{cssxref("direction")}} Eigenschaft, wie bidirektionaler Text in einem Dokument behandelt wird. Wenn z.B. ein Block von Inhalten sowohl von links nach rechts als auch von rechts nach links verlaufenden Text enthält, verwendet das Benutzeragent ein komplexes Unicode-Algorithmus, um zu entscheiden, wie der Text angezeigt wird. Die `unicode-bidi` Eigenschaft überschreibt diesen Algorithmus und ermöglicht es dem Entwickler, die Einbettung des Textes zu steuern.

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

Die `unicode-bidi` und {{cssxref("direction")}} Eigenschaften sind die einzigen Eigenschaften, die nicht von der {{cssxref("all")}} Kurzform betroffen sind.

> [!WARNING]
> Diese Eigenschaft ist für Designer von Document Type Definitionen (DTD) gedacht. Webdesigner und ähnliche Autoren **sollten** sie nicht überschreiben.

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
  - : Das Element bietet keine zusätzliche Einbettungsebene in Bezug auf den bidirektionalen Algorithmus. Bei Inline-Elementen funktioniert die implizite Umordnung elementübergreifend.
- `embed`
  - : Wenn das Element inline ist, öffnet dieser Wert eine zusätzliche Einbettungsebene in Bezug auf den bidirektionalen Algorithmus. Die Richtung dieser Einbettungsebene wird durch die {{cssxref("direction")}} Eigenschaft angegeben.
- `bidi-override`
  - : Für Inline-Elemente erstellt dies eine Überschreibung. Für Block-Container-Elemente erstellt dies eine Überschreibung für Inline-Level-Nachfolger, die sich nicht in einem anderen Block-Container-Element befinden. Dies bedeutet, dass innerhalb des Elements die Umordnung streng nach der {{cssxref("direction")}} Eigenschaft in der Reihenfolge erfolgt; der implizite Teil des bidirektionalen Algorithmus wird ignoriert.
- `isolate`
  - : Dieses Schlüsselwort zeigt an, dass die Richtung des Container-Elements berechnet werden soll, ohne den Inhalt dieses Elements zu berücksichtigen. Das Element wird daher von seinen Geschwistern _isoliert_. Bei Anwendung seines bidirektionalen Auflösungsalgorithmus behandelt das Container-Element es als eines oder mehrere `U+FFFC Object Replacement Character`, also wie ein Bild.
- `isolate-override`
  - : Dieses Schlüsselwort wendet das Isolationsverhalten des `isolate` Schlüsselworts auf den umgebenden Inhalt und das Überschreibungsverhalten des `bidi-override` Schlüsselworts auf den inneren Inhalt an.
- `plaintext`
  - : Dieses Schlüsselwort bewirkt, dass die Richtung des Elements berechnet wird, ohne den bidirektionalen Zustand des übergeordneten Elements oder den Wert der {{cssxref("direction")}} Eigenschaft zu berücksichtigen. Die Richtung wird unter Anwendung der P2- und P3-Regeln des Unicode-Bidirektionalen-Algorithmus berechnet. Dieser Wert ermöglicht die Anzeige von Daten, die bereits mit einem Tool formatiert wurden, das dem Unicode-Bidirektionalen-Algorithmus folgt.

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
- [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
