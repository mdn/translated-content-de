---
title: unicode-bidi
slug: Web/CSS/unicode-bidi
l10n:
  sourceCommit: d68cfd06575158736a37dcacc970cf909d009469
---

{{CSSRef}}

Die **`unicode-bidi`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt zusammen mit der {{cssxref("direction")}}-Eigenschaft, wie mit bidirektionalem Text in einem Dokument umgegangen wird. Wenn zum Beispiel ein Inhaltsblock sowohl von links nach rechts als auch von rechts nach links geschriebenen Text enthält, verwendet der Benutzeragent einen komplexen Unicode-Algorithmus, um zu entscheiden, wie der Text angezeigt werden soll. Die `unicode-bidi`-Eigenschaft überschreibt diesen Algorithmus und ermöglicht es dem Entwickler, die Text-Einbettung zu steuern.

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

Die `unicode-bidi`- und {{cssxref("direction")}}-Eigenschaften sind die einzigen Eigenschaften, die nicht von der {{cssxref("all")}}-Kurzschrift betroffen sind.

> [!WARNING]
> Diese Eigenschaft ist für Designer des Dokumenttyps (DTD) gedacht. Webdesigner und ähnliche Autoren **sollten** sie nicht überschreiben.

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
  - : Das Element bietet in Bezug auf den bidirektionalen Algorithmus kein zusätzliches Einbettungsniveau. Für Inline-Elemente funktioniert die implizite Neuordnung über Elementgrenzen hinweg.
- `embed`
  - : Wenn das Element inline ist, öffnet dieser Wert ein zusätzliches Einbettungsniveau in Bezug auf den bidirektionalen Algorithmus. Die Richtung dieses Einbettungsniveaus wird durch die {{Cssxref("direction")}}-Eigenschaft bestimmt.
- `bidi-override`
  - : Für Inline-Elemente wird damit eine Überschreibung erstellt. Für Block-Container-Elemente wird damit eine Überschreibung für Inline-Nachfolger erstellt, die nicht in einem anderen Block-Container-Element enthalten sind. Das bedeutet, dass innerhalb des Elements die Neuordnung strikt in der Reihenfolge gemäß der {{Cssxref("direction")}}-Eigenschaft erfolgt; der implizite Teil des bidirektionalen Algorithmus wird ignoriert.
- `isolate`
  - : Dieses Schlüsselwort gibt an, dass die Richtung des Element-Containers berechnet werden soll, ohne den Inhalt dieses Elements zu berücksichtigen. Das Element ist daher von seinen Geschwistern _isoliert_. Bei der Anwendung seines bidirektionalen Auflösungsalgorithmus behandelt das Containerelement es als ein oder mehrere `U+FFFC Object Replacement Character`, also wie ein Bild.
- `isolate-override`
  - : Dieses Schlüsselwort wendet das Isolierungsverhalten des Schlüsselworts `isolate` auf den umgebenden Inhalt und das Überschreibungsverhalten des Schlüsselworts `bidi-override` auf den inneren Inhalt an.
- `plaintext`
  - : Dieses Schlüsselwort bewirkt, dass die Richtung des Elements berechnet wird, ohne den bidirektionalen Zustand des Elternelements oder den Wert der {{cssxref("direction")}}-Eigenschaft zu berücksichtigen. Die Richtung wird mit den Regeln P2 und P3 des Unicode-Bidirectionalen-Algorithmus berechnet.
    Dieser Wert ermöglicht die Anzeige von Daten, die bereits mit einem Tool formatiert sind, das dem Unicode-Bidirectional-Algorithmus folgt.

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
