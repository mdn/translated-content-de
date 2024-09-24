---
title: "PublicKeyCredential: isUserVerifyingPlatformAuthenticatorAvailable() statische Methode"
short-title: isUserVerifyingPlatformAuthenticatorAvailable()
slug: Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable_static
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`isUserVerifyingPlatformAuthenticatorAvailable()`** statische Methode des {{domxref("PublicKeyCredential")}} Interfaces gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird, wenn ein benutzerverifizierender Plattform-Authenticator vorhanden ist.

Ein benutzerverifizierender Plattform-Authenticator ist eine Art von Mehrfaktor-Authenticator, der Teil des Clientgeräts ist (in der Regel nicht entfernbar) und der eine Handlung des Benutzers erfordert, um ihn zu identifizieren. Zu den üblichen benutzerverifizierenden Plattform-Authenticators gehören:

- Touch ID oder Face ID (macOS und iOS)
- Windows Hello (Windows)
- Geräteentsperrung (Fingerabdruck, Gesicht, PIN, etc.) auf Android

> [!NOTE]
> Diese Methode kann nur in Top-Level-Kontexten verwendet werden und steht beispielsweise nicht in einem {{HTMLElement("iframe")}} zur Verfügung.

## Syntax

```js-nolint
PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in einen boolean Wert aufgelöst wird, der angibt, ob ein benutzerverifizierender Plattform-Authenticator verfügbar ist.

> [!NOTE]
> In früheren Versionen der Spezifikation gab der boolean auch die Zustimmung des Benutzers zur Offenlegung des Existierens eines solchen Authenticators wieder.

## Beispiele

```js
PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
  .then((available) => {
    if (available) {
      // Wir können mit der Erstellung eines PublicKeyCredential
      // mit diesem Authenticator fortfahren
    } else {
      // Einen anderen Authenticator oder einen klassischen
      // Login-/Passwort-Workflow verwenden
    }
  })
  .catch((err) => {
    // Etwas ist schiefgelaufen
    console.error(err);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Windows Hello](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello)
- [Web Authentication und Windows Hello - MSDN Guide](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/) und besonders die [besonderen Überlegungen, die `isUserVerifyingPlatformAuthenticator()` erwähnen](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/#special-considerations-for-windows-hello)
