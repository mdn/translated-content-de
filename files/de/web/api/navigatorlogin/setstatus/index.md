---
title: "NavigatorLogin: setStatus()-Methode"
short-title: setStatus()
slug: Web/API/NavigatorLogin/setStatus
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die **`setStatus()`**-Methode der {{domxref("NavigatorLogin")}}-Schnittstelle setzt den Anmeldestatus eines föderierten Identitätsanbieters (IdP), wenn sie von der Origin des IdP aufgerufen wird. Damit ist gemeint, "ob im aktuellen Browser Benutzer beim IdP angemeldet sind oder nicht". Diese Methode sollte von der IdP-Seite nach einer Benutzeranmeldung oder -abmeldung aufgerufen werden.

Der Browser speichert diesen Zustand für jeden IdP; die [FedCM API](/de/docs/Web/API/FedCM_API) API nutzt ihn dann, um die Anzahl der Anfragen an den IdP zu reduzieren (da keine Zeit mit Anfragen vergeudet wird, wenn keine Benutzer beim IdP angemeldet sind). Es mildert auch [mögliche Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Siehe [Anmeldestatus mit der Login Status API aktualisieren](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Anmeldestatus.

## Syntax

```js-nolint
setStatus(status)
```

### Parameter

- `status`
  - : Ein Zeichenkette, die den Anmeldestatus für den IdP festlegt. Mögliche Werte sind:
    - `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet.
    - `"logged-out"`: Alle IdP-Benutzerkonten sind derzeit abgemeldet.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` erfüllt wird.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die aufrufende Domain nicht in einem Frame ist, bei dem die gesamte Verschachtelungshierarchie gleichorigin ist. Ob vom Hauptframe, einem {{htmlelement("iframe")}}, das im Hauptframe verschachtelt ist, oder einem anderen `<iframe>`, das eine oder mehrere Ebenen tief im ersten `<iframe>` verschachtelt ist, _alle_ Ebenen der Verschachtelungshierarchie müssen gleichorigin sein, damit der Aufruf erfolgreich ist.

## Beispiele

```js
/* Anmeldestatus festlegen */
navigator.login.setStatus("logged-in");

/* Abmeldestatus festlegen */
navigator.login.setStatus("logged-out");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
