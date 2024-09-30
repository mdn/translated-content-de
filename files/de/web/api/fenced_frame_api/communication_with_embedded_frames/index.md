---
title: Kommunikation mit eingebetteten Frames
slug: Web/API/Fenced_frame_API/Communication_with_embedded_frames
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{DefaultAPISidebar("Fenced Frame API")}}

Dieser Artikel stellt Informationen darüber bereit, wie sich die Kommunikation zwischen einem Einbettungsprogramm und Inhalt, der in verschiedene Arten von Frames eingebettet ist (z. B. ein {{htmlelement("iframe")}} und ein {{htmlelement("fencedframe")}}), unterscheidet und wie übergebene Daten gespeichert werden können.

## Anleitung zur Kommunikation zwischen dem Einbettungsprogramm und einem `<iframe>`

![Diagramm, das den Unterschied zwischen lokalem Speicher und geteiltem Speicher sowie die Kommunikation mit einem iframe illustriert, wie unten erklärt](iframe-storage-communication.png)

Wenn Drittanbieter-Code in einem `<iframe>` eingebettet ist, können das `<iframe>` und das Einbettungsprogramm frei Nachrichten austauschen, um zu verlangen, dass Daten in ihren clientseitigen [geteilten Speicher](/de/docs/Web/API/Shared_Storage_API) geschrieben werden. Das Einbettungsprogramm kann eine Anfrage an dieses `<iframe>` senden, um Daten in seinen eigenen Drittanbieterspeicher über einen Kommunikationskanal zwischen Dokumenten mithilfe von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) zu schreiben. Der Drittanbieter kann auch `postMessage()`-Anfragen an das Einbettungsprogramm senden.

Vom `<iframe>` aus können Sie ein [`message`](/de/docs/Web/API/Window/message_event)-Ereignis abhören, das vom Einbettungsprogramm stammt. Wenn das Einbettungsprogramm eine Nachricht an das `<iframe>` mit `postMessage()` sendet, kann das `<iframe>` diese Daten übernehmen und in seinem eigenen clientseitigen geteilten Speicher speichern. Umgekehrt kann das `<iframe>` eine Nachricht senden, die das Einbettungsprogramm abhören kann und darauf reagieren, indem es Daten in seinen geteilten Speicher schreibt.

## Anleitung zur Kommunikation zwischen dem Einbettungsprogramm und einem `<fencedframe>`

Fenced Frames sind dafür gedacht, in Fällen wie der Anzeige von gezielten Anzeigen, die über die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ausgewählt werden, verwendet zu werden. Die Kommunikation zwischen `<fencedframe>`s und anderen Seiten außerhalb des `<fencedframe>` auf der Seite ist absichtlich eingeschränkt, aber es existiert eine Methode der Kommunikation zwischen dem Einbettungsprogramm und geteilten Speicher-Worklets — [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext).

> [!NOTE]
> Innerhalb des gleichen `<fencedframe>`-Baums ist die Kommunikation zwischen Frames erlaubt. Beispielsweise kann ein Root-`<fencedframe>` eine Nachricht an ein Kind-`<iframe>` in seinem eigenen Baum senden, und ein Kind-`<iframe>` kann eine Nachricht an das Eltern-`<fencedframe>` senden.

Schauen wir uns ein komplexeres Beispiel an, das eine Select-URL-Ausgabe-Gateway-Operation verwendet, um eine Anzeige in einem `<fencedframe>` darzustellen.

![Eine komplexe Einbettungssituation mit einem Einbettungsprogramm, das ein iframe einbettet, das ein fencedframe einbettet, das ein iframe einbettet](multiple-embed-levels.png)

In diesem Beispiel bittet ein Herausgeber einen Drittanbieterinhalt-Anbieter, einigen Inhalt auf der Seite darzustellen. Der mit [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ausgewählte Inhalt wird in einem `<fencedframe>` dargestellt und der Inhalt enthält ein `<iframe>` von einem Messanbieter. Beachten Sie, dass ein Herausgeber jede Entität darstellen kann, die ein Drittanbieter-`<fencedframe>` einbettet. Auch ein Messanbieter repräsentiert jeglichen verschachtelten Drittanbieter-Code, der in einem `<fencedframe>` eines anderen Drittanbieters läuft.

Um Daten in ein `<fencedframe>` zu übergeben, die in einem geteilten Speicher-Worklet verwendet werden sollen, kann der Einbettungsprogramm die Daten in einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) festlegen. Dieser Wert wird innerhalb des geteilten Speicher-Worklets als [`WorkletSharedStorage.context`](/de/docs/Web/API/WorkletSharedStorage/context) verfügbar sein. Diese Daten sind außerhalb eines Worklets nicht verfügbar und können nur in einer sicheren und privaten Umgebung, die ein geteilter Speicher-Worklet bietet, abgerufen werden.

![Ein Herausgeber hat ein fencedframeconfig mit selectURL erstellt, das kontextuelle Daten mit setSharedStorageContext festlegen kann, die dann in einem shared storage worklet verfügbar sein werden](share-contextual-data.png)

Wenn ein `selectURL()`-Aufruf ein `FencedFrameConfig` zurückgibt, kann der Frame-Einbettungsprogramm Daten übergeben, indem `setSharedStorageContext(data)` aufgerufen wird:

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

`setSharedStorageContext(data)` muss auf dem `fencedFrameConfig` aufgerufen werden, bevor das beabsichtigte `<fencedframe>`-Element-Empfänger sein `config`-Attribut auf `fencedFrameConfig` setzt, da dies das Frame dazu veranlasst, zu navigieren.

Innerhalb eines geteilten Speicher-Worklets kann dann auf `WorkletSharedStorage.context` zugegriffen werden, um die Daten abzurufen:

```js
class ReportingOperation {
  async run() {
    sharedStorage.set("some-data-from-embedder", sharedStorage.context);
  }
}
register("send-report", ReportingOperation);
```
