---
title: Use-As-Dictionary
slug: Web/HTTP/Reference/Headers/Use-As-Dictionary
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Use-As-Dictionary`** Antwort-Header listet die passenden Kriterien auf, für die das {{Glossary("Compression_Dictionary_Transport", "Compression Dictionary Transport")}} Wörterbuch bei zukünftigen Anfragen verwendet werden kann.

Siehe den [Leitfaden zur Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) für weitere Informationen.

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
  - : Ein Zeichenfolgenwert, der ein [URL-Muster](/de/docs/Web/API/URL_Pattern_API) enthält: nur Ressourcen, deren URLs diesem Muster entsprechen, dürfen diese Ressource als Wörterbuch verwenden.
- `match-dest`
  - : Eine durch Leerzeichen getrennte Liste von Zeichenfolgen, wobei jede Zeichenfolge in Anführungszeichen und der gesamte Wert in Klammern eingeschlossen ist. Diese Liste gibt die [Ziele der Fetch-Anfragen](/de/docs/Web/API/Request/destination) an, die die Anfragen erfüllen müssen, um dieses Wörterbuch zu verwenden.
- `id`
  - : Ein Zeichenfolgenwert, der eine Serverkennung für das Wörterbuch angibt. Dieser ID-Wert wird dann im {{HTTPHeader("Dictionary-ID")}} Anforderungs-Header hinzugefügt, wenn der Browser eine Ressource anfordert, die dieses Wörterbuch verwenden kann.
- `type`
  - : Ein Zeichenfolgenwert, der das Dateiformat des bereitgestellten Wörterbuchs beschreibt. Derzeit wird nur `raw` unterstützt (was der Standard ist), also ist dies mehr für zukünftige Kompatibilität gedacht.

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

Dies verwendet ein Platzhalterzeichen, um mehrere Versionen einer Datei zuzuordnen.

### Ziele

```http
Use-As-Dictionary: match="/product/*", match-dest=("document")
```

Dies verwendet `match-dest`, um sicherzustellen, dass das Wörterbuch nur für `document` Anfragen verwendet wird. Zum Beispiel würden `<script src="/product/js/app.js">` Anforderungsressourcen nicht übereinstimmen.

```http
Use-As-Dictionary: match="/product/*", match-dest=("document" "frame")
```

Dies würde es dem Wörterbuch erlauben, sowohl auf oberster Ebene Dokumente als auch iframes zuzuordnen.

### Id

```http
Use-As-Dictionary: match="/product/*", id="dictionary-12345"
```

Wenn `Use-As-Dictionary` eine `id` Direktive enthält, wie in diesem Beispiel, wird der `id` Wert im {{HTTPHeader("Dictionary-ID")}} Anforderungs-Header für Ressourcen enthalten sein, die dieses Wörterbuch verwenden können. Die Anforderungsressource wird auch die SHA-256 Hash des Wörterbuchs, umgeben von Doppelpunkten im {{HTTPHeader("Available-Dictionary")}} Header enthalten:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss dennoch den Hash aus dem `Available-Dictionary` Header überprüfen — die `Dictionary-ID` ist zusätzliche Information für den Server zur Identifikation des Wörterbuchs, ersetzt aber nicht die Notwendigkeit für den `Available-Dictionary` Header.

### Typ

```http
Use-As-Dictionary: match="/product/*", type="raw"
```

Derzeit wird nur `raw` unterstützt (was der Standard ist), also ist dies mehr für zukünftige Kompatibilität gedacht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zur Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
