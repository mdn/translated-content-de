---
title: Hintergrundskripte
slug: Mozilla/Add-ons/WebExtensions/Background_scripts
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Hintergrundskripte oder eine Hintergrundseite ermöglichen es Ihnen, Ereignisse im Browser zu überwachen und darauf zu reagieren, wie z.B. das Navigieren zu einer neuen Seite, das Entfernen eines Lesezeichens oder das Schließen eines Tabs.

Hintergrundskripte oder eine Seite sind:

- Persistent – geladen, wenn die Erweiterung startet und entladen, wenn die Erweiterung deaktiviert oder deinstalliert wird.
- Nicht persistent (auch bekannt als Ereignisseiten) – nur geladen, wenn sie benötigt werden, um auf ein Ereignis zu reagieren und entladen, wenn sie inaktiv werden. Eine Hintergrundseite wird jedoch nicht entladen, bis alle sichtbaren Ansichten und Nachrichtenports geschlossen sind. Das Öffnen einer Ansicht führt nicht dazu, dass die Hintergrundseite geladen wird, verhindert jedoch ihr Schließen.

> [!NOTE]
> In Firefox, wenn der Erweiterungsprozess abstürzt:
>
> - werden zu diesem Zeitpunkt laufende persistente Hintergrundskripte automatisch neu geladen.
> - werden zu diesem Zeitpunkt laufende nicht persistente Hintergrundskripte (auch bekannt als "Ereignisseiten") nicht neu geladen. Sie werden jedoch automatisch neu gestartet, wenn Firefox einen ihrer WebExtensions-API-Ereignislistener aufruft.
> - Erweiterungsseiten, die zum Zeitpunkt des Absturzes in Tabs geladen sind, werden nicht automatisch wiederhergestellt. Eine Warnmeldung in jedem Tab informiert den Benutzer darüber, dass die Seite abgestürzt ist, und ermöglicht es dem Benutzer, den Tab zu schließen oder wiederherzustellen.
>   ![Browserfenster, das die Benutzernachricht anzeigt, dass eine Seite abgestürzt ist, mit den Optionen, den Tab zu schließen oder neu zu starten](your-tab-crashed-screenshot.png)
>   Sie können diesen Zustand testen, indem Sie einen neuen Tab öffnen und zu `about:crashextensions` navigieren, was stillschweigend einen Absturz des Erweiterungsprozesses auslöst.

In Manifest V2 können Hintergrundskripte oder eine Seite persistent oder nicht persistent sein. Nicht persistente Hintergrundskripte werden empfohlen, da sie die Ressourcenbelastung Ihrer Erweiterung reduzieren. In Manifest V3 werden nur nicht persistente Hintergrundskripte oder eine Seite unterstützt.

Wenn Sie in Manifest V2 persistente Hintergrundskripte oder eine Seite haben und Ihre Erweiterung auf Manifest V3 migrieren möchten, bietet [Umwandeln in nicht persistent](#umwandeln_in_nicht_persistent) Ratschläge zur Umstellung der Skripte oder Seite auf das nicht persistente Modell.

## Umgebung für Hintergrundskripte

### DOM-APIs

Hintergrundskripte laufen im Kontext einer speziellen Seite namens Hintergrundseite. Dies gibt ihnen ein [`window`](/de/docs/Web/API/Window) Global, zusammen mit allen Standard-DOM-APIs, die von diesem Objekt bereitgestellt werden.

> [!WARNING]
> In Firefox unterstützen Hintergrundseiten die Verwendung von [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm), oder [`prompt()`](/de/docs/Web/API/Window/prompt) nicht.

### WebExtension-APIs

Hintergrundskripte können alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, solange ihre Erweiterung die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat.

### Cross-Origin-Zugriff

Hintergrundskripte können XHR-Anfragen an Hosts stellen, für die sie [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

### Web-Inhalte

Hintergrundskripte haben keinen direkten Zugriff auf Webseiten. Sie können jedoch [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten laden und [mit diesen Content-Skripten über eine Nachrichtenübermittlung-API kommunizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

### Content Security Policy

Hintergrundskripte sind durch eine Content Security Policy bei bestimmten potenziell gefährlichen Operationen, wie der Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), eingeschränkt.

Siehe [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) für weitere Details.

## Implementierung von Hintergrundskripten

Dieser Abschnitt beschreibt, wie man ein nicht persistentes Hintergrundskript implementiert.

### Angabe der Hintergrundskripte

In Ihrer Erweiterung schließen Sie ein Hintergrundskript oder Skripte ein, wenn Sie sie benötigen, indem Sie den Schlüssel [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) in `manifest.json` verwenden. Für Manifest V2-Erweiterungen muss die `persistent` Eigenschaft `false` sein, um ein nicht persistentes Skript zu erstellen. Sie kann für Manifest V3-Erweiterungen weggelassen werden oder muss auf `false` gesetzt werden, da Skripte in Manifest V3 immer nicht persistent sind. Die Angabe von `"type": "module"` lädt die Hintergrundskripte als ES-Module.

```json
"background": {
  "scripts": ["background-script.js"],
  "persistent": false,
  "type": "module"
}
```

Diese Skripte werden auf der Hintergrundseite der Erweiterung ausgeführt, sodass sie im gleichen Kontext wie Skripte laufen, die in eine Webseite geladen werden.

Wenn Sie jedoch bestimmte Inhalte in der Hintergrundseite benötigen, können Sie eine Seite angeben. Sie geben Ihr Skript dann von der Seite aus an, anstatt die `"scripts"` Eigenschaft zu verwenden. Bevor die `"type"` Eigenschaft zum `"background"` Schlüssel eingeführt wurde, war dies die einzige Möglichkeit, ES-Module einzuschließen. Sie geben eine Hintergrundseite so an:

- manifest.json

  ```json
  "background": {
    "page": "background-page.html",
    "persistent": false
  }
  ```

- background-page.html

  ```html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <script type="module" src="background-script.js"></script>
    </head>
  </html>
  ```

Es ist nicht möglich, Hintergrundskripte und eine Hintergrundseite anzugeben.

### Initialisieren der Erweiterung

Hören Sie {{WebExtAPIRef("runtime.onInstalled")}}, um eine Erweiterung bei der Installation zu initialisieren. Verwenden Sie dieses Event, um einen Zustand zu setzen oder zur einmaligen Initialisierung.

Für Erweiterungen mit Ereignisseiten ist dies der Ort, an dem zustandsbehaftete APIs, wie ein Kontextmenü, das mit {{WebExtAPIRef("menus.create")}} erstellt wurde, verwendet werden sollten. Dies liegt daran, dass zustandsbehaftete APIs nicht jedes Mal ausgeführt werden müssen, wenn die Ereignisseite neu geladen wird; sie müssen nur dann ausgeführt werden, wenn die Erweiterung installiert wird.

```js
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "sampleContextMenu",
    title: "Sample Context Menu",
    contexts: ["selection"],
  });
});
```

### Hinzufügen von Listeners

Strukturieren Sie Hintergrundskripte um Ereignisse, auf die die Erweiterung angewiesen ist. Die Definition relevanter Ereignisse ermöglicht es Hintergrundskripten, im Leerlauf zu bleiben, bis diese Ereignisse ausgelöst werden, und verhindert, dass die Erweiterung wichtige Auslöser verpasst.

Listeners müssen synchron von Beginn der Seite registriert werden.

```js
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "sampleContextMenu",
    title: "Sample Context Menu",
    contexts: ["selection"],
  });
});

// This will run when a bookmark is created.
browser.bookmarks.onCreated.addListener(() => {
  // do something
});
```

Registrieren Sie keine Listeners asynchron, da sie nicht ordnungsgemäß ausgelöst werden. Stattdessen:

```js example-bad
window.onload = () => {
  // WARNING! This event is not persisted, and will not restart the event page.
  browser.bookmarks.onCreated.addListener(() => {
    // do something
  });
};
```

So sollten Sie es machen:

```js
browser.tabs.onUpdated.addListener(() => {
  // This event is run in the top level scope of the event page, and will persist, allowing
  // it to restart the event page if necessary.
});
```

Erweiterungen können Listeners aus ihren Hintergrundskripten entfernen, indem sie `removeListener` aufrufen, wie es bei {{WebExtAPIRef("runtime.onMessage")}} `removeListener` der Fall ist. Wenn alle Listener für ein Ereignis entfernt werden, lädt der Browser das Hintergrundskript der Erweiterung für dieses Ereignis nicht mehr.

```js
browser.runtime.onMessage.addListener(
  function messageListener(message, sender, sendResponse) {
    browser.runtime.onMessage.removeListener(messageListener);
  },
);
```

### Filtern von Ereignissen

Verwenden Sie APIs, die Ereignisfilter unterstützen, um Listeners auf die Fälle zu beschränken, die die Erweiterung interessieren. Wenn eine Erweiterung auf {{WebExtAPIRef("tabs.onUpdated")}} hört, verwenden Sie das {{WebExtAPIRef("webNavigation.onCompleted")}} Ereignis mit Filtern, da die Tabs-API keine Filter unterstützt.

```js
browser.webNavigation.onCompleted.addListener(
  () => {
    console.log("This is my favorite website!");
  },
  { url: [{ urlMatches: "https://www.mozilla.org/" }] },
);
```

### Reagieren auf Listener

Listener existieren, um Funktionalität auszulösen, sobald ein Ereignis ausgelöst wurde. Um auf ein Ereignis zu reagieren, strukturieren Sie die gewünschte Reaktion innerhalb des Listener-Ereignisses.

Wenn Sie auf Ereignisse im Kontext eines bestimmten Tabs oder Frames reagieren, verwenden Sie `tabId` und `frameId` aus den Ereignisdetails, anstatt sich auf den "aktuellen Tab" zu verlassen. Durch die Angabe des Ziels wird sichergestellt, dass Ihre Erweiterung keine API auf das falsche Ziel angewendet, falls sich der "aktuelle Tab" ändert, während die Ereignisseite geweckt wird.

Zum Beispiel kann {{WebExtAPIRef("runtime.onMessage")}} auf {{WebExtAPIRef("runtime.sendMessage")}} Anrufe wie folgt reagieren:

```js
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.data === "setAlarm") {
    browser.alarms.create({ delayInMinutes: 5 });
  } else if (message.data === "runLogic") {
    browser.scripting.executeScript({
      target: {
        tabId: sender.tab.id,
        frameIds: [sender.frameId],
      },
      files: ["logic.js"],
    });
  } else if (message.data === "changeColor") {
    browser.scripting.executeScript({
      target: {
        tabId: sender.tab.id,
        frameIds: [sender.frameId],
      },
      func: () => {
        document.body.style.backgroundColor = "orange";
      },
    });
  }
});
```

### Entladen von Hintergrundskripten

Daten sollten regelmäßig gespeichert werden, um keine wichtigen Informationen zu verlieren, falls eine Erweiterung abstürzt, ohne {{WebExtAPIRef("runtime.onSuspend")}} zu empfangen. Verwenden Sie die Speicher-API, um dies zu unterstützen.

```js
// Or storage.session if the variable does not need to persist pass browser shutdown.
browser.storage.local.set({ variable: variableInformation });
```

Nachrichtenports können ein Herunterfahren einer Ereignisseite nicht verhindern. Wenn eine Erweiterung Nachrichtenübermittlung verwendet, werden die Ports geschlossen, wenn die Ereignisseite in den Leerlauf geht. Durch Zuhören auf {{WebExtAPIRef("runtime.Port")}} `onDisconnect` können Sie feststellen, wann offene Ports geschlossen werden, jedoch unterliegt der Listener denselben zeitlichen Einschränkungen wie {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((message) => {
    if (message === "hello") {
      let response = { greeting: "welcome!" };
      port.postMessage(response);
    } else if (message === "goodbye") {
      console.log("Disconnecting port from this end");
      port.disconnect();
    }
  });
  port.onDisconnect.addListener(() => {
    console.log("Port was disconnected from the other end");
  });
});
```

Hintergrundskripte werden nach ein paar Sekunden Inaktivität entladen. Wenn jedoch während der Aussetzung eines Hintergrundskripts ein weiteres Ereignis das Hintergrundskript weckt, wird {{WebExtAPIRef("runtime.onSuspendCanceled")}} aufgerufen und das Hintergrundskript läuft weiter. Wenn eine Bereinigung erforderlich ist, hören Sie auf {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onSuspend.addListener(() => {
  console.log("Unloading.");
  browser.browserAction.setBadgeText({ text: "" });
});
```

Preferieren Sie jedoch das Speichern von Daten anstatt sich auf {{WebExtAPIRef("runtime.onSuspend")}} zu verlassen. Es erlaubt nicht so viel Bereinigung, wie möglicherweise benötigt wird, und hilft nicht im Falle eines Absturzes.

## Umwandeln in nicht persistent

Wenn Sie ein persistentes Hintergrundskript haben, bietet dieser Abschnitt Anleitungen zur Umwandlung in das nicht persistente Modell.

### Aktualisieren Ihrer manifest.json Datei

Ändern Sie in der `manifest.json` Datei Ihrer Erweiterung die persistente Eigenschaft des Schlüssels [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) für Ihr Skript oder Seite auf `false`.

```json
"background": {
  …,
  "persistent": false
}
```

### Verschieben von Ereignislisten

Listeners müssen auf der obersten Ebene stehen, um das Hintergrundskript zu aktivieren, wenn ein Ereignis ausgelöst wird. Registrierte Listener müssen möglicherweise auf das synchrone Muster umstrukturiert und auf die oberste Ebene verschoben werden.

```js
browser.runtime.onStartup.addListener(() => {
  // run startup function
});
```

### Aufzeichnen von Zustandsänderungen

Skripte öffnen und schließen sich jetzt nach Bedarf. Verlassen Sie sich daher nicht auf globale Variablen.

```js example-bad
var count = 101;
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "count") {
    ++count;
    sendResponse(count);
  }
});
```

Verwenden Sie stattdessen die Speicher-API, um Zustände und Werte festzulegen und zurückzugeben:

- Verwenden Sie {{WebExtAPIRef("storage.session")}} für einen im Speicher befindlichen Speicher, der gelöscht wird, wenn die Erweiterung oder der Browser heruntergefahren wird. Standardmäßig ist `storage.session` nur in Erweiterungskontexten und nicht in Content-Skripten verfügbar.
- Verwenden Sie {{WebExtAPIRef("storage.local")}} für einen größeren Speicherbereich, der über Browser- und Erweiterungsneustarts hinweg bestehen bleibt.

```js
browser.runtime.onMessage.addListener(async (message, sender) => {
  if (message === "count") {
    let items = await browser.storage.session.get({ myStoredCount: 101 });
    let count = items.myStoredCount;
    ++count;
    await browser.storage.session.set({ myStoredCount: count });
    return count;
  }
});
```

Das obige Beispiel [sendet eine asynchrone Antwort mit einem Promise](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise), was in Chrome nicht unterstützt wird, bis [Chrome Bug 1185241](https://crbug.com/1185241) behoben ist.
Eine browserübergreifende Alternative ist, [true zurückzugeben und `sendResponse` zu verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse).

```js
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "count") {
    browser.storage.session.get({ myStoredCount: 101 }).then(async (items) => {
      let count = items.myStoredCount;
      ++count;
      await browser.storage.session.set({ myStoredCount: count });
      sendResponse(count);
    });
    return true;
  }
});
```

### Ändern von Timern in Alarme

DOM-basierte Timer wie [`setTimeout()`](/de/docs/Web/API/SetTimeout) bleiben nach dem Leerlauf einer Ereignisseite nicht aktiv. Verwenden Sie stattdessen die {{WebExtAPIRef("alarms")}} API, wenn Sie einen Timer benötigen, um eine Ereignisseite zu wecken.

```js
browser.alarms.create({ delayInMinutes: 3.0 });
```

Dann fügen Sie einen Listener hinzu.

```js
browser.alarms.onAlarm.addListener(() => {
  alert("Hello, world!");
});
```

### Aktualisieren von Aufrufen für Hintergrundskript-Funktionen

Erweiterungen hosten häufig ihre Hauptfunktionalität im Hintergrundskript. Einige Erweiterungen greifen über das `window`-Objekt, das von {{WebExtAPIRef("extension.getBackgroundPage")}} zurückgegeben wird, auf Funktionen und Variablen zu, die in der Hintergrundseite definiert sind. Die Methode gibt `null` zurück, wenn:

- Erweiterungsseiten isoliert sind, wie Erweiterungsseiten im Privatmodus oder in Containertabs.
- die Hintergrundseite nicht läuft. Dies ist bei persistenten Hintergrundseiten ungewöhnlich, aber sehr wahrscheinlich bei einer Ereignisseite, da eine Ereignisseite angehalten werden kann.

> [!NOTE]
> Die empfohlene Methode, um Funktionalität im Hintergrundskript auszuführen, besteht darin, mit ihm durch {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} oder {{WebExtAPIRef("runtime.connect","runtime.connect()")}} zu kommunizieren.
> Die in diesem Abschnitt diskutierten `getBackgroundPage()`-Methoden können in einer browserübergreifenden Erweiterung nicht verwendet werden, da Manifest Version 3-Erweiterungen in Chrome keine Hintergrund- oder Ereignisseiten verwenden können.

Wenn Ihre Erweiterung eine Referenz auf das `window` der Hintergrundseite benötigt, verwenden Sie {{WebExtAPIRef("runtime.getBackgroundPage")}}, um sicherzustellen, dass die Ereignisseite läuft.
Wenn der Aufruf optional ist (d.h. nur notwendig, wenn die Ereignisseite aktiv ist), dann verwenden Sie {{WebExtAPIRef("extension.getBackgroundPage")}}.

```js example-bad
document.getElementById("target").addEventListener("click", async () => {
  let backgroundPage = browser.extension.getBackgroundPage();
  // Warning: backgroundPage is likely null.
  backgroundPage.backgroundFunction();
});
```

```js
document.getElementById("target").addEventListener("click", async () => {
  // runtime.getBackgroundPage() wakes up the event page if it was not running.
  let backgroundPage = await browser.runtime.getBackgroundPage();
  backgroundPage.backgroundFunction();
});
```
