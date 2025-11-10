---
title: Kommunikation mit eingebetteten Frames
slug: Web/API/Fenced_frame_API/Communication_with_embedded_frames
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{DefaultAPISidebar("Fenced Frame API")}}

Dieser Artikel bietet Informationen darüber, wie sich die Kommunikation zwischen einem Einbetter und dem in verschiedenen Frame-Typen eingebetteten Inhalt (d.h. einem {{htmlelement("iframe")}} und einem {{htmlelement("fencedframe")}}) unterscheidet, und wie übermittelte Daten gespeichert werden können.

## Anleitung zur Kommunikation zwischen dem Einbetter und einem `<iframe>`

![Diagramm, das den Unterschied zwischen lokalem Speicher und gemeinsam genutztem Speicher und der Kommunikation mit einem iframe, wie unten erklärt, veranschaulicht](iframe-storage-communication.png)

Wenn der Code eines Drittanbieters in einem `<iframe>` eingebettet ist, können das `<iframe>` und der Einbetter einander frei Nachrichten senden, um Daten in ihrem clientseitigen [Shared Storage](/de/docs/Web/API/Shared_Storage_API) zu speichern. Der Einbetter kann eine Anfrage an das `<iframe>` senden, um Daten in seinem eigenen Drittanbieterspeicher über einen Kommunikationskanal zwischen Dokumenten mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) zu schreiben. Der Drittanbieter kann auch `postMessage()`-Anfragen an den Einbetter senden.

Vom `<iframe>` aus können Sie ein [`message`](/de/docs/Web/API/Window/message_event)-Ereignis abhören, das vom Einbetter kommt. Wenn der Einbetter eine Nachricht an das `<iframe>` mit `postMessage()` sendet, kann das `<iframe>` diese Daten nehmen und in seinem eigenen clientseitigen Shared Storage speichern. Umgekehrt kann das `<iframe>` eine Nachricht senden, die der Einbetter abhören kann, und darauf reagieren, indem er Daten in seinem Shared Storage schreibt.

## Anleitung zur Kommunikation zwischen dem Einbetter und einem `<fencedframe>`

Fenced Frames sollen in Fällen wie der Anzeige von zielgerichteter Werbung, die über die [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ausgewählt wurde, verwendet werden. Die Kommunikation zwischen `<fencedframe>`s und anderen Seiten außerhalb des `<fencedframe>` auf der Seite ist absichtlich eingeschränkt, aber eine Kommunikationsmethode zwischen dem Einbetter und Shared Storage Worklets existiert — [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext).

> [!NOTE]
> Innerhalb desselben `<fencedframe>`-Baums ist die Kommunikation zwischen den Frames erlaubt. Zum Beispiel kann ein Root-`<fencedframe>` eine Nachricht an ein Child-`<iframe>` in seinem eigenen Baum senden, und ein Child-`<iframe>` kann eine Nachricht an das Parent-`<fencedframe>` senden.

Schauen wir uns ein komplexeres Beispiel an, das einen "Select URL"-Ausgabegate-Betrieb verwendet, um eine Anzeige in einem `<fencedframe>` darzustellen.

![Eine komplexe Einbettungssituation mit einem Einbetter, der ein iframe einbettet, das ein fencedframe einbettet, das ein iframe einbettet](multiple-embed-levels.png)

In diesem Beispiel bittet ein Publisher einen Drittanbieter-Inhaltsanbieter darum, Inhalte auf der Seite anzuzeigen. Der mit [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ausgewählte Inhalt wird in einem `<fencedframe>` dargestellt, und der Inhalt enthält ein `<iframe>` von einem Messdienstleister. Beachten Sie, dass ein Publisher jede Entität darstellen kann, die ein Drittanbieter-`<fencedframe>` einbettet. Auch ein Messdienstleister repräsentiert jeden verschachtelten Drittanbietercode, der in einem `<fencedframe>` eines anderen Drittanbieters läuft.

Um Daten in ein `<fencedframe>` zu übermitteln, die in einem Shared Storage Worklet verwendet werden sollen, kann der Einbetter die Daten in einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) setzen. Dieser Wert wird innerhalb des Shared Storage Worklets als [`WorkletSharedStorage.context`](/de/docs/Web/API/WorkletSharedStorage/context) verfügbar sein. Diese Daten sind außerhalb eines Worklets nicht verfügbar und können nur in einer sicheren und privaten Umgebung abgerufen werden, die ein Shared Storage Worklet bietet.

![Ein Publisher hat ein FencedFrameConfig mit selectURL erstellt, das Kontextdaten mit setSharedStorageContext setzen kann, die dann in einem Shared Storage Worklet verfügbar sein werden](share-contextual-data.png)

Wenn ein `selectURL()`-Aufruf ein `FencedFrameConfig` zurückgibt, kann der Frameeinbettende Daten übergeben, indem er `setSharedStorageContext(data)` aufruft:

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

`setSharedStorageContext(data)` muss auf dem `fencedFrameConfig` aufgerufen werden, bevor das vorgesehene `<fencedframe>`-Element den `config`-Attribut auf `fencedFrameConfig` gesetzt bekommt, da dies das Navigieren des Frames auslöst.

Innerhalb eines Shared Storage Worklets kann dann auf `WorkletSharedStorage.context` zugegriffen werden, um die Daten abzurufen:

```js
class ReportingOperation {
  async run() {
    sharedStorage.set("some-data-from-embedder", sharedStorage.context);
  }
}
register("send-report", ReportingOperation);
```
