---
title: Kommunikation mit eingebetteten Frames
slug: Web/API/Fenced_frame_API/Communication_with_embedded_frames
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Fenced Frame API")}}

Dieser Artikel bietet Informationen darüber, wie sich die Kommunikation zwischen einem Einbettenden und Inhalten unterscheidet, die in verschiedenen Frame-Typen eingebettet sind (d.h. in einem {{htmlelement("iframe")}} und einem {{htmlelement("fencedframe")}}), und wie übertragene Daten gespeichert werden können.

## Anleitung zur Kommunikation zwischen dem Einbettenden und einem `<iframe>`

![Diagramm, das den Unterschied zwischen lokaler Speicherung und geteiltem Speicher sowie die Kommunikation mit einem iframe, wie unten erklärt, veranschaulicht](iframe-storage-communication.png)

Wenn ein Drittanbieter-Code in ein `<iframe>` eingebettet ist, können das `<iframe>` und der Einbettende frei Nachrichten austauschen, um Daten in ihrem clientseitigen [geteilten Speicher](/de/docs/Web/API/Shared_Storage_API) zu schreiben. Der Einbettende kann eine Anfrage an das `<iframe>` senden, um Daten in dessen eigenen Drittanbieterspeicher zu schreiben, und zwar über einen Kommunikationskanal zwischen Dokumenten mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage). Der Drittanbieter kann auch `postMessage()`-Anfragen an den Einbettenden senden.

Vom `<iframe>` aus können Sie ein [`message`](/de/docs/Web/API/Window/message_event)-Ereignis empfangen, das vom Einbettenden kommt. Wenn der Einbettende eine Nachricht an das `<iframe>` mit `postMessage()` sendet, kann das `<iframe>` diese Daten übernehmen und in seinem eigenen clientseitigen geteilten Speicher speichern. Umgekehrt kann das `<iframe>` eine Nachricht senden, die der Einbettende empfangen kann, und antworten, indem es Daten in seinen geteilten Speicher schreibt.

## Anleitung zur Kommunikation zwischen dem Einbettenden und einem `<fencedframe>`

Fenced Frames sind vorgesehen für Fälle wie die Anzeige von gezielten Anzeigen, die über die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ausgewählt wurden. Die Kommunikation zwischen `<fencedframe>`s und anderen Seiten außerhalb des `<fencedframe>` auf der Seite ist absichtlich eingeschränkt, aber es existiert eine Methode der Kommunikation zwischen dem Einbettenden und geteilten Speicher-Worklets — [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext).

> [!NOTE]
> Innerhalb desselben `<fencedframe>`-Baums ist die Kommunikation zwischen Frames erlaubt. Zum Beispiel kann ein Wurzel-`<fencedframe>` eine Nachricht an ein Kind-`<iframe>` in seinem eigenen Baum senden, und ein Kind-`<iframe>` kann eine Nachricht an das Eltern-`<fencedframe>` senden.

Schauen wir uns ein komplexeres Beispiel an, das einen Select URL-Ausgabe-Gate-Vorgang verwendet, um eine Anzeige in einem `<fencedframe>` zu rendern.

![Eine komplexe Einbettungssituation mit einem Einbettenden, der ein iframe einbettet, das ein fencedframe einbettet, das wiederum ein iframe einbettet](multiple-embed-levels.png)

In diesem Beispiel bittet ein Publisher einen Drittanbieter-Inhaltsanbieter, Inhalte auf der Seite zu rendern. Der mit [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ausgewählte Inhalt wird in einem `<fencedframe>` gerendert, und der Inhalt enthält ein `<iframe>` von einem Messungsanbieter. Beachten Sie, dass ein Publisher jede Entität darstellen kann, die ein Drittanbieter-`<fencedframe>` einbettet. Auch ein Messungsanbieter steht für jeden verschachtelten Drittanbieter-Code, der in einem `<fencedframe>` eines anderen Drittanbieters ausgeführt wird.

Um Daten in ein `<fencedframe>` zu übertragen, die in einem geteilten Speicher-Worklet verwendet werden sollen, kann der Einbettende die Daten in einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) festlegen. Dieser Wert wird als [`WorkletSharedStorage.context`](/de/docs/Web/API/WorkletSharedStorage/context) im geteilten Speicher-Worklet verfügbar sein. Diese Daten sind außerhalb eines Worklets nicht verfügbar und können nur in einer sicheren und privaten Umgebung aufgerufen werden, die ein geteiltes Speicher-Worklet bereitstellt.

![Ein Publisher hat einen FencedFrameConfig mit selectURL erstellt, der kontextuelle Daten mit setSharedStorageContext setzen kann, die dann in einem geteilten Speicher-Worklet verfügbar sein werden](share-contextual-data.png)

Wenn ein `selectURL()`-Aufruf ein `FencedFrameConfig` zurückgibt, kann der Frame-Einbettende Daten durch `setSharedStorageContext(data)` übergeben:

```js
const fencedFrameConfig = await window.sharedStorage.selectURL(
  "creative-rotation",
  urls,
  {
    // …
    resolveToConfig: true,
  },
);

fencedFrameConfig.setSharedStorageContext("some-data");

// Navigate the fenced frame to the config.
document.getElementById("my-fenced-frame").config = fencedFrameConfig;
```

`setSharedStorageContext(data)` muss auf dem `fencedFrameConfig` aufgerufen werden, bevor der vorgesehene `<fencedframe>`-Elementempfänger sein `config`-Attribut auf `fencedFrameConfig` gesetzt hat, da dies das Frame zum Navigieren bringt.

In einem geteilten Speicher-Worklet kann dann `WorkletSharedStorage.context` verwendet werden, um die Daten abzurufen:

```js
class ReportingOperation {
  async run() {
    sharedStorage.set("some-data-from-embedder", sharedStorage.context);
  }
}
register("send-report", ReportingOperation);
```
