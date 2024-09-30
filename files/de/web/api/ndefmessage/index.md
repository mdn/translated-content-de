---
title: NDEFMessage
slug: Web/API/NDEFMessage
l10n:
  sourceCommit: bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`NDEFMessage`** Schnittstelle der [Web NFC API](/de/docs/Web/API/Web_NFC_API) repräsentiert den Inhalt einer NDEF-Nachricht, die von einem NFC-Tag gelesen wurde oder auf ein solches geschrieben werden könnte. Eine Instanz wird durch Aufruf des `NDEFMessage()` Konstruktors oder durch die [`NDEFReadingEvent.message`](/de/docs/Web/API/NDEFReadingEvent/message) Eigenschaft erworben, die an das [`reading`](/de/docs/Web/API/NDEFReader/reading_event) Ereignis übergeben wird.

## Konstruktor

- [`NDEFMessage()`](/de/docs/Web/API/NDEFMessage/NDEFMessage) {{Experimental_Inline}}
  - : Erstellt ein neues `NDEFMessage` Objekt, initialisiert mit den gegebenen NDEF-Datensätzen.

## Attribute

- [`NDEFMessage.records`](/de/docs/Web/API/NDEFMessage/records) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Liste der NDEF-Datensätze zurück, die in der Nachricht enthalten sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
