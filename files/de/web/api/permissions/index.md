---
title: Berechtigungen
slug: Web/API/Permissions
l10n:
  sourceCommit: 805d398f95c9d1ad8769e65d56bbfe2a31205021
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

Die **`Permissions`**-Schnittstelle der [Permissions API](/de/docs/Web/API/Permissions_API) bietet die grundlegenden Funktionalitäten der Berechtigungs-API, wie Methoden zum Abfragen und Widerrufen von Berechtigungen.

## Instanzmethoden

- {{domxref("Permissions.query","Permissions.query()")}}
  - : Gibt den Benutzerberechtigungsstatus für eine bestimmte API zurück.
- {{domxref("Permissions.revoke","Permissions.revoke()")}} {{Deprecated_Inline}}
  - : Widerruft die derzeit für eine bestimmte API festgelegte Berechtigung.

## Beispiel

```js
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showLocalNewsWithGeolocation();
  } else if (result.state === "prompt") {
    showButtonToEnableLocalNews();
  }
  // Nicht tun, wenn die Berechtigung abgelehnt wurde.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
