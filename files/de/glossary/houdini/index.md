---
title: Houdini
slug: Glossary/Houdini
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Houdini ist eine Sammlung von Low-Level-APIs, die Entwicklern die Möglichkeit geben, CSS zu erweitern, indem sie in den Styling- und Layoutprozess der Rendering-Engine eines Browsers eingreifen können. Houdini verschafft Entwicklern Zugang zum [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) ({{Glossary("CSSOM", "CSSOM")}}), wodurch sie Code schreiben können, den der Browser als CSS parsen kann.

Der Vorteil von Houdini besteht darin, dass Entwickler CSS-Funktionen erstellen können, ohne darauf warten zu müssen, dass Web-Standardspezifikationen diese definieren, und ohne darauf warten zu müssen, dass jeder Browser die Funktionen vollständig implementiert.

Während viele der Funktionen, die Houdini ermöglicht, mit JavaScript erstellt werden können, bietet das direkte Interagieren mit dem CSSOM, bevor JavaScript aktiviert ist, schnellere Parse-Zeiten. Browser erstellen das CSSOM — einschließlich Layout-, Mal- und Kompositionsprozesse — bevor irgendwelche Stilaktualisierungen in Skripten angewendet werden: Layout-, Mal- und Kompositionsprozesse werden wiederholt, um aktualisierte JavaScript-Stile zu implementieren. Houdini-Code wartet nicht darauf, dass dieser erste Renderzyklus abgeschlossen ist. Vielmehr ist er in diesem ersten Zyklus enthalten, wodurch renderbare, verständliche Stile erstellt werden.

## Siehe auch

- [Houdini-APIs](/de/docs/Web/API/Houdini_APIs)
- [CSSOM](/de/docs/Web/API/CSS_Object_Model)
- [CSS Paint API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API)
