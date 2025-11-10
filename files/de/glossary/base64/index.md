---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Base64** ist eine Gruppe ähnlicher [Binär-zu-Text-Codierung](https://en.wikipedia.org/wiki/Binary-to-text_encoding) Schemata, die Binärdaten in einem {{Glossary("ASCII", "ASCII")}}-Zeichenfolgenformat darstellen, indem sie in eine Radix-64-Repräsentation umgewandelt werden. Der Begriff _Base64_ stammt von einer spezifischen [MIME-Inhaltstransfer-Codierung](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

Base64-Codierungsschemata werden häufig verwendet, um Binärdaten zu codieren, die in Medien gespeichert oder übertragen werden, die nur mit ASCII-Text (oder einer Obermenge von ASCII, die immer noch nicht beliebige Binärdaten akzeptiert) umgehen können. Dadurch wird sichergestellt, dass die Daten während des Transports unverändert bleiben. Häufige Anwendungen von Base64 umfassen:

- E-Mail über [MIME](https://en.wikipedia.org/wiki/MIME)
- Speicherung komplexer Daten in [XML](/de/docs/Web/XML)
- Kodierung von Binärdaten, damit sie in einer [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data) enthalten sein können

## Base64-Zeichen

Wenn der Begriff "Base64" alleine verwendet wird, um auf einen bestimmten {{Glossary("algorithm", "Algorithmus")}} zu verweisen, spricht man typischerweise von der Version von Base64, die in {{rfc("4648", "", 4)}} beschrieben ist. Diese verwendet das folgende Alphabet zur Darstellung der Radix-64-Digits, zusammen mit `=` als Auffüllzeichen:

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

## URL- und dateinamen-sicheres Base64

Eine häufige Variante dieser Definition erlaubt nur Zeichen, die sicher in Dateinamen und {{Glossary("URL", "URL")}}-Werten verwendet werden können.
Diese Version, definiert in {{rfc("4648", "", 5)}}, verzichtet auf Auffüllung und ersetzt `+` und `/` durch `-` und `_`.

Sie benötigen diese Kodierung nicht, wenn Sie die Daten nicht in einem Pfadsegment oder Abfrageparameter platzieren — zum Beispiel haben [data URLs](/de/docs/Web/URI/Reference/Schemes/data) weder noch und können die standardmäßige Base64-Codierung verwenden.

## Vergrößerung der kodierten Größe

Jedes Base64-Digit repräsentiert 6 Bit Daten (64 = 2<sup>6</sup>). Daher können drei 8-Bit-Bytes der Eingabezeichenfolge/Binärdatei (3×8 Bit = 24 Bit) durch vier 6-Bit Base64-Digits (4×6 = 24 Bit) dargestellt werden.

Dies bedeutet, dass die Base64-Version einer Zeichenfolge oder Datei typischerweise ungefähr ein Drittel größer als ihre Quelle ist (die genaue Größenvergrößerung hängt von verschiedenen Faktoren ab, wie der absoluten Länge der Zeichenfolge, ihrer Länge modulo 3 und ob Auffüllzeichen verwendet werden).

## Letztes Stück

Die Base64-Zeichenfolge kann in Blöcke von 4 Zeichen unterteilt werden, wobei der letzte Block möglicherweise weniger als 4 Zeichen enthält. Der letzte Block kann mit `=`-Zeichen aufgefüllt werden, um genau 4 Zeichen lang zu sein. Ohne Auffüllzeichen kann der letzte Block einer der folgenden sein:

- 2 Zeichen: kodiert 12 Bit, die 1 Byte (8 Bit) Daten repräsentieren
- 3 Zeichen: kodiert 18 Bit, die 2 Bytes (16 Bit) Daten repräsentieren
- 4 Zeichen: kodiert 24 Bit, die 3 Bytes (24 Bit) Daten repräsentieren

In den ersten beiden Fällen können die Zeichen 4 oder 2 zusätzliche nachfolgende Bits haben, die keine Daten repräsentieren. In diesem Fall verlangt [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648#section-3.5) von Kodierern, diese Bits auf null zu setzen, und Decodierer dazu, optional einen Fehler auszulösen, wenn sie nicht null sind. Beispielsweise, wenn die kodierten Daten ein einzelnes Byte `0b01010101` sind, dann benötigt es zwei Zeichen `0b010101` (`V`) und `0b010000` (`Q`), wobei das zweite Zeichen 4 nachfolgende Bits auf null gesetzt hat. Das Dekodieren von `VR==` (wo das zweite Zeichen `0b010001` repräsentiert) ergibt technisch dasselbe Byte `0b01010101`, aber der Decoder könnte aufgrund der nicht auf null gesetzten nachfolgenden Bits einen Fehler auslösen.

## JavaScript-Unterstützung

Die {{jsxref("Uint8Array")}}-Klasse bietet die Methoden {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.setFromBase64()")}} zur Konvertierung zu/von Base64-Zeichenfolgen.

Browser bieten auch nativ zwei JavaScript-Funktionen zum Dekodieren und Kodieren von Base64-Zeichenfolgen:

- [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/btoa)): erstellt eine Base64-enkodierte ASCII-Zeichenfolge aus einer Zeichenfolge binärer Daten ("btoa" sollte als "binary to ASCII" gelesen werden).
- [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/atob)): dekodiert eine Base64-kodierte Zeichenfolge ("atob" sollte als "ASCII to binary" gelesen werden).

> [!NOTE]
> Base64 ist eine binäre Kodierung statt einer Textkodierung, aber `btoa` und `atob` wurden zur Webplattform hinzugefügt, bevor sie binäre Datentypen unterstützte. Folglich verwenden die beiden Funktionen Zeichenfolgen, um Binärdaten darzustellen, wobei der {{Glossary("code_point", "Codepunkt")}} jedes Zeichens den Wert jedes Bytes repräsentiert. Dies hat zu einem häufigen Missverständnis geführt, dass `btoa` verwendet werden kann, um beliebige Textdaten zu kodieren — zum Beispiel, um eine Base64-`data:`-URL eines Text- oder HTML-Dokuments zu erstellen.
>
> Die Byte-zu-Codepunkt-Entsprechung hält jedoch nur zuverlässig für Codepunkte bis `0x7f` wahr. Darüber hinaus werden Codepunkte über `0xff` dazu führen, dass `btoa` einen Fehler auslöst, da sie den Maximalwert für 1 Byte überschreiten. Der nächste Abschnitt beschreibt, wie dieses Limit umgangen werden kann, wenn beliebiger Unicode-Text kodiert wird.

## Siehe auch

- JavaScript-APIs:
  - [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/atob))
  - [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/btoa))
  - {{jsxref("Uint8Array")}}
- [Data URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [Base64](https://en.wikipedia.org/wiki/Base64) auf Wikipedia
- Base64-Algorithmus beschrieben in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)
