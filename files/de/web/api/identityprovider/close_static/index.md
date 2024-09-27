---
title: "IdentityProvider: close() statische Methode"
short-title: close()
slug: Web/API/IdentityProvider/close_static
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die **`close()`**-statische Methode der [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)-Schnittstelle bietet ein manuelles Signal für den Browser, dass ein IdP-Anmeldefluss abgeschlossen ist.

## Hinweise zur Verwendung

`close()` muss vom selben Ursprung wie der IdP-Anmeldedialog aufgerufen werden, wie im [IdP-Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) definiert.

`close()` ist erforderlich, um den IdP-Anmeldedialog zu schließen, wenn die Anmeldung vollständig abgeschlossen ist und der IdP die Datenerfassung vom Benutzer abgeschlossen hat. Ein primäres Anwendungsbeispiel für `close()` ist das Schließen des IdP-Anmeldedialogs in Fällen, in denen [der Browser- und der IdP-Anmeldestatus nicht synchron sind](/de/docs/Web/API/FedCM_API/IDP_integration#what_if_the_browser_and_the_idp_login_status_become_out_of_sync), und der Browser einen dynamischen Anmeldevorgang initiiert, um das Problem zu beheben.

## Syntax

```js-nolint
IdentityProvider.close()
```

### Parameter

Keine.

### Rückgabewert

`undefined`.

## Beispiele

```js
IdentityProvider.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
