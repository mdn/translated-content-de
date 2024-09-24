---
title: "IdentityProvider: close() statische Methode"
short-title: close()
slug: Web/API/IdentityProvider/close_static
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die **`close()`** statische Methode der {{domxref("IdentityProvider")}} Schnittstelle bietet ein manuelles Signal an den Browser, dass ein IdP-Anmeldefluss abgeschlossen ist.

## Hinweise zur Nutzung

`close()` muss vom gleichen Ursprung wie das IdP-Anmeldedialogfenster aufgerufen werden, wie in der [IdP-Konfiguration](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) definiert.

`close()` ist erforderlich, um das IdP-Anmeldedialogfenster zu schließen, wenn die Anmeldung vollständig abgeschlossen ist und das IdP die Datenerfassung vom Benutzer beendet hat. Ein Hauptanwendungsfall für `close()` ist das Schließen des IdP-Anmeldedialogfensters in Fällen, in denen [der Browser und der IdP-Anmeldestatus nicht synchron sind](/de/docs/Web/API/FedCM_API/IDP_integration#what_if_the_browser_and_the_idp_login_status_become_out_of_sync), und der Browser einen dynamischen Anmeldefluss initiiert, um das Problem zu beheben.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
