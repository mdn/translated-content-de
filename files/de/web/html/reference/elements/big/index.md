---
title: "`<big>`: HTML-Element für größeren Text"
short-title: <big>
slug: Web/HTML/Reference/Elements/big
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Das veraltete [HTML](/de/docs/Web/HTML)-Element **`<big>`** stellt den eingeschlossenen Text eine Schriftgrößenstufe größer dar als den umgebenden Text (beispielsweise wird `medium` zu `large`). Die Größe ist durch die maximal zulässige Schriftgröße des Browsers begrenzt.

> [!WARNING]
> Dieses Element wurde aus der Spezifikation entfernt und sollte nicht mehr verwendet werden. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("font-size")}}, um die Schriftgröße anzupassen.

## Attribute

Dieses Element hat außer den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes), die allen Elementen gemeinsam sind, keine weiteren Attribute.

## Beispiele

Die folgenden Beispiele zeigen zunächst die Verwendung von `<big>` und anschließend, wie sich dasselbe Ergebnis mit moderner CSS-Syntax erzielen lässt.

### Verwendung von big

Dieses Beispiel verwendet das veraltete Element `<big>`, um einen Teil des Textes zu vergrößern.

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

#### HTML

```html
<p>
  This is the first sentence.
  <span class="bigger">This whole sentence is in bigger letters.</span>
</p>
```

#### CSS

```css
.bigger {
  font-size: larger;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_CSS_font-size", 640, 60)}}

## DOM-Schnittstelle

Dieses Element implementiert die Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement).

<!-- ## Technical summary -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS: {{cssxref("font-size")}}, {{cssxref("font")}}
- HTML: {{htmlelement("small")}}, {{htmlelement("font")}}, {{htmlelement("style")}}
