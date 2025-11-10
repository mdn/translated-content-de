---
title: "PublicKeyCredential: isUserVerifyingPlatformAuthenticatorAvailable() statische Methode"
short-title: isUserVerifyingPlatformAuthenticatorAvailable()
slug: Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable_static
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`isUserVerifyingPlatformAuthenticatorAvailable()`** statische Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das auf `true` aufgelöst wird, wenn ein benutzerverifizierbarer Plattform-Authenticator vorhanden ist.

Ein benutzerverifizierbarer Plattform-Authenticator ist eine Art von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authenticator")}}, der Teil des Client-Geräts ist (er ist in der Regel nicht entfernbar) und eine Handlung des Benutzers erfordert, um ihn zu identifizieren. Gängige benutzerverifizierbare Plattform-Authentikatoren sind:

- Touch ID oder Face ID (macOS und iOS)
- Windows Hello (Windows)
- Geräteentsperrung (Fingerabdruck, Gesicht, PIN usw.) auf Android

> [!NOTE]
> Diese Methode kann nur in Top-Level-Kontexten verwendet werden und ist beispielsweise nicht in einem {{HTMLElement("iframe")}} verfügbar.

## Syntax

```js-nolint
PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf einen booleschen Wert aufgelöst wird, der anzeigt, ob ein benutzerverifizierbarer Plattform-Authenticator verfügbar ist oder nicht.

> [!NOTE]
> In früheren Versionen der Spezifikation vermittelte der boolesche Wert auch das Einverständnis des Benutzers, dass ein solcher Authenticator existiert.

### Ausnahmen

Das zurückgegebene {{jsxref("Promise")}} kann mit den folgenden Werten abgelehnt werden:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist ungültig.

## Beispiele

```js
PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
  .then((available) => {
    if (available) {
      // We can proceed with the creation of a PublicKeyCredential
      // with this authenticator
    } else {
      // Use another kind of authenticator or a classical login/password
      // workflow
    }
  })
  .catch((err) => {
    // Something went wrong
    console.error(err);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Windows Hello](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello)
- [Web-Authentifizierung und Windows Hello - MSDN-Leitfaden](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/) und insbesondere die [Besonderen Überlegungen zur Erwähnung von `isUserVerifyingPlatformAuthenticator()`](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/#special-considerations-for-windows-hello)
