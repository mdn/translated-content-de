---
title: ProgressEvent
slug: Web/API/ProgressEvent
l10n:
  sourceCommit: 03ca44d7f71637a4cad71413fac4e31d5de66638
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

Die **`ProgressEvent`**-Schnittstelle repräsentiert Ereignisse, die den Fortschritt eines zugrundeliegenden Prozesses messen, wie zum Beispiel eine HTTP-Anfrage (z.B. ein `XMLHttpRequest` oder das Laden der zugrundeliegenden Ressource eines {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("style")}} oder {{HTMLElement("link")}}).

{{InheritanceDiagram}}

## Konstruktor

- [`ProgressEvent()`](/de/docs/Web/API/ProgressEvent/ProgressEvent)
  - : Erstellt ein `ProgressEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternobjekt [`Event`](/de/docs/Web/API/Event)_.

- [`ProgressEvent.lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob das Verhältnis zwischen der Größe der bereits übertragenen oder verarbeiteten Daten (`loaded`) und der Gesamtgröße der Daten (`total`) berechenbar ist.
    Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`ProgressEvent.loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe der bereits übertragenen oder verarbeiteten Daten angibt.
    Bei einem `ProgressEvent`, das vom Browser in HTTP-Nachrichten ausgelöst wird, bezieht sich der Wert auf die Größe des Nachrichtenkörpers in Bytes, exklusive Header und andere Overheads.
    Bei komprimierten Nachrichten mit unbekannter Gesamtgröße könnte sich `loaded` auf die Größe der komprimierten oder unkomprimierten Daten beziehen, je nach Browser.
    Ab 2024 enthält es die Größe der komprimierten Daten in Firefox und der unkomprimierten Daten in Chrome.
    Bei einem selbst erstellten `ProgressEvent` können Sie `loaded` einen beliebigen numerischen Wert zuweisen, der den Fortschritt relativ zum `total`-Wert repräsentiert.
- [`ProgressEvent.total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Eine Zahl, die die Gesamtgröße der zu übertragenden oder zu verarbeitenden Daten angibt.
    Bei `ProgressEvent`, die vom Browser in HTTP-Nachrichten ausgelöst werden, bezieht sich der Wert auf die Größe einer Ressource in Bytes und leitet sich aus dem `Content-Length`-Header ab.
    Bei einem selbst erstellten `ProgressEvent` könnten Sie `total` auf einen Wert wie `100` oder `1` normieren, falls die exakte Anzahl der Bytes einer Ressource nicht offengelegt werden soll.
    Wenn Sie zum Beispiel `1` als Gesamtwert verwenden, würde `loaded` einen dezimalen Wert zwischen `0` und `1` annehmen.

## Instanz-Methoden

_Erbt Methoden von seinem Elternobjekt, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

### Status einer Anfrage anzeigen

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

### Verwendung von Bruchteilen in einem ProgressEvent

Die Gesamtanzahl der Bytes einer Ressource könnte zu viele Informationen über eine Ressource preisgeben, daher kann stattdessen eine Zahl zwischen 0 und 1 in einem [`ProgressEvent()`](/de/docs/Web/API/ProgressEvent/ProgressEvent) verwendet werden:

```js
function updateProgress(loaded, total) {
  const progressEvent = new ProgressEvent("progress", {
    lengthComputable: true,
    loaded,
    total,
  });

  document.dispatchEvent(progressEvent);
}

document.addEventListener("progress", (event) => {
  console.log(`Progress: ${event.loaded}/${event.total}`);
});

updateProgress(0.123456, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Event`](/de/docs/Web/API/Event) Basisschnittstelle.
