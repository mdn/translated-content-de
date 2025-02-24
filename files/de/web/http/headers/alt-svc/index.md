---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Alt-Svc`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einem Server, anzugeben, dass ein anderer Netzwerkstandort (der "alternative Dienst") bei zukünftigen Anfragen als autoritativ für diesen Ursprung behandelt werden kann.

Auf diese Weise können neue Protokollversionen angekündigt werden, ohne laufende Anfragen zu beeinträchtigen, und es kann Servern helfen, den Datenverkehr zu verwalten. Die Verwendung eines alternativen Dienstes ist für den Endbenutzer nicht sichtbar; es ändert nicht die URL oder den Ursprung der Anfrage und führt keine zusätzlichen Rundreisen ein.

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
  - : Der {{Glossary("ALPN", "Application-Layer Protocol Negotiation (ALPN)")}} Protokoll-Identifikator. Beispiele sind `h2` für HTTP/2 und `h3-25` für Entwurf 25 des HTTP/3-Protokolls.
- `<alt-authority>`
  - : Ein in Anführungszeichen gesetzter String, der die alternative Autorität spezifiziert, bestehend aus einer optionalen Host-Überschreibung, einem Doppelpunkt und einer obligatorischen Portnummer.
- `ma=<max-age>` {{optional_inline}}
  - : Die Anzahl der Sekunden, für die der alternative Dienst als aktuell gilt.
    Wird dieser weggelassen, wird standardmäßig 24 Stunden angesetzt.
    Alternative Dienst-Einträge können für bis zu `<max-age>` Sekunden, abzüglich des Alters der Antwort (aus dem {{HTTPHeader("Age")}} Header), zwischengespeichert werden.
    Sobald der zwischengespeicherte Eintrag abläuft, kann der Client diesen alternativen Dienst für neue Verbindungen nicht mehr verwenden.
- `persist=1` {{optional_inline}}
  - : Einträge werden nicht durch Änderungen der Netzwerkkonfiguration gelöscht.
    Zwischengespeicherte alternative Dienst-Einträge werden normalerweise bei solchen Änderungen gelöscht.

Mehrere Einträge können in einem einzelnen `Alt-Svc`-Header durch Kommas getrennt angegeben werden.
In diesem Fall werden frühere Einträge als bevorzugter angesehen.

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

- [Alternative Services](https://www.mnot.net/blog/2016/03/09/alt-svc) von HTTP Working Group Vorsitzenden, Mark Nottingham (2016)
