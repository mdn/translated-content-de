---
title: "NavigatorLogin: setStatus() Methode"
short-title: setStatus()
slug: Web/API/NavigatorLogin/setStatus
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{securecontext_header}}{{APIRef("FedCM API")}}

Die **`setStatus()`** Methode der [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin) Schnittstelle setzt den Anmeldestatus eines föderierten Identitätsanbieters (IdP), wenn sie von der Herkunft des IdP aufgerufen wird. Damit meinen wir "ob irgendwelche Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht". Dies sollte von der IdP-Website nach einer Benutzeranmeldung oder -abmeldung aufgerufen werden.

Der Browser speichert diesen Status für jeden IdP; die [FedCM API](/de/docs/Web/API/FedCM_API) nutzt ihn dann, um die Anzahl der Anfragen an den IdP zu reduzieren (weil es nicht nötig ist, Konten anzufordern, wenn keine Benutzer beim IdP angemeldet sind). Es mildert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447) ab.

Weitere Informationen über den FedCM-Anmeldestatus finden Sie unter [Aktualisieren des Anmeldestatus mit der Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Syntax

```js-nolint
setStatus(status)
```

### Parameter

- `status`
  - : Ein String, der den Anmeldestatus für den IdP festlegt. Mögliche Werte sind:
    - `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet.
    - `"logged-out"`: Alle Benutzerkonten des IdP sind derzeit abgemeldet.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` erfüllt wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die aufrufende Domain sich nicht in einem Frame befindet, in dem die gesamte Verschachtelungshierarchie gleichberechtigt ist. Egal ob vom Hauptframe, einem im Hauptframe verschachtelten {{htmlelement("iframe")}} oder einem weiteren `<iframe>`, das ein oder mehrere Ebenen tiefer innerhalb des ersten `<iframe>` verschachtelt ist, _alle_ Ebenen der Verschachtelungshierarchie müssen gleichberechtigt sein, damit der Aufruf erfolgreich ist.

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
