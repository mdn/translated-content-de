---
title: dynamic-range
slug: Web/CSS/@media/dynamic-range
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Das **`dynamic-range`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die vom [User Agent](/de/docs/Glossary/user_agent) und dem Ausgabegerät unterstützt werden.

> [!NOTE]
> Einige Geräte verfügen über High-Dynamic-Range-Fähigkeiten, die nicht immer 'eingeschaltet' sind und aktiviert werden müssen (manchmal programmatisch, manchmal vom Benutzer, manchmal basierend auf dem Inhalt). Dieses Medienmerkmal testet nicht, ob die Fähigkeit für hohen Dynamikumfang aktiv ist; es testet nur, ob das Gerät in der Lage ist, visuelle Darstellungen mit hohem Dynamikumfang zu liefern.

## Syntax

Das `dynamic-range` Merkmal wird als Schlüsselwortwert aus der unten aufgeführten Liste angegeben.

- `standard`

  - : Dieser Wert entspricht jedem visuellen Gerät und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User Agent oder ein Ausgabegerät, das `high` entspricht, wird auch den `standard`-Wert unterstützen.

- `high`
  - : Dieser Wert entspricht User Agents und Ausgabegeräten, die hohe Spitzenhelligkeit, hohes Kontrastverhältnis und Farbtiefe von mehr als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt ist, den ein Licht emittierendes Gerät, wie ein LCD-Bildschirm, erzeugen kann. Im Fall eines lichtreflektierenden Gerätes, wie Papier oder E-Ink, bezieht sich die Spitzenhelligkeit auf den Punkt, der zumindest Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Luminanz der hellsten Farbe zur der dunkelsten Farbe, die das System erzeugen kann. Derzeit gibt es keine genaue Methode, um die Spitzenhelligkeit und das Kontrastverhältnis zu messen, und die Bestimmung dessen, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis zählt, hängt vom User Agent ab.

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

- [Verwenden von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
