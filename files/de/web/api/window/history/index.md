---
title: "Window: history-Eigenschaft"
short-title: history
slug: Web/API/Window/history
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die schreibgeschützte Eigenschaft `Window.history` gibt eine Referenz auf das [`History`](/de/docs/Web/API/History)-Objekt zurück, das eine Schnittstelle zum Manipulieren des Browser-Sitzungsverlaufs (besuchte Seiten in dem Tab oder Frame, in dem die aktuelle Seite geladen ist) bietet.

Siehe [Manipulieren des Browser-Verlaufs](/de/docs/Web/API/History_API) für Beispiele und Details. Besonders dieser Artikel erklärt die Sicherheitsmerkmale der Methoden [`pushState()`](/de/docs/Web/API/History/pushState) und [`replaceState()`](/de/docs/Web/API/History/replaceState), die Sie kennen sollten, bevor Sie diese verwenden.

## Wert

Eine Referenz auf das [`History`](/de/docs/Web/API/History)-Objekt.

## Beispiele

```js
history.back(); // equivalent to clicking back button
history.go(-1); // equivalent to history.back();
```

## Anmerkungen

Für Top-Level-Seiten können Sie die Liste der Seiten im Sitzungsverlauf sehen, die über das `History`-Objekt in den Dropdown-Menüs des Browsers neben den Zurück- und Vorwärts-Tasten zugänglich sind.

Aus Sicherheitsgründen erlaubt das `History`-Objekt nicht privilegierten Code nicht, auf die [URLs](/de/docs/Glossary/URL) anderer Seiten im Sitzungsverlauf zuzugreifen. Es erlaubt jedoch die Navigation im Sitzungsverlauf.

Es gibt keine Möglichkeit, den Sitzungsverlauf zu löschen oder die Zurück-/Vorwärts-Navigation aus nicht privilegiertem Code zu deaktivieren. Die am nächsten verfügbare Lösung ist die Methode [`location.replace()`](/de/docs/Web/API/Location/replace), die das aktuelle Element des Sitzungsverlaufs mit der bereitgestellten URL ersetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
