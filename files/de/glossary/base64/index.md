---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{GlossarySidebar}}

**Base64** ist eine Gruppe ähnlicher [Binary-to-Text Codierungen](https://de.wikipedia.org/wiki/Binary-to-text_encoding), die Binärdaten in einem {{Glossary("ASCII", "ASCII")}}-String-Format darstellen, indem sie in eine Radix-64-Darstellung umgewandelt werden. Der Begriff _Base64_ stammt von einer speziellen [MIME-Content-Transfer-Codierung](https://de.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions#Content-Transfer-Coding).

Wenn der Begriff "Base64" eigenständig verwendet wird, um auf einen spezifischen {{Glossary("algorithm", "Algorithmus")}} zu verweisen, bezieht er sich typischerweise auf die in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648), Abschnitt 4, beschriebene Version von Base64, die das folgende Alphabet zur Darstellung der Radix-64-Digits verwendet, zusammen mit `=` als Auffüllzeichen:

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

Eine häufige Variante ist "Base64 URL safe", die das Auffüllen weglässt und `+/` durch `-_` ersetzt, um Zeichen zu vermeiden, die in {{Glossary("URL", "URL")}}-Pfadsegmenten oder Abfrageparametern Probleme verursachen könnten. Diese Codierung ist nicht erforderlich, wenn die Daten nicht in einem Pfadsegment oder Abfrageparameter verwendet werden — beispielsweise haben [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) keine dieser Einschränkungen und können die Standard-Base64-Codierung verwenden.

Base64-Codierungsschemata werden häufig verwendet, um Binärdaten für die Speicherung oder den Transfer über Medien zu kodieren, die nur mit ASCII-Text (oder einer ASCII-Supermenge, die dennoch willkürliche Binärdaten ablehnt) umgehen können. Dies stellt sicher, dass die Daten während des Transports unversehrt bleiben. Häufige Anwendungen von Base64 umfassen:

- E-Mails über [MIME](https://de.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions)
- Speicherung komplexer Daten in [XML](/de/docs/Web/XML)
- Codierung von Binärdaten, um sie in einer [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data) zu integrieren

## Erhöhung der kodierten Größe

Jedes Base64-Digit repräsentiert 6 Bits an Daten. Drei 8-Bit-Bytes der Eingabestrings/Binärdatei (3×8 Bits = 24 Bits) können durch vier 6-Bit-Base64-Digits (4×6 = 24 Bits) dargestellt werden.

Das bedeutet, dass die Base64-Version eines Strings oder einer Datei in der Regel etwa ein Drittel größer ist als die ursprüngliche Größe (die genaue Größenzunahme hängt von verschiedenen Faktoren ab, z. B. der absoluten Länge des Strings, seiner Länge modulo 3 und davon, ob Auffüllzeichen verwendet werden).

## Letzter Abschnitt

Der Base64-String kann in Abschnitte zu jeweils 4 Zeichen unterteilt werden, wobei der letzte Abschnitt weniger als 4 Zeichen enthalten kann. Der letzte Abschnitt kann mit `=`-Zeichen aufgefüllt werden, sodass er genau 4 Zeichen lang ist. Ohne Auffüllzeichen kann der letzte Abschnitt wie folgt aussehen:

- 2 Zeichen: kodiert 12 Bits, die 1 Byte (8 Bits) an Daten repräsentieren
- 3 Zeichen: kodiert 18 Bits, die 2 Bytes (16 Bits) an Daten repräsentieren
- 4 Zeichen: kodiert 24 Bits, die 3 Bytes (24 Bits) an Daten repräsentieren

In den ersten beiden Fällen können die Zeichen 4 oder 2 zusätzliche nachfolgenden Bits enthalten, die keine Daten repräsentieren. In diesem Fall verlangt [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648#section-3.5) von Kodierern, diese Bits auf null zu setzen, und von Dekodierern, optional einen Fehler auszugeben, falls sie nicht null sind. Wenn beispielsweise die kodierten Daten ein einzelnes Byte `0b01010101` sind, werden zwei Zeichen benötigt: `0b010101` (`V`) und `0b010000` (`Q`), wobei das zweite Zeichen 4 nachfolgende Bits auf null gesetzt hat. Das Dekodieren von `VR==` (wobei das zweite Zeichen `0b010001` repräsentiert) ergibt technisch dasselbe Byte `0b01010101`, aber der Dekodierer kann einen Fehler ausgeben, da die nachfolgenden Bits nicht null sind.

## JavaScript-Unterstützung

Die {{jsxref("Uint8Array")}}-Klasse bietet die Methoden {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.setFromBase64()")}} zum Konvertieren zu/von Base64-Strings.

Browser bieten außerdem nativ zwei JavaScript-Funktionen zum Dekodieren und Kodieren von Base64-Strings:

- [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/btoa)): erstellt aus einem String von Binärdaten einen Base64-kodierten ASCII-String („btoa“ sollte als „binary to ASCII“ gelesen werden).
- [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/atob)): dekodiert einen Base64-kodierten String („atob“ sollte als „ASCII to binary“ gelesen werden).

> [!NOTE]
> Base64 ist eine Binärkodierung und keine Textkodierung, aber die Funktionen `btoa` und `atob` wurden der Webplattform hinzugefügt, bevor diese Binärdatentypen unterstützte. Daher verwenden die beiden Funktionen Strings, um Binärdaten darzustellen, wobei der {{Glossary("code_point", "Codepunkt")}} jedes Zeichens den Wert jedes Bytes darstellt. Dies hat zu dem weitverbreiteten Missverständnis geführt, dass `btoa` zur Kodierung beliebiger Textdaten verwendet werden kann — z. B. zur Erstellung einer Base64-`data:`-URL eines Text- oder HTML-Dokuments.
>
> Allerdings gilt die Byte-zu-Codepunkt-Entsprechung zuverlässig nur für Codepunkte bis `0x7f`. Zudem führen Codepunkte über `0xff` dazu, dass `btoa` einen Fehler wirft, da diese den maximalen Wert für 1 Byte überschreiten. Der nächste Abschnitt erläutert, wie Sie dieses Problem umgehen können, wenn Sie beliebigen Unicode-Text kodieren möchten.

## Siehe auch

- JavaScript-APIs:
  - [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/atob))
  - [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [in Workern verfügbar](/de/docs/Web/API/WorkerGlobalScope/btoa))
  - {{jsxref("Uint8Array")}}
- [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [Base64](https://de.wikipedia.org/wiki/Base64) auf Wikipedia
- Base64-Algorithmus beschrieben in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)
