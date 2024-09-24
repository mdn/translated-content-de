---
title: Geschwindigkeitsindex
slug: Glossary/Speed_index
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{GlossarySidebar}}

**Geschwindigkeitsindex** (SI) ist eine Leistungsmetrik für das Laden von Seiten, die misst, wie schnell der Inhalt einer Seite sichtbar geladen wird. Der Geschwindigkeitsindex ist abhängig von der Größe des Ansichtsfensters und wird in Millisekunden ausgedrückt: Je kürzer die Zeit, desto besser die Bewertung.

Der Geschwindigkeitsindex wurde eingeführt, um Probleme mit anderen Meilensteinen und Metriken zu adressieren und ein Maß für die tatsächliche Benutzererfahrung zu bieten. Der Geschwindigkeitsindex wurde in mehreren gängigen Audits implementiert, einschließlich [WebPageTest](https://github.com/catchpoint/WebPageTest.docs/blob/main/src/metrics/SpeedIndex.md) und [Lighthouse](https://github.com/paulirish/speedline).

Der Geschwindigkeitsindex wird berechnet, indem ermittelt wird, wie viel Prozent der Seite alle 100 ms visuell vollständig sind, bis die Seite visuell vollständig ist. Der Gesamtscore ist die Summe der einzelnen zehnmal pro Sekunde Intervalle des Prozentsatzes des Bildschirms, der nicht visuell vollständig ist.

_Diagramm zeigt, wie Inhalte über dem Falz vor dem Seitenladeereignis geladen werden können und wie der Geschwindigkeitsindex gemessen wird_:
![Berechnung des Geschwindigkeitsindex](speedindex.png)

## Siehe auch

- [Erfahren Sie mehr über Web-Performance](/de/docs/Learn/Performance)
