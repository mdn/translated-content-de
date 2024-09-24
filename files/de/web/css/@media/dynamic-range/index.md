---
title: Dynamikbereich
slug: Web/CSS/@media/dynamic-range
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`dynamic-range`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die vom {{glossary("user agent")}} und dem Ausgabegerät unterstützt werden.

> [!NOTE]
> Einige Geräte verfügen über Hochdynamikbereich-Fähigkeiten, die nicht immer 'eingeschaltet' sind und aktiviert werden müssen (manchmal programmatisch, manchmal vom Nutzer, manchmal basierend auf dem Inhalt). Diese Media-Feature testet nicht, ob die Dynamikbereichsfähigkeit aktiv ist; es testet nur, ob das Gerät in der Lage ist, visuelle Inhalte mit einem Hochdynamikbereich anzuzeigen.

## Syntax

Das `dynamic-range`-Feature wird als Schlüsselwortwert angegeben, der aus der unten aufgeführten Liste ausgewählt wird.

- `standard`

  - : Dieser Wert entspricht jedem visuellen Gerät und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User-Agent oder ein Ausgabegerät, das mit `high` übereinstimmt, wird auch mit dem `standard`-Wert übereinstimmen.

- `high`
  - : Dieser Wert entspricht User-Agents und Ausgabegeräten, die eine hohe Spitzenhelligkeit, ein hohes Kontrastverhältnis und eine Farbtiefe von mehr als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt ist, den ein Licht emittierendes Gerät, wie beispielsweise ein LCD-Bildschirm, erzeugen kann. Im Falle eines lichtreflektierenden Geräts, wie Papier oder E-Ink, bezieht sich die Spitzenhelligkeit auf den Punkt, der mindestens Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zu der der dunkelsten Farbe, die das System zu erzeugen imstande ist. Derzeit gibt es keine präzise Methode, Spitzenhelligkeit und Kontrastverhältnis zu messen, und die Festlegung dessen, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis gilt, hängt vom User-Agent ab.

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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
