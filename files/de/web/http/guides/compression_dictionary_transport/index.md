---
title: Transport von Komprimierungswörterbüchern
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: ec323a3ecac1d9f607e2c32d425985e859a39dc8
---

{{HTTPSidebar}}

**Transport von Komprimierungswörterbüchern** ist eine Methode, ein gemeinsames Komprimierungswörterbuch zu verwenden, um die Transportgröße von HTTP-Antworten erheblich zu reduzieren.

## Übersicht

Komprimierungsalgorithmen werden in HTTP verwendet, um die Größe von Ressourcen, die über das Netzwerk heruntergeladen werden, zu reduzieren und so die Bandbreitenkosten und die Zeit zum Laden der Seiten zu verringern. Verlustfreie HTTP-Komprimierungsalgorithmen arbeiten, indem sie Redundanzen in der Quelle finden: Zum Beispiel Stellen, an denen Text wie die Zeichenfolge `"function"` wiederholt wird. Sie enthalten dann nur eine Kopie der redundanten Zeichenfolge und ersetzen deren Vorkommen in der Ressource durch Verweise auf diese Kopie. Da die Verweise kürzer sind als die Zeichenfolge, ist die komprimierte Version kürzer.

> [!NOTE]
> Ein früherer Versuch dieser Technologie wurde SDCH (Shared Dictionary Compression for HTTP) genannt, wurde jedoch nie weitgehend unterstützt und 2017 entfernt. Der Transport von Komprimierungswörterbüchern ist eine besser spezifizierte und robustere Implementierung mit einem breiteren Konsens in der Industrie.

Nehmen wir zum Beispiel diesen JavaScript-Code:

```javascript
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

Dieser könnte komprimiert werden, indem wiederholte Zeichenfolgen durch Verweise auf einen vorherigen Ort und die Anzahl der Zeichen ersetzt werden, wie folgt:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In diesem Beispiel bezieht sich `[0:9]` auf das Kopieren der 9 Zeichen ab dem Zeichen an Position 0. Beachten Sie, dass dies ein vereinfachtes Beispiel zur Veranschaulichung des Konzepts ist und die tatsächlichen Algorithmen komplexer sind als dies.

Clients können dann die Komprimierung nach dem Download rückgängig machen, um die ursprüngliche, unkomprimierte Ressource wiederherzustellen.

### Komprimierungswörterbücher

Algorithmen wie {{Glossary("Brotli_compression", "Brotli-Komprimierung")}} und {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}} erreichen sogar noch größere Effizienz, indem sie die Verwendung von Wörterbüchern mit häufig auftretenden Zeichenfolgen ermöglichen, sodass Sie keine Kopien davon in der komprimierten Ressource benötigen. Diese Algorithmen werden mit einem vordefinierten Standardwörterbuch geliefert, das verwendet wird, um HTTP-Antworten zu komprimieren.

Transport von Komprimierungswörterbüchern baut darauf auf, indem er Ihnen ermöglicht, Ihr eigenes Wörterbuch bereitzustellen, das besonders auf eine bestimmte Menge von Ressourcen anwendbar ist. Der Komprimierungsalgorithmus kann es dann als Quelle von Bytes beim Komprimieren und Dekomprimieren der Ressource verwenden.

Angenommen, die Verweise aus dem vorherigen Beispiel sind in diesem gemeinsamen Wörterbuch enthalten, könnte dies weiter reduziert werden auf:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Wörterbuch kann entweder eine separate Ressource sein, die nur für den Transport von Komprimierungswörterbüchern erforderlich ist, oder es kann eine Ressource sein, die die Website ohnehin benötigt.

Wenn Ihre Website zum Beispiel eine JavaScript-Bibliothek verwendet. Sie würden typischerweise eine bestimmte Version der Bibliothek laden und könnten den Versionsnamen im Namen der Bibliothek einschließen, wie `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, wird er eine Kopie der Bibliothek als Subressource abrufen.

Falls Sie dann auf v2 der Bibliothek aktualisieren, wird der größte Teil des Codes der Bibliothek wahrscheinlich gleich geblieben sein. Websites können die Größe des Downloads von `my-library.v2.js` erheblich reduzieren, indem sie dem Browser mitteilen, `my-library.v1.js` als Komprimierungswörterbuch für `my-library.v2.js` zu verwenden. Dann müssen alle Zeichenfolgen, die zwischen v1 und v2 gemeinsam sind, nicht im Download für v2 enthalten sein, da der Browser sie bereits hat. Der Großteil der Downloadgröße von `my-library.v2.js` ist dann nur das Delta zwischen den beiden Versionen.

Transport von Komprimierungswörterbüchern kann eine Größenordnung mehr Komprimierung als die Komprimierung mit einem Standard-integrierten Wörterbuch erreichen: siehe [Beispiele für den Transport von Komprimierungswörterbüchern](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) für einige reale Ergebnisse.

## Wörterbuchformat

Ein Komprimierungswörterbuch ist eine "rohe" Datei, die keinem bestimmten Format folgt und keinen spezifischen {{Glossary("MIME_type", "MIME-Typ")}} hat. Es handelt sich um reguläre Dateien, die verwendet werden können, um andere Dateien mit ähnlichem Inhalt zu komprimieren, und können so Textdateien oder sogar Binärdateien sein. Zum Beispiel sind [WASM](/de/docs/WebAssembly) Binärdateien große Ressourcen, die auch von der Delta-Komprimierung profitieren können.

## Bestehende Ressource als Wörterbuch nutzen

Um eine Ressource als Wörterbuch zu verwenden, sollte der Server den {{HTTPHeader("Use-As-Dictionary")}} Header in die Antwort einschließen, die die Ressource bereitstellt:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt die Ressourcen an, die diese Ressource als Wörterbuch verwenden können: In diesem Fall sind das alle Ressourcen, deren URLs mit dem gegebenen [Muster](/de/docs/Web/API/URL_Pattern_API) übereinstimmen.

Wenn später eine Ressource angefordert wird, die mit dem gegebenen Muster übereinstimmt (zum Beispiel `app.v2.js`), wird die Anfrage einen SHA-256-Hash des verfügbaren Wörterbuchs im {{HTTPHeader("Available-Dictionary")}} Header enthalten, zusammen mit den `dcb` und/oder `dcz` Werten im {{HTTPHeader("Accept-Encoding")}} Header (für Delta-Komprimierung mit Brotli oder ZStandard, je nach Bedarf):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann dann mit einer entsprechend codierten Antwort mit der im {{HTTPHeader("Content-Encoding")}} Header gegebenen Inhaltscodierung antworten:

```http
Content-Encoding: dcb
```

Wenn die Antwort cachefähig ist, muss sie einen {{HTTPHeader("Vary")}} Header enthalten, um zu verhindern, dass Caches Wörterbuch-komprimierte Ressourcen an Clients liefern, die sie nicht unterstützen, oder die Antwort mit dem falschen Wörterbuch komprimiert liefern:

```http
Vary: accept-encoding, available-dictionary
```

Eine optionale `id` kann auch im {{HTTPHeader("Use-As-Dictionary")}} Header bereitgestellt werden:

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

Ein HTML-Dokument kann dem Browser auch ein Komprimierungswörterbuch bereitstellen, das keine Ressource ist, die der Browser ohnehin über ein Element wie ein {{htmlelement("script")}}-Tag herunterlädt. Es gibt zwei Methoden, dies zu tun:

- Einfügen eines {{HTMLElement("link")}} Elements, dessen [`rel`](/de/docs/Web/HTML/Attributes/rel) Attribut auf `compression-dictionary` gesetzt ist:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Verweisen auf das Wörterbuch mit dem {{HTTPHeader("Link")}} Header:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

Dieses Wörterbuch wird dann vom Browser während der Leerlaufzeit heruntergeladen, und diese Antwort muss den {{HTTPHeader("Use-As-Dictionary")}} Header enthalten:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Von hier aus ist der Prozess ähnlich dem vorherigen Beispiel, wenn eine passende Ressource angefordert wird.

## Erstellen von Wörterbuch-komprimierten Antworten

Wörterbuch-komprimierte Antworten können entweder die Brotli- oder ZStandard-Algorithmen verwenden, mit zwei zusätzlichen Anforderungen: Sie müssen auch einen magischen Header und einen eingebetteten Wörterbuch-Hash enthalten.

Wörterbuch-komprimierte Ressourcen können dynamisch erstellt werden, aber für statische Ressourcen kann es besser sein, diese im Voraus zur Build-Zeit zu erstellen. Bei der Verwendung früherer Versionen als Wörterbücher wird es erforderlich sein, zu entscheiden, wie viele Delta-komprimierte Versionen erstellt werden sollen — nur für die letzte Version oder für die letzten X Versionen für einen bestimmten Wert von X.

Unter der Annahme einer Wörterbuchdatei mit dem Namen `dictionary.text` und einer zu komprimierenden Datei mit dem Namen `data.text` wird der folgende Bash-Befehl die Datei mit Brotli komprimieren und eine komprimierte Datei mit dem Namen `data.txt.dcb` erzeugen:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Mit denselben Eingabedateien wird der folgende Bash-Befehl die Datei mit ZStandard komprimieren und eine komprimierte Datei mit dem Namen `data.txt.dcz` erzeugen:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Beachten Sie, dass Sie {{Glossary("OpenSSL", "OpenSSL")}} lokal installiert haben müssen, sowie Brotli oder ZStandard.

## Einschränkungen

Komprimierungsalgorithmen sind anfällig für Sicherheitsangriffe, daher gibt es eine Reihe von Einschränkungen für den Transport von Komprimierungswörterbüchern, einschließlich:

- Wörterbücher müssen im gleichen Ursprung wie die Ressource, die das Wörterbuch verwendet, vorhanden sein.
- Wörterbuch-komprimierte Ressourcen müssen im gleichen Ursprung wie das Dokument sein oder den [CORS](/de/docs/Web/HTTP/Guides/CORS) Regeln folgen und daher mit dem [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut angefordert und mit einem entsprechenden {{HTTPHeader("Access-Control-Allow-Origin")}} Header bereitgestellt werden.
- Wörterbücher unterliegen der üblichen HTTP-Cache-Partitionierung und können daher nicht zwischen Ursprüngen geteilt werden, auch wenn sie dieselben Ressourcen herunterladen. Das Wörterbuch muss erneut für jeden Ursprung heruntergeladen werden.

Zusätzlich könnten Wörterbücher selbst zu Tracking-Vektoren werden, sodass Browser diese Funktion einschränken können, wenn Cookies deaktiviert sind oder andere zusätzliche Datenschutzmaßnahmen aktiviert sind.

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Komprimierung")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}}
- [&lt;link rel=&quot;compression-dictionary&quot;&gt;](/de/docs/Web/HTML/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Entwurf der Spezifikation](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
- [Ressourcen für den Transport von Komprimierungswörterbüchern](https://use-as-dictionary.com/)
