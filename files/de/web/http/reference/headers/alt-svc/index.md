---
title: Alt-Svc header
short-title: Alt-Svc
slug: Web/HTTP/Reference/Headers/Alt-Svc
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Alt-Svc`**-{{Glossary("response_header", "Antwort-Header")}} ermöglicht es einem Server, anzugeben, dass ein anderer Netzwerkstandort (der "alternative Dienst") als maßgeblich für diesen Ursprung behandelt werden kann, wenn zukünftige Anfragen gestellt werden.

Dies ermöglicht es, neue Protokollversionen zu bewerben, ohne laufende Anfragen zu beeinflussen, und kann auch Servern helfen, den Datenverkehr zu verwalten. Die Nutzung eines alternativen Dienstes ist für den Endnutzer nicht sichtbar; sie ändert nicht die URL oder den Ursprung der Anfrage und führt nicht zu zusätzlichen Round-Trips.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

- `clear`
  - : Alle alternativen Dienste des Ursprungs werden ungültig gemacht.
- `<protocol-id>`
  - : Die {{Glossary("ALPN", "Application-Layer Protocol Negotiation (ALPN)")}}-Protokollkennung. Beispiele sind `h2` für HTTP/2 und `h3-25` für Entwurf 25 des HTTP/3-Protokolls.
- `<alt-authority>`
  - : Ein um Anführungszeichen gesetzter String, der die alternative Instanz spezifiziert, bestehend aus einer optionalen Host-Überschreibung, einem Doppelpunkt und einer obligatorischen Portnummer.
- `ma=<max-age>` {{optional_inline}}
  - : Die Anzahl der Sekunden, für die der alternative Dienst als aktuell angesehen wird.
    Wird diese Angabe weggelassen, beträgt der Standardwert 24 Stunden.
    Einträge von alternativen Diensten können bis zu `<max-age>` Sekunden zwischengespeichert werden, abzüglich der Alterung der Antwort (aus dem {{HTTPHeader("Age")}}-Header).
    Nach Ablauf des zwischengespeicherten Eintrags kann der Client diesen alternativen Dienst nicht mehr für neue Verbindungen verwenden.
- `persist=1` {{optional_inline}}
  - : Einträge werden nicht durch Änderungen der Netzwerkkonfiguration gelöscht.
    Normalerweise werden zwischengespeicherte Einträge für alternative Dienste bei solchen Änderungen gelöscht.

Mehrere Einträge können in einem einzelnen `Alt-Svc`-Header durch Kommata getrennt angegeben werden. In diesem Fall werden frühere Einträge als vorzugswürdiger betrachtet.

## Beispiel

```http
Alt-Svc: h2=":443"; ma=2592000;
Alt-Svc: h2=":443"; ma=2592000; persist=1
Alt-Svc: h2="alt.example.com:443", h2=":443"
Alt-Svc: h3-25=":443"; ma=3600, h2=":443"; ma=3600
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Alternative Services](https://www.mnot.net/blog/2016/03/09/alt-svc) von HTTP Working Group Vorsitzendem, Mark Nottingham (2016)
