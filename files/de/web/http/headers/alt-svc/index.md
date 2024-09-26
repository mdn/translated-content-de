---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTTPSidebar}}

Der **`Alt-Svc`** HTTP-Header erlaubt einem Server anzugeben, dass eine andere Netzwerkadresse (der "alternative Dienst") als autoritativ für diese Herkunft behandelt werden kann, wenn in Zukunft Anfragen gestellt werden.

Dies ermöglicht es, neue Protokollversionen zu bewerben, ohne die laufenden Anfragen zu beeinflussen, und kann auch Servern helfen, den Datenverkehr zu verwalten. Die Verwendung eines alternativen Dienstes ist für den Endbenutzer nicht sichtbar; sie ändert weder die URL noch die Herkunft der Anfrage und verursacht keine zusätzlichen Roundtrips.

## Syntax

```http
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

- `clear`
  - : Der spezielle Wert `clear` zeigt an, dass die Herkunft anfordert, dass alle alternativen Dienste für diese Herkunft ungültig gemacht werden.
- `<protocol-id>`
  - : Der {{Glossary("ALPN")}}-Protokoll-Identifier. Beispiele sind `h2` für HTTP/2 und `h3-25` für Entwurf 25 des HTTP/3-Protokolls.
- `<alt-authority>`
  - : Der zitierte String, der die alternative Autorität spezifiziert. Er besteht aus einer optionalen Host-Überschreibung, einem Doppelpunkt und einer obligatorischen Portnummer.
- `ma=<max-age>` {{optional_inline}}
  - : Die Anzahl von Sekunden, für die der alternative Dienst als frisch betrachtet wird.
    Wenn weggelassen, beträgt der Standardwert 24 Stunden.
    Einträge für alternative Dienste können bis zu _\<max-age>_ Sekunden, abzüglich des Alters der Antwort (vom {{httpheader("Age")}}-Header) im Cache gespeichert werden.
    Sobald der zwischengespeicherte Eintrag abläuft, kann der Client diesen alternativen Dienst nicht mehr für neue Verbindungen verwenden.
- `persist=1` {{optional_inline}}
  - : Normalerweise werden zwischengespeicherte Einträge für alternative Dienste bei Änderungen an der Netzwerkkonfiguration gelöscht.
    Die Verwendung des Parameters `persist=1` fordert, dass der Eintrag durch solche Änderungen nicht gelöscht wird.

Mehrere Einträge können in einem einzigen `Alt-Svc`-Header durch Kommas getrennt angegeben werden.
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

- [Alternative Services](https://www.mnot.net/blog/2016/03/09/alt-svc) (Artikel über `Alt-Svc` von Mark Nottingham, Vorsitzender der HTTP Working Group)
