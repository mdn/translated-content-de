---
title: ProgressEvent
slug: Web/API/ProgressEvent
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

Das **`ProgressEvent`**-Interface repräsentiert Ereignisse, die den Fortschritt eines zugrunde liegenden Prozesses messen, wie etwa eine HTTP-Anfrage (für ein `XMLHttpRequest` oder das Laden der zugrunde liegenden Ressource eines {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("style")}} oder {{HTMLElement("link")}}).

{{InheritanceDiagram}}

## Konstruktor

- [`ProgressEvent()`](/de/docs/Web/API/ProgressEvent/ProgressEvent)
  - : Erstellt ein `ProgressEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Erbt außerdem Eigenschaften von seinem Eltern-Interface [`Event`](/de/docs/Web/API/Event)_.

- [`ProgressEvent.lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein Boolean-Flag, das angibt, ob das Verhältnis zwischen der Größe der bereits übertragenen oder verarbeiteten Daten (`loaded`) und der Gesamtgröße der Daten (`total`) berechenbar ist. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`ProgressEvent.loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-unsigned Integer, der die Größe in Bytes der bereits übertragenen oder verarbeiteten Daten angibt. Das Verhältnis kann berechnet werden, indem `ProgressEvent.total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Hauptteil der HTTP-Nachricht und schließt Header und andere Overhead nicht ein. Beachten Sie, dass bei komprimierten Anfragen mit unbekannter Gesamtgröße `loaded` je nach Browser die Größe der komprimierten oder dekomprimierten Daten enthalten kann. Ab 2024 enthält es in Firefox die Größe der komprimierten Daten und in Chrome die Größe der unkomprimierten Daten.
- [`ProgressEvent.total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-unsigned Integer, der die Gesamtgröße in Bytes der übertragenen oder verarbeiteten Daten angibt. Beim Herunterladen einer Ressource über HTTP wird dieser Wert aus dem `Content-Length`-Antwortheader übernommen. Es zählt nur den Hauptteil der HTTP-Nachricht und schließt Header und andere Overhead nicht ein.

## Instanz-Methoden

_Erbt Methoden von seinem Eltern-Interface [`Event`](/de/docs/Web/API/Event)._

## Beispiele

Das folgende Beispiel fügt einem neuen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ein `ProgressEvent` hinzu und verwendet es, um den Status der Anfrage anzuzeigen.

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

- Das [`Event`](/de/docs/Web/API/Event)-Basisinterface.
