---
title: Kompression Dictionary Transport
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: 07fe6a6cf8e1961eec54a77e680ba385611a249e
---

{{SeeCompatTable}}

**Kompression Dictionary Transport** ist eine Methode, ein gemeinsames Kompressions-Wörterbuch zu verwenden, um die Transportgröße von HTTP-Antworten drastisch zu reduzieren.

## Übersicht

Kompressionsalgorithmen werden in HTTP verwendet, um die Größe von Ressourcen, die über das Netzwerk heruntergeladen werden, zu verringern. Dadurch werden die Bandbreitenkosten und die Ladezeiten der Seiten reduziert. Verlustfreie HTTP-Kompressionsalgorithmen arbeiten, indem sie Redundanzen in der Quelle finden: z.B. Stellen, an denen Text wie der String `"function"` wiederholt wird. Sie enthalten dann nur eine Kopie des redundanten Strings und ersetzen dessen Vorkommen in der Ressource durch Referenzen auf diese Kopie. Da die Referenzen kürzer als der String sind, ist die Komprimierungsversion kürzer.

> [!NOTE]
> Ein früherer Versuch dieser Technologie wurde SDCH (Shared Dictionary Compression for HTTP) genannt, aber es wurde nie weit unterstützt und 2017 entfernt. Kompression Dictionary Transport ist eine besser spezifizierte und robustere Implementierung mit breiterem Konsens in der Industrie.

Zum Beispiel nehmen Sie diesen JavaScript-Code:

```js
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

Dies könnte komprimiert werden, indem wiederholte Strings durch Referenzen auf eine vorherige Position und Anzahl der Zeichen ersetzt werden, wie folgt:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In diesem Beispiel bezieht sich `[0:9]` auf das Kopieren der 9 Zeichen beginnend beim Zeichen 0. Beachten Sie, dass dies ein vereinfachtes Beispiel ist, um das Konzept zu veranschaulichen, und die tatsächlichen Algorithmen komplexer sind.

Clients können die Kompression nach dem Download rückgängig machen, um die ursprüngliche, unkomprimierte Ressource wiederherzustellen.

### Kompressions-Wörterbücher

Algorithmen wie {{Glossary("Brotli_compression", "Brotli compression")}} und {{Glossary("Zstandard_compression", "Zstandard compression")}} erreichen eine noch höhere Effizienz, indem sie die Verwendung von Wörterbüchern mit häufig vorkommenden Strings ermöglichen, sodass keine Kopien davon in der komprimierten Ressource vorhanden sein müssen. Diese Algorithmen werden mit einem vordefinierten Standardwörterbuch ausgeliefert, das beim Komprimieren von HTTP-Antworten verwendet wird.

Kompression Dictionary Transport baut darauf auf, indem es Ihnen ermöglicht, Ihr eigenes Wörterbuch bereitzustellen, das besonders auf einen bestimmten Satz von Ressourcen anwendbar ist. Der Kompressionsalgorithmus kann es dann als Quelle von Bytes verwenden, wenn er die Ressource komprimiert und dekomprimiert.

Angenommen, die Referenzen aus dem vorherigen Beispiel sind in diesem gemeinsamen Wörterbuch enthalten, könnte dies weiter reduziert werden zu:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Wörterbuch kann entweder eine separate Ressource sein, die nur für Kompression Dictionary Transport erforderlich ist, oder eine Ressource, die die Website ohnehin benötigt.

Zum Beispiel, wenn Ihre Website eine JavaScript-Bibliothek verwendet. Normalerweise würden Sie eine spezifische Version der Bibliothek laden und könnten den Versionsnamen im Namen der Bibliothek einschließen, wie `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, wird er eine Kopie der Bibliothek als Subressource abrufen.

Wenn Sie dann auf v2 der Bibliothek aktualisieren, wird der Großteil des Codes der Bibliothek wahrscheinlich gleich geblieben sein. Websites können die Größe des Downloads von `my-library.v2.js` erheblich reduzieren, indem sie dem Browser mitteilen, `my-library.v1.js` als Kompressions-Wörterbuch für `my-library.v2.js` zu verwenden. Dann brauchen alle Strings, die zwischen v1 und v2 gemeinsam sind, nicht im Download von v2 enthalten zu sein, da der Browser sie bereits hat. Der Großteil der Downloadgröße von `my-library.v2.js` ist dann nur der Unterschied zwischen den beiden Versionen.

Kompression Dictionary Transport kann eine Größenordnung mehr Kompression erreichen als die Kompression mit einem standardmäßigen integrierten Wörterbuch: siehe [Kompressions-Wörterbuchtransportbeispiele](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) für einige praktische Ergebnisse.

## Wörterbuchformat

Ein Kompressions-Wörterbuch folgt keinem bestimmten Format und hat keinen spezifischen {{Glossary("MIME_type", "MIME-Typ")}}. Es sind normale Dateien, die zur Komprimierung anderer Dateien mit ähnlichem Inhalt verwendet werden können.

Vorherige Versionen von Dateien haben in der Regel viele ähnliche Inhalte, weshalb sie sich hervorragend als Wörterbücher eignen. Die Verwendung einer vorherigen Version einer Datei als Wörterbuch ermöglicht es dem Kompressionsalgorithmus, effizient auf alle unveränderten Inhalte zu verweisen und lediglich die relativ kleinen Unterschiede in der neuen Version zu erfassen. Dieser Ansatz wird als Deltakomprimierung bezeichnet.

Ein weiterer Ansatz besteht darin, häufige Strings (zum Beispiel Ihre HTML-Vorlagen) zusammen in einer neuen `dictionary.txt`-Datei aufzulisten, damit sie zur Komprimierung von HTML-Seiten auf der Website verwendet werden können. Sie können dies weiter optimieren, indem Sie spezialisierte Tools verwenden, z.B. [Brotli's Wörterbuchgenerator](https://github.com/google/brotli/blob/master/research/dictionary_generator.cc), der Wörterbücher auf ihre Mindestgröße reduziert und minimale Überschneidungen aufweist.

Wörterbücher können auch effektiv verwendet werden, um binäre Formate zu komprimieren. Zum Beispiel sind [WASM](/de/docs/WebAssembly) Binärdateien große Ressourcen, die ebenfalls von der Deltakomprimierung profitieren können.

## Bestehende Ressource als Wörterbuch

Um eine Ressource als Wörterbuch zu verwenden, sollte der Server die {{HTTPHeader("Use-As-Dictionary")}}-Header in der Antwort einfügen, die die Ressource bereitstellt:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt die Ressourcen an, die diese Ressource als Wörterbuch verwenden können: In diesem Fall sind das alle Ressourcen, deren URLs mit dem angegebenen [Pattern](/de/docs/Web/API/URL_Pattern_API) übereinstimmen.

Wenn später eine Ressource angefordert wird, die dem angegebenen Muster entspricht (zum Beispiel `app.v2.js`), wird die Anfrage einen SHA-256-Hash des verfügbaren Wörterbuchs im {{HTTPHeader("Available-Dictionary")}}-Header enthalten, zusammen mit `dcb`- und/oder `dcz`-Werten im {{HTTPHeader("Accept-Encoding")}}-Header (für die Deltakomprimierung unter Verwendung von Brotli oder ZStandard nach Bedarf):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann dann mit einer entsprechend kodierten Antwort mit der im {{HTTPHeader("Content-Encoding")}}-Header angegebenen Inhaltskodierung antworten:

```http
Content-Encoding: dcb
```

Wenn die Antwort zwischengespeichert werden kann, muss sie einen {{HTTPHeader("Vary")}}-Header enthalten, um zu verhindern, dass Caches kompressions-wörterbuchkomprimierte Ressourcen an Clients liefern, die sie nicht unterstützen, oder die Antwort mit dem falschen Wörterbuch komprimiert ausliefern:

```http
Vary: accept-encoding, available-dictionary
```

Ein optionales `id` kann ebenfalls im {{HTTPHeader("Use-As-Dictionary")}}-Header bereitgestellt werden, um dem Server zu ermöglichen, die Wörterbuchdatei einfacher zu finden, wenn sie das Wörterbuch nicht mit dem Hash speichern:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn dies bereitgestellt wird, wird der Wert in zukünftigen Anfragen im {{HTTPHeader("Dictionary-ID")}}-Header gesendet:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss dennoch den Hash aus dem `Available-Dictionary`-Header prüfen — die `Dictionary-ID` ist zusätzliche Information für den Server, um das Wörterbuch zu identifizieren, ersetzt aber nicht die Notwendigkeit für den `Available-Dictionary`-Header.

## Separates Wörterbuch

Ein HTML-Dokument kann dem Browser auch ein Kompressions-Wörterbuch bereitstellen, das keine Ressource ist, die der Browser ohnehin über ein Element wie ein {{htmlelement("script")}}-Tag herunterlädt. Es gibt zwei Methoden, dies zu tun:

- Einfügen eines {{HTMLElement("link")}}-Elements, dessen [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut auf `compression-dictionary` gesetzt ist:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Das Wörterbuch unter Verwendung des {{HTTPHeader("Link")}}-Headers referenzieren:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

Dieses Wörterbuch wird dann vom Browser während der Leerlaufzeit heruntergeladen und diese Antwort muss den {{HTTPHeader("Use-As-Dictionary")}}-Header enthalten:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Von hier aus ist der Prozess ähnlich wie im vorherigen Beispiel, wenn eine übereinstimmende Ressource angefordert wird.

## Erstellen von wörterbuchkomprimierten Antworten

Wörterbuchkomprimierte Antworten können entweder die Brotli- oder ZStandard-Algorithmen verwenden, mit zwei zusätzlichen Anforderungen: Sie müssen auch einen speziellen Header und einen eingebetteten Wörterbuchhash enthalten.

Wörterbuchkomprimierte Ressourcen können dynamisch erstellt werden, aber für statische Ressourcen kann es besser sein, diese im Voraus zur Build-Zeit zu erstellen. Wenn Sie vorherige Versionen als Wörterbücher verwenden, müssen Sie entscheiden, wie viele deltakomprimierte Versionen erstellt werden sollen — nur für die letzte Version oder für die letzten X Versionen für einen Wert von X.

Angesichts einer Wörterbuchdatei namens `dictionary.text` und einer zu komprimierenden Datei namens `data.text`, wird der folgende Bash-Befehl die Datei mit Brotli komprimieren und eine komprimierte Datei namens `data.txt.dcb` erzeugen:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Angesichts der gleichen Eingabedateien wird der folgende Bash-Befehl die Datei mit ZStandard komprimieren und eine komprimierte Datei namens `data.txt.dcz` erzeugen:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Beachten Sie, dass Sie {{Glossary("OpenSSL", "OpenSSL")}} lokal installiert haben müssen sowie Brotli oder ZStandard.

## Einschränkungen

Kompressionsalgorithmen sind anfällig für Sicherheitsangriffe, daher gibt es eine Reihe von Einschränkungen für Kompression Dictionary Transport, einschließlich:

- Wörterbücher müssen gleichen Ursprungs mit der Ressource sein, die das Wörterbuch verwendet.
- Wörterbuchkomprimierte Ressourcen müssen gleichen Ursprungs mit dem Dokumentursprung sein oder den [CORS](/de/docs/Web/HTTP/Guides/CORS)-Regeln folgen und daher mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut angefordert werden und mit einem entsprechenden {{HTTPHeader("Access-Control-Allow-Origin")}}-Header bereitgestellt werden.
- Wörterbücher unterliegen der üblichen HTTP-Cache-Partitionierung und können daher nicht zwischen Ursprüngen geteilt werden, selbst wenn sie dieselben Ressourcen herunterladen. Das Wörterbuch muss für jeden Ursprung erneut heruntergeladen werden.

Zusätzlich könnten sich Wörterbücher selbst zu Tracking-Vektoren entwickeln, weshalb Browser diese Funktion möglicherweise einschränken, wenn Cookies deaktiviert sind oder wenn andere zusätzliche Datenschutzmaßnahmen aktiviert sind.

Wie bei anderen Ressourcen, wenn eine Website den {{HTTPHeader("Content-Security-Policy")}}-Header verwendet, muss das Kompressions-Wörterbuch eine erlaubte Quelle sein, damit es geladen werden kann. Insbesondere beim Laden eines [separaten Wörterbuchs](#separates_wörterbuch) mit [`<link rel="compression-dictionary">`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) muss die `connect-src`-Direktive (oder `default-src`, wenn `connect-src` nicht gesetzt ist) den Speicherort des Wörterbuchs erlauben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli compression")}}
  - {{Glossary("Zstandard_compression", "Zstandard compression")}}
- [`<link rel="compression-dictionary">`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [RFC 9842: Compression Dictionary Transport](https://www.rfc-editor.org/rfc/rfc9842)
- [Ressourcen für Compression Dictionary Transport](https://use-as-dictionary.com/)
