---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht Erweiterungen, zusätzliche Berechtigungen zur Laufzeit anzufordern, nachdem sie installiert wurden.

Erweiterungen benötigen Berechtigungen, um auf leistungsstärkere WebExtension-APIs zuzugreifen. Sie können zur Installationszeit um Berechtigungen bitten, indem sie die benötigten Berechtigungen im Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in der manifest.json angeben. Die Hauptvorteile, Berechtigungen zur Installationszeit anzufordern, sind:

- Der Nutzer wird nur einmal gefragt, was weniger störend für ihn ist und eine einfachere Entscheidung ermöglicht.
- Die Erweiterung kann auf den Zugriff auf die benötigten APIs vertrauen, da, wenn sie bereits läuft, die Berechtigungen bereits erteilt wurden.

In den meisten großen Browsern können Benutzer im Erweiterungsmanager des Browsers sehen, ob ihre installierten Erweiterungen erweiterte Berechtigungen anfordern.

Mit der permissions API kann eine Erweiterung zur Laufzeit um zusätzliche Berechtigungen bitten. Diese Berechtigungen müssen im Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der manifest.json aufgeführt sein. Beachten Sie, dass einige Berechtigungen in `optional_permissions` nicht erlaubt sind. Die Hauptvorteile davon sind:

- Die Erweiterung kann mit einem kleineren Satz von Berechtigungen arbeiten, außer wenn sie diese tatsächlich benötigt.
- Die Erweiterung kann das Ablehnen von Berechtigungen auf eine anmutige Weise behandeln, anstatt dem Nutzer zur Installationszeit eine globale „Ganz oder gar nicht“-Entscheidung zu präsentieren. Zum Beispiel kann die Erweiterung vieles leisten, ohne Zugriff auf Ihren Standort zu geben.
- Die Erweiterung könnte [Hostberechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) benötigen, weiß aber zur Installationszeit nicht, welche Hostberechtigungen benötigt werden. Zum Beispiel kann die Liste der Hosts eine Benutzereinstellung sein. In diesem Szenario kann es eine Alternative sein, zur Laufzeit um einen spezifischeren Bereich von Hosts zu bitten, anstatt zur Installationszeit um "\<all_urls>" zu bitten.

Um die permissions API zu nutzen, entscheiden Sie, welche Berechtigungen Ihre Erweiterung zur Laufzeit anfordern kann, und listen Sie diese in [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) auf. Danach können Sie jede Berechtigung anfordern, die in `optional_permissions` enthalten war. Anfragen dürfen nur im Handler für eine Benutzeraktion (zum Beispiel ein Klick-Handler) gestellt werden.

Ab Firefox 84 können Benutzer optionale Berechtigungen installierter Erweiterungen vom Add-ons Manager aus verwalten. Erweiterungen, die optionale Berechtigungen nutzen, sollten auf die API-Ereignisse [browser.permissions.onAdded](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onAdded) und [browser.permissions.onRemoved](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved) hören, um zu wissen, wann ein Nutzer diese Berechtigungen erteilt oder widerruft.

Für Ratschläge zur Gestaltung Ihrer Anfrage für Laufzeitberechtigungen, um die Wahrscheinlichkeit zu maximieren, dass Benutzer sie erteilen, siehe [Berechtigungen zur Laufzeit anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

## Typen

- {{WebExtAPIRef("permissions.Permissions")}}
  - : Repräsentiert einen Satz Berechtigungen.

## Methoden

- {{WebExtAPIRef("permissions.contains()")}}
  - : Ermittelt den gegebenen Satz von Berechtigungen einer Erweiterung.
- {{WebExtAPIRef("permissions.getAll()")}}
  - : Ruft alle Berechtigungen ab, die diese Erweiterung aktuell hat.
- {{WebExtAPIRef("permissions.remove()")}}
  - : Gibt einen Satz von Berechtigungen auf.
- {{WebExtAPIRef("permissions.request()")}}
  - : Fragt nach einem Satz von Berechtigungen.

## Ereignis-Handler

- {{WebExtAPIRef("permissions.onAdded")}}
  - : Wird ausgelöst, wenn eine neue Berechtigung erteilt wird.
- {{WebExtAPIRef("permissions.onRemoved")}}
  - : Wird ausgelöst, wenn eine Berechtigung entfernt wird.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `manifest.json` [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Eigenschaft
- `manifest.json` [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Eigenschaft

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
