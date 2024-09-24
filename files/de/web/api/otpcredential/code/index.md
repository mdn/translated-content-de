---
title: "OTPCredential: Eigenschaft code"
short-title: code
slug: Web/API/OTPCredential/code
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{SecureContext_Header}}{{APIRef("WebOTP API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`code`** der {{domxref("OTPCredential")}}-Schnittstelle enthält das Einmalpasswort (OTP).

## Wert

Ein String, der das OTP enthält.

## Beispiele

Der untenstehende Code löst den Berechtigungsprozess des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wenn die Erlaubnis erteilt wird, wird das Promise mit einem `OTPCredential`-Objekt aufgelöst. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formularelements gesetzt, das anschließend übermittelt wird.

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
> Eine vollständige Erklärung des Codes finden Sie auf der {{domxref('WebOTP API','','',' ')}}-Startseite. Sie können sich [diesen Code auch als Teil eines vollständigen funktionierenden Demos ansehen](https://web-otp.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
