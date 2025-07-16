---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ermöglicht Erweiterungen, zusätzliche Berechtigungen zur Laufzeit anzufordern, nachdem sie installiert wurden.

Erweiterungen benötigen Berechtigungen, um auf leistungsstärkere WebExtension-APIs zuzugreifen. Sie können Berechtigungen zur Installationszeit anfordern, indem sie die benötigten Berechtigungen im [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-manifest.json-Schlüssel angeben. Die Hauptvorteile der Anfrage von Berechtigungen zur Installationszeit sind:

- Der Benutzer wird nur einmal gefragt, was weniger störend für ihn ist und eine einfachere Entscheidung darstellt.
- Die Erweiterung kann sich auf den Zugriff auf die benötigten APIs verlassen, da die Berechtigungen, wenn bereits in Betrieb, gewährt wurden.

In den meisten großen Browsern können Benutzer sehen, ob ihre installierten Erweiterungen erweiterte Berechtigungen über den Erweiterungsmanager des Browsers anfordern.

Mit der permissions API kann eine Erweiterung zur Laufzeit zusätzliche Berechtigungen anfordern. Diese Berechtigungen müssen im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-manifest.json-Schlüssel aufgelistet sein. Beachten Sie, dass einige Berechtigungen in `optional_permissions` nicht zulässig sind. Die Hauptvorteile davon sind:

- Die Erweiterung kann mit einem kleineren Satz an Berechtigungen laufen, außer wenn sie diese tatsächlich benötigt.
- Die Erweiterung kann die Verweigerung von Berechtigungen auf eine schonende Weise handhaben, anstatt dem Benutzer zur Installationszeit eine globale "Alles-oder-nichts"-Entscheidung zu präsentieren. Sie können immer noch viel aus dieser Karten-Erweiterung herausholen, ohne ihr Zugriff auf Ihren Standort zu gewähren, zum Beispiel.
- Die Erweiterung benötigt möglicherweise [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), weiß aber zur Installationszeit nicht, welche Host-Berechtigungen erforderlich sind. Zum Beispiel kann die Liste der Hosts eine Benutzereinstellung sein. In diesem Szenario kann das Anfordern eines spezifischeren Bereichs von Hosts zur Laufzeit eine Alternative zum Anfordern von "\<all_urls>" zur Installationszeit sein.

Um die permissions API zu nutzen, entscheiden Sie, welche Berechtigungen Ihre Erweiterung zur Laufzeit anfordern kann, und listen Sie sie in [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) auf. Danach können Sie alle Berechtigungen anfordern, die in `optional_permissions` enthalten sind. Anfragen dürfen nur im Handler für eine Benutzeraktion gestellt werden (z.B. ein Klick-Handler).

Ab Firefox 84 können Benutzer optionale Berechtigungen installierter Erweiterungen über den Add-ons-Manager verwalten. Erweiterungen, die optionale Berechtigungen verwenden, sollten auf die API-Ereignisse [browser.permissions.onAdded](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onAdded) und [browser.permissions.onRemoved](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved) hören, um zu wissen, wann ein Benutzer diese Berechtigungen gewährt oder widerruft.

Für Ratschläge zur Gestaltung Ihrer Anfrage für Laufzeitberechtigungen, um die Wahrscheinlichkeit zu maximieren, dass Benutzer sie gewähren, siehe [Berechtigungen zur Laufzeit anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

## Typen

- {{WebExtAPIRef("permissions.Permissions")}}
  - : Repräsentiert einen Satz von Berechtigungen.

## Methoden

- {{WebExtAPIRef("permissions.contains()")}}
  - : Ermittelt einen bestimmten Satz von Berechtigungen einer Erweiterung.
- {{WebExtAPIRef("permissions.getAll()")}}
  - : Ruft alle Berechtigungen ab, die diese Erweiterung derzeit hat.
- {{WebExtAPIRef("permissions.remove()")}}
  - : Gibt einen Satz von Berechtigungen auf.
- {{WebExtAPIRef("permissions.request()")}}
  - : Fordert einen Satz von Berechtigungen an.

## Ereignishandler

- {{WebExtAPIRef("permissions.onAdded")}}
  - : Wird ausgelöst, wenn eine neue Berechtigung gewährt wird.
- {{WebExtAPIRef("permissions.onRemoved")}}
  - : Wird ausgelöst, wenn eine Berechtigung entfernt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `manifest.json` [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Eigenschaft
- `manifest.json` [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Eigenschaft

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API von Chromium.
