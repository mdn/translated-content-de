---
title: "Window: history-Eigenschaft"
short-title: history
slug: Web/API/Window/history
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die schreibgeschützte `Window.history`-Eigenschaft gibt eine Referenz auf das [`History`](/de/docs/Web/API/History)-Objekt zurück, welches eine Schnittstelle zum Manipulieren des _Sitzungsverlaufs_ des Browsers bereitstellt (Seiten, die im Tab oder Rahmen besucht wurden, in dem die aktuelle Seite geladen ist).

Siehe [Manipulation des Browser-Verlaufs](/de/docs/Web/API/History_API) für Beispiele und Details. Insbesondere erklärt dieser Artikel Sicherheitsmerkmale der Methoden [`pushState()`](/de/docs/Web/API/History/pushState) und [`replaceState()`](/de/docs/Web/API/History/replaceState), derer Sie sich bewusst sein sollten, bevor Sie sie verwenden.

## Wert

Eine Referenz auf das [`History`](/de/docs/Web/API/History)-Objekt.

## Beispiele

```js
history.back(); // equivalent to clicking back button
history.go(-1); // equivalent to history.back();
```

## Anmerkungen

Für Seiten auf oberster Ebene können Sie die Liste der Seiten im Sitzungsverlauf sehen, die über das `History`-Objekt zugänglich ist, in den Dropdown-Menüs des Browsers neben den Vor- und Zurück-Buttons.

Aus Sicherheitsgründen erlaubt das `History`-Objekt es nicht, dass nicht-privilegierter Code auf die [URLs](/de/docs/Glossary/URL) anderer Seiten im Sitzungsverlauf zugreift, aber es erlaubt die Navigation im Sitzungsverlauf.

Es gibt keine Möglichkeit, den Sitzungsverlauf zu löschen oder die Vorwärts-/Rückwärtsnavigation aus nicht-privilegiertem Code zu deaktivieren. Die nächstliegende verfügbare Lösung ist die [`location.replace()`](/de/docs/Web/API/Location/replace)-Methode, die das aktuelle Element des Sitzungsverlaufs durch die angegebene URL ersetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
