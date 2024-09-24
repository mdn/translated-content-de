---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTTPSidebar}}

Der **`Alt-Svc`** HTTP-Header ermöglicht es einem Server anzuzeigen, dass eine andere Netzwerkadresse (der "alternative Dienst") als autoritativ für diesen Ursprung angesehen werden kann, wenn zukünftige Anfragen gemacht werden.

Dies ermöglicht es, neue Protokollversionen zu bewerben, ohne sich auf derzeitige Anfragen auszuwirken, und hilft Servern auch bei der Verkehrsverwaltung. Die Nutzung eines alternativen Dienstes ist für den Endbenutzer nicht sichtbar; es ändert nicht die URL oder den Ursprung der Anfrage und führt nicht zu zusätzlichen Umlaufzeiten.

## Syntax

```http
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

- `clear`
  - : Der spezielle Wert `clear` zeigt an, dass der Ursprung verlangt, dass alle alternativen Dienste für diesen Ursprung ungültig gemacht werden.
- `<protocol-id>`
  - : Der {{Glossary("ALPN")}} Protokollbezeichner. Beispiele umfassen `h2` für HTTP/2 und `h3-25` für Entwurf 25 des HTTP/3-Protokolls.
- `<alt-authority>`
  - : Der angegebene alternative Autoritäts-String besteht aus einem optionalen Host-Überschreibung, einem Doppelpunkt und einer obligatorischen Portnummer.
- `ma=<max-age>` {{optional_inline}}
  - : Die Anzahl der Sekunden, während der der alternative Dienst als aktuell betrachtet wird.
    Falls ausgelassen, wird standardmäßig 24 Stunden angenommen.
    Alternative Dienst-Einträge können bis zu _\<max-age>_ Sekunden zwischengespeichert werden, minus dem Alter der Antwort (aus dem {{httpheader("Age")}} Header).
    Sobald der zwischengespeicherte Eintrag abläuft, kann der Client diesen alternativen Dienst nicht mehr für neue Verbindungen nutzen.
- `persist=1` {{optional_inline}}
  - : Normalerweise werden zwischengespeicherte alternative Dienst-Einträge bei Änderungen in der Netzwerkkonfiguration gelöscht.
    Die Nutzung des Parameters `persist=1` verlangt, dass der Eintrag durch solche Änderungen nicht gelöscht wird.

Mehrere Einträge können in einem einzigen `Alt-Svc` Header durch Kommata getrennt angegeben werden.
In diesem Fall werden frühere Einträge als vorzuziehender betrachtet.

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

- [Alternative Services](https://www.mnot.net/blog/2016/03/09/alt-svc) (Artikel über `Alt-Svc` von dem Vorsitzenden der HTTP-Arbeitsgruppe Mark Nottingham)
