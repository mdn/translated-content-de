---
title: "`browsingContext.contextCreated` Ereignis"
short-title: contextCreated
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated
l10n:
  sourceCommit: a3d6e24e23dccd757487d9ed97b0eb241f107d96
---

Das `browsingContext.contextCreated` [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls wird ausgelöst, wenn ein neuer Kontext im Browser erstellt wird.

## Ereignisdaten

Das `params` Feld in der Ereignisbenachrichtigung ist ein [Kontextobjekt](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#contexts) mit den folgenden Eigenschaften:

- `children`
  - : Ein Array von [Kontextobjekten](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#contexts), das Kinderkontexte darstellt.
    Dieses Ereignis beinhaltet keine Kinderkontexte ([`maxDepth`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#maxdepth) ist `0`).
    Um die Kinder eines Kontextes abzurufen, verwenden Sie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `clientWindow`
  - : Ein String, der die ID des [Client-Fensters](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows) enthält, das diesen Kontext beinhaltet.
- `context`
  - : Ein String, der die ID des neu erstellten Kontextes enthält.
- `originalOpener`
  - : Ein String, der die ID des Kontextes enthält, das diesen Kontext ursprünglich geöffnet hat.
    Der Wert ist `null`, wenn der Kontext direkt geöffnet wurde (nicht durch einen anderen Kontext).
- `parent`
  - : Ein String, der die ID des übergeordneten Kontextes enthält.
    Der Wert ist `null`, wenn der Kontext keinen übergeordneten Kontext hat (d.h. es ist ein [oberster Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context)).
- `url`
  - : Ein String, der die URL des Kontextes enthält, einschließlich des Fragments, zu dem Zeitpunkt, als er erstellt wurde.
    Für neu erstellte Kontexte ist der Wert `"about:blank"`, da das Ereignis ausgelöst wird, bevor eine Navigation stattgefunden hat und Inhalte geladen wurden.
    Für bestehende Kontexte zum Zeitpunkt des Abonnements reflektiert der Wert ihre aktuelle URL.
- `userContext`
  - : Ein String, der die ID des [Benutzerkontextes](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) enthält, der mit diesem Kontext verknüpft ist.

## Beschreibung

Wenn Sie dieses Ereignis abonnieren, löst der Browser das Ereignis sofort rekursiv für alle Kontexte aus, die zum Zeitpunkt des Abonnements bereits existieren, beginnend mit obersten Kontexten bis hin zu ihren Kindern.

Wenn das [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) mithilfe des [`contexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#contexts) Parameters auf bestimmte Kontexte eingegrenzt wurde, werden nur für in diesen Kontexten erstellte Kinderkontexte Ereignisse ausgelöst.

## Beispiele

### Empfang eines Ereignisses für einen neuen Tab

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.contextCreated` aktiv.

Wenn Ihr Automatisierungsskript einen Tab mit [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) erstellt, sendet der Browser die folgende Benachrichtigung:

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

### Empfang eines Ereignisses für einen Kinderkontext

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.contextCreated` aktiv.

Angenommen, eine Seite mit einem `<iframe>` wird geladen. Der Browser sendet die folgende Benachrichtigung für den neuen Kinderkontext:

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

### Identifizierung des Öffners eines Kontextes

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Betrachten Sie ein Szenario, bei dem zwei Tabs bereits geöffnet sind: Tab 1 bei `https://example.com/page1.html` und Tab 2 bei `https://example.com/page2.html`, das von Tab 1 mit `window.open()` geöffnet wurde. Wenn Sie `browsingContext.contextCreated` abonnieren, löst der Browser Ereignisse für die beiden bestehenden Kontexte aus. Das `originalOpener` Feld in der Benachrichtigung von Tab 2 identifiziert den Kontext, der ihn geöffnet hat.

Der Browser sendet die folgende Benachrichtigung für Tab 1:

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

Diese wird sofort gefolgt von der Benachrichtigung für Tab 2:

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

- [`browsingContext.contextDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed) Ereignis
- [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) Befehl
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) Befehl
- [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) Befehl
