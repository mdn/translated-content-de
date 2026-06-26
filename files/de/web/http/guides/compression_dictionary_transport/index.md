---
title: Kompressions-Dictionary-Transport
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{SeeCompatTable}}

**Kompressions-Dictionary-Transport** ist eine Methode zur Verwendung eines gemeinsamen Kompressions-Dictionary, um die Transportgröße von HTTP-Antworten drastisch zu reduzieren.

## Überblick

Kompressionsalgorithmen werden in HTTP verwendet, um die Größe der über das Netzwerk heruntergeladenen Ressourcen zu reduzieren, was die Bandbreitenkosten und die Ladezeit von Seiten verringert. Verlustfreie HTTP-Kompressionsalgorithmen arbeiten, indem sie Redundanzen in der Quelle finden: Zum Beispiel Stellen, an denen Text wie der String `"function"` wiederholt wird. Sie beinhalten dann nur eine Kopie des redundanten Strings und ersetzen dessen Vorkommen in der Ressource durch Verweise auf diese Kopie. Da die Verweise kürzer sind als der String, ist die komprimierte Version kürzer.

> [!NOTE]
> Ein früherer Versuch dieser Technologie hieß SDCH (Shared Dictionary Compression for HTTP), wurde jedoch nie weitgehend unterstützt und 2017 entfernt. Kompressions-Dictionary-Transport ist eine besser spezifizierte und robustere Implementierung mit breiterem Industriekonsens.

Beispielsweise nehmen wir dieses JavaScript:

```js
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

Dies könnte komprimiert werden, indem wiederholte Strings durch Verweise auf eine vorherige Position und Anzahl von Zeichen ersetzt werden, wie folgt:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In diesem Beispiel bezieht sich `[0:9]` auf das Kopieren der 9 Zeichen, beginnend am Zeichen 0. Beachten Sie, dass dies ein vereinfachtes Beispiel ist, um das Konzept zu demonstrieren, und die tatsächlichen Algorithmen komplexer sind als dies.

Clients können dann die Kompression nach dem Download rückgängig machen, um die originale, unkomprimierte Ressource wiederherzustellen.

### Kompressions-Dictionary

Algorithmen wie {{Glossary("Brotli_compression", "Brotli-Kompression")}} und {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} erreichen eine noch größere Effizienz, indem sie die Verwendung von Dictionaries mit häufig auftretenden Strings ermöglichen, sodass diese nicht in der komprimierten Ressource kopiert werden müssen. Diese Algorithmen werden mit einem vordefinierten Standard-Dictionary ausgeliefert, das bei der Komprimierung von HTTP-Antworten verwendet wird.

Kompressions-Dictionary-Transport baut darauf auf, indem es Ihnen ermöglicht, Ihr eigenes Dictionary bereitzustellen, das besonders auf einen bestimmten Satz von Ressourcen anwendbar ist. Der Kompressionsalgorithmus kann es dann als Byte-Quelle verwenden, wenn die Ressource komprimiert und dekomprimiert wird.

Angenommen, die Verweise aus dem vorherigen Beispiel sind in diesem gemeinsamen Dictionary enthalten, könnte dies weiter auf dies reduziert werden:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Dictionary kann entweder eine separate Ressource sein, die nur für Kompressions-Dictionary-Transport benötigt wird, oder es kann eine Ressource sein, die die Website sowieso benötigt.

Angenommen, Ihre Website verwendet eine JavaScript-Bibliothek. Normalerweise würden Sie eine spezifische Version der Bibliothek laden und könnten den Versionsnamen im Namen der Bibliothek einschließen, wie `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, holt er eine Kopie der Bibliothek als Subressource.

Wenn Sie dann auf v2 der Bibliothek aktualisieren, wird der größte Teil des Codes der Bibliothek wahrscheinlich gleich geblieben sein. Websites können die Download-Größe von `my-library.v2.js` stark reduzieren, indem sie dem Browser mitteilen, `my-library.v1.js` als Kompressions-Dictionary für `my-library.v2.js` zu verwenden. Dann müssen alle Strings, die zwischen v1 und v2 gemeinsam sind, nicht in den Download für v2 aufgenommen werden, da der Browser sie bereits hat. Der größte Teil der Download-Größe von `my-library.v2.js` ist dann nur das Delta zwischen den beiden Versionen.

Kompressions-Dictionary-Transport kann eine um Größenordnungen höhere Kompression erreichen als die Komprimierung mit einem Standard-Dictionary: Weitere Informationen finden Sie unter [Beispiele für Kompressions-Dictionary-Transport](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md).

## Dictionary-Format

Ein Kompressions-Dictionary folgt keinem spezifischen Format und hat keinen spezifischen {{Glossary("MIME_type", "MIME-Typ")}}. Es sind reguläre Dateien, die zur Komprimierung anderer Dateien mit ähnlichem Inhalt verwendet werden können.

Frühere Versionen von Dateien haben typischerweise viele ähnliche Inhalte, was sie zu ausgezeichneten Dictionaries macht. Die Verwendung einer früheren Version einer Datei als Dictionary ermöglicht es dem Kompressionsalgorithmus, effizient auf alle unveränderten Inhalte zu verweisen und nur die relativ kleinen Unterschiede in der neuen Version zu erfassen. Dieser Ansatz wird als Delta-Kompression bezeichnet.

Ein weiterer Ansatz besteht darin, häufige Strings (zum Beispiel Ihre HTML-Vorlagen) in einer neuen `dictionary.txt`-Datei zusammenzufassen, sodass sie zur Komprimierung von HTML-Seiten auf der Website verwendet werden kann. Dies kann weiter optimiert werden, indem spezialisierte Werkzeuge verwendet werden, zum Beispiel [Brotlis Dictionary-Generator](https://github.com/google/brotli/blob/master/research/dictionary_generator.cc), der Dictionaries auf ihre minimale Größe mit minimaler Überlappung reduziert.

Dictionaries können auch effektiv zur Komprimierung von Binärformaten verwendet werden. Zum Beispiel sind [WASM](/de/docs/WebAssembly)-Binärdateien große Ressourcen, die ebenfalls von Delta-Kompression profitieren können.

## Bestehende Ressource als Dictionary

Um eine Ressource als Dictionary zu verwenden, sollte der Server den {{HTTPHeader("Use-As-Dictionary")}} Header in die Antwort einschließen, die die Ressource bereitstellt:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt die Ressourcen an, die diese Ressource als Dictionary verwenden können: In diesem Fall sind das alle Ressourcen, deren URLs dem angegebenen [Muster](/de/docs/Web/API/URL_Pattern_API) entsprechen.

Wenn später eine Ressource angefordert wird, die dem angegebenen Muster entspricht (zum Beispiel `app.v2.js`), wird die Anfrage einen SHA-256-Hash des verfügbaren Dictionarys im {{HTTPHeader("Available-Dictionary")}} Header enthalten, zusammen mit `dcb` und/oder `dcz` Werten im {{HTTPHeader("Accept-Encoding")}} Header (für Delta-Kompression unter Verwendung von Brotli oder ZStandard, wie angemessen):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann dann mit einer entsprechend kodierten Antwort antworten, unter Verwendung der im {{HTTPHeader("Content-Encoding")}} Header angegebenen gewählten Inhaltskodierung:

```http
Content-Encoding: dcb
```

Wenn die Antwort zwischenspeicherbar ist, muss sie einen {{HTTPHeader("Vary")}} Header enthalten, um zu verhindern, dass Caches dictionary-komprimierte Ressourcen an Clients liefern, die sie nicht unterstützen, oder die Antwort mit dem falschen Dictionary komprimiert ist:

```http
Vary: accept-encoding, available-dictionary
```

Ein optionales `id` kann ebenfalls im {{HTTPHeader("Use-As-Dictionary")}} Header bereitgestellt werden, damit der Server die Dictionary-Datei leichter finden kann, wenn sie nicht durch den Hash gespeichert wird:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn dies bereitgestellt wird, wird der Wert in zukünftigen Anfragen im {{HTTPHeader("Dictionary-ID")}} Header gesendet:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss trotzdem den Hash aus dem `Available-Dictionary` Header überprüfen — die `Dictionary-ID` ist zusätzliche Information für den Server zur Identifikation des Dictionary, ersetzt jedoch nicht die Notwendigkeit für den `Available-Dictionary` Header.

## Separates Dictionary

Ein HTML-Dokument kann dem Browser auch ein Kompressions-Dictionary bereitstellen, das keine Ressource ist, die der Browser bereits über ein Element wie ein {{htmlelement("script")}}-Tag herunterlädt. Es gibt zwei Methoden, dies zu tun:

- Fügen Sie ein {{HTMLElement("link")}} Element hinzu, dessen [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) Attribut auf `compression-dictionary` gesetzt ist:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Beziehen Sie sich auf das Dictionary mithilfe des {{HTTPHeader("Link")}} Headers:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

Dieses Dictionary wird dann vom Browser während der Leerlaufzeit heruntergeladen, und diese Antwort muss den {{HTTPHeader("Use-As-Dictionary")}} Header enthalten:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Von hier aus ist der Prozess ähnlich zum vorherigen Beispiel, wenn eine passende Ressource angefordert wird.

## Erstellung kompressions-dictionary-komprimierter Antworten

Kompressions-Dictionary-komprimierte Antworten können entweder die Brotli- oder ZStandard-Algorithmen verwenden, mit zwei zusätzlichen Anforderungen: Sie müssen auch einen magischen Header und eingebetteten Dictionary-Hash enthalten.

Kompressions-Dictionary-komprimierte Ressourcen können dynamisch erstellt werden, aber für statische Ressourcen kann es besser sein, diese im Voraus zur Build-Zeit zu erstellen. Wenn frühere Versionen als Dictionaries verwendet werden, erfordert dies die Entscheidung, wie viele Delta-komprimierte Versionen erstellt werden sollen — nur für die letzte Version, oder für die letzten X Versionen für einen Wert von X.

Angenommen eine Dictionary-Datei namens `dictionary.text` und eine Datei zum Komprimieren namens `data.text`, wird der folgende Bash-Befehl die Datei unter Verwendung von Brotli komprimieren und eine komprimierte Datei namens `data.txt.dcb` erstellen:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Mit den gleichen Eingabedateien wird der folgende Bash-Befehl die Datei unter Verwendung von ZStandard komprimieren und eine komprimierte Datei namens `data.txt.dcz` erstellen:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Beachten Sie, dass Sie {{Glossary("OpenSSL", "OpenSSL")}} lokal installiert haben müssen sowie Brotli oder ZStandard.

## Einschränkungen

Kompressionsalgorithmen sind anfällig für Sicherheitsangriffe, daher gibt es eine Reihe von Einschränkungen für den Kompressions-Dictionary-Transport, einschließlich:

- Dictionaries müssen gleichherkunftsberechtigt sein mit der Ressource, die das Dictionary verwendet.
- Kompressions-Dictionary-Transportierte Ressourcen müssen gleichherkunftsberechtigt mit dem Dokument sein, oder den [CORS](/de/docs/Web/HTTP/Guides/CORS)-Regeln folgen, und daher mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut angefordert und mit einem entsprechenden {{HTTPHeader("Access-Control-Allow-Origin")}} Header bereitgestellt werden.
- Dictionaries sind durch das übliche HTTP-Cache-Partitionierung beschränkt und können daher nicht zwischen Ursprüngen geteilt werden, selbst wenn diese die gleichen Ressourcen herunterladen. Das Dictionary muss für jeden Ursprung erneut heruntergeladen werden.

Darüber hinaus könnten Dictionaries selbst zu Tracking-Vektoren werden, sodass Browser diese Funktion möglicherweise einschränken, wenn Cookies deaktiviert sind oder zusätzliche Datenschutzmaßnahmen aktiviert sind.

Wie bei anderen Ressourcen, wenn eine Website den {{HTTPHeader("Content-Security-Policy")}} Header verwendet, muss das Kompressions-Dictionary eine erlaubte Quelle sein, damit es geladen werden kann. Insbesondere beim Laden eines [separaten Dictionarys](#separates_dictionary) unter Verwendung von [`<link rel="compression-dictionary">`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary), muss die `connect-src` Direktive (oder `default-src`, falls `connect-src` nicht gesetzt ist) den Standort des Dictionary erlauben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Glossareinträge:
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
- [`<link rel="compression-dictionary">`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [RFC 9842: Kompressions-Dictionary-Transport](https://www.rfc-editor.org/info/rfc9842/)
- [Ressourcen für Kompressions-Dictionary-Transport](https://use-as-dictionary.com/)
