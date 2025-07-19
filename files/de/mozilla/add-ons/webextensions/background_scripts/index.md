---
title: Hintergrundskripte
slug: Mozilla/Add-ons/WebExtensions/Background_scripts
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Hintergrundskripte oder eine Hintergrundseite ermöglichen es Ihnen, Ereignisse im Browser zu überwachen und darauf zu reagieren, wie z.B. das Navigieren zu einer neuen Seite, das Entfernen eines Lesezeichens oder das Schließen eines Tabs.

Hintergrundskripte oder eine Seite sind:

- Persistent – geladen, wenn die Erweiterung startet, und entladen, wenn die Erweiterung deaktiviert oder deinstalliert wird.
- Nicht-persistent (auch als Event-Seiten bekannt) – geladen nur bei Bedarf, um auf ein Ereignis zu reagieren, und entladen, wenn sie inaktiv werden. Eine Hintergrundseite wird jedoch nicht entladen, bis alle sichtbaren Ansichten und Nachrichtenports geschlossen sind. Das Öffnen einer Ansicht führt nicht dazu, dass die Hintergrundseite lädt, verhindert jedoch, dass sie sich schließt.

> [!NOTE]
> In Firefox, wenn der Erweiterungsprozess abstürzt:
>
> - Persistente Hintergrundskripte, die zum Zeitpunkt des Absturzes laufen, werden automatisch neu geladen.
> - Nicht-persistente Hintergrundskripte (auch bekannt als "Event Pages"), die zum Zeitpunkt des Absturzes laufen, werden nicht neu geladen. Sie werden jedoch automatisch neu gestartet, wenn Firefox einen ihrer WebExtensions-API-Ereignis-Listeners aufruft.
> - Erweiterungsseiten, die in Tabs geladen sind, werden zum Zeitpunkt des Absturzes nicht automatisch wiederhergestellt. Eine Warnmeldung in jedem Tab informiert den Benutzer darüber, dass die Seite abgestürzt ist, und ermöglicht es dem Benutzer, den Tab zu schließen oder wiederherzustellen.
>   ![Browserfenster zeigt die Benutzerbenachrichtigung an, dass eine Seite abgestürzt ist, mit Optionen zum Schließen oder Neustarten des Tabs](your-tab-crashed-screenshot.png)
>   Sie können diesen Zustand testen, indem Sie einen neuen Tab öffnen und zu `about:crashextensions` navigieren, was stillschweigend einen Absturz des Erweiterungsprozesses auslöst.

In Manifest V2 können Hintergrundskripte oder eine Seite persistent oder nicht-persistent sein. Nicht-persistente Hintergrundskripte werden empfohlen, da sie die Ressourcenkosten Ihrer Erweiterung reduzieren. In Manifest V3 werden nur nicht-persistente Hintergrundskripte oder Seiten unterstützt.

Wenn Sie in Manifest V2 persistente Hintergrundskripte oder eine Seite haben und Ihre Erweiterung auf Manifest V3 migrieren möchten, bietet [Zu nicht-persistent konvertieren](#zu_nicht-persistent_konvertieren) Ratschläge zur Umstellung der Skripte oder Seite auf das nicht-persistente Modell.

## Umgebung für Hintergrundskripte

### DOM-APIs

Hintergrundskripte laufen im Kontext einer speziellen Seite, die als Hintergrundseite bezeichnet wird. Dies gibt ihnen ein [`window`](/de/docs/Web/API/Window) global, zusammen mit allen Standard-DOM-APIs, die von diesem Objekt bereitgestellt werden.

> [!WARNING]
> In Firefox unterstützen Hintergrundseiten nicht die Verwendung von [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm) oder [`prompt()`](/de/docs/Web/API/Window/prompt).

### WebExtension-APIs

Hintergrundskripte können jede [WebExtension-API](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, sofern ihre Erweiterung die erforderlichen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat.

### Cross-Origin-Zugriff

Hintergrundskripte können XHR-Anfragen an Hosts stellen, für die sie [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

### Webinhalte

Hintergrundskripte haben keinen direkten Zugriff auf Webseiten. Sie können jedoch [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten laden und [mit diesen Inhaltsskripten über eine Nachrichten-API kommunizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

### Content Security Policy

Hintergrundskripte sind durch eine Content Security Policy von bestimmten potenziell gefährlichen Operationen, wie der Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), ausgeschlossen.

Sehen Sie sich [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) für weitere Details an.

## Implementierung von Hintergrundskripten

Dieser Abschnitt beschreibt, wie ein nicht-persistentes Hintergrundskript implementiert wird.

### Spezifizieren Sie die Hintergrundskripte

In Ihrer Erweiterung fügen Sie ein oder mehrere Hintergrundskripte ein, wenn Sie sie benötigen, indem Sie den Schlüssel [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) in `manifest.json` verwenden. Für Manifest V2-Erweiterungen muss die Eigenschaft `persistent` auf `false` gesetzt sein, um ein nicht-persistentes Skript zu erstellen. Es kann für Manifest V3-Erweiterungen weggelassen werden oder muss auf `false` gesetzt sein, da Skripte in Manifest V3 immer nicht-persistent sind. Das Einfügen von `"type": "module"` lädt die Hintergrundskripte als ES-Module.

```json
"background": {
  "scripts": ["background-script.js"],
  "persistent": false,
  "type": "module"
}
```

Diese Skripte werden in der Hintergrundseite der Erweiterung ausgeführt, sodass sie im gleichen Kontext laufen wie Skripte, die in eine Webseite geladen werden.

Wenn Sie jedoch bestimmte Inhalte auf der Hintergrundseite benötigen, können Sie eine angeben. Dann spezifizieren Sie Ihr Skript von der Seite anstelle der Verwendung der Eigenschaft `"scripts"`. Vor der Einführung der `"type"`-Eigenschaft im `"background"`-Schlüssel war dies die einzige Option, um ES-Module einzubinden. Sie spezifizieren eine Hintergrundseite so:

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

Sie können nicht sowohl Hintergrundskripte als auch eine Hintergrundseite spezifizieren.

### Initialisieren Sie die Erweiterung

Hören Sie auf {{WebExtAPIRef("runtime.onInstalled")}}, um eine Erweiterung bei der Installation zu initialisieren. Verwenden Sie dieses Ereignis, um einen Zustand festzulegen oder eine einmalige Initialisierung durchzuführen.

Für Erweiterungen mit Event-Seiten sollten hierbei zustandsbehaftete APIs verwendet werden, wie z.B. ein durch {{WebExtAPIRef("menus.create")}} erstelltes Kontextmenü. Dies liegt daran, dass zustandsbehaftete APIs nicht jedes Mal ausgeführt werden müssen, wenn die Event-Seite neu geladen wird; sie müssen nur ausgeführt werden, wenn die Erweiterung installiert ist.

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

Strukturieren Sie Hintergrundskripte um Ereignisse, von denen die Erweiterung abhängt. Das Definieren relevanter Ereignisse ermöglicht es Hintergrundskripten, inaktiv zu bleiben, bis diese Ereignisse ausgelöst werden, und verhindert, dass die Erweiterung wesentliche Trigger verpasst.

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

Registrieren Sie keine Listener asynchron, da sie nicht richtig ausgelöst werden. Anstatt das:

```js example-bad
window.onload = () => {
  // WARNING! This event is not persisted, and will not restart the event page.
  browser.bookmarks.onCreated.addListener(() => {
    // do something
  });
};
```

Tun Sie das:

```js
browser.tabs.onUpdated.addListener(() => {
  // This event is run in the top level scope of the event page, and will persist, allowing
  // it to restart the event page if necessary.
});
```

Erweiterungen können Listener aus ihren Hintergrundskripten entfernen, indem sie `removeListener` aufrufen, wie zum Beispiel bei {{WebExtAPIRef("runtime.onMessage")}} `removeListener`. Wenn alle Listener für ein Ereignis entfernt werden, lädt der Browser das Hintergrundskript der Erweiterung für dieses Ereignis nicht mehr.

```js
browser.runtime.onMessage.addListener(
  function messageListener(message, sender, sendResponse) {
    browser.runtime.onMessage.removeListener(messageListener);
  },
);
```

### Filtern von Ereignissen

Verwenden Sie APIs, die Ereignisfilter unterstützen, um Listener auf die Fälle zu beschränken, die für die Erweiterung von Interesse sind. Wenn eine Erweiterung auf {{WebExtAPIRef("tabs.onUpdated")}} hört, verwenden Sie stattdessen das Ereignis {{WebExtAPIRef("webNavigation.onCompleted")}} mit Filtern, da die Tabs-API keine Filter unterstützt.

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

Wenn Sie auf Ereignisse im Kontext eines bestimmten Tabs oder Frames reagieren, verwenden Sie die `tabId` und `frameId` aus den Ereignisdaten, anstatt sich auf den "aktuellen Tab" zu verlassen. Das Angeben des Ziels stellt sicher, dass Ihre Erweiterung keine Erweiterungs-API auf dem falschen Ziel aufruft, wenn sich der "aktuelle Tab" ändert, während die Event-Seite aktiv wird.

Zum Beispiel kann {{WebExtAPIRef("runtime.onMessage")}} auf Aufrufe von {{WebExtAPIRef("runtime.sendMessage")}} wie folgt reagieren:

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

Daten sollten regelmäßig gespeichert werden, um zu verhindern, dass wichtige Informationen verloren gehen, wenn eine Erweiterung abstürzt, ohne {{WebExtAPIRef("runtime.onSuspend")}} zu empfangen. Verwenden Sie die Speicher-API, um dabei zu helfen.

```js
// Or storage.session if the variable does not need to persist pass browser shutdown.
browser.storage.local.set({ variable: variableInformation });
```

Nachrichten-Ports können verhindern, dass eine Event-Seite heruntergefahren wird. Wenn eine Erweiterung die Nachrichtenweiterleitung verwendet, werden die Ports geschlossen, wenn die Event-Seite inaktiv wird. Das Hören auf die {{WebExtAPIRef("runtime.Port")}} `onDisconnect` lässt Sie erkennen, wann offene Ports geschlossen werden, jedoch unterliegt der Listener denselben Zeitbeschränkungen wie {{WebExtAPIRef("runtime.onSuspend")}}.

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

Hintergrundskripte werden nach wenigen Sekunden Inaktivität entladen. Wenn jedoch während der Aussetzung eines Hintergrundskripts ein weiteres Ereignis das Hintergrundskript weckt, wird {{WebExtAPIRef("runtime.onSuspendCanceled")}} aufgerufen und das Hintergrundskript läuft weiter. Wenn eine Bereinigung erforderlich ist, hören Sie auf {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onSuspend.addListener(() => {
  console.log("Unloading.");
  browser.browserAction.setBadgeText({ text: "" });
});
```

Es sollte jedoch Vorrang haben, Daten zu speichern, anstatt sich auf {{WebExtAPIRef("runtime.onSuspend")}} zu verlassen. Es ermöglicht nicht so viel Bereinigung, wie möglicherweise erforderlich ist, und hilft nicht im Falle eines Absturzes.

## Zu nicht-persistent konvertieren

Wenn Sie ein persistenten Hintergrundskript haben, enthält dieser Abschnitt Anweisungen zur Umstellung auf das nicht-persistente Modell.

### Aktualisieren Sie Ihre manifest.json-Datei

Ändern Sie in der `manifest.json`-Datei Ihrer Erweiterung die persistente Eigenschaft des [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)-Schlüssels zu `false` für Ihr Skript oder Ihre Seite.

```json
"background": {
  …,
  "persistent": false
}
```

### Verschieben Sie Ereignis-Listener

Listener müssen auf oberster Ebene sein, um das Hintergrundskript zu aktivieren, wenn ein Ereignis ausgelöst wird. Registrierte Listener müssen möglicherweise in das synchrone Muster umstrukturiert und auf die oberste Ebene verschoben werden.

```js
browser.runtime.onStartup.addListener(() => {
  // run startup function
});
```

### Aufzeichnen von Zustandsänderungen

Skripte öffnen und schließen sich jetzt bei Bedarf. Verlassen Sie sich also nicht auf globale Variablen.

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

- Verwenden Sie {{WebExtAPIRef("storage.session")}} für einen Speicher im Arbeitsspeicher, der gelöscht wird, wenn die Erweiterung oder der Browser herunterfährt. Standardmäßig ist `storage.session` nur für Erweiterungskontexte und nicht für Inhaltsskripte verfügbar.
- Verwenden Sie {{WebExtAPIRef("storage.local")}} für einen größeren Speicherbereich, der über Neustarts des Browsers und der Erweiterung hinweg bestehen bleibt.

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

Das vorherige Beispiel [sendet eine asynchrone Antwort mithilfe eines Versprechens](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise), was in Chrome nicht unterstützt wird, bis [Chrome-Problem 1185241](https://crbug.com/1185241) behoben ist.
Eine plattformübergreifende Alternative ist es, [true zurückzugeben und `sendResponse` zu verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse).

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

### Umwandeln von Timern in Alarme

DOM-basierte Timer, wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), bleiben nicht aktiv, nachdem eine Event-Seite inaktiv geworden ist. Verwenden Sie stattdessen die {{WebExtAPIRef("alarms")}}-API, wenn Sie einen Timer benötigen, um eine Event-Seite zu wecken.

```js
browser.alarms.create({ delayInMinutes: 3.0 });
```

Dann fügen Sie einen Listener hinzu.

```js
browser.alarms.onAlarm.addListener(() => {
  alert("Hello, world!");
});
```

### Aktualisieren Sie Aufrufe für Hintergrundskriptfunktionen

Erweiterungen hosten ihre Hauptfunktionalität häufig im Hintergrundskript. Einige Erweiterungen greifen auf Funktionen und Variablen zu, die auf der Hintergrundseite durch das `window` definiert sind, das durch {{WebExtAPIRef("extension.getBackgroundPage")}} zurückgegeben wird.
Die Methode gibt `null` zurück, wenn:

- Erweiterungsseiten isoliert sind, wie Erweiterungsseiten im Privaten Modus oder in Containertabs.
- die Hintergrundseite nicht läuft. Dies ist ungewöhnlich bei persistenten Hintergrundseiten, aber sehr wahrscheinlich bei der Verwendung einer Event-Seite, da eine Event-Seite ausgesetzt werden kann.

> [!NOTE]
> Der empfohlene Weg, um Funktionalität im Hintergrundskript aufzurufen, ist die Kommunikation darüber, wie {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} oder {{WebExtAPIRef("runtime.connect","runtime.connect()")}}.
> Die in diesem Abschnitt diskutierten `getBackgroundPage()`-Methoden können nicht in plattformübergreifenden Erweiterungen verwendet werden, da Manifest Version 3-Erweiterungen in Chrome keine Hintergrund- oder Event-Seiten verwenden können.

Wenn Ihre Erweiterung eine Referenz auf das `window` der Hintergrundseite benötigt, verwenden Sie {{WebExtAPIRef("runtime.getBackgroundPage")}}, um sicherzustellen, dass die Event-Seite läuft.
Wenn der Aufruf optional ist (d.h. nur benötigt wird, wenn die Event-Seite aktiv ist), dann verwenden Sie {{WebExtAPIRef("extension.getBackgroundPage")}}.

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
