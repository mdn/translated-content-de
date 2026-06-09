---
title: "`browsingContext.contextDestroyed` Ereignis"
short-title: contextDestroyed
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed
l10n:
  sourceCommit: a3d6e24e23dccd757487d9ed97b0eb241f107d96
---

Das `browsingContext.contextDestroyed` [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls wird ausgelöst, wenn ein Kontext aus dem Browser entfernt wird, beispielsweise wenn ein Tab geschlossen oder ein `<iframe>` aus dem DOM entfernt wird.

## Ereignisdaten

Das `params`-Feld in der Ereignisbenachrichtigung ist ein [Kontextobjekt](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#contexts) mit den folgenden Eigenschaften, die den entfernten Kontext und dessen Unterbaum beschreiben:

- `children`
  - : Ein Array von [Kontextobjekten](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#contexts), das Kindkontexte darstellt. Dieses Ereignis enthält den vollständigen Unterbaum der entfernten Kindkontexte ([`maxDepth`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#maxdepth) ist `null`). Ein leeres Array zeigt an, dass der Kontext keine Kinder hatte.
- `clientWindow`
  - : Ein String, der die ID des [Clientfensters](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows) enthält, das diesen Kontext enthielt.
- `context`
  - : Ein String, der die ID des entfernten Kontexts enthält.
- `originalOpener`
  - : Ein String, der die ID des Kontexts enthält, der diesen Kontext ursprünglich geöffnet hat. Der Wert ist `null`, wenn der Kontext direkt geöffnet wurde (nicht durch einen anderen Kontext).
- `parent`
  - : Ein String, der die ID des Elternkontextes enthält. Der Wert ist `null`, wenn der Kontext keinen Eltern hatte (das heißt, es war ein [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context)). Dieses Feld ist nur für den Top-Level-Kontext in den Ereignisdaten vorhanden.
- `url`
  - : Ein String, der die URL des Kontexts, einschließlich des Fragments, zum Zeitpunkt seiner Entfernung enthält.
- `userContext`
  - : Ein String, der die ID des [Benutzerkontextes](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) enthält, der mit diesem Kontext verknüpft ist.

## Beschreibung

Wenn das [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) mit dem `contexts`-Parameter auf bestimmte Kontexte beschränkt war, wird die ID des entfernten Kontexts nach der Ausgabe des Ereignisses automatisch aus dem Bereich dieses Abonnements entfernt.

War der entfernte Kontext der einzige Kontext im Bereich des Abonnements, wird das Abonnement selbst automatisch entfernt.

## Beispiele

### Empfang eines Ereignisses, wenn ein Tab geschlossen wird

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) auf `browsingContext.contextDestroyed` aktiv.

Wenn Ihr Automatisierungsskript einen Tab mit [`browsingContext.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close) schließt, sendet der Browser folgende Benachrichtigung:

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

### Empfang eines Ereignisses, wenn ein Tab mit eingebetteten Rahmen geschlossen wird

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) auf `browsingContext.contextDestroyed` aktiv.

Angenommen, ein Tab, das zwei `<iframe>`s enthält, wird geschlossen. Der Browser sendet folgende Benachrichtigung, die den vollständigen Unterbaum im `children`-Feld enthält:

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

- [`browsingContext.contextCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated) Ereignis
- [`browsingContext.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close) Befehl
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) Befehl
- [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) Befehl
