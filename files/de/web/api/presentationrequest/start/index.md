---
title: "PresentationRequest: start() Methode"
short-title: start()
slug: Web/API/PresentationRequest/start
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`start()`** Eigenschaft des [`PresentationRequest`](/de/docs/Web/API/PresentationRequest) Interfaces gibt ein {{jsxref("Promise")}} zurück, das nach der Aufforderung des Benutzers durch den User-Agent aufgelöst wird. Der Benutzer wählt ein Display aus und erteilt die Erlaubnis, dieses Display zu verwenden, danach wird ein [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) bereitgestellt.

## Syntax

```js-nolint
start()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) aufgelöst wird.

## Sicherheit

[Eingeforderte Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
