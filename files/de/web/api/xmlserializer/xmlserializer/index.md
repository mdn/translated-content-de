---
title: "XMLSerializer: XMLSerializer() Konstruktor"
short-title: XMLSerializer()
slug: Web/API/XMLSerializer/XMLSerializer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef('XMLSerializer')}}

Der **`XMLSerializer()`** Konstruktor erstellt ein neues {{domxref("XMLSerializer")}}.

## Syntax

```js-nolint
new XMLSerializer()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{domxref("XMLSerializer")}} Objekt.

## Beispiele

### Serialisieren von XML in einen String

Dieses Beispiel serialisiert ein gesamtes Dokument in einen String, der XML enthält.

```js
const s = new XMLSerializer();
const d = document;
const str = s.serializeToString(d);
saveXML(str);
```

Dies beinhaltet das Erstellen eines neuen `XMLSerializer`-Objekts und das Übergeben des zu serialisierenden {{domxref("Document")}} an {{domxref("XMLSerializer.serializeToString", "serializeToString()")}}, welches das XML-Äquivalent des Dokuments zurückgibt. `saveXML()` stellt eine Funktion dar, die den serialisierten String speichert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
