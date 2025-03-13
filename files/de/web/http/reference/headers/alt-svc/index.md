---
title: Alt-Svc
slug: Web/HTTP/Reference/Headers/Alt-Svc
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Alt-Svc`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einem Server anzugeben, dass ein anderer Netzwerkstandort (der "alternative Dienst") als autoritativ für diesen Ursprung behandelt werden kann, wenn zukünftige Anfragen gestellt werden.

Auf diese Weise können neue Protokollversionen beworben werden, ohne laufende Anfragen zu beeinflussen, und es kann den Servern helfen, den Datenverkehr zu verwalten. Die Verwendung eines alternativen Dienstes ist für den Endbenutzer nicht erkennbar; es ändert weder die URL noch den Ursprung der Anfrage und führt nicht zu zusätzlichen Round-Trips.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Der {{Glossary("ALPN", "Application-Layer Protocol Negotiation (ALPN)")}} Protokoll-Identifier. Beispiele sind `h2` für HTTP/2 und `h3-25` für Entwurf 25 des HTTP/3 Protokolls.
- `<alt-authority>`
  - : Ein zitierter String, der die alternative Autorität angibt, bestehend aus einer optionalen Host-Überschreibung, einem Doppelpunkt und einer zwingenden Portnummer.
- `ma=<max-age>` {{optional_inline}}
  - : Die Anzahl der Sekunden, für die der alternative Dienst als aktuell gilt.
    Wenn nicht angegeben, beträgt der Standardwert 24 Stunden.
    Einträge alternativer Dienste können bis zu `<max-age>` Sekunden, abzüglich des Alters der Antwort (aus dem {{HTTPHeader("Age")}} Header), zwischengespeichert werden.
    Sobald der zwischengespeicherte Eintrag abläuft, kann der Client diesen alternativen Dienst nicht mehr für neue Verbindungen verwenden.
- `persist=1` {{optional_inline}}
  - : Einträge werden nicht durch Änderungen der Netzwerkkonfiguration gelöscht.
    Zwischengespeicherte Einträge alternativer Dienste werden normalerweise bei solchen Änderungen gelöscht.

Mehrere Einträge können in einem einzigen `Alt-Svc` Header mit einem Komma als Trennzeichen angegeben werden.
In diesem Fall werden frühere Einträge als bevorzugt betrachtet.

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

- [Alternative Services](https://www.mnot.net/blog/2016/03/09/alt-svc) von HTTP-Arbeitsgruppenleiter, Mark Nottingham (2016)
