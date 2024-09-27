---
title: "PublicKeyCredential: isConditionalMediationAvailable() statische Methode"
short-title: isConditionalMediationAvailable()
slug: Web/API/PublicKeyCredential/isConditionalMediationAvailable_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`isConditionalMediationAvailable()`** statische Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Interfaces gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird, wenn die bedingte Vermittlung verfügbar ist.

Bedingte Vermittlung bewirkt, dass entdeckte Anmeldeinformationen dem Benutzer in einem nicht-modalen Dialog mit einem Hinweis auf den Ursprung, der die Anmeldeinformationen anfordert, angezeigt werden, falls verfügbar. Dies wird durch Einschließen von `mediation: 'conditional'` in Ihrem `get()` Aufruf angefordert. In der Praxis bedeutet dies das automatische Ausfüllen verfügbarer Anmeldeinformationen; Sie müssen `autocomplete="webauthn"` in Ihre Formularelemente aufnehmen, damit diese die WebAuthn-Anmeldeoptionen anzeigen.

Ein bedingter `get()` Aufruf zeigt die Browser-Benutzeroberfläche nicht an und bleibt ausstehend, bis der Benutzer ein Konto aus den verfügbaren automatischen Ausfüllvorschlägen auswählt, um sich anzumelden:

- Wenn der Benutzer eine Geste außerhalb des Dialogs macht, schließt dieser sich, ohne das Promise aufzulösen oder abzulehnen, und ohne einen für den Benutzer sichtbaren Fehlerzustand zu verursachen.
- Wenn der Benutzer ein Anmeldeinformation auswählt, wird diese an den Aufrufer zurückgegeben.

Das Flag Silent Access verhindern (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) wird als `true` behandelt, unabhängig von seinem tatsächlichen Wert: das bedingte Verhalten umfasst immer eine Benutzervermittlung, wenn anwendbare Anmeldeinformationen entdeckt werden.

> [!NOTE]
> Wenn keine Anmeldeinformationen entdeckt werden, wird der nicht-modale Dialog nicht sichtbar sein, und der Benutzeragent kann den Benutzer auf eine Weise auffordern, die vom Anmeldetyp abhängt (zum Beispiel, um ein Gerät mit Anmeldeinformationen einzufügen).

## Syntax

```js-nolint
isConditionalMediationAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem booleschen Wert auflöst, der angibt, ob die bedingte Vermittlung verfügbar ist oder nicht.

## Beispiele

Bevor Sie einen bedingten WebAuthn API-Aufruf vornehmen, prüfen Sie, ob:

- Der Browser die Web Authentication API unterstützt.
- Der Browser die WebAuthn bedingte Benutzeroberfläche unterstützt.

```js
// Availability of `window.PublicKeyCredential` means WebAuthn is usable.
if (
  window.PublicKeyCredential &&
  PublicKeyCredential.isConditionalMediationAvailable
) {
  // Check if conditional mediation is available.
  const isCMA = await PublicKeyCredential.isConditionalMediationAvailable();
  if (isCMA) {
    // Call WebAuthn authentication
    const publicKeyCredentialRequestOptions = {
      // Server generated challenge
      challenge: ****,
      // The same RP ID as used during registration
      rpId: "example.com",
    };

    const credential = await navigator.credentials.get({
      publicKey: publicKeyCredentialRequestOptions,
      signal: abortController.signal,
      // Specify 'conditional' to activate conditional UI
      mediation: "conditional",
    });
  }
}
```

> [!NOTE]
> Siehe [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) für weitere Informationen über die Verwendung der bedingten Vermittlung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
