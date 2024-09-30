---
title: "TaskAttributionTiming: containerName Eigenschaft"
short-title: containerName
slug: Web/API/TaskAttributionTiming/containerName
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`containerName`** der [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Schnittstelle gibt das `name`-Attribut des Containers zurück. Ein Container ist das `<iframe>`, `<embed>` oder `<object>` usw., das insgesamt für eine lange Aufgabe verantwortlich gemacht wird.

## Wert

Ein String, der das `name` HTML-Inhaltsattribut des Containers enthält (z. B. [`<iframe name="myIframe">`](/de/docs/Web/HTML/Element/iframe#name) oder [`<object name="myObject">`](/de/docs/Web/HTML/Element/object#name)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
