---
title: "<big>: Das Bigger Text-Element"
slug: Web/HTML/Element/big
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{deprecated_header}}

Das veraltete **`<big>`** [HTML](/de/docs/Web/HTML)-Element rendert den eingeschlossenen Text in einer Schriftgröße, die eine Stufe größer ist als die umgebende Schriftgröße (zum Beispiel wird `medium` zu `large`). Die Größe ist auf die maximal zulässige Schriftgröße des Browsers beschränkt.

> [!WARNING]
> Dieses Element wurde aus der Spezifikation entfernt und sollte nicht mehr verwendet werden. Verwenden Sie die CSS-Eigenschaft {{cssxref("font-size")}}, um die Schriftgröße anzupassen.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), die allen Elementen gemeinsam sind.

## Beispiele

Hier sehen wir Beispiele, die die Verwendung von `<big>` zeigen, gefolgt von einem Beispiel, das zeigt, wie dieselben Ergebnisse mit moderner CSS-Syntax erzielt werden können.

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

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS: {{cssxref("font-size")}}, {{cssxref("font")}}
- HTML: {{htmlelement("small")}}, {{htmlelement("font")}}, {{htmlelement("style")}}
- HTML 4.01 Spezifikation: [Font Styles](https://www.w3.org/TR/html4/present/graphics.html#h-15.2)
