---
title: "XMLSerializer: XMLSerializer() Konstruktor"
short-title: XMLSerializer()
slug: Web/API/XMLSerializer/XMLSerializer
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Der **`XMLSerializer()`** Konstruktor erstellt ein neues [`XMLSerializer`](/de/docs/Web/API/XMLSerializer).

## Syntax

```js-nolint
new XMLSerializer()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) Objekt.

## Beispiele

### Serialisieren von XML in einen String

Dieses Beispiel serialisiert ein gesamtes Dokument in einen String, der XML enthält.

```js
const s = new XMLSerializer();
const d = document;
const str = s.serializeToString(d);
saveXML(str);
```

Dies beinhaltet das Erstellen eines neuen `XMLSerializer` Objekts und dann das Übergeben des zu serialisierenden [`Document`](/de/docs/Web/API/Document) an [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString), was das XML-Äquivalent des Dokuments zurückgibt. `saveXML()` stellt eine Funktion dar, die dann den serialisierten String speichert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
