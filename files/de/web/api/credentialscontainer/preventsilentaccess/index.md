---
title: "CredentialsContainer: preventSilentAccess()-Methode"
short-title: preventSilentAccess()
slug: Web/API/CredentialsContainer/preventSilentAccess
l10n:
  sourceCommit: 20401cd5e25e0308ac82bf25c7e372a1dcb9df5b
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`preventSilentAccess()`**-Methode der [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle setzt ein Flag, das bestimmt, ob automatisches Einloggen bei zukünftigen Besuchen der aktuellen Origin erlaubt ist, und gibt dann ein {{jsxref("Promise")}} zurück, das sich zu `undefined` auflöst. Zum Beispiel könnten Sie dies aufrufen, nachdem sich ein Benutzer von einer Website abgemeldet hat, um sicherzustellen, dass er beim nächsten Besuch der Seite nicht automatisch angemeldet wird. Die Mediation variiert je nach Origin und ist ein zusätzlicher Kontrollpunkt der im Browser gespeicherten Anmeldedaten, der einen Benutzer über den Anmeldestatus eines Kontos informiert. Diese Methode wird typischerweise nach dem Abmelden eines Benutzers von einer Website aufgerufen, um sicherzustellen, dass die Anmeldeinformationen dieses Benutzers beim nächsten Besuch der Seite nicht automatisch übermittelt werden.

Diese Methode [hat im Allgemeinen keine Wirkung](https://www.w3.org/TR/webauthn-2/#sctn-preventSilentAccessCredential), wenn ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) verwendet wird; solche Authentifikatoren erfordern typischerweise eine Benutzerinteraktion. Es _ist jedoch möglich_, dass bestimmte Authentifikatoren ausgeschlossen sind, die andernfalls im Stillen operieren könnten.

Frühere Versionen der Spezifikation nannten diese Methode `requireUserMediation()`. Der Abschnitt zur [Browser-Kompatibilität](/de/docs/Web/API/CredentialsContainer#browser_compatibility) enthält Unterstützungsdetails.

## Syntax

```js-nolint
preventSilentAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu `undefined` auflöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
