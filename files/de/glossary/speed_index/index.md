---
title: Speed Index
slug: Glossary/Speed_index
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

**Speed Index** (SI) ist eine Metrik zur Leistungsbewertung des Ladens von Seiten, die misst, wie schnell der Inhalt einer Seite sichtbar wird. Der Speed Index hängt von der Größe des Viewports ab und wird in Millisekunden ausgedrückt: Je kürzer die Zeit, desto besser der Wert.

Der Speed Index wurde eingeführt, um Probleme mit anderen Meilensteinen und Metriken zu lösen und eine Messung der echten Benutzererfahrung bereitzustellen. Der Speed Index wurde in mehreren allgemeinen Audits implementiert, darunter [WebPageTest](https://github.com/catchpoint/WebPageTest.docs/blob/main/src/metrics/SpeedIndex.md) und [Lighthouse](https://github.com/paulirish/speedline).

Der Speed Index wird berechnet, indem der Prozentsatz der Seite, der visuell in jedem 100-ms-Intervall vollständig ist, bis die Seite visuell vollständig ist, ermittelt wird. Der Gesamtscore ist die Summe der einzelnen 10 Male pro Sekunde messbaren Intervalle des Prozentsatzes des Bildschirms, der nicht visuell vollständig ist.

_Diagramm, das zeigt, wie Inhalte über dem Falz vor dem Seitenladeereignis geladen werden können und vom Speed Index gemessen werden_:
![Berechnung des Speed Index](speedindex.png)

## Siehe auch

- [Lernen: Web-Performance](/de/docs/Learn_web_development/Extensions/Performance)
