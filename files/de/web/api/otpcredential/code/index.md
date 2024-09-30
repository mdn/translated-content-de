---
title: "OTPCredential: code-Eigenschaft"
short-title: code
slug: Web/API/OTPCredential/code
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{SecureContext_Header}}{{APIRef("WebOTP API")}}{{SeeCompatTable}}

Die **`code`**-Eigenschaft der [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Schnittstelle ist eine schreibgeschützte Eigenschaft und enthält das Einmalpasswort (OTP).

## Wert

Ein String, der das OTP enthält.

## Beispiele

Der untenstehende Code löst den Berechtigungsdialog des Browsers aus, wenn eine SMS-Nachricht empfangen wird. Wird die Berechtigung gewährt, löst das Versprechen mit einem `OTPCredential`-Objekt auf. Der enthaltene `code`-Wert wird als Wert eines {{htmlelement("input")}}-Formularelements gesetzt, das anschließend übermittelt wird.

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
> Für eine vollständige Erklärung des Codes siehe die [WebOTP API](/de/docs/Web/API/WebOTP_API)-Startseite. Sie können [diesen Code auch als Teil einer vollständigen Demo ansehen](https://web-otp.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
