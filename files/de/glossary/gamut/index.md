---
title: Gamut
slug: Glossary/Gamut
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{GlossarySidebar}}

Ein Farbumfang, auch **Gamut**, ist eine Teilmenge von Farben, die normalerweise die Farben repräsentiert, die ein Anzeigegerät oder ein Druckgerät darstellen kann.

Kein Anzeigegerät oder Drucker kann den gesamten Bereich von Farben darstellen, den das menschliche Auge wahrnehmen kann. Der Geräte-_Gamut_ repräsentiert die Menge der unterstützten Farben.

Traditionell wurde in der Webentwicklung nur der _[sRGB](https://en.wikipedia.org/wiki/SRGB)_ (Standard Rot-Grün-Blau) Farbumfang verwendet, bei dem jede Farbe mit drei Bytes beschrieben wird, eines für jede Primärfarbe. Allerdings unterstützen "Wide-Color"-Monitore und professionelle Drucker ein breiteres Spektrum von Farben, das nicht mit diesem Farbumfang dargestellt werden kann.

Seit 2021 bieten Browser Funktionen für andere Farbumfänge wie _[P3](https://en.wikipedia.org/wiki/DCI-P3)_, weit verbreitet in der Filmindustrie, und _[rec2020](https://en.wikipedia.org/wiki/Rec._2020)_.

Entwickler können für Geräte, die größere Farbumfänge unterstützen, verschiedene Farbsets definieren, indem sie die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) [Media-Feature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwenden. Sie können Farben außerhalb des RGB-Farbumfangs mithilfe spezifischer CSS-Funktionen beschreiben, wie zum Beispiel [`lch()`](/de/docs/Web/CSS/color_value/lch) für das LCH zylindrische Koordinatensystem oder [`lab()`](/de/docs/Web/CSS/color_value/lab) für das Lab-Koordinatensystem.

## Siehe auch

- [_Gamut_](https://en.wikipedia.org/wiki/Gamut) auf _Wikipedia_.
