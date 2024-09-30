---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht es Erweiterungen, zur Laufzeit zusätzliche Berechtigungen anzufordern, nachdem sie installiert wurden.

Erweiterungen benötigen Berechtigungen, um auf leistungsstärkere WebExtension-APIs zugreifen zu können. Sie können bei der Installation nach Berechtigungen fragen, indem sie die benötigten Berechtigungen in den [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) manifest.json-Schlüssel aufnehmen. Die Hauptvorteile des Anfragens von Berechtigungen zur Installationszeit sind:

- Der Benutzer wird nur einmal gefragt, was für ihn weniger störend und eine einfachere Entscheidung ist.
- Die Erweiterung kann sich auf den Zugriff auf die benötigten APIs verlassen, da, falls sie bereits läuft, die Berechtigungen erteilt wurden.

In den meisten großen Browsern können Benutzer sehen, ob ihre installierten Erweiterungen erweiterte Berechtigungen über den Erweiterungsmanager des Browsers anfordern.

Mit der permissions API kann eine Erweiterung zur Laufzeit nach zusätzlichen Berechtigungen fragen. Diese Berechtigungen müssen im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest.json-Schlüssel aufgelistet werden. Beachten Sie, dass einige Berechtigungen in `optional_permissions` nicht erlaubt sind. Die Hauptvorteile dessen sind:

- Die Erweiterung kann mit einem kleineren Satz von Berechtigungen laufen, es sei denn, sie benötigt sie tatsächlich.
- Die Erweiterung kann die Ablehnung von Berechtigungen auf eine anmutige Weise behandeln, anstatt dem Benutzer eine globale "Alles oder Nichts"-Entscheidung zur Installationszeit zu präsentieren. Sie können immer noch viel von dieser Karten-Erweiterung profitieren, ohne ihr Zugriff auf Ihren Standort zu geben, zum Beispiel.
- Die Erweiterung benötigt möglicherweise [Hostberechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), weiß aber zur Installationszeit nicht, welche Hostberechtigungen sie benötigt. Beispielsweise könnte die Liste der Hosts eine Benutzereinstellung sein. In diesem Szenario kann das Anfordern eines spezifischeren Bereichs von Hosts zur Laufzeit eine Alternative dazu sein, zur Installationszeit nach "`<all_urls>`" zu fragen.

Um die permissions API zu verwenden, entscheiden Sie, welche Berechtigungen Ihre Erweiterung zur Laufzeit anfordern kann, und listen Sie sie in [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) auf. Danach können Sie alle Berechtigungen anfordern, die in `optional_permissions` enthalten sind. Anfragen dürfen nur im Handler für eine Benutzeraktion (zum Beispiel ein Klick-Handler) gestellt werden.

Ab Firefox 84 werden Benutzer in der Lage sein, optionale Berechtigungen installierter Erweiterungen im Add-ons Manager zu verwalten. Erweiterungen, die optionale Berechtigungen verwenden, sollten auf [browser.permissions.onAdded](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onAdded) und [browser.permissions.onRemoved](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved) API-Ereignisse lauschen, um zu wissen, wann ein Benutzer diese Berechtigungen erteilt oder widerruft.

Für Ratschläge zur Gestaltung Ihrer Anfrage für Laufzeitberechtigungen, um die Wahrscheinlichkeit zu maximieren, dass Benutzer sie erteilen, siehe [Anfragen von Berechtigungen zur Laufzeit](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

## Typen

- {{WebExtAPIRef("permissions.Permissions")}}
  - : Repräsentiert einen Satz von Berechtigungen.

## Methoden

- {{WebExtAPIRef("permissions.contains()")}}
  - : Ermitteln Sie den gegebenen Satz von Berechtigungen einer Erweiterung.
- {{WebExtAPIRef("permissions.getAll()")}}
  - : Erhalten Sie alle Berechtigungen, die diese Erweiterung derzeit hat.
- {{WebExtAPIRef("permissions.remove()")}}
  - : Geben Sie einen Satz von Berechtigungen auf.
- {{WebExtAPIRef("permissions.request()")}}
  - : Fragen Sie nach einem Satz von Berechtigungen.

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
> Diese API basiert auf der Chromium [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
