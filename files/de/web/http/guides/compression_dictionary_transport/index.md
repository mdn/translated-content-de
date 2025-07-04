---
title: Übertragung des Kompressionswörterbuchs
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

**Übertragung des Kompressionswörterbuchs** ist eine Methode, ein gemeinsam genutztes Kompressionswörterbuch zu verwenden, um die Transportgröße von HTTP-Antworten erheblich zu reduzieren.

## Übersicht

Kompressionsalgorithmen werden in HTTP verwendet, um die Größe der über das Netzwerk heruntergeladenen Ressourcen zu verringern, was die Bandbreitenkosten und die Ladezeit von Seiten reduziert. Verlustfreie HTTP-Kompressionsalgorithmen arbeiten, indem sie Redundanz in der Quelle finden: Zum Beispiel Stellen, an denen Text wie der String `"function"` wiederholt wird. Sie enthalten dann nur eine Kopie des redundanten Strings und ersetzen dessen Vorkommen in der Ressource durch Verweise auf diese Kopie. Da die Verweise kürzer als der String sind, ist die komprimierte Version kürzer.

> [!NOTE]
> Ein früherer Versuch dieser Technologie wurde SDCH (Shared Dictionary Compression for HTTP) genannt, aber wurde nie weit unterstützt und 2017 entfernt. Die Übertragung des Kompressionswörterbuchs ist eine besser spezifizierte und robustere Implementierung mit breiterem Konsens in der Industrie.

Nehmen Sie zum Beispiel dieses JavaScript:

```js
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

Dies könnte komprimiert werden, indem wiederholte Strings durch Verweise auf eine frühere Position und Anzahl von Zeichen ersetzt werden, wie folgt:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In diesem Beispiel bezieht sich `[0:9]` auf das Kopieren der 9 Zeichen, beginnend bei Zeichen 0. Beachten Sie, dass dies ein vereinfachtes Beispiel ist, um das Konzept zu veranschaulichen, und die tatsächlichen Algorithmen komplexer sind.

Clients können dann die Komprimierung nach dem Herunterladen rückgängig machen, um die ursprüngliche, unkomprimierte Ressource wiederherzustellen.

### Kompressionswörterbücher

Algorithmen wie {{Glossary("Brotli_compression", "Brotli-Kompression")}} und {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} erreichen noch größere Effizienz, indem sie die Verwendung von Wörterbüchern von häufig vorkommenden Strings erlauben, sodass keine Kopien davon in der komprimierten Ressource benötigt werden. Diese Algorithmen werden mit einem vordefinierten Standardwörterbuch geliefert, das beim Komprimieren von HTTP-Antworten verwendet wird.

Die Übertragung des Kompressionswörterbuchs baut darauf auf, indem es Ihnen ermöglicht, ein eigenes Wörterbuch bereitzustellen, das insbesondere für eine bestimmte Menge von Ressourcen anwendbar ist. Der Kompressionsalgorithmus kann es dann als Bytequelle beim Komprimieren und Dekomprimieren der Ressource verwenden.

Angenommen, die Verweise aus dem vorherigen Beispiel sind in diesem gemeinsamen Wörterbuch enthalten, könnte es weiter reduziert werden auf:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Wörterbuch kann entweder eine separate Ressource sein, die nur für die Übertragung des Kompressionswörterbuchs benötigt wird, oder es kann eine Ressource sein, die die Webseite ohnehin benötigt.

Angenommen, Ihre Webseite verwendet eine JavaScript-Bibliothek. Normalerweise würden Sie eine bestimmte Version der Bibliothek laden und könnten den Versionsnamen im Namen der Bibliothek einschließen, wie `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, wird er eine Kopie der Bibliothek als Subressource abrufen.

Wenn Sie dann auf Version 2 der Bibliothek aktualisieren, bleibt der Großteil des Codes der Bibliothek wahrscheinlich gleich. Daher können Seiten die Größe des Downloads von `my-library.v2.js` erheblich reduzieren, indem sie dem Browser sagen, dass er `my-library.v1.js` als Kompressionswörterbuch für `my-library.v2.js` verwenden soll. Dann müssen alle Strings, die zwischen v1 und v2 gleich sind, nicht im Download für v2 enthalten sein, da der Browser sie bereits hat. Der größte Teil der Download-Größe von `my-library.v2.js` ist dann nur noch die Differenz zwischen den beiden Versionen.

Die Übertragung des Kompressionswörterbuchs kann eine Größenordnung mehr Komprimierung erreichen als die Komprimierung mithilfe eines Standardwörterbuchs: Siehe [Beispiele für die Übertragung von Kompressionswörterbüchern](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) für einige praxisnahe Ergebnisse.

## Wörterbuchformat

Ein Kompressionswörterbuch folgt keinem spezifischen Format, noch hat es einen spezifischen {{Glossary("MIME_type", "MIME-Typ")}}. Es handelt sich um reguläre Dateien, die bei der Komprimierung anderer Dateien mit ähnlichem Inhalt verwendet werden können.

Vorherige Versionen von Dateien enthalten typischerweise viele ähnliche Inhalte, weshalb sie ausgezeichnete Wörterbücher machen.
Die Verwendung einer vorherigen Version einer Datei als Wörterbuch ermöglicht es dem Kompressionsalgorithmus, effizient auf alle unveränderten Inhalte zu verweisen und nur die relativ kleinen Unterschiede in der neuen Version zu erfassen. Dieser Ansatz wird als Delta-Komprimierung bezeichnet.

Eine weitere Möglichkeit besteht darin, häufig vorkommende Strings (zum Beispiel Ihre HTML-Vorlagen) zusammen in einer neuen `dictionary.txt`-Datei aufzulisten, damit sie zur Komprimierung von HTML-Seiten auf der Webseite verwendet werden kann. Sie können dies weiter optimieren, indem Sie spezialisierte Werkzeuge verwenden, zum Beispiel [Brotlis Wörterbuchgenerator](https://github.com/google/brotli/blob/master/research/dictionary_generator.cc), der Wörterbücher auf ihre minimalste Größe mit minimalem Überlapp reduziert.

Wörterbücher können auch verwendet werden, um binäre Formate effektiv zu komprimieren. Zum Beispiel sind [WASM](/de/docs/WebAssembly)-Binärdateien große Ressourcen, die ebenfalls von der Delta-Komprimierung profitieren können.

## Vorhandene Ressource als Wörterbuch

Um eine Ressource als Wörterbuch zu verwenden, sollte der Server den {{HTTPHeader("Use-As-Dictionary")}}-Header in der Antwort einschließen, die die Ressource bereitstellt:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt die Ressourcen an, die diese Ressource als Wörterbuch verwenden können: in diesem Fall schließt das alle Ressourcen ein, deren URLs dem angegebenen [Muster](/de/docs/Web/API/URL_Pattern_API) entsprechen.

Wenn später eine Ressource angefordert wird, die dem angegebenen Muster entspricht (zum Beispiel `app.v2.js`), enthält die Anforderung einen SHA-256-Hash des verfügbaren Wörterbuchs im {{HTTPHeader("Available-Dictionary")}}-Header, zusammen mit `dcb`- und/oder `dcz`-Werten im {{HTTPHeader("Accept-Encoding")}}-Header (für die Delta-Komprimierung mit Brotli oder ZStandard, wie angemessen):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann dann mit einer entsprechend kodierten Antwort mit der gewählten Inhaltskodierung, die im {{HTTPHeader("Content-Encoding")}}-Header angegeben ist, antworten:

```http
Content-Encoding: dcb
```

Wenn die Antwort zwischenspeicherbar ist, muss sie einen {{HTTPHeader("Vary")}}-Header enthalten, um zu verhindern, dass Caches Wörterbuch-komprimierte Ressourcen an Clients ausliefern, die sie nicht unterstützen, oder die Antwort mit dem falschen Wörterbuch komprimiert ausliefern:

```http
Vary: accept-encoding, available-dictionary
```

Ein optionaler `id` kann ebenfalls im {{HTTPHeader("Use-As-Dictionary")}}-Header bereitgestellt werden, um es dem Server zu erleichtern, die Wörterbuchdatei zu finden, wenn sie das Wörterbuch nicht nach dem Hash speichern:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn dies bereitgestellt wird, wird der Wert in zukünftigen Anfragen im {{HTTPHeader("Dictionary-ID")}}-Header gesendet:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss den Hash aus dem `Available-Dictionary`-Header weiterhin überprüfen — die `Dictionary-ID` sind zusätzliche Informationen für den Server zur Identifizierung des Wörterbuchs, ersetzen jedoch nicht die Notwendigkeit für den `Available-Dictionary`-Header.

## Separates Wörterbuch

Ein HTML-Dokument kann dem Browser auch ein Kompressionswörterbuch bereitstellen, das keine Ressource ist, die der Browser ohnehin über ein Element wie ein {{htmlelement("script")}}-Tag herunterlädt. Es gibt zwei Methoden, dies zu tun:

- Einen {{HTMLElement("link")}}-Element einfügen, dessen [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut auf `compression-dictionary` gesetzt ist:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Das Wörterbuch mithilfe des {{HTTPHeader("Link")}}-Headers referenzieren:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

Dieses Wörterbuch wird dann vom Browser während der Leerlaufzeit heruntergeladen, und diese Antwort muss den {{HTTPHeader("Use-As-Dictionary")}}-Header enthalten:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Von hier aus ist der Prozess ähnlich wie im vorherigen Beispiel, wenn eine übereinstimmende Ressource angefordert wird.

## Erstellen von wörterbuch-komprimierten Antworten

Wörterbuch-komprimierte Antworten können entweder die Brotli- oder ZStandard-Algorithmen verwenden, mit zwei zusätzlichen Anforderungen: Sie müssen auch einen magischen Header und einen eingebetteten Wörterbuch-Hash enthalten.

Wörterbuch-komprimierte Ressourcen können dynamisch erstellt werden, aber für statische Ressourcen kann es besser sein, diese im Voraus zur Build-Zeit zu erstellen. Bei der Verwendung vorheriger Versionen als Wörterbücher erfordert dies die Entscheidung, wie viele Delta-komprimierte Versionen erstellt werden sollen — nur für die letzte Version oder für die letzten X Versionen für einen bestimmten Wert von X.

Angenommen, eine Wörterbuchdatei namens `dictionary.text` und eine Datei zum Komprimieren namens `data.text`, wird der folgende Bash-Befehl die Datei mit Brotli komprimieren, was eine komprimierte Datei namens `data.txt.dcb` erzeugt:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Mit den gleichen Eingabedateien wird der folgende Bash-Befehl die Datei mit ZStandard komprimieren, was eine komprimierte Datei namens `data.txt.dcz` erzeugt:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Beachten Sie, dass Sie {{Glossary("OpenSSL", "OpenSSL")}} lokal sowie Brotli oder ZStandard installiert haben müssen.

## Einschränkungen

Kompressionsalgorithmen sind Angriffen auf die Sicherheit ausgesetzt, daher gibt es eine Reihe von Einschränkungen für die Übertragung des Kompressionswörterbuchs, darunter:

- Wörterbücher müssen selbigen Ursprungs mit der Ressource sein, die das Wörterbuch verwendet.
- Wörterbuch-komprimierte Ressourcen müssen selbigen Ursprungs mit dem Dokumentursprung sein oder den [CORS](/de/docs/Web/HTTP/Guides/CORS)-Regeln folgen und daher mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut angefordert und mit einem passenden {{HTTPHeader("Access-Control-Allow-Origin")}}-Header bereitgestellt werden.
- Wörterbücher unterliegen der üblichen HTTP-Cache-Partitionierung und können daher nicht zwischen Ursprüngen geteilt werden, selbst wenn sie die gleichen Ressourcen herunterladen. Das Wörterbuch muss für jeden Ursprung erneut heruntergeladen werden.

Darüber hinaus könnten Wörterbücher selbst zu Tracking-Vektoren werden, sodass Browser diese Funktion möglicherweise einschränken, wenn Cookies deaktiviert sind oder wenn andere zusätzliche Datenschutzmaßnahmen aktiviert sind.

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
- [Entwurfsspezifikation](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
- [Ressourcen zur Übertragung des Kompressionswörterbuchs](https://use-as-dictionary.com/)
