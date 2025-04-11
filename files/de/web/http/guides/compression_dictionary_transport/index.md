---
title: Transport von Komprimierungswörterbüchern
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}{{SeeCompatTable}}

**Transport von Komprimierungswörterbüchern** ist eine Methode, um mit einem gemeinsamen Komprimierungswörterbuch die Übertragungsgröße von HTTP-Antworten erheblich zu reduzieren.

## Überblick

Komprimierungsalgorithmen werden in HTTP verwendet, um die Größe von über das Netzwerk heruntergeladenen Ressourcen zu verringern, was die Bandbreitenkosten und die Ladezeit von Seiten reduziert. Verlustfreie HTTP-Komprimierungsalgorithmen arbeiten, indem sie Redundanz in der Quelle finden: Zum Beispiel Stellen, an denen Text wie die Zeichenkette `"function"` wiederholt wird. Sie enthalten dann nur eine Kopie der redundanten Zeichenkette und ersetzen deren Vorkommen in der Ressource durch Verweise auf diese Kopie. Da die Verweise kürzer als die Zeichenkette sind, ist die komprimierte Version kürzer.

> [!NOTE]
> Ein früherer Versuch mit dieser Technologie wurde SDCH (Shared Dictionary Compression for HTTP) genannt, fand jedoch nie breite Unterstützung und wurde 2017 entfernt. Der Transport von Komprimierungswörterbüchern ist eine besser spezifizierte und robustere Implementierung mit breiterem Konsens in der Industrie.

Beispielsweise nehmen wir dieses JavaScript:

```js
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

Dies könnte durch Ersetzen von wiederholten Zeichenfolgen mit Verweisen auf eine vorherige Position und Anzahl von Zeichen komprimiert werden, so:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In diesem Beispiel bezieht sich `[0:9]` darauf, die 9 Zeichen ab Zeichen 0 zu kopieren. Beachten Sie, dass dies ein vereinfachtes Beispiel ist, um das Konzept zu demonstrieren, und die tatsächlichen Algorithmen komplexer sind als dies.

Clients können die Komprimierung nach dem Herunterladen umkehren, um die ursprüngliche, unkomprimierte Ressource wiederherzustellen.

### Komprimierungswörterbücher

Algorithmen wie {{Glossary("Brotli_compression", "Brotli-Komprimierung")}} und {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}} erreichen noch größere Effizienz, indem sie die Verwendung von Wörterbüchern mit häufig vorkommenden Zeichenfolgen erlauben, sodass sie keine Kopien davon in der komprimierten Ressource benötigen. Diese Algorithmen werden mit einem vordefinierten Standardwörterbuch ausgeliefert, das verwendet wird, wenn HTTP-Antworten komprimiert werden.

Der Transport von Komprimierungswörterbüchern baut darauf auf, indem er Ihnen erlaubt, Ihr eigenes Wörterbuch bereitzustellen, das besonders für einen bestimmten Satz von Ressourcen anwendbar ist. Der Komprimierungsalgorithmus kann es dann als Quelle von Bytes verwenden, wenn er die Ressource komprimiert und dekomprimiert.

Angenommen, die Verweise aus dem vorherigen Beispiel sind in diesem gemeinsamen Wörterbuch enthalten, könnte dies weiter reduziert werden zu:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Wörterbuch kann entweder eine separate Ressource sein, die nur für den Transport von Komprimierungswörterbüchern benötigt wird, oder es kann eine Ressource sein, die die Website ohnehin benötigt.

Angenommen, Ihre Website verwendet eine JavaScript-Bibliothek. Sie würden typischerweise eine bestimmte Version der Bibliothek laden und könnten den Versionsnamen im Namen der Bibliothek einschließen, wie `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, wird er eine Kopie der Bibliothek als Subressource abrufen.

Wenn Sie dann auf Version 2 der Bibliothek aktualisieren, wird sich der größte Teil des Bibliothekscodes wahrscheinlich nicht geändert haben. Websites können die Größe des Downloads von `my-library.v2.js` erheblich reduzieren, indem sie dem Browser mitteilen, `my-library.v1.js` als Komprimierungswörterbuch für `my-library.v2.js` zu verwenden. Dann müssen alle Zeichenfolgen, die zwischen v1 und v2 gemeinsam sind, nicht im Download für v2 enthalten sein, weil der Browser sie bereits hat. Der größte Teil der Downloadgröße von `my-library.v2.js` ist dann nur das Delta zwischen den beiden Versionen.

Der Transport von Komprimierungswörterbüchern kann eine Größenordnung mehr Komprimierung erreichen als die Komprimierung mit einem eingebauten Standardwörterbuch: siehe [Beispiele für den Transport von Komprimierungswörterbüchern](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) für einige reale Ergebnisse.

## Wörterbuchformat

Ein Komprimierungswörterbuch ist eine "rohe" Datei, die keinem speziellen Format folgt und keinen speziellen {{Glossary("MIME_type", "MIME-Typ")}} hat. Es sind reguläre Dateien, die verwendet werden können, um andere Dateien mit ähnlichem Inhalt zu komprimieren, und sie können Textdateien oder sogar binär sein. Beispielsweise sind [WASM](/de/docs/WebAssembly) Binärdateien große Ressourcen, die ebenfalls von Delta-Komprimierung profitieren können.

## Vorhandene Ressource als Wörterbuch

Um eine Ressource als Wörterbuch zu verwenden, sollte der Server den {{HTTPHeader("Use-As-Dictionary")}} Header in der Antwort einschließen, die die Ressource bereitstellt:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt die Ressourcen an, welche diese Ressource als Wörterbuch verwenden können: in diesem Fall alle Ressourcen, deren URLs dem gegebenen [Muster](/de/docs/Web/API/URL_Pattern_API) entsprechen.

Wenn später eine Ressource angefordert wird, die dem angegebenen Muster entspricht (zum Beispiel `app.v2.js`), enthält die Anfrage einen SHA-256 Hash des verfügbaren Wörterbuchs im {{HTTPHeader("Available-Dictionary")}} Header, zusammen mit `dcb` und/oder `dcz` Werten im {{HTTPHeader("Accept-Encoding")}} Header (für Delta-Komprimierung mit Brotli oder ZStandard wie passend):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann dann mit einer entsprechend kodierten Antwort mit der im {{HTTPHeader("Content-Encoding")}} Header angegebenen Inhaltskodierung antworten:

```http
Content-Encoding: dcb
```

Wenn die Antwort gecached werden kann, muss sie einen {{HTTPHeader("Vary")}} Header enthalten, um zu verhindern, dass Caches Wörterbuch-komprimierte Ressourcen an Clients ausliefern, die sie nicht unterstützen, oder die Antwort mit dem falschen Wörterbuch komprimiert ausliefern:

```http
Vary: accept-encoding, available-dictionary
```

Eine optionale `id` kann ebenfalls im {{HTTPHeader("Use-As-Dictionary")}} Header bereitgestellt werden, um dem Server das Auffinden der Wörterbuchdatei zu erleichtern, wenn sie das Wörterbuch nicht nach dem Hash speichern:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn dies bereitgestellt wird, wird der Wert in zukünftigen Anfragen im {{HTTPHeader("Dictionary-ID")}} Header gesendet:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss trotzdem den Hash aus dem `Available-Dictionary` Header prüfen — die `Dictionary-ID` ist zusätzliche Information für den Server zur Identifizierung des Wörterbuchs, ersetzt aber nicht die Notwendigkeit des `Available-Dictionary` Headers.

## Separates Wörterbuch

Ein HTML-Dokument kann dem Browser auch ein Komprimierungswörterbuch bereitstellen, das keine Ressource ist, die der Browser ohnehin herunterlädt, über ein Element wie ein {{htmlelement("script")}}-Tag. Es gibt zwei Methoden, um dies zu tun:

- Einschließen eines {{HTMLElement("link")}} Elements, dessen [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) Attribut auf `compression-dictionary` gesetzt ist:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Verweisen auf das Wörterbuch unter Verwendung des {{HTTPHeader("Link")}} Headers:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

Dieses Wörterbuch wird dann vom Browser während Leerlaufzeiten heruntergeladen, und diese Antwort muss den {{HTTPHeader("Use-As-Dictionary")}} Header enthalten:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Von hier aus ähnelt der Prozess dem vorherigen Beispiel, wenn eine passende Ressource angefordert wird.

## Erstellen von Wörterbuch-komprimierten Antworten

Wörterbuch-komprimierte Antworten können entweder die Brotli- oder ZStandard-Algorithmen verwenden, mit zwei zusätzlichen Anforderungen: Sie müssen auch einen Magie-Header und einen eingebetteten Wörterbuch-Hash enthalten.

Wörterbuch-komprimierte Ressourcen können dynamisch erstellt werden, aber für statische Ressourcen kann es besser sein, diese im Voraus während der Build-Zeit zu erstellen. Bei der Verwendung vorheriger Versionen als Wörterbücher erfordert dies die Entscheidung, wie viele Delta-komprimierte Versionen erstellt werden sollen — nur für die letzte Version oder für die letzten X Versionen für einen bestimmten Wert von X.

Angenommen, eine Wörterbuchdatei mit dem Namen `dictionary.text` und eine zu komprimierende Datei mit dem Namen `data.text`, wird der folgende Bash-Befehl die Datei mit Brotli komprimieren und eine komprimierte Datei mit dem Namen `data.txt.dcb` erzeugen:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Mit den gleichen Eingabedateien wird der folgende Bash-Befehl die Datei mit ZStandard komprimieren und eine komprimierte Datei mit dem Namen `data.txt.dcz` erzeugen:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Beachten Sie, dass Sie {{Glossary("OpenSSL", "OpenSSL")}} lokal installiert haben müssen sowie Brotli oder ZStandard.

## Einschränkungen

Komprimierungsalgorithmen sind anfällig für Sicherheitsangriffe, daher gibt es eine Reihe von Einschränkungen für den Transport von Komprimierungswörterbüchern, einschließlich:

- Wörterbücher müssen gleiche Herkunft haben wie die Ressource, die das Wörterbuch verwendet.
- Wörterbuch-komprimierte Ressourcen müssen gleiche Herkunft haben wie der Dokumentenursprung oder den [CORS](/de/docs/Web/HTTP/Guides/CORS) Regeln folgen und daher mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut angefordert und mit einem entsprechenden {{HTTPHeader("Access-Control-Allow-Origin")}} Header serviert werden.
- Wörterbücher unterliegen der üblichen HTTP-Cache-Partitionierung und können daher nicht zwischen Ursprüngen geteilt werden, selbst wenn sie die gleichen Ressourcen herunterladen. Das Wörterbuch muss für jeden Ursprung erneut heruntergeladen werden.

Zusätzlich könnten Wörterbücher selbst zu Tracking-Vektoren werden, daher könnten Browser diese Funktion einschränken, wenn Cookies deaktiviert sind oder zusätzliche Datenschutzmaßnahmen aktiviert sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Komprimierung")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}}
- [&lt;link rel=&quot;compression-dictionary&quot;&gt;](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Entwurfsspezifikation](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
- [Ressourcen für den Transport von Komprimierungswörterbüchern](https://use-as-dictionary.com/)
