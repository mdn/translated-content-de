---
title: OTPCredential
slug: Web/API/OTPCredential
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("WebOTP API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`OTPCredential`**-Interface der [WebOTP API](/de/docs/Web/API/WebOTP_API) wird zurückgegeben, wenn ein `navigator.credentials.get()`-Aufruf (d. h. mit einer `otp`-Option) der WebOTP API erfüllt wird. Es enthält eine `code`-Eigenschaft, die das erhaltene Einmalpasswort (OTP) enthält.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`Credential`](/de/docs/Web/API/Credential)._

- [`OTPCredential.code`](/de/docs/Web/API/OTPCredential/code) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Einmalpasswort (OTP).

## Instanz-Methoden

Keine.

## Beispiele

Der untenstehende Code löst den Berechtigungsfluss des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wenn die Berechtigung erteilt wird, wird das Versprechen mit einem `OTPCredential`-Objekt aufgelöst. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}} Formular-Elements gesetzt, welches anschließend übermittelt wird.

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
> Für eine vollständige Erklärung des Codes siehe die [WebOTP API](/de/docs/Web/API/WebOTP_API) Hauptseite. Sie können diesen Code auch [als Teil einer vollständigen funktionierenden Demo ansehen](https://web-otp.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
