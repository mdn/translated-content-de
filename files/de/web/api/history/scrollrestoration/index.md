---
title: "History: scrollRestoration-Eigenschaft"
short-title: scrollRestoration
slug: Web/API/History/scrollRestoration
l10n:
  sourceCommit: b8eb6acf2fa8e54254b1165e58adbe2378591da1
---

{{APIRef("History API")}}

Die **`scrollRestoration`**-Eigenschaft der [`History`](/de/docs/Web/API/History)-Schnittstelle ermöglicht es Webanwendungen, explizit das Standardverhalten der Scroll-Wiederherstellung bei der Navigatorhistorie festzulegen.

## Wert

Einer der folgenden:

- `auto`
  - : Der Ort auf der Seite, zu dem der Benutzer gescrollt hat, wird wiederhergestellt.
- `manual`
  - : Der Ort auf der Seite wird nicht wiederhergestellt. Der Benutzer muss manuell zu der Stelle scrollen.

## Beispiele

### Aktuelles Scroll-Wiederherstellungsverhalten abfragen

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
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
