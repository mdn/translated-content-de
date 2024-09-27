---
title: Houdini
slug: Glossary/Houdini
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Houdini ist eine Sammlung von Low-Level-APIs, die Entwicklern die Möglichkeit geben, CSS zu erweitern, indem sie in den Stil- und Layoutprozess der Rendering-Engine eines Browsers eingreifen können. Houdini bietet Entwicklern Zugriff auf das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) ([CSSOM](/de/docs/Glossary/CSSOM)), wodurch es Entwicklern ermöglicht wird, Code zu schreiben, den der Browser als CSS interpretieren kann.

Der Vorteil von Houdini besteht darin, dass Entwickler CSS-Funktionen erstellen können, ohne auf die Definition durch Web-Standardspezifikationen warten zu müssen und ohne darauf warten zu müssen, dass alle Browser die Funktionen vollständig implementieren.

Zwar können viele der von Houdini ermöglichten Funktionen mit JavaScript erstellt werden, aber das direkte Interagieren mit dem CSSOM, bevor JavaScript aktiviert ist, ermöglicht schnellere Parserzeiten. Browser erstellen das CSSOM — einschließlich Layout-, Zeichen- und Kompositionsprozessen — bevor Stilanpassungen aus Skripten angewendet werden: Layout-, Zeichen- und Kompositionsprozesse werden wiederholt, um aktualisierte JavaScript-Stile umzusetzen. Houdini-Code wartet nicht auf den Abschluss dieses ersten Rendering-Zyklus. Stattdessen ist er in diesem ersten Zyklus enthalten und erstellt renderbare, verständliche Stile.

## Siehe auch

- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
- [CSSOM](/de/docs/Web/API/CSS_Object_Model)
- [CSS Paint API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API)
