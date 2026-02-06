---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions
l10n:
  sourceCommit: aa2535b8d83223b53fe57bb0c3daaf1c6851d781
---

Ermöglicht Erweiterungen, zusätzliche Berechtigungen zur Laufzeit anzufordern, nachdem sie installiert wurden.

Erweiterungen benötigen Berechtigungen, um auf leistungsstärkere WebExtension-APIs zuzugreifen. Sie können beim Installieren Berechtigungen anfordern, indem sie diese in das [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) manifest.json-Schlüssel einfügen. Die Hauptvorteile, Berechtigungen beim Installieren anzufordern, sind:

- Die Erweiterung fragt den Benutzer nur einmal, was weniger störend und eine einfachere Entscheidung für den Benutzer ist.
- Die Erweiterung kann sich auf den Zugriff auf die benötigten APIs verlassen, da sie weiß, dass die Berechtigungen erteilt sind.

In den meisten großen Browsern können Benutzer durch den Erweiterungs-Manager des Browsers sehen, ob installierte Erweiterungen erweiterte Berechtigungen anfordern.

Mit der Permissions-API kann eine Erweiterung zur Laufzeit zusätzliche Berechtigungen anfordern. Die Erweiterung muss diese Berechtigungen in

- dem [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Schlüssel ihrer manifest.json-Datei für Ursprünge und API-Berechtigungen auflisten.
- der [`gecko.data_collection_permissions.optional`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#optional)-Eigenschaft des `browser_specific_settings`-Schlüssels ihrer manifest.json-Datei für Datensammlungsberechtigungen auflisten.

Die Hauptvorteile, Berechtigungen zur Laufzeit anzufordern, sind:

- Die Erweiterung kann mit einem kleineren Satz von Berechtigungen laufen, es sei denn, sie benötigt sie.
- Die Erweiterung kann eine Ablehnung von Berechtigungen elegant handhaben, anstatt den Benutzer mit einer globalen „Alles oder Nichts“-Entscheidung beim Installieren zu konfrontieren. Zum Beispiel kann ein Benutzer viel von einer Karten-Erweiterung profitieren, ohne ihr Zugriff auf seinen Standort zu geben.
- Die Erweiterung kann [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) benötigen, weiß jedoch beim Installieren nicht, welche Host-Berechtigungen sie benötigt. Zum Beispiel könnte die Liste der Hosts eine Benutzereinstellung sein. In diesem Szenario kann das Anfordern eines spezifischeren Bereichs von Hosts zur Laufzeit eine Alternative zum Anfordern von "\<all_urls>" beim Installieren sein.

Beachten Sie, dass einige Berechtigungen in `optional_permissions` nicht erlaubt sind.

Um die Permissions-API zu verwenden, entscheiden Sie, welche Berechtigungen Ihre Erweiterung zur Laufzeit anfordern kann, und listen Sie sie in [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) und [`browser_specific_settings.gecko.data_collection_permissions.optional`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#optional) auf. Danach können Sie alle in `optional_permissions` oder `browser_specific_settings.gecko.data_collection_permissions.optional` enthaltenen Berechtigungen anfordern. Die Erweiterung kann diese Anforderungen nur im Handler für eine Benutzeraktion stellen (zum Beispiel ein Klick-Handler).

Ab Firefox 84 können Benutzer optionale Berechtigungen installierter Erweiterungen im Add-ons-Manager verwalten. Erweiterungen, die optionale Berechtigungen verwenden, sollten API-Ereignisse wie [browser.permissions.onAdded](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onAdded) und [browser.permissions.onRemoved](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved) überwachen, um zu wissen, wann ein Benutzer diese Berechtigungen erteilt oder widerruft.

Für Ratschläge zur Gestaltung Ihrer Anfrage nach Laufzeitberechtigungen, um die Wahrscheinlichkeit zu maximieren, dass Benutzer diese erteilen, siehe [Anfrage von Berechtigungen zur Laufzeit](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

## Typen

- {{WebExtAPIRef("permissions.Permissions")}}
  - : Repräsentiert eine Menge von Berechtigungen.

## Methoden

- {{WebExtAPIRef("permissions.contains()")}}
  - : Überprüft, ob die Erweiterung bestimmte Berechtigungen hat.
- {{WebExtAPIRef("permissions.getAll()")}}
  - : Ruft alle der Erweiterung derzeit gewährten Berechtigungen ab.
- {{WebExtAPIRef("permissions.remove()")}}
  - : Gibt einen Satz von Berechtigungen auf.
- {{WebExtAPIRef("permissions.request()")}}
  - : Fragt einen Satz von Berechtigungen an.

## Ereignishandler

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
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API von Chromium.
