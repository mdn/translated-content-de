---
title: Set-Login header
short-title: Set-Login
slug: Web/HTTP/Reference/Headers/Set-Login
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Set-Login`** {{Glossary("response_header", "Antwort-Header")}} wird von einem föderierten Identitätsprovider (IdP) gesendet, um seinen Anmeldestatus festzulegen und anzuzeigen, ob Benutzer im derzeitigen Browser am IdP angemeldet sind oder nicht. Dieser wird vom Browser gespeichert und von der [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet, um die Anzahl der Anfragen an den IdP zu reduzieren, da der Browser keine Konten anfordern muss, wenn keine Benutzer am IdP angemeldet sind. Er mindert auch [potenzielle Timing-Attacken](https://github.com/w3c-fedid/FedCM/issues/447).

Der Header kann bei jeder Antwort gesetzt werden, die aus einer Navigation auf oberster Ebene oder einer Same-Origin-Subresource-Anfrage auf der Ursprungsseite des IdP resultiert. Jede Interaktion mit der IdP-Seite kann dazu führen, dass dieser Header gesetzt wird und der Anmeldestatus im Browser gespeichert wird.

Siehe [Aktualisieren des Anmeldestatus mithilfe der Login-Status-API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Anmeldestatus.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Set-Login: <status>
```

## Direktiven

- `<status>`
  - : Ein String, der den Anmeldestatus für den IdP festlegt. Mögliche Werte sind:
    - `logged-in`: Der IdP hat mindestens ein Benutzerkonto angemeldet.
    - `logged-out`: Alle Benutzerkonten des IdP sind derzeit abgemeldet.

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

- [Föderiertes Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
