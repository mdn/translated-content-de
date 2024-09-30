---
title: Set-Login
slug: Web/HTTP/Headers/Set-Login
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Set-Login`** [Response-Header](/de/docs/Glossary/Response_header) wird von einem föderierten Identitätsanbieter (IdP) gesendet, um seinen Anmeldestatus festzulegen – wir meinen damit, "ob Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht". Dieser wird vom Browser gespeichert und von der [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet, um die Anzahl der Anfragen an den IdP zu reduzieren (da keine Zeit mit Anfragen nach Konten verschwendet wird, wenn keine Benutzer beim IdP angemeldet sind). Es mildert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Der Header kann in jeder Antwort auf eine Navigation auf oberster Ebene oder eine anforderungsbezogene Subressource am Ursprungssite des IdP gesetzt werden – im Grunde kann jede Interaktion mit der IdP-Seite dazu führen, dass dieser Header gesetzt wird und der Anmeldestatus vom Browser gespeichert wird.

Siehe [Aktualisieren des Anmeldestatus mit der Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Anmeldestatus.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Response-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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

  - : Ein String, der den Anmeldestatus für den IdP festlegt. Mögliche Werte sind:

    - `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet.
    - `"logged-out"`: Alle Benutzerkonten des IdP sind derzeit abgemeldet.

    > [!NOTE]
    > Browser sollten diesen Header ignorieren, wenn er einen anderen Wert enthält.

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
