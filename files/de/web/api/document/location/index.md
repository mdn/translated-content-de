---
title: "Dokument: location-Eigenschaft"
short-title: location
slug: Web/API/Document/location
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("DOM")}}

Die schreibgeschützte **`location`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein [`Location`](/de/docs/Web/API/Location)-Objekt zurück, das Informationen über die URL des Dokuments enthält und Methoden bereitstellt, um diese URL zu ändern und eine andere URL zu laden.

Um nur die URL als Zeichenfolge abzurufen, kann auch die schreibgeschützte [`document.URL`](/de/docs/Web/API/Document/URL)-Eigenschaft verwendet werden.

## Wert

Ein [`Location`](/de/docs/Web/API/Location)-Objekt. Wenn sich das aktuelle Dokument nicht in einem Browsing-Kontext befindet, ist der zurückgegebene Wert `null`.

Obwohl die `location`-Eigenschaft selbst im Sinne von "Sie können das `Location`-Objekt nicht ersetzen" schreibgeschützt ist, können Sie dennoch direkt der `location`-Eigenschaft zuweisen, was gleichbedeutend mit der Zuweisung zu ihrer [`href`](/de/docs/Web/API/Location/href)-Eigenschaft ist. Sie können das `Location`-Objekt auch mit den Methoden [`assign()`](/de/docs/Web/API/Location/assign) und [`replace()`](/de/docs/Web/API/Location/replace) modifizieren.

## Beispiele

```js
console.log(document.location);
// Prints a Location object to the console
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface des zurückgegebenen Wertes, [`Location`](/de/docs/Web/API/Location)
- Eine ähnliche Information, aber bezogen auf den {{Glossary("browsing_context", "Browsing-Kontext")}},
  [`Window.location`](/de/docs/Web/API/Window/location)
