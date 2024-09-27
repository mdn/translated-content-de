---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTTPSidebar}}

Der **`Alt-Svc`** HTTP-Header ermöglicht es einem Server anzugeben, dass eine andere Netzwerkadresse (der "alternative Dienst") als autoritativ für diese Herkunft betrachtet werden kann, wenn zukünftige Anfragen gestellt werden.

Dies ermöglicht es, neue Protokollversionen anzukündigen, ohne laufende Anfragen zu beeinflussen, und kann auch Servern bei der Verkehrslenkung helfen. Die Nutzung eines alternativen Dienstes ist für den Endbenutzer nicht sichtbar; sie ändert weder die URL noch die Herkunft der Anfrage und führt auch nicht zu zusätzlichen Netzwerk-Rundgängen.

## Syntax

```http
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

- `clear`
  - : Der spezielle Wert `clear` zeigt an, dass die Herkunft verlangt, dass alle alternativen Dienste für diese Herkunft ungültig gemacht werden.
- `<protocol-id>`
  - : Der [ALPN](/de/docs/Glossary/ALPN)-Protokollbezeichner. Beispiele sind `h2` für HTTP/2 und `h3-25` für den Entwurf 25 des HTTP/3-Protokolls.
- `<alt-authority>`
  - : Der angegebene Zeichenfolgenwert, der die alternative Autorität spezifiziert, besteht aus einem optionalen Host-Override, einem Doppelpunkt und einer obligatorischen Portnummer.
- `ma=<max-age>` {{optional_inline}}
  - : Die Anzahl der Sekunden, für die der alternative Dienst als frisch betrachtet wird.
    Wird sie weggelassen, beträgt der Standardwert 24 Stunden.
    Alternative Dienst-Einträge können bis zu _\<max-age>_ Sekunden zwischengespeichert werden, abzüglich des Alters der Antwort (vom {{httpheader("Age")}} Header).
    Sobald der zwischengespeicherte Eintrag abläuft, kann der Client diesen alternativen Dienst für neue Verbindungen nicht mehr verwenden.
- `persist=1` {{optional_inline}}
  - : Normalerweise werden zwischengespeicherte Einträge für alternative Dienste bei Änderungen der Netzwerkkonfiguration gelöscht.
    Die Verwendung des Parameters `persist=1` fordert, dass der Eintrag durch solche Änderungen nicht gelöscht wird.

Mehrere Einträge können mittels Komma als Trennzeichen in einem einzelnen `Alt-Svc`-Header angegeben werden.
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

- [Alternative Services](https://www.mnot.net/blog/2016/03/09/alt-svc) (Artikel über `Alt-Svc` von Mark Nottingham, Vorsitzender der HTTP-Arbeitsgruppe)
