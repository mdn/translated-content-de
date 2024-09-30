---
title: "Location: ancestorOrigins-Eigenschaft"
short-title: ancestorOrigins
slug: Web/API/Location/ancestorOrigins
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{APIRef("Location")}}

Die **`ancestorOrigins`** Schreibgeschützte Eigenschaft der [`Location`](/de/docs/Web/API/Location)-Schnittstelle ist eine statische
[`DOMStringList`](/de/docs/Web/API/DOMStringList), die in umgekehrter Reihenfolge die Ursprünge aller übergeordneten
Browsingskontexte des mit dem gegebenen [`Location`](/de/docs/Web/API/Location)-Objekt verknüpften Dokuments enthält.

Sie können `location.ancestorOrigins` im Skript für ein Dokument verwenden, um
beispielsweise festzustellen, ob das Dokument von einer Website gerahmt wird, von der Sie es nicht
erwarten. Außerdem können Sie damit das Verhalten des Dokuments je nach der Website oder Liste von Websites, die es rahmen, variieren.

## Wert

Eine [`DOMStringList`](/de/docs/Web/API/DOMStringList).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
