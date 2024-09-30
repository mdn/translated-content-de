---
title: OTPCredential
slug: Web/API/OTPCredential
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("WebOTP API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`OTPCredential`**-Schnittstelle der [WebOTP API](/de/docs/Web/API/WebOTP_API) wird zurückgegeben, wenn ein WebOTP-Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) (das heißt mit einer `otp`-Option) erfolgreich ist. Sie enthält eine `code`-Eigenschaft, die das abgerufene Einmalpasswort (OTP) beinhaltet.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`Credential`](/de/docs/Web/API/Credential)._

- [`OTPCredential.code`](/de/docs/Web/API/OTPCredential/code) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Einmalpasswort (OTP).

## Instanz-Methoden

Keine.

## Beispiele

Der folgende Code löst den Berechtigungsablauf des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wird die Berechtigung erteilt, wird das Promise mit einem `OTPCredential`-Objekt erfüllt. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formular-Elements gesetzt, das anschließend übermittelt wird.

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
> Für eine vollständige Erklärung des Codes sehen Sie sich die [WebOTP API](/de/docs/Web/API/WebOTP_API)-Hauptseite an. Sie können sich diesen Code auch als Teil einer [voll funktionsfähigen Demo ansehen](https://web-otp.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
