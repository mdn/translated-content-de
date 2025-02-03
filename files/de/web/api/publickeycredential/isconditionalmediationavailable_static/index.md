---
title: "PublicKeyCredential: isConditionalMediationAvailable() statische Methode"
short-title: isConditionalMediationAvailable()
slug: Web/API/PublicKeyCredential/isConditionalMediationAvailable_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`isConditionalMediationAvailable()`** des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das sich auf `true` auflöst, wenn die bedingte Mediation verfügbar ist.

Die bedingte Mediation führt, sofern verfügbar, dazu, dass dem Benutzer alle entdeckten Anmeldeinformationen in einem nicht-modalen Dialogfeld zusammen mit einem Hinweis auf den Ursprung, der die Anmeldeinformationen anfordert, präsentiert werden. Dies wird angefordert, indem `mediation: 'conditional'` in Ihrem `get()`-Aufruf enthalten ist. In der Praxis bedeutet dies das automatische Ausfüllen verfügbarer Anmeldeinformationen; Sie müssen `autocomplete="webauthn"` in Ihren Formularfeldern angeben, damit diese die WebAuthn-Anmeldeoptionen anzeigen.

Ein bedingter `get()`-Aufruf zeigt keine Browser-Benutzeroberfläche und bleibt ausstehend, bis der Benutzer ein Konto aus verfügbaren Autofill-Vorschlägen zum Anmelden auswählt:

- Wenn der Benutzer eine Geste außerhalb des Dialogs macht, wird dieser geschlossen, ohne das Promise aufzulösen oder abzulehnen und ohne eine für den Benutzer sichtbare Fehlerbedingung zu verursachen.
- Wenn der Benutzer eine Anmeldeinformation auswählt, wird diese dem Aufrufer zurückgegeben.

Das Flag zum Verhindern eines stillen Zugriffs (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) wird als `true` behandelt, unabhängig von seinem tatsächlichen Wert: Das bedingte Verhalten beinhaltet immer eine Art von Benutzermediation, falls anwendbare Anmeldeinformationen entdeckt werden.

> [!NOTE]
> Wenn keine Anmeldeinformationen entdeckt werden, wird der nicht-modale Dialog nicht sichtbar sein, und der Benutzeragent kann den Benutzer auffordern, eine Aktion durchzuführen, die von der Art der Anmeldeinformationen abhängt (zum Beispiel ein Gerät mit Anmeldeinformationen einzustecken).

## Syntax

```js-nolint
PublicKeyCredential.isConditionalMediationAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf einen booleschen Wert auflöst, der angibt, ob die bedingte Mediation verfügbar ist oder nicht.

## Beispiele

Bevor Sie einen bedingten WebAuthn-API-Aufruf initiieren, überprüfen Sie, ob:

- Der Browser die Web Authentication API unterstützt.
- Der Browser die WebAuthn-bediengungsabhängige Benutzeroberfläche unterstützt.

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
> Weitere Informationen zur Verwendung der bedingten Mediation finden Sie unter [Anmelden mit einem Passkey über das automatische Ausfüllen von Formularen](https://web.dev/articles/passkey-form-autofill).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
