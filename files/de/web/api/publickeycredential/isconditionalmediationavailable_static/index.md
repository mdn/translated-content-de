---
title: "PublicKeyCredential: isConditionalMediationAvailable() statische Methode"
short-title: isConditionalMediationAvailable()
slug: Web/API/PublicKeyCredential/isConditionalMediationAvailable_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`isConditionalMediationAvailable()`** statische Methode der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das auf `true` aufgelöst wird, wenn bedingte Vermittlung verfügbar ist.

Wenn die bedingte Vermittlung verfügbar ist, werden alle entdeckten Anmeldedaten dem Benutzer in einem nicht-modalen Dialogfeld zusammen mit einem Hinweis auf den Ursprung, der die Anmeldedaten anfordert, präsentiert. Dies wird angefordert, indem `mediation: 'conditional'` in Ihrem `get()`-Aufruf enthalten ist. In der Praxis bedeutet dies das automatische Ausfüllen verfügbarer Anmeldedaten; Sie müssen `autocomplete="webauthn"` in Ihren Formularfeldern einschließen, damit die WebAuthn-Anmeldeoptionen angezeigt werden.

Ein bedingter `get()`-Aufruf zeigt nicht die Browser-Benutzeroberfläche und bleibt ausstehend, bis der Benutzer ein Konto aus den verfügbaren automatischen Ausfüllvorschlägen auswählt, um sich anzumelden:

- Wenn der Benutzer eine Aktion außerhalb des Dialogs durchführt, schließt sich dieser, ohne das Promise aufzulösen oder abzulehnen, und ohne eine für den Benutzer sichtbare Fehlersituation zu verursachen.
- Wenn der Benutzer ein Anmeldedatum auswählt, wird dieses dem Aufrufer zurückgegeben.

Das Flag zur Verhinderung des stillen Zugriffs (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) wird unabhängig von seinem tatsächlichen Wert als `true` behandelt: Das bedingte Verhalten beinhaltet immer eine Benutzervermittlung irgendeiner Art, wenn anwendbare Anmeldedaten entdeckt werden.

> [!NOTE]
> Wenn keine Anmeldedaten entdeckt werden, ist der nicht-modale Dialog nicht sichtbar, und der Benutzeragent kann den Benutzer auffordern, Maßnahmen zu ergreifen, die von der Art der Anmeldedaten abhängt (zum Beispiel ein Gerät einzustecken, das Anmeldedaten enthält).

## Syntax

```js-nolint
isConditionalMediationAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf einen booleschen Wert auflöst, der anzeigt, ob die bedingte Vermittlung verfügbar ist oder nicht.

## Beispiele

Bevor Sie einen bedingten WebAuthn-API-Aufruf durchführen, überprüfen Sie, ob:

- Der Browser die Web Authentication API unterstützt.
- Der Browser die bedingte WebAuthn-Benutzeroberfläche unterstützt.

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
> Weitere Informationen zur Verwendung der bedingten Vermittlung finden Sie unter [Mit einem Passkey über das automatische Ausfüllen von Formularen anmelden](https://web.dev/articles/passkey-form-autofill).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
