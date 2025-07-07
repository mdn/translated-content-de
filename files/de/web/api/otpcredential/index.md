---
title: OTPCredential
slug: Web/API/OTPCredential
l10n:
  sourceCommit: 90eafc463fe122c86a64836f4f3953a0bee85be9
---

{{APIRef("WebOTP API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`OTPCredential`** Interface der [WebOTP API](/de/docs/Web/API/WebOTP_API) wird zurückgegeben, wenn ein WebOTP [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf (d.h. mit einer `otp` Option) erfolgreich ist. Es enthält eine `code` Eigenschaft, die das erhaltene Einmalpasswort (OTP) beinhaltet.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`Credential`](/de/docs/Web/API/Credential)._

- [`OTPCredential.code`](/de/docs/Web/API/OTPCredential/code) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Einmalpasswort (OTP).

## Instanz-Methoden

Keine.

## Beispiele

Der untenstehende Code löst den Berechtigungsablauf des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wird die Berechtigung erteilt, wird das Versprechen mit einem `OTPCredential` Objekt eingelöst. Der darin enthaltene `code` Wert wird dann als Wert eines {{htmlelement("input")}} Formularelements gesetzt, welches anschließend abgeschickt wird.

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
> Für eine vollständige Erklärung des Codes siehe die [WebOTP API](/de/docs/Web/API/WebOTP_API) Startseite. Sie können diesen Code auch [als Teil einer vollständigen funktionierenden Demo sehen](https://chrome.dev/web-otp-demo/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
