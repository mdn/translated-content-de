---
title: Alt-Svc header
short-title: Alt-Svc
slug: Web/HTTP/Reference/Headers/Alt-Svc
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Alt-Svc`** {{Glossary("response_header", "Response-Header")}} ermöglicht es einem Server, anzugeben, dass eine andere Netzwerkstelle (der "alternative Dienst") als autoritativ für diesen Ursprung behandelt werden kann, wenn zukünftige Anfragen gestellt werden.

Dies ermöglicht es, neue Protokollversionen zu bewerben, ohne in-flight-Anfragen zu beeinflussen, und kann Servern helfen, den Datenverkehr zu verwalten. Die Nutzung eines alternativen Dienstes ist für den Endbenutzer nicht sichtbar; es ändert weder die URL noch den Ursprung der Anfrage und erzeugt keine zusätzlichen Roundtrips.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Alle alternativen Dienste des Ursprungs sind ungültig.
- `<protocol-id>`
  - : Die {{Glossary("ALPN", "Application-Layer Protocol Negotiation (ALPN)")}} Protokoll-ID. Beispiele sind `h2` für HTTP/2 und `h3-25` für den Entwurf 25 des HTTP/3-Protokolls.
- `<alt-authority>`
  - : Ein in Anführungszeichen gesetzter String, der die alternative Autorität spezifiziert, bestehend aus einem optionalen Host-Override, einem Doppelpunkt und einer obligatorischen Portnummer.
- `ma=<max-age>` {{optional_inline}}
  - : Die Anzahl der Sekunden, für die der alternative Dienst als frisch betrachtet wird.
    Wenn weggelassen, beträgt der Standardwert 24 Stunden.
    Einträge für alternative Dienste können bis zu `<max-age>` Sekunden, abzüglich des Alters der Antwort (vom {{HTTPHeader("Age")}} Header), zwischengespeichert werden.
    Sobald der zwischengespeicherte Eintrag abläuft, kann der Client diesen alternativen Dienst für neue Verbindungen nicht mehr nutzen.
- `persist=1` {{optional_inline}}
  - : Einträge werden durch Netzwerkänderungen nicht gelöscht.
    Zwischengespeicherte Einträge für alternative Dienste werden normalerweise bei solchen Änderungen gelöscht.

Mehrere Einträge können in einem einzigen `Alt-Svc`-Header durch Kommas als Trennzeichen angegeben werden. In diesem Fall werden frühere Einträge als bevorzugter betrachtet.

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

- [Alternative Services](https://www.mnot.net/blog/2016/03/09/alt-svc) vom Vorsitzenden der HTTP Working Group, Mark Nottingham (2016)
