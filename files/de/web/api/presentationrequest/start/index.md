---
title: "PresentationRequest: start() Methode"
short-title: start()
slug: Web/API/PresentationRequest/start
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`start()`**-Eigenschaft des [`PresentationRequest`](/de/docs/Web/API/PresentationRequest)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einer [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) gelöst wird, nachdem der Benutzeragent den Benutzer auffordert, eine Anzeige auszuwählen und die Erlaubnis zur Nutzung dieser Anzeige zu erteilen.

## Syntax

```js-nolint
start()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) gelöst wird.

## Sicherheit

[Flüchtige Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
