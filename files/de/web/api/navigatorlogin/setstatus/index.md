---
title: "NavigatorLogin: setStatus()-Methode"
short-title: setStatus()
slug: Web/API/NavigatorLogin/setStatus
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die **`setStatus()`**-Methode des [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Interfaces setzt den Anmeldestatus eines föderierten Identitätsanbieters (IdP), wenn sie aus dem Ursprung des IdP aufgerufen wird. Damit meinen wir "ob Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht". Dies sollte von der IdP-Seite nach einem Benutzer-Login oder -Logout aufgerufen werden.

Der Browser speichert diesen Zustand für jeden IdP; die [FedCM API](/de/docs/Web/API/FedCM_API) nutzt diesen, um die Anzahl der Anfragen an den IdP zu reduzieren (da keine Konten angefordert werden müssen, wenn keine Benutzer beim IdP angemeldet sind). Dies trägt auch zur Minderung von [möglichen Timing-Angriffen](https://github.com/w3c-fedid/FedCM/issues/447) bei.

Siehe [Aktualisieren des Anmeldestatus über die Login-Status-API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Anmeldestatus.

## Syntax

```js-nolint
setStatus(status)
```

### Parameter

- `status`
  - : Ein String, der den zu setzenden Anmeldestatus für den IdP darstellt. Mögliche Werte sind:
    - `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet.
    - `"logged-out"`: Alle IdP-Benutzerkonten sind momentan abgemeldet.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die aufrufende Domain sich nicht in einem Frame befindet, in dem die gesamte Nestungshierarchie gleichberechtigt ist. Ob aus dem Hauptframe, einem innerhalb des Hauptframes verschachtelten {{htmlelement("iframe")}} oder einem anderen `<iframe>`, das ein oder mehrere Ebenen tief innerhalb des ersten `<iframe>` verschachtelt ist, _alle_ Ebenen der Verschachtelungshierarchie müssen gleichberechtigt sein, damit der Aufruf erfolgreich ist.

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

- [Föderiertes Credential-Management (FedCM) API](/de/docs/Web/API/FedCM_API)
