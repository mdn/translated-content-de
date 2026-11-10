---
title: "`unicode-bidi` CSS property"
short-title: unicode-bidi
slug: Web/CSS/Reference/Properties/unicode-bidi
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`unicode-bidi`** bestimmt zusammen mit der Eigenschaft {{cssxref("direction")}}, wie bidirektionaler Text in einem Dokument behandelt wird. Wenn ein Inhaltsblock beispielsweise sowohl von links nach rechts als auch von rechts nach links geschriebenen Text enthält, verwendet der User-Agent einen komplexen Unicode-Algorithmus, um zu bestimmen, wie der Text dargestellt wird. Die Eigenschaft `unicode-bidi` setzt diesen Algorithmus außer Kraft und ermöglicht es Entwicklern, die Einbettung des Textes zu steuern.

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

Die Eigenschaften `unicode-bidi` und {{cssxref("direction")}} sind die einzigen Eigenschaften, die nicht vom Shorthand {{cssxref("all")}} beeinflusst werden.

> [!WARNING]
> Diese Eigenschaft ist für Personen gedacht, die Document Type Definitions (DTDs) entwerfen. Webdesigner und andere Autoren **sollten** sie **nicht** überschreiben.

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
  - : Das Element erzeugt im bidirektionalen Algorithmus keine zusätzliche Einbettungsebene. Bei Inline-Elementen funktioniert die implizite Neuanordnung über Elementgrenzen hinweg.
- `embed`
  - : Wenn das Element ein Inline-Element ist, eröffnet dieser Wert eine zusätzliche Einbettungsebene im bidirektionalen Algorithmus. Die Schreibrichtung dieser Einbettungsebene wird durch die Eigenschaft {{Cssxref("direction")}} festgelegt.
- `bidi-override`
  - : Bei Inline-Elementen setzt dieser Wert die bidirektionale Anordnung außer Kraft. Bei Block-Container-Elementen gilt dies für Nachfahren auf Inline-Ebene, die sich nicht innerhalb eines anderen Block-Container-Elements befinden. Das bedeutet, dass der Inhalt des Elements strikt in der durch die Eigenschaft {{Cssxref("direction")}} vorgegebenen Reihenfolge angeordnet wird; der implizite Teil des bidirektionalen Algorithmus wird ignoriert.
- `isolate`
  - : Dieses Schlüsselwort bewirkt, dass die Schreibrichtung des umgebenden Containers ohne Berücksichtigung des Inhalts dieses Elements berechnet wird. Das Element wird dadurch von seinen Geschwisterelementen _isoliert_. Bei der Anwendung des Algorithmus zur Bestimmung der bidirektionalen Anordnung behandelt das umgebende Element es wie ein oder mehrere `U+FFFC Object Replacement Character`, also wie ein Bild.
- `isolate-override`
  - : Dieses Schlüsselwort wendet das Isolationsverhalten von `isolate` auf den umgebenden Inhalt und das Verhalten von `bidi-override` auf den Inhalt des Elements an.
- `plaintext`
  - : Dieses Schlüsselwort bewirkt, dass die Schreibrichtung des Elements ohne Berücksichtigung des bidirektionalen Zustands seines Elternelements oder des Werts der Eigenschaft {{cssxref("direction")}} berechnet wird. Die Schreibrichtung wird anhand der Regeln P2 und P3 des Unicode-Bidirektionalitätsalgorithmus berechnet.
    Dieser Wert ermöglicht die Darstellung von Daten, die bereits mit einem Werkzeug formatiert wurden, das dem Unicode-Bidirektionalitätsalgorithmus folgt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<div class="bible-quote">A line of text</div>
<div>Another line of text</div>
```

### CSS

```css
.bible-quote {
  direction: rtl;
  unicode-bidi: embed;
}
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("direction")}}
- SVG-Attribut {{SVGAttr("unicode-bidi")}}
- [Umgang mit unterschiedlichen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
