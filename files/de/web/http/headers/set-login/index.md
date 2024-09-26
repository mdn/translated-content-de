---
title: Set-Login
slug: Web/HTTP/Headers/Set-Login
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Set-Login`** {{Glossary("Response header", "Antwort-Header")}} wird von einem föderierten Identitätsanbieter (IdP) gesendet, um seinen Anmeldestatus zu setzen — damit ist gemeint, "ob irgendwelche Benutzer aktuell im Browser beim IdP angemeldet sind oder nicht". Dieser Status wird vom Browser gespeichert und vom [FedCM API](/de/docs/Web/API/FedCM_API) verwendet, um die Anzahl der Anfragen an den IdP zu reduzieren (da es notwendig ist, keine Zeit mit Anfragen nach Konten zu verschwenden, wenn keine Benutzer beim IdP angemeldet sind). Es mindert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Der Header kann bei jeder Antwort gesetzt werden, die aus einer Navigation auf oberster Ebene oder einer Subressourcenanfrage mit gleichem Ursprung auf der Ursprungsseite des IdP resultiert — grundsätzlich kann jede Interaktion mit der IdP-Seite dazu führen, dass dieser Header gesetzt wird und der Anmeldestatus vom Browser gespeichert wird.

Siehe [Anmeldestatus mit der Login Status API aktualisieren](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Anmeldestatus.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Set-Login: status
```

## Direktiven

- `status`

  - : Ein String, der den Anmeldestatus repräsentiert, der für den IdP gesetzt werden soll. Mögliche Werte sind:

    - `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet.
    - `"logged-out"`: Alle Benutzerkonten des IdP sind derzeit abgemeldet.

    > [!NOTE]
    > Browser sollten diesen Header ignorieren, wenn er irgendeinen anderen Wert enthält.

## Beispiele

```http
Set-Login: logged-in

Set-Login: logged-out
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
