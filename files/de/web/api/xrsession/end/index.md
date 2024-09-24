---
title: "XRSession: end()-Methode"
short-title: end()
slug: Web/API/XRSession/end
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`end()`**-Methode beendet die
{{domxref("XRSession")}}, auf der sie aufgerufen wird, und gibt ein Versprechen zurück, das sich auflöst, sobald die Sitzung vollständig beendet ist.

## Syntax

```js-nolint
end()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("promise")}}, das sich ohne Wert auflöst, nachdem alle plattform-spezifischen Schritte im Zusammenhang mit dem Beenden der Sitzung abgeschlossen sind. Sie können das Versprechen verwenden, um Dinge wie das Aktualisieren von UI-Elementen zu erledigen, um die beendete Verbindung widerzuspiegeln, das Auslösen des Anwendungs-Shutdowns oder was auch immer Sie sonst tun müssen.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
