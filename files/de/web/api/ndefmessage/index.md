---
title: NDEFMessage
slug: Web/API/NDEFMessage
l10n:
  sourceCommit: bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`NDEFMessage`**-Schnittstelle der [Web NFC API](/de/docs/Web/API/Web_NFC_API) repräsentiert den Inhalt einer NDEF-Nachricht, die von einem NFC-Tag gelesen wurde oder auf einen NFC-Tag geschrieben werden könnte. Eine Instanz wird durch Aufrufen des `NDEFMessage()`-Konstruktors oder über die {{domxref("NDEFReadingEvent.message")}}-Eigenschaft, die an das {{domxref("NDEFReader.reading_event", "reading")}}-Ereignis übergeben wird, erworben.

## Konstruktor

- {{DOMxRef("NDEFMessage.NDEFMessage", "NDEFMessage()")}} {{Experimental_Inline}}
  - : Erzeugt ein neues `NDEFMessage`-Objekt, das mit den angegebenen NDEF-Datensätzen initialisiert wird.

## Attribute

- {{DOMxRef("NDEFMessage.records")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Liste der NDEF-Datensätze zurück, die in der Nachricht enthalten sind.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
