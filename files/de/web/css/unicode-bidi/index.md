---
title: unicode-bidi
slug: Web/CSS/unicode-bidi
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`unicode-bidi`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt zusammen mit der {{cssxref("direction")}}-Eigenschaft, wie bidirektionaler Text in einem Dokument behandelt wird. Wenn ein Inhaltsblock sowohl von links nach rechts als auch von rechts nach links verlaufenden Text enthält, verwendet der Benutzeragent beispielsweise einen komplexen Unicode-Algorithmus, um zu entscheiden, wie der Text angezeigt wird. Die `unicode-bidi`-Eigenschaft überschreibt diesen Algorithmus und ermöglicht es dem Entwickler, die Texteingebettung zu steuern.

{{EmbedInteractiveExample("pages/css/unicode-bidi.html")}}

Die `unicode-bidi`- und {{cssxref("direction")}}-Eigenschaften sind die einzigen Eigenschaften, die nicht von der {{cssxref("all")}}-Kurzform betroffen sind.

> [!WARNING]
> Diese Eigenschaft ist für Designer von Dokumenttypspezifikationen (DTD) gedacht. Webdesigner und ähnliche Autoren **sollten** diese nicht überschreiben.

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
  - : Das Element bietet keine zusätzliche Einbettungsebene in Bezug auf den bidirektionalen Algorithmus. Für Inline-Elemente funktioniert die implizite Neuordnung über Elementgrenzen hinweg.
- `embed`
  - : Wenn das Element inline ist, öffnet dieser Wert eine zusätzliche Einbettungsebene in Bezug auf den bidirektionalen Algorithmus. Die Richtung dieser Einbettungsebene wird durch die {{cssxref("direction")}}-Eigenschaft bestimmt.
- `bidi-override`
  - : Für Inline-Elemente wird eine Überschreibung erstellt. Für Block-Container-Elemente wird eine Überschreibung für Inline-Elemente, die nicht in einem anderen Block-Container-Element enthalten sind, erstellt. Dies bedeutet, dass innerhalb des Elements die Neuordnung streng sequenziell gemäß der {{cssxref("direction")}}-Eigenschaft erfolgt; der implizite Teil des bidirektionalen Algorithmus wird ignoriert.
- `isolate`
  - : Dieses Schlüsselwort gibt an, dass die Richtung des Containerelements ohne Berücksichtigung des Inhalts dieses Elements berechnet werden sollte. Das Element wird daher von seinen Geschwistern _isoliert_. Wenn der Algorithmus zur bidirektionalen Auflösung angewendet wird, behandelt das Containerelement es als ein oder mehrere `U+FFFC Object Replacement Character`, also wie ein Bild.
- `isolate-override`
  - : Dieses Schlüsselwort wendet das Isolationsverhalten des `isolate`-Schlüsselworts auf den umgebenden Inhalt und das Überschreibungsverhalten des `bidi-override`-Schlüsselworts auf den inneren Inhalt an.
- `plaintext`
  - : Dieses Schlüsselwort sorgt dafür, dass die Richtung des Elements berechnet wird, ohne den bidirektionalen Zustand des Elternteils oder den Wert der {{cssxref("direction")}}-Eigenschaft zu berücksichtigen. Die Richtung wird unter Verwendung der P2- und P3-Regeln des Unicode-Bidirektionalen-Algorithmus berechnet. Dieser Wert ermöglicht die Anzeige von Daten, die bereits mit einem Tool formatiert wurden, das dem Unicode-Bidirektionalen-Algorithmus folgt.

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
