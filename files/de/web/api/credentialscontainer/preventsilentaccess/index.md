---
title: "CredentialsContainer: preventSilentAccess() Methode"
short-title: preventSilentAccess()
slug: Web/API/CredentialsContainer/preventSilentAccess
l10n:
  sourceCommit: c91c87d7da181194f3786abfcb2f27d2b885fb91
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`preventSilentAccess()`** Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) Interface setzt ein Flag, das festlegt, ob ein automatisches Einloggen bei zukünftigen Besuchen des aktuellen Ursprungs erlaubt ist, und gibt dann ein {{jsxref("Promise")}} zurück, das sich auf `undefined` auflöst. Zum Beispiel könnten Sie dies aufrufen, nachdem ein Benutzer sich von einer Website abgemeldet hat, um sicherzustellen, dass er beim nächsten Besuch der Website nicht automatisch angemeldet wird. Die Vermittlung variiert je nach Ursprung und ist ein zusätzlicher Kontrollpunkt für im Browser gespeicherte Anmeldedaten, der einen Benutzer über den Anmeldestatus eines Kontos informiert. Diese Methode wird typischerweise aufgerufen, nachdem sich ein Benutzer von einer Website abgemeldet hat, um sicherzustellen, dass die Anmeldeinformationen dieses Benutzers beim nächsten Besuch der Website nicht automatisch weitergegeben werden.

Frühere Versionen der Spezifikation nannten diese Methode `requireUserMediation()`. Der Abschnitt [Browser-Kompatibilität](/de/docs/Web/API/CredentialsContainer#browser_compatibility) enthält Unterstützungsdetails.

## Syntax

```js-nolint
preventSilentAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf `undefined` auflöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
