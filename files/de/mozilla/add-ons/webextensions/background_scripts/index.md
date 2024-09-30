---
title: Hintergrundskripte
slug: Mozilla/Add-ons/WebExtensions/Background_scripts
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Hintergrundskripte oder eine Hintergrundseite ermöglichen es Ihnen, Ereignisse im Browser zu überwachen und darauf zu reagieren, wie das Navigieren zu einer neuen Seite, das Entfernen eines Lesezeichens oder das Schließen eines Tabs.

Hintergrundskripte oder eine Seite sind:

- Persistent – werden geladen, wenn die Erweiterung startet, und entladen, wenn die Erweiterung deaktiviert oder deinstalliert wird.
- Nicht-persistent (auch als Ereignisseiten bekannt) – werden nur nach Bedarf geladen, um auf ein Ereignis zu reagieren, und entladen, wenn sie inaktiv werden. Eine Hintergrundseite wird jedoch nicht entladen, bis alle sichtbaren Ansichten und Nachrichtenports geschlossen sind. Das Öffnen einer Ansicht führt nicht dazu, dass die Hintergrundseite geladen wird, verhindert jedoch ihr Schließen.

> [!NOTE]
> In Firefox, wenn der Erweiterungsprozess abstürzt:
>
> - werden persistent ausgeführte Hintergrundskripte zum Zeitpunkt des Absturzes automatisch neu geladen.
> - werden nicht persistent ausgeführte Hintergrundskripte (auch als "Ereignisseiten" bekannt) zum Zeitpunkt des Absturzes nicht neu geladen. Sie werden jedoch automatisch neu gestartet, wenn Firefox einen ihrer WebExtensions-API-Ereignislistener aufruft.
> - werden in Tabs geladene Erweiterungsseiten zum Zeitpunkt des Absturzes nicht automatisch wiederhergestellt. Eine Warnmeldung in jedem Tab informiert den Benutzer, dass die Seite abgestürzt ist, und ermöglicht es ihm, den Tab zu schließen oder wiederherzustellen.
>   ![Browserfenster, das die Benutzermeldung anzeigt, dass eine Seite abgestürzt ist, mit den Optionen, den Tab zu schließen oder neu zu starten](your-tab-crashed-screenshot.png)
>   Sie können diesen Zustand testen, indem Sie einen neuen Tab öffnen und zu `about:crashextensions` navigieren, was stillschweigend einen Absturz des Erweiterungsprozesses auslöst.

In Manifest V2 können Hintergrundskripte oder eine Seite persistent oder nicht-persistent sein. Nicht-persistente Hintergrundskripte werden empfohlen, da sie die Ressourcenkosten Ihrer Erweiterung verringern. In Manifest V3 werden nur nicht-persistente Hintergrundskripte oder eine Seite unterstützt.

Wenn Sie persistente Hintergrundskripte oder eine Seite in Manifest V2 haben und Ihre Erweiterung für die Migration zu Manifest V3 vorbereiten möchten, finden Sie im Abschnitt [Konvertieren zu nicht-persistenten Skripten](#konvertieren_zu_nicht-persistenten_skripten) Ratschläge zur Umstellung der Skripte oder Seite auf das nicht-persistente Modell.

## Umgebung für Hintergrundskripte

### DOM-APIs

Hintergrundskripte laufen im Kontext einer speziellen Seite, die als Hintergrundseite bezeichnet wird. Dies gibt ihnen ein [`window`](/de/docs/Web/API/Window) global, zusammen mit allen standardmäßigen DOM-APIs, die von diesem Objekt bereitgestellt werden.

> [!WARNING]
> In Firefox unterstützen Hintergrundseiten die Nutzung von [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm) oder [`prompt()`](/de/docs/Web/API/Window/prompt) nicht.

### WebExtension-APIs

Hintergrundskripte können alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, sofern ihre Erweiterung über die erforderlichen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) verfügt.

### Cross-Origin-Zugriffe

Hintergrundskripte können XHR-Anfragen an Hosts stellen, für die sie [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

### Web-Inhalte

Hintergrundskripte haben keinen direkten Zugriff auf Webseiten. Sie können jedoch [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) auf Webseiten laden und [mithilfe einer Nachrichtenübertragungs-API mit diesen Inhalts-Skripten kommunizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

### Content-Security-Policy

Hintergrundskripte sind durch eine Content Security Policy von bestimmten potenziell gefährlichen Operationen wie der Nutzung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeschlossen.

Weitere Details finden Sie unter [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Implementierung von Hintergrundskripten

Dieser Abschnitt beschreibt, wie ein nicht-persistentes Hintergrundskript implementiert wird.

### Hintergrundskripte angeben

In Ihrer Erweiterung binden Sie ein oder mehrere Hintergrundskripte ein, wenn Sie sie benötigen, indem Sie den Schlüssel [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) in `manifest.json` verwenden. Für Manifest-V2-Erweiterungen muss die `persistent`-Eigenschaft auf `false` gesetzt sein, um ein nicht-persistentes Skript zu erstellen. Sie kann für Manifest-V3-Erweiterungen ausgelassen werden oder muss auf `false` gesetzt sein, da Skripte in Manifest V3 immer nicht-persistent sind. Die Angabe von `"type": "module"` lädt die Hintergrundskripte als ES-Module.

```json
"background": {
  "scripts": ["background-script.js"],
  "persistent": false,
  "type": "module"
}
```

Diese Skripte werden in der Hintergrundseite der Erweiterung ausgeführt und laufen somit im gleichen Kontext wie Skripte, die in eine Webseite geladen werden.

Wenn Sie jedoch bestimmte Inhalte in der Hintergrundseite benötigen, können Sie eine solche angeben. Sie definieren dann Ihr Skript von der Seite aus, anstatt die `"scripts"`-Eigenschaft zu verwenden. Vor der Einführung der `"type"`-Eigenschaft in den `"background"`-Schlüssel war dies die einzige Möglichkeit, ES-Module einzuschließen. Sie geben eine Hintergrundseite wie folgt an:

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

Sie können keine Hintergrundskripte und eine Hintergrundseite gleichzeitig angeben.

### Die Erweiterung initialisieren

Hören Sie auf {{WebExtAPIRef("runtime.onInstalled")}}, um eine Erweiterung bei der Installation zu initialisieren. Verwenden Sie dieses Ereignis, um einen Zustand festzulegen oder eine einmalige Initialisierung durchzuführen.

Für Erweiterungen mit Ereignisseiten ist dies der Ort, an dem zustandsbehaftete APIs, wie z.B. ein Kontextmenü, das mit {{WebExtAPIRef("menus.create")}} erstellt wurde, verwendet werden sollten. Dies liegt daran, dass zustandsbehaftete APIs nicht jedes Mal ausgeführt werden müssen, wenn die Ereignisseite neu geladen wird; sie müssen nur ausgeführt werden, wenn die Erweiterung installiert ist.

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

Strukturieren Sie Hintergrundskripte um die Ereignisse, auf die die Erweiterung angewiesen ist. Relevante Ereignisse zu definieren ermöglicht es Hintergrundskripten, im Ruhezustand zu bleiben, bis diese Ereignisse ausgelöst werden, und verhindert, dass die Erweiterung wesentliche Trigger verpasst.

Listener müssen synchron ab dem Start der Seite registriert werden.

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

Registrieren Sie Listener nicht asynchron, da sie nicht ordnungsgemäß ausgelöst werden. Stattdessen, machen Sie es so:

```js example-bad
window.onload = () => {
  // WARNING! This event is not persisted, and will not restart the event page.
  browser.bookmarks.onCreated.addListener(() => {
    // do something
  });
};
```

Das sollten Sie tun:

```js
browser.tabs.onUpdated.addListener(() => {
  // This event is run in the top level scope of the event page, and will persist, allowing
  // it to restart the event page if necessary.
});
```

Erweiterungen können Listener aus ihren Hintergrundskripten entfernen, indem sie `removeListener` aufrufen, z.B. mit {{WebExtAPIRef("runtime.onMessage")}} `removeListener`. Wenn alle Listener für ein Ereignis entfernt werden, lädt der Browser das Hintergrundskript der Erweiterung für dieses Ereignis nicht mehr.

```js
browser.runtime.onMessage.addListener(
  function messageListener(message, sender, sendResponse) {
    browser.runtime.onMessage.removeListener(messageListener);
  },
);
```

### Ereignisse filtern

Verwenden Sie APIs, die Ereignisfilter unterstützen, um die Listener auf die Fälle zu beschränken, die für die Erweiterung von Bedeutung sind. Wenn eine Erweiterung auf {{WebExtAPIRef("tabs.onUpdated")}} hört, verwenden Sie das Ereignis {{WebExtAPIRef("webNavigation.onCompleted")}} mit Filtern, da die Tabs-API keine Filter unterstützt.

```js
browser.webNavigation.onCompleted.addListener(
  () => {
    console.log("This is my favorite website!");
  },
  { url: [{ urlMatches: "https://www.mozilla.org/" }] },
);
```

### Auf Listener reagieren

Listener existieren, um Funktionalität auszulösen, sobald ein Ereignis ausgelöst wird. Um auf ein Ereignis zu reagieren, strukturieren Sie die gewünschte Reaktion innerhalb des Listener-Ereignisses.

Beim Reagieren auf Ereignisse im Kontext eines bestimmten Tabs oder Frames verwenden Sie `tabId` und `frameId` aus den Ereignisdetails anstelle der "aktuellen Registerkarte". Die Zielangabe stellt sicher, dass Ihre Erweiterung keine API auf das falsche Ziel anwendet, wenn sich die "aktuelle Registerkarte" ändert, während die Ereignisseite geweckt wird.

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

Daten sollten periodisch gespeichert werden, um wichtige Informationen nicht zu verlieren, falls eine Erweiterung abstürzt, ohne {{WebExtAPIRef("runtime.onSuspend")}} zu erhalten. Verwenden Sie die Speicher-API, um dabei zu helfen.

```js
// Or storage.session if the variable does not need to persist pass browser shutdown.
browser.storage.local.set({ variable: variableInformation });
```

Nachrichtenportale können nicht verhindern, dass eine Ereignisseite heruntergefahren wird. Wenn eine Erweiterung Nachrichtenaustausch verwendet, werden die Ports geschlossen, wenn die Ereignisseite untätig wird. Wenn Sie {{WebExtAPIRef("runtime.Port")}} `onDisconnect` abhören, können Sie feststellen, wann offene Ports geschlossen werden, aber der Listener steht denselben Zeitbeschränkungen unter wie {{WebExtAPIRef("runtime.onSuspend")}}.

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

Hintergrundskripte werden nach einigen Sekunden Inaktivität entladen. Wenn jedoch während der Aussetzung eines Hintergrundskripts ein anderes Ereignis das Hintergrundskript aufweckt, wird {{WebExtAPIRef("runtime.onSuspendCanceled")}} aufgerufen und das Hintergrundskript läuft weiter. Wenn eine Bereinigung erforderlich ist, hören Sie auf {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onSuspend.addListener(() => {
  console.log("Unloading.");
  browser.browserAction.setBadgeText({ text: "" });
});
```

Es sollte jedoch bevorzugt werden, Daten zu speichern, anstatt sich auf {{WebExtAPIRef("runtime.onSuspend")}} zu verlassen. Es erlaubt nicht so viel Bereinigung, wie nötig sein könnte, und hilft nicht im Falle eines Absturzes.

## Konvertieren zu nicht-persistenten Skripten

Wenn Sie ein persistentes Hintergrundskript haben, bietet dieser Abschnitt Anweisungen zur Umstellung auf das nicht-persistente Modell.

### Aktualisieren Sie Ihre manifest.json-Datei

Ändern Sie in der `manifest.json`-Datei Ihrer Erweiterung die dauerhafte Eigenschaft des Schlüssels [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) auf `false` für Ihr Skript oder Ihre Seite.

```json
"background": {
  …,
  "persistent": false
}
```

### Ereignislistener verschieben

Listener müssen auf der obersten Ebene stehen, um das Hintergrundskript zu aktivieren, wenn ein Ereignis ausgelöst wird. Registrierte Listener müssen möglicherweise in das synchrone Muster umstrukturiert und auf die oberste Ebene verschoben werden.

```js
browser.runtime.onStartup.addListener(() => {
  // run startup function
});
```

### Zustandsänderungen aufzeichnen

Skripte werden jetzt nach Bedarf geöffnet und geschlossen. Verlassen Sie sich daher nicht auf globale Variablen.

```js example-bad
var count = 101;
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "count") {
    ++count;
    sendResponse(count);
  }
});
```

Stattdessen verwenden Sie die Speicher-API, um Zustände und Werte festzulegen und zurückzugeben:

- Verwenden Sie {{WebExtAPIRef("storage.session")}} für den Speicher im Arbeitsspeicher, der gelöscht wird, wenn die Erweiterung oder der Browser herunterfährt. Standardmäßig ist `storage.session` nur für Erweiterungskontexte und nicht für Inhalts-Skripte verfügbar.
- Verwenden Sie {{WebExtAPIRef("storage.local")}} für einen größeren Speicherbereich, der über Browser- und Erweiterungsneustarts hinweg erhalten bleibt.

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

Das obige Beispiel [sendet eine asynchrone Antwort mit einem Versprechen](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise), die in Chrome nicht unterstützt wird, bis [Chrome-Bug 1185241](https://crbug.com/1185241) behoben ist.
Eine plattformübergreifende Alternative besteht darin, [true zurückzugeben und `sendResponse`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse) zu verwenden.

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

### Zeitgeber in Alarme umwandeln

DOM-basierte Zeitgeber wie [`setTimeout()`](/de/docs/Web/API/SetTimeout) bleiben nach dem Leerlauf einer Ereignisseite nicht aktiv. Stattdessen verwenden Sie die {{WebExtAPIRef("alarms")}}-API, wenn Sie einen Zeitgeber benötigen, um eine Ereignisseite zu wecken.

```js
browser.alarms.create({ delayInMinutes: 3.0 });
```

Fügen Sie dann einen Listener hinzu.

```js
browser.alarms.onAlarm.addListener(() => {
  alert("Hello, world!");
});
```

### Aufrufe von Hintergrundskript-Funktionen aktualisieren

Erweiterungen beherbergen häufig ihre primäre Funktionalität im Hintergrundskript. Einige Erweiterungen greifen auf Funktionen und Variablen zu, die in der Hintergrundseite durch das `window`, das von {{WebExtAPIRef("extension.getBackgroundPage")}} zurückgegeben wird, definiert sind. Die Methode gibt `null` zurück, wenn:

- Erweiterungsseiten isoliert sind, wie z.B. Erweiterungsseiten im Modus Privates Surfen oder in Container-Tabs.
- die Hintergrundseite nicht läuft. Dies ist bei persistenten Hintergrundseiten ungewöhnlich, aber sehr wahrscheinlich, wenn eine Ereignisseite verwendet wird, da eine Ereignisseite unterbrochen werden kann.

> [!NOTE]
> Die empfohlene Methode zum Aufrufen von Funktionalität im Hintergrundskript besteht darin, über {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} oder {{WebExtAPIRef("runtime.connect","runtime.connect()")}} zu kommunizieren.
> Die in diesem Abschnitt diskutierten `getBackgroundPage()`-Methoden können nicht in einer plattformübergreifenden Erweiterung verwendet werden, da Manifest-Version-3-Erweiterungen in Chrome keine Hintergrund- oder Ereignisseiten verwenden können.

Wenn Ihre Erweiterung eine Referenz auf das Fenster der Hintergrundseite benötigt, verwenden Sie {{WebExtAPIRef("runtime.getBackgroundPage")}}, um sicherzustellen, dass die Ereignisseite aktiv ist.
Wenn der Aufruf optional ist (d.h. nur benötigt wird, wenn die Ereignisseite aktiv ist), dann verwenden Sie {{WebExtAPIRef("extension.getBackgroundPage")}}.

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
