---
title: Kommunikation mit eingebetteten Frames
slug: Web/API/Fenced_frame_API/Communication_with_embedded_frames
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{DefaultAPISidebar("Fenced Frame API")}}

Dieser Artikel liefert Informationen darüber, wie die Kommunikation zwischen einem Einbettungselement und eingebettetem Inhalt in verschiedenen Frametypen (d.h. einem {{htmlelement("iframe")}} und einem {{htmlelement("fencedframe")}}) variiert und wie die übergebenen Daten gespeichert werden können.

## Anleitung zur Kommunikation zwischen dem Einbettungselement und einem `<iframe>`

![Diagramm, das den Unterschied zwischen lokalem Speicher und gemeinsam genutztem Speicher sowie der Kommunikation mit einem iframe veranschaulicht, wie unten erklärt](iframe-storage-communication.png)

Wenn der Drittanbieter-Code in einem `<iframe>` eingebettet ist, können das `<iframe>` und das Einbettungselement frei Nachrichten austauschen, um zu verlangen, dass Daten in ihren clientseitigen [geteilten Speicher](/de/docs/Web/API/Shared_Storage_API) geschrieben werden. Das Einbettungselement kann eine Anfrage an dieses `<iframe>` senden, um Daten in seinen eigenen Drittanbieterspeicher zu schreiben, mit einem dokumentübergreifenden Kommunikationskanal unter Verwendung von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage). Der Drittanbieter kann auch `postMessage()`-Anfragen an das Einbettungselement senden.

Vom `<iframe>` aus können Sie auf ein [`message`](/de/docs/Web/API/Window/message_event) Ereignis lauschen, das vom Einbettungselement kommt. Wenn das Einbettungselement eine Nachricht an das `<iframe>` mit `postMessage()` schickt, kann das `<iframe>` diese Daten aufnehmen und in seinem eigenen clientseitigen geteilten Speicher speichern. Umgekehrt kann das `<iframe>` eine Nachricht senden, auf die das Einbettungselement hören und antworten kann, indem es Daten in seinen geteilten Speicher schreibt.

## Anleitung zur Kommunikation zwischen dem Einbettungselement und einem `<fencedframe>`

Fenced Frames sind für Anwendungsfälle gedacht wie die Anzeige von gezielten Anzeigen, die über die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ausgewählt werden. Die Kommunikation zwischen `<fencedframe>` und anderen Seiten außerhalb des `<fencedframe>` auf der Seite ist absichtlich eingeschränkt, aber eine Kommunikationsmethode zwischen Einbettungselement und geteilten Speicher-Worklets existiert — [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext).

> [!NOTE]
> Innerhalb desselben `<fencedframe>`-Baumes ist die Kommunikation zwischen Frames erlaubt. Zum Beispiel kann ein Wurzel-`<fencedframe>` eine Nachricht an ein Kind-`<iframe>` in seinem eigenen Baum senden, und ein Kind-`<iframe>` kann eine Nachricht an das Eltern-`<fencedframe>` senden.

Schauen wir uns ein komplexeres Beispiel an, das eine Select-URL-Ausgabeoperation verwendet, um eine Anzeige in einem `<fencedframe>` darzustellen.

![Eine komplexe Einbettungssituation mit einem Embedder, der ein iframe einbettet, das ein fencedframe einbettet, das wiederum ein iframe einbettet](multiple-embed-levels.png)

In diesem Beispiel bittet ein Herausgeber einen Drittanbieter-Inhaltsanbieter, Inhalte auf der Seite darzustellen. Der mit [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ausgewählte Inhalt wird in einem `<fencedframe>` dargestellt und der Inhalt enthält ein `<iframe>` von einem Messdienstanbieter. Beachten Sie, dass ein Herausgeber jede Entität darstellen kann, die ein Drittanbieter-`<fencedframe>` einbettet. Ein Messdienstanbieter stellt ebenfalls jeden verschachtelten Drittanbieter-Code dar, der in einem `<fencedframe>` eines anderen Drittanbieters ausgeführt wird.

Um Daten in ein `<fencedframe>` zu übergeben, die in einem geteilten Speicher-Worklet verwendet werden sollen, kann das Einbettungselement die Daten in einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) setzen. Dieser Wert wird als [`WorkletSharedStorage.context`](/de/docs/Web/API/WorkletSharedStorage/context) innerhalb des geteilten Speicher-Worklets verfügbar sein. Diese Daten sind außerhalb eines Worklets nicht verfügbar und können nur innerhalb einer sicheren und privaten Umgebung abgerufen werden, die ein geteiltes Speicher-Worklet bietet.

![Ein Herausgeber erstellte ein FencedFrameConfig unter Verwendung von selectURL, das kontextuelle Daten mit setSharedStorageContext setzen kann, welche dann in einem geteilten Speicher-Worklet verfügbar sein werden](share-contextual-data.png)

Wenn ein `selectURL()`-Aufruf ein `FencedFrameConfig` zurückgibt, kann das Frame-Einbettungselement Daten übergeben, indem es `setSharedStorageContext(data)` ruft:

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

`setSharedStorageContext(data)` muss auf dem `fencedFrameConfig` aufgerufen werden, bevor das vorgesehene `<fencedframe>`-Element den `config`-Attributwert auf `fencedFrameConfig` setzt, da dies die Navigation des Frames auslöst.

Innerhalb eines geteilten Speicher-Worklets kann dann auf `WorkletSharedStorage.context` zugegriffen werden, um die Daten abzurufen:

```js
class ReportingOperation {
  async run() {
    sharedStorage.set("some-data-from-embedder", sharedStorage.context);
  }
}
register("send-report", ReportingOperation);
```
