---
title: "CredentialsContainer: preventSilentAccess() Methode"
short-title: preventSilentAccess()
slug: Web/API/CredentialsContainer/preventSilentAccess
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`preventSilentAccess()`** Methode der [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) Schnittstelle setzt ein Flag, das angibt, ob das automatische Einloggen für zukünftige Besuche des aktuellen Ursprungs erlaubt ist, und gibt dann ein {{jsxref("Promise")}} zurück, das zu `undefined` aufgelöst wird. Zum Beispiel könnte man dies aufrufen, nachdem sich ein Benutzer von einer Website abgemeldet hat, um sicherzustellen, dass er beim nächsten Besuch der Seite nicht automatisch eingeloggt wird. Die Vermittlung variiert je nach Herkunft und ist ein zusätzlicher Kontrollpunkt der im Browser gespeicherten Anmeldedaten, der einen Benutzer über den Anmeldestatus eines Kontos informiert. Diese Methode wird typischerweise aufgerufen, nachdem sich ein Benutzer von einer Website abgemeldet hat, um sicherzustellen, dass die Anmeldeinformationen dieses Benutzers beim nächsten Besuch der Seite nicht automatisch verwendet werden.

Beim Einsatz eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) hat diese Methode im Allgemeinen keine Auswirkungen; solche Authentifikatoren erfordern typischerweise eine Benutzerinteraktion. Es _ist jedoch möglich_, dass bestimmte Authentifikatoren ausgeschlossen werden können, die ansonsten stillschweigend operiert hätten.

Frühere Versionen der Spezifikation nannten diese Methode `requireUserMediation()`. Der Abschnitt zur [Browser-Kompatibilität](/de/docs/Web/API/CredentialsContainer#browser_compatibility) enthält unterstützende Details.

## Syntax

```js-nolint
preventSilentAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu `undefined` aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
