---
title: ProgressEvent
slug: Web/API/ProgressEvent
l10n:
  sourceCommit: 76c3857b73a8d11d06dd2cd60d41df68682d7b20
---

{{APIRef("XMLHttpRequest API")}}

Die **`ProgressEvent`**-Schnittstelle repräsentiert Ereignisse, die den Fortschritt eines zugrunde liegenden Prozesses messen, wie beispielsweise eine HTTP-Anfrage (für ein `XMLHttpRequest` oder das Laden der zugrunde liegenden Ressource eines {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("style")}} oder {{HTMLElement("link")}}).

{{InheritanceDiagram}}

## Konstruktor

- [`ProgressEvent()`](/de/docs/Web/API/ProgressEvent/ProgressEvent)
  - : Erstellt ein `ProgressEvent`-Ereignis mit den angegebenen Parametern.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`ProgressEvent.lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob das Verhältnis zwischen der Größe der bereits übertragenen oder verarbeiteten Daten (`loaded`) und der Gesamtgröße der Daten (`total`) berechenbar ist. Mit anderen Worten, es gibt an, ob der Fortschritt messbar ist oder nicht.
- [`ProgressEvent.loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Eine 64-Bit-Ganzzahl ohne Vorzeichen, die die Größe, in Bytes, der bereits übertragenen oder verarbeiteten Daten angibt. Das Verhältnis kann berechnet werden, indem `ProgressEvent.total` durch den Wert dieser Eigenschaft dividiert wird. Beim Herunterladen einer Ressource per HTTP zählt dies nur den Body der HTTP-Nachricht und schließt Header und andere Overheads nicht ein. Beachten Sie, dass bei komprimierten Anfragen unbekannter Gesamtgröße `loaded` die Größe der komprimierten oder dekomprimierten Daten enthalten kann, abhängig vom Browser. Ab 2024 enthält es die Größe der komprimierten Daten in Firefox und die Größe der unkomprimierten Daten in Chrome.
- [`ProgressEvent.total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Eine 64-Bit-Ganzzahl ohne Vorzeichen, die die Gesamtgröße, in Bytes, der übertragenen oder verarbeiteten Daten angibt. Beim Herunterladen einer Ressource per HTTP wird dieser Wert dem `Content-Length`-Antwort-Header entnommen. Es zählt nur den Body der HTTP-Nachricht und schließt Header und andere Overheads nicht ein.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

Das folgende Beispiel fügt einem neuen [`XMLHTTPRequest`](/de/docs/Web/API/XMLHTTPRequest) ein `ProgressEvent` hinzu und verwendet es, um den Status der Anfrage anzuzeigen.

```js
const progressBar = document.getElementById("p"),
  client = new XMLHttpRequest();
client.open("GET", "magical-unicorns");
client.onprogress = (pe) => {
  if (pe.lengthComputable) {
    progressBar.max = pe.total;
    progressBar.value = pe.loaded;
  }
};
client.onloadend = (pe) => {
  progressBar.value = pe.loaded;
};
client.send();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Event`](/de/docs/Web/API/Event) Basisschnittstelle.
