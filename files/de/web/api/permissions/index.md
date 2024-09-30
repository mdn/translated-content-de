---
title: Permissions
slug: Web/API/Permissions
l10n:
  sourceCommit: 805d398f95c9d1ad8769e65d56bbfe2a31205021
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

Die **`Permissions`**-Schnittstelle der [Permissions API](/de/docs/Web/API/Permissions_API) stellt die Kernfunktionen der Permissions-API bereit, wie Methoden zum Abfragen und Widerrufen von Berechtigungen.

## Instanzmethoden

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query)
  - : Gibt den Benutzerberechtigungsstatus für eine gegebene API zurück.
- [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) {{Deprecated_Inline}}
  - : Widerruft die aktuell auf einer gegebenen API festgelegte Berechtigung.

## Beispiel

```js
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showLocalNewsWithGeolocation();
  } else if (result.state === "prompt") {
    showButtonToEnableLocalNews();
  }
  // Don't do anything if the permission was denied.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
