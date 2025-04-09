---
title: Datenkomprimierung mit Wörterbüchern
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: ae1d2366289e37ed587e24c2a02e4ec2fda6812c
---

{{HTTPSidebar}}{{SeeCompatTable}}

**Datenkomprimierung mit Wörterbüchern** ist eine Methode, die Nutzung eines gemeinsamen Komprimierungswörterbuchs, um die Transportgröße von HTTP-Antworten erheblich zu reduzieren.

## Überblick

Komprimierungsalgorithmen werden in HTTP verwendet, um die Größe von über das Netzwerk heruntergeladenen Ressourcen zu reduzieren, die Bandbreitenkosten zu senken und die Ladezeiten von Seiten zu verkürzen. Verlustfreie HTTP-Komprimierungsalgorithmen funktionieren, indem sie Redundanzen in der Quelle finden: Beispielsweise Stellen, wo Text, wie der String `"function"`, wiederholt wird. Sie enthalten dann nur eine Kopie des redundanten Strings und ersetzen Vorkommen davon in der Ressource durch Verweise auf diese Kopie. Da die Verweise kürzer als der String sind, ist die komprimierte Version kürzer.

> [!NOTE]
> Ein früherer Versuch für diese Technologie hieß SDCH (Shared Dictionary Compression for HTTP), wurde aber nie weit unterstützt und 2017 entfernt. Die Datenkomprimierung mit Wörterbüchern ist eine besser spezifizierte und robustere Implementierung mit breiterem industriellen Konsens.

Zum Beispiel, betrachten Sie diesen JavaScript-Code:

```js
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

In diesem Beispiel verweist `[0:9]` auf das Kopieren der 9 Zeichen ab Zeichen 0. Beachten Sie, dass dies ein vereinfachtes Beispiel ist, um das Konzept zu demonstrieren, und die tatsächlichen Algorithmen sind komplexer.

Die Clients können dann nach dem Herunterladen die Komprimierung rückgängig machen, um die ursprüngliche, unkomprimierte Ressource wiederherzustellen.

### Komprimierungswörterbücher

Algorithmen wie {{Glossary("Brotli_compression", "Brotli Komprimierung")}} und {{Glossary("Zstandard_compression", "Zstandard Komprimierung")}} erreichen noch höhere Effizienz, indem sie das Verwenden von Wörterbüchern häufig auftretender Zeichenfolgen ermöglichen, sodass keine Kopien davon in der komprimierten Ressource enthalten sein müssen. Diese Algorithmen werden mit einem vordefinierten Standardwörterbuch ausgeliefert, das beim Komprimieren von HTTP-Antworten verwendet wird.

Die Datenkomprimierung mit Wörterbüchern baut darauf auf, indem sie Ihnen ermöglicht, Ihr eigenes Wörterbuch bereitzustellen, das besonders für eine bestimmte Menge an Ressourcen anwendbar ist. Der Komprimierungsalgorithmus kann es dann als Quelle von Bytes verwenden, wenn er die Ressource komprimiert und dekomprimiert.

Angenommen, die Verweise aus dem vorherigen Beispiel sind in diesem gemeinsamen Wörterbuch enthalten, könnte dies weiter reduziert werden zu:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Wörterbuch kann entweder eine separate Ressource sein, die nur für die Datenkomprimierung mit Wörterbüchern benötigt wird, oder es kann eine Ressource sein, die die Website ohnehin benötigt.

Zum Beispiel, nehmen wir an, Ihre Website verwendet eine JavaScript-Bibliothek. Sie würden typischerweise eine bestimmte Version der Bibliothek laden und könnten den Versionsnamen im Namen der Bibliothek einschließen, wie `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, wird er eine Kopie der Bibliothek als Subressource abrufen.

Wenn Sie dann auf die v2 der Bibliothek aktualisieren, wird sich der Großteil des Codes der Bibliothek wahrscheinlich nicht geändert haben. Websites können die Größe des Downloads für `my-library.v2.js` erheblich reduzieren, indem sie dem Browser mitteilen, `my-library.v1.js` als Komprimierungswörterbuch für `my-library.v2.js` zu verwenden. Dann müssen alle Zeichenfolgen, die zwischen v1 und v2 gemeinsam sind, nicht im Download für v2 enthalten sein, da der Browser sie bereits hat. Der Großteil der Downloadgröße von `my-library.v2.js` ist dann nur der Unterschied zwischen den beiden Versionen.

Die Datenkomprimierung mit Wörterbüchern kann eine Größenordnung mehr Komprimierung erreichen als die Komprimierung unter Verwendung eines standardmäßigen eingebauten Wörterbuchs: siehe [Beispiele für die Datenkomprimierung mit Wörterbüchern](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) für einige praktische Ergebnisse.

## Wörterbuchformat

Ein Komprimierungswörterbuch ist eine "rohe" Datei, die keinem spezifischen Format folgt und keinen spezifischen {{Glossary("MIME_type", "MIME-Typ")}} hat. Sie sind reguläre Dateien, die verwendet werden können, um andere Dateien mit ähnlichem Inhalt zu komprimieren und können daher Textdateien oder sogar binär sein. Beispielsweise sind [WASM](/de/docs/WebAssembly) Binärdateien große Ressourcen, die ebenfalls von Delta-Komprimierung profitieren können.

## Bestehende Ressource als Wörterbuch

Um eine Ressource als Wörterbuch zu verwenden, sollte der Server den {{HTTPHeader("Use-As-Dictionary")}} Header in der Antwort, die die Ressource liefert, einschließen:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt die Ressourcen an, die diese Ressource als Wörterbuch verwenden können: in diesem Fall sind das alle Ressourcen, deren URLs dem angegebenen [Muster](/de/docs/Web/API/URL_Pattern_API) entsprechen.

Wenn später eine Ressource angefordert wird, die dem angegebenen Muster entspricht (beispielsweise `app.v2.js`), wird die Anfrage einen SHA-256-Hash des verfügbaren Wörterbuchs im {{HTTPHeader("Available-Dictionary")}} Header enthalten, zusammen mit `dcb` und/oder `dcz` Werten im {{HTTPHeader("Accept-Encoding")}} Header (für Delta-Komprimierung unter Verwendung von Brotli oder ZStandard, je nach Bedarf):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann dann mit einer entsprechend kodierten Antwort antworten mit der im {{HTTPHeader("Content-Encoding")}} Header angegebenen Inhaltskodierung:

```http
Content-Encoding: dcb
```

Wenn die Antwort zwischenspeicherbar ist, muss sie einen {{HTTPHeader("Vary")}} Header enthalten, um zu verhindern, dass Caches Ressourcen, die mit Wörterbüchern komprimiert wurden, an Clients liefern, die sie nicht unterstützen, oder die Antwort mit dem falschen Wörterbuch komprimiert liefern:

```http
Vary: accept-encoding, available-dictionary
```

Ein optionales `id` kann auch im {{HTTPHeader("Use-As-Dictionary")}} Header bereitgestellt werden, um dem Server das Finden der Wörterbuchdatei zu erleichtern, falls sie das Wörterbuch nicht anhand des Hashs speichern:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Falls dies bereitgestellt wird, wird der Wert in zukünftigen Anfragen im {{HTTPHeader("Dictionary-ID")}} Header gesendet:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss trotzdem den Hash aus dem `Available-Dictionary` Header überprüfen — die `Dictionary-ID` ist zusätzliche Information für den Server, um das Wörterbuch zu identifizieren, ersetzt aber nicht die Notwendigkeit des `Available-Dictionary` Headers.

## Separates Wörterbuch

Ein HTML-Dokument kann dem Browser ebenfalls ein Komprimierungswörterbuch bereitstellen, das keine Ressource ist, die der Browser ohnehin herunterlädt, über ein Element wie ein {{htmlelement("script")}} Tag. Es gibt zwei Methoden, dies zu tun:

- Einfügen eines {{HTMLElement("link")}} Elements, dessen [`rel`](/de/docs/Web/HTML/Attributes/rel) Attribut auf `compression-dictionary` gesetzt ist:

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

Ab hier ist der Prozess ähnlich wie beim vorherigen Beispiel, wenn eine passende Ressource angefordert wird.

## Erstellen von mit Wörterbüchern komprimierten Antworten

Mit Wörterbüchern komprimierte Antworten können entweder die Brotli- oder ZStandard-Algorithmen verwenden, mit zwei zusätzlichen Anforderungen: sie müssen auch einen magischen Header und einen eingebetteten Wörterbuch-Hash enthalten.

Mit Wörterbüchern komprimierte Ressourcen können dynamisch erstellt werden, aber für statische Ressourcen kann es besser sein, diese im Voraus zur Build-Zeit zu erstellen. Wenn vorherige Versionen als Wörterbücher verwendet werden, ist es notwendig, zu entscheiden, wie viele delta-komprimierte Versionen erstellt werden sollen — nur für die letzte Version, oder für die letzten X Versionen für einen Wert von X.

Angenommen, eine Wörterbuchdatei namens `dictionary.text` und eine zu komprimierende Datei namens `data.text` sind vorhanden, wird der folgende Bash-Befehl die Datei unter Verwendung von Brotli komprimieren und eine komprimierte Datei namens `data.txt.dcb` erzeugen:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Bei Verwendung der gleichen Eingabedateien wird der folgende Bash-Befehl die Datei unter Verwendung von ZStandard komprimieren und eine komprimierte Datei namens `data.txt.dcz` erzeugen:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Beachten Sie, dass Sie {{Glossary("OpenSSL", "OpenSSL")}} lokal installiert haben müssen, sowie Brotli oder ZStandard.

## Beschränkungen

Komprimierungsalgorithmen sind angreifbar durch Sicherheitsangriffe, daher gibt es eine Reihe von Beschränkungen für die Datenkomprimierung mit Wörterbüchern, einschließlich:

- Wörterbücher müssen gleichen Ursprungs mit der Ressource sein, die das Wörterbuch verwendet.
- Mit Wörterbüchern komprimierte Ressourcen müssen gleichen Ursprungs mit dem Dokumentursprung sein oder den [CORS](/de/docs/Web/HTTP/Guides/CORS) Regeln folgen und daher mit dem [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut angefordert und mit einem geeigneten {{HTTPHeader("Access-Control-Allow-Origin")}} Header bereitgestellt werden.
- Wörterbücher sind durch die übliche Partitionierung des HTTP-Caches gebunden und können daher nicht zwischen Ursprüngen geteilt werden, auch wenn sie die gleichen Ressourcen herunterladen. Das Wörterbuch muss für jeden Ursprung erneut heruntergeladen werden.

Zusätzlich könnten Wörterbücher selbst zu Tracking-Vektoren werden, daher können Browser diese Funktion einschränken, wenn Cookies deaktiviert sind oder wenn andere zusätzliche Datenschutzmaßnahmen aktiviert sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli Komprimierung")}}
  - {{Glossary("Zstandard_compression", "Zstandard Komprimierung")}}
- [&lt;link rel=&quot;compression-dictionary&quot;&gt;](/de/docs/Web/HTML/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Entwurfspezifikation](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
- [Ressourcen für die Datenkomprimierung mit Wörterbüchern](https://use-as-dictionary.com/)
