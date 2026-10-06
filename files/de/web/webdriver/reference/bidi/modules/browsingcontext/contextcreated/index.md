---
title: Ereignis `browsingContext.contextCreated`
short-title: contextCreated
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated
l10n:
  sourceCommit: 7124ff73f982c7cd1882e5056e849443116f0333
---

Das [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) `browsingContext.contextCreated` des Moduls [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) wird ausgelöst, wenn im Browser ein neuer [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) erstellt wird.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `children`
  - : Ein Array von [Kontextobjekten](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#contexts), das untergeordnete Kontexte darstellt.
    Dieses Ereignis enthält keine untergeordneten Kontexte ([`maxDepth`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#maxdepth) ist `0`).
    Um die untergeordneten Kontexte eines Kontexts abzurufen, verwenden Sie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `clientWindow`
  - : Ein String mit der ID des [Client-Fensters](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows), das diesen Kontext enthält.
- `context`
  - : Ein String mit der ID des neu erstellten Kontexts.
- `originalOpener`
  - : Ein String mit der ID des Kontexts, der diesen Kontext ursprünglich geöffnet hat.
    Der Wert ist `null`, wenn der Kontext direkt geöffnet wurde (nicht durch einen anderen Kontext).
- `parent`
  - : Ein String mit der ID des übergeordneten Kontexts.
    Der Wert ist `null`, wenn der Kontext keinen übergeordneten Kontext hat (also ein [Kontext der obersten Ebene](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) ist).
- `url`
  - : Ein String mit der URL des Kontexts einschließlich des Fragments zum Zeitpunkt seiner Erstellung.
    Bei neu erstellten Kontexten ist der Wert `"about:blank"`, da das Ereignis ausgelöst wird, bevor eine Navigation stattgefunden hat und Inhalte geladen wurden.
    Bei Kontexten, die zum Zeitpunkt des Abonnements bereits existieren, entspricht der Wert ihrer aktuellen URL.
- `userContext`
  - : Ein String mit der ID des [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts), der diesem Kontext zugeordnet ist.

## Beschreibung

Wenn Sie dieses Ereignis abonnieren, löst der Browser es sofort rekursiv für alle Kontexte aus, die zum Zeitpunkt des Abonnements bereits existieren – beginnend bei den Kontexten der obersten Ebene bis hin zu ihren untergeordneten Kontexten.

Wenn das [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) mithilfe des Parameters [`contexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#contexts) auf bestimmte Kontexte beschränkt wurde, wird das Ereignis nur für untergeordnete Kontexte ausgelöst, die innerhalb dieser Kontexte erstellt werden.

## Beispiele

### Ereignis für einen neuen Tab empfangen

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein aktives [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.contextCreated`.

Wenn Ihr Automatisierungsskript mit [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) einen Tab erstellt, sendet der Browser die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.contextCreated",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "children": null,
    "originalOpener": null,
    "url": "about:blank",
    "userContext": "default",
    "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
    "parent": null
  }
}
```

### Ereignis für einen untergeordneten Kontext empfangen

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein aktives [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.contextCreated`.

Angenommen, eine Seite mit einem `<iframe>` wird geladen. Der Browser sendet für den neuen untergeordneten Kontext die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.contextCreated",
  "params": {
    "context": "6442450945",
    "children": null,
    "originalOpener": null,
    "url": "about:blank",
    "userContext": "default",
    "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
    "parent": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}
```

### Den öffnenden Kontext identifizieren

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Betrachten Sie ein Szenario, in dem bereits zwei Tabs geöffnet sind: Tab 1 unter `https://example.com/page1.html` und Tab 2 unter `https://example.com/page2.html`, der von Tab 1 aus mit `window.open()` geöffnet wurde. Wenn Sie `browsingContext.contextCreated` abonnieren, löst der Browser Ereignisse für die beiden vorhandenen Kontexte aus. Das Feld `originalOpener` in der Benachrichtigung für Tab 2 identifiziert den Kontext, der ihn geöffnet hat.

Der Browser sendet für Tab 1 die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.contextCreated",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "children": null,
    "originalOpener": null,
    "url": "https://example.com/page1.html",
    "userContext": "default",
    "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
    "parent": null
  }
}
```

Unmittelbar danach folgt die Benachrichtigung für Tab 2:

```json
{
  "type": "event",
  "method": "browsingContext.contextCreated",
  "params": {
    "context": "32ed30da-24ad-459d-8f0d-660526e92d96",
    "children": null,
    "originalOpener": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "url": "https://example.com/page2.html",
    "userContext": "default",
    "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
    "parent": null
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ereignis [`browsingContext.contextDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed)
- Befehl [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create)
- Befehl [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)
- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)
