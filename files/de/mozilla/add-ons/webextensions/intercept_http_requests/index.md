---
title: HTTP-Anfragen abfangen
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Zum Abfangen von HTTP-Anfragen stehen zwei APIs zur Verfügung: {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("declarativeNetRequest")}}.

Die {{WebExtAPIRef("webRequest")}}-API fängt Anfragen ab, indem sie Event-Listener für die verschiedenen Phasen einer HTTP-Anfrage registriert. Die Listener der Erweiterung können Anfragen programmatisch untersuchen und ändern: Sie können auf Anfrage- und Antwort-Header sowie deren Inhalte zugreifen, Anfragen abbrechen und sie umleiten. Verwenden Sie `webRequest`, wenn Ihre Erweiterung Anfragen auf eine Weise verarbeiten muss, die sich nicht im Voraus festlegen lässt – etwa wenn die Logik vom Inhalt einer vorherigen Anfrage oder vom dynamischen Zustand der Erweiterung abhängt.

Die {{WebExtAPIRef("declarativeNetRequest")}}-API fängt Anfragen anhand deklarativer Regeln ab, die Bedingungen und Aktionen festlegen. Der Browser wertet diese Regeln aus und verarbeitet Anfragen direkt, ohne die Erweiterung über einzelne Anfragen zu benachrichtigen. Dadurch ist `declarativeNetRequest` leistungsfähiger und datenschutzfreundlicher als `webRequest`, da Erweiterungen keinen Zugriff auf den Inhalt einzelner Anfragen haben. `declarativeNetRequest` benötigt außerdem keine Hintergrundseite und kann Anfragen ohne [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) blockieren oder auf eine sichere Verbindung umstellen. Verwenden Sie `declarativeNetRequest`, wenn sich die Logik zur Verarbeitung von Anfragen in Ihrer Erweiterung als fester Regelsatz ausdrücken lässt, beispielsweise bei Inhaltsblockern.

Dieser Artikel zeigt Beispiele für die Verwendung beider APIs.

## Die webRequest-API verwenden

Dieser Abschnitt enthält Beispiele dafür, wie Sie mit der `webRequest`-API:

- Anfrage-URLs protokollieren.
- Anfragen umleiten.
- Anfrage-Header ändern.

### Anfrage-URLs protokollieren

Um zu sehen, wie Sie mit `webRequest` Anfragen protokollieren können, erstellen Sie ein neues Verzeichnis namens „requests“.
Erstellen Sie darin eine Datei namens „manifest.json“ und fügen Sie Folgendes ein:

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 3,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": ["webRequest"],
  "host_permissions": ["<all_urls>"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Erstellen Sie anschließend eine Datei namens „background.js“ und fügen Sie Folgendes ein:

```js
function logURL(requestDetails) {
  console.log(`Loading: ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

Mit {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} rufen Sie die Funktion `logURL()` unmittelbar vor dem Beginn der Anfrage auf. Die Funktion `logURL()` liest die URL der Anfrage aus dem Event-Objekt und gibt sie in der Browserkonsole aus.
Das [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) `{urls: ["<all_urls>"]}` bedeutet, dass Sie HTTP-Anfragen an alle URLs abfangen.

So testen Sie es:

- [Installieren Sie die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/).
- Klicken Sie unter `about:debugging` im Bereich **Dieser Firefox** (oder **Dieser Nightly**) neben der Erweiterung auf **Untersuchen**.
- Öffnen Sie einige Webseiten.

In der Konsole der Entwicklertools sehen Sie die URLs aller Ressourcen, die der Browser anfordert.
Der folgende Screenshot zeigt beispielsweise die URLs, die beim Laden einer Wikipedia-Seite protokolliert wurden:

![Die Konsole der Entwicklertools für die Erweiterung zeigt die beim Laden einer Wikipedia-Seite protokollierten URLs.](browser_console_url_from_extension.png)

### Anfragen umleiten

Verwenden Sie nun `webRequest`, um HTTP-Anfragen umzuleiten. Ersetzen Sie zunächst den Inhalt von „manifest.json“ durch Folgendes:

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 3,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": ["webRequest", "webRequestBlocking"],
  "host_permissions": ["https://developer.mozilla.org/"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Die Änderungen im Einzelnen:

- Fügen Sie die [`permission`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `webRequestBlocking` hinzu.
  Diese zusätzliche Berechtigung ist erforderlich, wenn eine Erweiterung eine Anfrage ändern soll.
- Ersetzen Sie die Berechtigung `<all_urls>` durch einzelne [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). So halten Sie die Anzahl der angeforderten Berechtigungen möglichst gering.

Ersetzen Sie anschließend den Inhalt von „background.js“ durch Folgendes:

```js
let pattern = "https://developer.mozilla.org/*";
const targetUrl =
  "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension/frog.jpg";

function redirect(requestDetails) {
  console.log(`Redirecting: ${requestDetails.url}`);
  if (requestDetails.url === targetUrl) {
    return;
  }
  return {
    redirectUrl: targetUrl,
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Auch hier verwenden Sie den Event-Listener {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}, um unmittelbar vor jeder Anfrage eine Funktion auszuführen.
Diese Funktion ersetzt `redirectUrl` durch die in der Funktion angegebene Ziel-URL – in diesem Fall die URL des Froschbilds aus dem [Tutorial zu Ihrer zweiten Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).

Diesmal fangen Sie nicht jede Anfrage ab: Die Option `{urls:[pattern], types:["image"]}` legt fest, dass Sie nur Anfragen (1) an URLs unter „https\://developer.mozilla.org/“ und (2) für Bildressourcen abfangen.
Weitere Informationen finden Sie unter {{WebExtAPIRef("webRequest.RequestFilter")}}.

Beachten Sie außerdem, dass Sie die Option `"blocking"` übergeben: Sie müssen sie immer angeben, wenn Sie die Anfrage ändern möchten.
Sie sorgt dafür, dass die Listener-Funktion die Netzwerkanfrage blockiert, sodass der Browser auf ihre Rückgabe wartet, bevor er fortfährt.
Weitere Informationen zu `"blocking"` finden Sie in der Dokumentation zu {{WebExtAPIRef("webRequest.onBeforeRequest")}}.

Öffnen Sie zum Testen eine MDN-Seite mit Bildern (beispielsweise [die Seite mit den Komponenten der Benutzeroberfläche von Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface)), [laden Sie die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on) und laden Sie anschließend die MDN-Seite neu. Sie sehen ungefähr Folgendes:

![Eine MDN-Seite, deren Bilder durch ein Froschbild ersetzt wurden](beastify_by_redirect.png)

### Anfrage-Header ändern

Verwenden Sie `webRequest` abschließend, um Anfrage-Header zu ändern.
In diesem Beispiel ändern Sie den „User-Agent“-Header so, dass sich der Browser als Opera 12.16 ausgibt – allerdings nur beim Aufruf von Seiten unter „https\://useragentstring.com/“.

Ergänzen Sie „manifest.json“ wie folgt um `https://useragentstring.com/`:

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 3,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": ["webRequest", "webRequestBlocking"],
  "host_permissions": ["https://useragentstring.com/"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Ersetzen Sie den Inhalt von „background.js“ durch Code wie diesen:

```js
let targetPage = "https://useragentstring.com/*";

let ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

function rewriteUserAgentHeader(e) {
  e.requestHeaders.forEach((header) => {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = ua;
    }
  });
  return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

Mit dem Event-Listener {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} führen Sie unmittelbar vor dem Senden der Anfrage-Header eine Funktion aus.

Die Listener-Funktion wird nur für Anfragen an URLs aufgerufen, die dem [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) `targetPage` entsprechen.
Beachten Sie auch, dass Sie erneut `"blocking"` als Option übergeben. Zusätzlich übergeben Sie `"requestHeaders"`. Dadurch erhält der Listener ein Array mit den Anfrage-Headern, die gesendet werden sollen.
Weitere Informationen zu diesen Optionen finden Sie unter {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}.

Die Listener-Funktion sucht im Array der Anfrage-Header nach dem „User-Agent“-Header, ersetzt dessen Wert durch den Wert der Variablen `ua` und gibt das geänderte Array zurück.
Dieses geänderte Array wird an den Server gesendet.

Öffnen Sie zum Testen [useragentstring.com](https://useragentstring.com/) und prüfen Sie, ob die Website den Browser als Firefox erkennt.
Laden Sie dann die Erweiterung und [useragentstring.com](https://useragentstring.com/) neu. Nun sollte Firefox als Opera erkannt werden.

![useragentstring.com zeigt Details zum geänderten User-Agent-String](modified_request_header.png)

## Die declarativeNetRequest-API verwenden

Dieser Abschnitt veranschaulicht die Verwendung der `declarativeNetRequest`-API anhand von Beispielen, die zeigen, wie Sie Anfragen mit deklarativen Regeln umleiten und Anfrage-Header ändern.

Anders als `webRequest` benachrichtigt `declarativeNetRequest` die Erweiterung nicht über einzelne Netzwerkanfragen. Daher gibt es keine Entsprechung zum [Beispiel für die Protokollierung](#anfrage-urls_protokollieren).

### Anfragen umleiten

Verwenden Sie `declarativeNetRequest`, um HTTP-Anfragen umzuleiten. Erstellen Sie ein Verzeichnis namens „requests“. Erstellen Sie darin eine Datei namens „manifest.json“ und fügen Sie Folgendes ein:

```json
{
  "description": "Demonstrating declarativeNetRequest",
  "manifest_version": 3,
  "name": "declarativeNetRequest-demo",
  "version": "1.0",

  "permissions": ["declarativeNetRequest"],
  "host_permissions": ["https://developer.mozilla.org/"],

  "declarative_net_request": {
    "rule_resources": [
      {
        "id": "ruleset_1",
        "enabled": true,
        "path": "rules.json"
      }
    ]
  }
}
```

Die Berechtigung `"declarativeNetRequest"` aktiviert die API. Der Eintrag `"host_permissions"` ist erforderlich, da die Regeln Anfragen umleiten. Der [Manifest-Schlüssel `"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) registriert die Datei mit dem Regelsatz, die festlegt, wie Anfragen verarbeitet werden.

Erstellen Sie anschließend eine Datei namens „rules.json“ und fügen Sie Folgendes ein:

```json
[
  {
    "id": 1,
    "priority": 1,
    "action": {
      "type": "redirect",
      "redirect": {
        "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension/frog.jpg"
      }
    },
    "condition": {
      "urlFilter": "||developer.mozilla.org",
      "resourceTypes": ["image"]
    }
  },
  {
    "id": 2,
    "priority": 2,
    "action": { "type": "allow" },
    "condition": {
      "urlFilter": "frog.jpg",
      "resourceTypes": ["image"]
    }
  }
]
```

Dieser Regelsatz enthält zwei Regeln:

- Regel 1 leitet alle Bildanfragen an URLs unter `https://developer.mozilla.org/` auf das Froschbild aus dem [Tutorial zu Ihrer zweiten Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension) um.
- Regel 2 verwendet die Aktion „allow“ mit höherer Priorität, damit das Froschbild selbst nicht umgeleitet wird. Andernfalls entstünde eine Endlosschleife von Weiterleitungen.

Weitere Informationen zu Bedingungen und Aktionen finden Sie unter {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}} und {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}. Wie die Priorität von Regeln funktioniert, erläutert der Abschnitt [Reihenfolge bei übereinstimmenden Regeln](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedence).

Anders als bei der `webRequest`-Version dieses Beispiels benötigt die Erweiterung kein Hintergrundskript. Der Browser wertet die Regeln direkt aus.

Öffnen Sie zum Testen eine MDN-Seite mit Bildern (beispielsweise [die Seite mit den Komponenten der Benutzeroberfläche von Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface)), [installieren Sie die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und laden Sie anschließend die MDN-Seite. Sie sehen ungefähr Folgendes:

![Bilder auf einer Seite wurden durch ein Froschbild ersetzt](beastify_by_redirect.png)

### Anfrage-Header ändern

Verwenden Sie `declarativeNetRequest`, um Anfrage-Header zu ändern. In diesem Beispiel ändern Sie den „User-Agent“-Header so, dass sich der Browser als Opera 12.16 ausgibt – allerdings nur bei Anfragen an „https\://useragentstring.com/“.

Ersetzen Sie den Inhalt von „manifest.json“ durch Folgendes:

```json
{
  "description": "Demonstrating declarativeNetRequest",
  "manifest_version": 3,
  "name": "declarativeNetRequest-demo",
  "version": "1.0",

  "permissions": ["declarativeNetRequest"],
  "host_permissions": ["https://useragentstring.com/"],

  "declarative_net_request": {
    "rule_resources": [
      {
        "id": "ruleset_1",
        "enabled": true,
        "path": "rules.json"
      }
    ]
  }
}
```

Ersetzen Sie den Inhalt von „rules.json“ durch Folgendes:

```json
[
  {
    "id": 1,
    "priority": 1,
    "action": {
      "type": "modifyHeaders",
      "requestHeaders": [
        {
          "header": "User-Agent",
          "operation": "set",
          "value": "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16"
        }
      ]
    },
    "condition": {
      "urlFilter": "||useragentstring.com",
      "resourceTypes": ["main_frame"]
    }
  }
]
```

Die `condition` der Regel trifft auf `main_frame`-Anfragen an `useragentstring.com` zu. Die `action` verwendet `"modifyHeaders"` mit der `"operation"` `"set"`, um den Wert des `User-Agent`-Headers zu ersetzen. Alle Optionen zum Ändern von Headern finden Sie unter {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}.

Zum Ändern von Headern bei Anfragen an `useragentstring.com` sind Host-Berechtigungen für diese Domain erforderlich.

Öffnen Sie zum Testen [useragentstring.com](https://useragentstring.com/) und prüfen Sie, ob die Website den Browser als Firefox erkennt. [Laden Sie dann die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on) und aktualisieren Sie [useragentstring.com](https://useragentstring.com/). Nun sollte die Website den Browser als Opera erkennen.

![useragentstring.com zeigt Details zum geänderten User-Agent-String](modified_request_header.png)

Um zu sehen, wie wichtig Host-Berechtigungen sind, öffnen Sie `about:addons`, suchen Sie Ihre Erweiterung und wählen Sie in ihrem Hamburger-Menü **Verwalten**. Öffnen Sie den Tab „Berechtigungen und Daten“ und deaktivieren Sie „Auf Ihre Daten für https://useragentstring.com zugreifen“. Laden Sie [useragentstring.com](https://useragentstring.com/) neu. Ohne die Berechtigung zum Zugriff auf Daten dieser Website erkennt sie den Browser wieder als Firefox.

## Weitere Informationen

Weitere Informationen zu diesen APIs finden Sie in der Referenzdokumentation zu {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("declarativeNetRequest")}}.

Beispiele für `webRequest` finden Sie hier:

- [http-response](https://github.com/mdn/webextensions-examples/tree/main/http-response)
- [root-cert-stats](https://github.com/mdn/webextensions-examples/tree/main/root-cert-stats)
- [stored-credentials](https://github.com/mdn/webextensions-examples/tree/main/stored-credentials)
- [user-agent-rewriter](https://github.com/mdn/webextensions-examples/tree/main/user-agent-rewriter)

Beispiele für `declarativeNetRequest` finden Sie hier:

- [dnr-block-only](https://github.com/mdn/webextensions-examples/tree/main/dnr-block-only)
- [dnr-dynamic-with-options](https://github.com/mdn/webextensions-examples/tree/main/dnr-dynamic-with-options)
- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)
