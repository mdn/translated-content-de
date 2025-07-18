---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ermöglicht Erweiterungen, zur Laufzeit nach zusätzlichen Berechtigungen zu fragen, nachdem sie installiert wurden.

Erweiterungen benötigen Berechtigungen, um auf leistungsstärkere WebExtension-APIs zuzugreifen. Sie können bei der Installation nach Berechtigungen fragen, indem sie die benötigten Berechtigungen in den [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-Schlüssel von manifest.json aufnehmen. Die Hauptvorteile, bei der Installation um Berechtigungen zu bitten, sind:

- Der Benutzer wird nur einmal gefragt, was weniger störend für ihn ist und eine einfachere Entscheidung darstellt.
- Die Erweiterung kann sich auf den Zugriff auf die benötigten APIs verlassen, da die Berechtigungen, wenn sie bereits aktiv sind, gewährt wurden.

In den meisten gängigen Browsern können Benutzer über den Erweiterungsmanager des Browsers sehen, ob ihre installierten Erweiterungen erweiterte Berechtigungen anfordern.

Mit der permissions API kann eine Erweiterung zur Laufzeit um zusätzliche Berechtigungen bitten. Diese Berechtigungen müssen im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Schlüssel von manifest.json aufgeführt werden. Beachten Sie, dass einige Berechtigungen in `optional_permissions` nicht zulässig sind. Die Hauptvorteile sind:

- Die Erweiterung kann mit einem kleineren Satz an Berechtigungen laufen, außer wenn sie diese tatsächlich benötigt.
- Die Erweiterung kann eine Ablehnung der Berechtigung auf eine elegante Weise behandeln, anstatt dem Benutzer bei der Installation eine globale „Alles oder Nichts“-Entscheidung zu präsentieren. Sie können trotzdem viel aus der Karten-Erweiterung herausholen, ohne ihr Zugriff auf Ihren Standort zu gewähren, zum Beispiel.
- Die Erweiterung könnte [host permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) benötigen, aber zum Installationszeitpunkt nicht wissen, welche Hostberechtigungen benötigt werden. Zum Beispiel kann die Liste der Hosts eine Benutzereinstellung sein. In diesem Szenario kann das Anfordern eines spezifischeren Bereichs von Hosts zur Laufzeit eine Alternative zum Anfordern von "\<all_urls>" während der Installation sein.

Um die permissions API zu verwenden, entscheiden Sie, welche Berechtigungen Ihre Erweiterung zur Laufzeit anfordern kann, und listen Sie sie in [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) auf. Danach können Sie alle Berechtigungen anfordern, die in `optional_permissions` enthalten sind. Anfragen dürfen nur im Handler für eine Benutzeraktion gestellt werden (zum Beispiel ein Klick-Handler).

Ab Firefox 84 können Benutzer optionale Berechtigungen installierter Erweiterungen über den Add-ons-Manager verwalten. Erweiterungen, die optionale Berechtigungen verwenden, sollten auf die API-Ereignisse [browser.permissions.onAdded](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onAdded) und [browser.permissions.onRemoved](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved) hören, um zu erfahren, wann ein Benutzer diese Berechtigungen gewährt oder widerruft.

Für Ratschläge zur Gestaltung Ihrer Anforderung für Laufzeitberechtigungen, um die Wahrscheinlichkeit zu maximieren, dass Benutzer ihnen zustimmen, siehe [Request permissions at runtime](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

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
  - : Fragt nach einem Satz von Berechtigungen.

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
