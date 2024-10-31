---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Alt-Svc`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einem Server anzugeben, dass eine andere Netzwerkadresse (der "alternative Dienst") als autorisierend für diesen Ursprung bei zukünftigen Anfragen angesehen werden kann.

Auf diese Weise können neue Protokollversionen bekannt gemacht werden, ohne laufende Anfragen zu beeinträchtigen, und Server können den Datenverkehr besser verwalten. Die Nutzung eines alternativen Dienstes ist für den Endbenutzer nicht sichtbar; sie ändert weder die URL noch den Ursprung der Anfrage und führt nicht zu zusätzlichen Rundreisezeiten.

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
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

- `clear`
  - : Alle alternativen Dienste des Ursprungs werden ungültig gemacht.
- `<protocol-id>`
  - : Der Protokoll-Identifier der {{Glossary("ALPN", "Application-Layer Protocol Negotiation (ALPN)")}}. Beispiele sind `h2` für HTTP/2 und `h3-25` für den Entwurf 25 des HTTP/3-Protokolls.
- `<alt-authority>`
  - : Ein in Anführungszeichen gesetzter String, der die alternative Autorität angibt, bestehend aus einem optionalen Host-Override, einem Doppelpunkt und einer obligatorischen Port-Nummer.
- `ma=<max-age>` {{optional_inline}}
  - : Die Anzahl der Sekunden, für die der alternative Dienst als aktuell angesehen wird.
    Wenn weggelassen, beträgt der Standardwert 24 Stunden.
    Einträge für alternative Dienste können bis zu `<max-age>` Sekunden zwischengespeichert werden, abzüglich des Alters der Antwort (aus dem {{HTTPHeader("Age")}}-Header).
    Sobald der zwischengespeicherte Eintrag abläuft, kann der Client diesen alternativen Dienst für neue Verbindungen nicht mehr nutzen.
- `persist=1` {{optional_inline}}
  - : Einträge werden nicht durch Netzwerk-Konfigurationsänderungen gelöscht.
    Zwischengespeicherte Einträge für alternative Dienste werden normalerweise bei solchen Änderungen gelöscht.

Mehrere Einträge können in einem einzelnen `Alt-Svc`-Header mit einem Komma als Trennzeichen angegeben werden. In diesem Fall werden frühere Einträge als bevorzugter angesehen.

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
