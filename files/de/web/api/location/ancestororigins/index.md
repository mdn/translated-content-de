---
title: "Location: ancestorOrigins-Eigenschaft"
short-title: ancestorOrigins
slug: Web/API/Location/ancestorOrigins
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{APIRef("Location")}}

Die **`ancestorOrigins`** schreibgeschützte
Eigenschaft des [`Location`](/de/docs/Web/API/Location)-Interfaces ist eine statische
[`DOMStringList`](/de/docs/Web/API/DOMStringList), die in umgekehrter Reihenfolge die Ursprünge aller übergeordneten
Browsing-Kontexte des mit dem gegebenen [`Location`](/de/docs/Web/API/Location)-Objekt verbundenen Dokuments enthält.

Sie können `location.ancestorOrigins` im Skript für ein Dokument verwenden, um
beispielsweise festzustellen, ob das Dokument von einer Site eingebettet wird, von der Sie nicht erwarten,
dass sie es einbettet. Sie können es auch verwenden, um das Verhalten des Dokuments basierend darauf zu variieren, welche Site oder Liste von Sites es einbettet.

## Wert

Eine [`DOMStringList`](/de/docs/Web/API/DOMStringList).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
