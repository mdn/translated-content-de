---
title: Kommunikation mit eingebetteten Frames
slug: Web/API/Fenced_frame_API/Communication_with_embedded_frames
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{DefaultAPISidebar("Fenced Frame API")}}

Dieser Artikel bietet Informationen darüber, wie sich die Kommunikation zwischen einem Einbettungselement und Inhalten, die in verschiedene Arten von Frames eingebettet sind (d. h. ein {{htmlelement("iframe")}} und ein {{htmlelement("fencedframe")}}), unterscheidet und wie die übergebenen Daten gespeichert werden können.

## Wie man zwischen dem Einbettungselement und einem `<iframe>` kommuniziert

![Diagramm, das den Unterschied zwischen lokalem Speicher und gemeinsam genutztem Speicher und der Kommunikation mit einem iframe veranschaulicht, wie unten erklärt](iframe-storage-communication.png)

Wenn der Drittanbieter-Code in ein `<iframe>` eingebettet ist, können das `<iframe>` und das Einbettungselement frei Nachrichten austauschen, um Daten zu übermitteln, die in ihren clientseitigen [gemeinsamen Speicher](/de/docs/Web/API/Shared_Storage_API) geschrieben werden sollen. Das Einbettungselement kann eine Anfrage an dieses `<iframe>` senden, um Daten in seinem eigenen Drittanbieterspeicher zu schreiben, und zwar über einen Cross-Dokument-Kommunikationskanal mittels {{domxref("Window.postMessage()")}}. Auch der Drittanbieter kann `postMessage()`-Anfragen an das Einbettungselement senden.

Vom `<iframe>` aus kann ein [`message`](/de/docs/Web/API/Window/message_event)-Ereignis gehört werden, das vom Einbettungselement kommt. Wenn das Einbettungselement eine Nachricht an das `<iframe>` mit `postMessage()` versendet, kann das `<iframe>` diese Daten aufnehmen und in seinem eigenen clientseitigen gemeinsamen Speicher speichern. Umgekehrt kann das `<iframe>` eine Nachricht versenden, auf die das Einbettungselement reagieren kann, indem es Daten in seinen gemeinsamen Speicher schreibt.

## Wie man zwischen dem Einbettungselement und einem `<fencedframe>` kommuniziert

Fenced Frames sind für Fälle vorgesehen, wie das Anzeigen von zielgerichteten Anzeigen, die durch die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) und {{domxref("WindowSharedStorage.selectURL()")}} ausgewählt wurden. Die Kommunikation zwischen `<fencedframe>`s und anderen Seiten außerhalb des `<fencedframe>` auf der Seite ist absichtlich eingeschränkt, aber es gibt eine Methode zur Kommunikation zwischen dem Einbettungselement und gemeinsamen Speicher-Worklets — {{domxref("FencedFrameConfig.setSharedStorageContext()")}}.

> [!NOTE]
> Innerhalb des gleichen `<fencedframe>`-Baums ist die Kommunikation zwischen Frames erlaubt. Zum Beispiel kann ein Wurzel-`<fencedframe>` eine Nachricht an ein untergeordnetes `<iframe>` in seinem eigenen Baum senden, und ein untergeordnetes `<iframe>` kann eine Nachricht an das übergeordnete `<fencedframe>` senden.

Werfen wir einen Blick auf ein komplexeres Beispiel, das einen Select-URL-Ausgabe-Gate-Vorgang nutzt, um eine Anzeige in einem `<fencedframe>` darzustellen.

![Eine komplexe Einbettungssituation mit einem Einbettungselement, das ein iframe einbettet, welches wiederum ein fencedframe einbettet, das ein weiteres iframe einbettet](multiple-embed-levels.png)

In diesem Beispiel bittet ein Verlag einen Drittanbieter-Inhaltsanbieter, einige Inhalte auf der Seite darzustellen. Der mit {{domxref("WindowSharedStorage.selectURL()")}} ausgewählte Inhalt wird in einem `<fencedframe>` dargestellt, und der Inhalt enthält ein `<iframe>` von einem Messanbieter. Beachten Sie, dass ein Verlag jede Entität darstellen kann, die ein Drittanbieter-`<fencedframe>` einbettet. Ein Messanbieter repräsentiert jedes verschachtelte Drittanbieter-Skript, das in einem `<fencedframe>` eines anderen Dritten läuft.

Um Daten in ein `<fencedframe>` zu übergeben, die in einem gemeinsamen Speicher-Worklet verwendet werden, kann das Einbettungselement die Daten in einem {{domxref("FencedFrameConfig")}} festlegen. Dieser Wert wird innerhalb des gemeinsamen Speicher-Worklets als {{domxref("WorkletSharedStorage.context")}} verfügbar sein. Diese Daten sind außerhalb eines Worklets nicht verfügbar und können nur in einer sicheren und privaten Umgebung abgerufen werden, die ein gemeinsames Speicher-Worklet bietet.

![Ein Verlag hat eine fencedframeconfig mit selectURL erstellt, die kontextuelle Daten mit setSharedStorageContext setzen kann, die dann in einem geteilten Speicher-Worklet verfügbar sein werden](share-contextual-data.png)

Wenn ein `selectURL()`-Aufruf ein `FencedFrameConfig` zurückgibt, kann das Frame-Einbettungselement Daten einfügen, indem es `setSharedStorageContext(data)` aufruft:

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

`setSharedStorageContext(data)` muss auf dem `fencedFrameConfig` aufgerufen werden, bevor das vorgesehene `<fencedframe>`-Element seinen `config`-Attributwert auf `fencedFrameConfig` setzt, da dies das Frame zur Navigation anhält.

Innerhalb eines gemeinsamen Speicher-Worklets kann dann auf `WorkletSharedStorage.context` zugegriffen werden, um die Daten abzurufen:

```js
class ReportingOperation {
  async run() {
    sharedStorage.set("some-data-from-embedder", sharedStorage.context);
  }
}
register("send-report", ReportingOperation);
```
