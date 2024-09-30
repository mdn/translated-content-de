---
title: Speed Index
slug: Glossary/Speed_index
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{GlossarySidebar}}

**Speed Index** (SI) ist eine Leistungsmetrik für das Laden von Seiten, die misst, wie schnell der Inhalt einer Seite sichtbar wird. Der Speed Index hängt von der Größe des Viewports ab und wird in Millisekunden ausgedrückt: Je kürzer die Zeit, desto besser die Bewertung.

Der Speed Index wurde eingeführt, um Probleme mit anderen Meilensteinen und Metriken zu adressieren und einen Maßstab für die echte Benutzererfahrung zu bieten. Der Speed Index wurde in mehreren gängigen Prüfungen implementiert, einschließlich [WebPageTest](https://github.com/catchpoint/WebPageTest.docs/blob/main/src/metrics/SpeedIndex.md) und [Lighthouse](https://github.com/paulirish/speedline).

Der Speed Index wird berechnet, indem ermittelt wird, zu welchem Prozentsatz die Seite in jedem 100 ms-Intervall visuell vollständig ist, bis die Seite visuell abgeschlossen ist. Der Gesamtwert ist die Summe der einzelnen zehn Mal pro Sekunde Intervalle des Prozentsatzes des Bildschirms, der nicht visuell vollständig ist.

_Diagramm, das zeigt, wie der Inhalt oberhalb der Falte vor dem Seitenladenereignis geladen werden kann und durch den Speed Index gemessen wird_:
![Calculation of SpeedIndex](speedindex.png)

## Siehe auch

- [Lernen Sie Web-Leistung](/de/docs/Learn/Performance)
