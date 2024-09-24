---
title: unicode-bidi
slug: Web/CSS/unicode-bidi
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`unicode-bidi`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt zusammen mit der {{cssxref("direction")}} Eigenschaft, wie bidirektionaler Text in einem Dokument behandelt wird. Wenn ein Textblock beispielsweise sowohl von links nach rechts als auch von rechts nach links ausgerichteten Text enthält, nutzt der User-Agent einen komplexen Unicode-Algorithmus, um zu entscheiden, wie der Text angezeigt wird. Die `unicode-bidi` Eigenschaft überschreibt diesen Algorithmus und ermöglicht es dem Entwickler, die Einbettung des Textes zu steuern.

{{EmbedInteractiveExample("pages/css/unicode-bidi.html")}}

Die `unicode-bidi` und {{cssxref("direction")}} Eigenschaften sind die einzigen Eigenschaften, die nicht von der {{cssxref("all")}} Kurzschreibweise betroffen sind.

> [!WARNING]
> Diese Eigenschaft ist für Designer von Document Type Definitions (DTD) gedacht. Webdesigner und ähnliche Autoren **sollten** sie nicht überschreiben.

## Syntax

```css
/* Schlüsselwortwerte */
unicode-bidi: normal;
unicode-bidi: embed;
unicode-bidi: isolate;
unicode-bidi: bidi-override;
unicode-bidi: isolate-override;
unicode-bidi: plaintext;

/* Globale Werte */
unicode-bidi: inherit;
unicode-bidi: initial;
unicode-bidi: revert;
unicode-bidi: revert-layer;
unicode-bidi: unset;
```

### Werte

- `normal`
  - : Das Element bietet kein zusätzliches Einbettungsniveau im Hinblick auf den bidirektionalen Algorithmus. Bei Inline-Elementen funktioniert die implizite Neuanordnung über Elementgrenzen hinweg.
- `embed`
  - : Wenn das Element inline ist, öffnet dieser Wert ein zusätzliches Einbettungsniveau im Hinblick auf den bidirektionalen Algorithmus. Die Richtung dieses Einbettungsniveaus wird durch die {{Cssxref("direction")}} Eigenschaft festgelegt.
- `bidi-override`
  - : Für Inline-Elemente wird ein Override erstellt. Für Block-Container-Elemente wird ein Override für inline-level Nachfahren erstellt, die sich nicht innerhalb eines anderen Block-Container-Elements befinden. Das bedeutet, dass innerhalb des Elements die Neuanordnung strikt in Reihenfolge gemäß der {{Cssxref("direction")}} Eigenschaft erfolgt; der implizite Teil des bidirektionalen Algorithmus wird ignoriert.
- `isolate`
  - : Dieses Schlüsselwort zeigt an, dass die Richtung des Elementcontainers ohne Berücksichtigung des Inhalts dieses Elements berechnet werden sollte. Das Element ist daher von seinen Geschwistern _isoliert_. Bei der Anwendung ihres bidirektionalen Auflösungsalgorithmus behandelt das Containerelement es als ein oder mehrere `U+FFFC Object Replacement Character`, also wie ein Bild.
- `isolate-override`
  - : Dieses Schlüsselwort wendet das Isolationsverhalten des `isolate` Schlüsselworts auf den umgebenden Inhalt und das Override-Verhalten des `bidi-override` Schlüsselworts auf den inneren Inhalt an.
- `plaintext`
  - : Dieses Schlüsselwort sorgt dafür, dass die Richtung des Elements berechnet wird, ohne den bidirektionalen Zustand des Elternteils oder den Wert der {{cssxref("direction")}} Eigenschaft zu berücksichtigen. Die Richtung wird unter Verwendung der P2 und P3 Regeln des Unicode Bidirectional Algorithmus berechnet. Dieser Wert ermöglicht die Anzeige von Daten, die bereits mit einem Tool formatiert wurden, das dem Unicode Bidirectional Algorithmus folgt.

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
