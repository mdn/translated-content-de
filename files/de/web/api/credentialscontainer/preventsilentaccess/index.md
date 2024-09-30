---
title: "CredentialsContainer: Methode preventSilentAccess()"
short-title: preventSilentAccess()
slug: Web/API/CredentialsContainer/preventSilentAccess
l10n:
  sourceCommit: c91c87d7da181194f3786abfcb2f27d2b885fb91
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die Methode **`preventSilentAccess()`** des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Interfaces setzt eine Markierung, die angibt, ob automatisches Anmelden bei zukünftigen Besuchen der aktuellen Herkunft erlaubt ist, und gibt dann ein {{jsxref("Promise")}} zurück, das auf `undefined` aufgelöst wird.
Zum Beispiel könnten Sie dies aufrufen, nachdem sich ein Benutzer von einer Website abmeldet, um sicherzustellen, dass er beim nächsten Besuch der Website nicht automatisch angemeldet wird.
Mediation variiert je nach Herkunft und ist ein zusätzlicher Kontrollpunkt für im Browser gespeicherte Anmeldedaten, der einen Benutzer über den Anmeldestatus eines Kontos informiert. Diese Methode wird typischerweise aufgerufen, nachdem sich ein Benutzer von einer Website abgemeldet hat, um sicherzustellen, dass die Anmeldeinformationen dieses Benutzers beim nächsten Besuch der Website nicht automatisch übermittelt werden.

Frühere Versionen der Spezifikation nannten diese Methode `requireUserMediation()`.
Der Abschnitt zur [Browser-Kompatibilität](/de/docs/Web/API/CredentialsContainer#browser_compatibility) enthält unterstützte Details.

## Syntax

```js-nolint
preventSilentAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf `undefined` aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
