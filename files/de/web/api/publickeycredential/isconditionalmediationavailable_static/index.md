---
title: "PublicKeyCredential: isConditionalMediationAvailable() statische Methode"
short-title: isConditionalMediationAvailable()
slug: Web/API/PublicKeyCredential/isConditionalMediationAvailable_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`isConditionalMediationAvailable()`** statische Methode der {{domxref("PublicKeyCredential")}} Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das auf `true` aufgelöst wird, wenn die konditionale Vermittlung verfügbar ist.

Die konditionale Vermittlung, falls verfügbar, führt dazu, dass alle gefundenen Anmeldedaten dem Benutzer in einem nicht-modalen Dialogfenster zusammen mit einer Angabe des Ursprungs präsentiert werden, der die Anmeldedaten anfordert. Dies wird angefordert, indem `mediation: 'conditional'` in Ihrem `get()`-Aufruf enthalten ist. In der Praxis bedeutet dies das automatische Ausfüllen verfügbarer Anmeldedaten; Sie müssen `autocomplete="webauthn"` in Ihre Formularfelder aufnehmen, damit sie die WebAuthn-Anmeldeoptionen anzeigen.

Ein konditionaler `get()`-Aufruf zeigt nicht die Benutzeroberfläche des Browsers an und bleibt ausstehend, bis der Benutzer ein Konto aus den verfügbaren AutoFill-Vorschlägen auswählt, um sich anzumelden:

- Wenn der Benutzer eine Geste außerhalb des Dialogs macht, schließt er sich ohne Auflösung oder Ablehnung des Versprechens und ohne ein für den Benutzer sichtbaren Fehlerzustand zu verursachen.
- Wenn der Benutzer eine Anmeldedaten auswählt, wird diese dem Aufrufer zurückgegeben.

Das Verhindern-Des-Stillen-Zugriff-Flag (siehe {{domxref("CredentialsContainer.preventSilentAccess()")}}) wird unabhängig von seinem tatsächlichen Wert als `true` behandelt: Das konditionale Verhalten beinhaltet immer eine Form der Benutzervermittlung, falls anwendbare Anmeldedaten entdeckt werden.

> [!NOTE]
> Wenn keine Anmeldedaten gefunden werden, ist der nicht-modale Dialog nicht sichtbar, und der Benutzeragent kann den Benutzer auffordern, auf eine Weise zu handeln, die vom Typ der Anmeldedaten abhängt (zum Beispiel, um ein Gerät einzufügen, das Anmeldedaten enthält).

## Syntax

```js-nolint
isConditionalMediationAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf einen Booleschen Wert aufgelöst wird, der angibt, ob die konditionale Vermittlung verfügbar ist oder nicht.

## Beispiele

Bevor Sie einen konditionalen WebAuthn-API-Aufruf tätigen, überprüfen Sie, ob:

- Der Browser die Web Authentication API unterstützt.
- Der Browser die konditionale WebAuthn-Benutzeroberfläche unterstützt.

```js
// Die Verfügbarkeit von `window.PublicKeyCredential` bedeutet, dass WebAuthn nutzbar ist.
if (
  window.PublicKeyCredential &&
  PublicKeyCredential.isConditionalMediationAvailable
) {
  // Überprüfen, ob die konditionale Vermittlung verfügbar ist.
  const isCMA = await PublicKeyCredential.isConditionalMediationAvailable();
  if (isCMA) {
    // WebAuthn-Authentifizierung aufrufen
    const publicKeyCredentialRequestOptions = {
      // Vom Server erzeugte Herausforderung
      challenge: ****,
      // Die gleiche RP-ID wie bei der Registrierung verwendet
      rpId: "example.com",
    };

    const credential = await navigator.credentials.get({
      publicKey: publicKeyCredentialRequestOptions,
      signal: abortController.signal,
      // 'conditional' angeben, um die konditionale Benutzeroberfläche zu aktivieren
      mediation: "conditional",
    });
  }
}
```

> [!NOTE]
> Weitere Informationen zur Verwendung der konditionalen Vermittlung finden Sie unter [Anmeldung mit einem Passkey über AutoFill-Formular](https://web.dev/articles/passkey-form-autofill).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
