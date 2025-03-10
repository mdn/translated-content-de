---
title: unicode-bidi
slug: Web/CSS/unicode-bidi
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`unicode-bidi`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt zusammen mit der {{cssxref("direction")}}-Eigenschaft, wie bidirektionaler Text in einem Dokument behandelt wird. Wenn ein Inhaltsblock beispielsweise sowohl von links nach rechts als auch von rechts nach links geschriebenen Text enthält, verwendet der User-Agent einen komplexen Unicode-Algorithmus, um zu entscheiden, wie der Text angezeigt werden soll. Die `unicode-bidi`-Eigenschaft überschreibt diesen Algorithmus und ermöglicht es dem Entwickler, die Einbettung des Textes zu steuern.

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

Die `unicode-bidi`- und die {{cssxref("direction")}}-Eigenschaften sind die einzigen Eigenschaften, die von der {{cssxref("all")}}-Kurzform nicht beeinflusst werden.

> [!WARNING]
> Diese Eigenschaft ist für Designer von Dokumenttypspezifikationen (DTD) gedacht. Webdesigner und ähnliche Autoren **sollten sie nicht** überschreiben.

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
  - : Das Element bietet keinen zusätzlichen Einbettungsgrad in Bezug auf den bidirektionalen Algorithmus. Für Inline-Elemente funktioniert die implizite Neuordnung über Elementgrenzen hinweg.
- `embed`
  - : Wenn das Element inline ist, öffnet dieser Wert einen zusätzlichen Einbettungsgrad in Bezug auf den bidirektionalen Algorithmus. Die Richtung dieser Einbettungsebene wird durch die {{Cssxref("direction")}}-Eigenschaft bestimmt.
- `bidi-override`
  - : Für Inline-Elemente erstellt dies eine Überschreibung. Für Block-Container-Elemente erstellt dies eine Überschreibung für Inline-Ebenen-Nachfolger, die sich nicht innerhalb eines anderen Block-Container-Elements befinden. Dies bedeutet, dass innerhalb des Elements die Neuordnung streng in der Reihenfolge gemäß der {{Cssxref("direction")}}-Eigenschaft erfolgt; der implizite Teil des bidirektionalen Algorithmus wird ignoriert.
- `isolate`
  - : Dieses Schlüsselwort zeigt an, dass die Richtung des Container-Elements ohne Berücksichtigung des Inhalts dieses Elements berechnet werden sollte. Das Element ist daher von seinen Geschwistern _isoliert_. Bei Anwendung seines bidirektionalen Auflösungsalgorithmus behandelt das Container-Element es als ein oder mehrere `U+FFFC Object Replacement Character`, also wie ein Bild.
- `isolate-override`
  - : Dieses Schlüsselwort wendet das Isolationsverhalten des `isolate`-Schlüsselworts auf den umgebenden Inhalt und das Überschreibungsverhalten des `bidi-override`-Schlüsselworts auf den inneren Inhalt an.
- `plaintext`
  - : Dieses Schlüsselwort berechnet die Richtung des Elements, ohne den bidirektionalen Zustand des Elternteils oder den Wert der {{cssxref("direction")}}-Eigenschaft zu berücksichtigen. Die Richtung wird unter Verwendung der P2- und P3-Regeln des Unicode-Bidirektionalen Algorithmus berechnet.
    Dieser Wert ermöglicht die Anzeige von Daten, die bereits mit einem Werkzeug formatiert wurden, das dem Unicode-Bidirektionalen Algorithmus folgt.

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
- SVG {{SVGAttr("unicode-bidi")}}-Attribut
