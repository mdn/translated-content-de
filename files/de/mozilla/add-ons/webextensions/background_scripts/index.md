---
title: Hintergrundskripte
slug: Mozilla/Add-ons/WebExtensions/Background_scripts
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{AddonSidebar}}

Hintergrundskripte oder eine Hintergrundseite ermöglichen es Ihnen, Ereignisse im Browser zu überwachen und darauf zu reagieren, wie z. B. das Navigieren zu einer neuen Seite, das Entfernen eines Lesezeichens oder das Schließen eines Tabs.

Hintergrundskripte oder eine Seite sind:

- Persistent – geladen, wenn die Erweiterung gestartet wird und entladen, wenn die Erweiterung deaktiviert oder deinstalliert wird.
- Nicht persistent (auch bekannt als Ereignisseiten) – nur geladen, wenn sie benötigt werden, um auf ein Ereignis zu reagieren, und entladen, wenn sie inaktiv werden. Eine Hintergrundseite wird jedoch nicht entladen, bis alle sichtbaren Ansichten und Nachrichtenkanäle geschlossen sind. Das Öffnen einer Ansicht verursacht nicht das Laden der Hintergrundseite, verhindert jedoch deren Schließung.

> [!NOTE]
> In Firefox, wenn der Erweiterungsprozess abstürzt:
>
> - persistente Hintergrundskripte, die zum Zeitpunkt des Absturzes ausgeführt werden, werden automatisch neu geladen.
> - nicht-persistente Hintergrundskripte (auch bekannt als "Ereignisseiten"), die zum Zeitpunkt des Absturzes ausgeführt werden, werden nicht neu geladen. Sie werden jedoch automatisch neu gestartet, wenn Firefox einen ihrer WebExtensions-API-Ereignislistener aufruft.
> - Erweiterungsseiten, die zum Zeitpunkt des Absturzes in Tabs geladen sind, werden nicht automatisch wiederhergestellt. Eine Warnmeldung in jedem Tab informiert den Benutzer, dass die Seite abgestürzt ist und ermöglicht es dem Benutzer, den Tab zu schließen oder wiederherzustellen.
>   ![Browserfenster, das die Benutzerbenachrichtigung anzeigt, dass eine Seite abgestürzt ist, mit den Optionen, den Tab zu schließen oder neu zu starten](your-tab-crashed-screenshot.png)
>   Sie können diese Bedingung testen, indem Sie einen neuen Tab öffnen und zu `about:crashextensions` navigieren, was stillschweigend einen Absturz des Erweiterungsprozesses auslöst.

In Manifest V2 können Hintergrundskripte oder eine Seite persistent oder nicht persistent sein. Nicht-persistente Hintergrundskripte werden empfohlen, da sie die Ressourcenkosten Ihrer Erweiterung reduzieren. In Manifest V3 werden nur nicht-persistente Hintergrundskripte oder eine Seite unterstützt.

Wenn Sie persistente Hintergrundskripte oder eine Seite in Manifest V2 haben und Ihre Erweiterung auf die Migration zu Manifest V3 vorbereiten möchten, bietet [Konvertieren zu nicht-persistent](#konvertieren_zu_nicht-persistent) Ratschläge zum Übergang der Skripte oder Seite zum nicht-persistenten Modell.

## Hintergrundskript-Umgebung

### DOM-APIs

Hintergrundskripte laufen im Kontext einer speziellen Seite, die als Hintergrundseite bezeichnet wird. Dies verleiht ihnen ein globales [`window`](/de/docs/Web/API/Window) und alle Standard-DOM-APIs, die von diesem Objekt bereitgestellt werden.

> [!WARNING]
> In Firefox unterstützen Hintergrundseiten nicht die Verwendung von [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm) oder [`prompt()`](/de/docs/Web/API/Window/prompt).

### WebExtension-APIs

Hintergrundskripte können alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, solange ihre Erweiterung die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat.

### Cross-Origin-Zugriff

Hintergrundskripte können XHR-Anfragen an Hosts stellen, für die sie [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

### Web-Inhalte

Hintergrundskripte haben keinen direkten Zugriff auf Webseiten. Sie können jedoch [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten laden und [mit diesen Inhaltsskripten über eine Nachrichtenübermittlung-API kommunizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

### Content Security Policy

Hintergrundskripte sind durch eine Content Security Policy von bestimmten potenziell gefährlichen Operationen, wie der Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), ausgeschlossen.

Weitere Details finden Sie unter [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Implementierung von Hintergrundskripten

Dieser Abschnitt beschreibt, wie man ein nicht-persistentes Hintergrundskript implementiert.

### Hintergrundskripte spezifizieren

In Ihrer Erweiterung fügen Sie ein Hintergrundskript oder Skripte ein, wenn Sie diese benötigen, indem Sie den Schlüssel [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) in `manifest.json` verwenden. Für Erweiterungen in Manifest V2 muss die `persistent`-Eigenschaft auf `false` gesetzt werden, um ein nicht-persistentes Skript zu erstellen. Für Erweiterungen in Manifest V3 kann es weggelassen werden oder muss auf `false` gesetzt werden, da Skripte in Manifest V3 immer nicht-persistent sind. Die Einbeziehung von `"type": "module"` lädt die Hintergrundskripte als ES-Module.

```json
"background": {
  "scripts": ["background-script.js"],
  "persistent": false,
  "type": "module"
}
```

Diese Skripte werden in der Hintergrundseite der Erweiterung ausgeführt, so dass sie im gleichen Kontext wie in eine Webseite geladene Skripte operieren.

Wenn Sie jedoch bestimmte Inhalte in der Hintergrundseite benötigen, können Sie eine festlegen. Sie geben dann Ihr Skript von der Seite an, anstatt die `"scripts"`-Eigenschaft zu verwenden. Vor der Einführung der `"type"`-Eigenschaft zum `"background"`-Schlüssel war dies die einzige Möglichkeit, ES-Module einzufügen. Sie legen eine Hintergrundseite so fest:

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

Sie können keine Hintergrundskripte und eine Hintergrundseite gleichzeitig spezifizieren.

### Die Erweiterung initialisieren

Hören Sie zu {{WebExtAPIRef("runtime.onInstalled")}}, um eine Erweiterung bei der Installation zu initialisieren. Verwenden Sie dieses Ereignis, um einen Zustand festzulegen oder für die einmalige Initialisierung.

Für Erweiterungen mit Ereignisseiten ist dies der Ort, wo zustandsbehaftete APIs, wie ein mit {{WebExtAPIRef("menus.create")}} erstelltes Kontextmenü, verwendet werden sollten. Dies liegt daran, dass zustandsbehaftete APIs nicht bei jedem Neuladen der Ereignisseite ausgeführt werden müssen; sie müssen nur ausgeführt werden, wenn die Erweiterung installiert wird.

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

Strukturieren Sie Hintergrundskripte um Ereignisse, auf die die Erweiterung angewiesen ist. Die Definition relevanter Ereignisse ermöglicht es Hintergrundskripten, inaktiv zu bleiben, bis diese Ereignisse ausgelöst werden, und verhindert, dass die Erweiterung wesentliche Auslöser verpasst.

Listener müssen synchron vom Start der Seite aus registriert werden.

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

Registrieren Sie keine Listener asynchron, da sie nicht ordnungsgemäß ausgelöst werden. Anstatt:

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

Erweiterungen können Listener aus ihren Hintergrundskripten entfernen, indem sie `removeListener` aufrufen, wie z. B. mit {{WebExtAPIRef("runtime.onMessage")}} `removeListener`. Wenn alle Listener für ein Ereignis entfernt werden, lädt der Browser das Hintergrundskript der Erweiterung für dieses Ereignis nicht mehr.

```js
browser.runtime.onMessage.addListener(
  function messageListener(message, sender, sendResponse) {
    browser.runtime.onMessage.removeListener(messageListener);
  },
);
```

### Ereignisse filtern

Verwenden Sie APIs, die Ereignisfilter unterstützen, um Listener auf die Fälle zu beschränken, die für die Erweiterung von Bedeutung sind. Wenn eine Erweiterung {{WebExtAPIRef("tabs.onUpdated")}} überwacht, verwenden Sie stattdessen das Ereignis {{WebExtAPIRef("webNavigation.onCompleted")}} mit Filtern, da die Tabs-API keine Filter unterstützt.

```js
browser.webNavigation.onCompleted.addListener(
  () => {
    console.log("This is my favorite website!");
  },
  { url: [{ urlMatches: "https://www.mozilla.org/" }] },
);
```

### Auf Listener reagieren

Listener existieren, um Funktionalität auszulösen, sobald ein Ereignis ausgelöst wurde. Um auf ein Ereignis zu reagieren, strukturieren Sie die gewünschte Reaktion innerhalb des Listener-Ereignisses.

Beim Reagieren auf Ereignisse im Kontext eines bestimmten Tabs oder einer bestimmten Frame verwenden Sie `tabId` und `frameId` aus den Ereignisdaten, anstatt sich auf den "aktuellen Tab" zu verlassen. Die Spezifikation des Ziels stellt sicher, dass Ihre Erweiterung keine Erweiterungs-API auf das falsche Ziel aufruft, wenn sich der "aktuelle Tab" ändert, während die Ereignisseite geweckt wird.

Zum Beispiel kann {{WebExtAPIRef("runtime.onMessage")}} auf Aufrufe von {{WebExtAPIRef("runtime.sendMessage")}} wie folgt antworten:

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

Daten sollten periodisch gespeichert werden, um wichtige Informationen nicht zu verlieren, falls eine Erweiterung abstürzt, ohne {{WebExtAPIRef("runtime.onSuspend")}} zu empfangen. Verwenden Sie die Speicher-API, um dabei zu helfen.

```js
// Or storage.session if the variable does not need to persist pass browser shutdown.
browser.storage.local.set({ variable: variableInformation });
```

Nachrichtenkanäle können nicht verhindern, dass eine Ereignisseite heruntergefahren wird. Wenn eine Erweiterung die Nachrichtenübermittlung verwendet, werden die Kanäle geschlossen, wenn die Ereignisseite inaktiv ist. Das Lauschen auf {{WebExtAPIRef("runtime.Port")}} `onDisconnect` ermöglicht es Ihnen, zu entdecken, wann offene Kanäle geschlossen werden, allerdings hat der Listener die gleichen Zeitbeschränkungen wie {{WebExtAPIRef("runtime.onSuspend")}}.

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

Hintergrundskripte werden nach wenigen Sekunden Inaktivität entladen. Wenn jedoch während der Aussetzung eines Hintergrundskripts ein anderes Ereignis das Hintergrundskript weckt, wird {{WebExtAPIRef("runtime.onSuspendCanceled")}} aufgerufen und das Hintergrundskript läuft weiter. Falls Aufräumarbeiten erforderlich sind, hören Sie auf {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onSuspend.addListener(() => {
  console.log("Unloading.");
  browser.browserAction.setBadgeText({ text: "" });
});
```

Es sollte jedoch bevorzugt werden, Daten zu speichern, anstatt sich auf {{WebExtAPIRef("runtime.onSuspend")}} zu verlassen. Es erlaubt nicht so viel Aufräumarbeiten, wie möglicherweise benötigt werden und hilft nicht im Falle eines Absturzes.

## Konvertieren zu nicht-persistent

Wenn Sie ein persistentes Hintergrundskript haben, bietet dieser Abschnitt Anweisungen zur Umstellung auf das nicht-persistente Modell.

### Ihre manifest.json-Datei aktualisieren

Ändern Sie in der `manifest.json`-Datei Ihrer Erweiterung die persistente Eigenschaft des [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)-Schlüssels auf `false` für Ihr Skript oder Ihre Seite.

```json
"background": {
  …,
  "persistent": false
}
```

### Ereignislistener verschieben

Listener müssen auf der obersten Ebene sein, um das Hintergrundskript zu aktivieren, wenn ein Ereignis ausgelöst wird. Registrierte Listener müssen möglicherweise zu einem synchronen Muster umstrukturiert und auf die oberste Ebene verschoben werden.

```js
browser.runtime.onStartup.addListener(() => {
  // run startup function
});
```

### Zustandsänderungen aufzeichnen

Skripte öffnen und schließen jetzt nach Bedarf. Verlassen Sie sich daher nicht auf globale Variablen.

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
- Verwenden Sie {{WebExtAPIRef("storage.local")}} für einen größeren Speicherbereich, der über Neustarts von Browser und Erweiterung hinaus besteht.

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

Das vorherige Beispiel [sendet eine asynchrone Antwort unter Verwendung eines Versprechens](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise), was in Chrome nicht unterstützt wird, bis [Chrome-Bug 1185241](https://crbug.com/1185241) behoben ist.
Eine cross-browser Alternative ist [true zurückzugeben und `sendResponse` zu verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse).

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

DOM-basierte Timer, wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), bleiben nach dem Inaktivwerden einer Ereignisseite nicht aktiv. Verwenden Sie stattdessen die {{WebExtAPIRef("alarms")}} API, wenn Sie einen Timer benötigen, um eine Ereignisseite zu wecken.

```js
browser.alarms.create({ delayInMinutes: 3.0 });
```

Fügen Sie dann einen Listener hinzu.

```js
browser.alarms.onAlarm.addListener(() => {
  alert("Hello, world!");
});
```

### Aufrufe für Hintergrundskriptfunktionen aktualisieren

Erweiterungen hosten häufig ihre Hauptfunktionalität im Hintergrundskript. Einige Erweiterungen greifen auf Funktionen und Variablen zu, die in der Hintergrundseite über das `window` definiert sind, das von {{WebExtAPIRef("extension.getBackgroundPage")}} zurückgegeben wird. Die Methode gibt `null` zurück, wenn:

- Erweiterungsseiten isoliert sind, wie z. B. Erweiterungsseiten im Privaten Fenster-Modus oder Containertabs.
- die Hintergrundseite nicht läuft. Dies ist bei persistenten Hintergrundseiten selten, aber sehr wahrscheinlich bei Verwendung einer Ereignisseite, da eine Ereignisseite angehalten werden kann.

> [!NOTE]
> Der empfohlene Weg, um Funktionalität im Hintergrundskript aufzurufen, ist die Kommunikation über {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} oder {{WebExtAPIRef("runtime.connect","runtime.connect()")}}.
> Die in diesem Abschnitt diskutierten `getBackgroundPage()`-Methoden können in einer cross-browser Erweiterung nicht verwendet werden, da Manifest Version 3 Erweiterungen in Chrome keine Hintergrund- oder Ereignisseiten verwenden können.

Wenn Ihre Erweiterung einen Verweis auf das `window` der Hintergrundseite benötigt, verwenden Sie {{WebExtAPIRef("runtime.getBackgroundPage")}} um sicherzustellen, dass die Ereignisseite ausgeführt wird.
Falls der Aufruf optional ist (d.h. nur benötigt wird, wenn die Ereignisseite am Leben ist), verwenden Sie {{WebExtAPIRef("extension.getBackgroundPage")}}.

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
