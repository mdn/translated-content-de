---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: fc2667784c84ccc3798c1c5d74bb63c7176a228f
---

{{GlossarySidebar}}

**Base64** ist eine Gruppe ähnlicher [Binär-zu-Text-Codierung](https://en.wikipedia.org/wiki/Binary-to-text_encoding) Schemata, die Binärdaten im {{Glossary("ASCII", "ASCII")}}-Zeichenkettenformat darstellen, indem sie in eine Basis-64-Darstellung umgewandelt werden. Der Begriff _Base64_ stammt ursprünglich von einer speziellen [MIME-Inhaltstransferkodierung](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

Wenn der Begriff "Base64" allein verwendet wird, um auf einen bestimmten {{Glossary("algorithm", "Algorithmus")}} hinzuweisen, bezieht er sich typischerweise auf die Version von Base64, die in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648), Abschnitt 4, beschrieben ist und das folgende Alphabet zur Darstellung der Basis-64-Ziffern verwendet, zusammen mit `=` als Auffüllzeichen:

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

Eine häufige Variante ist "Base64 URL safe", welche das Auffüllzeichen weglässt und `+/` durch `-_` ersetzt, um Zeichen zu vermeiden, die in {{Glossary("URL", "URL")}}-Pfadsegmenten oder Abfrageparametern Probleme verursachen könnten. Diese Kodierung ist nicht notwendig, wenn Sie die Daten nicht in einem Pfadsegment oder Abfrageparameter verwenden — zum Beispiel haben [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data) beides nicht und können die Standard-Base64-Kodierung verwenden.

Base64-Codierungsschemata werden häufig verwendet, um Binärdaten für Speicherung oder Übertragung über Medien zu kodieren, die nur mit ASCII-Text (oder einer Obermenge von ASCII, die dennoch keine beliebigen Binärdaten akzeptiert) umgehen können. Dies stellt sicher, dass die Daten während des Transports ohne Änderungen intakt bleiben. Häufige Anwendungen von Base64 umfassen:

- E-Mail über [MIME](https://en.wikipedia.org/wiki/MIME)
- Speicherung komplexer Daten in [XML](/de/docs/Web/XML)
- Kodierung von Binärdaten, um sie in einer [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data) einzuschließen

## Erhöhte Kodierungsgröße

Jede Base64-Ziffer stellt 6 Bit Daten dar (64 = 2<sup>6</sup>). Somit können drei 8-Bit-Bytes der Eingabezeichenkette/-datei (3×8 Bit = 24 Bit) durch vier 6-Bit Base64-Ziffern (4×6 = 24 Bit) dargestellt werden.

Das bedeutet, dass die Base64-Version einer Zeichenkette oder Datei typischerweise etwa ein Drittel größer ist als ihre Quelle (die genaue Größenzunahme hängt von verschiedenen Faktoren ab, wie der absoluten Länge der Zeichenkette, ihrer Länge modulo 3 und ob Auffüllzeichen verwendet werden).

## Letzter Abschnitt

Der Base64-String kann in Abschnitte von 4 Zeichen unterteilt werden, wobei der letzte Abschnitt weniger als 4 Zeichen haben kann. Der letzte Abschnitt kann mit `=` Zeichen aufgefüllt werden, sodass er genau 4 Zeichen lang ist. Unter Ausschluss der Auffüllzeichen kann der letzte Abschnitt folgendermaßen sein:

- 2 Zeichen: kodiert 12 Bit, die 1 Byte (8 Bit) Daten darstellen
- 3 Zeichen: kodiert 18 Bit, die 2 Byte (16 Bit) Daten darstellen
- 4 Zeichen: kodiert 24 Bit, die 3 Byte (24 Bit) Daten darstellen

In den ersten beiden Fällen können die Zeichen 4 oder 2 zusätzliche nachfolgende Bits haben, die keine Daten darstellen. In diesem Fall erfordert [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648#section-3.5) von Kodierern, diese Bits auf null zu setzen, und von Dekodierern, optional einen Fehler auszugeben, wenn sie nicht null sind. Zum Beispiel, wenn die kodierten Daten ein einzelnes Byte `0b01010101` sind, dann benötigt es zwei Zeichen `0b010101` (`V`) und `0b010000` (`Q`), wobei das zweite Zeichen 4 nachfolgende Bits auf null gesetzt hat. Die Dekodierung von `VR==` (wobei das zweite Zeichen `0b010001` darstellt) ergibt technisch dasselbe Byte `0b01010101`, aber der Dekodierer kann einen Fehler ausgeben, weil die nachfolgenden Bits nicht null sind.

## JavaScript-Unterstützung

Die {{jsxref("Uint8Array")}} Klasse bietet die Methoden {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.setFromBase64()")}} für die Konvertierung zu/von Base64-Zeichenketten.

Browser bieten auch nativ zwei JavaScript-Funktionen zum Dekodieren und Kodieren von Base64-Zeichenketten:

- [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/btoa)): erstellt eine Base64-kodierte ASCII-Zeichenkette aus einer Zeichenkette von Binärdaten ("btoa" sollte als "binary to ASCII" gelesen werden).
- [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/atob)): dekodiert eine Base64-kodierte Zeichenkette ("atob" sollte als "ASCII to binary" gelesen werden).

> [!NOTE]
> Base64 ist eine binäre Kodierung und keine Textkodierung, aber `btoa` und `atob` wurden zur Webplattform hinzugefügt, bevor sie binäre Datentypen unterstützte. Infolgedessen verwenden die beiden Funktionen Zeichenketten zur Darstellung von Binärdaten, wobei der {{Glossary("code_point", "Code-Punkt")}} jedes Zeichens den Wert jedes Bytes darstellt. Dies hat zu einem weit verbreiteten Missverständnis geführt, dass `btoa` verwendet werden kann, um beliebige Textdaten zu kodieren — beispielsweise durch Erstellen einer Base64 `data:` URL eines Text- oder HTML-Dokuments.
>
> Die Byte-zu-Code-Punkt-Übereinstimmung ist jedoch nur bis zu Code-Punkten von `0x7f` zuverlässig. Darüber hinaus führen Code-Punkte über `0xff` dazu, dass `btoa` einen Fehler ausgibt, weil sie den Maximalwert für 1 Byte überschreiten. Der nächste Abschnitt beschreibt, wie dieses Limit umgangen werden kann, wenn beliebiger Unicode-Text kodiert wird.

## Siehe Auch

- JavaScript-APIs:
  - [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/atob))
  - [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/btoa))
  - {{jsxref("Uint8Array")}}
- [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [Base64](https://en.wikipedia.org/wiki/Base64) auf Wikipedia
- Base64-Algorithmus beschrieben in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)
