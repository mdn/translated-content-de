---
title: "PublicKeyCredential: isUserVerifyingPlatformAuthenticatorAvailable() statische Methode"
short-title: isUserVerifyingPlatformAuthenticatorAvailable()
slug: Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable_static
l10n:
  sourceCommit: dd49e9f6381aa1a35e9d582808f2fd1d4abfa813
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`isUserVerifyingPlatformAuthenticatorAvailable()`** statische Methode der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird, wenn ein benutzerverifizierender Plattform-Authenticator vorhanden ist.

Ein benutzerverifizierender Plattform-Authenticator ist eine Art von Multi-Faktor-Authenticator, der Teil des Client-Geräts ist (er ist in der Regel nicht entfernbar) und bei dem eine Aktion des Benutzers erforderlich ist, um ihn zu identifizieren. Zu den üblichen benutzerverifizierenden Plattform-Authenticatoren gehören:

- Touch ID oder Face ID (macOS und iOS)
- Windows Hello (Windows)
- Gerätesperre (Fingerabdruck, Gesicht, PIN, etc.) auf Android

> [!NOTE]
> Diese Methode kann nur in Top-Level-Kontexten verwendet werden und steht beispielsweise in einem {{HTMLElement("iframe")}} nicht zur Verfügung.

## Syntax

```js-nolint
PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem booleschen Wert aufgelöst wird, der angibt, ob ein benutzerverifizierender Plattform-Authenticator verfügbar ist oder nicht.

> [!NOTE]
> In früheren Versionen der Spezifikation wurde mit dem booleschen Wert auch die Zustimmung des Benutzers zur Offenlegung eines solchen Authenticators vermittelt.

### Ausnahmen

Das zurückgegebene {{jsxref("Promise")}} kann mit den folgenden Werten abgelehnt werden:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.

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
- [Web Authentication und Windows Hello - MSDN-Leitfaden](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/) und insbesondere die [besonderen Überlegungen, die `isUserVerifyingPlatformAuthenticator()` erwähnen](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/#special-considerations-for-windows-hello)
