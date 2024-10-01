---
title: Houdini
slug: Glossary/Houdini
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Houdini ist eine Sammlung von Low-Level-APIs, die Entwicklern die Möglichkeit geben, CSS zu erweitern und in den Stil- und Layout-Prozess der Rendering-Engine eines Browsers einzugreifen. Houdini gibt Entwicklern Zugriff auf das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) ({{Glossary("CSSOM", "CSSOM")}}), wodurch es ihnen ermöglicht wird, Code zu schreiben, den der Browser als CSS interpretieren kann.

Der Vorteil von Houdini besteht darin, dass Entwickler CSS-Funktionen erstellen können, ohne darauf warten zu müssen, dass Webstandards spezifizierte Definitionen dafür bereitstellen, und ohne dass jeder Browser die Funktionen vollständig implementiert haben muss.

Während viele der Funktionen, die Houdini ermöglicht, mit JavaScript erstellt werden können, bietet die direkte Interaktion mit dem CSSOM, bevor JavaScript aktiviert ist, schnellere Analysezeiten. Browser erstellen das CSSOM — einschließlich Layout-, Mal- und Kompositionsprozessen — bevor irgendwelche Stilaktualisierungen aus Skripten angewendet werden: Layout-, Mal- und Kompositionsprozesse werden für aktualisierte JavaScript-Stile erneut ausgeführt. Houdini-Code wartet nicht darauf, dass dieser erste Rendering-Zyklus abgeschlossen ist. Stattdessen ist er in diesem ersten Zyklus enthalten und erzeugt renderbare, verständliche Stile.

## Siehe auch

- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
- [CSSOM](/de/docs/Web/API/CSS_Object_Model)
- [CSS Paint API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API)
