---
title: "XRSession: end()-Methode"
short-title: end()
slug: Web/API/XRSession/end
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`end()`**-Methode schließt die [`XRSession`](/de/docs/Web/API/XRSession), auf der sie aufgerufen wird, und gibt ein Promise zurück, das aufgelöst wird, sobald die Sitzung vollständig beendet wurde.

## Syntax

```js-nolint
end()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ohne einen Wert aufgelöst wird, nachdem alle plattformspezifischen Schritte zum Beenden der Sitzung abgeschlossen sind. Sie können das Promise verwenden, um z.B. UI-Elemente zu aktualisieren, um die beendete Verbindung anzuzeigen, den Abschluss der Anwendung auszulösen oder was auch immer erforderlich sein könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
