---
title: Use-As-Dictionary
slug: Web/HTTP/Reference/Headers/Use-As-Dictionary
l10n:
  sourceCommit: dba7747cb88680a82b01d4a9ff02f38b5b230c53
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Use-As-Dictionary`** Antwort-Header listet die Kriterien auf, nach denen das {{Glossary("Compression_Dictionary_Transport", "Compression Dictionary Transport")}} Wörterbuch für zukünftige Anfragen verwendet werden kann.

Weitere Informationen finden Sie im [Compression Dictionary Transport Leitfaden](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Syntax

```http
Use-As-Dictionary: match="<urlpattern>"
Use-As-Dictionary: match-dest=("<destination1>" "<destination2>", …)
Use-As-Dictionary: id="<string-identifier>"
Use-As-Dictionary: type="raw"

// Multiple, in any order
Content-Encoding: match="<urlpattern>", match-dest=("<destination1>")
```

## Direktiven

- `match`
  - : Ein Zeichenfolgenwert, der ein [URL Pattern](/de/docs/Web/API/URL_Pattern_API) enthält: Nur Ressourcen, deren URLs diesem Muster entsprechen, dürfen diese Ressource als Wörterbuch verwenden.
- `match-dest`
  - : Eine durch Leerzeichen getrennte Liste von Zeichenfolgen, wobei jede Zeichenfolge in Anführungszeichen steht und der gesamte Wert in Klammern eingeschlossen ist, welche eine Liste von [Fetch-Anfragezielen](/de/docs/Web/API/Request/destination) bereitstellt, die die Anfragen erfüllen müssen, um dieses Wörterbuch zu verwenden.
- `id`
  - : Ein Zeichenfolgenwert, der eine Serverkennung für das Wörterbuch angibt. Dieser ID-Wert wird dann im {{HTTPHeader("Dictionary-ID")}} Anfrage-Header hinzugefügt, wenn der Browser eine Ressource anfordert, die dieses Wörterbuch verwenden kann.
- `type`
  - : Ein Zeichenfolgenwert, der das Dateiformat des bereitgestellten Wörterbuchs beschreibt. Derzeit wird nur `raw` unterstützt (was der Standard ist), sodass dies mehr für zukünftige Kompatibilität gedacht ist.

## Beispiele

### Pfadpräfix

```http
Use-As-Dictionary: match="/product/*"
```

Dies besagt, dass das Wörterbuch nur für URLs verwendet werden soll, die mit `/product/` beginnen.

### Versionierte Verzeichnisse

```http
Use-As-Dictionary: match="/app/*/main.js"
```

Dies verwendet ein Platzhalterzeichen, um mehrere Versionen einer Datei zu erfassen.

### Ziele

```http
Use-As-Dictionary: match="/product/*", match-dest=("document")
```

Dies verwendet `match-dest`, um sicherzustellen, dass das Wörterbuch nur für `document` Anfragen verwendet wird, sodass beispielsweise `<script src="/product/js/app.js">` Ressourcenanfragen nicht übereinstimmen würden.

```http
Use-As-Dictionary: match="/product/*", match-dest=("document" "frame")
```

Dies würde dem Wörterbuch erlauben, sowohl mit obersten Dokumenten als auch mit iframes übereinzustimmen.

### Id

```http
Use-As-Dictionary: match="/product/*", id="dictionary-12345"
```

Wenn `Use-As-Dictionary` eine `id` Direktive enthält, wie in diesem Beispiel, wird der `id` Wert im {{HTTPHeader("Dictionary-ID")}} Anfrage-Header für Ressourcen aufgenommen, die dieses Wörterbuch verwenden können. Die Ressourcenanfrage enthält auch den SHA-256-Hash des Wörterbuchs, umgeben von Doppelpunkten im {{HTTPHeader("Available-Dictionary")}} Header:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

### Typ

```http
Use-As-Dictionary: match="/product/*", type="raw"
```

Derzeit wird nur `raw` unterstützt (was der Standard ist), sodass dies mehr für zukünftige Kompatibilität gedacht ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Compression Dictionary Transport Leitfaden](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
