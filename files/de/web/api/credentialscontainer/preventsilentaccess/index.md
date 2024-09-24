---
title: "CredentialsContainer: preventSilentAccess()-Methode"
short-title: preventSilentAccess()
slug: Web/API/CredentialsContainer/preventSilentAccess
l10n:
  sourceCommit: c91c87d7da181194f3786abfcb2f27d2b885fb91
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`preventSilentAccess()`**-Methode des {{domxref("CredentialsContainer")}}-Interfaces setzt ein Flag, das angibt, ob ein automatisches Einloggen für zukünftige Besuche des aktuellen Ursprungs erlaubt ist, und gibt dann ein {{jsxref("Promise")}} zurück, das mit `undefined` aufgelöst wird. Zum Beispiel könnten Sie dies verwenden, nachdem sich ein Benutzer von einer Website abgemeldet hat, um sicherzustellen, dass er beim nächsten Besuch der Seite nicht automatisch angemeldet wird. Die Vermittlung variiert je nach Ursprung und stellt einen zusätzlichen Kontrollpunkt für im Browser gespeicherte Anmeldedaten dar, indem sie den Benutzer über den Anmeldestatus eines Kontos informiert. Diese Methode wird typischerweise aufgerufen, nachdem sich ein Benutzer von einer Website abgemeldet hat, um sicherzustellen, dass die Anmeldedaten dieses Benutzers beim nächsten Besuch der Seite nicht automatisch weitergegeben werden.

Frühere Versionen der Spezifikation nannten diese Methode `requireUserMediation()`. Der Abschnitt [Browserkompatibilität](/de/docs/Web/API/CredentialsContainer#browser_compatibility) enthält Details zur Unterstützung.

## Syntax

```js-nolint
preventSilentAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
