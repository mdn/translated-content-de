---
title: Use-As-Dictionary
slug: Web/HTTP/Reference/Headers/Use-As-Dictionary
l10n:
  sourceCommit: ae1d2366289e37ed587e24c2a02e4ec2fda6812c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Use-As-Dictionary`** Antwort-Header listet die Übereinstimmungskriterien auf, nach denen das {{Glossary("Compression_Dictionary_Transport", "Kompressionswörterbuch-Transport")}} Wörterbuch für zukünftige Anfragen verwendet werden kann.

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
  - : Eine durch Leerzeichen getrennte Liste von Zeichenfolgen, wobei jede Zeichenfolge in Anführungszeichen steht und der gesamte Wert in Klammern eingeschlossen ist. Diese Liste gibt die [Fetch-Anfrageziele](/de/docs/Web/API/Request/destination) an, die Anfragen erfüllen müssen, um dieses Wörterbuch zu verwenden.
- `id`
  - : Ein Zeichenfolgenwert, der eine Serverkennung für das Wörterbuch spezifiziert. Dieser ID-Wert wird dann im {{HTTPHeader("Dictionary-ID")}} Anfrage-Header hinzugefügt, wenn der Browser eine Ressource anfordert, die dieses Wörterbuch verwenden kann.
- `type`
  - : Ein Zeichenfolgenwert, der das Dateiformat des bereitgestellten Wörterbuchs beschreibt. Derzeit wird nur `raw` unterstützt (was der Standard ist), dies dient daher mehr zur zukünftigen Kompatibilität.

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

Dies verwendet ein Platzhalterzeichen, um mehrere Versionen einer Datei zu erfassen.

### Ziele

```http
Use-As-Dictionary: match="/product/*", match-dest=("document")
```

Dies verwendet `match-dest`, um sicherzustellen, dass das Wörterbuch nur für `document`-Anfragen verwendet wird, sodass `<script src="/product/js/app.js">` Ressourcenanforderungen zum Beispiel nicht übereinstimmen würden.

```http
Use-As-Dictionary: match="/product/*", match-dest=("document" "frame")
```

Dies würde es ermöglichen, dass das Wörterbuch sowohl mit obersten Dokumenten als auch mit iframes übereinstimmt.

### Id

```http
Use-As-Dictionary: match="/product/*", id="dictionary-12345"
```

Wenn `Use-As-Dictionary` eine `id` Direktive enthält, wie in diesem Beispiel, wird der `id` Wert im {{HTTPHeader("Dictionary-ID")}} Anfrage-Header für Ressourcen enthalten, die dieses Wörterbuch verwenden können. Die Ressourcenanfrage wird auch den SHA-256-Hash des Wörterbuchs, umgeben von Doppelpunkten, im {{HTTPHeader("Available-Dictionary")}} Header enthalten:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss immer noch den Hash aus dem `Available-Dictionary` Header überprüfen — die `Dictionary-ID` ist zusätzliche Information für den Server, um das Wörterbuch zu identifizieren, ersetzt aber nicht die Notwendigkeit für den `Available-Dictionary` Header.

### Typ

```http
Use-As-Dictionary: match="/product/*", type="raw"
```

Derzeit wird nur `raw` unterstützt (was der Standard ist), daher dient dies mehr zur zukünftigen Kompatibilität.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zum Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
