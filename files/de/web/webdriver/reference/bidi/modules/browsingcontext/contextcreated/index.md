---
title: "`browsingContext.contextCreated` Ereignis"
short-title: contextCreated
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated
l10n:
  sourceCommit: 15f8fef84c7b7e800eaad84301fdb4b4f9cb80a2
---

Das `browsingContext.contextCreated` [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls wird ausgelöst, wenn ein neuer Kontext im Browser erstellt wird.

## Ereignisdaten

Das `params`-Feld in der Ereignisbenachrichtigung ist ein [Kontextobjekt](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#contexts) mit den folgenden Feldern:

- `children`
  - : Ein Array von [Kontextobjekten](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#contexts), das Kindkontexte darstellt.
    Dieses Ereignis enthält keine Kindkontexte ([`maxDepth`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#maxdepth) ist `0`).
    Um die Kinder eines Kontexts abzurufen, verwenden Sie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `clientWindow`
  - : Ein String, der die ID des [Clientfensters](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows) enthält, welches diesen Kontext umfasst.
- `context`
  - : Ein String, der die ID des neu erstellten Kontexts enthält.
- `originalOpener`
  - : Ein String, der die ID des Kontexts enthält, der diesen Kontext ursprünglich geöffnet hat.
    Der Wert ist `null`, wenn der Kontext direkt geöffnet wurde (nicht von einem anderen Kontext).
- `parent`
  - : Ein String, der die ID des Elternkontexts enthält.
    Der Wert ist `null`, wenn der Kontext keinen Eltern hat (das heißt, es ist ein [top-level Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context)).
- `url`
  - : Ein String, der die URL des Kontexts enthält, einschließlich des Fragments, zu dem Zeitpunkt, an dem er erstellt wurde.
    Für neu erstellte Kontexte ist der Wert `"about:blank"`, da das Ereignis vor einer Navigation ausgelöst wird und Inhalte noch nicht geladen sind.
    Für bestehende Kontexte zum Zeitpunkt der Abonnementserstellung spiegelt der Wert ihre aktuelle URL wider.
- `userContext`
  - : Ein String, der die ID des [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) enthält, der mit diesem Kontext verknüpft ist.

## Beschreibung

Wenn Sie dieses Ereignis abonnieren, löst der Browser das Ereignis rekursiv für alle Kontexte aus, die zum Zeitpunkt des Abonnements bereits existieren, beginnend mit top-level Kontexte und weiter zu ihren Kindern.

Wenn das [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) auf spezifische Kontexte beschränkt wurde, indem der [`contexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#contexts) Parameter verwendet wurde, lösen nur in diesen Kontexten erstellte Kindkontexte das Ereignis aus.

## Beispiele

### Ereignisempfang für einen neuen Tab

Angenommen, Sie haben eine [WebDriver BiDi Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.contextCreated` aktiv.

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

### Ereignisempfang für einen Kindkontext

Angenommen, Sie haben eine [WebDriver BiDi Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.contextCreated` aktiv.

Angenommen, eine Seite mit einem `<iframe>` lädt. Der Browser sendet die folgende Benachrichtigung für den neuen Kindkontext:

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

### Den Öffner eines Kontexts identifizieren

Angenommen, Sie haben eine [WebDriver BiDi Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Betrachten Sie ein Szenario, in dem zwei Tabs bereits geöffnet sind: Tab 1 unter `https://example.com/page1.html` und Tab 2 unter `https://example.com/page2.html`, das von Tab 1 mit `window.open()` geöffnet wurde. Wenn Sie `browsingContext.contextCreated` abonnieren, löst der Browser Ereignisse für die beiden bestehenden Kontexte aus. Das `originalOpener` Feld in der Benachrichtigung für Tab 2 identifiziert den Kontext, der es geöffnet hat.

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

- [`browsingContext.contextDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed) Ereignis
- [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) Befehl
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) Befehl
- [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) Befehl
