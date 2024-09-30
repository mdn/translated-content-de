---
title: Fingerprinting
slug: Glossary/Fingerprinting
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{GlossarySidebar}}

**Fingerprinting** ist eine Praxis, bei der Websites einen bestimmten Browser (und damit indirekt einen bestimmten Benutzer) identifizieren, indem sie unterscheidbare Merkmale des Browsers und des zugrunde liegenden Betriebssystems sammeln und kombinieren. Elemente eines Fingerabdrucks könnten zum Beispiel beinhalten:

- die Browserversion
- die Zeitzone und bevorzugte Sprache
- die verfügbaren Video- oder Audiocodecs auf dem System
- die auf dem System installierten Schriftarten
- den Zustand der Browsereinstellungen
- die Bildschirmgröße und Auflösung des Computers

Eine Website kann solche Informationen abrufen, indem sie JavaScript und CSS auf dem Gerät ausführt. Durch die Kombination dieser Daten kann oft ein einzigartiger Fingerabdruck für einen Browser erstellt werden, der dann verwendet werden kann, um Benutzer im Web zu verfolgen.

Webstandards sind so gestaltet, dass sie die Fähigkeit einer Website, identifizierende Informationen zu sammeln, minimieren, und Browser fügen in der Regel eigene Schutzmaßnahmen hinzu.

## Siehe auch

- [Cover Your Tracks](https://coveryourtracks.eff.org/): ein Tool, das zeigt, welche Daten eine Website verwenden kann, um Ihren Browser zu identifizieren.
- [Mitigating Browser Fingerprinting in Web Specifications](https://www.w3.org/TR/fingerprinting-guidance/): bewährte Vorgehensweisen für Spezifikationsautoren zur Verhinderung von Fingerprinting.
