---
title: "Bildschirm: Höhe-Eigenschaft"
short-title: height
slug: Web/API/Screen/height
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte Eigenschaft **`Screen.height`** gibt die Höhe des Bildschirms in CSS-Pixeln zurück.

## Wert

Eine Zahl.

## Beispiele

```js
if (window.screen.availHeight !== window.screen.height) {
  // Something is occupying some screen real estate!
}
```

## Hinweise

Beachten Sie, dass nicht die gesamte durch diese Eigenschaft angegebene Höhe dem Fenster selbst zur Verfügung stehen muss. Widgets wie Taskleisten oder andere spezielle Anwendungsfenster, die sich in das Betriebssystem integrieren (z. B. der Spinner-Player, der minimiert wie eine zusätzliche Symbolleiste auf Windows agiert), können den für Browserfenster und andere Anwendungen verfügbaren Platz vermindern. Es gibt einen Unterschied zwischen `window.screen.height` und `window.screen.availHeight`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
