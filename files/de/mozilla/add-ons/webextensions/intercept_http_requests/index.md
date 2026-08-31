---
title: HTTP-Anfragen abfangen
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
l10n:
  sourceCommit: 6d0f39cf8d43b264b732d3056cea62a2e31fbca2
---

Zwei APIs stehen zur Verfügung, um HTTP-Anfragen abzufangen: {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("declarativeNetRequest")}}.

Die {{WebExtAPIRef("webRequest")}} API fängt Anfragen ab, indem Ereignislistener zu den verschiedenen Phasen einer HTTP-Anfrage hinzugefügt werden. Die Listener der Erweiterung können Anfragen programmatisch inspizieren und modifizieren: Zugriff auf Anfrage- und Antwort-Header sowie -Körper, Abbrechen von Anfragen und Umleiten von Anfragen. Verwenden Sie `webRequest`, wenn Ihre Erweiterung Anfragen auf eine Weise behandeln muss, die Sie im Voraus nicht bestimmen können, z.B. wenn die Logik vom Inhalt einer vorherigen Anfrage oder vom dynamischen Zustand der Erweiterung abhängt.

Die {{WebExtAPIRef("declarativeNetRequest")}} API fängt Anfragen mithilfe deklarativer Regeln ab, die Bedingungen und Aktionen spezifizieren. Der Browser bewertet diese Regeln und behandelt Anfragen direkt, ohne die Erweiterung über einzelne Anfragen zu benachrichtigen. Dieses Verhalten macht `declarativeNetRequest` leistungsfähiger und datenschutzfreundlicher als `webRequest`, da Erweiterungen keinen Zugriff auf die Inhalte einzelner Anfragen haben. `declarativeNetRequest` benötigt zudem keine Hintergrundseite und kann Anfragen ohne [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) blockieren oder erweitern. Verwenden Sie `declarativeNetRequest`, wenn die Logik der Anfrageverarbeitung Ihrer Erweiterung als ein festgelegter Satz von Regeln ausgedrückt werden kann, beispielsweise bei Inhaltsblockern.

Dieser Artikel betrachtet Beispiele zur Verwendung beider APIs.

## Verwendung der webRequest API

Dieser Abschnitt enthält Beispiele, die die `webRequest` API verwenden, um:

- Anfragen-URLs zu protokollieren.
- Anfragen umzuleiten.
- Anfragen-Header zu modifizieren.

### Protokollierung von Anfragen-URLs

Um zu sehen, wie Sie `webRequest` verwenden können, um Anfragen zu protokollieren, erstellen Sie ein neues Verzeichnis namens "requests".
Erstellen Sie in diesem Verzeichnis eine Datei namens "manifest.json" und fügen Sie hinzu:

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

Erstellen Sie als Nächstes eine Datei namens "background.js" und fügen Sie hinzu:

```js
function logURL(requestDetails) {
  console.log(`Loading: ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

Verwenden Sie {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} um die Funktion `logURL()` direkt vor dem Start der Anfrage aufzurufen. Die Funktion `logURL()` erfasst die URL der Anfrage aus dem Ereignisobjekt und protokolliert sie in der Browser-Konsole.
Das `{urls: ["<all_urls>"]}` [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) bedeutet, dass Sie HTTP-Anfragen an alle URLs abfangen.

Um es zu testen:

- [Installieren Sie die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- In `about:debugging`, **Dieses Firefox** (oder **Dieses Nightly**), klicken Sie neben der Erweiterung auf **Untersuchen**.
- Öffnen Sie einige Webseiten.

In der Konsolenansicht der Entwicklertools sehen Sie die URLs für jegliche Ressourcen, die der Browser anfragt.
Zum Beispiel zeigt dieser Screenshot die URLs vom Laden einer Wikipedia-Seite:

![Die Entwicklertools-Konsole zeigt protokollierte Aufruf-URLs.](browser_console_url_from_extension.png)

### Umleiten von Anfragen

Verwenden Sie nun `webRequest`, um HTTP-Anfragen umzuleiten. Ersetzen Sie zuerst "manifest.json" durch das Folgende:

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

Die Änderungen hier:

- Fügen Sie die Berechtigung `webRequestBlocking` hinzu, wie in der [`permission`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) beschrieben.
  Diese zusätzliche Berechtigung ist erforderlich, wenn eine Erweiterung eine Anfrage modifizieren möchte.
- Ersetzen Sie die Berechtigung `<all_urls>` durch einzelne [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), da dies eine gute Praxis ist, um die Anzahl der angeforderten Berechtigungen zu minimieren.

Ersetzen Sie als Nächstes "background.js" durch Folgendes:

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

Wieder verwenden Sie den {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} Ereignislistener, um eine Funktion direkt vor jeder Anfrage auszuführen.
Diese Funktion ersetzt die `redirectUrl` durch die Ziel-URL, die in der Funktion angegeben ist. In diesem Fall das Froschbild aus dem [Ihrem zweiten Erweiterungstutorial](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).

Diesmal fangen Sie nicht jede Anfrage ab: die Option `{urls:[pattern], types:["image"]}` gibt an, dass Sie nur Anfragen (1) an URLs unter "https\://developer.mozilla.org/" und (2) für Bildressourcen abfangen.
Lesen Sie {{WebExtAPIRef("webRequest.RequestFilter")}} für weitere Informationen hierzu.

Beachten Sie auch, dass Sie eine Option namens `"blocking"` übergeben: Sie müssen dies immer dann verwenden, wenn Sie die Anfrage modifizieren möchten.
Es bewirkt, dass die Listener-Funktion die Netzwerk-Anfrage blockiert, sodass der Browser wartet, bis der Listener zurückkehrt, bevor er fortfährt.
Lesen Sie die {{WebExtAPIRef("webRequest.onBeforeRequest")}} Dokumentation für mehr über `"blocking"`.

Um es auszuprobieren, öffnen Sie eine Seite auf MDN, die Bilder enthält (z.B. [die Seite, die Benutzeroberflächenkomponenten der Erweiterung auflistet](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface)), [laden Sie die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on), und dann laden Sie die MDN-Seite neu. Sie sehen so etwas:

![Bilder auf einer Seite durch ein Froschbild ersetzt](beastify_by_redirect.png)

### Modifizierung von Anfragen-Headern

Schließlich verwenden Sie `webRequest`, um Anfragen-Header zu modifizieren.
In diesem Beispiel ändern Sie den "User-Agent"-Header, sodass der Browser sich als Opera 12.16 identifiziert, aber nur beim Besuch von Seiten unter "https\://useragentstring.com/".

Aktualisieren Sie "manifest.json", um `https://useragentstring.com/` einzuschließen, wie folgt:

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

Ersetzen Sie "background.js" durch diesen Code:

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

Verwenden Sie den {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} Ereignislistener, um eine Funktion auszuführen, bevor die Anfrage-Header gesendet werden.

Die Listener-Funktion wird nur für Anfragen zu URLs aufgerufen, die mit dem `targetPage` [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmen.
Beachten Sie auch, dass Sie erneut `"blocking"` als Option übergeben. Sie übergeben auch `"requestHeaders"`, was bedeutet, dass dem Listener ein Array mit den Anfrage-Headern, die Sie senden möchten, übergeben wird.
Lesen Sie {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}} für weitere Informationen zu diesen Optionen.

Die Listener-Funktion sucht den "User-Agent"-Header im Array der Anfrage-Header, ersetzt dessen Wert mit dem Wert der `ua`-Variable und gibt das modifizierte Array zurück.
Dieses modifizierte Array wird an den Server gesendet.

Um es zu testen, öffnen Sie [useragentstring.com](https://useragentstring.com/) und überprüfen Sie, dass es den Browser als Firefox identifiziert.
Laden Sie dann die Erweiterung neu, laden Sie [useragentstring.com](https://useragentstring.com/) neu und sehen Sie, dass Firefox nun als Opera identifiziert wird.

![useragentstring.com zeigt Details der modifizierten User-Agent-Zeichenfolge](modified_request_header.png)

## Verwendung der declarativeNetRequest API

Um die Verwendung der `declarativeNetRequest` API zu veranschaulichen, enthält dieser Abschnitt Beispiele, die zeigen, wie Anfragen mittels deklarativer Regeln umgeleitet und Anfragen-Header modifiziert werden können.

Im Gegensatz zu `webRequest` benachrichtigt `declarativeNetRequest` die Erweiterung nicht über einzelne Netzwerk-Anfragen, sodass es kein Äquivalent zu dem [Protokollierungsbeispiel](#protokollierung_von_anfragen-urls) gibt.

### Umleiten von Anfragen

Verwenden Sie `declarativeNetRequest`, um HTTP-Anfragen umzuleiten. Erstellen Sie ein Verzeichnis namens "requests". Erstellen Sie in diesem Verzeichnis eine Datei namens "manifest.json" und fügen Sie hinzu:

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

Die Berechtigung `"declarativeNetRequest"` ermöglicht die API. Der Eintrag `"host_permissions"` ist erforderlich, da die Regeln Anfragen umleiten. Der [`"declarative_net_request"`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) registriert die Regelset-Datei, die definiert, wie Anfragen behandelt werden sollen.

Erstellen Sie als Nächstes eine Datei namens "rules.json" und fügen Sie hinzu:

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

Dieses Regelset enthält zwei Regeln:

- Regel 1 leitet alle Bildanfragen an URLs unter `https://developer.mozilla.org/` zu dem Froschbild aus dem [Ihrem zweiten Erweiterungstutorial](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension) um.
- Regel 2 verwendet die "allow"-Aktion mit einer höheren Priorität, um zu verhindern, dass das Froschbild selbst umgeleitet wird, was sonst eine endlose Umleitungsschleife verursachen würde.

Siehe {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}} und {{WebExtAPIRef("declarativeNetRequest.RuleAction")}} für weitere Informationen zu Bedingungen und Aktionen, und [Matching precedence](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedence) für Details zur Funktionsweise der Regelpriorität.

Im Gegensatz zur `webRequest`-Version dieses Beispiels benötigt die Erweiterung kein Hintergrundskript. Der Browser bewertet die Regeln direkt.

Um es auszuprobieren, öffnen Sie eine Seite auf MDN, die Bilder enthält (zum Beispiel [die Seite, die Benutzeroberflächenkomponenten der Erweiterung auflistet](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface)), [installieren Sie die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), und laden Sie dann die MDN-Seite. Sie sehen so etwas:

![Bilder auf einer Seite durch ein Froschbild ersetzt](beastify_by_redirect.png)

### Modifizierung von Anfragen-Headern

Verwenden Sie `declarativeNetRequest`, um Anfragen-Header zu modifizieren. In diesem Beispiel ändern Sie den "User-Agent"-Header, sodass der Browser sich als Opera 12.16 identifiziert, aber nur für Anfragen an "https\://useragentstring.com/".

Ersetzen Sie "manifest.json" durch das Folgende:

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

Ersetzen Sie "rules.json" durch Folgendes:

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

Die Bedingung der Regel (`condition`) passt zu `main_frame`-Anfragen an `useragentstring.com`. Die Aktion (`action`) verwendet `"modifyHeaders"` mit einer `"operation"` des Typs `"set"`, um den Wert des `User-Agent`-Headers zu ersetzen. Siehe {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} für das vollständige Set an Optionen zur Header-Modifizierung.

Host-Berechtigungen für `useragentstring.com` sind erforderlich, um Header bei Anfragen an diese Domain zu modifizieren.

Um es auszuprobieren, öffnen Sie [useragentstring.com](https://useragentstring.com/) und überprüfen Sie, dass es den Browser als Firefox identifiziert. Laden Sie dann die Erweiterung neu, aktualisieren Sie [useragentstring.com](https://useragentstring.com/), und sehen Sie, dass die Seite den Browser nun als Opera identifiziert.

![useragentstring.com zeigt Details der modifizierten User-Agent-Zeichenfolge](modified_request_header.png)

Um die Bedeutung von Host-Berechtigungen zu sehen, öffnen Sie `about:addons`, suchen Sie nach Ihrer Erweiterung, und wählen Sie im Menü **Verwalten**. Öffnen Sie den Reiter Berechtigungen und Daten und deaktivieren Sie "Zugriff auf Ihre Daten für https://useragentstring.com". Aktualisieren Sie [useragentstring.com](https://useragentstring.com/), und Sie werden sehen, dass die Seite jetzt den Browser als Firefox identifiziert, ohne die Berechtigung zum Zugriff auf die Daten der Seite.

## Mehr erfahren

Um mehr über diese APIs zu erfahren, siehe die {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("declarativeNetRequest")}} Referenzdokumentationen.

Für `webRequest` Beispiele, siehe:

- [http-response](https://github.com/mdn/webextensions-examples/tree/main/http-response)
- [root-cert-stats](https://github.com/mdn/webextensions-examples/tree/main/root-cert-stats)
- [stored-credentials](https://github.com/mdn/webextensions-examples/tree/main/stored-credentials)
- [user-agent-rewriter](https://github.com/mdn/webextensions-examples/tree/main/user-agent-rewriter)

Für `declarativeNetRequest` Beispiele, siehe:

- [dnr-block-only](https://github.com/mdn/webextensions-examples/tree/main/dnr-block-only)
- [dnr-dynamic-with-options](https://github.com/mdn/webextensions-examples/tree/main/dnr-dynamic-with-options)
- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)
