---
title: OTPCredential
slug: Web/API/OTPCredential
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("WebOTP API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`OTPCredential`** Schnittstelle der {{domxref('WebOTP API','','',' ')}} wird zurückgegeben, wenn ein WebOTP {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} Aufruf (d.h. mit einer `otp` Option) erfolgreich ist. Sie enthält eine `code` Eigenschaft, die das abgerufene Einmalpasswort (OTP) enthält.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von {{domxref("Credential")}}._

- {{domxref("OTPCredential.code")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Einmalpasswort (OTP).

## Instanzmethoden

Keine.

## Beispiele

Der untenstehende Code löst den Berechtigungsablauf des Browsers aus, wenn eine SMS-Nachricht eingeht. Wird die Berechtigung erteilt, wird das Promise mit einem `OTPCredential` Objekt erfüllt. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}} Formularelements gesetzt, das anschließend übermittelt wird.

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
> Für eine vollständige Erklärung des Codes siehe die {{domxref('WebOTP API','','',' ')}} Startseite. Sie können diesen Code auch [als Teil eines vollständig funktionierenden Demos sehen](https://web-otp.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
