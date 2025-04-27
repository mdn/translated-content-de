---
title: "Navigator: credentials-Eigenschaft"
short-title: credentials
slug: Web/API/Navigator/credentials
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{securecontext_header}}{{APIRef("Credential Management API")}}

Die schreibgeschützte **`credentials`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt das [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Objekt zurück, das mit dem aktuellen Dokument verknüpft ist und Methoden bereitstellt, um Anmeldeinformationen anzufordern. Das [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Interface benachrichtigt den Benutzeragenten auch, wenn ein interessantes Ereignis eintritt, wie z.B. ein erfolgreicher Anmelde- oder Abmeldevorgang. Dieses Interface kann für die Funktionserkennung verwendet werden.

## Wert

Ein [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Objekt.

## Beispiele

```js
if ("credentials" in navigator) {
  navigator.credentials.get({ password: true }).then((creds) => {
    // Do something with the credentials.
  });
} else {
  // Handle sign-in the way you did before.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
