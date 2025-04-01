---
title: Kompressions-Wörterbuch-Transport
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: 3b950288ff28e6984e35acd8fa56fa885a935978
---

{{HTTPSidebar}}

**Kompressions-Wörterbuch-Transport** ist eine Methode, um ein gemeinsames Kompressions-Wörterbuch zu verwenden, um die Transportgröße von HTTP-Antworten erheblich zu reduzieren.

## Übersicht

Kompressionsalgorithmen werden in HTTP verwendet, um die Größe der über das Netzwerk heruntergeladenen Ressourcen zu verringern, was die Bandbreitenkosten und die Ladezeit von Seiten reduziert. Verlustfreie HTTP-Kompressionsalgorithmen funktionieren, indem sie Redundanzen im Quelltext finden: Zum Beispiel Stellen, an denen Text wie die Zeichenkette `"function"` wiederholt wird. Sie enthalten dann nur eine Kopie der redundanten Zeichenkette und ersetzen deren Vorkommen in der Ressource durch Verweise auf diese Kopie. Da die Verweise kürzer als die Zeichenkette sind, ist die komprimierte Version kürzer.

> [!NOTE]
> Ein früherer Versuch dieser Technologie hieß SDCH (Shared Dictionary Compression for HTTP), wurde jedoch nie weitreichend unterstützt und 2017 entfernt. Kompressions-Wörterbuch-Transport ist eine besser spezifizierte und robustere Implementierung mit breiterem Branchenkonsens.

Zum Beispiel nehmen Sie dieses JavaScript:

```javascript
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

Dies könnte durch Ersetzen von wiederholten Zeichenketten mit Verweisen auf eine vorherige Position und Anzahl von Zeichen komprimiert werden, wie folgt:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In diesem Beispiel bezieht sich `[0:9]` auf das Kopieren der 9 Zeichen ab Zeichen 0. Beachten Sie, dass dies ein vereinfachtes Beispiel ist, um das Konzept zu veranschaulichen, und dass die tatsächlichen Algorithmen komplexer sind als dies.

Clients können dann nach dem Herunterladen die Kompression rückgängig machen, um die ursprüngliche, unkomprimierte Ressource wiederherzustellen.

### Kompressionswörterbücher

Algorithmen wie {{Glossary("Brotli_compression", "Brotli-Kompression")}} und {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} erreichen noch größere Effizienz, indem sie die Verwendung von Wörterbüchern mit häufig auftretenden Zeichenketten ermöglichen, sodass keine Kopien davon in der komprimierten Ressource erforderlich sind. Diese Algorithmen werden mit einem vordefinierten Standardwörterbuch geliefert, das bei der Komprimierung von HTTP-Antworten verwendet wird.

Kompressions-Wörterbuch-Transport baut darauf auf, indem es Ihnen ermöglicht, Ihr eigenes Wörterbuch bereitzustellen, das besonders auf eine bestimmte Menge von Ressourcen anwendbar ist. Der Kompressionsalgorithmus kann es dann als Quelle für Bytes verwenden, wenn er die Ressource komprimiert und dekomprimiert.

Angenommen, die Verweise aus dem vorherigen Beispiel sind in diesem gemeinsamen Wörterbuch enthalten, könnte dies weiter reduziert werden auf:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Wörterbuch kann entweder eine separate Ressource sein, die nur für Kompressions-Wörterbuch-Transport erforderlich ist, oder es kann eine Ressource sein, die die Website ohnehin benötigt.

Angenommen, Ihre Website verwendet eine JavaScript-Bibliothek. Normalerweise würden Sie eine bestimmte Version der Bibliothek laden und könnten den Versionsnamen im Namen der Bibliothek enthalten, so wie `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, wird er eine Kopie der Bibliothek als Subressource abrufen.

Wenn Sie dann auf v2 der Bibliothek aktualisieren, wird sich wahrscheinlich der größte Teil des Bibliothekscodes nicht geändert haben. Websites können die Größe des Downloads für `my-library.v2.js` erheblich reduzieren, indem sie dem Browser sagen, er solle `my-library.v1.js` als Kompressions-Wörterbuch für `my-library.v2.js` verwenden. Dann müssen alle Zeichenketten, die zwischen v1 und v2 gemeinsam sind, nicht im Download für v2 enthalten sein, weil der Browser sie bereits hat. Der Großteil der Download-Größe von `my-library.v2.js` ist dann nur das Delta zwischen den beiden Versionen.

Kompressions-Wörterbuch-Transport kann eine Größenordnung mehr Kompression erreichen als die Kompression mit einem standardmäßigen eingebauten Wörterbuch: siehe [Beispiele für Kompressions-Wörterbuch-Transport](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) für einige praktische Ergebnisse.

## Wörterbuchformat

Ein Kompressions-Wörterbuch ist eine "Rohdatei", die keinem spezifischen Format folgt und keinen spezifischen {{Glossary("MIME_type", "MIME-Typ")}} hat. Sie sind reguläre Dateien, die verwendet werden können, um andere Dateien mit ähnlichem Inhalt zu komprimieren, und können daher Textdateien oder sogar Binärdateien sein. Zum Beispiel sind [WASM](/docs/WebAssembly)-Binärdateien große Ressourcen, die ebenfalls von Delta-Kompression profitieren können.

## Bestehende Ressource als Wörterbuch

Um eine Ressource als Wörterbuch zu verwenden, sollte der Server den {{HTTPHeader("Use-As-Dictionary")}}-Header in die Antwort aufnehmen, die die Ressource bereitstellt:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt die Ressourcen an, die diese Ressource als Wörterbuch verwenden können: in diesem Fall alle Ressourcen, deren URLs mit dem angegebenen [Muster](/de/docs/Web/API/URL_Pattern_API) übereinstimmen.

Wenn später eine Ressource angefordert wird, die mit dem angegebenen Muster übereinstimmt (zum Beispiel `app.v2.js`), enthält die Anfrage einen SHA-256-Hash des verfügbaren Wörterbuchs im {{HTTPHeader("Available-Dictionary")}}-Header, zusammen mit `dcb`- und/oder `dcz`-Werten im {{HTTPHeader("Accept-Encoding")}}-Header (für Delta-Kompression unter Verwendung von Brotli oder ZStandard, je nach Bedarf):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann dann mit einer entsprechend kodierten Antwort antworten, mit der gewählten Inhaltskodierung im {{HTTPHeader("Content-Encoding")}}-Header:

```http
Content-Encoding: dcb
```

Wenn die Antwort zwischenspeicherbar ist, muss sie einen {{HTTPHeader("Vary")}}-Header enthalten, um zu verhindern, dass Caches mit dem falschen Wörterbuch komprimierte Ressourcen an Clients ausliefern, die sie nicht unterstützen:

```http
Vary: accept-encoding, available-dictionary
```

Ein optionaler `id` kann ebenfalls im {{HTTPHeader("Use-As-Dictionary")}}-Header bereitgestellt werden:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn dies bereitgestellt wird, wird der Wert in zukünftigen Anfragen im {{HTTPHeader("Dictionary-ID")}}-Header gesendet:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

## Separates Wörterbuch

Ein HTML-Dokument kann dem Browser auch ein Kompressions-Wörterbuch bereitstellen, das keine Ressource ist, die der Browser ohnehin herunterlädt, über ein Element wie ein {{htmlelement("script")}}-Tag eingefügt werden. Es gibt zwei Methoden dazu:

- Einfügen eines {{HTMLElement("link")}}-Elements, dessen [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut auf `compression-dictionary` gesetzt ist:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Referenzieren des Wörterbuchs unter Verwendung des {{HTTPHeader("Link")}}-Headers:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

Dieses Wörterbuch wird dann vom Browser während der Leerlaufzeit heruntergeladen, und diese Antwort muss den {{HTTPHeader("Use-As-Dictionary")}}-Header enthalten:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Von hier aus verläuft der Prozess ähnlich dem vorherigen Beispiel, wenn eine passende Ressource angefordert wird.

## Erstellen von dictionary-komprimierten Antworten

Dictionary-komprimierte Antworten können entweder die Brotli- oder ZStandard-Algorithmen verwenden, mit zwei zusätzlichen Anforderungen: sie müssen auch einen magischen Header und einen eingebetteten Wörterbuch-Hash enthalten.

Dictionary-komprimierte Ressourcen können dynamisch erstellt werden, aber für statische Ressourcen kann es besser sein, diese im Voraus zur Build-Zeit zu erstellen. Wenn frühere Versionen als Wörterbücher verwendet werden, erfordert dies die Entscheidung, wie viele Delta-komprimierte Versionen erstellt werden sollen — nur für die letzte Version oder für die letzten X Versionen für einen bestimmten Wert von X.

Bei einem Wörterbuchdatei namens `dictionary.text` und einer zu komprimierenden Datei namens `data.text` wird der folgende Bash-Befehl die Datei mit Brotli komprimieren und eine komprimierte Datei namens `data.txt.dcb` erzeugen:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Bei denselben Eingabedateien wird der folgende Bash-Befehl die Datei mit ZStandard komprimieren und eine komprimierte Datei namens `data.txt.dcz` erzeugen:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Beachten Sie, dass Sie {{Glossary("OpenSSL", "OpenSSL")}} lokal installiert haben müssen sowie Brotli oder ZStandard.

## Einschränkungen

Kompressionsalgorithmen sind anfällig für Sicherheitsangriffe, daher gibt es eine Reihe von Einschränkungen für Kompressions-Wörterbuch-Transport, einschließlich:

- Wörterbücher müssen denselben Ursprung wie die Ressource haben, die das Wörterbuch verwendet.
- Dictionary-komprimierte Ressourcen müssen denselben Ursprung wie das Dokument haben oder den [CORS](/docs/Web/HTTP/Guides/CORS)-Regeln folgen und daher mit dem [`crossorigin`](/docs/Web/HTML/Attributes/crossorigin)-Attribut angefordert und mit einem geeigneten {{HTTPHeader("Access-Control-Allow-Origin")}}-Header bereitgestellt werden.
- Wörterbücher unterliegen der üblichen HTTP-Cache-Partitionierung und können daher nicht zwischen Ursprüngen geteilt werden, auch wenn sie dieselben Ressourcen herunterladen. Das Wörterbuch muss für jeden Ursprung erneut heruntergeladen werden.

Außerdem könnten Wörterbücher selbst zu Tracking-Vektoren werden, weshalb Browser diese Funktion möglicherweise einschränken, wenn Cookies deaktiviert sind oder wenn andere zusätzliche Datenschutzmaßnahmen aktiviert sind.

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
- [Ressourcen für Kompressions-Wörterbuch-Transport](https://use-as-dictionary.com/)
