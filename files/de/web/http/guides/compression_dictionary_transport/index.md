---
title: Kompressions-Wörterbuch-Transport
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: e68897ffba66e4bdaffaa5c0a6f6497b6780b1cf
---

{{SeeCompatTable}}

**Kompressions-Wörterbuch-Transport** ist eine Methode, um ein gemeinsames Kompressions-Wörterbuch zu verwenden, um die Transportgröße von HTTP-Antworten drastisch zu reduzieren.

## Übersicht

Kompressionsalgorithmen werden in HTTP verwendet, um die Größe von Ressourcen, die über das Netzwerk heruntergeladen werden, zu reduzieren, wodurch die Bandbreitenkosten und die Ladezeit von Seiten verringert werden. Verlustfreie HTTP-Kompressionsalgorithmen funktionieren, indem sie Redundanzen in der Quelle finden: Zum Beispiel Stellen, an denen Text wie der String `"function"` wiederholt wird. Sie enthalten dann nur eine Kopie des redundanten Strings und ersetzen dessen Vorkommen in der Ressource durch Referenzen auf diese Kopie. Da die Referenzen kürzer als der String sind, ist die komprimierte Version kürzer.

> [!NOTE]
> Ein früherer Versuch dieser Technologie wurde SDCH (Shared Dictionary Compression for HTTP) genannt, war jedoch nie weit verbreitet und wurde 2017 entfernt. Der Kompressions-Wörterbuch-Transport ist eine besser spezifizierte und robustere Implementierung mit breiterem industriellen Konsens.

Betrachten Sie zum Beispiel dieses JavaScript:

```js
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

Dies könnte komprimiert werden, indem wiederholte Strings durch Verweise auf einen vorherigen Standort und eine Anzahl von Zeichen ersetzt werden, wie folgt:

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

In diesem Beispiel bezieht sich `[0:9]` auf das Kopieren der 9 Zeichen beginnend bei Zeichen 0. Beachten Sie, dass dies ein vereinfachtes Beispiel zur Veranschaulichung des Konzepts ist und die tatsächlichen Algorithmen komplexer sind als dies.

Clients können dann die Kompression nach dem Download rückgängig machen, um die ursprüngliche, unkomprimierte Ressource wiederherzustellen.

### Kompressions-Wörterbücher

Algorithmen wie {{Glossary("Brotli_compression", "Brotli-Kompression")}} und {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} erreichen noch größere Effizienz, indem sie die Verwendung von Wörterbüchern für häufig vorkommende Strings ermöglichen, sodass keine Kopien davon in der komprimierten Ressource benötigt werden. Diese Algorithmen werden mit einem vordefinierten Standard-Wörterbuch geliefert, das bei der Komprimierung von HTTP-Antworten verwendet wird.

Der Kompressions-Wörterbuch-Transport baut darauf auf, indem er Ihnen ermöglicht, Ihr eigenes Wörterbuch bereitzustellen, das besonders für einen bestimmten Satz von Ressourcen anwendbar ist. Der Kompressionsalgorithmus kann es dann als Byte-Quelle beim Komprimieren und Dekomprimieren der Ressource referenzieren.

Wenn wir annehmen, dass die Referenzen aus dem vorherigen Beispiel in diesem gemeinsamen Wörterbuch enthalten sind, könnte dies weiter reduziert werden auf:

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

Das Wörterbuch kann entweder eine separate Ressource sein, die nur für den Kompressions-Wörterbuch-Transport erforderlich ist, oder es kann eine Ressource sein, die die Website ohnehin benötigt.

Nehmen Sie zum Beispiel an, Ihre Website verwendet eine JavaScript-Bibliothek. Normalerweise laden Sie eine bestimmte Version der Bibliothek und könnten den Versionsnamen im Namen der Bibliothek enthalten, z. B. `<script src="my-library.v1.js">`. Wenn der Browser Ihre Seite lädt, wird er eine Kopie der Bibliothek als Subressource abrufen.

Wenn Sie dann auf die Version 2 der Bibliothek aktualisieren, wird der größte Teil des Codes der Bibliothek wahrscheinlich gleich geblieben sein. Websites können die Größe des Downloads von `my-library.v2.js` erheblich reduzieren, indem sie dem Browser mitteilen, dass er `my-library.v1.js` als Kompressions-Wörterbuch für `my-library.v2.js` verwenden soll. Dann müssen alle Strings, die zwischen v1 und v2 gemeinsam sind, nicht im Download für v2 enthalten sein, da der Browser sie bereits hat. Der Großteil der Downloadgröße von `my-library.v2.js` ist dann nur der Unterschied zwischen den beiden Versionen.

Der Kompressions-Wörterbuch-Transport kann um eine Größenordnung mehr Kompression erreichen als Kompression unter Verwendung eines standardmäßig eingebauten Wörterbuchs: Siehe [Beispiele für Kompressions-Wörterbuch-Transport](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) für einige reale Ergebnisse.

## Wörterbuchformat

Ein Kompressions-Wörterbuch folgt keinem spezifischen Format und hat keinen spezifischen {{Glossary("MIME_type", "MIME-Typ")}}. Es handelt sich um reguläre Dateien, die bei der Komprimierung anderer Dateien mit ähnlichem Inhalt verwendet werden können.

Frühere Versionen von Dateien haben typischerweise viele ähnliche Inhalte, weshalb sie ausgezeichnete Wörterbücher sind.
Die Verwendung einer früheren Version einer Datei als Wörterbuch ermöglicht es dem Kompressionsalgorithmus effizient, auf alle unveränderten Inhalte zu verweisen und lediglich die relativ kleinen Unterschiede in der neuen Version zu erfassen. Dieser Ansatz wird als Delta-Kompression bezeichnet.

Ein weiterer Ansatz besteht darin, häufige Strings (z. B. Ihre HTML-Vorlagen) zusammen in einer neuen `dictionary.txt`-Datei aufzulisten, damit sie zur Komprimierung von HTML-Seiten auf der Website verwendet werden kann. Sie können dies weiter optimieren, indem Sie spezialisierte Tools verwenden, z. B. [Brotlis Wörterbuchgenerator](https://github.com/google/brotli/blob/master/research/dictionary_generator.cc), der Wörterbücher auf ihre minimale Größe reduziert, mit minimalem Überlapp.

Wörterbücher können auch verwendet werden, um Binärformate effektiv zu komprimieren. Zum Beispiel sind [WASM](/de/docs/WebAssembly)-Binärdateien große Ressourcen, die ebenfalls von Delta-Kompression profitieren können.

## Bestehende Ressource als Wörterbuch

Um eine Ressource als Wörterbuch zu verwenden, sollte der Server den {{HTTPHeader("Use-As-Dictionary")}}-Header in die Antwort aufnehmen, die die Ressource bereitstellt:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Der Wert dieses Headers gibt die Ressourcen an, die diese Ressource als Wörterbuch verwenden können: in diesem Fall schließt das alle Ressourcen ein, deren URLs mit dem angegebenen [Muster](/de/docs/Web/API/URL_Pattern_API) übereinstimmen.

Wenn später eine Ressource angefordert wird, die dem angegebenen Muster entspricht (z. B. `app.v2.js`), wird die Anforderung einen SHA-256-Hash des verfügbaren Wörterbuchs im {{HTTPHeader("Available-Dictionary")}}-Header enthalten, zusammen mit `dcb` und/oder `dcz`-Werten im {{HTTPHeader("Accept-Encoding")}}-Header (für Delta-Kompression mit Brotli oder ZStandard, wie zutreffend):

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Der Server kann dann mit einer entsprechend codierten Antwort mit der gewählten Inhaltscodierung antworten, die im {{HTTPHeader("Content-Encoding")}}-Header angegeben ist:

```http
Content-Encoding: dcb
```

Wenn die Antwort zwischengespeichert werden kann, muss sie einen {{HTTPHeader("Vary")}}-Header enthalten, um zu verhindern, dass Caches Wörterbuch-komprimierte Ressourcen an Clients liefern, die sie nicht unterstützen, oder die Antwort mit dem falschen Wörterbuch komprimiert liefern:

```http
Vary: accept-encoding, available-dictionary
```

Ein optionales `id` kann ebenfalls im {{HTTPHeader("Use-As-Dictionary")}}-Header bereitgestellt werden, um dem Server zu ermöglichen, die Wörterbuchdatei einfacher zu finden, wenn sie das Wörterbuch nicht über den Hash speichern:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn dies bereitgestellt wird, wird der Wert in zukünftigen Anfragen im {{HTTPHeader("Dictionary-ID")}}-Header gesendet:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Der Server muss dennoch den Hash aus dem `Available-Dictionary`-Header überprüfen — die `Dictionary-ID` ist zusätzliche Information für den Server, um das Wörterbuch zu identifizieren, ersetzt jedoch nicht die Notwendigkeit des `Available-Dictionary`-Headers.

## Separates Wörterbuch

Ein HTML-Dokument kann dem Browser auch ein Kompressions-Wörterbuch bereitstellen, das keine Ressource ist, die der Browser ohnehin herunterladen würde, über ein Element wie ein {{htmlelement("script")}}-Tag. Es gibt zwei Möglichkeiten, dies zu tun:

- Einschließen eines {{HTMLElement("link")}}-Elements, dessen [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut auf `compression-dictionary` gesetzt ist:

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- Referenzieren des Wörterbuchs unter Verwendung des {{HTTPHeader("Link")}}-Headers:

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

Dieses Wörterbuch wird dann vom Browser während der Leerlaufzeit heruntergeladen, und diese Antwort muss den {{HTTPHeader("Use-As-Dictionary")}}-Header beinhalten:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

Von hier aus ist der Prozess ähnlich wie im vorherigen Beispiel, wenn eine passende Ressource angefordert wird.

## Erstellung von Wörterbuch-komprimierten Antworten

Wörterbuch-komprimierte Antworten können entweder die Brotli- oder ZStandard-Algorithmen verwenden, mit zwei zusätzlichen Anforderungen: sie müssen auch einen magischen Header und eingebetteten Wörterbuch-Hash enthalten.

Wörterbuch-komprimierte Ressourcen können dynamisch erstellt werden, aber für statische Ressourcen kann es besser sein, diese im Voraus zur Build-Zeit zu erstellen. Bei der Verwendung vorheriger Versionen als Wörterbücher erfordert dies die Entscheidung, wie viele delta-komprimierte Versionen erstellt werden sollen — nur für die letzte Version oder für die letzten X Versionen für einen bestimmten Wert von X.

Angenommen, eine Wörterbuchdatei namens `dictionary.text` und eine zu komprimierende Datei namens `data.text`, wird der folgende Bash-Befehl die Datei mit Brotli komprimieren und eine komprimierte Datei namens `data.txt.dcb` erstellen:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

Angenommen, die gleichen Eingabedateien, wird der folgende Bash-Befehl die Datei mit ZStandard komprimieren und eine komprimierte Datei namens `data.txt.dcz` erstellen:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Beachten Sie, dass Sie {{Glossary("OpenSSL", "OpenSSL")}} lokal installiert haben müssen, sowie Brotli oder ZStandard.

## Beschränkungen

Kompressionsalgorithmen sind anfällig für Sicherheitsangriffe, daher gibt es eine Reihe von Beschränkungen für den Kompressions-Wörterbuch-Transport, einschließlich:

- Wörterbücher müssen gleicher Herkunft sein wie die Ressource, die das Wörterbuch verwendet.
- Wörterbuch-komprimierte Ressourcen müssen gleiche Herkunft mit der Dokumentherkunft aufweisen oder den [CORS](/de/docs/Web/HTTP/Guides/CORS)-Regeln folgen und so mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut angefordert und mit einem geeigneten {{HTTPHeader("Access-Control-Allow-Origin")}}-Header bereitgestellt werden.
- Wörterbücher unterliegen der üblichen HTTP-Cache-Partitionierung und können daher nicht zwischen Ursprüngen geteilt werden, selbst wenn sie die gleichen Ressourcen herunterladen. Das Wörterbuch muss für jeden Ursprung erneut heruntergeladen werden.

Zusätzlich könnten Wörterbücher selbst zu Tracking-Vektoren werden, daher können Browser diese Funktion einschränken, wenn Cookies deaktiviert sind oder wenn andere zusätzliche Datenschutzmaßnahmen aktiviert sind.

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
- [Ressourcen für den Kompressions-Wörterbuch-Transport](https://use-as-dictionary.com/)
