---
title: Hintergrundskripte
slug: Mozilla/Add-ons/WebExtensions/Background_scripts
l10n:
  sourceCommit: 38199423810927262c9cb4dec7ea7de4cb0c5e0f
---

Hintergrundskripte oder eine Hintergrundseite ermöglichen Ihnen, Ereignisse im Browser zu überwachen und darauf zu reagieren, wie z.B. das Navigieren zu einer neuen Seite, das Entfernen eines Lesezeichens oder das Schließen eines Tabs.

Hintergrundskripte oder eine Seite sind:

- Persistente – geladen, wenn die Erweiterung startet, und entladen, wenn die Erweiterung deaktiviert oder deinstalliert wird.
- Nicht-persistente (auch bekannt als Ereignisseiten) – nur geladen, wenn sie benötigt werden, um auf ein Ereignis zu reagieren, und entladen, wenn sie inaktiv werden. Eine Hintergrundseite wird jedoch erst entladen, wenn alle sichtbaren Ansichten und Nachrichtenports geschlossen sind. Das Öffnen einer Ansicht bewirkt nicht, dass die Hintergrundseite geladen wird, verhindert jedoch, dass sie geschlossen wird.

> [!NOTE]
> In Firefox, wenn der Erweiterungsprozess abstürzt:
>
> - Werden zur Zeit des Absturzes ausgeführte persistente Hintergrundskripte automatisch neu geladen.
> - Nicht-persistente Hintergrundskripte (auch bekannt als "Ereignisseiten"), die zum Zeitpunkt des Absturzes ausgeführt werden, werden nicht neu geladen. Sie werden jedoch automatisch neu gestartet, wenn Firefox einen ihrer WebExtension-API-Ereignis-Listener aufruft.
> - Erweiterungsseiten, die zum Zeitpunkt des Absturzes in Tabs geladen sind, werden nicht automatisch wiederhergestellt. Eine Warnmeldung in jedem Tab informiert den Benutzer, dass die Seite abgestürzt ist, und ermöglicht es dem Benutzer, den Tab zu schließen oder wiederherzustellen.
>   ![Browserfenster, das die Benutzerbenachrichtigung anzeigt, dass eine Seite abgestürzt ist, mit den Optionen, den Tab zu schließen oder neu zu starten](your-tab-crashed-screenshot.png)
>   Sie können diesen Zustand testen, indem Sie einen neuen Tab öffnen und zu `about:crashextensions` navigieren, was einen stillen Absturz des Erweiterungsprozesses auslöst.

In Manifest V2 können Hintergrundskripte oder eine Seite persistent oder nicht-persistent sein. Nicht-persistente Hintergrundskripte werden empfohlen, da sie die Ressourcenkosten Ihrer Erweiterung reduzieren. In Manifest V3 werden nur nicht-persistente Hintergrundskripte oder Seiten unterstützt.

Wenn Sie persistente Hintergrundskripte oder eine Seite in Manifest V2 haben und Ihre Erweiterung auf Manifest V3 migrieren möchten, bietet [Umstellung auf Nicht-Persistent](#umstellung_auf_nicht-persistent) Ratschläge zur Umstellung der Skripte oder Seite auf das nicht-persistente Modell.

## Hintergrundskript-Umgebung

### DOM-APIs

Hintergrundskripte laufen im Kontext einer speziellen Seite, die als Hintergrundseite bezeichnet wird. Dies gibt ihnen ein [`window`](/de/docs/Web/API/Window) Global, zusammen mit allen Standard-DOM-APIs, die von diesem Objekt bereitgestellt werden.

> [!WARNING]
> In Firefox unterstützen Hintergrundseiten nicht die Verwendung von [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm) oder [`prompt()`](/de/docs/Web/API/Window/prompt).

### WebExtension-APIs

Hintergrundskripte können alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, sofern ihre Erweiterung die erforderlichen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat.

### Zugriffe über Ursprungsgrenzen hinweg

Hintergrundskripte können XHR-Anfragen an Hosts stellen, für die sie [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

### Web-Inhalt

Hintergrundskripte haben keinen direkten Zugriff auf Webseiten. Sie können jedoch [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten laden und [mit diesen Inhaltsskripten über eine Nachrichten-API kommunizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

### Richtlinie zur Sicherheit des Inhalts

Hintergrundskripte sind von bestimmten potenziell gefährlichen Operationen, wie der Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), durch eine Richtlinie zur Sicherheit des Inhalts ausgeschlossen.

Weitere Details finden Sie unter [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Implementierung von Hintergrundskripten

Dieser Abschnitt beschreibt, wie man ein nicht-persistentes Hintergrundskript implementiert.

### Die Hintergrundskripte angeben

In Ihrer Erweiterung können Sie ein oder mehrere Hintergrundskripte einfügen, falls Sie sie benötigen, indem Sie den [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) Schlüssel in `manifest.json` verwenden. Für Manifest V2-Erweiterungen muss die `persistent`-Eigenschaft `false` sein, um ein nicht-persistentes Skript zu erstellen. Für Manifest V3-Erweiterungen kann sie weggelassen werden oder muss auf `false` gesetzt werden, da Skripte in Manifest V3 immer nicht-persistent sind. Die Angabe von `"type": "module"` lädt die Hintergrundskripte als ES-Module.

```json
"background": {
  "scripts": ["background-script.js"],
  "persistent": false,
  "type": "module"
}
```

Diese Skripte werden in der Hintergrundseite der Erweiterung ausgeführt, sodass sie im gleichen Kontext laufen, wie Skripte, die in einer Webseite geladen werden.

Wenn Sie jedoch bestimmten Inhalt auf der Hintergrundseite benötigen, können Sie eine angeben. Dann geben Sie Ihr Skript von der Seite aus anstelle der Verwendung der `"scripts"`-Eigenschaft an. Vor der Einführung der `"type"`-Eigenschaft für den `"background"`-Schlüssel war dies die einzige Möglichkeit, ES-Module einzubeziehen. Sie geben eine Hintergrundseite wie folgt an:

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

Sie können keine Hintergrundskripte und eine Hintergrundseite angeben.

### Die Erweiterung initialisieren

Hören Sie auf {{WebExtAPIRef("runtime.onInstalled")}}, um eine Erweiterung bei der Installation zu initialisieren. Verwenden Sie dieses Ereignis, um einen Zustand zu setzen oder für eine einmalige Initialisierung.

Für Erweiterungen mit Ereignisseiten ist dies der Ort, an dem APIs, die Zustände erfordern, wie ein Kontextmenü, das mit {{WebExtAPIRef("menus.create")}} erstellt wurde, verwendet werden sollten. Dies liegt daran, dass APIs, die Zustände erfordern, nicht jedes Mal ausgeführt werden müssen, wenn die Ereignisseite neu geladen wird; sie müssen nur ausgeführt werden, wenn die Erweiterung installiert wird.

```js
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "sampleContextMenu",
    title: "Sample Context Menu",
    contexts: ["selection"],
  });
});
```

### Listener hinzufügen

Strukturieren Sie Hintergrundskripte um Ereignisse, von denen die Erweiterung abhängt. Die Definition relevanter Ereignisse ermöglicht es Hintergrundskripten, inaktiv zu bleiben, bis diese Ereignisse ausgelöst werden, und verhindert, dass die Erweiterung wesentliche Auslöser verpasst.

Listener müssen synchron vom Start der Seite an registriert werden.

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

Registrieren Sie keine Listener asynchron, da sie nicht ordnungsgemäß ausgelöst werden. So statt:

```js example-bad
window.onload = () => {
  // WARNING! This event is not persisted, and will not restart the event page.
  browser.bookmarks.onCreated.addListener(() => {
    // do something
  });
};
```

Machen Sie dies:

```js
browser.tabs.onUpdated.addListener(() => {
  // This event is run in the top level scope of the event page, and will persist, allowing
  // it to restart the event page if necessary.
});
```

Erweiterungen können Listener aus ihren Hintergrundskripten entfernen, indem sie `removeListener` aufrufen, wie zum Beispiel mit {{WebExtAPIRef("runtime.onMessage")}} `removeListener`. Wenn alle Listener für ein Ereignis entfernt werden, lädt der Browser das Hintergrundskript der Erweiterung für dieses Ereignis nicht mehr.

```js
browser.runtime.onMessage.addListener(
  function messageListener(message, sender, sendResponse) {
    browser.runtime.onMessage.removeListener(messageListener);
  },
);
```

### Ereignisse Filtern

Verwenden Sie APIs, die Ereignisfilter unterstützen, um Listener auf die Fälle zu beschränken, auf die die Erweiterung achtet. Wenn eine Erweiterung auf {{WebExtAPIRef("tabs.onUpdated")}} lauscht, verwenden Sie das {{WebExtAPIRef("webNavigation.onCompleted")}}-Ereignis mit Filtern, da die Tabs-API keine Filter unterstützt.

```js
browser.webNavigation.onCompleted.addListener(
  () => {
    console.log("This is my favorite website!");
  },
  { url: [{ urlMatches: "https://www.mozilla.org/" }] },
);
```

### Auf Listener reagieren

Listener existieren, um Funktionalitäten auszulösen, sobald ein Ereignis ausgelöst wurde. Um auf ein Ereignis zu reagieren, strukturieren Sie die gewünschte Reaktion im Listener-Ereignis.

Wenn Sie auf Ereignisse im Kontext eines bestimmten Tabs oder Rahmens reagieren, verwenden Sie die `tabId` und `frameId` aus den Ereignisdetails, anstatt sich auf den "aktuellen Tab" zu verlassen. Die Angabe des Ziels stellt sicher, dass Ihre Erweiterung keine Erweiterungs-API auf dem falschen Ziel aufruft, wenn sich der "aktuelle Tab" ändert, während die Ereignisseite geweckt wird.

Zum Beispiel kann {{WebExtAPIRef("runtime.onMessage")}} auf {{WebExtAPIRef("runtime.sendMessage")}}-Aufrufe wie folgt reagieren:

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

### Hintergrundskripte entladen

Daten sollten regelmäßig gespeichert werden, um keine wichtigen Informationen zu verlieren, falls eine Erweiterung abstürzt, ohne {{WebExtAPIRef("runtime.onSuspend")}} zu empfangen. Verwenden Sie die Speicher-API, um dabei zu helfen.

```js
// Or storage.session if the variable does not need to persist pass browser shutdown.
browser.storage.local.set({ variable: variableInformation });
```

Nachrichtenports können nicht verhindern, dass eine Ereignisseite heruntergefahren wird. Wenn eine Erweiterung Nachrichtenübertragung verwendet, werden die Ports geschlossen, wenn die Ereignisseite inaktiv wird. Beim Lauschen auf {{WebExtAPIRef("runtime.Port")}} `onDisconnect` können Sie herausfinden, wann offene Ports schließen, jedoch ist der Hörer denselben Zeitbeschränkungen wie {{WebExtAPIRef("runtime.onSuspend")}} unterworfen.

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

Hintergrundskripte werden nach wenigen Sekunden Inaktivität entladen. Wenn jedoch während der Aussetzung eines Hintergrundskripts ein weiteres Ereignis das Hintergrundskript weckt, wird {{WebExtAPIRef("runtime.onSuspendCanceled")}} aufgerufen und das Hintergrundskript läuft weiter. Falls Bereinigungen erforderlich sind, lauschen Sie auf {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onSuspend.addListener(() => {
  console.log("Unloading.");
  browser.browserAction.setBadgeText({ text: "" });
});
```

Es sollte jedoch bevorzugt werden, Daten zu speichern, anstatt sich auf {{WebExtAPIRef("runtime.onSuspend")}} zu verlassen. Diese Methode erlaubt nicht so viel Bereinigung, wie möglicherweise erforderlich ist, und hilft nicht im Falle eines Absturzes.

## Umstellung auf Nicht-Persistent

Wenn Sie ein persistentes Hintergrundskript haben, bietet dieser Abschnitt Anweisungen zur Umstellung auf das nicht-persistente Modell.

### Aktualisieren Sie Ihre manifest.json-Datei

Ändern Sie in der `manifest.json`-Datei Ihrer Erweiterung die persistente Eigenschaft des [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)-Schlüssels auf `false` für Ihr Skript oder Ihre Seite.

```json
"background": {
  …,
  "persistent": false
}
```

### Ereignislistener verschieben

Listener müssen auf der obersten Ebene sein, um das Hintergrundskript zu aktivieren, wenn ein Ereignis ausgelöst wird. Registrierte Listener müssen möglicherweise umstrukturiert und auf ein synchrones Muster und an die oberste Ebene verschoben werden.

```js
browser.runtime.onStartup.addListener(() => {
  // run startup function
});
```

### Statusänderungen aufzeichnen

Skripte öffnen und schließen nun je nach Bedarf. Verlassen Sie sich daher nicht auf globale Variablen.

```js example-bad
var count = 101;
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "count") {
    ++count;
    sendResponse(count);
  }
});
```

Verwenden Sie stattdessen die Speicher-API, um Zustände und Werte zu setzen und zurückzugeben:

- Verwenden Sie {{WebExtAPIRef("storage.session")}} für In-Memory-Speicher, der gelöscht wird, wenn die Erweiterung oder der Browser heruntergefahren wird. Standardmäßig ist `storage.session` nur für Erweiterungskontexte und nicht für Inhaltsskripte verfügbar.
- Verwenden Sie {{WebExtAPIRef("storage.local")}} für einen größeren Speicherbereich, der über Browser- und Erweiterungs-Neustarts hinweg bestehen bleibt.

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

Das vorherige Beispiel [sendet eine asynchrone Antwort unter Verwendung eines Versprechens zurück](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise), das in Chrome nicht unterstützt wird, bis [Chrome-Bug 1185241](https://crbug.com/1185241) gelöst wird.
Eine plattformübergreifende Alternative besteht darin, [wahr zurückzugeben und `sendResponse` zu verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse).

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

### Timer in Alarme umwandeln

DOM-basierte Timer, wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), bleiben nach der Inaktivität einer Ereignisseite nicht aktiv. Verwenden Sie stattdessen die {{WebExtAPIRef("alarms")}} API, wenn Sie einen Timer benötigen, um eine Ereignisseite zu wecken.

```js
browser.alarms.create({ delayInMinutes: 3.0 });
```

Fügen Sie dann einen Listener hinzu.

```js
browser.alarms.onAlarm.addListener(() => {
  alert("Hello, world!");
});
```

### Aktualisieren Sie Aufrufe für Hintergrundskript-Funktionen

Erweiterungen hosten häufig ihre primäre Funktionalität im Hintergrundskript. Einige Erweiterungen greifen auf Funktionen und Variablen zu, die auf der Hintergrundseite definiert sind, über das `window`, das durch {{WebExtAPIRef("runtime.getBackgroundPage")}} zurückgegeben wird.
Die Methode gibt `null` zurück, wenn:

- Erweiterungsseiten isoliert sind, z.B. Erweiterungsseiten im privaten Browsing-Modus oder in Container-Tabs.
- die Hintergrundseite nicht läuft. Dies ist bei persistenten Hintergrundseiten ungewöhnlich, aber sehr wahrscheinlich bei der Verwendung einer Ereignisseite, da eine Ereignisseite pausiert werden kann.

> [!NOTE]
> Die empfohlene Methode, um Funktionalitäten im Hintergrundskript auszuführen, ist die Kommunikation über {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} oder {{WebExtAPIRef("runtime.connect","runtime.connect()")}}.
> Die `getBackgroundPage()`-Methoden, die in diesem Abschnitt behandelt werden, können nicht in einer plattformübergreifenden Erweiterung verwendet werden, da Manifest Version 3-Erweiterungen in Chrome keine Hintergrund- oder Ereignisseiten verwenden können.

Wenn Ihre Erweiterung eine Referenz auf das `window` der Hintergrundseite benötigt, verwenden Sie {{WebExtAPIRef("runtime.getBackgroundPage")}}, um sicherzustellen, dass die Ereignisseite läuft.
Wenn der Aufruf optional ist (d.h. nur benötigt wird, wenn die Ereignisseite aktiv ist), verwenden Sie {{WebExtAPIRef("runtime.getBackgroundPage")}}.

```js example-bad
document.getElementById("target").addEventListener("click", async () => {
  let backgroundPage = browser.runtime.getBackgroundPage();
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
