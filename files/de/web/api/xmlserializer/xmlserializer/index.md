---
title: "XMLSerializer: XMLSerializer() Konstruktor"
short-title: XMLSerializer()
slug: Web/API/XMLSerializer/XMLSerializer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef('XMLSerializer')}}

Der **`XMLSerializer()`** Konstruktor erstellt einen neuen [`XMLSerializer`](/de/docs/Web/API/XMLSerializer).

## Syntax

```js-nolint
new XMLSerializer()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) Objekt.

## Beispiele

### Serialisierung von XML in eine Zeichenkette

Dieses Beispiel serialisiert ein gesamtes Dokument in eine Zeichenkette, die XML enthält.

```js
const s = new XMLSerializer();
const d = document;
const str = s.serializeToString(d);
saveXML(str);
```

Dies beinhaltet das Erstellen eines neuen `XMLSerializer` Objekts und dann das Übergeben des zu serialisierenden [`Document`](/de/docs/Web/API/Document) an [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString), welches das XML-Äquivalent des Dokuments zurückgibt. `saveXML()` stellt eine Funktion dar, die dann die serialisierte Zeichenkette speichert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
