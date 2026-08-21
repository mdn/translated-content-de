---
title: "`<big>` HTML größeres Textelement"
short-title: <big>
slug: Web/HTML/Reference/Elements/big
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<big>`** [HTML](/de/docs/Web/HTML) veraltete Element rendert den eingeschlossenen Text in einer Schriftgröße, die um eine Stufe größer ist als der umgebende Text (zum Beispiel wird `medium` zu `large`). Die Größe ist durch die maximal zulässige Schriftgröße des Browsers begrenzt.

> [!WARNING]
> Dieses Element wurde aus der Spezifikation entfernt und sollte nicht mehr verwendet werden. Verwenden Sie die CSS-Eigenschaft {{cssxref("font-size")}}, um die Schriftgröße anzupassen.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die allen Elementen gemeinsam sind.

## Beispiele

Hier sehen Sie Beispiele, die die Verwendung von `<big>` zeigen, gefolgt von einem Beispiel, wie Sie die gleichen Ergebnisse mit moderner CSS-Syntax erzielen können.

### Verwendung von big

Dieses Beispiel verwendet das veraltete `<big>` Element, um die Größe eines Textes zu erhöhen.

#### HTML

```html
<p>
  This is the first sentence.
  <big>This whole sentence is in bigger letters.</big>
</p>
```

#### Ergebnis

{{EmbedLiveSample("Using_big", 640, 60)}}

### Verwendung von CSS `font-size`

Dieses Beispiel verwendet die CSS-Eigenschaft {{cssxref("font-size")}}, um die Schriftgröße um eine Stufe zu erhöhen.

#### CSS

```css
.bigger {
  font-size: larger;
}
```

#### HTML

```html
<p>
  This is the first sentence.
  <span class="bigger">This whole sentence is in bigger letters.</span>
</p>
```

#### Ergebnis

{{EmbedLiveSample("Using_CSS_font-size", 640, 60)}}

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS: {{cssxref("font-size")}}, {{cssxref("font")}}
- HTML: {{htmlelement("small")}}, {{htmlelement("font")}}, {{htmlelement("style")}}
