---
title: Use-As-Dictionary header
short-title: Use-As-Dictionary
slug: Web/HTTP/Reference/Headers/Use-As-Dictionary
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Use-As-Dictionary`** Antwort-Header listet die Übereinstimmungskriterien auf, für die das {{Glossary("Compression_Dictionary_Transport", "Compression Dictionary Transport")}} Wörterbuch für zukünftige Anfragen verwendet werden kann.

Weitere Informationen finden Sie im [Leitfaden zum Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

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
  - : Ein Zeichenfolgenwert, der ein [URL Pattern](/de/docs/Web/API/URL_Pattern_API) enthält: nur Ressourcen, deren URLs diesem Muster entsprechen, dürfen diese Ressource als Wörterbuch verwenden.
- `match-dest`
  - : Eine durch Leerzeichen getrennte Liste von Zeichenfolgen, wobei jede Zeichenfolge in Anführungszeichen steht und der gesamte Wert in Klammern eingeschlossen ist. Dies bietet eine Liste von [Fetch Request Destinations](/de/docs/Web/API/Request/destination), denen die Anfragen entsprechen müssen, wenn sie dieses Wörterbuch verwenden sollen.
- `id`
  - : Ein Zeichenfolgenwert, der eine Serverkennung für das Wörterbuch angibt. Dieser ID-Wert wird dann im {{HTTPHeader("Dictionary-ID")}} Request-Header hinzugefügt, wenn der Browser eine Ressource anfordert, die dieses Wörterbuch verwenden kann.
- `type`
  - : Ein Zeichenfolgenwert, der das Dateiformat des bereitgestellten Wörterbuchs beschreibt. Derzeit wird nur `raw` unterstützt (was der Standard ist), sodass dies eher für zukünftige Kompatibilität gedacht ist.

## Beispiele

### Pfadpräfix

```http
Use-As-Dictionary: match="/product/*"
```

Dies bedeutet, dass das Wörterbuch nur für URLs verwendet wird, die mit `/product/` beginnen.

### Versionierte Verzeichnisse

```http
Use-As-Dictionary: match="/app/*/main.js"
```

Dies verwendet ein Platzhalterzeichen, um mehrere Versionen einer Datei zu entsprechen.

### Ziele

```http
Use-As-Dictionary: match="/product/*", match-dest=("document")
```

Dies verwendet `match-dest`, um sicherzustellen, dass das Wörterbuch nur für `document` Anfragen verwendet wird, sodass `<script src="/product/js/app.js">` Ressourcenanfragen beispielsweise nicht übereinstimmen würden.

```http
Use-As-Dictionary: match="/product/*", match-dest=("document" "frame")
```

Dies würde es dem Wörterbuch erlauben, sowohl mit obersten Dokumenten als auch mit iframes übereinzustimmen.

### Id

```http
Use-As-Dictionary: match="/product/*", id="dictionary-12345"
```

Wenn `Use-As-Dictionary` eine `id` Direktive enthält, wie in diesem Beispiel, wird der `id` Wert im {{HTTPHeader("Dictionary-ID")}} Request-Header für Ressourcen enthalten, die dieses Wörterbuch verwenden können. Die Ressourcenanfrage wird auch den SHA-256-Hash des Wörterbuchs, umgeben von Doppelpunkten, im {{HTTPHeader("Available-Dictionary")}} Header enthalten:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss immer noch den Hash aus dem `Available-Dictionary` Header überprüfen — die `Dictionary-ID` ist zusätzliche Information für den Server, um das Wörterbuch zu identifizieren, ersetzt jedoch nicht die Notwendigkeit des `Available-Dictionary` Headers.

### Typ

```http
Use-As-Dictionary: match="/product/*", type="raw"
```

Derzeit wird nur `raw` unterstützt (was der Standard ist), sodass dies eher für zukünftige Kompatibilität gedacht ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zum Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
