---
title: "XRSession: end()-Methode"
short-title: end()
slug: Web/API/XRSession/end
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`end()`**-Methode beendet die
[`XRSession`](/de/docs/Web/API/XRSession), auf der sie aufgerufen wird, und gibt ein Promise zurück, das aufgelöst wird, sobald die Sitzung vollständig beendet ist.

## Syntax

```js-nolint
end()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("promise")}}, das ohne einen Wert aufgelöst wird, nachdem alle plattform-spezifischen Schritte im Zusammenhang mit dem Beenden der Sitzung abgeschlossen sind. Sie können das Promise verwenden, um beispielsweise UI-Elemente zu aktualisieren, um die beendete Verbindung widerzuspiegeln, die Anwendung herunterzufahren oder was auch immer sonst erforderlich ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
