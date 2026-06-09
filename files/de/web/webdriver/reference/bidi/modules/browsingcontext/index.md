---
title: "`browsingContext` Modul"
short-title: browsingContext
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext
l10n:
  sourceCommit: a3d6e24e23dccd757487d9ed97b0eb241f107d96
---

Das **`browsingContext`** Modul enthält Befehle und Ereignisse zur Verwaltung von Kontexten.

## Kontexte

Ein Kontext ist ein navigierbares Element, das ein Dokument laden kann, wie z.B. ein Tab, ein `iframe` oder ein Popup.
Jeder Kontext hat einen eindeutigen Zeichenfolgenbezeichner, der als Kontext-ID bezeichnet wird und zur Referenzierung in Befehlen und Ereignissen verwendet wird.

Es gibt zwei Arten von Kontexten:

- **Oberster Kontext**
  - : Dieser Kontext hat keinen Elternkontext und entspricht einem Browser-Tab oder einem eigenständigen Fenster.
    Oberste Kontexte gehören zu einem [Benutzerkontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) und befinden sich in einem [Clientfenster](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows).
- **Kindkontext**
  - : Dieser Kontext ist in einem obersten Kontext verschachtelt, wie z.B. ein {{HTMLElement("iframe")}}.
    Kindkontexte werden von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) als Kinder ihres Elternkontexts zurückgegeben.

Zum Beispiel: Wenn Sie ein Browserfenster öffnen und zu `https://example.com` navigieren, wird ein oberster Kontext mit seiner eigenen Kontext-ID erstellt.
Wenn diese Seite ein `<iframe>` enthält, das `https://other.com` lädt, wird ein Kindkontext unter dem obersten Kontext erstellt.
Das Öffnen eines neuen Tabs erstellt einen zweiten obersten Kontext mit seiner eigenen Kontext-ID.
Der Aufruf von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) würde beide obersten Kontexte zurückgeben, wobei der erste einen Kindkontext hat.

## Befehle

- [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate)
- [`browsingContext.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close)
- [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create)
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)

## Ereignisse

- [`browsingContext.contextCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated)
- [`browsingContext.contextDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
