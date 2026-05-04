---
title: Alt-Svc header
short-title: Alt-Svc
slug: Web/HTTP/Reference/Headers/Alt-Svc
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Der HTTP-**`Alt-Svc`**-{{Glossary("response_header", "Antwortheader")}} ermöglicht es einem Server anzugeben, dass eine andere Netzwerkadresse (der "alternative Dienst") als autoritativ für diesen Ursprung betrachtet werden kann, wenn zukünftige Anfragen gestellt werden.

Dies erlaubt es, neue Protokollversionen bekannt zu machen, ohne laufende Anfragen zu beeinflussen und kann auch Servern dabei helfen, den Datenverkehr zu verwalten. Die Nutzung eines alternativen Dienstes ist für den Endbenutzer nicht sichtbar; es ändert weder die URL noch den Ursprung der Anfrage und führt keine zusätzlichen Round-Trips ein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
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
  - : Der {{Glossary("ALPN", "Application-Layer Protocol Negotiation (ALPN)")}}-Protokoll-Identifikator. Beispiele umfassen `h2` für HTTP/2 und `h3-25` für den Entwurf 25 des HTTP/3-Protokolls.
- `<alt-authority>`
  - : Ein in Anführungszeichen gesetzter String, der die alternative Autorität spezifiziert, bestehend aus einem optionalen Host-Überschreiben, einem Doppelpunkt und einer obligatorischen Portnummer.
- `ma=<max-age>` {{optional_inline}}
  - : Die Anzahl der Sekunden, während der der alternative Dienst als frisch betrachtet wird.
    Wenn diese Angabe fehlt, ist die Standarddauer 24 Stunden.
    Einträge für alternative Dienste können bis zu `<max-age>` Sekunden, abzüglich des Alters der Antwort (aus dem {{HTTPHeader("Age")}}-Header), zwischengespeichert werden.
    Sobald der zwischengespeicherte Eintrag abläuft, kann der Client diesen alternativen Dienst nicht mehr für neue Verbindungen verwenden.
- `persist=1` {{optional_inline}}
  - : Einträge werden durch Änderungen der Netzwerkkonfiguration nicht gelöscht.
    Zwischengespeicherte Einträge für alternative Dienste werden normalerweise bei solchen Änderungen gelöscht.

Mehrere Einträge können in einem einzigen `Alt-Svc`-Header mit Komma als Trennzeichen angegeben werden.
In diesem Fall werden die frühesten Einträge als vorzugswürdig betrachtet.

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

- [Alternative Services](https://mnot.net/blog/2016/alt-svc) von Mark Nottingham, Vorsitzender der HTTP-Arbeitsgruppe (2016)
