---
title: Use-As-Dictionary header
short-title: Use-As-Dictionary
slug: Web/HTTP/Reference/Headers/Use-As-Dictionary
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header **`Use-As-Dictionary`** listet die Übereinstimmungskriterien auf, nach denen das {{Glossary("Compression_Dictionary_Transport", "Compression Dictionary Transport")}}-Wörterbuch für zukünftige Anfragen verwendet werden kann.

Weitere Informationen finden Sie im [Leitfaden für Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

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
  - : Ein Zeichenfolgenwert, der ein [URL-Muster](/de/docs/Web/API/URL_Pattern_API) enthält: Nur Ressourcen, deren URLs mit diesem Muster übereinstimmen, dürfen diese Ressource als Wörterbuch verwenden. Reguläre Ausdrucksgruppierungen sind nicht erlaubt, daher muss [`URLPattern.hasRegExpGroups`](/de/docs/Web/API/URLPattern/hasRegExpGroups) `false` sein.
- `match-dest`
  - : Eine durch Leerzeichen getrennte Liste von Zeichenfolgen, wobei jede Zeichenfolge in Anführungszeichen und der gesamte Wert in Klammern eingeschlossen ist, die eine Liste von [Fetch-Request-Zielen](/de/docs/Web/API/Request/destination) bereitstellen, die Anfragen entsprechen müssen, wenn sie dieses Wörterbuch verwenden sollen.
- `id`
  - : Ein Zeichenfolgenwert, der einen Server-Identifikator für das Wörterbuch angibt. Dieser ID-Wert wird dann im {{HTTPHeader("Dictionary-ID")}}-Request-Header hinzugefügt, wenn der Browser eine Ressource anfordert, die dieses Wörterbuch verwenden kann.
- `type`
  - : Ein Zeichenfolgenwert, der das Dateiformat des bereitgestellten Wörterbuchs beschreibt. Derzeit wird nur `raw` unterstützt (was der Standard ist), daher ist dies mehr für zukünftige Kompatibilität.

## Beispiele

### Pfadvorsilbe

```http
Use-As-Dictionary: match="/product/*"
```

Dies besagt, dass das Wörterbuch nur für URLs verwendet werden soll, die mit `/product/` beginnen.

### Versionierte Verzeichnisse

```http
Use-As-Dictionary: match="/app/*/main.js"
```

Dieser verwendet einen Platzhalter, um mehrere Versionen einer Datei abzugleichen.

### Ziele

```http
Use-As-Dictionary: match="/product/*", match-dest=("document")
```

Hier wird `match-dest` verwendet, um sicherzustellen, dass das Wörterbuch nur für `document`-Anfragen verwendet wird, sodass `<script src="/product/js/app.js">` Ressourcenanforderungen zum Beispiel nicht übereinstimmen würden.

```http
Use-As-Dictionary: match="/product/*", match-dest=("document" "frame")
```

Dies würde es ermöglichen, dass das Wörterbuch sowohl mit obersten Dokumenten als auch mit iframes übereinstimmt.

### ID

```http
Use-As-Dictionary: match="/product/*", id="dictionary-12345"
```

Wenn `Use-As-Dictionary` eine `id`-Direktive enthält, wie in diesem Beispiel, wird der `id`-Wert im {{HTTPHeader("Dictionary-ID")}}-Request-Header für Ressourcen enthalten sein, die dieses Wörterbuch verwenden können. Die Ressourcenanforderung wird auch den SHA-256-Hash des Wörterbuchs, umgeben von Doppelpunkten, im {{HTTPHeader("Available-Dictionary")}}-Header enthalten:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss den Hash aus dem `Available-Dictionary`-Header immer noch überprüfen — die `Dictionary-ID` ist zusätzliche Information für den Server zur Identifizierung des Wörterbuchs, ersetzt aber nicht die Notwendigkeit für den `Available-Dictionary`-Header.

### Typ

```http
Use-As-Dictionary: match="/product/*", type="raw"
```

Derzeit wird nur `raw` unterstützt (was der Standard ist), daher ist dies mehr für zukünftige Kompatibilität.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
