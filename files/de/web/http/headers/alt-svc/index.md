---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTTPSidebar}}

Der **`Alt-Svc`** HTTP-Header ermöglicht es einem Server, anzuzeigen, dass ein anderer Netzwerkstandort (der "alternative Dienst") als autoritativ für diesen Ursprung behandelt werden kann, wenn zukünftige Anfragen gestellt werden.

Dadurch können neue Protokollversionen angekündigt werden, ohne laufende Anfragen zu beeinträchtigen, und es kann auch Servern helfen, den Datenverkehr zu verwalten. Die Verwendung eines alternativen Dienstes ist für den Endbenutzer nicht sichtbar; sie ändert weder die URL noch den Ursprung der Anfrage und führt zu keinen zusätzlichen Rundreisen.

## Syntax

```http
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

- `clear`
  - : Der spezielle Wert `clear` gibt an, dass der Ursprung verlangt, dass alle alternativen Dienste für diesen Ursprung ungültig gemacht werden.
- `<protocol-id>`
  - : Der [ALPN](/de/docs/Glossary/ALPN)-Protokollbezeichner. Beispiele sind `h2` für HTTP/2 und `h3-25` für Entwurf 25 des HTTP/3-Protokolls.
- `<alt-authority>`
  - : Der in Anführungszeichen gesetzte String, der die alternative Autorität spezifiziert, bestehend aus einer optionalen Host-Überschreibung, einem Doppelpunkt und einer obligatorischen Portnummer.
- `ma=<max-age>` {{optional_inline}}
  - : Die Anzahl der Sekunden, für die der alternative Dienst als frisch angesehen wird.
    Wenn weggelassen, beträgt der Standardwert 24 Stunden.
    Alternative Diensteinträge können bis zu _\<max-age>_ Sekunden, abzüglich des Alters der Antwort (aus dem {{httpheader("Age")}}-Header) zwischengespeichert werden.
    Sobald der zwischengespeicherte Eintrag abläuft, kann der Client diesen alternativen Dienst für neue Verbindungen nicht mehr nutzen.
- `persist=1` {{optional_inline}}
  - : Normalerweise werden zwischengespeicherte alternative Diensteinträge bei Netzwerkänderungen gelöscht.
    Die Verwendung des `persist=1`-Parameters fordert, dass der Eintrag durch solche Änderungen nicht gelöscht wird.

Mehrere Einträge können in einem einzelnen `Alt-Svc`-Header durch Kommas als Trennzeichen angegeben werden.
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

- [Alternative Services](https://www.mnot.net/blog/2016/03/09/alt-svc) (Artikel über `Alt-Svc` vom Vorsitzenden der HTTP-Arbeitsgruppe Mark Nottingham)
