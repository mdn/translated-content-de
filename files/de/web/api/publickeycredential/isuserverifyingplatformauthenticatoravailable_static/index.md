---
title: "PublicKeyCredential: isUserVerifyingPlatformAuthenticatorAvailable() statische Methode"
short-title: isUserVerifyingPlatformAuthenticatorAvailable()
slug: Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable_static
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`isUserVerifyingPlatformAuthenticatorAvailable()`** der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird, wenn ein Nutzer-verifizierender Plattform-Authenticator vorhanden ist.

Ein Nutzer-verifizierender Plattform-Authenticator ist eine Art Multi-Faktor-Authenticator, der Teil des Client-Geräts ist (in der Regel nicht abnehmbar) und eine Aktion des Nutzers erfordert, um ihn zu identifizieren. Häufige Nutzer-verifizierende Plattform-Authentifikatoren sind:

- Touch ID oder Face ID (macOS und iOS)
- Windows Hello (Windows)
- Gerätesperre (Fingerabdruck, Gesichtserkennung, PIN usw.) auf Android

> [!NOTE]
> Diese Methode kann nur in obersten Kontexten verwendet werden und wird beispielsweise in einem {{HTMLElement("iframe")}} nicht verfügbar sein.

## Syntax

```js-nolint
PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem booleschen Wert aufgelöst wird, der angibt, ob ein Nutzer-verifizierender Plattform-Authenticator verfügbar ist oder nicht.

> [!NOTE]
> In früheren Versionen der Spezifikation drückte der boolesche Wert auch die Zustimmung des Nutzers aus, einen solchen Authenticator offenzulegen.

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
- [Web-Authentifizierung und Windows Hello – MSDN Leitfaden](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/) und insbesondere die [besonderen Überlegungen, die `isUserVerifyingPlatformAuthenticator()` erwähnen](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/#special-considerations-for-windows-hello)
