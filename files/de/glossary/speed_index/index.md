---
title: Speed-Index
slug: Glossary/Speed_index
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Speed-Index** (SI) ist eine Metrik zur Messung der Ladeleistung einer Seite, die angibt, wie schnell die Inhalte einer Seite sichtbar geladen werden. Der Speed-Index hängt von der Größe des Ansichtsfensters ab und wird in Millisekunden ausgedrückt: Je geringer die Zeit, desto besser die Bewertung.

Der Speed-Index wurde eingeführt, um Probleme mit anderen Meilensteinen und Metriken anzugehen und eine Bewertung der tatsächlichen Benutzererfahrung bereitzustellen. Der Speed-Index wurde in mehreren gängigen Audits implementiert, darunter [WebPageTest](https://github.com/catchpoint/WebPageTest.docs/blob/main/src/metrics/SpeedIndex.md) und [Lighthouse](https://github.com/paulirish/speedline).

Der Speed-Index wird berechnet, indem jeder 100ms-Intervall beurteilt wird, wie viel Prozent der Seite visuell vollständig sind, bis die Seite vollständig dargestellt ist. Die Gesamtbewertung ist die Summe der einzelnen Intervalle von 10 mal pro Sekunde der Prozentanteile des Bildschirms, der nicht visuell vollständig ist.

_Diagramm, das zeigt, wie der Inhalt oberhalb der Falz vor dem Seitenevent geladen werden kann und vom Speed-Index gemessen wird_:
![Berechnung des Speed-Index](speedindex.png)

## Siehe auch

- [Lernen: Web-Performance](/de/docs/Learn_web_development/Extensions/Performance)
