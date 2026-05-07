---
title: "`browser` Modul"
short-title: browser
slug: Web/WebDriver/Reference/BiDi/Modules/browser
l10n:
  sourceCommit: 8626312a42264212095783a26ec0fb1f8d80487b
---

Das **`browser`** Modul enthält Befehle zur Verwaltung des Browsers, einschließlich Client-Fenster, Benutzerkontexte und Download-Verhalten.

## Client-Fenster

Ein Client-Fenster ist ein Betriebssystem-basiertes Browserfenster, das den Viewport (den Bereich, in dem Webinhalte angezeigt werden) und UI-Elemente des Browsers wie die Adressleiste und Symbolleisten umfasst.

Jedes Client-Fenster hat die folgenden Eigenschaften:

- Einen eindeutigen Zeichenfolgen-Identifikator (`clientWindow`).
- Einen Zustand (`state`), der angibt, ob das Fenster normal, maximiert, minimiert oder im Vollbildmodus ist.
- Einen aktiven Zustand (`active`), der angibt, ob das Fenster Tastatureingaben vom Betriebssystem empfangen kann.
- Eine Position, ausgedrückt in `x` und `y` Koordinaten in {{Glossary("CSS_pixel", "CSS-Pixel")}} von den linken und oberen Rändern des Bildschirms.
- Eine Größe, ausgedrückt in `width` und `height` in {{Glossary("CSS_pixel", "CSS-Pixel")}}.

Eine Liste der Client-Fenster kann über [`browser.getClientWindows`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getClientWindows) abgerufen und deren Zustand über [`browser.setClientWindowState`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setClientWindowState) geändert werden.

## Benutzerkontexte

Ein Benutzerkontext ist eine Sammlung von null oder mehr Top-Level-Kontexten (Tabs) im Browser. Tabs im gleichen Benutzerkontext teilen denselben Browser-Speicher (wie Cookies und Sitzungsdaten), während Tabs in verschiedenen Benutzerkontexten vollständig voneinander isoliert sind und keine Browserdaten teilen. Ein Benutzerkontext ohne Tabs wird als leerer Benutzerkontext bezeichnet.

Jeder Benutzerkontext hat einen eindeutigen Zeichenfolgen-Identifikator (Benutzerkontext-ID). Der Browser hat immer einen Standard-Benutzerkontext mit der ID `"default"`, der nicht entfernt werden kann.

Mehrere Tabs aus verschiedenen Benutzerkontexten können dasselbe [Client-Fenster](#client_fenster) teilen.

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
