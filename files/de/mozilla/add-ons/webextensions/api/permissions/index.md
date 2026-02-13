---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions
l10n:
  sourceCommit: 04ce026af7b7b9216c29222d586c48905e6b33c3
---

Ermöglicht es Erweiterungen, zur Laufzeit nach zusätzlichen Berechtigungen zu fragen, nachdem sie installiert wurden.

Erweiterungen benötigen Berechtigungen, um auf leistungsstärkere WebExtension-APIs zugreifen zu können. Sie können zur Installationszeit Berechtigungen anfordern, indem sie diese im [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) manifest.json Schlüssel angeben. Die Hauptvorteile, um bei der Installation nach Berechtigungen zu fragen, sind:

- Die Erweiterung fragt den Benutzer nur einmal, was für ihn weniger störend ist und eine einfachere Entscheidung darstellt.
- Die Erweiterung kann sich auf den Zugang zu den benötigten APIs verlassen, da sie weiß, dass die Berechtigungen erteilt wurden.

In den meisten großen Browsern können Benutzer im Erweiterungsmanager des Browsers sehen, ob installierte Erweiterungen erweiterte Berechtigungen anfordern.

Durch die Verwendung der permissions API kann eine Erweiterung zur Laufzeit zusätzliche Berechtigungen anfordern. Die Erweiterung muss diese Berechtigungen auflisten in

- dem [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Schlüssel ihrer manifest.json Datei für Ursprünge und API-Berechtigungen.
- der [`gecko.data_collection_permissions.optional`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#optional) Eigenschaft des `browser_specific_settings` Schlüssels ihrer manifest.json Datei für Daten-Sammelberechtigungen.

Die Hauptvorteile, um zur Laufzeit nach Berechtigungen zu fragen, sind:

- Die Erweiterung kann mit einem kleineren Satz von Berechtigungen laufen, außer wenn sie diese benötigt.
- Die Erweiterung kann die Ablehnung einer Berechtigung elegant behandeln, anstatt dem Benutzer bei der Installation eine globale „Alles oder Nichts“-Entscheidung zu präsentieren. Zum Beispiel kann ein Benutzer viel aus dieser Karten-Erweiterung herausholen, ohne ihr Zugriff auf ihren Standort zu gewähren.
- Die Erweiterung benötigt möglicherweise [host permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), weiß jedoch zur Installationszeit nicht, welche Host-Berechtigungen sie benötigt. Zum Beispiel kann die Liste der Hosts eine Benutzereinstellung sein. In diesem Szenario kann es eine Alternative sein, zur Laufzeit nach einem spezifischeren Bereich von Hosts zu fragen, anstatt bei der Installation nach "\<all_urls>" zu fragen.

Beachten Sie, dass einige Berechtigungen nicht in `optional_permissions` erlaubt sind.

Um die permissions API zu verwenden, entscheiden Sie, welche Berechtigungen Ihre Erweiterung zur Laufzeit anfordern kann, und listen Sie sie in [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) und [`browser_specific_settings.gecko.data_collection_permissions.optional`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#optional) auf. Danach können Sie um alle Berechtigungen bitten, die in `optional_permissions` oder `browser_specific_settings.gecko.data_collection_permissions.optional` enthalten sind. Die Erweiterung kann diese Anfragen nur im Handler für eine Benutzeraktion machen (zum Beispiel in einem Klick-Handler).

Ab Firefox 84 können Benutzer die optionalen Berechtigungen installierter Erweiterungen über den Add-ons-Manager verwalten. Erweiterungen, die optionale Berechtigungen verwenden, sollten auf die [browser.permissions.onAdded](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onAdded) und [browser.permissions.onRemoved](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved) API-Ereignisse achten, um zu wissen, wann ein Benutzer diese Berechtigungen erteilt oder widerruft.

Für Ratschläge zur Gestaltung Ihrer Anfrage nach Laufzeitberechtigungen, um die Wahrscheinlichkeit zu maximieren, dass Benutzer diese gewähren, siehe [Request permissions at runtime](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

## Typen

- {{WebExtAPIRef("permissions.Permissions")}}
  - : Repräsentiert einen Satz von Berechtigungen.

## Methoden

- {{WebExtAPIRef("permissions.contains()")}}
  - : Prüft, ob die Erweiterung spezifische Berechtigungen hat.
- {{WebExtAPIRef("permissions.getAll()")}}
  - : Ruft alle derzeit der Erweiterung gewährten Berechtigungen ab.
- {{WebExtAPIRef("permissions.remove()")}}
  - : Gibt einen Satz von Berechtigungen auf.
- {{WebExtAPIRef("permissions.request()")}}
  - : Fragt nach einem Satz von Berechtigungen.

## Ereignis-Handler

- {{WebExtAPIRef("permissions.onAdded")}}
  - : Wird ausgelöst, wenn ein Benutzer neue Berechtigungen erteilt.
- {{WebExtAPIRef("permissions.onRemoved")}}
  - : Wird ausgelöst, wenn ein Benutzer eine Berechtigung widerruft.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `manifest.json` [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Eigenschaft
- `manifest.json` [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Eigenschaft

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
