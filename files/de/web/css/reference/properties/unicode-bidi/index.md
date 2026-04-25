---
title: "`unicode-bidi` CSS property"
short-title: unicode-bidi
slug: Web/CSS/Reference/Properties/unicode-bidi
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`unicode-bidi`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt zusammen mit der {{cssxref("direction")}}-Eigenschaft, wie bidirektionaler Text in einem Dokument gehandhabt wird. Wenn ein Inhaltsblock beispielsweise sowohl Text von links nach rechts als auch von rechts nach links enthält, verwendet der User-Agent einen komplexen Unicode-Algorithmus, um zu entscheiden, wie der Text angezeigt wird. Die `unicode-bidi`-Eigenschaft überschreibt diesen Algorithmus und ermöglicht es dem Entwickler, die Texteinbettung zu steuern.

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

Die `unicode-bidi`- und {{cssxref("direction")}}-Eigenschaften sind die einzigen Eigenschaften, die nicht von den {{cssxref("all")}} Shorthand betroffen sind.

> [!WARNING]
> Diese Eigenschaft ist für Entwickler gedacht, die Dokumenttypdefinitionen (DTD) erstellen. Webdesigner und ähnliche Autoren **sollten sie nicht** überschreiben.

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
  - : Das Element bietet in Bezug auf den bidirektionalen Algorithmus keine zusätzliche Einbettungsebene. Bei Inline-Elementen funktioniert die implizite Umordnung über Elementgrenzen hinweg.
- `embed`
  - : Wenn das Element inline ist, öffnet dieser Wert eine zusätzliche Einbettungsebene in Bezug auf den bidirektionalen Algorithmus. Die Richtung dieser Einbettungsebene wird durch die {{Cssxref("direction")}}-Eigenschaft angegeben.
- `bidi-override`
  - : Für Inline-Elemente wird damit eine Überschreibung erzeugt. Für Blockcontainer-Elemente wird eine Überschreibung für Inline-Ebenen-Nachfahren erzeugt, die sich nicht innerhalb eines anderen Blockcontainer-Elements befinden. Das bedeutet, dass die Umordnung innerhalb des Elements streng sequenziell gemäß der {{Cssxref("direction")}}-Eigenschaft erfolgt; der implizite Teil des bidirektionalen Algorithmus wird ignoriert.
- `isolate`
  - : Dieses Schlüsselwort gibt an, dass die Direktionalität des Element-Containers berechnet werden sollte, ohne den Inhalt dieses Elements zu berücksichtigen. Das Element ist daher von seinen Geschwistern _isoliert_. Bei der Anwendung seines Auflösungs-Algorithmus behandelt das Containerelement es wie ein oder mehrere `U+FFFC Object Replacement Character`, das heißt wie ein Bild.
- `isolate-override`
  - : Dieses Schlüsselwort wendet das Isolationsverhalten des `isolate`-Schlüsselworts auf den umgebenden Inhalt und das Überschreibungsverhalten des `bidi-override`-Schlüsselworts auf den inneren Inhalt an.
- `plaintext`
  - : Dieses Schlüsselwort berechnet die Direktionalität des Elements, ohne den bidirektionalen Status des übergeordneten Elements oder den Wert der {{cssxref("direction")}}-Eigenschaft zu berücksichtigen. Die Direktionalität wird unter Verwendung der P2- und P3-Regeln des Unicode-Bidirektional-Algorithmus berechnet. Dieser Wert ermöglicht die Anzeige von Daten, die bereits mit einem Tool formatiert wurden, das dem Unicode-Bidirektional-Algorithmus folgt.

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
- [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
