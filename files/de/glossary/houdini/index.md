---
title: Houdini
slug: Glossary/Houdini
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Houdini ist eine Reihe von Low-Level-APIs, die Entwicklern die Möglichkeit geben, CSS zu erweitern, indem sie in den Stil- und Layout-Prozess der Rendering-Engine eines Browsers eingreifen können. Houdini bietet Entwicklern Zugriff auf das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) ({{Glossary("CSSOM")}}) und ermöglicht es ihnen, Code zu schreiben, den der Browser als CSS interpretieren kann.

Der Vorteil von Houdini besteht darin, dass Entwickler CSS-Funktionen erstellen können, ohne auf die Definition dieser Funktionen durch Webstandardspezifikationen warten zu müssen und ohne darauf warten zu müssen, dass jeder Browser die Funktionen vollständig implementiert.

Obwohl viele der durch Houdini ermöglichte Funktionen mit JavaScript erstellt werden können, bietet die direkte Interaktion mit dem CSSOM vor der Aktivierung von JavaScript schnellere Analysezeiten. Browser erstellen das CSSOM — einschließlich Layout-, Zeichen- und Kompositionsprozessen — bevor Stilaktualisierungen in Skripten angewendet werden: Layout-, Zeichen- und Kompositionsprozesse werden für aktualisierte JavaScript-Stile wiederholt implementiert. Houdini-Code wartet nicht darauf, dass dieser erste Rendering-Zyklus abgeschlossen ist. Vielmehr ist er in diesem ersten Zyklus enthalten und erstellt darstellbare, verständliche Stile.

## Siehe auch

- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
- [CSSOM](/de/docs/Web/API/CSS_Object_Model)
- [CSS Paint API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API)
