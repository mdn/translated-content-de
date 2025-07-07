---
title: "OTPCredential: code-Eigenschaft"
short-title: code
slug: Web/API/OTPCredential/code
l10n:
  sourceCommit: 90eafc463fe122c86a64836f4f3953a0bee85be9
---

{{SecureContext_Header}}{{APIRef("WebOTP API")}}{{SeeCompatTable}}

Die schreibgeschützte **`code`**-Eigenschaft der [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Schnittstelle enthält das Einmal-Passwort (OTP).

## Wert

Ein String, der das OTP enthält.

## Beispiele

Der untenstehende Code löst den Berechtigungsfluss des Browsers aus, wenn eine SMS-Nachricht eingeht. Wenn die Erlaubnis erteilt wird, wird das Promise mit einem `OTPCredential`-Objekt aufgelöst. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formular-Elements gesetzt, welches anschließend übermittelt wird.

```js
navigator.credentials
  .get({
    otp: { transport: ["sms"] },
    signal: ac.signal,
  })
  .then((otp) => {
    input.value = otp.code;
    if (form) form.submit();
  })
  .catch((err) => {
    console.error(err);
  });
```

> [!NOTE]
> Für eine vollständige Erklärung des Codes siehe die [WebOTP API](/de/docs/Web/API/WebOTP_API)-Startseite. Sie können diesen [Code auch als Teil eines vollständig funktionierenden Demos sehen](https://chrome.dev/web-otp-demo/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
