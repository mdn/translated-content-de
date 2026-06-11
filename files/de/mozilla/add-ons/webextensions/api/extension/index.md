---
title: extension
slug: Mozilla/Add-ons/WebExtensions/API/extension
l10n:
  sourceCommit: c4bcbe7056da00277112f21b94966e0443c39805
---

Dienstprogramme im Zusammenhang mit Ihrer Erweiterung. Erhalten Sie URLs zu Ressourcenpaketen mit Ihrer Erweiterung. Erhalten Sie das [`Window`](/de/docs/Web/API/Window)-Objekt für die Seiten Ihrer Erweiterung. Erhalten Sie die Werte für verschiedene Einstellungen.

> [!NOTE]
> **Die Messaging-APIs in diesem Modul sind veraltet** zugunsten der entsprechenden APIs im [`runtime`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime)-Modul.

## Typen

- {{WebExtAPIRef("extension.ViewType")}}
  - : Der Typ der Erweiterungsansicht.

## Eigenschaften

- {{WebExtAPIRef("extension.lastError")}} {{deprecated_inline}}
  - : Setzt sich für die Lebensdauer eines Rückrufs, wenn eine asynchrone Erweiterungs-API zu einem Fehler geführt hat. Wenn kein Fehler aufgetreten ist, wird `lastError` {{jsxref("undefined")}} sein.
- {{WebExtAPIRef("extension.inIncognitoContext")}}
  - : `True` für Inhaltsskripte, die in Inkognito-Tabs ausgeführt werden, und für Erweiterungsseiten, die in einem Inkognito-Prozess ausgeführt werden. (Letzteres gilt nur für Erweiterungen, bei denen in der manifest.json-Datei `"incognito": "split"` gesetzt ist.)

## Funktionen

- {{WebExtAPIRef("extension.getBackgroundPage()")}}
  - : Gibt das [`Window`](/de/docs/Web/API/Window)-Objekt für die Hintergrundseite zurück, die innerhalb der aktuellen Erweiterung läuft. Gibt [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück, wenn die Erweiterung keine Hintergrundseite hat.
- {{WebExtAPIRef("extension.getExtensionTabs()")}} {{deprecated_inline}}
  - : Gibt ein Array der JavaScript-[Window](/de/docs/Web/API/Window)-Objekte für jede der Tabs zurück, die innerhalb der aktuellen Erweiterung ausgeführt werden.
- {{WebExtAPIRef("extension.getURL()")}} {{deprecated_inline}}
  - : Wandelt einen relativen Pfad innerhalb eines Erweiterungsinstallationsverzeichnisses in eine vollqualifizierte URL um.
- {{WebExtAPIRef("extension.getViews()")}}
  - : Gibt ein Array der [`Window`](/de/docs/Web/API/Window)-Objekte für jede der Seiten zurück, die innerhalb der aktuellen Erweiterung ausgeführt werden.
- {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}}
  - : Ruft den Zustand des Zugriffs der Erweiterung auf Tabs ab, die im Modus "Privates Surfen" geöffnet wurden (wie durch die vom Benutzer kontrollierte '_Run in Private Windows_' Option in den Berechtigungen der Erweiterung bestimmt).
- {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}}
  - : Ruft den Zustand des Zugriffs der Erweiterung auf das `file://`-Schema ab (wie durch eine benutzerkontrollierte Option in den Berechtigungen der Erweiterung bestimmt: '_Allow access to File URLs_' in Chrome und '_Access local files on your computer_' in Firefox).
- {{WebExtAPIRef("extension.sendRequest()")}} {{deprecated_inline}}
  - : Sendet eine einzelne Anfrage an andere Listener innerhalb der Erweiterung.
- {{WebExtAPIRef("extension.setUpdateUrlData()")}}
  - : Setzt den Wert des ap-CGI-Parameters, der in der Update-URL der Erweiterung verwendet wird. Dieser Wert wird für Erweiterungen ignoriert, die im Store des Browserherstellers gehostet werden.

## Ereignisse

- {{WebExtAPIRef("extension.onRequest")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn eine Anfrage von einem Erweiterungsprozess oder einem Inhaltsskript gesendet wird.
- {{WebExtAPIRef("extension.onRequestExternal")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn eine Anfrage von einer anderen Erweiterung gesendet wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension)-API von Chromium. Diese Dokumentation stammt aus [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.
