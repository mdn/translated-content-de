---
title: Sec-Fetch-Storage-Access header
short-title: Sec-Fetch-Storage-Access
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Storage-Access
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{SeeCompatTable}}

Der HTTP **`Sec-Fetch-Storage-Access`** {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} liefert den "Storage-Zugriffsstatus" für den aktuellen Fetch-Kontext.

Der Status kann anzeigen, dass die Erlaubnis zum Zugriff auf [nicht partitionierte](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) Drittanbieter-Cookies:

- Nicht erteilt wurde.
- Erteilt wurde, aber nicht für den aktuellen Anforderungskontext aktiviert ist.
- Für den aktuellen Anforderungsinhalt erteilt wurde und die Cookies mit der Anforderung gesendet wurden.

Unterstützende Browser müssen diesen Header bei Cross-Site-Anfragen einfügen, wenn der Anmeldeinformationsmodus der Anfrage [`include`](/de/docs/Web/API/Request/credentials#include) ist.
Der Header sollte nicht mit gleichseitigen Anfragen gesendet werden (da diese Anfragen keine Cross-Site-Cookies beinhalten können) oder wenn der [Anmeldeinformationsmodus](/de/docs/Web/API/Request/credentials) der Anfrage "omit" ist.
Die angeforderte Ressource muss auch einen [potenziell vertrauenswürdigen Ursprung](/de/docs/Web/Security/Defenses/Secure_Contexts#potentially_trustworthy_origins) haben.

Wenn eine Storage-Zugriffserlaubnis erteilt, aber nicht aktiviert wurde, kann ein Server mit {{httpheader("Activate-Storage-Access")}} antworten, um die Aktivierung der Erlaubnis für den Kontext anzufordern.
Weitere Informationen finden Sie unter [Storage Access Headers](/de/docs/Web/API/Storage_Access_API#storage_access_headers) in der Übersicht der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-Safelisted-Anforderungsheader")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Fetch-Storage-Access: none
Sec-Fetch-Storage-Access: inactive
Sec-Fetch-Storage-Access: active
```

## Direktiven

Ein Wert, der den Storage-Zugriffsstatus für den aktuellen Fetch-Kontext angibt.
Die folgenden Werte sind zulässig (Server sollten andere Werte ignorieren):

- `none`
  - : Der Kontext hat keine `storage-access`-Berechtigung oder Zugriff auf nicht partitionierte Cookies.
- `inactive`
  - : Der Kontext hat die `storage-access`-Berechtigung, hat sich jedoch nicht entschieden, sie zu verwenden (und hat keinen Zugriff auf nicht partitionierte Cookies durch andere Mittel).
    Wenn dieser Wert gesetzt ist, sollte auch der {{httpheader("Origin")}}-Anforderungsheader gesetzt werden.
- `active`
  - : Der Kontext hat Zugriff auf nicht partitionierte Cookies.
    Wenn dieser Wert gesetzt ist, sollte auch der {{httpheader("Origin")}}-Anforderungsheader gesetzt werden.

## Beispiele

Siehe [Beispiele](/de/docs/Web/HTTP/Reference/Headers/Activate-Storage-Access#examples) im {{httpheader("Activate-Storage-Access")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Activate-Storage-Access")}}
- [Storage Access Headers](/de/docs/Web/API/Storage_Access_API#storage_access_headers) in der _Storage Access API_
- [Storage Access Header-Sequenzen](/de/docs/Web/API/Storage_Access_API#storage_access_header_sequences) in der _Storage Access API_
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Fetch Metadata Request Headers Spielplatz](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
