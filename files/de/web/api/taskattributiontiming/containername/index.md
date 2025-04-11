---
title: "TaskAttributionTiming: Eigenschaft containerName"
short-title: containerName
slug: Web/API/TaskAttributionTiming/containerName
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`containerName`** der [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Schnittstelle gibt das `name`-Attribut des Containers zurück. Ein Container ist das iframe, embed oder object usw., das im Allgemeinen für eine lange Aufgabe verantwortlich gemacht wird.

## Wert

Ein String, der das `name` HTML-Inhaltsattribut des Containers enthält (z. B. [`<iframe name="myIframe">`](/de/docs/Web/HTML/Reference/Elements/iframe#name) oder [`<object name="myObject">`](/de/docs/Web/HTML/Reference/Elements/object#name)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
