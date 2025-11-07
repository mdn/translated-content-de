---
title: dynamic-range
slug: Web/CSS/Reference/At-rules/@media/dynamic-range
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`dynamic-range`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die vom {{Glossary("user_agent", "User-Agent")}} und dem Ausgabegerät unterstützt werden.

> [!NOTE]
> Einige Geräte verfügen über High-Dynamic-Range-Fähigkeiten, die nicht immer „eingeschaltet“ sind und aktiviert werden müssen (manchmal programmatisch, manchmal durch den Benutzer, manchmal basierend auf dem Inhalt). Dieses Media-Feature testet nicht, ob die High Dynamic Range-Funktionalität aktiv ist; es testet nur, ob das Gerät in der Lage ist, hochdynamische visuelle Inhalte darzustellen.

## Syntax

Das `dynamic-range`-Feature wird als ein Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `standard`
  - : Dieser Wert trifft auf jedes visuelle Gerät zu und schließt Geräte aus, denen visuelle Fähigkeiten fehlen. Ein User-Agent oder ein Ausgabegerät, das mit `high` übereinstimmt, wird auch den `standard`-Wert treffen.

- `high`
  - : Dieser Wert trifft auf User-Agents und Ausgabegeräte zu, die eine hohe Spitzenhelligkeit, ein hohes Kontrastverhältnis und eine Farbtiefe von mehr als 24 Bit oder 8 Bit pro RGB-Farbkomponente unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt ist, den ein lichtemittierendes Gerät, wie ein LCD-Bildschirm, erzeugen kann. Bei einem lichtreflektierenden Gerät, wie Papier oder E-Ink, bezieht sich die Spitzenhelligkeit auf den Punkt, der zumindest Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zu der der dunkelsten Farbe, die das System erzeugen kann. Derzeit gibt es keine präzise Methode zur Messung von Spitzenhelligkeit und Kontrastverhältnis, und die Bestimmung, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis zählt, hängt vom User-Agent ab.

## Beispiele

```css
@media (dynamic-range: standard) {
  p {
    color: red;
  }
}

@media (dynamic-range: high) {
  p {
    color: green;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
