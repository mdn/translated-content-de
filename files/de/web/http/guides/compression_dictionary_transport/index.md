---
title: Übertragung von Kompressionswörterbüchern
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
---

{{HTTPSidebar}}

**Übertragung von Kompressionswörterbüchern** ist eine Methode, um mithilfe eines gemeinsamen Kompressionswörterbuchs die Übertragungsgröße von HTTP-Antworten erheblich zu reduzieren.

## Übersicht

Kompressionsalgorithmen werden in HTTP verwendet, um die Größe der über das Netzwerk heruntergeladenen Ressourcen zu reduzieren, wodurch die Bandbreitenkosten und die Ladezeit von Seiten verringert werden. Verlustfreie HTTP-Kompressionsalgorithmen arbeiten, indem sie Redundanzen in der Quelle finden: zum Beispiel Stellen, an denen Text wie der String `"function"` wiederholt wird. Dann wird nur eine Kopie des redundanten Strings aufgenommen, und dessen Vorkommen in der Ressource werden durch Verweise auf diese Kopie ersetzt. Da die Verweise kürzer sind als der String, ist die komprimierte Version kürzer.

> [!NOTE]
> Ein früherer Versuch in dieser Technologie wurde SDCH (Shared Dictionary Compression for HTTP) genannt, wurde jedoch nie weit unterstützt und 2017 entfernt. Die Übertragung von Kompressionswörterbüchern ist eine besser spezifizierte und robustere Implementierung mit breiterem Konsens in der Industrie.

Zum Beispiel nehmen Sie dieses JavaScript:

```js
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

Dies könnte komprimiert werden, indem wiederholte Zeichenfolgen durch Verweise auf eine frühere Position und Anzahl von Zeichen ersetzt werden, wie folgt:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In diesem Beispiel bezieht sich `[0:9]` auf das Kopieren der 9 Zeichen, beginnend ab Zeichen 0. Beachten Sie, dass dies ein vereinfachtes Beispiel zur Demonstration des Konzepts ist und die tatsächlichen Algorithmen komplexer sind.

Clients können dann die Kompression nach dem Download rückgängig machen, um die ursprüngliche, unkomprimierte Ressource wiederherzustellen.

### Kompressionswörterbücher

Algorithmen wie die {{Glossary("Brotli_compression", "Brotli-Kompression")}} und {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} erreichen sogar noch höhere Effizienz, indem sie die Verwendung von Wörterbüchern mit häufig auftretenden Zeichenfolgen ermöglichen, sodass keine Kopien von ihnen in der komprimierten Ressource benötigt werden. Diese Algorithmen werden mit einem vordefinierten Standardwörterbuch geliefert, das beim Komprimieren von HTTP-Antworten verwendet wird.

Die Übertragung von Kompressionswörterbüchern baut darauf auf, indem sie es Ihnen ermöglicht, Ihr eigenes, speziell auf einen bestimmten Satz von Ressourcen zugeschnittenes Wörterbuch bereitzustellen. Der Kompressionsalgorithmus kann dann darauf verweisen, um Bytes während der Komprimierung und Dekomprimierung der Ressource zu nutzen.

Angenommen, die Verweise aus dem vorherigen Beispiel sind in diesem gemeinsamen Wörterbuch enthalten, könnte dies weiter reduziert werden zu:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Wörterbuch kann entweder eine separate Ressource sein, die nur für die Übertragung von Kompressionswörterbüchern benötigt wird, oder eine Ressource, die die Website sowieso benötigt.

Angenommen, Ihre Website verwendet eine JavaScript-Bibliothek. Sie würden typischerweise eine bestimmte Version der Bibliothek laden und könnten den Versionsnamen im Namen der Bibliothek einschließen, wie `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, wird eine Kopie der Bibliothek als Teilressource abgerufen.

Wenn Sie dann auf v2 der Bibliothek aktualisieren, wird wahrscheinlich der Großteil des Codes der Bibliothek gleich geblieben sein. Websites können die Download-Größe von `my-library.v2.js` erheblich reduzieren, indem sie dem Browser mitteilen, `my-library.v1.js` als Kompressionswörterbuch für `my-library.v2.js` zu verwenden. Dann müssen alle Strings, die zwischen v1 und v2 gemeinsam sind, nicht im Download für v2 enthalten sein, da der Browser sie bereits hat. Der Großteil der Download-Größe von `my-library.v2.js` ist dann nur das Delta zwischen den beiden Versionen.

Die Übertragung von Kompressionswörterbüchern kann eine Größenordnung mehr Kompression erreichen als die Kompression mithilfe eines eingebauten Standardwörterbuchs: siehe [Beispiele für die Übertragung von Kompressionswörterbüchern](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) für einige Ergebnisse aus der Praxis.

## Wörterbuchformat

Ein Kompressionswörterbuch ist eine "rohe" Datei, die keinem bestimmten Format folgt und keinen spezifischen {{Glossary("MIME_type", "MIME-Typ")}} hat. Es sind reguläre Dateien, die verwendet werden können, um andere Dateien mit ähnlichem Inhalt zu komprimieren, und können daher Textdateien oder sogar binär sein. Zum Beispiel sind [WASM](/de/docs/WebAssembly)-Binärdateien große Ressourcen, die ebenfalls von der Delta-Kompression profitieren können.

## Vorhandene Ressource als Wörterbuch

Um eine Ressource als Wörterbuch zu verwenden, sollte der Server den Header {{HTTPHeader("Use-As-Dictionary")}} in die Antwort einfügen, die die Ressource bereitstellt:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt die Ressourcen an, die diese Ressource als Wörterbuch verwenden können: in diesem Fall alle Ressourcen, deren URLs dem angegebenen [Muster](/de/docs/Web/API/URL_Pattern_API) entsprechen.

Wenn später eine Ressource angefordert wird, die dem gegebenen Muster entspricht (zum Beispiel `app.v2.js`), enthält die Anfrage einen SHA-256-Hash des verfügbaren Wörterbuchs im Header {{HTTPHeader("Available-Dictionary")}}, zusammen mit `dcb`- und/oder `dcz`-Werten im Header {{HTTPHeader("Accept-Encoding")}} (für die Delta-Kompression mit Brotli oder ZStandard nach Bedarf):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann dann mit einer entsprechend codierten Antwort mit der im Header {{HTTPHeader("Content-Encoding")}} angegebenen Inhaltscodierung antworten:

```http
Content-Encoding: dcb
```

Wenn die Antwort zwischenspeicherbar ist, muss sie einen Header {{HTTPHeader("Vary")}} enthalten, um zu verhindern, dass Caches Ressourcen, die mit Wörterbuch komprimiert wurden, an Clients liefern, die sie nicht unterstützen oder die Antwort mit dem falschen Wörterbuch komprimiert liefern:

```http
Vary: accept-encoding, available-dictionary
```

Eine optionale `id` kann ebenfalls im Header {{HTTPHeader("Use-As-Dictionary")}} bereitgestellt werden:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn dies bereitgestellt wird, wird der Wert in zukünftigen Anfragen im Header {{HTTPHeader("Dictionary-ID")}} gesendet:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

## Separates Wörterbuch

Ein HTML-Dokument kann dem Browser auch ein Kompressionswörterbuch bereitstellen, das keine Ressource ist, die der Browser sowieso herunterlädt, über ein Element wie ein {{htmlelement("script")}}-Tag. Dort gibt es zwei Methoden:

- Ein {{HTMLElement("link")}}-Element einschließen, dessen [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut auf `compression-dictionary` gesetzt ist:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Das Wörterbuch mithilfe des Headers {{HTTPHeader("Link")}} referenzieren:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

Dieses Wörterbuch wird dann vom Browser während der Leerlaufzeit heruntergeladen und die Antwort muss den Header {{HTTPHeader("Use-As-Dictionary")}} enthalten:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Von hier aus ähnelt der Prozess dem vorherigen Beispiel, wenn eine übereinstimmende Ressourcen angefordert wird.

## Erstellen von Wörterbuch-komprimierten Antworten

Wörterbuch-komprimierte Antworten können entweder die Brotli- oder die ZStandard-Algorithmen verwenden, mit zwei zusätzlichen Anforderungen: sie müssen auch einen Magic-Header und einen eingebetteten Wörterbuch-Hash enthalten.

Wörterbuch-komprimierte Ressourcen können dynamisch erstellt werden, aber für statische Ressourcen kann es besser sein, diese im Voraus zur Build-Zeit zu erstellen. Bei der Verwendung vorheriger Versionen als Wörterbücher wird dies erfordern, zu entscheiden, wie viele Delta-komprimierte Versionen erstellt werden sollen — nur für die letzte Version oder für die letzten X Versionen für einen gewissen Wert von X.

Angesichts einer Wörterbuchdatei namens `dictionary.text` und einer zu komprimierenden Datei namens `data.text`, wird der folgende Bash-Befehl die Datei mithilfe von Brotli komprimieren und eine komprimierte Datei namens `data.txt.dcb` erstellen:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Für dieselben Eingabedateien wird der folgende Bash-Befehl die Datei mithilfe von ZStandard komprimieren und eine komprimierte Datei namens `data.txt.dcz` erstellen:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Beachten Sie, dass Sie {{Glossary("OpenSSL", "OpenSSL")}} lokal installiert haben müssen, ebenso wie Brotli oder ZStandard.

## Einschränkungen

Kompressionsalgorithmen sind anfällig für Sicherheitsangriffe, daher gibt es eine Reihe von Einschränkungen für die Übertragung von Kompressionswörterbüchern, einschließlich:

- Wörterbücher müssen gleicher Herkunft wie die Ressource sein, die das Wörterbuch verwendet.
- Wörterbuch-komprimierte Ressourcen müssen gleicher Herkunft wie der Dokumentursprung sein oder den [CORS](/de/docs/Web/HTTP/Guides/CORS)-Regeln folgen und daher mit dem Attribut [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) angefordert und mit einem geeigneten Header {{HTTPHeader("Access-Control-Allow-Origin")}} bereitgestellt werden.
- Wörterbücher unterliegen der üblichen HTTP-Cache-Partitionierung und können daher nicht zwischen Ursprüngen freigegeben werden, selbst wenn sie dieselben Ressourcen herunterladen. Das Wörterbuch muss für jeden Ursprung erneut heruntergeladen werden.

Zusätzlich könnten Wörterbücher selbst zu Trackingvektoren werden, sodass Browser diese Funktion möglicherweise einschränken, wenn Cookies deaktiviert sind oder wenn andere zusätzliche Datenschutzmaßnahmen aktiviert sind.

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
- [&lt;link rel=&quot;compression-dictionary&quot;&gt;](/de/docs/Web/HTML/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Entwurfspezifikation](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
- [Ressourcen für die Übertragung von Kompressionswörterbüchern](https://use-as-dictionary.com/)
