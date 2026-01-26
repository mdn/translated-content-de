---
title: rel="compression-dictionary"
slug: Web/HTML/Reference/Attributes/rel/compression-dictionary
l10n:
  sourceCommit: 5d5ea57d7c00fac731b5ed6df9a2ccc4b7d76cb9
---

{{SeeCompatTable}}

Das **`compression-dictionary`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attribut des {{HTMLElement("link")}} Elements ist ein Link, den Browser verwenden können, um ein {{Glossary("Compression_dictionary_transport", "Komprimierungswörterbuch")}} herunterzuladen, das zur Komprimierung zukünftiger Downloads von Ressourcen auf dieser Website verwendet werden kann, sodass die Downloadgrößen dieser Ressourcen kleiner sind als bei Standardkomprimierung.

**Hinweis:** Wenn die Website einen {{HTTPHeader("Content-Security-Policy")}} Header hat, muss die `connect-src` Direktive (oder `default-src`, wenn `connect-src` nicht gesetzt ist) den Ort der Wörterbuchressource erlauben, um zu vermeiden, dass die Anfrage blockiert wird.

Siehe den [Leitfaden zur Komprimierungswörterbuch-Übertragung](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zur Komprimierungswörterbuch-Übertragung](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
