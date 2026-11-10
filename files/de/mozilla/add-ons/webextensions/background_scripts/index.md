---
title: Hintergrundskripte
slug: Mozilla/Add-ons/WebExtensions/Background_scripts
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Hintergrundskripte oder eine Hintergrundseite ermöglichen es Ihnen, Ereignisse im Browser zu überwachen und darauf zu reagieren, etwa wenn zu einer neuen Seite navigiert, ein Lesezeichen entfernt oder ein Tab geschlossen wird.

Hintergrundskripte oder eine Hintergrundseite können sein:

- Persistent – sie werden beim Start der Erweiterung geladen und entladen, wenn die Erweiterung deaktiviert oder deinstalliert wird.
- Nicht persistent (auch als Event Pages bezeichnet) – sie werden nur geladen, wenn sie für die Reaktion auf ein Ereignis benötigt werden, und entladen, sobald sie inaktiv sind. Eine Hintergrundseite wird jedoch erst entladen, wenn alle sichtbaren Ansichten und Nachrichten-Ports geschlossen sind. Das Öffnen einer Ansicht bewirkt nicht, dass die Hintergrundseite geladen wird, verhindert aber, dass sie geschlossen wird.

> [!NOTE]
> Wenn der Erweiterungsprozess in Firefox abstürzt:
>
> - werden persistente Hintergrundskripte, die zum Zeitpunkt des Absturzes ausgeführt wurden, automatisch neu geladen.
> - werden nicht persistente Hintergrundskripte (auch „Event Pages“ genannt), die zum Zeitpunkt des Absturzes ausgeführt wurden, nicht neu geladen. Sie werden jedoch automatisch neu gestartet, wenn Firefox einen ihrer Listener für WebExtensions-API-Ereignisse aufruft.
> - werden Erweiterungsseiten, die zum Zeitpunkt des Absturzes in Tabs geladen waren, nicht automatisch wiederhergestellt. Eine Warnmeldung in jedem Tab informiert darüber, dass die Seite abgestürzt ist, und ermöglicht es, den Tab zu schließen oder wiederherzustellen.
>   ![Firefox zeigt die Meldung, dass ein Tab abgestürzt ist, sowie Optionen zum Schließen oder Wiederherstellen des Tabs](your-tab-crashed-screenshot.png)
>   Sie können dieses Verhalten testen, indem Sie einen neuen Tab öffnen und `about:crashextensions` aufrufen. Dadurch wird der Erweiterungsprozess ohne weitere Meldung zum Absturz gebracht.

In Manifest V2 können Hintergrundskripte oder eine Hintergrundseite persistent oder nicht persistent sein. Nicht persistente Hintergrundskripte werden empfohlen, da sie den Ressourcenverbrauch Ihrer Erweiterung verringern. In Manifest V3 werden nur nicht persistente Hintergrundskripte oder eine nicht persistente Hintergrundseite unterstützt.

Wenn Ihre Erweiterung in Manifest V2 persistente Hintergrundskripte oder eine persistente Hintergrundseite verwendet und Sie sie auf die Migration zu Manifest V3 vorbereiten möchten, finden Sie unter [Auf nicht persistent umstellen](#auf_nicht_persistent_umstellen) Hinweise zum Übergang auf das nicht persistente Modell.

## Umgebung von Hintergrundskripten

### DOM-APIs

Hintergrundskripte werden im Kontext einer speziellen Seite ausgeführt, der sogenannten Hintergrundseite. Dadurch steht ihnen ein globales [`window`](/de/docs/Web/API/Window)-Objekt mit allen standardmäßigen DOM-APIs zur Verfügung, die dieses Objekt bereitstellt.

> [!WARNING]
> In Firefox unterstützen Hintergrundseiten weder [`alert()`](/de/docs/Web/API/Window/alert) noch [`confirm()`](/de/docs/Web/API/Window/confirm) oder [`prompt()`](/de/docs/Web/API/Window/prompt).

### WebExtension-APIs

Hintergrundskripte können alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, sofern ihre Erweiterung über die erforderlichen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) verfügt.

### Zugriff über Ursprungsgrenzen hinweg

Hintergrundskripte können XHR-Anfragen an Hosts senden, für die sie über [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) verfügen.

### Webinhalte

Hintergrundskripte haben keinen direkten Zugriff auf Webseiten. Sie können jedoch [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten laden und [über eine API zur Nachrichtenübermittlung mit diesen Content-Skripten kommunizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

### Content Security Policy

Eine Content Security Policy schränkt bestimmte potenziell gefährliche Operationen in Hintergrundskripten ein, beispielsweise die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval).

Weitere Informationen finden Sie unter [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Hintergrundskripte implementieren

In diesem Abschnitt wird beschrieben, wie Sie ein nicht persistentes Hintergrundskript implementieren.

### Hintergrundskripte angeben

Wenn Ihre Erweiterung ein oder mehrere Hintergrundskripte benötigt, geben Sie diese mit dem Schlüssel [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) in `manifest.json` an. Bei Erweiterungen mit Manifest V2 muss die Eigenschaft `persistent` auf `false` gesetzt sein, um ein nicht persistentes Skript zu erstellen. Bei Erweiterungen mit Manifest V3 kann sie weggelassen werden oder muss auf `false` gesetzt sein, da Skripte in Manifest V3 immer nicht persistent sind. Mit `"type": "module"` werden die Hintergrundskripte als ES-Module geladen.

```json
"background": {
  "scripts": ["background-script.js"],
  "persistent": false,
  "type": "module"
}
```

Diese Skripte werden auf der Hintergrundseite der Erweiterung ausgeführt. Sie laufen daher im selben Kontext, ähnlich wie Skripte, die in eine Webseite geladen werden.

Wenn Sie jedoch bestimmte Inhalte auf der Hintergrundseite benötigen, können Sie eine Hintergrundseite angeben. In diesem Fall geben Sie Ihr Skript auf der Seite an, statt die Eigenschaft `"scripts"` zu verwenden. Bevor die Eigenschaft `"type"` für den Schlüssel `"background"` eingeführt wurde, war dies die einzige Möglichkeit, ES-Module einzubinden. Eine Hintergrundseite geben Sie wie folgt an:

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

Sie können nicht gleichzeitig Hintergrundskripte und eine Hintergrundseite angeben.

Um Hintergrundskripte sowohl in Browsern zu unterstützen, die Service Worker verwenden (wie Chrome), als auch in solchen, die Event Pages verwenden, geben Sie sowohl `scripts` als auch `service_worker` im Schlüssel `background` an. Das Beispiel [script-on-click](https://github.com/mdn/webextensions-examples/tree/main/script-on-click) zeigt dieses browserübergreifende Muster.

### Erweiterung initialisieren

Registrieren Sie einen Listener für {{WebExtAPIRef("runtime.onInstalled")}}, um eine Erweiterung bei der Installation zu initialisieren. Verwenden Sie dieses Ereignis, um einen Zustand festzulegen oder eine einmalige Initialisierung durchzuführen.

Bei Erweiterungen mit Event Pages sollten hier zustandsbehaftete APIs verwendet werden, etwa um mit {{WebExtAPIRef("menus.create")}} ein Kontextmenü zu erstellen. Denn zustandsbehaftete APIs müssen nicht bei jedem erneuten Laden der Event Page ausgeführt werden, sondern nur bei der Installation der Erweiterung.

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

Richten Sie Hintergrundskripte an den Ereignissen aus, von denen die Erweiterung abhängt. Durch die Definition der relevanten Ereignisse können Hintergrundskripte inaktiv bleiben, bis diese Ereignisse ausgelöst werden. Zugleich wird verhindert, dass die Erweiterung wichtige Auslöser verpasst.

Listener müssen beim Start der Seite synchron registriert werden.

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

Registrieren Sie Listener nicht asynchron, da sie sonst nicht zuverlässig ausgelöst werden. Verwenden Sie also statt:

```js example-bad
window.onload = () => {
  // WARNING! This event is not persisted, and will not restart the event page.
  browser.bookmarks.onCreated.addListener(() => {
    // do something
  });
};
```

Folgendes:

```js
browser.tabs.onUpdated.addListener(() => {
  // This event is run in the top level scope of the event page, and will persist, allowing
  // it to restart the event page if necessary.
});
```

Erweiterungen können Listener aus ihren Hintergrundskripten entfernen, indem sie `removeListener` aufrufen, beispielsweise `removeListener` für {{WebExtAPIRef("runtime.onMessage")}}. Wenn alle Listener für ein Ereignis entfernt wurden, lädt der Browser das Hintergrundskript der Erweiterung für dieses Ereignis nicht mehr.

```js
browser.runtime.onMessage.addListener(
  function messageListener(message, sender, sendResponse) {
    browser.runtime.onMessage.removeListener(messageListener);
  },
);
```

### Ereignisse filtern

Wenn Ihre Erweiterung nur auf einen Teil der Ereignisse reagieren muss, beispielsweise wenn eine Webseite einer bestimmten Domain geöffnet wird, verwenden Sie Ereignisfilter, sofern diese verfügbar sind.

Sie können beispielsweise dem Ereignis {{WebExtAPIRef("webNavigation.onCompleted")}} einen Filter hinzufügen, damit Ihr Hintergrundskript beim Laden bestimmter URLs gestartet wird:

```js
browser.webNavigation.onCompleted.addListener(
  () => {
    console.log("This is my favorite website!");
  },
  { url: [{ urlMatches: "https://www.mozilla.org/" }] },
);
```

Wenn Ihre Erweiterung nur auf Firefox für Desktopgeräte ausgerichtet ist, können Sie auch {{WebExtAPIRef("tabs.onUpdated")}} Filter hinzufügen, um ein ähnliches Ergebnis zu erzielen.

### Auf Ereignisse reagieren

Listener dienen dazu, Funktionen auszulösen, sobald ein Ereignis eingetreten ist. Um auf ein Ereignis zu reagieren, implementieren Sie die gewünschte Reaktion innerhalb des Listeners für das Ereignis.

Wenn Sie auf Ereignisse im Kontext eines bestimmten Tabs oder Frames reagieren, verwenden Sie `tabId` und `frameId` aus den Ereignisdetails, statt sich auf den „aktuellen Tab“ zu verlassen. Durch die Angabe des Ziels stellen Sie sicher, dass Ihre Erweiterung eine Erweiterungs-API nicht auf das falsche Ziel anwendet, falls sich der „aktuelle Tab“ ändert, während die Event Page aktiviert wird.

Beispielsweise kann {{WebExtAPIRef("runtime.onMessage")}} wie folgt auf Aufrufe von {{WebExtAPIRef("runtime.sendMessage")}} reagieren:

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

Daten sollten regelmäßig gespeichert werden, damit wichtige Informationen nicht verloren gehen, falls eine Erweiterung abstürzt, ohne {{WebExtAPIRef("runtime.onSuspend")}} zu empfangen. Verwenden Sie dafür die Storage-API.

```js
// Or storage.session if the variable does not need to persist pass browser shutdown.
browser.storage.local.set({ variable: variableInformation });
```

Nachrichten-Ports können nicht verhindern, dass eine Event Page heruntergefahren wird. Wenn eine Erweiterung Nachrichtenübermittlung verwendet, werden die Ports geschlossen, sobald die Event Page inaktiv wird. Indem Sie auf `onDisconnect` von {{WebExtAPIRef("runtime.Port")}} reagieren, können Sie erkennen, wann offene Ports geschlossen werden. Für den Listener gelten jedoch dieselben zeitlichen Einschränkungen wie für {{WebExtAPIRef("runtime.onSuspend")}}.

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

Hintergrundskripte werden nach einigen Sekunden Inaktivität entladen. Falls jedoch während der Unterbrechung eines Hintergrundskripts ein weiteres Ereignis das Skript aktiviert, wird {{WebExtAPIRef("runtime.onSuspendCanceled")}} aufgerufen und das Hintergrundskript läuft weiter. Wenn Bereinigungsarbeiten erforderlich sind, registrieren Sie einen Listener für {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onSuspend.addListener(() => {
  console.log("Unloading.");
  browser.browserAction.setBadgeText({ text: "" });
});
```

Sie sollten Daten jedoch dauerhaft speichern, statt sich auf {{WebExtAPIRef("runtime.onSuspend")}} zu verlassen. Das Ereignis bietet möglicherweise nicht genug Zeit für alle erforderlichen Bereinigungsarbeiten und hilft im Fall eines Absturzes nicht.

## Auf nicht persistent umstellen

Wenn Sie ein persistentes Hintergrundskript verwenden, finden Sie in diesem Abschnitt eine Anleitung zur Umstellung auf das nicht persistente Modell.

### Datei manifest.json aktualisieren

Setzen Sie in der Datei `manifest.json` Ihrer Erweiterung die Eigenschaft `persistent` des Schlüssels [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) für Ihr Skript oder Ihre Seite auf `false`.

```json
"background": {
  …,
  "persistent": false
}
```

### Ereignis-Listener verschieben

Listener müssen auf oberster Ebene definiert sein, damit sie das Hintergrundskript aktivieren können, wenn ein Ereignis ausgelöst wird. Bereits registrierte Listener müssen möglicherweise für die synchrone Registrierung umstrukturiert und auf die oberste Ebene verschoben werden.

```js
browser.runtime.onStartup.addListener(() => {
  // run startup function
});
```

### Zustandsänderungen speichern

Skripte werden nun nach Bedarf gestartet und beendet. Verlassen Sie sich daher nicht auf globale Variablen.

```js example-bad
var count = 101;
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "count") {
    ++count;
    sendResponse(count);
  }
});
```

Verwenden Sie stattdessen die Storage-API, um Zustände und Werte zu speichern und abzurufen:

- Verwenden Sie {{WebExtAPIRef("storage.session")}} für die Speicherung im Arbeitsspeicher. Die Daten werden gelöscht, wenn die Erweiterung oder der Browser beendet wird. Standardmäßig ist `storage.session` nur für Erweiterungskontexte verfügbar, nicht für Content-Skripte.
- Verwenden Sie {{WebExtAPIRef("storage.local")}} für einen größeren Speicherbereich, dessen Daten auch nach einem Neustart des Browsers oder der Erweiterung erhalten bleiben.

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

Im vorstehenden Beispiel wird [eine asynchrone Antwort mithilfe eines Promise gesendet](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise). Dies wird in Chrome erst unterstützt, wenn [Chrome-Bug 1185241](https://crbug.com/1185241) behoben ist.
Eine browserübergreifende Alternative besteht darin, [`true` zurückzugeben und `sendResponse` zu verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse).

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

### Timer durch Alarme ersetzen

DOM-basierte Timer wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) bleiben nicht aktiv, nachdem eine Event Page inaktiv geworden ist. Verwenden Sie stattdessen die API {{WebExtAPIRef("alarms")}}, wenn ein Timer eine Event Page aktivieren soll.

```js
browser.alarms.create({ delayInMinutes: 3.0 });
```

Fügen Sie anschließend einen Listener hinzu.

```js
browser.alarms.onAlarm.addListener(() => {
  alert("Hello, world!");
});
```

### Aufrufe von Funktionen in Hintergrundskripten aktualisieren

Erweiterungen implementieren ihre Hauptfunktionalität häufig im Hintergrundskript. Einige Erweiterungen greifen über das von {{WebExtAPIRef("runtime.getBackgroundPage")}} zurückgegebene `window` auf Funktionen und Variablen zu, die auf der Hintergrundseite definiert sind.
Die Methode gibt `null` zurück, wenn:

- Erweiterungsseiten isoliert sind, etwa Erweiterungsseiten im privaten Modus oder in Container-Tabs.
- die Hintergrundseite nicht ausgeführt wird. Bei persistenten Hintergrundseiten kommt dies selten vor, bei Verwendung einer Event Page dagegen sehr wahrscheinlich, da diese angehalten werden kann.

> [!NOTE]
> Es wird empfohlen, Funktionen im Hintergrundskript über {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} oder {{WebExtAPIRef("runtime.connect","runtime.connect()")}} aufzurufen.
> Die in diesem Abschnitt besprochenen `getBackgroundPage()`-Methoden können nicht in einer browserübergreifenden Erweiterung verwendet werden, da Erweiterungen mit Manifest Version 3 in Chrome keine Hintergrundseiten oder Event Pages verwenden können.

Wenn Ihre Erweiterung eine Referenz auf das `window` der Hintergrundseite benötigt, verwenden Sie {{WebExtAPIRef("runtime.getBackgroundPage")}}, um sicherzustellen, dass die Event Page ausgeführt wird.
Wenn der Aufruf optional ist (also nur benötigt wird, wenn die Event Page aktiv ist), verwenden Sie {{WebExtAPIRef("runtime.getBackgroundPage")}}.

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
