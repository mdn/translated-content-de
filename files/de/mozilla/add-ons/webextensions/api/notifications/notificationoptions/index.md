---
title: notifications.NotificationOptions
slug: Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Dieser Typ enthält alle Daten, die benötigt werden, um:

- eine Benachrichtigung mit {{WebExtAPIRef("notifications.create()")}} zu erstellen,
- eine bestehende Benachrichtigung mit {{WebExtAPIRef("notifications.update()")}} zu aktualisieren.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die unten aufgeführten Eigenschaften.

Die ersten drei Eigenschaften - `type`, `title`, `message` - sind bei {{WebExtAPIRef("notifications.create()")}} obligatorisch, bei {{WebExtAPIRef("notifications.update()")}} jedoch optional. Firefox unterstützt derzeit nur die Eigenschaften `type`, `title`, `message` und `iconUrl`; der einzige unterstützte Wert für `type` ist `'basic'`.

- `type`
  - : {{WebExtAPIRef("notifications.TemplateType")}}. Der Typ der gewünschten Benachrichtigung. Abhängig von Ihrer Wahl hier sind bestimmte andere Eigenschaften entweder obligatorisch oder nicht zulässig.
- `message`
  - : `string`. Der Hauptinhalt der Benachrichtigung.
- `title`
  - : `string`. Der Titel der Benachrichtigung.
- `iconUrl` {{optional_inline}}
  - : `string`. Eine URL, die auf ein Symbol verweist, das in der Benachrichtigung angezeigt werden soll. Die URL kann sein: eine Daten-URL, eine Blob-URL, eine http- oder https-URL oder die relative URL einer Datei innerhalb der Erweiterung. Beim Verwenden eines SVG-Bildes stellen Sie sicher, dass das Bild Höhen- und Breitenattribute enthält, zum Beispiel `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.
- `contextMessage` {{optional_inline}}
  - : `string`. Ergänzender Inhalt zur Anzeige.
- `priority` {{optional_inline}}
  - : `number`. Die Priorität der Benachrichtigung: kann 0, 1 oder 2 sein. Standardmäßig 0, wenn weggelassen.
- `eventTime` {{optional_inline}}
  - : `number`. Ein Zeitstempel für die Benachrichtigung in [Millisekunden seit dem Unix-Zeitstempel](https://en.wikipedia.org/wiki/Unix_time).
- `buttons` {{optional_inline}}
  - : `array` von `button`. Ein Array von bis zu 2 Schaltflächen, die in der Benachrichtigung enthalten sein können. Sie können auf Klicks auf die Schaltflächen mithilfe von {{WebExtAPIRef("notifications.onButtonClicked")}} hören. Jede Schaltfläche wird als Objekt mit den folgenden Eigenschaften angegeben:
    - `title`
      - : `string`. Titel der Schaltfläche.
    - `iconUrl` {{optional_inline}}
      - : `string`. URL, die auf ein Symbol für die Schaltfläche verweist.

- `imageUrl`
  - : `string`. Eine URL, die auf ein Bild verweist, das in der Benachrichtigung verwendet wird. Die URL kann sein: eine Daten-URL, eine Blob-URL oder die relative URL einer Datei innerhalb der Erweiterung. Beim Verwenden eines SVG-Bildes stellen Sie sicher, dass das Bild Höhen- und Breitenattribute enthält, zum Beispiel `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"image"` ist. In diesem Fall ist sie obligatorisch, wenn die `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet werden, und optional, wenn sie in {{WebExtAPIRef("notifications.update()")}} verwendet werden._

- `items`
  - : `array` von `item`. Ein Array von Elementen, die in der Benachrichtigung enthalten sein sollen. Je nach den Einstellungen des Benachrichtigungsmechanismus des Betriebssystems werden möglicherweise nicht alle bereitgestellten Elemente angezeigt. Jedes Element wird als Objekt mit den folgenden Eigenschaften angegeben:
    - `title`
      - : `string`. Titel, der im Element angezeigt werden soll.
    - `message`
      - : `string`. Nachricht, die im Element angezeigt werden soll.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"list"` ist. In diesem Fall ist sie obligatorisch, wenn die `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet werden, und optional, wenn sie in {{WebExtAPIRef("notifications.update()")}} verwendet werden._

- `progress`
  - : `integer`. Eine Ganzzahl zwischen 0 und 100, die den aktuellen Fortschritt in einem Fortschrittsindikator darstellt.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"progress"` ist. In diesem Fall ist sie obligatorisch, wenn die `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet werden, und optional, wenn sie in {{WebExtAPIRef("notifications.update()")}} verwendet werden._

Beachten Sie, dass `appIconMaskUrl` und `isClickable` nicht unterstützt werden.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der `chrome.notifications`-API von Chromium [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications).
