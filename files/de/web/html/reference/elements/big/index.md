---
title: "<big>: Das Größere Textelement"
slug: Web/HTML/Reference/Elements/big
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{deprecated_header}}

Das veraltete **`<big>`**-[HTML](/de/docs/Web/HTML)-Element zeigt den umschlossenen Text in einer Schriftgröße, die eine Stufe größer ist als der umgebende Text (zum Beispiel wird `medium` zu `large`). Die Größe wird auf die maximal zulässige Schriftgröße des Browsers begrenzt.

> [!WARNING]
> Dieses Element wurde aus der Spezifikation entfernt und sollte nicht mehr verwendet werden. Verwenden Sie die CSS-Property {{cssxref("font-size")}}, um die Schriftgröße anzupassen.

## Attribute

Dieses Element hat, abgesehen von den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes), die allen Elementen gemeinsam sind, keine weiteren Attribute.

## Beispiele

Hier sehen wir Beispiele für die Verwendung von `<big>` gefolgt von einem Beispiel, wie man dasselbe Ergebnis mit moderner CSS-Syntax erreichen kann.

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

Dieses Beispiel verwendet die CSS-Property {{cssxref("font-size")}}, um die Schriftgröße um eine Stufe zu erhöhen.

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
