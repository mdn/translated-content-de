---
title: Use-As-Dictionary
slug: Web/HTTP/Reference/Headers/Use-As-Dictionary
l10n:
  sourceCommit: ec323a3ecac1d9f607e2c32d425985e859a39dc8
---

{{HTTPSidebar}}

Der HTTP-Header **`Use-As-Dictionary`** listet die Kriterien auf, nach denen das {{Glossary("Compression_Dictionary_Transport", "Kompressionswörterbuch-Transport")}} Wörterbuch für zukünftige Anfragen verwendet werden kann.

Weitere Informationen finden Sie im [Leitfaden zum Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

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
  - : Ein Zeichenfolgenwert, der ein [URL-Muster](/de/docs/Web/API/URL_Pattern_API) enthält: Nur Ressourcen, deren URLs diesem Muster entsprechen, dürfen diese Ressource als Wörterbuch verwenden.
- `match-dest`
  - : Eine durch Leerzeichen getrennte Liste von Zeichenfolgen, wobei jede Zeichenfolge in Anführungszeichen steht und der gesamte Wert in Klammern eingeschlossen ist. Diese Liste gibt die [Ziele von Fetch-Anfragen](/de/docs/Web/API/Request/destination) an, die Anfragen erfüllen müssen, um dieses Wörterbuch zu verwenden.
- `id`
  - : Ein Zeichenfolgenwert, der einen Server-Identifikator für das Wörterbuch angibt. Dieser ID-Wert wird dann im {{HTTPHeader("Dictionary-ID")}} Anforderungs-Header hinzugefügt, wenn der Browser eine Ressource anfordert, die dieses Wörterbuch verwenden kann.
- `type`
  - : Ein Zeichenfolgenwert, der das Dateiformat des bereitgestellten Wörterbuchs beschreibt. Derzeit wird nur `raw` unterstützt (was der Standard ist), sodass dies mehr für zukünftige Kompatibilität ist.

## Beispiele

### Pfad-Präfix

```http
Use-As-Dictionary: match="/product/*"
```

Dies besagt, dass das Wörterbuch nur für URLs verwendet werden soll, die mit `/product/` beginnen.

### Versionierte Verzeichnisse

```http
Use-As-Dictionary: match="/app/*/main.js"
```

Dies verwendet ein Platzhalterzeichen, um mehrere Versionen einer Datei zu matchen.

### Ziele

```http
Use-As-Dictionary: match="/product/*", match-dest=("document")
```

Dies verwendet `match-dest`, um sicherzustellen, dass das Wörterbuch nur für `document` Anfragen verwendet wird, sodass `<script src="/product/js/app.js">` Ressourcenanfragen zum Beispiel nicht übereinstimmen würden.

```http
Use-As-Dictionary: match="/product/*", match-dest=("document" "frame")
```

Dies würde es dem Wörterbuch ermöglichen, sowohl zu obersten Ebene gehörende Dokumente als auch iframes zu matchen.

### Id

```http
Use-As-Dictionary: match="/product/*", id="dictionary-12345"
```

Wenn `Use-As-Dictionary` eine `id` Direktive enthält, wie in diesem Beispiel, wird der `id` Wert im {{HTTPHeader("Dictionary-ID")}} Anforderungs-Header für Ressourcen enthalten sein, die dieses Wörterbuch verwenden können. Die Ressourcenanfrage wird auch den SHA-256-Hash des Wörterbuchs, umgeben von Doppelpunkten, im {{HTTPHeader("Available-Dictionary")}} Header enthalten:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

### Typ

```http
Use-As-Dictionary: match="/product/*", type="raw"
```

Derzeit wird nur `raw` unterstützt (was der Standard ist), sodass dies mehr für zukünftige Kompatibilität ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zum Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
