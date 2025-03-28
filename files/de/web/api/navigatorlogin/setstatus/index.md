---
title: "NavigatorLogin: setStatus() Methode"
short-title: setStatus()
slug: Web/API/NavigatorLogin/setStatus
l10n:
  sourceCommit: 49bbddc34034e59a63c0b2cda79e45c94ea9daa9
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die **`setStatus()`**-Methode der [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Schnittstelle setzt den Anmeldestatus eines föderierten Identitätsanbieters (IdP), wenn sie von der Origin des IdP aufgerufen wird. Damit meinen wir "ob irgendwelche Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht". Diese Methode sollte von der IdP-Seite nach einer Benutzeranmeldung oder -abmeldung aufgerufen werden.

Der Browser speichert diesen Zustand für jeden IdP; die [FedCM API](/de/docs/Web/API/FedCM_API) nutzt diesen dann, um die Anzahl der Anfragen an den IdP zu reduzieren (da sie keine Zeit damit verschwenden muss, nach Konten zu fragen, wenn keine Benutzer beim IdP angemeldet sind). Sie verringert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Weitere Informationen über den FedCM-Anmeldestatus finden Sie unter [Anmeldestatus mit der Login Status API aktualisieren](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Syntax

```js-nolint
setStatus(status)
```

### Parameter

- `status`
  - : Ein String, der den Anmeldestatus darstellt, der für den IdP gesetzt werden soll. Mögliche Werte sind:
    - `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet.
    - `"logged-out"`: Alle Benutzerkonten des IdP sind derzeit abgemeldet.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die aufrufende Domain sich nicht in einem Frame befindet, bei dem die gesamte Verschachtelungshierarchie gleich-origin ist. Ob aus dem Hauptframe, einem im Hauptframe verschachtelten {{htmlelement("iframe")}} oder einem anderen `<iframe>`, das ein oder mehrere Ebenen tief im ersten `<iframe>` verschachtelt ist, aufgerufen wird – _alle_ Ebenen der Verschachtelungshierarchie müssen gleich-origin sein, damit der Aufruf erfolgreich ist.

## Beispiele

```js
/* Set logged-in status */
navigator.login.setStatus("logged-in");

/* Set logged-out status */
navigator.login.setStatus("logged-out");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
