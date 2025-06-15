---
title: Kompression Dictionary Transport
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: 4c0588c10b4266b8a87a1f80d93e8f99eabc1a4e
---

{{HTTPSidebar}}{{SeeCompatTable}}

**Kompression Dictionary Transport** ist eine Möglichkeit, ein gemeinsames Kompressionswörterbuch zu verwenden, um die Transportgröße von HTTP-Antworten erheblich zu reduzieren.

## Überblick

Kompressionsalgorithmen werden in HTTP verwendet, um die Größe der über das Netzwerk heruntergeladenen Ressourcen zu reduzieren, was die Bandbreitenkosten und die Ladezeit von Seiten verringert. Verlustfreie HTTP-Kompressionsalgorithmen arbeiten, indem sie Redundanzen in der Quelle finden: zum Beispiel Stellen, an denen Text wie der String `"function"` wiederholt wird. Sie beinhalten dann nur eine Kopie des redundanten Strings und ersetzen die Vorkommen davon in der Ressource durch Verweise auf diese Kopie. Da die Verweise kürzer sind als der String, ist die komprimierte Version kürzer.

> [!NOTE]
> Ein früherer Versuch dieser Technologie wurde SDCH (Shared Dictionary Compression for HTTP) genannt, aber wurde nie weit unterstützt und 2017 entfernt. Kompression Dictionary Transport ist eine besser spezifizierte und robustere Implementierung mit breiterem Konsens in der Industrie.

Nehmen Sie zum Beispiel dieses JavaScript:

```js
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

Dies könnte komprimiert werden, indem wiederholte Strings durch Verweise auf einen vorherigen Standort und die Anzahl der Zeichen ersetzt werden, wie hier:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In diesem Beispiel bezieht sich `[0:9]` auf das Kopieren von 9 Zeichen, beginnend mit Zeichen 0. Beachten Sie, dass dies ein vereinfachtes Beispiel ist, um das Konzept zu veranschaulichen, und die tatsächlichen Algorithmen sind komplexer als das.

Clients können dann die Kompression nach dem Herunterladen rückgängig machen, um die ursprüngliche, unkomprimierte Ressource wiederherzustellen.

### Kompressionswörterbücher

Algorithmen wie die {{Glossary("Brotli_compression", "Brotli-Kompression")}} und {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} erreichen noch größere Effizienz, indem sie die Verwendung von Wörterbüchern für häufig auftretende Strings erlauben, sodass Sie keine Kopien davon in der komprimierten Ressource benötigen. Diese Algorithmen werden mit einem vordefinierten Standardwörterbuch geliefert, das beim Komprimieren von HTTP-Antworten verwendet wird.

Kompression Dictionary Transport baut darauf auf, indem es Ihnen ermöglicht, Ihr eigenes Wörterbuch bereitzustellen, das besonders für eine bestimmte Menge von Ressourcen anwendbar ist. Der Kompressionsalgorithmus kann es dann als Quelle von Bytes verwenden, wenn er die Ressource komprimiert und dekomprimiert.

Angenommen, die Verweise aus dem vorherigen Beispiel sind in diesem gemeinsamen Wörterbuch enthalten, könnte dies weiter reduziert werden zu:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Wörterbuch kann entweder eine separate Ressource sein, die nur für Kompression Dictionary Transport benötigt wird, oder es kann eine Ressource sein, die die Website ohnehin benötigt.

Angenommen, Ihre Website verwendet eine JavaScript-Bibliothek. Typischerweise würden Sie eine spezifische Version der Bibliothek laden und könnten den Versionsnamen im Namen der Bibliothek einschließen, wie `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, wird er eine Kopie der Bibliothek als Unterressource abrufen.

Wenn Sie dann auf Version 2 der Bibliothek aktualisieren, wird der Großteil des Codes der Bibliothek wahrscheinlich gleich geblieben sein. Websites können die Größe des Downloads für `my-library.v2.js` erheblich reduzieren, indem sie dem Browser mitteilen, `my-library.v1.js` als Kompressionswörterbuch für `my-library.v2.js` zu verwenden. Dann müssen alle gemeinsamen Strings zwischen v1 und v2 nicht im Download für v2 enthalten sein, da der Browser sie bereits hat. Der Großteil der Downloadgröße von `my-library.v2.js` ist dann nur der Unterschied zwischen den beiden Versionen.

Kompression Dictionary Transport kann eine Größenordnung mehr Kompression erreichen als die Komprimierung mit einem Standard- eingebauten Wörterbuch: Siehe [Beispiele für Kompression Dictionary Transport](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) für einige realistische Ergebnisse.

## Wörterbuchformat

Ein Kompressionswörterbuch folgt keinem spezifischen Format und hat keinen spezifischen {{Glossary("MIME_type", "MIME-Typ")}}. Es handelt sich um reguläre Dateien, die in der Komprimierung anderer Dateien mit ähnlichem Inhalt verwendet werden können.

Frühere Versionen von Dateien haben typischerweise viele ähnliche Inhalte, weshalb sie hervorragende Wörterbücher darstellen.
Die Verwendung einer früheren Version einer Datei als Wörterbuch ermöglicht es dem Kompressionsalgorithmus, effizient auf alle unveränderten Inhalte zu verweisen und nur die relativ kleinen Unterschiede in der neuen Version zu erfassen. Dieser Ansatz wird als Delta-Komprimierung bezeichnet.

Eine andere Möglichkeit besteht darin, häufige Strings (beispielsweise Ihre HTML-Vorlagen) in einer neuen `dictionary.txt`-Datei zusammen aufzulisten, sodass diese verwendet werden kann, um HTML-Seiten auf der Website zu komprimieren. Sie können dies weiter optimieren, indem Sie spezialisierte Werkzeuge verwenden, zum Beispiel [Brotlis Wörterbuchgenerator](https://github.com/google/brotli/blob/master/research/dictionary_generator.cc), der Wörterbücher auf ihre minimale Größe mit minimalem Überschneiden reduziert.

Wörterbücher können auch effektiv verwendet werden, um binäre Formate zu komprimieren. Zum Beispiel sind [WASM](/de/docs/WebAssembly) Binärdateien große Ressourcen, die ebenfalls von Delta-Komprimierung profitieren können.

## Bestehende Ressource als Wörterbuch

Um eine Ressource als Wörterbuch zu verwenden, sollte der Server den {{HTTPHeader("Use-As-Dictionary")}}-Header in die Antwort einfügen, die die Ressource bereitstellt:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt die Ressourcen an, die diese Ressource als Wörterbuch verwenden können: In diesem Fall umfasst dies alle Ressourcen, deren URLs dem gegebenen [Muster](/de/docs/Web/API/URL_Pattern_API) entsprechen.

Wenn später eine Ressource angefordert wird, die dem gegebenen Muster entspricht (zum Beispiel `app.v2.js`), wird die Anfrage einen SHA-256-Hash des verfügbaren Wörterbuchs im {{HTTPHeader("Available-Dictionary")}}-Header enthalten, zusammen mit `dcb` und/oder `dcz` Werten im {{HTTPHeader("Accept-Encoding")}}-Header (für Delta-Komprimierung mit Brotli oder ZStandard, wie angemessen):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann dann mit einer entsprechend codierten Antwort mit der im {{HTTPHeader("Content-Encoding")}}-Header angegebenen gewählten Inhaltskomprimierung reagieren:

```http
Content-Encoding: dcb
```

Wenn die Antwort cachefähig ist, muss sie einen {{HTTPHeader("Vary")}}-Header enthalten, um zu verhindern, dass Caches dictionary-komprimierte Ressourcen an Clients zurückgeben, die sie nicht unterstützen, oder die Antwort mit dem falschen Wörterbuch komprimiert zurückgeben:

```http
Vary: accept-encoding, available-dictionary
```

Optional kann auch eine `id` im {{HTTPHeader("Use-As-Dictionary")}}-Header bereitgestellt werden, um dem Server zu ermöglichen, die Wörterbuchdatei leichter zu finden, wenn sie das Wörterbuch nicht über den Hash speichern:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn dies bereitgestellt wird, wird der Wert in zukünftigen Anfragen im {{HTTPHeader("Dictionary-ID")}}-Header gesendet:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss dennoch den Hash aus dem `Available-Dictionary`-Header überprüfen — die `Dictionary-ID` ist zusätzliche Information für den Server zur Identifizierung des Wörterbuchs, ersetzt aber nicht die Notwendigkeit für den `Available-Dictionary`-Header.

## Separates Wörterbuch

Ein HTML-Dokument kann dem Browser auch ein Kompressionswörterbuch bereitstellen, das keine Ressource ist, die der Browser ohnehin über ein Element wie einen {{htmlelement("script")}}-Tag herunterlädt. Es gibt zwei Methoden, dies zu tun:

- Einfügen eines {{HTMLElement("link")}}-Elements, dessen [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) Attribut auf `compression-dictionary` gesetzt ist:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Referenzieren des Wörterbuchs über den {{HTTPHeader("Link")}}-Header:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

Dieses Wörterbuch wird dann vom Browser während der Leerlaufzeit heruntergeladen, und diese Antwort muss den {{HTTPHeader("Use-As-Dictionary")}}-Header enthalten:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Von hier ab ist der Prozess ähnlich dem vorherigen Beispiel, wenn eine übereinstimmende Ressource angefordert wird.

## Erstellen von dictionary-komprimierten Antworten

Dictionary-komprimierte Antworten können entweder die Brotli- oder ZStandard-Algorithmen verwenden, mit zwei zusätzlichen Anforderungen: Sie müssen auch einen magischen Header und einen eingebetteten Wörterbuch-Hash enthalten.

Dictionary-komprimierte Ressourcen können dynamisch erstellt werden, aber für statische Ressourcen kann es besser sein, diese im Voraus zur Build-Zeit zu erstellen. Bei der Verwendung früherer Versionen als Wörterbücher erfordert dies die Entscheidung, wie viele delta-komprimierte Versionen erstellt werden sollen — nur für die letzte Version oder für die letzten X Versionen für einen Wert von X.

Angenommen, es gibt eine Wörterbuchdatei namens `dictionary.text` und eine zu komprimierende Datei namens `data.text`, wird der folgende Bash-Befehl die Datei mit Brotli komprimieren und eine komprimierte Datei namens `data.txt.dcb` erzeugen:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Angenommen, es gibt die gleichen Eingabedateien, wird der folgende Bash-Befehl die Datei mit ZStandard komprimieren und eine komprimierte Datei namens `data.txt.dcz` erzeugen:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Beachten Sie, dass Sie {{Glossary("OpenSSL", "OpenSSL")}} sowie Brotli oder ZStandard lokal installiert haben müssen.

## Einschränkungen

Kompressionsalgorithmen sind anfällig für Sicherheitsangriffe, daher gibt es eine Reihe von Einschränkungen für Kompression Dictionary Transport, einschließlich:

- Wörterbücher müssen gleiche Herkunft wie die Ressource haben, die das Wörterbuch nutzt.
- Dictionary-komprimierte Ressourcen müssen gleiche Herkunft wie die Dokumentenherkunft haben oder den [CORS](/de/docs/Web/HTTP/Guides/CORS)-Regeln folgen und daher mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut angefordert und mit einem passenden {{HTTPHeader("Access-Control-Allow-Origin")}}-Header bereitgestellt werden.
- Wörterbücher sind durch die übliche HTTP-Cache-Partitionierung gebunden und können daher nicht zwischen Ursprüngen geteilt werden, selbst wenn sie die gleichen Ressourcen herunterladen. Das Wörterbuch muss für jeden Ursprung erneut heruntergeladen werden.

Zusätzlich könnten Wörterbücher selbst zu Tracking-Vektoren werden, sodass Browser dieses Feature einschränken können, wenn Cookies deaktiviert sind oder wenn andere zusätzliche Datenschutzeinstellungen aktiviert sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("Zstandard_compression", "ZStandard-Kompression")}}
- [`<link rel="compression-dictionary">`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Entwurfspezifikation](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
- [Ressourcen für Kompression Dictionary Transport](https://use-as-dictionary.com/)
