---
title: ProgressEvent
slug: Web/API/ProgressEvent
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

Die **`ProgressEvent`** Schnittstelle repräsentiert Ereignisse, die den Fortschritt eines zugrunde liegenden Prozesses messen, wie z.B. eine HTTP-Anfrage (z.B. ein `XMLHttpRequest` oder das Laden der zugrunde liegenden Ressource eines {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("style")}} oder {{HTMLElement("link")}}).

{{InheritanceDiagram}}

## Konstruktor

- [`ProgressEvent()`](/de/docs/Web/API/ProgressEvent/ProgressEvent)
  - : Erstellt ein `ProgressEvent` Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`ProgressEvent.lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein booleanisches Flag, das anzeigt, ob das Verhältnis zwischen der bereits übertragenen oder verarbeiteten Datenmenge (`loaded`) und der Gesamtdatenmenge (`total`) berechenbar ist.
    Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`ProgressEvent.loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe der bereits übertragenen oder verarbeiteten Daten angibt.
    Bei einem vom Browser in HTTP-Nachrichten ausgelösten `ProgressEvent` bezieht sich der Wert auf die Größe des Nachrichtenkörpers in Bytes, exklusive Header und anderer Overhead.
    In komprimierten Nachrichten unbekannter Gesamtgröße kann `loaded` sich auf die Größe der komprimierten oder unkomprimierten Daten beziehen, abhängig vom Browser.
    Ab 2024 enthält er die Größe der komprimierten Daten in Firefox und die unkomprimierten Daten in Chrome.
    In einem selbst erstellten `ProgressEvent` können Sie jedem numerischen Wert für `loaded` zuweisen, der die Menge der im Verhältnis zu `total` abgeschlossenen Arbeit repräsentiert.
- [`ProgressEvent.total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Eine Zahl, die die Gesamtgröße der Daten angibt, die übertragen oder verarbeitet werden.
    Bei vom Browser in HTTP-Nachrichten ausgelösten `ProgressEvent`s bezieht sich der Wert auf die Größe einer Ressource in Bytes und wird aus dem `Content-Length`-Header abgeleitet.
    In einem selbst erstellten `ProgressEvent` könnten Sie `total` auf einen Wert wie `100` oder `1` normalisieren, wenn das Offenlegen der genauen Anzahl von Bytes einer Ressource ein Problem darstellt.
    Wenn Sie beispielsweise `1` als Gesamtwert verwenden, würde `loaded` einen Dezimalwert zwischen `0` und `1` haben.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

### Den Status einer Anfrage anzeigen

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

Die Gesamtzahl der Bytes einer Ressource kann zu viele Informationen über eine Ressource preisgeben, daher kann stattdessen eine Zahl zwischen 0 und 1 in einem [`ProgressEvent()`](/de/docs/Web/API/ProgressEvent/ProgressEvent) verwendet werden:

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
