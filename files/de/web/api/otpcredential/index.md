---
title: OTPCredential
slug: Web/API/OTPCredential
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebOTP API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`OTPCredential`**-Interface der [WebOTP API](/de/docs/Web/API/WebOTP_API) wird zurückgegeben, wenn ein Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `otp`-Option erfüllt wird. Es enthält eine `code`-Eigenschaft, die das abgerufene Einmalkennwort (OTP) enthält.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`Credential`](/de/docs/Web/API/Credential)._

- [`OTPCredential.code`](/de/docs/Web/API/OTPCredential/code) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Einmalkennwort (OTP).

## Instanz-Methoden

Keine.

## Beispiele

Der untenstehende Code löst den Berechtigungsablauf des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wenn die Erlaubnis erteilt wird, wird das Versprechen mit einem `OTPCredential`-Objekt erfüllt. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formular-Elements gesetzt, das anschließend übermittelt wird.

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
> Für eine vollständige Erläuterung des Codes, siehe die Startseite der [WebOTP API](/de/docs/Web/API/WebOTP_API). Sie können diesen Code auch [als Teil eines vollständigen funktionsfähigen Demos ansehen](https://web-otp.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
