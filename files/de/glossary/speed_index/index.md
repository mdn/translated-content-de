---
title: Speed Index
slug: Glossary/Speed_index
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{GlossarySidebar}}

**Speed Index** (SI) ist eine Kennzahl für die Ladeleistung von Seiten, die misst, wie schnell der Inhalt einer Seite sichtbar geladen wird. Der Speed Index hängt von der Größe des Viewports ab und wird in Millisekunden ausgedrückt: Je geringer die Zeit, desto besser die Bewertung.

Der Speed Index wurde eingeführt, um Probleme mit anderen Meilensteinen und Metriken zu adressieren und ein Maß für die tatsächliche Nutzererfahrung zu bieten. Der Speed Index wurde in mehreren gängigen Prüfungen implementiert, darunter [WebPageTest](https://github.com/catchpoint/WebPageTest.docs/blob/main/src/metrics/SpeedIndex.md) und [Lighthouse](https://github.com/paulirish/speedline).

Der Speed Index wird berechnet, indem gemessen wird, wie viel Prozent der Seite alle 100 ms visuell vollständig sind, bis die Seite optisch vollständig ist. Der Gesamtscore ist die Summe der einzelnen Intervalle von 10 Mal pro Sekunde der Prozentwerte des Bildschirms, der nicht visuell komplett ist.

_Diagramm, das zeigt, wie Inhalte oberhalb der Falzlinie vor dem Ladeereignis der Seite geladen werden können und wie dies vom Speed Index gemessen wird_:
![Berechnung des SpeedIndex](speedindex.png)

## Siehe auch

- [Lernen Sie Web-Performance](/de/docs/Learn/Performance)
