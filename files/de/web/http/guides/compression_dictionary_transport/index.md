---
title: Compression Dictionary Transport
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: 57d3803b2ba01a8ac6cf51e796d6871e4e411ff1
---

{{SeeCompatTable}}

**Compression Dictionary Transport** ermöglicht es, mithilfe eines gemeinsam genutzten Komprimierungswörterbuchs die übertragene Datenmenge von HTTP-Antworten erheblich zu reduzieren.

## Überblick

In HTTP werden Komprimierungsalgorithmen eingesetzt, um die Größe von Ressourcen zu verringern, die über das Netzwerk heruntergeladen werden. Dadurch sinken der Bandbreitenbedarf und die Ladezeit von Seiten. Verlustfreie HTTP-Komprimierungsalgorithmen suchen nach Wiederholungen in den Ausgangsdaten, beispielsweise nach mehrfach vorkommendem Text wie der Zeichenfolge `"function"`. Sie speichern die wiederholte Zeichenfolge nur einmal und ersetzen weitere Vorkommen in der Ressource durch Verweise darauf. Da die Verweise kürzer sind als die Zeichenfolge, ist die komprimierte Version kleiner.

> [!NOTE]
> Ein früherer Versuch mit dieser Technologie hieß SDCH (Shared Dictionary Compression for HTTP). Er wurde jedoch nie breit unterstützt und 2017 entfernt. Compression Dictionary Transport ist eine genauer spezifizierte und robustere Implementierung, über die in der Branche breiter Konsens besteht.

Betrachten Sie beispielsweise dieses JavaScript:

```js
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

Es ließe sich komprimieren, indem wiederholte Zeichenfolgen durch Verweise auf eine frühere Position und eine Anzahl von Zeichen ersetzt werden:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In diesem Beispiel bedeutet `[0:9]`, dass die neun Zeichen ab Zeichen 0 kopiert werden. Dieses vereinfachte Beispiel veranschaulicht lediglich das Prinzip; die tatsächlichen Algorithmen sind komplexer.

Clients können die Komprimierung nach dem Herunterladen rückgängig machen und so die ursprüngliche, unkomprimierte Ressource wiederherstellen.

### Komprimierungswörterbücher

Algorithmen wie {{Glossary("Brotli_compression", "Brotli-Komprimierung")}} und {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}} erzielen eine noch höhere Effizienz, indem sie Wörterbücher mit häufig vorkommenden Zeichenfolgen verwenden. Dadurch muss keine Kopie dieser Zeichenfolgen in der komprimierten Ressource enthalten sein. Diese Algorithmen verfügen über ein vordefiniertes Standardwörterbuch, das beim Komprimieren von HTTP-Antworten verwendet wird.

Compression Dictionary Transport baut darauf auf: Sie können ein eigenes Wörterbuch bereitstellen, das besonders gut zu einer bestimmten Gruppe von Ressourcen passt. Der Komprimierungsalgorithmus kann beim Komprimieren und Dekomprimieren der Ressource auf dessen Bytes zurückgreifen.

Wenn die im vorherigen Beispiel verwendeten Zeichenfolgen im gemeinsamen Wörterbuch enthalten sind, lässt sich die Ressource weiter verkleinern:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Wörterbuch kann eine separate Ressource sein, die nur für Compression Dictionary Transport benötigt wird, oder eine Ressource, die die Website ohnehin benötigt.

Angenommen, Ihre Website verwendet eine JavaScript-Bibliothek. Üblicherweise laden Sie eine bestimmte Version der Bibliothek und nehmen die Versionsnummer gegebenenfalls in ihren Dateinamen auf, etwa in `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, ruft er eine Kopie der Bibliothek als Unterressource ab.

Wenn Sie anschließend auf v2 der Bibliothek aktualisieren, bleibt wahrscheinlich ein Großteil des Codes unverändert. Websites können daher die Downloadgröße von `my-library.v2.js` erheblich reduzieren, indem sie den Browser anweisen, `my-library.v1.js` als Komprimierungswörterbuch für `my-library.v2.js` zu verwenden. Zeichenfolgen, die v1 und v2 gemeinsam haben, müssen beim Download von v2 nicht erneut übertragen werden, da der Browser bereits über sie verfügt. Der Download von `my-library.v2.js` besteht dann größtenteils nur noch aus den Unterschieden zwischen den beiden Versionen.

Compression Dictionary Transport kann eine um eine Größenordnung stärkere Komprimierung erreichen als die Komprimierung mit einem integrierten Standardwörterbuch. Praktische Ergebnisse finden Sie unter [Beispiele für Compression Dictionary Transport](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md).

## Wörterbuchformat

Ein Komprimierungswörterbuch muss kein bestimmtes Format einhalten und hat keinen speziellen {{Glossary("MIME_type", "MIME-Typ")}}. Wörterbücher sind gewöhnliche Dateien.

Frühere Versionen von Dateien enthalten typischerweise viele ähnliche Inhalte und eignen sich deshalb hervorragend als Wörterbücher.
Wird eine frühere Dateiversion als Wörterbuch verwendet, kann der Komprimierungsalgorithmus effizient auf alle unveränderten Inhalte verweisen und muss nur die vergleichsweise kleinen Unterschiede in der neuen Version erfassen. Dieser Ansatz wird Delta-Komprimierung genannt.

Ein anderer Ansatz besteht darin, häufig vorkommende Zeichenfolgen, beispielsweise Ihre HTML-Vorlagen, in einer neuen Datei namens `dictionary.txt` zusammenzufassen. Diese kann dann zum Komprimieren der HTML-Seiten der Website verwendet werden. Mit spezialisierten Werkzeugen lässt sich das weiter optimieren, beispielsweise mit [Brotli's dictionary generator](https://github.com/google/brotli/blob/master/research/dictionary_generator.cc), der Wörterbücher bei möglichst geringen Überschneidungen auf eine minimale Größe reduziert.

Wörterbücher können auch Binärformate effektiv komprimieren. Beispielsweise sind [WASM](/de/docs/WebAssembly)-Binärdateien große Ressourcen, die ebenfalls von Delta-Komprimierung profitieren können.

## Eine vorhandene Ressource als Wörterbuch verwenden

Um eine Ressource als Wörterbuch zu verwenden, sollte der Server den Header {{HTTPHeader("Use-As-Dictionary")}} in die Antwort aufnehmen, die die Ressource bereitstellt:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt an, welche Ressourcen diese Ressource als Wörterbuch verwenden können. In diesem Fall sind das alle Ressourcen, deren URLs dem angegebenen [Muster](/de/docs/Web/API/URL_Pattern_API) entsprechen.

Wird später eine Ressource angefordert, die dem Muster entspricht, beispielsweise `app.v2.js`, enthält die Anfrage einen SHA-256-Hash des verfügbaren Wörterbuchs im Header {{HTTPHeader("Available-Dictionary")}} sowie die Werte `dcb` und/oder `dcz` im Header {{HTTPHeader("Accept-Encoding")}} (für Delta-Komprimierung mit Brotli beziehungsweise ZStandard):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann daraufhin eine entsprechend kodierte Antwort senden und die gewählte Inhaltskodierung im Header {{HTTPHeader("Content-Encoding")}} angeben:

```http
Content-Encoding: dcb
```

Wenn die Antwort zwischengespeichert werden kann, muss sie einen {{HTTPHeader("Vary")}}-Header enthalten. So wird verhindert, dass Caches wörterbuchkomprimierte Ressourcen an Clients ausliefern, die diese nicht unterstützen, oder eine mit dem falschen Wörterbuch komprimierte Antwort ausliefern:

```http
Vary: accept-encoding, available-dictionary
```

Im Header {{HTTPHeader("Use-As-Dictionary")}} kann optional auch eine `id` angegeben werden. Damit kann der Server die Wörterbuchdatei leichter finden, wenn er Wörterbücher nicht anhand ihres Hashs speichert:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn eine `id` angegeben ist, wird ihr Wert bei späteren Anfragen im Header {{HTTPHeader("Dictionary-ID")}} gesendet:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss weiterhin den Hash aus dem `Available-Dictionary`-Header prüfen. `Dictionary-ID` liefert zusätzliche Informationen zur Identifizierung des Wörterbuchs, ersetzt aber nicht den `Available-Dictionary`-Header.

## Separates Wörterbuch

Ein HTML-Dokument kann dem Browser ebenfalls ein Komprimierungswörterbuch bereitstellen. Ein solches Wörterbuch sollte keine Ressource sein, die der Browser bereits über ein Element wie einen {{htmlelement("script")}}-Tag herunterlädt. Dafür gibt es zwei Möglichkeiten:

- Fügen Sie ein {{HTMLElement("link")}}-Element hinzu, dessen [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut auf `compression-dictionary` gesetzt ist:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Verweisen Sie über den Header {{HTTPHeader("Link")}} auf das Wörterbuch:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

Der Browser lädt dieses Wörterbuch herunter, wenn er nicht beschäftigt ist. Die Antwort muss den Header {{HTTPHeader("Use-As-Dictionary")}} enthalten:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Wird danach eine passende Ressource angefordert, läuft der Vorgang wie im vorherigen Beispiel ab.

## Gültigkeitsdauer eines Wörterbuchs

Die Antwort mit dem Header {{HTTPHeader("Use-As-Dictionary")}} legt über ihren {{HTTPHeader("Cache-Control")}}-Header auch fest, ob und wie lange der Browser das Wörterbuch speichert. Der Browser verwendet ein gespeichertes Wörterbuch nur, solange diese Antwort noch [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist oder die Direktive [`stale-while-revalidate`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control#stale-while-revalidate) noch erlaubt, die veraltete Antwort auszuliefern. In der Praxis gilt:

- [`no-store`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control#no-store) verhindert, dass der Browser die Antwort überhaupt speichert. [`no-cache`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control#no-cache) erlaubt das Speichern, verlangt aber vor jeder erneuten Verwendung eine Revalidierung. In beiden Fällen verwendet der Browser die Antwort niemals als Wörterbuch, unabhängig von ihren anderen Direktiven.
- `max-age=0` in Kombination mit `stale-while-revalidate=<seconds>` erlaubt dem Browser weiterhin, das Wörterbuch zu speichern. Es bleibt dann für die Dauer des `stale-while-revalidate`-Zeitfensters nutzbar.
- [`must-revalidate`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control#must-revalidate) hebt jedes `stale-while-revalidate`-Zeitfenster auf. Das Wörterbuch bleibt daher nur für die durch `max-age` festgelegte Dauer nutzbar. Bei `max-age=0` speichert der Browser es nie.
- Die Direktive [`s-maxage`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control#s-maxage) gilt nicht, da der Browser ein privater Cache ist.

HTML-Dokumente sind davon stärker betroffen als andere Ressourcen, weil Server sie häufig mit `no-cache` oder `max-age=0, must-revalidate` ausliefern, damit der Browser sie stets revalidiert. Ein solches Dokument kann sich unabhängig von der Formulierung des `match`-Musters nicht selbst als Wörterbuch für seine nächste Version anbieten.

In diesen Fällen verwirft der Browser das Wörterbuch, ohne einen Fehler auszugeben. Er akzeptiert den `Use-As-Dictionary`-Header, aber eine spätere Anfrage, die dem Muster entspricht, enthält keinen {{HTTPHeader("Available-Dictionary")}}-Header. Entwicklertools können auf dieses Problem hinweisen. Chrome nennt den Grund beispielsweise im [Bereich „Issues“](https://developer.chrome.com/docs/devtools/issues). Dort erscheint die Meldung „The response can't be used as a dictionary because its freshness is expired“ zusammen mit dem Namen der Antwort, die das Wörterbuch angeboten hat.

## Wörterbuchkomprimierte Antworten erstellen

Wörterbuchkomprimierte Antworten können den Brotli- oder den ZStandard-Algorithmus verwenden. Zusätzlich müssen sie einen Magic-Header und einen eingebetteten Wörterbuch-Hash enthalten.

Wörterbuchkomprimierte Ressourcen können dynamisch erstellt werden. Bei statischen Ressourcen kann es jedoch besser sein, sie bereits beim Build zu erzeugen. Wenn Sie frühere Versionen als Wörterbücher verwenden, müssen Sie entscheiden, für wie viele Versionen Sie delta-komprimierte Dateien erstellen: nur für die letzte Version oder für die letzten X Versionen, wobei Sie den Wert von X festlegen.

Mit einer Wörterbuchdatei namens `dictionary.text` und einer zu komprimierenden Datei namens `data.text` komprimiert der folgende Bash-Befehl die Datei mit Brotli und erzeugt eine komprimierte Datei namens `data.txt.dcb`:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Mit denselben Eingabedateien komprimiert der folgende Bash-Befehl die Datei mit ZStandard und erzeugt eine komprimierte Datei namens `data.txt.dcz`:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Damit dies funktioniert, müssen {{Glossary("OpenSSL", "OpenSSL")}} sowie Brotli oder ZStandard lokal installiert sein.

## Einschränkungen

Komprimierungsalgorithmen können Ziel von Sicherheitsangriffen sein. Deshalb gelten für Compression Dictionary Transport mehrere Einschränkungen, darunter:

- Wörterbücher müssen denselben Origin wie die Ressource haben, die sie verwendet.
- Wörterbuchkomprimierte Ressourcen müssen denselben Origin wie das Dokument haben oder die [CORS](/de/docs/Web/HTTP/Guides/CORS)-Regeln erfüllen. Im letzteren Fall müssen sie mit dem Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) angefordert und mit einem geeigneten {{HTTPHeader("Access-Control-Allow-Origin")}}-Header ausgeliefert werden.
- Wörterbücher unterliegen der üblichen Partitionierung des HTTP-Caches und können daher nicht zwischen verschiedenen Origins geteilt werden, selbst wenn diese dieselben Ressourcen herunterladen. Das Wörterbuch muss für jeden Origin erneut heruntergeladen werden.

Außerdem könnten Wörterbücher selbst zur Nachverfolgung genutzt werden. Browser können diese Funktion daher einschränken, wenn Cookies deaktiviert oder zusätzliche Datenschutzmaßnahmen aktiviert sind.

Wie bei anderen Ressourcen muss die Quelle des Komprimierungswörterbuchs zugelassen sein, wenn eine Website den Header {{HTTPHeader("Content-Security-Policy")}} verwendet, damit es geladen werden kann.
Insbesondere beim Laden eines [separaten Wörterbuchs](#separates_wörterbuch) über [`<link rel="compression-dictionary"> `](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) muss die Direktive `connect-src` dessen Speicherort zulassen. Ist `connect-src` nicht gesetzt, gilt stattdessen `default-src`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Komprimierung")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}}
- [`<link rel="compression-dictionary">`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [RFC 9842: Compression Dictionary Transport](https://www.rfc-editor.org/info/rfc9842/)
- [Ressourcen zu Compression Dictionary Transport](https://use-as-dictionary.com/)
