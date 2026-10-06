---
title: Modul `browsingContext`
short-title: browsingContext
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext
l10n:
  sourceCommit: 6cb739dac09c71c59f78190a43d13247835f878e
---

Das Modul **`browsingContext`** enthält Befehle und Ereignisse zur Verwaltung von Kontexten.

## Kontexte

Ein Kontext ist ein navigierbarer Bereich, der ein Dokument laden kann, beispielsweise ein Tab, ein iframe oder ein Popup.
Jeder Kontext hat eine eindeutige Zeichenkennung, die als Kontext-ID bezeichnet wird und dazu dient, in Befehlen und Ereignissen auf ihn zu verweisen.

Es gibt zwei Arten von Kontexten:

- **Kontext der obersten Ebene**
  - : Dieser Kontexttyp hat keinen übergeordneten Kontext und entspricht einem Browser-Tab oder einem eigenständigen Fenster.
    Kontexte der obersten Ebene gehören zu einem [Benutzerkontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) und befinden sich in einem [Client-Fenster](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows).
- **Untergeordneter Kontext**
  - : Dieser Kontexttyp ist in einen Kontext der obersten Ebene eingebettet, beispielsweise als {{HTMLElement("iframe")}}.
    [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) gibt untergeordnete Kontexte als Kinder ihres übergeordneten Kontexts zurück.

Wenn Sie beispielsweise ein Browserfenster öffnen und zu `https://example.com` navigieren, entsteht ein Kontext der obersten Ebene mit einer eigenen Kontext-ID.
Wenn diese Seite ein `<iframe>` enthält, das `https://other.com` lädt, entsteht ein untergeordneter Kontext innerhalb des Kontexts der obersten Ebene.
Durch das Öffnen eines neuen Tabs entsteht ein zweiter Kontext der obersten Ebene mit einer eigenen Kontext-ID.
Ein Aufruf von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) würde beide Kontexte der obersten Ebene zurückgeben, wobei der erste einen untergeordneten Kontext enthält.

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
- [`browsingContext.downloadEnd`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/downloadEnd)
- [`browsingContext.downloadWillBegin`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/downloadWillBegin)
- [`browsingContext.fragmentNavigated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated)
- [`browsingContext.historyUpdated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated)
- [`browsingContext.load`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/load)
- [`browsingContext.navigationCommitted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted)
- [`browsingContext.navigationFailed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed)
- [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted)
- [`browsingContext.userPromptClosed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptClosed)
- [`browsingContext.userPromptOpened`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptOpened)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
