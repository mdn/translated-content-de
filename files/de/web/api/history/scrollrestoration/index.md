---
title: "History: scrollRestoration Eigenschaft"
short-title: scrollRestoration
slug: Web/API/History/scrollRestoration
l10n:
  sourceCommit: b8eb6acf2fa8e54254b1165e58adbe2378591da1
---

{{APIRef("History API")}}

Die **`scrollRestoration`**-Eigenschaft der [`History`](/de/docs/Web/API/History)-Schnittstelle ermöglicht es Webanwendungen, das Standardverhalten der Bildlaufwiederherstellung bei der Verlaufsnavigation explizit festzulegen.

## Wert

Einer der folgenden:

- `auto`
  - : Die Position auf der Seite, zu der der Benutzer gescrollt hat, wird wiederhergestellt.
- `manual`
  - : Die Position auf der Seite wird nicht wiederhergestellt. Der Benutzer muss manuell an die Position scrollen.

## Beispiele

### Das aktuelle Verhalten der Bildlaufwiederherstellung abfragen

```js
const scrollRestoration = history.scrollRestoration;
if (scrollRestoration === "manual") {
  console.log(
    "The location on the page is not restored, user will need to scroll manually.",
  );
}
```

### Verhindern der automatischen Wiederherstellung der Seitenposition

```js
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
