---
title: notifications.NotificationOptions
slug: Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions
l10n:
  sourceCommit: 3f75d5aa47d734848e21f4f48eda9780e4b8eaa5
---

{{AddonSidebar}}

Dieser Typ enthält alle Daten, die benötigt werden, um:

- eine Benachrichtigung mit {{WebExtAPIRef("notifications.create()")}} zu erstellen,
- eine bestehende Benachrichtigung mit {{WebExtAPIRef("notifications.update()")}} zu aktualisieren.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die unten aufgeführten Eigenschaften.

Die ersten drei Eigenschaften - `type`, `title`, `message` - sind in {{WebExtAPIRef("notifications.create()")}} erforderlich, aber optional in {{WebExtAPIRef("notifications.update()")}}. Firefox unterstützt derzeit nur die Eigenschaften `type`, `title`, `message` und `iconUrl`. Der einzige unterstützte Wert für `type` ist `'basic'`.

- `type`
  - : {{WebExtAPIRef("notifications.TemplateType")}}. Der Typ der Benachrichtigung, die Sie erstellen möchten. Abhängig von Ihrer Wahl sind bestimmte andere Eigenschaften entweder erforderlich oder nicht zulässig.
- `message`
  - : `string`. Der Hauptinhalt der Benachrichtigung.
- `title`
  - : `string`. Der Titel der Benachrichtigung.
- `iconUrl` {{optional_inline}}
  - : `string`. Eine URL, die auf ein Symbol verweist, das in der Benachrichtigung angezeigt werden soll. Die URL kann eine Daten-URL, eine Blob-URL, eine http- oder https-URL oder die relative URL einer Datei innerhalb der Erweiterung sein. Beim Verwenden eines SVG-Bildes stellen Sie sicher, dass das Bild Breiten- und Höhenattribute enthält, zum Beispiel `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.
- `contextMessage` {{optional_inline}}
  - : `string`. Zusätzlich anzuzeigender Inhalt.
- `priority` {{optional_inline}}
  - : `number`. Die Priorität der Benachrichtigung: kann 0, 1 oder 2 sein. Standardmäßig 0, wenn weggelassen.
- `eventTime` {{optional_inline}}
  - : `number`. Ein Zeitstempel für die Benachrichtigung in [Millisekunden seit dem Epoch](https://en.wikipedia.org/wiki/Unix_time).
- `buttons` {{optional_inline}}

  - : `array` von `button`. Ein Array von bis zu 2 Schaltflächen, die in die Benachrichtigung aufgenommen werden sollen. Sie können auf Klicks auf die Schaltflächen hören, indem Sie {{WebExtAPIRef("notifications.onButtonClicked")}} verwenden. Jede Schaltfläche wird als Objekt mit den folgenden Eigenschaften spezifiziert:

    - `title`
      - : `string`. Titel für die Schaltfläche.
    - `iconUrl` {{optional_inline}}
      - : `string`. Eine URL, die auf ein Symbol für die Schaltfläche verweist.

- `imageUrl`

  - : `string`. Eine URL, die auf ein Bild verweist, das in der Benachrichtigung verwendet werden soll. Die URL kann eine Daten-URL, eine Blob-URL oder die [relative URL](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#relative_urls) einer Datei innerhalb der Erweiterung sein. Beim Verwenden eines SVG-Bildes stellen Sie sicher, dass das Bild Breiten- und Höhenattribute enthält, zum Beispiel `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"image"` ist. In diesem Fall ist sie obligatorisch, wenn die `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet werden, und optional, wenn sie in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

- `items`

  - : `array` von `item`. Ein Array von Elementen, die in die Benachrichtigung aufgenommen werden sollen. Abhängig von den Einstellungen des Benachrichtigungsmechanismus des Betriebssystems werden möglicherweise nicht alle von Ihnen angegebenen Elemente angezeigt. Jedes Element wird als Objekt mit den folgenden Eigenschaften spezifiziert:

    - `title`
      - : `string`. Titel, der im Element angezeigt wird.
    - `message`
      - : `string`. Nachricht, die im Element angezeigt wird.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"list"` ist. In diesem Fall ist sie obligatorisch, wenn die `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet werden, und optional, wenn sie in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

- `progress`

  - : `integer`. Eine Ganzzahl zwischen 0 und 100, die den aktuellen Fortschritt in einem Fortschrittsindikator darstellt.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"progress"` ist. In diesem Fall ist sie obligatorisch, wenn die `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet werden, und optional, wenn sie in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

Beachten Sie, dass `appIconMaskUrl` und `isClickable` nicht unterstützt werden.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
