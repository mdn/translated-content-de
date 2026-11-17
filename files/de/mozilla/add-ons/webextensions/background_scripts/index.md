---
title: Hintergrundskripte
slug: Mozilla/Add-ons/WebExtensions/Background_scripts
l10n:
  sourceCommit: 7b9d2e318ce7478530f4f31bdc24e36fcc6c41fa
---

Hintergrundskripte oder eine Hintergrundseite ermöglichen es Ihnen, Ereignisse im Browser zu überwachen und darauf zu reagieren, etwa wenn zu einer neuen Seite navigiert, ein Lesezeichen entfernt oder ein Tab geschlossen wird.

Hintergrundskripte oder eine Hintergrundseite können wie folgt ausgeführt werden:

- Persistent – sie werden beim Start der Erweiterung geladen und entladen, wenn die Erweiterung deaktiviert oder deinstalliert wird.
- Nicht persistent (auch als Event Pages bezeichnet) – sie werden nur geladen, wenn sie zur Reaktion auf ein Ereignis benötigt werden, und entladen, sobald sie inaktiv werden. Eine Hintergrundseite wird jedoch erst entladen, wenn alle sichtbaren Ansichten und Nachrichtenports geschlossen sind. Das Öffnen einer Ansicht lädt die Hintergrundseite nicht, verhindert aber, dass sie geschlossen wird.

> [!NOTE]
> Wenn in Firefox der Erweiterungsprozess abstürzt:
>
> - werden persistente Hintergrundskripte, die zum Zeitpunkt des Absturzes ausgeführt wurden, automatisch neu geladen.
> - werden nicht persistente Hintergrundskripte (auch als „Event Pages“ bezeichnet), die zum Zeitpunkt des Absturzes ausgeführt wurden, nicht neu geladen. Sie werden jedoch automatisch neu gestartet, wenn Firefox einen ihrer Listener für WebExtensions-API-Ereignisse aufruft.
> - werden Erweiterungsseiten, die zum Zeitpunkt des Absturzes in Tabs geladen waren, nicht automatisch wiederhergestellt. Eine Warnmeldung in jedem Tab informiert darüber, dass die Seite abgestürzt ist, und ermöglicht es, den Tab zu schließen oder wiederherzustellen.
>   ![Firefox zeigt die Meldung an, dass ein Tab abgestürzt ist, mit Optionen zum Schließen oder Wiederherstellen des Tabs](your-tab-crashed-screenshot.png)
>   Sie können diesen Fall testen, indem Sie einen neuen Tab öffnen und `about:crashextensions` aufrufen. Dadurch wird unbemerkt ein Absturz des Erweiterungsprozesses ausgelöst.

In Manifest V2 können Hintergrundskripte oder eine Hintergrundseite persistent oder nicht persistent sein. Nicht persistente Hintergrundskripte werden empfohlen, da sie den Ressourcenverbrauch Ihrer Erweiterung verringern. In Manifest V3 werden nur nicht persistente Hintergrundskripte oder eine nicht persistente Hintergrundseite unterstützt.

Wenn Sie in Manifest V2 persistente Hintergrundskripte oder eine persistente Hintergrundseite verwenden und Ihre Erweiterung auf die Migration zu Manifest V3 vorbereiten möchten, finden Sie unter [Auf nicht persistent umstellen](#auf_nicht_persistent_umstellen) Hinweise für den Umstieg auf das nicht persistente Modell.

## Ausführungsumgebung von Hintergrundskripten

### DOM-APIs

Hintergrundskripte werden im Kontext einer speziellen Seite ausgeführt, die als Hintergrundseite bezeichnet wird. Dadurch steht ihnen ein globales [`window`](/de/docs/Web/API/Window)-Objekt mit allen von diesem Objekt bereitgestellten Standard-DOM-APIs zur Verfügung.

> [!WARNING]
> In Firefox unterstützen Hintergrundseiten die Verwendung von [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm) oder [`prompt()`](/de/docs/Web/API/Window/prompt) nicht.

### WebExtension-APIs

Hintergrundskripte können alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, sofern ihre Erweiterung über die erforderlichen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) verfügt.

### Cross-Origin-Zugriff

Hintergrundskripte können XHR-Anfragen an Hosts senden, für die sie über [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) verfügen.

### Webinhalte

Hintergrundskripte haben keinen direkten Zugriff auf Webseiten. Sie können jedoch [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten laden und [über eine API zum Nachrichtenaustausch mit diesen Content-Skripten kommunizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

### Content Security Policy

Eine Content Security Policy schränkt Hintergrundskripte bei bestimmten potenziell gefährlichen Operationen ein, etwa bei der Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval).

Weitere Einzelheiten finden Sie unter [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Hintergrundskripte implementieren

Dieser Abschnitt beschreibt, wie Sie ein nicht persistentes Hintergrundskript implementieren.

### Hintergrundskripte angeben

Wenn Ihre Erweiterung Hintergrundskripte benötigt, binden Sie diese über den Schlüssel [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) in `manifest.json` ein. Bei Manifest-V2-Erweiterungen muss die Eigenschaft `persistent` den Wert `false` haben, damit das Skript nicht persistent ist. Bei Manifest-V3-Erweiterungen kann sie weggelassen werden oder muss auf `false` gesetzt sein, da Skripte in Manifest V3 immer nicht persistent sind. Mit `"type": "module"` werden die Hintergrundskripte als ES-Module geladen.

```json
"background": {
  "scripts": ["background-script.js"],
  "persistent": false,
  "type": "module"
}
```

Diese Skripte werden auf der Hintergrundseite der Erweiterung ausgeführt. Sie laufen daher im selben Kontext, ähnlich wie Skripte, die in eine Webseite geladen werden.

Wenn Sie jedoch bestimmte Inhalte auf der Hintergrundseite benötigen, können Sie eine eigene Hintergrundseite angeben. In diesem Fall binden Sie Ihr Skript über die Seite ein, statt die Eigenschaft `"scripts"` zu verwenden. Vor der Einführung der Eigenschaft `"type"` für den Schlüssel `"background"` war dies die einzige Möglichkeit, ES-Module einzubinden. Eine Hintergrundseite geben Sie wie folgt an:

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

Sie können nicht sowohl Hintergrundskripte als auch eine Hintergrundseite angeben.

Um Hintergrundskripte sowohl in Browsern mit Service Workern (wie Chrome) als auch in Browsern mit Event Pages zu unterstützen, geben Sie im Schlüssel `background` sowohl `scripts` als auch `service_worker` an. Das Beispiel [script-on-click](https://github.com/mdn/webextensions-examples/tree/main/script-on-click) veranschaulicht dieses browserübergreifende Muster.

### Erweiterung initialisieren

Registrieren Sie einen Listener für {{WebExtAPIRef("runtime.onInstalled")}}, um eine Erweiterung bei der Installation zu initialisieren. Verwenden Sie dieses Ereignis, um einen Zustand festzulegen oder eine einmalige Initialisierung vorzunehmen.

Bei Erweiterungen mit Event Pages sollten zustandsbehaftete APIs, etwa für ein mit {{WebExtAPIRef("menus.create")}} erstelltes Kontextmenü, an dieser Stelle verwendet werden. Zustandsbehaftete APIs müssen nämlich nicht bei jedem erneuten Laden der Event Page ausgeführt werden, sondern nur bei der Installation der Erweiterung.

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

Richten Sie Hintergrundskripte an den Ereignissen aus, von denen die Erweiterung abhängt. Durch das Registrieren von Listenern für relevante Ereignisse können Hintergrundskripte inaktiv bleiben, bis diese Ereignisse ausgelöst werden. Gleichzeitig verhindern Sie, dass der Erweiterung wichtige Auslöser entgehen.

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

Registrieren Sie Listener nicht asynchron, da sie sonst nicht zuverlässig ausgelöst werden. Statt:

```js example-bad
window.onload = () => {
  // WARNING! This event is not persisted, and will not restart the event page.
  browser.bookmarks.onCreated.addListener(() => {
    // do something
  });
};
```

verwenden Sie:

```js
browser.tabs.onUpdated.addListener(() => {
  // This event is run in the top level scope of the event page, and will persist, allowing
  // it to restart the event page if necessary.
});
```

Erweiterungen können Listener aus ihren Hintergrundskripten entfernen, indem sie `removeListener` aufrufen, beispielsweise bei {{WebExtAPIRef("runtime.onMessage")}}. Wenn alle Listener für ein Ereignis entfernt werden, lädt der Browser das Hintergrundskript der Erweiterung für dieses Ereignis nicht mehr.

```js
browser.runtime.onMessage.addListener(
  function messageListener(message, sender, sendResponse) {
    browser.runtime.onMessage.removeListener(messageListener);
  },
);
```

### Ereignisse filtern

Wenn Ihre Erweiterung nur auf einen Teil der Ereignisse reagieren muss, etwa wenn eine Webseite von einer bestimmten Domain geöffnet wird, verwenden Sie Ereignisfilter, sofern diese verfügbar sind.

Sie können beispielsweise dem Ereignis {{WebExtAPIRef("webNavigation.onCompleted")}} einen Filter hinzufügen, damit Ihr Hintergrundskript beim Laden bestimmter URLs gestartet wird:

```js
browser.webNavigation.onCompleted.addListener(
  () => {
    console.log("This is my favorite website!");
  },
  { url: [{ urlMatches: "https://www.mozilla.org/" }] },
);
```

Wenn Sie ausschließlich Firefox für Desktop-Systeme unterstützen, können Sie auch {{WebExtAPIRef("tabs.onUpdated")}} Filter hinzufügen, um ein ähnliches Ergebnis zu erzielen.

### Auf Ereignisse reagieren

Listener lösen Funktionen aus, sobald ein Ereignis eingetreten ist. Definieren Sie die gewünschte Reaktion auf ein Ereignis innerhalb des Listeners.

Wenn Sie auf Ereignisse im Kontext eines bestimmten Tabs oder Frames reagieren, verwenden Sie `tabId` und `frameId` aus den Ereignisdetails, statt sich auf den „aktuellen Tab“ zu verlassen. Wenn Sie das Ziel ausdrücklich angeben, verhindern Sie, dass Ihre Erweiterung eine Erweiterungs-API für das falsche Ziel aufruft, falls sich der „aktuelle Tab“ ändert, während die Event Page aktiviert wird.

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

Daten sollten regelmäßig gespeichert werden, damit wichtige Informationen nicht verloren gehen, wenn eine Erweiterung abstürzt, ohne {{WebExtAPIRef("runtime.onSuspend")}} zu empfangen. Verwenden Sie dazu die Storage-API.

```js
// Or storage.session if the variable does not need to persist pass browser shutdown.
browser.storage.local.set({ variable: variableInformation });
```

Nachrichtenports können das Beenden einer Event Page nicht verhindern. Wenn eine Erweiterung Nachrichten austauscht, werden die Ports geschlossen, sobald die Event Page inaktiv wird. Mit einem Listener für `onDisconnect` von {{WebExtAPIRef("runtime.Port")}} können Sie erkennen, wann offene Ports geschlossen werden. Für den Listener gelten jedoch dieselben zeitlichen Beschränkungen wie für {{WebExtAPIRef("runtime.onSuspend")}}.

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

Hintergrundskripte werden nach einigen Sekunden Inaktivität entladen. Wenn jedoch während der Unterbrechung eines Hintergrundskripts ein weiteres Ereignis das Hintergrundskript aktiviert, wird {{WebExtAPIRef("runtime.onSuspendCanceled")}} aufgerufen und das Hintergrundskript läuft weiter. Falls Aufräumarbeiten erforderlich sind, registrieren Sie einen Listener für {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onSuspend.addListener(() => {
  console.log("Unloading.");
  browser.browserAction.setBadgeText({ text: "" });
});
```

Sie sollten jedoch Daten dauerhaft speichern, statt sich auf {{WebExtAPIRef("runtime.onSuspend")}} zu verlassen. Dieses Ereignis erlaubt möglicherweise nicht alle erforderlichen Aufräumarbeiten und hilft bei einem Absturz nicht.

## Auf nicht persistent umstellen

Wenn Sie ein persistentes Hintergrundskript verwenden, finden Sie in diesem Abschnitt eine Anleitung für die Umstellung auf das nicht persistente Modell.

### Ihre manifest.json-Datei aktualisieren

Setzen Sie in der Datei `manifest.json` Ihrer Erweiterung die Eigenschaft `persistent` des Schlüssels [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) für Ihr Skript oder Ihre Seite auf `false`.

```json
"background": {
  …,
  "persistent": false
}
```

### Ereignis-Listener verschieben

Listener müssen auf oberster Ebene registriert werden, damit sie das Hintergrundskript aktivieren können, wenn ein Ereignis ausgelöst wird. Bereits registrierte Listener müssen möglicherweise nach dem synchronen Muster umstrukturiert und auf die oberste Ebene verschoben werden.

```js
browser.runtime.onStartup.addListener(() => {
  // run startup function
});
```

### Zustandsänderungen speichern

Skripte werden nun bei Bedarf gestartet und beendet. Verlassen Sie sich daher nicht auf globale Variablen.

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

- Verwenden Sie {{WebExtAPIRef("storage.session")}} für die Speicherung im Arbeitsspeicher. Diese Daten werden gelöscht, wenn die Erweiterung oder der Browser beendet wird. Standardmäßig ist `storage.session` nur in Erweiterungskontexten verfügbar, nicht in Content-Skripten.
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

Im vorherigen Beispiel wird [mithilfe eines Promise eine asynchrone Antwort gesendet](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise). Chrome unterstützt dies ab Chrome 148 beziehungsweise ab Chrome 152 für Erweiterungen mit einer DevTools-Seite.
Für ältere Chrome-Versionen gilt: [Geben Sie `true` zurück und verwenden Sie `sendResponse`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse).

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

### Aufrufe von Funktionen des Hintergrundskripts aktualisieren

Erweiterungen stellen ihre Hauptfunktionalität häufig im Hintergrundskript bereit. Einige Erweiterungen greifen über das von {{WebExtAPIRef("runtime.getBackgroundPage")}} zurückgegebene `window` auf Funktionen und Variablen zu, die auf der Hintergrundseite definiert sind.
Die Methode gibt `null` zurück, wenn:

- Erweiterungsseiten isoliert sind, beispielsweise Erweiterungsseiten im privaten Modus oder in Container-Tabs.
- die Hintergrundseite nicht ausgeführt wird. Bei persistenten Hintergrundseiten ist dies ungewöhnlich, bei Event Pages dagegen sehr wahrscheinlich, da eine Event Page unterbrochen werden kann.

> [!NOTE]
> Es wird empfohlen, Funktionen im Hintergrundskript über {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} oder {{WebExtAPIRef("runtime.connect","runtime.connect()")}} aufzurufen.
> Die in diesem Abschnitt beschriebenen `getBackgroundPage()`-Methoden können nicht in einer browserübergreifenden Erweiterung verwendet werden, da Manifest-Version-3-Erweiterungen in Chrome keine Hintergrundseiten oder Event Pages verwenden können.

Wenn Ihre Erweiterung eine Referenz auf das `window` der Hintergrundseite benötigt, verwenden Sie {{WebExtAPIRef("runtime.getBackgroundPage")}}, um sicherzustellen, dass die Event Page ausgeführt wird.
Wenn der Aufruf optional ist (also nur benötigt wird, wenn die Event Page aktiv ist), verwenden Sie ebenfalls {{WebExtAPIRef("runtime.getBackgroundPage")}}.

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
