---
title: "Standort: ancestorOrigins-Eigenschaft"
short-title: ancestorOrigins
slug: Web/API/Location/ancestorOrigins
l10n:
  sourceCommit: de2e44940354cad9d1922026f5020751919725b8
---

{{APIRef("Location")}}

Die schreibgeschützte **`ancestorOrigins`** Eigenschaft der [`Location`](/de/docs/Web/API/Location)-Schnittstelle ist eine statische [`DOMStringList`](/de/docs/Web/API/DOMStringList), die in umgekehrter Reihenfolge die Ursprünge aller übergeordneten Browsing-Kontexte des mit dem gegebenen [`Location`](/de/docs/Web/API/Location)-Objekt verbundenen Dokuments enthält.

Sie können `location.ancestorOrigins` in einem Skript für ein Dokument verwenden, um festzustellen, ob das Dokument beispielsweise von einer Website eingerahmt wird, von der Sie es nicht erwarten. Sie können es auch verwenden, um das Verhalten des Dokuments basierend darauf zu variieren, welche Website oder Liste von Websites es rahmt.

> [!NOTE]
> Das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy)-Attribut eines einbettenden `<iframe>` beeinflusst diese Liste. Wenn `referrerpolicy` auf `no-referrer` oder auf `same-origin` gesetzt ist, wenn das gerahmte Dokument ursprungsübergreifend ist, wird der Ursprung des das `<iframe>` enthaltenden Dokuments aus der `ancestorOrigins`-Liste des gerahmten Dokuments entfernt. Der Ursprung wird durch einen undurchsichtigen Ursprung ersetzt, der als `"null"` serialisiert wird.

## Wert

Eine [`DOMStringList`](/de/docs/Web/API/DOMStringList).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
