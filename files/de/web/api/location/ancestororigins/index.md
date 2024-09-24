---
title: "Location: ancestorOrigins-Eigenschaft"
short-title: ancestorOrigins
slug: Web/API/Location/ancestorOrigins
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{APIRef("Location")}}

Die **`ancestorOrigins`**-Schreibgeschützte Eigenschaft des {{domxref("Location")}}-Interfaces ist eine statische {{domxref("DOMStringList")}}, die, in umgekehrter Reihenfolge, die Ursprünge aller übergeordneten Browsing-Kontexte des Dokuments enthält, das mit dem gegebenen {{domxref("Location")}}-Objekt verknüpft ist.

Sie können `location.ancestorOrigins` im Skript für ein Dokument verwenden, um beispielsweise festzustellen, wann das Dokument von einer Website gerahmt wird, von der Sie es nicht erwarten. Sie können es auch verwenden, um das Verhalten des Dokuments je nach der Website oder der Liste von Websites, die es rahmen, zu variieren.

## Wert

Eine {{domxref("DOMStringList")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
