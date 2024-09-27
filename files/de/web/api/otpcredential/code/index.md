---
title: "OTPCredential: code-Eigenschaft"
short-title: code
slug: Web/API/OTPCredential/code
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{SecureContext_Header}}{{APIRef("WebOTP API")}}{{SeeCompatTable}}

Die schreibgeschützte **`code`**-Eigenschaft der [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Schnittstelle enthält das Einmalpasswort (OTP).

## Wert

Ein String, der das OTP enthält.

## Beispiele

Der untenstehende Code löst den Berechtigungsablauf des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wenn die Berechtigung erteilt wird, wird das Promise mit einem `OTPCredential`-Objekt aufgelöst. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formular-Elementes gesetzt, das anschließend übermittelt wird.

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
> Eine vollständige Erklärung des Codes finden Sie auf der [WebOTP API](/de/docs/Web/API/WebOTP_API)-Landingpage. Sie können sich diesen Code auch als Teil einer funktionierenden Demo [ansehen](https://web-otp.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
