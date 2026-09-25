---
title: Use-As-Dictionary header
short-title: Use-As-Dictionary
slug: Web/HTTP/Reference/Headers/Use-As-Dictionary
l10n:
  sourceCommit: 57d3803b2ba01a8ac6cf51e796d6871e4e411ff1
---

{{SeeCompatTable}}

Der HTTP-Response-Header **`Use-As-Dictionary`** legt die Kriterien fest, unter denen ein Wörterbuch für {{Glossary("Compression_Dictionary_Transport", "Compression Dictionary Transport")}} bei zukünftigen Anfragen verwendet werden kann.

Der Browser verwendet das Wörterbuch nur, solange die Antwort, die diesen Header enthält, [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist oder `stale-while-revalidate` weiterhin erlaubt, eine veraltete Version dieser Antwort auszuliefern. Eine Antwort mit `no-cache` oder `no-store` wird niemals als Wörterbuch verwendet. Eine Antwort mit `must-revalidate` wird nur verwendet, bis ihr `max-age` abgelaufen ist. Weitere Informationen finden Sie unter [Aktualität von Wörterbüchern](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport#dictionary_freshness).

Weitere Informationen finden Sie im [Leitfaden zu Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Syntax

```http
Use-As-Dictionary: match="<url-pattern>"
Use-As-Dictionary: match-dest=("<destination1>" "<destination2>", …)
Use-As-Dictionary: id="<string-identifier>"
Use-As-Dictionary: type="raw"

// Multiple, in any order
Content-Encoding: match="<url-pattern>", match-dest=("<destination1>")
```

## Direktiven

- `match`
  - : Ein String-Wert mit einem [URL-Muster](/de/docs/Web/API/URL_Pattern_API). Nur Ressourcen, deren URLs diesem Muster entsprechen, dürfen diese Ressource als Wörterbuch verwenden. Erfassungsgruppen in regulären Ausdrücken sind nicht zulässig; [`URLPattern.hasRegExpGroups`](/de/docs/Web/API/URLPattern/hasRegExpGroups) muss daher `false` sein.
- `match-dest`
  - : Eine durch Leerzeichen getrennte Liste von Strings, bei der jeder String in Anführungszeichen und der gesamte Wert in Klammern steht. Sie gibt die [Ziele von Fetch-Anfragen](/de/docs/Web/API/Request/destination) an, denen Anfragen entsprechen müssen, um dieses Wörterbuch verwenden zu können.
- `id`
  - : Ein String-Wert, der eine serverseitige Kennung für das Wörterbuch angibt. Dieser ID-Wert wird anschließend im Anfrage-Header {{HTTPHeader("Dictionary-ID")}} gesendet, wenn der Browser eine Ressource anfordert, die dieses Wörterbuch verwenden kann.
- `type`
  - : Ein String-Wert, der das Dateiformat des bereitgestellten Wörterbuchs beschreibt. Derzeit wird nur `raw` unterstützt (dies ist auch der Standardwert). Die Direktive dient daher vor allem der zukünftigen Kompatibilität.

## Beispiele

### Pfadpräfix

```http
Use-As-Dictionary: match="/product/*"
```

Dies legt fest, dass das Wörterbuch nur für URLs verwendet werden darf, die mit `/product/` beginnen.

### Versionierte Verzeichnisse

```http
Use-As-Dictionary: match="/app/*/main.js"
```

Hier wird ein Platzhalter verwendet, um mehrere Versionen einer Datei abzudecken.

### Ziele

```http
Use-As-Dictionary: match="/product/*", match-dest=("document")
```

Hier stellt `match-dest` sicher, dass das Wörterbuch nur für `document`-Anfragen verwendet wird. Ressourcenanfragen wie `<script src="/product/js/app.js">` würden beispielsweise nicht übereinstimmen.

```http
Use-As-Dictionary: match="/product/*", match-dest=("document" "frame")
```

Damit könnte das Wörterbuch sowohl für Dokumente der obersten Ebene als auch für iframes verwendet werden.

### ID

```http
Use-As-Dictionary: match="/product/*", id="dictionary-12345"
```

Wenn `Use-As-Dictionary` wie in diesem Beispiel eine `id`-Direktive enthält, wird der `id`-Wert bei Anfragen für Ressourcen, die dieses Wörterbuch verwenden können, im Anfrage-Header {{HTTPHeader("Dictionary-ID")}} gesendet. Die Ressourcenanfrage enthält außerdem im Header {{HTTPHeader("Available-Dictionary")}} den von Doppelpunkten umgebenen SHA-256-Hash des Wörterbuchs:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss den Hash aus dem Header `Available-Dictionary` weiterhin prüfen. `Dictionary-ID` liefert dem Server zusätzliche Informationen zur Identifizierung des Wörterbuchs, ersetzt aber nicht den Header `Available-Dictionary`.

### Typ

```http
Use-As-Dictionary: match="/product/*", type="raw"
```

Derzeit wird nur `raw` unterstützt (dies ist auch der Standardwert). Die Direktive dient daher vor allem der zukünftigen Kompatibilität.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
