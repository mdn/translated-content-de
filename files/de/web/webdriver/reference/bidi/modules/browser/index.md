---
title: "`browser` Modul"
short-title: browser
slug: Web/WebDriver/Reference/BiDi/Modules/browser
l10n:
  sourceCommit: 1db2c61210860e17e452e21122280b76a7dcffb6
---

Das **`browser`** Modul enthält Befehle zur Verwaltung des Browsers, einschließlich Clientfenster, Benutzerkontexte und Download-Verhalten.

## Clientfenster

Ein Clientfenster ist ein Betriebssystemebenen-Browserfenster, das den Viewport (den Bereich, in dem Webinhalte angezeigt werden) und Browser-UI-Elemente wie die Adressleiste und Symbolleisten umfasst.

Jedes Clientfenster hat die folgenden Eigenschaften:

- Eine eindeutige Zeichenkettenkennung (`clientWindow`).
- Einen Zustand (`state`), der angibt, ob das Fenster normal, maximiert, minimiert oder im Vollbildmodus ist.
- Einen aktiven Zustand (`active`), der angibt, ob das Fenster Tastatureingaben vom Betriebssystem empfangen kann.
- Eine Position, ausgedrückt als `x`- und `y`-Koordinaten in {{Glossary("CSS_pixel", "CSS-Pixeln")}} von den linken und oberen Rändern des Bildschirms.
- Eine Größe, ausgedrückt als `width` und `height` in {{Glossary("CSS_pixel", "CSS-Pixeln")}}.

Eine Liste von Clientfenstern kann mit [`browser.getClientWindows`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getClientWindows) erhalten werden, und ihr Zustand kann mit [`browser.setClientWindowState`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setClientWindowState) geändert werden.

## Benutzerkontexte

Ein Benutzerkontext ist eine Sammlung von null oder mehr Top-Level-Kontexten (Tabs) innerhalb des Browsers. Tabs innerhalb desselben Benutzerkontexts teilen den gleichen Browserspeicher (wie Cookies und Sitzungsdaten), während Tabs in verschiedenen Benutzerkontexten vollständig voneinander isoliert sind und keine Browserdaten teilen. Ein Benutzerkontext ohne Tabs wird leerer Benutzerkontext genannt.

Jeder Benutzerkontext hat eine eindeutige Zeichenkettenkennung (Benutzerkontext-ID). Der Browser hat immer einen Standardbenutzerkontext mit der ID `"default"`, der nicht entfernt werden kann.

Mehrere Tabs aus verschiedenen Benutzerkontexten können dasselbe [Clientfenster](#clientfenster) teilen.

Zum Beispiel lebt ein regulärer Browser-Tab im `"default"` Benutzerkontext.
Ein in einem separaten Container geöffneter Tab befindet sich in einem anderen Benutzerkontext.
Beide Tabs können im selben Clientfenster erscheinen, aber ihre Cookies und Sitzungsdaten sind vollständig voneinander isoliert.

Benutzerkontexte können mit [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) erstellt und mit [`browser.removeUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/removeUserContext) entfernt werden.

## Befehle

- [`browser.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/close)
- [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext)
- [`browser.getClientWindows`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getClientWindows)
- [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts)
- [`browser.removeUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/removeUserContext)
- [`browser.setClientWindowState`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setClientWindowState)
- [`browser.setDownloadBehavior`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setDownloadBehavior)

## Ereignisse

Das `browser` Modul hat keine zugehörigen Ereignisse.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
