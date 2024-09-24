---
title: berechtigungen
slug: Mozilla/Add-ons/WebExtensions/API/permissions
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht Erweiterungen, zusätzliche Berechtigungen zur Laufzeit anzufordern, nachdem sie installiert wurden.

Erweiterungen benötigen Berechtigungen, um auf leistungsstärkere WebExtension APIs zuzugreifen. Sie können bei der Installation nach Berechtigungen fragen, indem sie die benötigten Berechtigungen im `permissions`-Key der [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) manifest.json angeben. Die Hauptvorteile der Abfrage von Berechtigungen zur Installationszeit sind:

- Der Benutzer wird nur einmal gefragt, was für ihn weniger störend und eine einfachere Entscheidung ist.
- Die Erweiterung kann sich darauf verlassen, dass der Zugriff auf die benötigten APIs gewährt wurde, da die Berechtigungen, wenn bereits laufend, bereits gewährt wurden.

In den meisten großen Browsern können Benutzer über den Erweiterungsmanager des Browsers sehen, ob ihre installierten Erweiterungen erweiterte Berechtigungen anfordern.

Mit der permissions-API kann eine Erweiterung zur Laufzeit nach zusätzlichen Berechtigungen fragen. Diese Berechtigungen müssen im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest.json-Key aufgelistet sein. Beachten Sie, dass einige Berechtigungen in `optional_permissions` nicht erlaubt sind. Die Hauptvorteile sind:

- Die Erweiterung kann mit einem kleineren Satz von Berechtigungen betrieben werden, außer wenn sie diese tatsächlich benötigt.
- Die Erweiterung kann die Ablehnung von Berechtigungen auf elegante Weise handhaben, anstatt dem Benutzer bei der Installation eine globale „Alles-oder-nichts“-Entscheidung zu präsentieren. Sie können beispielsweise viel von dieser Karten-Erweiterung haben, ohne ihr Zugang zu Ihrem Standort zu gewähren.
- Die Erweiterung benötigt möglicherweise [host permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), weiß aber bei der Installation noch nicht, welche Host-Berechtigungen benötigt werden. Beispielsweise kann die Liste der Hosts eine Benutzereinstellung sein. In diesem Szenario kann das Anfordern eines spezifischeren Host-Bereichs zur Laufzeit eine Alternative zum Anfordern von "\<all_urls>" bei der Installation sein.

Um die permissions-API zu verwenden, entscheiden Sie, welche Berechtigungen Ihre Erweiterung zur Laufzeit anfordern kann, und listen Sie diese in [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) auf. Danach können Sie alle Berechtigungen anfordern, die in `optional_permissions` enthalten sind. Anfragen dürfen nur im Handler für eine Benutzeraktion (z.B. ein Klick-Handler) gestellt werden.

Ab Firefox 84 können Benutzer optionale Berechtigungen installierter Erweiterungen über den Add-ons-Manager verwalten. Erweiterungen, die optionale Berechtigungen verwenden, sollten auf die API-Ereignisse [browser.permissions.onAdded](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onAdded) und [browser.permissions.onRemoved](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved) achten, um zu wissen, wann ein Benutzer diese Berechtigungen gewährt oder entzieht.

Für Ratschläge zum Entwerfen Ihrer Anfrage für Laufzeitberechtigungen, um die Wahrscheinlichkeit zu maximieren, dass Benutzer sie gewähren, siehe [Request permissions at runtime](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

## Typen

- {{WebExtAPIRef("permissions.Permissions")}}
  - : Repräsentiert einen Satz von Berechtigungen.

## Methoden

- {{WebExtAPIRef("permissions.contains()")}}
  - : Ermitteln Sie den gegebenen Satz von Berechtigungen einer Erweiterung.
- {{WebExtAPIRef("permissions.getAll()")}}
  - : Holen Sie sich alle Berechtigungen, die diese Erweiterung derzeit hat.
- {{WebExtAPIRef("permissions.remove()")}}
  - : Geben Sie einen Satz von Berechtigungen auf.
- {{WebExtAPIRef("permissions.request()")}}
  - : Fordern Sie einen Satz von Berechtigungen an.

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
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API von Chromium.
