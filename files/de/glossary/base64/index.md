---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: b75355e41772e6cae6543000d3c9fed21593b4d7
---

{{GlossarySidebar}}

**Base64** ist eine Gruppe von ähnlichen [Binär-zu-Text-Kodierung](https://en.wikipedia.org/wiki/Binary-to-text_encoding) Schemata, die binäre Daten in ein {{Glossary("ASCII", "ASCII")}}-String-Format darstellen, indem sie in eine Radix-64-Darstellung umgewandelt werden. Der Begriff _Base64_ stammt von einer spezifischen [MIME-Inhaltstransferkodierung](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

Base64-Kodierungsschemata werden häufig verwendet, um binäre Daten für die Speicherung oder Übertragung über Medien zu kodieren, die nur mit ASCII-Text (oder einem Superset von ASCII, das weiterhin beliebige Binärdaten ablehnt) umgehen können. Dies stellt sicher, dass die Daten während des Transports intakt bleiben und nicht verändert werden. Häufige Anwendungen von Base64 umfassen:

- E-Mail über [MIME](https://en.wikipedia.org/wiki/MIME)
- Speicherung komplexer Daten in [XML](/de/docs/Web/XML)
- Kodierung von Binärdaten, sodass sie in einer [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data) enthalten sein können

## Base64-Zeichen

Wenn der Begriff "Base64" eigenständig zur Bezeichnung eines bestimmten {{Glossary("algorithm", "Algorithmus")}} verwendet wird, bezieht er sich typischerweise auf die Version von Base64, die in {{rfc("4648", "", 4)}} beschrieben ist und das folgende Alphabet zur Darstellung der Radix-64-Ziffern verwendet, zusammen mit `=` als Auffüllzeichen:

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

## URL- und dateinamensicheres Base64

Eine häufige Variante dieser Definition erlaubt nur Zeichen, die sicher in Dateinamen und {{Glossary("URL", "URL")}}-Werten verwendet werden können. Diese Version, die in {{rfc("4648", "", 5)}} definiert ist, lässt das Auffüllen weg und ersetzt `+` und `/` durch `-` und `_`.

Sie benötigen diese Kodierung nicht, wenn Sie die Daten nicht in einem Pfadsegment oder Abfrageparameter einfügen — zum Beispiel haben [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) weder das eine noch das andere und können die Standard-Base64-Kodierung verwenden.

## Erhöhte Größe der kodierten Daten

Jede Base64-Ziffer repräsentiert 6 Bits Daten (64 = 2<sup>6</sup>). So können drei 8-Bit-Bytes der Eingabezeichenfolge/-binärdatei (3×8 Bits = 24 Bits) durch vier 6-Bit-Base64-Ziffern dargestellt werden (4×6 = 24 Bits).

Das bedeutet, dass die Base64-Version einer Zeichenfolge oder Datei typischerweise etwa ein Drittel größer ist als ihre Quelle (die genaue Größenzunahme hängt von verschiedenen Faktoren ab, wie etwa der absoluten Länge der Zeichenfolge, ihrer Länge modulo 3 und ob Auffüllzeichen verwendet werden).

## Letzter Abschnitt

Die Base64-Zeichenfolge kann in Abschnitte von jeweils 4 Zeichen unterteilt werden, wobei der letzte Abschnitt eventuell weniger als 4 Zeichen hat. Der letzte Abschnitt kann mit `=`-Zeichen aufgefüllt werden, sodass er genau 4 Zeichen lang ist. Ohne Auffüllzeichen kann der letzte Abschnitt einer der folgenden sein:

- 2 Zeichen: kodieren 12 Bits, die 1 Byte (8 Bits) Daten darstellen
- 3 Zeichen: kodieren 18 Bits, die 2 Bytes (16 Bits) Daten darstellen
- 4 Zeichen: kodieren 24 Bits, die 3 Bytes (24 Bits) Daten darstellen

In den ersten beiden Fällen können die Zeichen 4 oder 2 zusätzliche nachgestellte Bits haben, die keine Daten darstellen. In diesem Fall verlangt [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648#section-3.5) von Kodierern, diese Bits auf null zu setzen, und von Dekodierern optional einen Fehler zu werfen, wenn sie nicht null sind. Wenn zum Beispiel die kodierten Daten ein einzelnes Byte `0b01010101` sind, benötigt es zwei Zeichen `0b010101` (`V`) und `0b010000` (`Q`), wobei das zweite Zeichen 4 nachgestellte Bits auf null gesetzt hat. Das Dekodieren von `VR==` (wobei das zweite Zeichen `0b010001` darstellt) ergibt technisch dasselbe Byte `0b01010101`, aber der Dekodierer kann einen Fehler aufgrund der nicht auf null gesetzten nachgestellten Bits werfen.

## Unterstützung in JavaScript

Die {{jsxref("Uint8Array")}}-Klasse bietet die Methoden {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.setFromBase64()")}} für die Konvertierung zu/von Base64-Zeichenfolgen.

Browser bieten auch nativ zwei JavaScript-Funktionen zur Dekodierung und Kodierung von Base64-Zeichenfolgen:

- [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/btoa)): erstellt eine Base64-kodierte ASCII-Zeichenfolge aus einer Zeichenfolge binärer Daten ("btoa" sollte als "binary to ASCII" gelesen werden).
- [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/atob)): dekodiert eine Base64-kodierte Zeichenfolge ("atob" sollte als "ASCII to binary" gelesen werden).

> [!NOTE]
> Base64 ist eine binäre Kodierung und keine Textkodierung, aber `btoa` und `atob` wurden der Webplattform hinzugefügt, bevor diese Binärdatentypen unterstützte. Infolgedessen verwenden die beiden Funktionen Zeichenfolgen, um Binärdaten darzustellen, wobei der {{Glossary("code_point", "Codepunkt")}} jedes Zeichens den Wert jedes Bytes repräsentiert. Dies hat zu dem Missverständnis geführt, dass `btoa` verwendet werden kann, um beliebige Textdaten zu kodieren — zum Beispiel, um eine Base64 `data:` URL eines Textes oder HTML-Dokuments zu erstellen.
>
> Allerdings hält die Byte-zu-Codepunkt-Entsprechung nur zuverlässig für Codepunkte bis `0x7f`. Darüber hinaus verursachen Codepunkte über `0xff`, dass `btoa` einen Fehler wirft, weil der maximale Wert für 1 Byte überschritten wird. Der nächste Abschnitt erläutert, wie dieses Limit umgangen werden kann, wenn beliebiger Unicode-Text kodiert werden soll.

## Siehe auch

- JavaScript-APIs:
  - [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/atob))
  - [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/btoa))
  - {{jsxref("Uint8Array")}}
- [Data URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [Base64](https://en.wikipedia.org/wiki/Base64) auf Wikipedia
- Base64-Algorithmus beschrieben in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)
