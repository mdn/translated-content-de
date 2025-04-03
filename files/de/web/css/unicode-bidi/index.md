---
title: unicode-bidi
slug: Web/CSS/unicode-bidi
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`unicode-bidi`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt zusammen mit der {{cssxref("direction")}}-Eigenschaft, wie bidirektionaler Text in einem Dokument behandelt wird. Wenn zum Beispiel ein Blockinhalt sowohl von links nach rechts als auch von rechts nach links verläuft, verwendet der Benutzeragent einen komplexen Unicode-Algorithmus, um zu entscheiden, wie der Text angezeigt wird. Die `unicode-bidi`-Eigenschaft überschreibt diesen Algorithmus und ermöglicht es dem Entwickler, das Text-Embedding zu steuern.

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

Die Eigenschaften `unicode-bidi` und {{cssxref("direction")}} sind die einzigen Eigenschaften, die nicht von der {{cssxref("all")}}-Kurzform betroffen sind.

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
  - : Das Element bietet gegenüber dem bidirektionalen Algorithmus keine zusätzliche Ebene der Einbettung. Bei Inline-Elementen funktioniert die implizite Neuanordnung über die Elementgrenzen hinweg.
- `embed`
  - : Wenn das Element inline ist, öffnet dieser Wert eine zusätzliche Einbettungsebene im Hinblick auf den bidirektionalen Algorithmus. Die Richtung dieser Einbettungsebene wird durch die {{cssxref("direction")}}-Eigenschaft bestimmt.
- `bidi-override`
  - : Für Inline-Elemente wird eine Überschreibung erstellt. Für Block-Container-Elemente wird eine Überschreibung für Inline-Level-Nachfolger erstellt, die sich nicht in einem anderen Block-Container-Element befinden. Das bedeutet, dass innerhalb des Elements die Neuanordnung streng gemäß der {{cssxref("direction")}}-Eigenschaft erfolgt; der implizite Teil des bidirektionalen Algorithmus wird ignoriert.
- `isolate`
  - : Dieses Schlüsselwort gibt an, dass die Richtung des Container-Elements ohne Berücksichtigung des Inhalts dieses Elements berechnet werden sollte. Das Element ist daher von seinen Geschwistern _isoliert_. Bei der Anwendung seines bidirektionalen Auflösungsalgorithmus behandelt es das Container-Element als mehrere `U+FFFC Object Replacement Character`, also wie ein Bild.
- `isolate-override`
  - : Dieses Schlüsselwort wendet das Isolationsverhalten des `isolate`-Schlüsselworts auf den umgebenden Inhalt und das Überschreibungsverhalten des `bidi-override`-Schlüsselworts auf den inneren Inhalt an.
- `plaintext`
  - : Dieses Schlüsselwort sorgt dafür, dass die Richtung des Elements berechnet wird, ohne den bidirektionalen Zustand des Elternteils oder den Wert der {{cssxref("direction")}}-Eigenschaft zu berücksichtigen. Die Richtung wird unter Verwendung der P2- und P3-Regeln des Unicode-Bidirektional-Algorithmus berechnet.
    Dieser Wert ermöglicht die Anzeige von Daten, die bereits mit einem Werkzeug formatiert sind, das dem Unicode-Bidirektional-Algorithmus folgt.

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
- [Handling different text directions](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
