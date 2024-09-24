---
title: "History: scrollRestoration-Eigenschaft"
short-title: scrollRestoration
slug: Web/API/History/scrollRestoration
l10n:
  sourceCommit: b8eb6acf2fa8e54254b1165e58adbe2378591da1
---

{{APIRef("History API")}}

Die **`scrollRestoration`**-Eigenschaft des {{DOMxRef("History")}}-Interfaces ermöglicht es Webanwendungen, das standardmäßige Verhalten der Scroll-Wiederherstellung bei der Navigation in der History explizit festzulegen.

## Wert

Einer der folgenden:

- `auto`
  - : Die Position auf der Seite, bis zu der der Benutzer gescrollt hat, wird wiederhergestellt.
- `manual`
  - : Die Position auf der Seite wird nicht wiederhergestellt. Der Benutzer muss manuell zur Position scrollen.

## Beispiele

### Aktuelles Verhalten der Scroll-Wiederherstellung abfragen

```js
const scrollRestoration = history.scrollRestoration;
if (scrollRestoration === "manual") {
  console.log(
    "Die Position auf der Seite wird nicht wiederhergestellt, der Benutzer muss manuell scrollen.",
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
