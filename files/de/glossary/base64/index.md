---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: 087a73e18e2818c1cc6b9955218c614c44e612a0
---

{{GlossarySidebar}}

**Base64** ist eine Gruppe von ähnlichen [Kodierungsschemata von Binär-zu-Text](https://en.wikipedia.org/wiki/Binary-to-text_encoding), die binäre Daten in einem {{Glossary("ASCII", "ASCII")}}-String-Format darstellen, indem sie in eine Basis-64-Darstellung umgewandelt werden. Der Begriff _Base64_ stammt von einer spezifischen [MIME-Inhaltsübertragungskodierung](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

Wenn der Begriff "Base64" alleinstehend verwendet wird, um auf einen spezifischen {{Glossary("algorithm", "Algorithmus")}} zu verweisen, bezieht er sich in der Regel auf die Version von Base64, die in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648), Abschnitt 4, definiert ist und das folgende Alphabet verwendet, um die Basis-64-Ziffern darzustellen, zusammen mit `=` als Füllzeichen:

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

Eine häufige Variante ist "Base64 URL safe", die das Padding weglässt und `+/` durch `-_` ersetzt, um Zeichen zu vermeiden, die in {{Glossary("URL", "URL")}}-Pfadsegmenten oder Abfrageparametern Probleme verursachen könnten. Diese Kodierung benötigen Sie nicht, wenn Sie die Daten nicht in einem Pfadsegment oder Abfrageparameter verwenden — zum Beispiel haben [Data-URLs](/de/docs/Web/URI/Schemes/data) weder das eine noch das andere und können die standardmäßige Base64-Kodierung verwenden.

Base64-Kodierungsschemata werden häufig verwendet, um binäre Daten zu kodieren, die in Medien gespeichert oder übertragen werden sollen, die nur mit ASCII-Text (oder einer ASCII-Erweiterung, die dennoch keine beliebigen binären Daten akzeptiert) umgehen können. Dies stellt sicher, dass die Daten während des Transports ohne Änderungen intakt bleiben. Häufige Anwendungen von Base64 sind:

- E-Mail über [MIME](https://en.wikipedia.org/wiki/MIME)
- Speichern komplexer Daten in [XML](/de/docs/Web/XML)
- Kodierung binärer Daten, sodass sie in eine [`data:` URL](/de/docs/Web/URI/Schemes/data) aufgenommen werden können

## Erhöhte Kodierungsgröße

Jede Base64-Ziffer stellt 6 Bits an Daten dar. So können drei 8-Bit-Bytes der Eingabestrings/-datei (3×8 Bits = 24 Bits) durch vier 6-Bit-Base64-Ziffern (4×6 = 24 Bits) dargestellt werden.

Dies bedeutet, dass die Base64-Version eines Strings oder einer Datei typischerweise etwa ein Drittel größer ist als ihre Quelle (die genaue Größenvergrößerung hängt von verschiedenen Faktoren ab, wie z.B. der absoluten Länge des Strings, seiner Länge modulo 3 und ob Füllzeichen verwendet werden).

## Letzter Block

Der Base64-String kann in Blöcke von 4 Zeichen unterteilt werden, wobei der letzte Block weniger als 4 Zeichen haben kann. Der letzte Block kann mit `=` Zeichen aufgefüllt werden, sodass er genau 4 Zeichen lang ist. Ohne Füllzeichen kann der letzte Block einer der folgenden sein:

- 2 Zeichen: kodiert 12 Bits, die 1 Byte (8 Bits) an Daten repräsentieren
- 3 Zeichen: kodiert 18 Bits, die 2 Bytes (16 Bits) an Daten repräsentieren
- 4 Zeichen: kodiert 24 Bits, die 3 Bytes (24 Bits) an Daten repräsentieren

In den ersten beiden Fällen können die Zeichen 4 oder 2 zusätzliche nachfolgende Bits enthalten, die keine Daten darstellen. In diesem Fall verlangt [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648#section-3.5) von Kodierern, diese Bits auf Null zu setzen, und von Dekodierern, optional einen Fehler auszulösen, wenn sie nicht Null sind. Beispielsweise, wenn die kodierten Daten ein einzelnes Byte `0b01010101` sind, dann benötigt es zwei Zeichen `0b010101` (`V`) und `0b010000` (`Q`), wo das zweite Zeichen 4 nachfolgende Bits auf Null gesetzt hat. Das Dekodieren von `VR==` (wo das zweite Zeichen `0b010001` darstellt) ergibt technisch dasselbe Byte `0b01010101`, aber der Dekodierer könnte einen Fehler verursachen, weil die nachfolgenden Bits nicht Null sind.

## JavaScript-Unterstützung

Die Klasse {{jsxref("Uint8Array")}} bietet die Methoden {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}}, und {{jsxref("Uint8Array.prototype.setFromBase64()")}} für die Konvertierung zu/von base64-Strings.

Browser bieten auch nativ zwei JavaScript-Funktionen zum Dekodieren und Kodieren von Base64-Strings:

- [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [in Web Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/btoa)): erstellt einen Base64-kodierten ASCII-String aus einem String von binären Daten ("btoa" sollte als "binary to ASCII" gelesen werden).
- [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [in Web Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/atob)): dekodiert einen Base64-kodierten String ("atob" sollte als "ASCII to binary" gelesen werden).

> [!NOTE]
> Base64 ist eine binäre Kodierung und keine Textkodierung, aber `btoa` und `atob` wurden zur Webplattform hinzugefügt, bevor sie binäre Datentypen unterstützte. Infolgedessen verwenden die beiden Funktionen Strings, um binäre Daten darzustellen, wobei der {{Glossary("code_point", "Codepunkt")}} jedes Zeichens den Wert jedes Bytes repräsentiert. Dies hat zu dem Missverständnis geführt, dass `btoa` verwendet werden kann, um beliebige Textdaten zu kodieren - zum Beispiel, um eine Base64 `data:` URL eines Text- oder HTML-Dokuments zu erstellen.
>
> Jedoch hält die Byte-zu-Codepunkt-Entsprechung nur zuverlässig für Codepunkte bis `0x7f`. Außerdem führen Codepunkte über `0xff` dazu, dass `btoa` einen Fehler auslöst, weil der Maximalwert für 1 Byte überschritten wird. Der nächste Abschnitt beschreibt, wie man dieses Problem umgeht, wenn man beliebigen Unicode-Text kodiert.

## Siehe auch

- JavaScript-APIs:
  - [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [in Web Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/atob))
  - [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [in Web Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/btoa))
  - {{jsxref("Uint8Array")}}
- [Data-URLs](/de/docs/Web/URI/Schemes/data)
- [Base64](https://en.wikipedia.org/wiki/Base64) auf Wikipedia
- Base64-Algorithmus beschrieben in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)
