---
title: "PublicKeyCredential: isUserVerifyingPlatformAuthenticatorAvailable() statische Methode"
short-title: isUserVerifyingPlatformAuthenticatorAvailable()
slug: Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable_static
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`isUserVerifyingPlatformAuthenticatorAvailable()`** statische Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Interfaces gibt ein {{jsxref("Promise")}} zurück, das sich zu `true` auflöst, wenn ein benutzerverifizierender Plattform-Authenticator vorhanden ist.

Ein benutzerverifizierender Plattform-Authenticator ist eine Art von Multi-Faktor-Authenticator, der Teil des Clientgeräts ist (in der Regel nicht entfernbar) und eine Aktion des Benutzers erfordert, um ihn zu identifizieren. Häufige benutzerverifizierende Plattform-Authenticatoren sind:

- Touch ID oder Face ID (macOS und iOS)
- Windows Hello (Windows)
- Gerätesperre (Fingerabdruck, Gesicht, PIN, usw.) auf Android

> [!NOTE]
> Diese Methode kann nur in Top-Level-Kontexten verwendet werden und wird beispielsweise in einem {{HTMLElement("iframe")}} nicht verfügbar sein.

## Syntax

```js-nolint
PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem booleschen Wert auflöst und anzeigt, ob ein benutzerverifizierender Plattform-Authenticator verfügbar ist oder nicht.

> [!NOTE]
> In früheren Versionen der Spezifikation übermittelte der boolesche Wert auch die Zustimmung des Benutzers, dass ein solcher Authenticator existierte.

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
- [Web Authentication und Windows Hello - MSDN Leitfaden](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/) und insbesondere die [besonderen Überlegungen, die `isUserVerifyingPlatformAuthenticator()` erwähnen](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/#special-considerations-for-windows-hello)
