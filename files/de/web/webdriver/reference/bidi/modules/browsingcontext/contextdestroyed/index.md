---
title: "`browsingContext.contextDestroyed`-Ereignis"
short-title: contextDestroyed
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed
l10n:
  sourceCommit: 15f8fef84c7b7e800eaad84301fdb4b4f9cb80a2
---

Das `browsingContext.contextDestroyed`-[Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext)-Moduls wird ausgelöst, wenn ein Kontext aus dem Browser entfernt wird, z.B. wenn ein Tab geschlossen oder ein `<iframe>` aus dem DOM entfernt wird.

## Ereignisdaten

Das `params`-Feld in der Ereignisbenachrichtigung ist ein [Kontextobjekt](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#contexts) mit den folgenden Feldern, die den entfernten Kontext und dessen Unterbaum beschreiben:

- `children`
  - : Ein Array von [Kontextobjekten](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#contexts), das Kindkontexte darstellt.
    Dieses Ereignis enthält den vollständigen Unterbaum der entfernten Kindkontexte ([`maxDepth`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#maxdepth) ist `null`).
    Ein leeres Array zeigt an, dass der Kontext keine Kinder hatte.
- `clientWindow`
  - : Ein String, der die ID des [Client-Fensters](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows) enthält, das diesen Kontext enthielt.
- `context`
  - : Ein String, der die ID des entfernten Kontextes enthält.
- `originalOpener`
  - : Ein String, der die ID des Kontextes enthält, der diesen Kontext ursprünglich geöffnet hat.
    Der Wert ist `null`, wenn der Kontext direkt geöffnet wurde (nicht von einem anderen Kontext).
- `parent`
  - : Ein String, der die ID des Elternkontextes enthält.
    Der Wert ist `null`, wenn der Kontext keinen Eltern hatte (also ein [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) war).
    Dieses Feld ist nur für den Top-Level-Kontext in den Ereignisdaten vorhanden.
- `url`
  - : Ein String, der die URL des Kontextes enthält, einschließlich des Fragments, zum Zeitpunkt, als er entfernt wurde.
- `userContext`
  - : Ein String, der die ID des [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) enthält, der mit diesem Kontext verbunden ist.

## Beschreibung

Wenn das [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) mit dem Parameter [`contexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#contexts) auf bestimmte Kontexte begrenzt war, wird die ID des entfernten Kontextes nach der Auslösung des Ereignisses automatisch aus dem Gültigkeitsbereich dieses Abonnements entfernt.

War der entfernte Kontext der einzige Kontext im Bereich des Abonnements, wird das Abonnement selbst automatisch entfernt.

## Beispiele

### Ereignis erhalten, wenn ein Tab geschlossen wird

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.contextDestroyed` aktiv.

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

### Ereignis erhalten, wenn ein Tab mit Kinderframes geschlossen wird

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.contextDestroyed` aktiv.

Angenommen, ein Tab mit zwei `<iframe>`s wird geschlossen. Der Browser sendet die folgende Benachrichtigung, die den vollständigen Unterbaum im `children`-Feld enthält:

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

- [`browsingContext.contextCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated)-Ereignis
- [`browsingContext.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close)-Befehl
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)-Befehl
- [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)-Befehl
