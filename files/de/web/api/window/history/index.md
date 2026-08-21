---
title: "Window: history-Eigenschaft"
short-title: history
slug: Web/API/Window/history
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft `Window.history` liefert eine Referenz auf das [`History`](/de/docs/Web/API/History)-Objekt, welches eine Schnittstelle zur Manipulation der Browser-_Sitzungsverlauf_ (Seiten, die im Tab oder Frame, in dem die aktuelle Seite geladen ist, besucht wurden) bietet.

Für Beispiele und Details siehe [Manipulation des Browser-Verlaufs](/de/docs/Web/API/History_API). Besonders dieser Artikel erklärt die Sicherheitsmerkmale der Methoden [`pushState()`](/de/docs/Web/API/History/pushState) und [`replaceState()`](/de/docs/Web/API/History/replaceState), die Sie kennen sollten, bevor Sie diese verwenden.

## Wert

Eine Referenz auf das [`History`](/de/docs/Web/API/History)-Objekt.

## Beispiele

```js
history.back(); // equivalent to clicking back button
history.go(-1); // equivalent to history.back();
```

## Hinweise

Für oberste Seitenebenen können Sie die Liste der Seiten im Sitzungsverlauf sehen, zugänglich über das `History`-Objekt, in den Dropdown-Menüs des Browsers neben den Zurück- und Vorwärts-Tasten.

Aus Sicherheitsgründen erlaubt das `History`-Objekt nicht-privilegiertem Code keinen Zugriff auf die {{Glossary("URL", "URLs")}} anderer Seiten im Sitzungsverlauf, erlaubt jedoch die Navigation im Sitzungsverlauf.

Es gibt keine Möglichkeit, mit nicht-privilegiertem Code den Sitzungsverlauf zu löschen oder die Zurück-/Vorwärts-Navigation zu deaktivieren. Die nächstliegende verfügbare Lösung ist die Methode [`location.replace()`](/de/docs/Web/API/Location/replace), die das aktuelle Element des Sitzungsverlaufs durch die angegebene URL ersetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
