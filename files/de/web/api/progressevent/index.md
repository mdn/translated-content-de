---
title: ProgressEvent
slug: Web/API/ProgressEvent
l10n:
  sourceCommit: 76c3857b73a8d11d06dd2cd60d41df68682d7b20
---

{{APIRef("XMLHttpRequest API")}}

Die **`ProgressEvent`**-Schnittstelle repräsentiert Ereignisse, die den Fortschritt eines zugrunde liegenden Prozesses messen, wie zum Beispiel eine HTTP-Anfrage (für ein `XMLHttpRequest` oder das Laden der zugrunde liegenden Ressource eines {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("style")}} oder {{HTMLElement("link")}}).

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}}
  - : Erstellt ein `ProgressEvent`-Ereignis mit den gegebenen Parametern.

## Instanz Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten {{domxref("Event")}}_.

- {{domxref("ProgressEvent.lengthComputable")}} {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob das Verhältnis zwischen der Größe der bereits übertragenen oder verarbeiteten Daten (`loaded`) und der Gesamtgröße der Daten (`total`) berechnet werden kann. Mit anderen Worten, es gibt an, ob der Fortschritt messbar ist oder nicht.
- {{domxref("ProgressEvent.loaded")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer ohne Vorzeichen, der die Größe in Bytes der bereits übertragenen oder verarbeiteten Daten angibt. Das Verhältnis kann berechnet werden, indem `ProgressEvent.total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Körper der HTTP-Nachricht und schließt Header und anderen Overhead aus. Beachten Sie, dass für komprimierte Anfragen unbekannter Gesamtgröße `loaded` möglicherweise die Größe der komprimierten oder dekomprimierten Daten enthält, abhängig vom Browser. Ab 2024 enthält es die Größe der komprimierten Daten in Firefox und die Größe der unkomprimierten Daten in Chrome.
- {{domxref("ProgressEvent.total")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer ohne Vorzeichen, das die Gesamtgröße in Bytes der zu übertragenden oder zu verarbeitenden Daten angibt. Beim Herunterladen einer Ressource über HTTP wird dieser Wert aus dem `Content-Length`-Antwort-Header entnommen. Es zählt nur den Körper der HTTP-Nachricht und schließt Header und anderen Overhead aus.

## Instanzmethoden

_Erbt Methoden von seinem übergeordneten {{domxref("Event")}}._

## Beispiele

Das folgende Beispiel fügt einem neuen {{domxref("XMLHTTPRequest")}} ein `ProgressEvent` hinzu und verwendet es, um den Status der Anfrage anzuzeigen.

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

- Die {{domxref("Event")}}-Basis-Schnittstelle.
