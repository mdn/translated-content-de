---
title: Alt-Svc header
short-title: Alt-Svc
slug: Web/HTTP/Reference/Headers/Alt-Svc
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Alt-Svc`** {{Glossary("response_header", "Response-Header")}} ermöglicht es einem Server anzugeben, dass ein anderer Netzwerkstandort (der "alternative Dienst") als autoritativ für diesen Ursprung behandelt werden kann, wenn zukünftige Anfragen gestellt werden.

Dies ermöglicht es, neue Protokollversionen zu bewerben, ohne laufende Anfragen zu beeinflussen, und kann auch den Servern helfen, den Datenverkehr zu verwalten. Die Nutzung eines alternativen Dienstes ist für den Endnutzer nicht sichtbar; es ändert weder die URL noch den Ursprung der Anfrage und führt zu keinen zusätzlichen Verbindungen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
  - : Alle alternativen Dienste des Ursprungs werden ungültig.
- `<protocol-id>`
  - : Die {{Glossary("ALPN", "Application-Layer Protocol Negotiation (ALPN)")}} Protokollkennung. Beispiele sind `h2` für HTTP/2 und `h3-25` für Entwurf 25 des HTTP/3-Protokolls.
- `<alt-authority>`
  - : Ein in Anführungszeichen gesetzter String, der die alternative Autorität spezifiziert, bestehend aus einer optionalen Host-Überschreibung, einem Doppelpunkt und einer verpflichtenden Portnummer.
- `ma=<max-age>` {{optional_inline}}
  - : Die Anzahl der Sekunden, für die der alternative Dienst als aktuell gilt.
    Wird er weggelassen, beträgt der Standardwert 24 Stunden.
    Einträge alternativer Dienste können bis zu `<max-age>` Sekunden lang gecacht werden, abzüglich des Alters der Antwort (aus dem {{HTTPHeader("Age")}}-Header).
    Sobald der gecachte Eintrag abläuft, kann der Client diesen alternativen Dienst nicht mehr für neue Verbindungen nutzen.
- `persist=1` {{optional_inline}}
  - : Einträge werden durch Änderungen der Netzwerkkonfiguration nicht gelöscht.
    Gecachte Einträge für alternative Dienste werden normalerweise bei solchen Änderungen gelöscht.

Mehrere Einträge können in einem einzelnen `Alt-Svc`-Header durch Kommas getrennt angegeben werden.
In diesem Fall werden frühere Einträge als bevorzugter betrachtet.

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

- [Alternative Services](https://www.mnot.net/blog/2016/03/09/alt-svc) von HTTP Working Group-Vorsitzendem Mark Nottingham (2016)
