---
title: Kommunikation mit eingebetteten Frames
slug: Web/API/Fenced_frame_API/Communication_with_embedded_frames
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{DefaultAPISidebar("Fenced Frame API")}}

Dieser Artikel liefert Informationen darüber, wie sich die Kommunikation zwischen einem Einbettungselement und eingebetteten Inhalten in verschiedenen Arten von Frames (z. B. ein {{htmlelement("iframe")}} und ein {{htmlelement("fencedframe")}}) unterscheidet und wie übergebene Daten gespeichert werden können.

## Anleitung zur Kommunikation zwischen dem Einbettungselement und einem `<iframe>`

![Diagramm, das den Unterschied zwischen lokalem Speicher und gemeinsam genutztem Speicher sowie die Kommunikation mit einem iframe veranschaulicht, wie unten erklärt](iframe-storage-communication.png)

Wenn der Drittanbietercode in einem `<iframe>` eingebettet ist, können das `<iframe>` und das Einbettungselement frei Nachrichten austauschen, um Daten zu übermitteln, die in ihrem clientseitigen [gemeinsamen Speicher](/de/docs/Web/API/Shared_Storage_API) geschrieben werden sollen. Das Einbettungselement kann eine Anfrage an dieses `<iframe>` senden, um Daten in seinen eigenen Drittanbieterspeicher zu schreiben, indem es einen Kommunikationskanal über Dokumentgrenzen hinweg mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwendet. Der Drittanbieter kann auch `postMessage()`-Anfragen an das Einbettungselement senden.

Aus dem `<iframe>` heraus können Sie auf ein [`message`](/de/docs/Web/API/Window/message_event)-Ereignis lauschen, das vom Einbettungselement kommt. Wenn das Einbettungselement eine Nachricht mit `postMessage()` an das `<iframe>` sendet, kann das `<iframe>` diese Daten übernehmen und in seinem eigenen clientseitigen gemeinsamen Speicher speichern. Umgekehrt kann das `<iframe>` eine Nachricht senden, die vom Einbettungselement empfangen wird, und das Einbettungselement kann darauf reagieren, indem es Daten in seinen gemeinsamen Speicher schreibt.

## Anleitung zur Kommunikation zwischen dem Einbettungselement und einem `<fencedframe>`

Fenced Frames sollen für Anwendungsfälle wie das Anzeigen von zielgerichteten Anzeigen verwendet werden, die über die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ausgewählt wurden. Die Kommunikation zwischen `<fencedframe>`s und anderen Seiten außerhalb des `<fencedframe>` auf der Seite ist absichtlich eingeschränkt, aber eine Methode der Kommunikation zwischen dem Einbettungselement und geteilten Speicher-Worklets existiert — [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext).

> [!NOTE]
> Innerhalb desselben `<fencedframe>`-Baums ist die Kommunikation zwischen Frames erlaubt. Beispielsweise kann ein Stamm-`<fencedframe>` eine Nachricht an ein untergeordnetes `<iframe>` in seinem eigenen Baum senden, und ein untergeordnetes `<iframe>` kann eine Nachricht an das übergeordnete `<fencedframe>` senden.

Schauen wir uns ein komplexeres Beispiel an, das eine Operation mit einem Select URL-Ausgangstor verwendet, um eine Anzeige in einem `<fencedframe>` darzustellen.

![Eine komplexe Einbettungssituation mit einem Einbettungselement, das ein iframe einbettet, welches ein fencedframe einbettet, das wiederum ein iframe einbettet](multiple-embed-levels.png)

In diesem Beispiel bittet ein Publisher einen Drittanbieterinhaltsanbieter, Inhalte auf der Seite darzustellen. Die mit [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ausgewählten Inhalte werden in einem `<fencedframe>` gerendert, und der Inhalt enthält ein `<iframe>` von einem Messanbieter. Beachten Sie, dass ein Publisher jede Entität darstellen kann, die ein Drittanbieter-`<fencedframe>` einbettet. Auch ein Messanbieter repräsentiert beliebigen verschachtelten Drittanbietercode, der in einem `<fencedframe>` eines anderen Drittanbieters läuft.

Um Daten in ein `<fencedframe>` zu übergeben, die in einem geteilten Speicher-Worklet verwendet werden sollen, kann das Einbettungselement die Daten in einer [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) festlegen. Dieser Wert wird innerhalb des geteilten Speicher-Worklets als [`WorkletSharedStorage.context`](/de/docs/Web/API/WorkletSharedStorage/context) verfügbar sein. Diese Daten sind außerhalb eines Worklets nicht verfügbar und können nur in einer sicheren und privaten Umgebung, die ein geteiltes Speicher-Worklet bereitstellt, abgerufen werden.

![Ein Publisher erstellte eine fencedframeconfig mit selectURL, die kontextuelle Daten mit setSharedStorageContext festlegen kann, die dann in einem geteilten Speicher-Worklet verfügbar sein werden](share-contextual-data.png)

Wenn ein `selectURL()`-Aufruf ein `FencedFrameConfig` zurückgibt, kann das Frame-Einbettungselement Daten übergeben, indem es `setSharedStorageContext(data)` aufruft:

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

`setSharedStorageContext(data)` muss auf dem `fencedFrameConfig` aufgerufen werden, bevor dem vorgesehenen `<fencedframe>`-Elementempfänger das `config`-Attribut auf `fencedFrameConfig` gesetzt wird, da dies das Frame zum Navigieren veranlasst.

In einem geteilten Speicher-Worklet kann dann `WorkletSharedStorage.context` abgerufen werden, um die Daten zu erhalten:

```js
class ReportingOperation {
  async run() {
    sharedStorage.set("some-data-from-embedder", sharedStorage.context);
  }
}
register("send-report", ReportingOperation);
```
