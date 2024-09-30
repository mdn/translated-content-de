---
title: dynamic-range
slug: Web/CSS/@media/dynamic-range
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`dynamic-range`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die vom [User-Agent](/de/docs/Glossary/user_agent) und dem Ausgabegerät unterstützt werden.

> [!NOTE]
> Einige Geräte haben eine hohe Dynamikbereichsfähigkeit, die nicht immer „aktiv“ ist und aktiviert werden muss (manchmal programmgesteuert, manchmal durch den Benutzer, manchmal basierend auf dem Inhalt). Dieses Media-Feature testet nicht, ob die Dynamikbereichsfähigkeit aktiv ist; es testet lediglich, ob das Gerät visuell hochwertige Dynamikbereiche darstellen kann.

## Syntax

Die `dynamic-range`-Funktion wird als Schlüsselwortwert aus der unten stehenden Liste angegeben.

- `standard`

  - : Dieser Wert passt zu jedem visuellen Gerät und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User-Agent oder ein Ausgabegerät, das `high` entspricht, wird auch dem Wert `standard` entsprechen.

- `high`
  - : Dieser Wert passt zu User-Agents und Ausgabegeräten, die hohe Spitzenhelligkeit, hohes Kontrastverhältnis und eine Farbtiefe von mehr als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt eines lichtemittierenden Geräts, wie z. B. ein LCD-Bildschirm, leuchten kann. Bei einem lichtreflektierenden Gerät, wie Papier oder E-Ink, bezieht sich die Spitzenhelligkeit auf den Punkt, der zumindest Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zu der der dunkelsten Farbe, die das System erzeugen kann. Derzeit gibt es keine präzise Methode, um Spitzenhelligkeit und Kontrastverhältnis zu messen, und die Bestimmung dessen, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis gilt, hängt vom User-Agent ab.

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
- [@media](/de/docs/Web/CSS/@media)
