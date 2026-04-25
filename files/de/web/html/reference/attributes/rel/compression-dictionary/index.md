---
title: '`rel="compression-dictionary"` HTML-Attributwert'
short-title: compression-dictionary
slug: Web/HTML/Reference/Attributes/rel/compression-dictionary
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{SeeCompatTable}}

Das **`compression-dictionary`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attribut des {{HTMLElement("link")}} Elements ist ein Link, den Browser verwenden können, um ein {{Glossary("Compression_dictionary_transport", "Kompressionswörterbuch")}} herunterzuladen. Dieses kann verwendet werden, um zukünftige Downloads von Ressourcen auf dieser Seite zu komprimieren, sodass die Download-Größen dieser Ressourcen kleiner sind als bei standardmäßiger Komprimierung.

**Hinweis:** Wenn die Webseite einen {{HTTPHeader("Content-Security-Policy")}} Header hat, muss die `connect-src` Direktive (oder `default-src`, falls `connect-src` nicht gesetzt ist) den Ort der Wörterbuch-Ressource erlauben, um zu verhindern, dass die Anfrage blockiert wird.

Weitere Informationen finden Sie im [Leitfaden zur Kompressionswörterbuchübertragung](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zur Kompressionswörterbuchübertragung](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
