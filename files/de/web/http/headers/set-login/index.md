---
title: Set-Login
slug: Web/HTTP/Headers/Set-Login
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Set-Login`** {{Glossary("response_header", "Antwort-Header")}} wird von einem föderierten Identitätsprovider (IdP) gesendet, um dessen Login-Status festzulegen, und gibt an, ob sich Benutzer im aktuellen Browser beim IdP angemeldet haben oder nicht. Dieser wird vom Browser gespeichert und von der [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet, um die Anzahl der Anfragen an den IdP zu reduzieren, da der Browser keine Konten anfordern muss, wenn keine Benutzer beim IdP angemeldet sind. Es verringert auch [potenzielle Zeitangriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Der Header kann bei jeder Antwort gesetzt werden, die aus einer Navigation auf oberster Ebene oder einer gleich-originigen Subressourcen-Anfrage auf der Ursprungsseite des IdP resultiert. Jede Interaktion mit der IdP-Seite kann dazu führen, dass dieser Header gesetzt wird und der Login-Status vom Browser gespeichert wird.

Siehe [Aktualisieren des Login-Status mit der Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen zum FedCM-Login-Status.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Set-Login: <status>
```

## Direktiven

- `<status>`

  - : Eine Zeichenfolge, die den Login-Status für den IdP festlegt. Mögliche Werte sind:

    - `logged-in`: Der IdP hat mindestens ein Benutzerkonto angemeldet.
    - `logged-out`: Alle IdP-Benutzerkonten sind derzeit abgemeldet.

    > [!NOTE]
    > Browser ignorieren diesen Header, wenn er einen anderen Wert enthält.

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
