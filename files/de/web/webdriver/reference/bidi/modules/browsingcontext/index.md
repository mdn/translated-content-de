---
title: "`browsingContext` Modul"
short-title: browsingContext
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext
l10n:
  sourceCommit: 1db2c61210860e17e452e21122280b76a7dcffb6
---

Das **`browsingContext`** Modul enthält Befehle und Ereignisse zur Verwaltung von Kontexten.

## Kontexte

Ein Kontext ist ein Navigationsziel, das ein Dokument laden kann, wie z.B. ein Tab, ein `iframe`, oder ein Popup.
Jeder Kontext hat einen eindeutigen Zeichenfolgen-Identifier, der als Kontext-ID bekannt ist und über Befehle und Ereignisse referenziert wird.

Es gibt zwei Arten von Kontexten:

- **Top-Level-Kontext**
  - : Diese Art von Kontext hat keinen Elternkontext und entspricht einem Browser-Tab oder einem eigenständigen Fenster.
    Top-Level-Kontexte gehören zu einem [Benutzerkontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) und existieren innerhalb eines [Klientenfensters](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows).
- **Kindkontext**
  - : Diese Art von Kontext ist innerhalb eines Top-Level-Kontexts verschachtelt, wie z.B. ein {{HTMLElement("iframe")}}.
    Kindkontexte werden als Kinder ihres Elternkontexts von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

Zum Beispiel, wenn Sie ein Browserfenster öffnen und zu `https://example.com` navigieren, wird ein Top-Level-Kontext mit seiner eigenen Kontext-ID erstellt.
Wenn diese Seite ein `<iframe>` enthält, das `https://other.com` lädt, wird ein Kindkontext unter dem Top-Level-Kontext erstellt.
Das Öffnen eines neuen Tabs erzeugt einen zweiten Top-Level-Kontext mit seiner eigenen Kontext-ID.
Ein Aufruf von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) würde beide Top-Level-Kontexte zurückgeben, wobei der erste einen Kindkontext hat.

## Befehle

- [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate)
- [`browsingContext.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close)
- [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
