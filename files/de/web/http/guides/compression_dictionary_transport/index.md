---
title: Transport von Kompressionswörterbüchern
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: 6167946362a8f45b8c331ed1f7acb7b9dd727df9
---

{{SeeCompatTable}}

**Transport von Kompressionswörterbüchern** ist eine Methode, um mithilfe eines gemeinsam genutzten Kompressionswörterbuches die Übertragungsgröße von HTTP-Antworten drastisch zu reduzieren.

## Übersicht

Kompressionsalgorithmen werden in HTTP verwendet, um die Größe von über das Netzwerk heruntergeladenen Ressourcen zu verringern, wodurch die Bandbreitenkosten und die Ladezeiten reduziert werden. Verlustfreie HTTP-Kompressionsalgorithmen funktionieren, indem sie Redundanzen in der Quelle finden: Zum Beispiel, wenn Text, wie der String `"function"`, wiederholt wird. Diese Algorithmen enthalten dann nur eine Kopie des redundanten Strings und ersetzen dessen Vorkommen in der Ressource durch Verweise auf diese Kopie. Da die Verweise kürzer als der String sind, ist die komprimierte Version kürzer.

> [!NOTE]
> Ein früherer Versuch mit dieser Technologie hieß SDCH (Shared Dictionary Compression for HTTP), wurde jedoch nie breit unterstützt und 2017 entfernt. Der Transport von Kompressionswörterbüchern ist eine besser spezifizierte und robustere Implementierung mit breiterer Zustimmung in der Industrie.

Zum Beispiel, nehmen wir diesen JavaScript-Code:

```js
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

Dieser könnte komprimiert werden, indem wiederholte Strings mit Verweisen auf eine vorherige Position und Anzahl Zeichen ersetzt werden, wie folgt:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In diesem Beispiel bezieht sich `[0:9]` darauf, 9 Zeichen ab Zeichen 0 zu kopieren. Beachten Sie, dass dies ein vereinfachtes Beispiel ist, um das Konzept zu demonstrieren, und die tatsächlichen Algorithmen komplexer sind.

Clients können dann die Kompression nach dem Download rückgängig machen, um die ursprüngliche, unkomprimierte Ressource zu rekonstruieren.

### Kompressionswörterbücher

Algorithmen wie {{Glossary("Brotli_compression", "Brotli-Kompression")}} und {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} erreichen noch größere Effizienz, indem sie die Nutzung von Wörterbüchern mit häufig vorkommenden Strings erlauben, sodass im komprimierten Material keine Kopien davon benötigt werden. Diese Algorithmen werden mit einem vordefinierten Standardwörterbuch geliefert, das beim Komprimieren von HTTP-Antworten verwendet wird.

Der Transport von Kompressionswörterbüchern baut darauf auf, indem er Ihnen erlaubt, Ihr eigenes Wörterbuch bereitzustellen, das speziell auf eine bestimmte Reihe von Ressourcen zutrifft. Der Kompressionsalgorithmus kann es dann als Quelle von Bytes bei der Komprimierung und Dekomprimierung der Ressource verwenden.

Angenommen, die Verweise aus dem vorherigen Beispiel sind in diesem gemeinsamen Wörterbuch enthalten, könnte dies weiter reduziert werden auf:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Wörterbuch kann entweder eine separate Ressource sein, die nur für den Transport von Kompressionswörterbüchern benötigt wird, oder es kann eine Ressource sein, die die Website ohnehin benötigt.

Angenommen, Ihre Website verwendet eine JavaScript-Bibliothek. Sie würden typischerweise eine bestimmte Version der Bibliothek laden und könnten den Versionsnamen im Namen der Bibliothek einbeziehen, wie `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, wird er eine Kopie der Bibliothek als Unterressource abrufen.

Wenn Sie dann auf v2 der Bibliothek aktualisieren, bleibt der Großteil des Bibliothekscodes wahrscheinlich gleich. Daher können Websites die Download-Größe von `my-library.v2.js` erheblich reduzieren, indem sie dem Browser mitteilen, `my-library.v1.js` als Kompressionswörterbuch für `my-library.v2.js` zu verwenden. Dann müssen alle Strings, die zwischen v1 und v2 gemeinsam sind, nicht im Download für v2 enthalten sein, da der Browser sie bereits hat. Ein Großteil der Download-Größe von `my-library.v2.js` ist dann nur das Delta zwischen den beiden Versionen.

Der Transport von Kompressionswörterbüchern kann um Größenordnungen mehr Kompression erreichen als die Kompression mit einem standardmäßigen eingebauten Wörterbuch: siehe [Beispiele für den Transport von Kompressionswörterbüchern](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) für einige Ergebnisse aus der Praxis.

## Wörterbuchformat

Ein Kompressionswörterbuch hat kein spezifisches Format und auch keinen bestimmten {{Glossary("MIME_type", "MIME-Typ")}}. Es handelt sich um reguläre Dateien, die für die Kompression anderer Dateien mit ähnlichem Inhalt verwendet werden können.

Frühere Versionen von Dateien haben typischerweise viele ähnliche Inhalte, weshalb sie ausgezeichnete Wörterbücher darstellen.
Die Verwendung einer früheren Version einer Datei als Wörterbuch ermöglicht es dem Kompressionsalgorithmus, alle unveränderten Inhalte effizient zu referenzieren und nur die relativ kleinen Unterschiede in der neuen Version zu erfassen. Dieser Ansatz wird als Delta-Kompression bezeichnet.

Ein anderer Ansatz besteht darin, häufige Strings (z.B. Ihre HTML-Vorlagen) in einer neuen Datei `dictionary.txt` zusammenzufassen, damit sie zur Komprimierung von HTML-Seiten auf der Webseite genutzt werden können. Dies kann weiter optimiert werden, indem spezialisierte Tools genutzt werden, zum Beispiel [Brotlis Wörterbuchgenerator](https://github.com/google/brotli/blob/master/research/dictionary_generator.cc), der Wörterbücher auf ihre minimale Größe mit minimalen Überschneidungen reduziert.

Wörterbücher können auch effektiv zur Komprimierung von Binärformaten verwendet werden. Zum Beispiel sind [WASM](/de/docs/WebAssembly) Binärdateien große Ressourcen, die ebenfalls von der Delta-Kompression profitieren können.

## Bestehende Ressource als Wörterbuch

Um eine Ressource als Wörterbuch zu verwenden, sollte der Server die {{HTTPHeader("Use-As-Dictionary")}}-Header in der Antwort einschließen, die die Ressource bereitstellt:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt die Ressourcen an, die diese Ressource als Wörterbuch verwenden können: in diesem Fall umfasst dies alle Ressourcen, deren URLs dem angegebenen [Muster](/de/docs/Web/API/URL_Pattern_API) entsprechen.

Wenn später eine Ressource angefordert wird, die dem gegebenen Muster entspricht (zum Beispiel `app.v2.js`), wird die Anfrage einen SHA-256-Hash des verfügbaren Wörterbuchs im {{HTTPHeader("Available-Dictionary")}}-Header beinhalten, zusammen mit `dcb` und/oder `dcz`-Werten im {{HTTPHeader("Accept-Encoding")}}-Header (für Delta-Kompression mit Brotli oder ZStandard, je nachdem was passend ist):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann dann mit einer entsprechend codierten Antwort antworten, die mit der gewählten Inhaltscodierung im {{HTTPHeader("Content-Encoding")}}-Header angegeben ist:

```http
Content-Encoding: dcb
```

Wenn die Antwort zwischengespeichert werden kann, muss sie einen {{HTTPHeader("Vary")}}-Header enthalten, um zu verhindern, dass Caches Wörterbuch-komprimierte Ressourcen an Clients ausliefern, die sie nicht unterstützen, oder die Antwort mit dem falschen Wörterbuch komprimiert ausliefern:

```http
Vary: accept-encoding, available-dictionary
```

Ein optionales `id` kann ebenfalls im {{HTTPHeader("Use-As-Dictionary")}}-Header bereitgestellt werden, um es dem Server zu erleichtern, die Wörterbuchdatei zu finden, falls diese nicht durch den Hash gespeichert wird:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Falls dies bereitgestellt wird, wird der Wert in zukünftigen Anfragen im {{HTTPHeader("Dictionary-ID")}}-Header gesendet:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss den Hash aus dem `Available-Dictionary`-Header dennoch überprüfen — die `Dictionary-ID` ist zusätzliche Information für den Server, um das Wörterbuch zu identifizieren, ersetzt jedoch nicht die Notwendigkeit für den `Available-Dictionary`-Header.

## Separates Wörterbuch

Ein HTML-Dokument kann auch ein Kompressionswörterbuch an den Browser bereitstellen, das nicht eine Ressource ist, die der Browser ohnehin herunterlädt, über ein Element wie ein {{htmlelement("script")}}-Tag. Es gibt zwei Methoden dies zu tun:

- Einfügen eines {{HTMLElement("link")}}-Elements, dessen [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut auf `compression-dictionary` gesetzt ist:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Referenzieren des Wörterbuches mit dem {{HTTPHeader("Link")}}-Header:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

Dieses Wörterbuch wird dann vom Browser in der Leerlaufzeit heruntergeladen, und diese Antwort muss den {{HTTPHeader("Use-As-Dictionary")}}-Header enthalten:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Von hier ab ist der Prozess ähnlich wie im vorherigen Beispiel, wenn eine passende Ressource angefordert wird.

## Erstellung von Wörterbuch-komprimierten Antworten

Wörterbuch-komprimierte Antworten können entweder die Brotli- oder ZStandard-Algorithmen verwenden, mit zwei zusätzlichen Anforderungen: Sie müssen auch einen speziellen Header und einen eingebetteten Wörterbuch-Hash enthalten.

Wörterbuch-komprimierte Ressourcen können dynamisch erstellt werden, aber für statische Ressourcen kann es besser sein, diese im Voraus zur Build-Zeit zu erstellen. Bei der Verwendung früherer Versionen als Wörterbücher erfordert dies die Entscheidung, wie viele delta-komprimierte Versionen erstellt werden sollen – nur für die letzte Version oder für die letzten X Versionen für einen bestimmten Wert von X.

Angesichts einer Wörterbuchdatei namens `dictionary.text` und einer zu komprimierenden Datei namens `data.text`, wird der folgende Bash-Befehl die Datei mithilfe von Brotli komprimieren und eine komprimierte Datei namens `data.txt.dcb` erzeugen:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Mit denselben Eingabedateien wird der folgende Bash-Befehl die Datei mithilfe von ZStandard komprimieren und eine komprimierte Datei namens `data.txt.dcz` erzeugen:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Beachten Sie, dass Sie {{Glossary("OpenSSL", "OpenSSL")}} lokal installiert benötigen sowie Brotli oder ZStandard.

## Einschränkungen

Kompressionsalgorithmen sind anfällig für Sicherheitsangriffe, daher gibt es eine Reihe von Einschränkungen für den Transport von Kompressionswörterbüchern, darunter:

- Wörterbücher müssen demselben Ursprung wie die Ressource angehören, die das Wörterbuch verwendet.
- Wörterbuch-komprimierte Ressourcen müssen denselben Ursprung wie das Dokument haben oder den [CORS](/de/docs/Web/HTTP/Guides/CORS)-Regeln folgen und daher mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut angefordert und mit einem entsprechenden {{HTTPHeader("Access-Control-Allow-Origin")}}-Header bereitgestellt werden.
- Wörterbücher unterliegen der üblichen HTTP-Cache-Partitionierung und können daher nicht zwischen Ursprüngen geteilt werden, selbst wenn sie die gleichen Ressourcen herunterladen. Das Wörterbuch muss für jeden Ursprung erneut heruntergeladen werden.

Darüber hinaus könnten Wörterbücher selbst zu Tracking-Vektoren werden, daher könnten Browser diese Funktion einschränken, wenn Cookies deaktiviert sind oder wenn andere zusätzliche Datenschutzmaßnahmen aktiviert sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
- [`<link rel="compression-dictionary">`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Entwurf der Spezifikation](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
- [Ressourcen für den Transport von Kompressionswörterbüchern](https://use-as-dictionary.com/)
