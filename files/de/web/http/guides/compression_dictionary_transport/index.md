---
title: Übertragung von Kompressionswörterbüchern
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: 736dbe457aa4735521bf919ba93c047209e80dcf
---

{{HTTPSidebar}}{{SeeCompatTable}}

**Übertragung von Kompressionswörterbüchern** ist eine Methode, ein gemeinsames Kompressionswörterbuch zu verwenden, um die Größe von HTTP-Antworten drastisch zu reduzieren.

## Übersicht

Kompressionsalgorithmen werden in HTTP verwendet, um die Größe der über das Netzwerk heruntergeladenen Ressourcen zu reduzieren, was die Bandbreitenkosten und die Ladezeit von Seiten verringert. Verlustfreie HTTP-Kompressionsalgorithmen funktionieren, indem sie Redundanzen in der Quelle finden: zum Beispiel Stellen, an denen Text wie der String `"function"` wiederholt vorkommt. Sie enthalten dann nur eine Kopie des redundanten Strings und ersetzen dessen Vorkommen in der Ressource durch Verweise auf diese Kopie. Da die Verweise kürzer sind als der String, ist die komprimierte Version kürzer.

> [!NOTE]
> Ein früherer Versuch dieser Technologie wurde SDCH (Shared Dictionary Compression for HTTP) genannt, fand aber nie breite Unterstützung und wurde 2017 entfernt. Die Übertragung von Kompressionswörterbüchern ist eine besser spezifizierte und robustere Implementierung mit breiterer Branchenakzeptanz.

Nehmen Sie zum Beispiel dieses JavaScript:

```js
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

Dies könnte komprimiert werden, indem wiederholte Strings durch Verweise auf einen vorherigen Ort und die Anzahl der Zeichen ersetzt werden, wie folgt:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In diesem Beispiel bezieht sich `[0:9]` auf das Kopieren der 9 Zeichen beginnend bei Zeichen 0. Beachten Sie, dass dies ein vereinfachtes Beispiel ist, um das Konzept zu demonstrieren und die tatsächlichen Algorithmen komplexer als dieses sind.

Clients können dann die Kompression nach dem Download rückgängig machen, um die ursprüngliche, unkomprimierte Ressource wiederherzustellen.

### Kompressionswörterbücher

Algorithmen wie {{Glossary("Brotli_compression", "Brotli-Kompression")}} und {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} erreichen noch größere Effizienz, indem sie die Verwendung von Wörterbüchern mit häufig vorkommenden Strings ermöglichen, sodass keine Kopien davon in der komprimierten Ressource erforderlich sind. Diese Algorithmen werden mit einem vordefinierten Standardwörterbuch ausgeliefert, das bei der Komprimierung von HTTP-Antworten verwendet wird.

Die Übertragung von Kompressionswörterbüchern baut darauf auf, indem ermöglicht wird, ein eigenes Wörterbuch bereitzustellen, das speziell für einen bestimmten Satz von Ressourcen anwendbar ist. Der Kompressionsalgorithmus kann es dann als Quelle von Bytes für die Komprimierung und Dekomprimierung der Ressource verwenden.

Angenommen, die Verweise aus dem vorherigen Beispiel sind in diesem gemeinsamen Wörterbuch enthalten, könnte dies weiter reduziert werden auf:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Wörterbuch kann entweder eine separate Ressource sein, die nur für die Übertragung von Kompressionswörterbüchern erforderlich ist, oder es kann eine Ressource sein, die die Website ohnehin benötigt.

Angenommen, Ihre Website verwendet eine JavaScript-Bibliothek. Normalerweise würden Sie eine bestimmte Version der Bibliothek laden und den Versionsnamen möglicherweise im Namen der Bibliothek einfügen, wie `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, ruft er eine Kopie der Bibliothek als Subressource ab.

Wenn Sie dann auf Version 2 der Bibliothek aktualisieren, wird der meiste Code der Bibliothek gleich geblieben sein. Websites können die Download-Größe für `my-library.v2.js` erheblich reduzieren, indem sie dem Browser mitteilen, `my-library.v1.js` als Kompressionswörterbuch für `my-library.v2.js` zu verwenden. Dann müssen alle Strings, die zwischen Version 1 und 2 gemeinsam sind, nicht im Download für Version 2 enthalten sein, da der Browser sie bereits hat. Der größte Teil der Downloadgröße von `my-library.v2.js` ist dann nur das Delta zwischen den beiden Versionen.

Die Übertragung von Kompressionswörterbüchern kann eine Größenordnung mehr Kompression erreichen als eine Kompression mit einem Standard eingebauten Wörterbuch: siehe [Beispiele für die Übertragung von Kompressionswörterbüchern](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) für einige reale Ergebnisse.

## Wörterbuchformat

Ein Kompressionswörterbuch folgt keinem bestimmten Format und hat keinen bestimmten {{Glossary("MIME_type", "MIME-Typ")}}. Sie sind normale Dateien, die bei der Komprimierung anderer Dateien mit ähnlichem Inhalt verwendet werden können.

Frühere Versionen von Dateien haben typischerweise viele ähnliche Inhalte, weshalb sie hervorragende Wörterbücher darstellen.
Die Verwendung einer früheren Version einer Datei als Wörterbuch ermöglicht es dem Kompressionsalgorithmus, effizient auf alle unveränderten Inhalte zu verweisen und nur die relativ kleinen Unterschiede in der neuen Version zu erfassen. Dieser Ansatz wird als Delta-Kompression bezeichnet.

Ein weiterer Ansatz ist es, häufige Strings (zum Beispiel Ihre HTML-Vorlagen) zusammen in einer neuen `dictionary.txt` Datei aufzulisten, damit sie zur Komprimierung von HTML-Seiten auf der Website verwendet werden können. Sie können dies weiter optimieren, indem Sie spezialisierte Tools verwenden, zum Beispiel [Brotlis Wörterbuchgenerator](https://github.com/google/brotli/blob/master/research/dictionary_generator.cc), der Wörterbücher auf ihre minimale Größe mit minimaler Überlappung reduziert.

Wörterbücher können auch verwendet werden, um binäre Formate effektiv zu komprimieren. Zum Beispiel sind [WASM](/de/docs/WebAssembly) Binärdateien große Ressourcen, die ebenfalls von Delta-Kompression profitieren können.

## Bestehende Ressource als Wörterbuch

Um eine Ressource als Wörterbuch zu verwenden, sollte der Server den {{HTTPHeader("Use-As-Dictionary")}} Header in der Antwort einschließen, die die Ressource bereitstellt:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt die Ressourcen an, die diese Ressource als Wörterbuch verwenden können: in diesem Fall umfasst dies alle Ressourcen, deren URLs mit dem gegebenen [Muster](/de/docs/Web/API/URL_Pattern_API) übereinstimmen.

Wenn später eine Ressource angefordert wird, die mit dem gegebenen Muster übereinstimmt (zum Beispiel `app.v2.js`), wird die Anfrage einen SHA-256-Hash des verfügbaren Wörterbuchs im {{HTTPHeader("Available-Dictionary")}} Header einschließen, zusammen mit `dcb` und/oder `dcz` Werten im {{HTTPHeader("Accept-Encoding")}} Header (für Delta-Kompression mit Brotli oder ZStandard, wie angemessen):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann dann mit einer entsprechend codierten Antwort mit der gewählten Inhaltskodierung, die im {{HTTPHeader("Content-Encoding")}} Header angegeben ist, antworten:

```http
Content-Encoding: dcb
```

Wenn die Antwort zwischenspeicherbar ist, muss sie einen {{HTTPHeader("Vary")}} Header einschließen, um zu verhindern, dass Caches Wörterbuch-komprimierte Ressourcen an Clients liefern, die sie nicht unterstützen, oder die Antwort mit dem falschen Wörterbuch komprimiert bereitstellen:

```http
Vary: accept-encoding, available-dictionary
```

Ein optionales `id` kann ebenfalls im {{HTTPHeader("Use-As-Dictionary")}} Header bereitgestellt werden, damit der Server das Wörterbuch leichter finden kann, falls sie das Wörterbuch nicht anhand des Hashes speichern:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Falls dies bereitgestellt wird, wird der Wert in zukünftigen Anfragen im {{HTTPHeader("Dictionary-ID")}} Header gesendet:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss dennoch den Hash aus dem `Available-Dictionary` Header überprüfen — die `Dictionary-ID` ist zusätzliche Information für den Server zur Identifizierung des Wörterbuchs, ersetzt jedoch nicht die Notwendigkeit des `Available-Dictionary` Headers.

## Separates Wörterbuch

Ein HTML-Dokument kann dem Browser auch ein Kompressionswörterbuch bereitstellen, das keine Ressource ist, die der Browser ohnehin über ein Element wie ein {{htmlelement("script")}}-Tag herunterlädt. Es gibt zwei Methoden, dies zu tun:

- Einschließen eines {{HTMLElement("link")}} Elements, dessen [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) Attribut auf `compression-dictionary` gesetzt ist:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Referenzieren des Wörterbuchs über den {{HTTPHeader("Link")}} Header:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

Dieses Wörterbuch wird dann vom Browser während der Leerlaufzeit heruntergeladen, und diese Antwort muss den {{HTTPHeader("Use-As-Dictionary")}} Header enthalten:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Von hier an ist der Prozess ähnlich dem vorherigen Beispiel, wenn Übereinstimmende Ressourcen angefordert werden.

## Erstellen von Wörterbuch-komprimierten Antworten

Wörterbuch-komprimierte Antworten können entweder die Brotli- oder ZStandard-Algorithmen verwenden, mit zwei zusätzlichen Anforderungen: sie müssen auch einen magischen Header und einen eingebetteten Wörterbuch-Hash enthalten.

Wörterbuch-komprimierte Ressourcen können dynamisch erstellt werden, aber für statische Ressourcen kann es besser sein, diese im Voraus zur Build-Zeit zu erstellen. Beim Verwenden vorheriger Versionen als Wörterbücher erfordert dies die Entscheidung, wie viele Delta-komprimierte Versionen erstellt werden sollen — nur für die letzte Version oder für die letzten X Versionen für einen bestimmten Wert von X.

Mit einer Wörterbuchdatei namens `dictionary.text` und einer zu komprimierenden Datei namens `data.text`, wird der folgende Bash-Befehl die Datei mit Brotli komprimieren und eine komprimierte Datei namens `data.txt.dcb` erzeugen:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Mit denselben Eingabedateien wird der folgende Bash-Befehl die Datei mit ZStandard komprimieren und eine komprimierte Datei namens `data.txt.dcz` erzeugen:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Beachten Sie, dass Sie {{Glossary("OpenSSL", "OpenSSL")}} lokal installiert haben müssen sowie Brotli oder ZStandard.

## Einschränkungen

Kompressionsalgorithmen sind für Sicherheitsangriffe anfällig, daher gibt es eine Reihe von Einschränkungen für die Übertragung von Kompressionswörterbüchern, einschließlich:

- Wörterbücher müssen gleichherkunft mit der Ressource sein, die das Wörterbuch verwendet.
- Wörterbuch-komprimierte Ressourcen müssen gleichherkunft mit dem Dokumentursprung sein oder die [CORS](/de/docs/Web/HTTP/Guides/CORS) Regeln befolgen und müssen daher mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut angefordert und mit einem passenden {{HTTPHeader("Access-Control-Allow-Origin")}} Header bereitgestellt werden.
- Wörterbücher sind an die übliche HTTP-Cache-Partitionierung gebunden und können daher nicht zwischen Ursprüngen geteilt werden, selbst wenn sie dieselben Ressourcen herunterladen. Das Wörterbuch muss dann für jeden Ursprung erneut heruntergeladen werden.

Zusätzlich könnten Wörterbücher selbst zu Tracking-Vektoren werden, daher könnten Browser diese Funktion einschränken, wenn Cookies deaktiviert sind oder wenn zusätzliche Datenschutzmaßnahmen aktiviert sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Glossar Einträge:
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
- [&lt;link rel=&quot;compression-dictionary&quot;&gt;](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Entwurfsspezifikation](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
- [Ressourcen für die Übertragung von Kompressionswörterbüchern](https://use-as-dictionary.com/)
