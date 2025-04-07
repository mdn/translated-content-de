---
title: Übertragung von Kompressionswörterbüchern
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: c7f9d9087cccd99d4e72cdf5488b7a4bc6963740
---

{{HTTPSidebar}}

Die **Übertragung von Kompressionswörterbüchern** ist eine Methode, ein gemeinsames Kompressionswörterbuch zu verwenden, um die Übertragungsgröße von HTTP-Antworten drastisch zu reduzieren.

## Übersicht

Kompressionsalgorithmen werden in HTTP verwendet, um die Größe von über das Netzwerk heruntergeladenen Ressourcen zu reduzieren, was die Bandbreitenkosten und die Ladezeit von Seiten verringert. Verlustfreie HTTP-Kompressionsalgorithmen funktionieren, indem sie Redundanzen in der Quelle finden: zum Beispiel Bereiche, in denen Text wie der String `"function"` wiederholt wird. Sie enthalten dann nur eine Kopie des redundanten Strings und ersetzen dessen Vorkommen in der Ressource durch Verweise auf diese Kopie. Da die Verweise kürzer sind als der String, ist die komprimierte Version kürzer.

> [!NOTE]
> Ein früherer Versuch dieser Technologie wurde SDCH (Shared Dictionary Compression for HTTP) genannt, war aber nie weit verbreitet und wurde 2017 entfernt. Die Übertragung von Kompressionswörterbüchern ist eine besser spezifizierte und robustere Implementierung mit breiterem industrieweitem Konsens.

Nehmen wir zum Beispiel dieses JavaScript:

```javascript
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

Dies könnte komprimiert werden, indem wiederholte Strings durch Verweise auf einen vorherigen Ort und die Anzahl der Zeichen ersetzt werden, zum Beispiel so:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In diesem Beispiel bezieht sich `[0:9]` auf das Kopieren der 9 Zeichen, beginnend beim Zeichen 0. Beachten Sie, dass dies ein vereinfachtes Beispiel ist, um das Konzept zu veranschaulichen, und die eigentlichen Algorithmen komplexer sind.

Clients können die Komprimierung nach dem Download rückgängig machen, um die ursprüngliche, unkomprimierte Ressource wiederherzustellen.

### Kompressionswörterbücher

Algorithmen wie {{Glossary("Brotli_compression", "Brotli-Kompression")}} und {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} erreichen noch größere Effizienz, indem sie die Verwendung von Wörterbüchern mit häufig vorkommenden Zeichenfolgen ermöglichen, sodass keine Kopien von ihnen in der komprimierten Ressource benötigt werden. Diese Algorithmen werden mit einem vordefinierten Standardwörterbuch geliefert, das beim Komprimieren von HTTP-Antworten verwendet wird.

Die Übertragung von Kompressionswörterbüchern baut darauf auf, indem sie Ihnen ermöglicht, ein eigenes Wörterbuch bereitzustellen, das speziell für eine bestimmte Ressourcengruppe anwendbar ist. Der Kompressionsalgorithmus kann dann darauf als Quelle von Bytes beim Komprimieren und Dekomprimieren der Ressource verweisen.

Wenn man annimmt, dass die Verweise aus dem vorherigen Beispiel in diesem gemeinsamen Wörterbuch enthalten sind, könnte dies weiter reduziert werden zu:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Wörterbuch kann entweder eine separate Ressource sein, die nur für die Übertragung von Kompressionswörterbüchern erforderlich ist, oder es kann eine Ressource sein, die die Website ohnehin benötigt.

Angenommen, Ihre Website verwendet eine JavaScript-Bibliothek. Normalerweise würden Sie eine spezifische Version der Bibliothek laden und könnten den Versionsnamen in den Namen der Bibliothek aufnehmen, wie `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, wird er eine Kopie der Bibliothek als Subressource abrufen.

Wenn Sie dann auf Version 2 der Bibliothek aktualisieren, bleibt wahrscheinlich der Großteil des Codes der Bibliothek gleich. Websites können die Größe des Downloads für `my-library.v2.js` erheblich reduzieren, indem sie dem Browser mitteilen, `my-library.v1.js` als Kompressionswörterbuch für `my-library.v2.js` zu verwenden. Dann müssen alle Strings, die zwischen Version 1 und Version 2 gemeinsam sind, nicht im Download für Version 2 enthalten sein, da der Browser sie bereits hat. Der Großteil der Downloadgröße von `my-library.v2.js` ist dann nur das Delta zwischen den zwei Versionen.

Die Übertragung von Kompressionswörterbüchern kann eine Größenreduzierung um eine Größenordnung mehr erreichen als die Kompression mit einem standardmäßig integrierten Wörterbuch: siehe [Beispiele zur Übertragung von Kompressionswörterbüchern](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) für einige praktische Ergebnisse.

## Wörterbuchformat

Ein Kompressionswörterbuch ist eine "Roh" Datei, die keinem bestimmten Format folgt und keinen spezifischen {{Glossary("MIME_type", "MIME-Typ")}} hat. Es sind reguläre Dateien, die verwendet werden können, um andere Dateien mit ähnlichem Inhalt zu komprimieren, und sie können Textdateien oder sogar binäre Dateien sein. Zum Beispiel sind [WASM](/de/docs/WebAssembly) Binärdateien große Ressourcen, die ebenfalls von Delta-Kompression profitieren können.

## Bestehende Ressource als Wörterbuch

Um eine Ressource als Wörterbuch zu verwenden, sollte der Server den {{HTTPHeader("Use-As-Dictionary")}} Header in die Antwort einschließen, die die Ressource bereitstellt:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt die Ressourcen an, die diese Ressource als Wörterbuch verwenden können: in diesem Fall alle Ressourcen, deren URLs dem gegebenen [Muster](/de/docs/Web/API/URL_Pattern_API) entsprechen.

Wenn später eine Ressource angefordert wird, die dem gegebenen Muster entspricht (zum Beispiel `app.v2.js`), wird die Anfrage einen SHA-256-Hash des verfügbaren Wörterbuches im {{HTTPHeader("Available-Dictionary")}} Header enthalten, zusammen mit `dcb` und/oder `dcz` Werten im {{HTTPHeader("Accept-Encoding")}} Header (für Delta-Kompression unter Verwendung von Brotli oder ZStandard, wie passend):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann dann mit einer entsprechend codierten Antwort mit der im {{HTTPHeader("Content-Encoding")}} Header angegebenen Inhaltscodierung antworten:

```http
Content-Encoding: dcb
```

Falls die Antwort im Cache gespeichert wird, muss sie einen {{HTTPHeader("Vary")}} Header einschließen, um zu verhindern, dass Caches Wörterbuch-komprimierte Ressourcen an Clients ausliefern, die diese nicht unterstützen, oder dass die Antwort mit dem falschen Wörterbuch komprimiert ausgeliefert wird:

```http
Vary: accept-encoding, available-dictionary
```

Ein optionales `id` kann ebenfalls im {{HTTPHeader("Use-As-Dictionary")}} Header bereitgestellt werden:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn dies bereitgestellt wird, wird der Wert in zukünftigen Anfragen im {{HTTPHeader("Dictionary-ID")}} Header gesendet:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

## Separates Wörterbuch

Ein HTML-Dokument kann dem Browser auch ein Kompressionswörterbuch bereitstellen, das keine Ressource ist, die der Browser ohnehin herunterlädt, über ein Element wie ein {{htmlelement("script")}} Tag. Es gibt zwei Methoden, dies zu tun:

- Einschließen eines {{HTMLElement("link")}} Elements, dessen [`rel`](/de/docs/Web/HTML/Attributes/rel) Attribut auf `compression-dictionary` gesetzt ist:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Referenzieren des Wörterbuchs mit dem {{HTTPHeader("Link")}} Header:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

Dieses Wörterbuch wird dann vom Browser während der Leerlaufzeit heruntergeladen, und diese Antwort muss den {{HTTPHeader("Use-As-Dictionary")}} Header enthalten:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Ab hier ist der Prozess ähnlich wie beim vorherigen Beispiel, wenn ein passender Ressource angefordert wird.

## Erstellen von Wörterbuch-komprimierten Antworten

Wörterbuch-komprimierte Antworten können entweder die Brotli- oder ZStandard-Algorithmen verwenden, mit zwei zusätzlichen Anforderungen: sie müssen auch einen magischen Header und einen eingebetteten Wörterbuch-Hash enthalten.

Wörterbuch-komprimierte Ressourcen können dynamisch erstellt werden, aber für statische Ressourcen kann es besser sein, diese im Voraus zur Build-Zeit zu erstellen. Wenn frühere Versionen als Wörterbücher verwendet werden, erfordert dies die Entscheidung, wie viele Delta-komprimierte Versionen erstellt werden sollen - nur für die letzte Version oder für die letzten X Versionen für einen bestimmten Wert von X.

Angenommen, eine Wörterbuchdatei mit dem Namen `dictionary.text` und eine zu komprimierende Datei mit dem Namen `data.text`, wird der folgende Bash-Befehl die Datei mit Brotli komprimieren und eine komprimierte Datei mit dem Namen `data.txt.dcb` erzeugen:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Vorausgesetzt dieselben Eingabedateien, wird der folgende Bash-Befehl die Datei mit ZStandard komprimieren und eine komprimierte Datei mit dem Namen `data.txt.dcz` erzeugen:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Beachten Sie, dass Sie {{Glossary("OpenSSL", "OpenSSL")}} lokal installiert haben müssen, sowie Brotli oder ZStandard.

## Einschränkungen

Kompressionsalgorithmen sind einem Sicherheitsrisiko ausgesetzt, weshalb es eine Anzahl von Einschränkungen für die Übertragung von Kompressionswörterbüchern gibt, einschließlich:

- Wörterbücher müssen mit der Ressource, die das Wörterbuch verwendet, gleicher Herkunft sein.
- Wörterbuch-komprimierte Ressourcen müssen gleiche Herkunft mit dem Dokumentursprung haben oder den [CORS](/de/docs/Web/HTTP/Guides/CORS)-Regeln folgen und daher mit dem [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut angefordert und mit einem geeigneten {{HTTPHeader("Access-Control-Allow-Origin")}} Header bereitgestellt werden.
- Wörterbücher unterliegen der üblichen HTTP-Cache-Partitionierung und können daher nicht zwischen Ursprüngen geteilt werden, selbst wenn sie die gleichen Ressourcen herunterladen. Das Wörterbuch muss für jeden Ursprung erneut heruntergeladen werden.

Zusätzlich könnten Wörterbücher selbst zu Tracking-Vektoren werden, sodass Browser diese Funktion möglicherweise einschränken, wenn Cookies deaktiviert sind oder andere zusätzliche Datenschutzmaßnahmen aktiviert sind.

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
- [Entwurfsspezifikation](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
- [Ressourcen für die Übertragung von Kompressionswörterbüchern](https://use-as-dictionary.com/)
