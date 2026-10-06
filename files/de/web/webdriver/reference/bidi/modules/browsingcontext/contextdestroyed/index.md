---
title: "`browsingContext.contextDestroyed`-Ereignis"
short-title: contextDestroyed
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed
l10n:
  sourceCommit: 7124ff73f982c7cd1882e5056e849443116f0333
---

Das [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) `browsingContext.contextDestroyed` des Moduls [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) wird ausgelöst, wenn ein [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) im Browser verworfen wird, etwa wenn ein Tab geschlossen oder ein `<iframe>` aus dem DOM entfernt wird.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `children`
  - : Ein Array von [Kontextobjekten](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#contexts), die untergeordnete Kontexte darstellen.
    Dieses Ereignis enthält den vollständigen Teilbaum der untergeordneten Kontexte, die verworfen wurden ([`maxDepth`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#maxdepth) ist `null`).
    Ein leeres Array bedeutet, dass der Kontext keine untergeordneten Kontexte hatte.
- `clientWindow`
  - : Ein String mit der ID des [Client-Fensters](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows), das diesen Kontext enthielt.
- `context`
  - : Ein String mit der ID des verworfenen Kontexts.
- `originalOpener`
  - : Ein String mit der ID des Kontexts, der diesen Kontext ursprünglich geöffnet hat.
    Der Wert ist `null`, wenn der Kontext direkt geöffnet wurde (und nicht durch einen anderen Kontext).
- `parent`
  - : Ein String mit der ID des übergeordneten Kontexts.
    Der Wert ist `null`, wenn der Kontext keinen übergeordneten Kontext hatte (also ein [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) war).
    Dieses Feld ist in den Ereignisdaten nur für den obersten Kontext vorhanden.
- `url`
  - : Ein String mit der URL des Kontexts einschließlich des Fragments zum Zeitpunkt, als er verworfen wurde.
- `userContext`
  - : Ein String mit der ID des diesem Kontext zugeordneten [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts).

## Beschreibung

Wenn die [Subscription](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) mithilfe des Parameters [`contexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#contexts) auf bestimmte Kontexte beschränkt wurde, wird die ID des verworfenen Kontexts nach dem Auslösen des Ereignisses automatisch aus dem Geltungsbereich dieser Subscription entfernt.

Wenn der verworfene Kontext der einzige Kontext im Geltungsbereich der Subscription war, wird die Subscription selbst automatisch entfernt.

## Beispiele

### Ein Ereignis empfangen, wenn ein Tab geschlossen wird

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und eine aktive [Subscription](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.contextDestroyed`.

Wenn Ihr Automatisierungsskript einen Tab mit [`browsingContext.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close) schließt, sendet der Browser die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.contextDestroyed",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "children": [],
    "originalOpener": null,
    "url": "https://example.com/",
    "userContext": "default",
    "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
    "parent": null
  }
}
```

### Ein Ereignis empfangen, wenn ein Tab mit untergeordneten Frames geschlossen wird

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und eine aktive [Subscription](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.contextDestroyed`.

Angenommen, ein Tab mit zwei `<iframe>`-Elementen wird geschlossen. Der Browser sendet die folgende Benachrichtigung, die im Feld `children` den vollständigen Teilbaum enthält:

```json
{
  "type": "event",
  "method": "browsingContext.contextDestroyed",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "children": [
      {
        "context": "6442450945",
        "children": [],
        "originalOpener": null,
        "url": "https://example.com/frame1.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386"
      },
      {
        "context": "15032385537",
        "children": [],
        "originalOpener": null,
        "url": "https://example.com/frame2.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386"
      }
    ],
    "originalOpener": null,
    "url": "https://example.com/",
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

- Ereignis [`browsingContext.contextCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated)
- Befehl [`browsingContext.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close)
- Befehl [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)
- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)
