---
title: "`browsingContext` Modul"
short-title: browsingContext
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext
l10n:
  sourceCommit: 15f8fef84c7b7e800eaad84301fdb4b4f9cb80a2
---

Das **`browsingContext`** Modul enthält Befehle und Ereignisse zur Verwaltung von Kontexten.

## Kontexte

Ein Kontext ist ein Navigierelement, das ein Dokument laden kann, wie ein Tab, ein `iframe` oder ein Popup. Jeder Kontext hat eine eindeutige Zeichenfolgenkennung, die als Kontext-ID bezeichnet wird und zur Referenzierung in Befehlen und Ereignissen verwendet wird.

Es gibt zwei Arten von Kontexten:

- **Top-Level-Kontext**
  - : Diese Art von Kontext hat keinen übergeordneten Kontext, entsprechend einem Browser-Tab oder einem eigenständigen Fenster. Top-Level-Kontexte gehören zu einem [Benutzerkontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) und befinden sich innerhalb eines [Clientfensters](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows).
- **Kinderkontext**
  - : Diese Art von Kontext ist innerhalb eines Top-Level-Kontexts verschachtelt, wie ein {{HTMLElement("iframe")}}. Kinderkontexte werden als Kinder ihres Elternkontexts durch [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

Zum Beispiel, wenn Sie ein Browserfenster öffnen und zu `https://example.com` navigieren, wird ein Top-Level-Kontext mit seiner eigenen Kontext-ID erstellt. Wenn diese Seite ein `<iframe>` enthält, das `https://other.com` lädt, wird ein Kinderkontext unter dem Top-Level-Kontext erstellt. Das Öffnen eines neuen Tabs erstellt einen zweiten Top-Level-Kontext mit seiner eigenen Kontext-ID. Ein Aufruf von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) würde beide Top-Level-Kontexte zurückgeben, wobei der erste einen Kinderkontext hat.

## Befehle

- [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate)
- [`browsingContext.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close)
- [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create)
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)
- [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes)

## Ereignisse

- [`browsingContext.contextCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated)
- [`browsingContext.contextDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed)
- [`browsingContext.domContentLoaded`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/domContentLoaded)
- [`browsingContext.fragmentNavigated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated)
- [`browsingContext.historyUpdated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated)
- [`browsingContext.load`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/load)
- [`browsingContext.navigationCommitted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted)
- [`browsingContext.navigationFailed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed)
- [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
