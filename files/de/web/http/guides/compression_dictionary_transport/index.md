---
title: Transport von Kompressionswörterbüchern
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: 5d5ea57d7c00fac731b5ed6df9a2ccc4b7d76cb9
---

{{SeeCompatTable}}

**Transport von Kompressionswörterbüchern** ist eine Methode zur Verwendung eines gemeinsamen Kompressionswörterbuchs, um die Transportgröße von HTTP-Antworten drastisch zu reduzieren.

## Übersicht

Kompressionsalgorithmen werden in HTTP verwendet, um die Größe von Ressourcen zu reduzieren, die über das Netzwerk heruntergeladen werden. Dadurch werden die Bandbreitenkosten und die Ladezeiten von Seiten verringert. Verlustfreie HTTP-Kompressionsalgorithmen funktionieren, indem sie Redundanzen in der Quelle finden: Zum Beispiel Stellen, an denen ein Text wie der String `"function"` mehrfach vorkommt. Sie beinhalten dann nur eine Kopie des redundanten Strings und ersetzen dessen Vorkommen in der Ressource durch Verweise auf diese Kopie. Da die Verweise kürzer sind als der String, ist die komprimierte Version kürzer.

> [!NOTE]
> Ein früherer Versuch mit dieser Technologie hieß SDCH (Shared Dictionary Compression for HTTP), wurde jedoch nie breit unterstützt und 2017 entfernt. Der Transport von Kompressionswörterbüchern ist eine besser spezifizierte und robustere Implementierung mit breiterer Zustimmung in der Branche.

Nehmen wir zum Beispiel diesen JavaScript-Code:

```js
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

Dieser könnte komprimiert werden, indem wiederholte Strings durch Verweise auf eine frühere Position und die Anzahl der Zeichen ersetzt werden, wie hier:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In diesem Beispiel bezieht sich `[0:9]` auf das Kopieren der 9 Zeichen ab Zeichen 0. Beachten Sie, dass dies ein vereinfachtes Beispiel zur Veranschaulichung des Konzepts ist und die tatsächlichen Algorithmen komplexer sind.

Clients können dann die Komprimierung nach dem Download rückgängig machen, um die ursprüngliche, unkomprimierte Ressource wiederherzustellen.

### Kompressionswörterbücher

Algorithmen wie {{Glossary("Brotli_compression", "Brotli-Kompression")}} und {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} erreichen eine noch größere Effizienz, indem sie die Verwendung von Wörterbüchern häufig vorkommender Strings erlauben, sodass Sie keine Kopien dieser Strings in der komprimierten Ressource benötigen. Diese Algorithmen werden mit einem vordefinierten Standardwörterbuch geliefert, das beim Komprimieren von HTTP-Antworten verwendet wird.

Der Transport von Kompressionswörterbüchern baut darauf auf, indem Sie Ihr eigenes Wörterbuch bereitstellen können, das speziell für eine bestimmte Gruppe von Ressourcen anwendbar ist. Der Kompressionsalgorithmus kann es dann als Quelle von Bytes verwenden, wenn er die Ressource komprimiert und dekomprimiert.

Wenn wir annehmen, dass die Verweise aus dem vorherigen Beispiel in diesem gemeinsamen Wörterbuch enthalten sind, könnte dies weiter reduziert werden auf:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Wörterbuch kann entweder eine separate Ressource sein, die nur für den Transport von Kompressionswörterbüchern benötigt wird, oder es kann eine Ressource sein, die die Website sowieso benötigt.

Beispielsweise verwenden Sie vielleicht eine JavaScript-Bibliothek auf Ihrer Website. Sie würden typischerweise eine spezifische Version der Bibliothek laden und könnten den Versionsnamen im Namen der Bibliothek einfügen, wie `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, wird er eine Kopie der Bibliothek als Subressource abrufen.

Wenn Sie dann auf v2 der Bibliothek aktualisieren, wird wahrscheinlich der größte Teil des Codes der Bibliothek gleich geblieben sein. Die Websites können die Download-Größe von `my-library.v2.js` erheblich reduzieren, indem sie dem Browser mitteilen, dass `my-library.v1.js` als Kompressionswörterbuch für `my-library.v2.js` dienen soll. Alle Strings, die zwischen v1 und v2 gemeinsam sind, müssen nicht im Download für v2 enthalten sein, da der Browser sie bereits hat. Der größte Teil der Downloadgröße von `my-library.v2.js` ist dann nur das Delta zwischen den beiden Versionen.

Der Transport von Kompressionswörterbüchern kann eine Größenordnung mehr Kompression erreichen als die Verwendung eines Standard-eingebauten Wörterbuchs: siehe [Beispiele für den Transport von Kompressionswörterbüchern](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) für einige realistische Ergebnisse.

## Wörterbuchformat

Ein Kompressionswörterbuch folgt keinem spezifischen Format und hat auch keinen spezifischen {{Glossary("MIME_type", "MIME-Typ")}}. Es sind reguläre Dateien, die in der Komprimierung anderer Dateien mit ähnlichem Inhalt verwendet werden können.

Frühere Versionen von Dateien haben oft viel ähnlichen Inhalt, was sie zu ausgezeichneten Wörterbüchern macht. Die Verwendung einer früheren Version einer Datei als Wörterbuch ermöglicht es dem Kompressionsalgorithmus, effizient auf den gesamten unveränderten Inhalt zu verweisen und nur die relativ kleinen Unterschiede in der neuen Version zu erfassen. Dieser Ansatz wird als Deltakompression bezeichnet.

Ein weiterer Ansatz besteht darin, häufige Strings (zum Beispiel Ihre HTML-Vorlagen) zusammen in einer neuen `dictionary.txt` Datei zu listen, damit diese zur Komprimierung von HTML-Seiten auf der Website verwendet werden kann. Sie können dies weiter optimieren, indem Sie spezialisierte Werkzeuge verwenden, zum Beispiel den [Brotli-Wörterbuchgenerator](https://github.com/google/brotli/blob/master/research/dictionary_generator.cc), der Wörterbücher auf ihre minimale Größe mit minimaler Überlappung reduziert.

Wörterbücher können auch effektiv zur Komprimierung binärer Formate verwendet werden. Zum Beispiel sind [WASM](/de/docs/WebAssembly) Binärdateien große Ressourcen, die ebenfalls von der Deltakompression profitieren können.

## Vorhandene Ressource als Wörterbuch

Um eine Ressource als Wörterbuch zu verwenden, sollte der Server den {{HTTPHeader("Use-As-Dictionary")}}-Header in die Antwort aufnehmen, die die Ressource bereitstellt:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt die Ressourcen an, die diese Ressource als Wörterbuch verwenden können: in diesem Fall umfasst das alle Ressourcen, deren URLs dem angegebenen [Muster](/de/docs/Web/API/URL_Pattern_API) entsprechen.

Wenn später eine Ressource angefordert wird, die dem angegebenen Muster entspricht (zum Beispiel `app.v2.js`), wird die Anforderung einen SHA-256-Hash des verfügbaren Wörterbuchs im {{HTTPHeader("Available-Dictionary")}}-Header enthalten, zusammen mit `dcb` und/oder `dcz` Werten im {{HTTPHeader("Accept-Encoding")}}-Header (für die Deltakompression mit Brotli oder ZStandard nach Bedarf):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann dann mit einer angemessen kodierten Antwort mit der im {{HTTPHeader("Content-Encoding")}}-Header angegebenen Inhaltskodierung antworten:

```http
Content-Encoding: dcb
```

Wenn die Antwort zwischenspeicherbar ist, muss sie einen {{HTTPHeader("Vary")}}-Header enthalten, um zu verhindern, dass Caches wörterbuchkomprimierte Ressourcen an Clients ausliefern, die sie nicht unterstützen, oder die Antwort mit dem falschen Wörterbuch komprimiert anbieten:

```http
Vary: accept-encoding, available-dictionary
```

Eine optionale `id` kann auch im {{HTTPHeader("Use-As-Dictionary")}}-Header angegeben werden, damit der Server die Wörterbuchdatei leichter finden kann, falls er das Wörterbuch nicht anhand des Hashes speichert:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn dies angegeben ist, wird der Wert in zukünftigen Anfragen im {{HTTPHeader("Dictionary-ID")}}-Header gesendet:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss dennoch den Hash aus dem `Available-Dictionary`-Header überprüfen – die `Dictionary-ID` sind zusätzliche Informationen für den Server zur Identifizierung des Wörterbuchs, ersetzen jedoch nicht die Notwendigkeit für den `Available-Dictionary`-Header.

## Separates Wörterbuch

Ein HTML-Dokument kann auch ein Kompressionswörterbuch an den Browser bereitstellen, das keine Ressource ist, die der Browser sowieso herunterlädt, über ein Element wie ein {{htmlelement("script")}}-Tag. Es gibt zwei Methoden dazu:

- Einschließen eines {{HTMLElement("link")}}-Elements, dessen [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut auf `compression-dictionary` gesetzt ist:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Verweis auf das Wörterbuch mit dem {{HTTPHeader("Link")}}-Header:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

Dieses Wörterbuch wird dann vom Browser während der Ruhezeiten heruntergeladen, und diese Antwort muss den {{HTTPHeader("Use-As-Dictionary")}}-Header enthalten:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Von hier aus ist der Prozess dem vorherigen Beispiel ähnlich, wenn eine passende Ressource angefordert wird.

## Erstellen von wörterbuchkomprimierten Antworten

Wörterbuchkomprimierte Antworten können entweder die Brotli- oder ZStandard-Algorithmen verwenden, mit zwei zusätzlichen Anforderungen: Sie müssen auch einen Magic Header und einen eingebetteten Wörterbuch-Hash enthalten.

Wörterbuchkomprimierte Ressourcen können dynamisch erstellt werden, aber für statische Ressourcen kann es besser sein, diese im Voraus zur Build-Zeit zu erstellen. Bei der Verwendung vorheriger Versionen als Wörterbücher ist es erforderlich, zu entscheiden, wie viele der auf Deltakompression basierenden Versionen erstellt werden sollen – nur für die letzte Version oder für die letzten X Versionen für einen Wert X.

Bei einem Wörterbuch mit dem Namen `dictionary.text` und einer zu komprimierenden Datei mit dem Namen `data.text` wird der folgende Bash-Befehl die Datei mit Brotli komprimieren und eine komprimierte Datei namens `data.txt.dcb` erzeugen:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Bei den gleichen Eingabedateien wird der folgende Bash-Befehl die Datei mit ZStandard komprimieren und eine komprimierte Datei namens `data.txt.dcz` erzeugen:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Beachten Sie, dass Sie {{Glossary("OpenSSL", "OpenSSL")}} lokal installiert haben müssen, ebenso wie Brotli oder ZStandard.

## Einschränkungen

Kompressionsalgorithmen sind anfällig für Sicherheitsangriffe, daher gibt es eine Reihe von Einschränkungen für den Transport von Kompressionswörterbüchern, darunter:

- Wörterbücher müssen gleichursprünglich mit der Ressource sein, die das Wörterbuch verwendet.
- Wörterbuchkomprimierte Ressourcen müssen gleichursprünglich mit der Dokumentherkunft sein oder die [CORS](/de/docs/Web/HTTP/Guides/CORS)-Regeln befolgen und daher mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut angefordert und mit einem geeigneten {{HTTPHeader("Access-Control-Allow-Origin")}}-Header ausgeliefert werden.
- Wörterbücher unterliegen der üblichen HTTP-Cache-Partitionierung und können daher nicht zwischen Ursprüngen geteilt werden, selbst wenn sie die gleichen Ressourcen herunterladen. Das Wörterbuch muss für jeden Ursprung erneut heruntergeladen werden.

Darüber hinaus könnten Wörterbücher selbst zu Tracking-Vektoren werden, sodass Browser diese Funktion möglicherweise einschränken, wenn Cookies deaktiviert sind oder wenn andere zusätzliche Datenschutzmaßnahmen aktiviert sind.

Wie bei anderen Ressourcen, wenn eine Website den {{HTTPHeader("Content-Security-Policy")}}-Header verwendet, muss das Kompressionswörterbuch eine erlaubte Quelle sein, damit es geladen werden kann. Besonders beim Laden eines [separates Wörterbuchs](#separates_wörterbuch) unter Verwendung von [`<link rel="compression-dictionary">`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary), muss die `connect-src` Direktive (oder `default-src`, wenn `connect-src` nicht gesetzt ist) den Speicherort des Wörterbuchs erlauben.

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
- [Entwurfspezifikation](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
- [Ressourcen für den Transport von Kompressionswörterbüchern](https://use-as-dictionary.com/)
