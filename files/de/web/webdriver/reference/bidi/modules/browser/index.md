---
title: browser-Modul
short-title: browser
slug: Web/WebDriver/Reference/BiDi/Modules/browser
l10n:
  sourceCommit: c09036bf0ea2f0b6e322dfdeee64b26ab53e2797
---

Das **`browser`**-Modul enthält Befehle zur Verwaltung des Browsers, einschließlich Client-Fenstern, Benutzerkontexten und Download-Verhalten.

## Client-Fenster

Ein Client-Fenster ist ein Betriebssystem-Fenster des Browsers, das den Ansichtsbereich (den Bereich, in dem Webinhalte angezeigt werden) und die Benutzeroberflächenelemente des Browsers wie die Adressleiste und Symbolleisten umfasst.

Jedes Client-Fenster hat die folgenden Eigenschaften:

- Eine eindeutige Zeichenfolgenkennung (`clientWindow`).
- Einen Zustand (`state`), der angibt, ob das Fenster normal, maximiert, minimiert oder im Vollbildmodus ist.
- Einen aktiven Zustand (`active`), der angibt, ob das Fenster Tastatureingaben vom Betriebssystem empfangen kann.
- Eine Position, die als `x`- und `y`-Koordinaten in {{Glossary("CSS_pixel", "CSS-Pixeln")}} von den linken und oberen Bildschirmrändern ausgedrückt wird.
- Eine Größe, die als `width` und `height` in {{Glossary("CSS_pixel", "CSS-Pixeln")}} ausgedrückt wird.

Eine Liste von Client-Fenstern kann mit [`browser.getClientWindows`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getClientWindows) abgerufen werden, und deren Zustand kann mit [`browser.setClientWindowState`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setClientWindowState) geändert werden.

## Benutzerkontexte

Ein Benutzerkontext ist eine Sammlung von null oder mehr übergeordneten Kontexten (Tabs) im Browser. Tabs innerhalb desselben Benutzerkontexts teilen denselben Browser-Speicher (wie Cookies und Sitzungsdaten), während Tabs in unterschiedlichen Benutzerkontexten vollständig voneinander isoliert sind und keine Browser-Daten teilen. Ein Benutzerkontext ohne Tabs wird als leerer Benutzerkontext bezeichnet.

Jeder Benutzerkontext verfügt über eine eindeutige Zeichenfolgenkennung (Benutzerkontext-ID). Der Browser verfügt immer über einen Standard-Benutzerkontext mit der ID `"default"`, der nicht entfernt werden kann.

Mehrere Tabs aus unterschiedlichen Benutzerkontexten können dasselbe [Client-Fenster](#client-fenster) gemeinsam nutzen.

Benutzerkontexte können mit [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) erstellt und mit [`browser.removeUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/removeUserContext) entfernt werden.

## Befehle

{{ListSubPages}}

## Ereignisse

Das `browser`-Modul hat keine zugeordneten Ereignisse.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
