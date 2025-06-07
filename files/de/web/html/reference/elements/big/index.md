---
title: "<big>: Das Element für größeren Text"
slug: Web/HTML/Reference/Elements/big
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<big>`** [HTML](/de/docs/Web/HTML) veraltete Element stellt den eingeschlossenen Text in einer Schriftgröße dar, die um eine Stufe größer ist als der umgebende Text (zum Beispiel wird `medium` zu `large`). Die Größe ist auf die vom Browser maximal erlaubte Schriftgröße begrenzt.

> [!WARNING]
> Dieses Element wurde aus der Spezifikation entfernt und sollte nicht mehr verwendet werden. Verwenden Sie die CSS-Eigenschaft {{cssxref("font-size")}}, um die Schriftgröße anzupassen.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die allen Elementen gemeinsam sind.

## Beispiele

Hier sehen wir Beispiele, die die Verwendung von `<big>` zeigen, gefolgt von einem Beispiel, das zeigt, wie mit moderner CSS-Syntax dieselben Ergebnisse erzielt werden können.

### Verwendung von big

Dieses Beispiel verwendet das veraltete `<big>`-Element, um die Größe eines Textes zu erhöhen.

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

Dieses Element implementiert die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

<!-- ## Technical summary -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS: {{cssxref("font-size")}}, {{cssxref("font")}}
- HTML: {{htmlelement("small")}}, {{htmlelement("font")}}, {{htmlelement("style")}}
