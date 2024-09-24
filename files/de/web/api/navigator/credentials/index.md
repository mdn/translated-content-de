---
title: "Navigator: credentials Eigenschaft"
short-title: credentials
slug: Web/API/Navigator/credentials
l10n:
  sourceCommit: 61e0e2ba096262b69b86b36bbadb5fcbfd546b1e
---

{{securecontext_header}}{{APIRef("Credential Management API")}}

Die schreibgeschützte Eigenschaft **`credentials`** des {{domxref("Navigator")}}-Interfaces gibt das mit dem aktuellen Dokument assoziierte {{domxref("CredentialsContainer")}}-Objekt zurück, das Methoden bereitstellt, um Anmeldedaten anzufordern. Das {{domxref("CredentialsContainer")}}-Interface benachrichtigt auch den User-Agent, wenn ein interessantes Ereignis eintritt, wie zum Beispiel eine erfolgreiche Anmeldung oder Abmeldung. Dieses Interface kann zur Feature-Erkennung verwendet werden.

## Wert

Ein {{domxref("CredentialsContainer")}}-Objekt.

## Beispiele

```js
if ("credentials" in navigator) {
  navigator.credentials.get({ password: true }).then((creds) => {
    //Do something with the credentials.
  });
} else {
  //Handle sign-in the way you did before.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
