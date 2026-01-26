---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: 8e832fce3360267f296722dfd6dd87d1c547b1bf
---

**Base64** ist eine Gruppe ähnlicher [Binär-zu-Text-Codierung](https://en.wikipedia.org/wiki/Binary-to-text_encoding) Schemata, die Binärdaten in einem {{Glossary("ASCII", "ASCII")}}-Zeichenkettenformat darstellen, indem sie in eine Radix-64-Darstellung umgewandelt werden. Der Begriff _Base64_ stammt von einer spezifischen [MIME-Inhaltsübertragungscodierung](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

Base64-Codierungsschemata werden häufig verwendet, um Binärdaten zur Speicherung oder Übertragung über Medien zu codieren, die nur mit ASCII-Text (oder einem Superset von ASCII, das immer noch keine willkürlichen Binärdaten akzeptiert) umgehen können. Dies stellt sicher, dass die Daten während des Transports intakt und unverändert bleiben. Häufige Anwendungen von Base64 umfassen:

- E-Mail über [MIME](https://en.wikipedia.org/wiki/MIME)
- Speichern komplexer Daten in [XML](/de/docs/Web/XML)
- Codierung von Binärdaten, sodass sie in einer [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data) enthalten sein können

## Base64-Zeichen

Wenn der Begriff "Base64" alleine verwendet wird, um auf einen bestimmten {{Glossary("algorithm", "Algorithmus")}} zu verweisen, bezieht er sich typischerweise auf die in {{rfc("4648", "", 4)}} dargestellte Version von Base64, die das folgende Alphabet verwendet, um die Radix-64-Ziffern darzustellen, zusammen mit `=` als Füllzeichen:

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

## URL- und dateinamen-sicheres Base64

Eine übliche Variante dieser Definition erlaubt nur Zeichen, die in Dateinamen und {{Glossary("URL", "URL")}}-Werten sicher verwendet werden können.
Diese Version, definiert in {{rfc("4648", "", 5)}}, lässt die Polsterung weg und ersetzt `+` und `/` durch `-` und `_`.

Diese Codierung brauchen Sie nicht, wenn die Daten nicht in einen Pfadsegment oder Abfrageparameter eingefügt werden — zum Beispiel haben [Data URLs](/de/docs/Web/URI/Reference/Schemes/data) weder das eine noch das andere und können die standardmäßige Base64-Codierung verwenden.

## Erhöhte Größe bei der Codierung

Jede Base64-Ziffer repräsentiert 6 Bits an Daten (64 = 2<sup>6</sup>). Drei 8-Bit-Bytes der Eingabezeichenkette/Binärdatei (3×8 Bits = 24 Bits) können durch vier 6-Bit Base64-Ziffern dargestellt werden (4×6 = 24 Bits).

Das bedeutet, dass die Base64-Version einer Zeichenkette oder Datei typischerweise ungefähr ein Drittel größer ist als ihre Quelle (die genaue Größensteigerung hängt von verschiedenen Faktoren ab, wie der absoluten Länge der Zeichenkette, ihrer Länge modulo 3 und ob Füllzeichen verwendet werden).

## Letztes Stück

Die Base64-Zeichenkette kann in Stücke von 4 Zeichen unterteilt werden, wobei das letzte Stück möglicherweise weniger als 4 Zeichen hat. Das letzte Stück kann mit `=` Zeichen aufgefüllt werden, damit es genau 4 Zeichen lang ist. Ohne Füllzeichen kann das letzte Stück eine der folgenden Formen haben:

- 2 Zeichen: codiert 12 Bits, die 1 Byte (8 Bits) an Daten repräsentieren
- 3 Zeichen: codiert 18 Bits, die 2 Bytes (16 Bits) an Daten repräsentieren
- 4 Zeichen: codiert 24 Bits, die 3 Bytes (24 Bits) an Daten repräsentieren

In den ersten beiden Fällen können die Zeichen 4 oder 2 zusätzliche Nachlaufbits haben, die keine Daten darstellen. In diesem Fall erfordert [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648#section-3.5), dass Encoder diese Bits auf Null setzen und Decoder optional einen Fehler auslösen, wenn sie nicht Null sind. Zum Beispiel, wenn die codierten Daten ein einzelnes Byte `0b01010101` sind, werden zwei Zeichen benötigt, `0b010101` (`V`) und `0b010000` (`Q`), wobei das zweite Zeichen 4 Nachlaufbits zu Null gesetzt hat. Das Dekodieren von `VR==` (wo das zweite Zeichen `0b010001` darstellt) ergibt technisch gesehen dasselbe Byte `0b01010101`, aber der Decoder kann aufgrund der nicht-nullenden Nachlaufbits einen Fehler auslösen.

## JavaScript-Unterstützung

Die Klasse {{jsxref("Uint8Array")}} bietet die Methoden {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.setFromBase64()")}} für die Umwandlung zu/von Base64-Zeichenketten.

Browser bieten auch zwei JavaScript-Funktionen für das Dekodieren und Codieren von Base64-Zeichenketten nativ an:

- [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/btoa)): erstellt eine Base64-codierte ASCII-Zeichenkette aus einer Zeichenkette von Binärdaten ("btoa" sollte als "binary to ASCII" gelesen werden).
- [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/atob)): dekodiert eine Base64-codierte Zeichenkette ("atob" sollte als "ASCII to binary" gelesen werden).

> [!NOTE]
> Base64 ist eine binäre Codierung und keine Textcodierung, aber `btoa` und `atob` wurden zur Webplattform hinzugefügt, bevor diese Binärdatentypen unterstützte. Deshalb verwenden die beiden Funktionen Zeichenketten, um Binärdaten darzustellen, wobei der {{Glossary("code_point", "Codepunkt")}} jedes Zeichens den Wert jedes Bytes repräsentiert. Das hat zu dem weit verbreiteten Missverständnis geführt, dass `btoa` verwendet werden kann, um beliebige Textdaten zu codieren — zum Beispiel, um eine Base64 `data:` URL eines Text- oder HTML-Dokuments zu erstellen.
>
> Die Byte-zu-Codepunkt-Korrespondenz gilt jedoch nur zuverlässig für Codepunkte bis `0x7f`. Darüber hinaus führen Codepunkte über `0xff` dazu, dass `btoa` einen Fehler auslöst, weil sie den Höchstwert für 1 Byte überschreiten. Der Abschnitt ["Unicode Strings"](/de/docs/Web/API/Window/btoa#unicode_strings) von [`Window.btoa()`](/de/docs/Web/API/Window/btoa) erklärt, wie dieses Problem umgangen werden kann, wenn beliebiger Unicode-Text codiert wird.

## Siehe auch

- JavaScript-APIs:
  - [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/atob))
  - [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/btoa))
  - {{jsxref("Uint8Array")}}
- [Data URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [Base64](https://en.wikipedia.org/wiki/Base64) auf Wikipedia
- Base64-Algorithmus beschrieben in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)
