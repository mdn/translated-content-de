---
title: "PresentationRequest: start()-Methode"
short-title: start()
slug: Web/API/PresentationRequest/start
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`start()`**-Eigenschaft der [`PresentationRequest`](/de/docs/Web/API/PresentationRequest)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) aufgelöst wird, nachdem der Benutzeragent den Benutzer auffordert, ein Display auszuwählen und die Erlaubnis zur Nutzung dieses Displays zu erteilen.

## Syntax

```js-nolint
start()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) aufgelöst wird.

## Sicherheit

Eine [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
