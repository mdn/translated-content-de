---
title: "`browsingContext` Modul"
short-title: browsingContext
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext
l10n:
  sourceCommit: e5999f9b30c19ca727cbf28ec254f2111f7d36c8
---

Das **`browsingContext`** Modul enthält Befehle und Ereignisse zur Verwaltung von Kontexte.

## Kontexte

Ein Kontext ist ein navigierbares Element, das ein Dokument laden kann, wie z.B. ein Tab, ein `iframe` oder ein Popup.
Jeder Kontext hat eine eindeutige Zeichenfolge als Bezeichner, genannt Kontext-ID, die verwendet wird, um ihn in Befehlen und Ereignissen zu referenzieren.

Es gibt zwei Arten von Kontexte:

- **Kontext auf oberster Ebene**
  - : Diese Art von Kontext hat keinen übergeordneten Kontext und entspricht einem Browser-Tab oder einem eigenständigen Fenster.
    Kontexte auf oberster Ebene gehören zu einem [Benutzerkontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) und befinden sich in einem [Client-Fenster](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows).
- **Kindkontext**
  - : Diese Art von Kontext ist in einem Kontext auf oberster Ebene verschachtelt, wie z.B. ein {{HTMLElement("iframe")}}.
    Kindkontexte werden als Kinder ihres Elternkontexts durch [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

Zum Beispiel, wenn Sie ein Browserfenster öffnen und zu `https://example.com` navigieren, wird ein Kontext auf oberster Ebene mit seiner eigenen Kontext-ID erstellt.
Wenn diese Seite ein `<iframe>` enthält, das `https://other.com` lädt, wird ein Kindkontext erstellt, der unter dem Kontext auf oberster Ebene verschachtelt ist.
Das Öffnen eines neuen Tabs erstellt einen zweiten Kontext auf oberster Ebene mit seiner eigenen Kontext-ID.
Ein Aufruf von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) würde beide Kontexte auf oberster Ebene zurückgeben, wobei der erste einen Kindkontext hat.

## Befehle

- [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate)
- [`browsingContext.captureScreenshot`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/captureScreenshot)
- [`browsingContext.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close)
- [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create)
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)
- [`browsingContext.handleUserPrompt`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt)
- [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes)
- [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate)
- [`browsingContext.print`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/print)
- [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload)
- [`browsingContext.setViewport`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/setViewport)
- [`browsingContext.traverseHistory`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/traverseHistory)

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
