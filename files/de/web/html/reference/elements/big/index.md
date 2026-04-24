---
title: "`<big>` HTML größerer Textelement"
short-title: <big>
slug: Web/HTML/Reference/Elements/big
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

Das veraltete **`<big>`** [HTML](/de/docs/Web/HTML)-Element rendert den eingeschlossenen Text in einer Schriftgröße, die um eine Stufe größer ist als der umgebende Text (zum Beispiel wird `medium` zu `large`). Die Größe ist auf die maximal zulässige Schriftgröße des Browsers begrenzt.

> [!WARNING]
> Dieses Element wurde aus der Spezifikation entfernt und sollte nicht mehr verwendet werden. Verwenden Sie die CSS-Eigenschaft {{cssxref("font-size")}}, um die Schriftgröße anzupassen.

## Attribute

Dieses Element hat, abgesehen von den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes), die allen Elementen gemeinsam sind, keine weiteren Attribute.

## Beispiele

Hier sehen Sie Beispiele, die die Verwendung von `<big>` zeigen, gefolgt von einem Beispiel, das zeigt, wie dieselben Ergebnisse mit moderner CSS-Syntax erreicht werden können.

### Verwendung von big

Dieses Beispiel verwendet das veraltete `<big>`-Element, um die Größe einiger Texte zu erhöhen.

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
