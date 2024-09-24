---
title: Hintergrundskripte
slug: Mozilla/Add-ons/WebExtensions/Background_scripts
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Hintergrundskripte oder eine Hintergrundseite ermöglichen es Ihnen, Ereignisse im Browser zu überwachen und darauf zu reagieren, wie z.B. das Navigieren zu einer neuen Seite, das Entfernen eines Lesezeichens oder das Schließen eines Tabs.

Hintergrundskripte oder eine Seite sind:

- Persistent – sie werden geladen, wenn die Erweiterung startet, und entladen, wenn die Erweiterung deaktiviert oder deinstalliert wird.
- Nicht-persistent (auch als Ereignisseiten bekannt) – sie werden nur geladen, wenn sie auf ein Ereignis reagieren müssen, und entladen, wenn sie inaktiv werden. Eine Hintergrundseite entlädt sich jedoch nicht, bis alle sichtbaren Ansichten und Nachrichtenports geschlossen sind. Das Öffnen einer Ansicht verursacht nicht das Laden der Hintergrundseite, verhindert aber, dass sie sich schließt.

> [!NOTE]
> In Firefox, wenn der Erweiterungsprozess abstürzt:
>
> - Laufende persistente Hintergrundskripte werden im Falle eines Absturzes automatisch neu geladen.
> - Nicht-persistente Hintergrundskripte (auch bekannt als "Ereignisseiten"), die zum Zeitpunkt des Absturzes laufen, werden nicht neu geladen. Sie werden jedoch automatisch neu gestartet, wenn Firefox einen ihrer WebExtensions-API-Ereignis-Listener aufrufen.
> - Erweiterungsseiten, die zur Zeit des Absturzes in Tabs geladen sind, werden nicht automatisch wiederhergestellt. In jedem Tab informiert eine Warnmeldung den Benutzer, dass die Seite abgestürzt ist, und ermöglicht es ihm, den Tab zu schließen oder wiederherzustellen.
>   ![Browserfenster zeigt die Benutzermeldung an, dass eine Seite abgestürzt ist, mit Optionen zum Schließen oder Neustarten des Tabs](your-tab-crashed-screenshot.png)
>   Sie können diesen Zustand testen, indem Sie einen neuen Tab öffnen und zu `about:crashextensions` navigieren, was stillschweigend einen Absturz des Erweiterungsprozesses auslöst.

In Manifest V2 können Hintergrundskripte oder eine Seite persistent oder nicht-persistent sein. Nicht-persistente Hintergrundskripte werden empfohlen, da sie die Ressourcenkosten Ihrer Erweiterung reduzieren. In Manifest V3 werden nur nicht-persistente Hintergrundskripte oder -seiten unterstützt.

Wenn Sie persistente Hintergrundskripte oder eine Seite in Manifest V2 haben und Ihre Erweiterung auf Manifest V3 umstellen möchten, gibt [Umstellung auf nicht-persistent](#umstellung_auf_nicht-persistent) Ratschläge, wie Sie die Skripte oder Seiten auf das nicht-persistente Modell umstellen können.

## Umgebung für Hintergrundskripte

### DOM-APIs

Hintergrundskripte laufen im Kontext einer speziellen Seite, die Hintergrundseite genannt wird. Dies gibt ihnen ein globales [`window`](/de/docs/Web/API/Window)-Objekt sowie alle standardmäßigen DOM-APIs, die von diesem Objekt bereitgestellt werden.

> [!WARNING]
> In Firefox unterstützen Hintergrundseiten nicht die Nutzung von [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm) oder [`prompt()`](/de/docs/Web/API/Window/prompt).

### WebExtension-APIs

Hintergrundskripte können jede [WebExtension-API](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, solange ihre Erweiterung die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat.

### Cross-Origin-Zugriff

Hintergrundskripte können XHR-Anfragen an Hosts stellen, für die sie [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

### Webinhalte

Hintergrundskripte haben keinen direkten Zugriff auf Webseiten. Sie können jedoch [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten laden und [über eine Nachrichten-API mit diesen Inhalts-Skripten kommunizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

### Inhalts-Sicherheitsrichtlinie

Hintergrundskripte sind durch eine Inhalts-Sicherheitsrichtlinie in bestimmten potenziell gefährlichen Operationen, wie der Nutzung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), eingeschränkt.

Siehe [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) für mehr Details.

## Implementierung von Hintergrundskripten

Dieser Abschnitt beschreibt, wie man ein nicht-persistentes Hintergrundskript implementiert.

### Die Hintergrundskripte angeben

In Ihrer Erweiterung fügen Sie ein Hintergrundskript oder -skripte ein, falls erforderlich, indem Sie den Schlüssel [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) in `manifest.json` verwenden. Für Manifest V2-Erweiterungen muss die `persistent`-Eigenschaft `false` sein, um ein nicht-persistentes Skript zu erstellen. Für Manifest V3-Erweiterungen kann sie weggelassen oder auf `false` gesetzt werden, da Skripte in Manifest V3 immer nicht-persistent sind. Das Einschließen von `"type": "module"` lädt die Hintergrundskripte als ES-Module.

```json
"background": {
  "scripts": ["background-script.js"],
  "persistent": false,
  "type": "module"
}
```

Diese Skripte werden in der Hintergrundseite der Erweiterung ausgeführt, daher laufen sie im selben Kontext wie Skripte, die in eine Webseite geladen werden.

Wenn Sie bestimmte Inhalte in der Hintergrundseite benötigen, können Sie diese angeben. Sie spezifizieren dann Ihr Skript von der Seite aus und nicht mit der Eigenschaft `"scripts"`. Vor der Einführung der `"type"`-Eigenschaft im `"background"`-Schlüssel war dies die einzige Option, um ES-Module einzufügen. Sie spezifizieren eine Hintergrundseite wie folgt:

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

### Die Erweiterung initialisieren

Hören Sie auf {{WebExtAPIRef("runtime.onInstalled")}}, um eine Erweiterung bei der Installation zu initialisieren. Verwenden Sie dieses Ereignis, um einen Zustand festzulegen oder für eine einmalige Initialisierung.

Für Erweiterungen mit Ereignisseiten ist dies der Ort, an dem zustandsbehaftete APIs, wie z.B. ein Kontextmenü, das mit {{WebExtAPIRef("menus.create")}} erstellt wurde, verwendet werden sollten. Dies liegt daran, dass zustandsbehaftete APIs nicht jedes Mal ausgeführt werden müssen, wenn die Ereignisseite neu geladen wird; sie müssen nur bei der Installation der Erweiterung ausgeführt werden.

```js
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "sampleContextMenu",
    title: "Beispiel-Kontextmenü",
    contexts: ["selection"],
  });
});
```

### Listener hinzufügen

Strukturieren Sie Hintergrundskripte um Ereignisse, von denen die Erweiterung abhängt. Das Definieren relevanter Ereignisse ermöglicht es Hintergrundskripten inaktiv zu sein, bis diese Ereignisse ausgelöst werden und verhindert, dass die Erweiterung wichtige Auslöser verpasst.

Listener müssen synchron von Beginn der Seite an registriert werden.

```js
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "sampleContextMenu",
    title: "Beispiel-Kontextmenü",
    contexts: ["selection"],
  });
});

// Dies wird ausgeführt, wenn ein Lesezeichen erstellt wird.
browser.bookmarks.onCreated.addListener(() => {
  // machen Sie etwas
});
```

Registrieren Sie Listener nicht asynchron, da sie nicht richtig ausgelöst werden. Stattdessen tun Sie Folgendes:

```js example-bad
window.onload = () => {
  // WARNUNG! Dieses Ereignis wird nicht gespeichert und startet die Ereignisseite nicht neu.
  browser.bookmarks.onCreated.addListener(() => {
    // machen Sie etwas
  });
};
```

Tun Sie stattdessen dies:

```js
browser.tabs.onUpdated.addListener(() => {
  // Dieses Ereignis läuft im obersten Anwendungsbereich der Ereignisseite und wird bestehen bleiben, 
  // wodurch es die Ereignisseite bei Bedarf neu starten kann.
});
```

Erweiterungen können Listener von ihren Hintergrundskripten entfernen, indem sie `removeListener` aufrufen, wie z.B. bei {{WebExtAPIRef("runtime.onMessage")}} `removeListener`. Wenn alle Listener für ein Ereignis entfernt werden, lädt der Browser das Hintergrundskript der Erweiterung nicht mehr für dieses Ereignis.

```js
browser.runtime.onMessage.addListener(
  function messageListener(message, sender, sendResponse) {
    browser.runtime.onMessage.removeListener(messageListener);
  },
);
```

### Ereignisse filtern

Verwenden Sie APIs, die Ereignisfilter unterstützen, um die Listener auf die Fälle zu beschränken, die die Erweiterung betreffen. Wenn eine Erweiterung auf {{WebExtAPIRef("tabs.onUpdated")}} wartet, verwenden Sie stattdessen das Ereignis {{WebExtAPIRef("webNavigation.onCompleted")}} mit Filtern, da die Tabs-API keine Filter unterstützt.

```js
browser.webNavigation.onCompleted.addListener(
  () => {
    console.log("Dies ist meine Lieblingswebseite!");
  },
  { url: [{ urlMatches: "https://www.mozilla.org/" }] },
);
```

### Auf Listener reagieren

Listener existieren, um Funktionalität auszulösen, sobald ein Ereignis ausgelöst wurde. Um auf ein Ereignis zu reagieren, strukturieren Sie die gewünschte Reaktion innerhalb des Listener-Ereignisses.

Beim Reagieren auf Ereignisse im Kontext eines bestimmten Tabs oder Frames verwenden Sie die `tabId` und `frameId` aus den Ereignisdetails, anstatt sich auf den "aktuellen Tab" zu verlassen. Die Spezifizierung des Ziels stellt sicher, dass Ihre Erweiterung nicht eine Erweiterungs-API auf das falsche Ziel anwendet, wenn sich der "aktuelle Tab" ändert, während die Ereignisseite geweckt wird.

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

### Hintergrundskripte entladen

Daten sollten regelmäßig gespeichert werden, um keinen wichtigen Informationen zu verlieren, falls eine Erweiterung ohne Empfang von {{WebExtAPIRef("runtime.onSuspend")}} abstürzt. Verwenden Sie die Speicher-API, um dabei zu helfen.

```js
// Oder storage.session, wenn die Variable keinen Neustart des Browsers überleben muss.
browser.storage.local.set({ variable: variableInformation });
```

Nachrichtenports können nicht verhindern, dass eine Ereignisseite heruntergefahren wird. Wenn eine Erweiterung Nachrichtenübermittlung verwendet, werden die Ports geschlossen, wenn die Ereignisseite inaktiv wird. Der Listener bleibt denselben Zeitbeschränkungen unterworfen wie {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((message) => {
    if (message === "hello") {
      let response = { greeting: "willkommen!" };
      port.postMessage(response);
    } else if (message === "goodbye") {
      console.log("Trenne den Port auf dieser Seite");
      port.disconnect();
    }
  });
  port.onDisconnect.addListener(() => {
    console.log("Port wurde von der anderen Seite getrennt");
  });
});
```

Hintergrundskripte werden nach einigen Sekunden Inaktivität entladen. Wird während der Aussetzung eines Hintergrundskripts jedoch ein anderes Ereignis ausgelöst, das es weckt, wird {{WebExtAPIRef("runtime.onSuspendCanceled")}} aufgerufen und das Hintergrundskript läuft weiter. Sollten Aufräumarbeiten erforderlich sein, hören Sie auf {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onSuspend.addListener(() => {
  console.log("Entladen.");
  browser.browserAction.setBadgeText({ text: "" });
});
```

Es sollte jedoch bevorzugt werden, Daten zu speichern anstatt sich auf {{WebExtAPIRef("runtime.onSuspend")}} zu verlassen. Es erlaubt nicht so viel Aufräumen, wie möglicherweise nötig ist und hilft nicht im Falle eines Absturzes.

## Umstellung auf nicht-persistent

Wenn Sie ein persistentes Hintergrundskript haben, bietet dieser Abschnitt Anleitungen zur Umstellung auf das nicht-persistente Modell.

### Aktualisieren Sie Ihre manifest.json-Datei

Ändern Sie in der manifest.json-Datei Ihrer Erweiterung die Persistent-Eigenschaft des Schlüssels [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) auf `false` für Ihr Skript oder Ihre Seite.

```json
"background": {
  …,
  "persistent": false
}
```

### Ereignis-Listener verschieben

Listener müssen auf oberster Ebene stehen, um das Hintergrundskript zu aktivieren, wenn ein Ereignis ausgelöst wird. Registrierte Listener müssen möglicherweise in das synchrone Muster umstrukturiert und auf die oberste Ebene verschoben werden.

```js
browser.runtime.onStartup.addListener(() => {
  // Start-Funktion ausführen
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

Verwenden Sie stattdessen die Speicher-API, um Zustände und Werte zu setzen und zurückzugeben:

- Verwenden Sie {{WebExtAPIRef("storage.session")}} für In-Memory-Speicher, der gelöscht wird, wenn die Erweiterung oder der Browser heruntergefahren wird. Standardmäßig ist `storage.session` nur für Erweiterungskontexte verfügbar und nicht für Inhalts-Skripte.
- Verwenden Sie {{WebExtAPIRef("storage.local")}} für einen größeren Speicherbereich, der über Neustarts des Browsers und der Erweiterung hinaus bestehen bleibt.

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

Das obige Beispiel [sendet eine asynchrone Antwort mit einem Promise](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise), die in Chrome nicht unterstützt wird, bis [Chrome-Bug 1185241](https://crbug.com/1185241) behoben ist.
Eine alternative Methode für mehrere Browser ist es, [true zurückzugeben und `sendResponse` zu verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse).

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

DOM-basierte Timer wie {{domxref("setTimeout()")}} bleiben nicht aktiv, nachdem eine Ereignisseite inaktiv geworden ist. Verwenden Sie stattdessen die {{WebExtAPIRef("alarms")}}-API, wenn Sie einen Timer benötigen, um eine Ereignisseite zu wecken.

```js
browser.alarms.create({ delayInMinutes: 3.0 });
```

Dann fügen Sie einen Listener hinzu.

```js
browser.alarms.onAlarm.addListener(() => {
  alert("Hallo, Welt!");
});
```

### Aufrufe für Hintergrundskriptfunktionen aktualisieren

Erweiterungen beherbergen häufig ihre primäre Funktionalität im Hintergrundskript. Einige Erweiterungen greifen über das `window`, das von {{WebExtAPIRef("extension.getBackgroundPage")}} zurückgegeben wird, auf Funktionen und Variablen zu, die auf der Hintergrundseite definiert sind.
Die Methode gibt `null` zurück, wenn:

- Erweiterungsseiten isoliert sind, wie z.B. Erweiterungsseiten im Privaten Browsing-Modus oder in Container-Tabs.
- Die Hintergrundseite nicht läuft. Dies ist bei persistenter Hintergrundseite selten, aber sehr wahrscheinlich, wenn eine Ereignisseite verwendet wird, da eine Ereignisseite ausgesetzt werden kann.

> [!NOTE]
> Der empfohlene Weg, um Funktionalität im Hintergrundskript zu aufzurufen, ist die Kommunikation darüber mit {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} oder {{WebExtAPIRef("runtime.connect","runtime.connect()")}}.
> Die diskutierten Methoden `getBackgroundPage()` in diesem Abschnitt können in einer Browser-übergreifenden Erweiterung nicht verwendet werden, da Manifest-Version 3-Erweiterungen in Chrome keine Hintergrund- oder Ereignisseiten verwenden können.

Wenn Ihre Erweiterung einen Verweis auf das `window` der Hintergrundseite benötigt, verwenden Sie {{WebExtAPIRef("runtime.getBackgroundPage")}}, um sicherzustellen, dass die Ereignisseite läuft.
Nếu der Aufruf optional ist (d.h. nur benötigt wird, wenn die Ereignisseite aktiv ist), verwenden Sie {{WebExtAPIRef("extension.getBackgroundPage")}}.

```js example-bad
document.getElementById("target").addEventListener("click", async () => {
  let backgroundPage = browser.extension.getBackgroundPage();
  // Warnung: backgroundPage ist wahrscheinlich null.
  backgroundPage.backgroundFunction();
});
```

```js
document.getElementById("target").addEventListener("click", async () => {
  // runtime.getBackgroundPage() weckt die Ereignisseite auf, falls sie nicht läuft.
  let backgroundPage = await browser.runtime.getBackgroundPage();
  backgroundPage.backgroundFunction();
});
```
