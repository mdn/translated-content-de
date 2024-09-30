---
title: "XRSession: end() Methode"
short-title: end()
slug: Web/API/XRSession/end
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`end()`** Methode beendet die [`XRSession`](/de/docs/Web/API/XRSession), auf der sie aufgerufen wird, und gibt ein Promise zurück, das aufgelöst wird, sobald die Sitzung vollständig beendet ist.

## Syntax

```js-nolint
end()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("promise")}}, das ohne Wert aufgelöst wird, nachdem alle plattformspezifischen Schritte im Zusammenhang mit der Beendigung der Sitzung abgeschlossen sind. Sie können das Promise nutzen, um beispielsweise UI-Elemente zu aktualisieren, die die beendete Verbindung widerspiegeln, die Anwendung zu beenden oder was auch immer sonst erforderlich sein könnte.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
