---
title: "Window: history-Eigenschaft"
short-title: history
slug: Web/API/Window/history
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die schreibgeschützte Eigenschaft `Window.history` gibt eine Referenz auf das {{domxref("History")}}-Objekt zurück, das eine Schnittstelle zum Manipulieren des _Session-Verlaufs_ des Browsers bietet (besuchte Seiten im Tab oder Frame, in dem die aktuelle Seite geladen ist).

Siehe [Manipulieren des Browserverlaufs](/de/docs/Web/API/History_API) für Beispiele und Details. Insbesondere erklärt dieser Artikel Sicherheitsmerkmale der {{domxref("History.pushState", "pushState()")}}- und {{domxref("History.replaceState", "replaceState()")}}-Methoden, über die Sie sich vor deren Nutzung im Klaren sein sollten.

## Wert

Eine Referenz auf das {{domxref("History")}}-Objekt.

## Beispiele

```js
history.back(); // entspricht dem Klicken auf die Zurück-Schaltfläche
history.go(-1); // entspricht history.back();
```

## Hinweise

Bei Seiten auf oberster Ebene können Sie die Liste der Seiten im Session-Verlauf sehen, die über das `History`-Objekt zugänglich ist, in den Dropdown-Menüs des Browsers neben den Zurück- und Vorwärts-Schaltflächen.

Aus Sicherheitsgründen erlaubt das `History`-Objekt dem nicht privilegierten Code nicht, auf die {{glossary("URL", "URLs")}} anderer Seiten im Session-Verlauf zuzugreifen, aber es erlaubt, den Session-Verlauf zu navigieren.

Es gibt keine Möglichkeit, den Session-Verlauf zu löschen oder die Navigation zurück/vor zu deaktivieren durch nicht privilegierten Code. Die nächstliegende verfügbare Lösung ist die {{domxref("Location.replace", "location.replace()")}}-Methode, die das aktuelle Element des Session-Verlaufs durch die angegebene URL ersetzt.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
