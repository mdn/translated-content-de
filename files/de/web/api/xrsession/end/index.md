---
title: "XRSession: end()-Methode"
short-title: end()
slug: Web/API/XRSession/end
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`end()`**-Methode schließt die
[`XRSession`](/de/docs/Web/API/XRSession), auf der sie aufgerufen wird, und gibt ein `promise` zurück, das aufgelöst wird, sobald die Sitzung vollständig beendet wurde.

## Syntax

```js-nolint
end()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("promise")}}, das ohne Wert aufgelöst wird, nachdem alle plattform-spezifischen Schritte im Zusammenhang mit dem Herunterfahren der Sitzung abgeschlossen sind. Sie können das `promise` verwenden, um zum Beispiel UI-Elemente zu aktualisieren, die die beendete Verbindung widerspiegeln, die Anwendung herunterzufahren oder alles zu tun, was sonst erforderlich sein könnte.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
