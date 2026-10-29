---
title: Modul `browsingContext`
short-title: browsingContext
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext
l10n:
  sourceCommit: a0ec5a931fb40d9307d096de83c1d4d10f0d6ea6
---

Das Modul **`browsingContext`** enthält Befehle und Ereignisse zur Verwaltung von Kontexten.

## Kontexte

Ein Kontext ist ein navigierbarer Bereich, der ein Dokument laden kann, beispielsweise ein Tab, ein iframe oder ein Popup.
Jeder Kontext hat eine eindeutige Zeichenfolgenkennung, die als Kontext-ID bezeichnet wird und über Befehle und Ereignisse hinweg als Referenz dient.

Es gibt zwei Arten von Kontexten:

- **Top-Level-Kontext**
  - : Dieser Kontexttyp hat keinen übergeordneten Kontext und entspricht einem Browser-Tab oder einem eigenständigen Fenster.
    Top-Level-Kontexte gehören zu einem [Benutzerkontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) und befinden sich in einem [Client-Fenster](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows).
- **Untergeordneter Kontext**
  - : Dieser Kontexttyp ist in einen Top-Level-Kontext eingebettet, beispielsweise als {{HTMLElement("iframe")}}.
    [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) gibt untergeordnete Kontexte als Kinder ihres übergeordneten Kontexts zurück.

Wenn Sie beispielsweise ein Browserfenster öffnen und zu `https://example.com` navigieren, wird ein Top-Level-Kontext mit einer eigenen Kontext-ID erstellt.
Enthält diese Seite ein `<iframe>`, das `https://other.com` lädt, wird ein untergeordneter Kontext erstellt, der in den Top-Level-Kontext eingebettet ist.
Wenn Sie einen neuen Tab öffnen, wird ein zweiter Top-Level-Kontext mit einer eigenen Kontext-ID erstellt.
Ein Aufruf von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) würde beide Top-Level-Kontexte zurückgeben, wobei der erste einen untergeordneten Kontext enthält.

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
- [`browsingContext.startScreencast`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast)
- [`browsingContext.stopScreencast`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/stopScreencast)
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
