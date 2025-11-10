---
title: "Verlauf: scrollRestoration-Eigenschaft"
short-title: scrollRestoration
slug: Web/API/History/scrollRestoration
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("History API")}}

Die **`scrollRestoration`**-Eigenschaft des [`History`](/de/docs/Web/API/History)-Interfaces ermöglicht es Webanwendungen, das standardmäßige Verhalten zur Wiederherstellung des Scrollens bei der Verlaufsnavigation explizit festzulegen.

## Wert

Einer der folgenden:

- `auto`
  - : Die Position auf der Seite, zu der der Benutzer gescrollt hat, wird wiederhergestellt.
- `manual`
  - : Die Position auf der Seite wird nicht wiederhergestellt. Der Benutzer muss manuell zu der Position scrollen.

## Beispiele

### Aktuelles Verhalten der Scroll-Wiederherstellung abfragen

```js
const scrollRestoration = history.scrollRestoration;
if (scrollRestoration === "manual") {
  console.log(
    "The location on the page is not restored, user will need to scroll manually.",
  );
}
```

### Automatische Wiederherstellung der Seitenposition verhindern

```js
history.scrollRestoration = "manual";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
