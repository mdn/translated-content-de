---
title: notifications.NotificationOptions
slug: Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieser Typ enthält alle Daten, die benötigt werden, um:

- eine Benachrichtigung mit {{WebExtAPIRef("notifications.create()")}} zu erstellen,
- eine vorhandene Benachrichtigung mit {{WebExtAPIRef("notifications.update()")}} zu aktualisieren.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die unten aufgelisteten Eigenschaften.

Die ersten drei Eigenschaften - `type`, `title`, `message` - sind in {{WebExtAPIRef("notifications.create()")}} obligatorisch, aber in {{WebExtAPIRef("notifications.update()")}} optional. Firefox unterstützt derzeit: nur die Eigenschaften `type`, `title`, `message` und `iconUrl`; und der einzige unterstützte Wert für `type` ist `'basic'`.

- `type`
  - : {{WebExtAPIRef("notifications.TemplateType")}}. Der Benachrichtigungstyp, den Sie wünschen. Abhängig von Ihrer Wahl sind bestimmte andere Eigenschaften entweder obligatorisch oder nicht erlaubt.
- `message`
  - : `string`. Der Hauptinhalt der Benachrichtigung.
- `title`
  - : `string`. Der Titel der Benachrichtigung.
- `iconUrl` {{optional_inline}}
  - : `string`. Eine URL, die auf ein Symbol verweist, das in der Benachrichtigung angezeigt wird. Die URL kann sein: eine Daten-URL, eine Blob-URL, eine http- oder https-URL oder die [relative URL einer Datei innerhalb der Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#relative_urls). Bei der Verwendung eines SVG-Bildes stellen Sie sicher, dass das Bild Höhen- und Breitenattribute enthält, zum Beispiel `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.
- `contextMessage` {{optional_inline}}
  - : `string`. Ergänzende Inhalte zur Anzeige.
- `priority` {{optional_inline}}
  - : `number`. Die Priorität der Benachrichtigung: kann 0, 1 oder 2 sein. Standard ist 0, wenn nicht angegeben.
- `eventTime` {{optional_inline}}
  - : `number`. Ein Zeitstempel für die Benachrichtigung in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `buttons` {{optional_inline}}

  - : `array` of `button`. Ein Array von bis zu 2 Schaltflächen zur Aufnahme in die Benachrichtigung. Sie können auf Schaltflächenklicks lauschen, indem Sie {{WebExtAPIRef("notifications.onButtonClicked")}} verwenden. Jede Schaltfläche wird als Objekt mit den folgenden Eigenschaften spezifiziert:

    - `title`
      - : `string`. Titel für die Schaltfläche.
    - `iconUrl` {{optional_inline}}
      - : `string`. URL, die auf ein Symbol für die Schaltfläche verweist.

- `imageUrl`

  - : `string`. Eine URL, die auf ein Bild verweist, das in der Benachrichtigung verwendet werden soll. Die URL kann sein: eine Daten-URL, eine Blob-URL oder die [relative URL](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#relative_urls) einer Datei innerhalb der Erweiterung. Bei der Verwendung eines SVG-Bildes stellen Sie sicher, dass das Bild Höhen- und Breitenattribute enthält, zum Beispiel `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.

    _Diese Eigenschaft ist nur erlaubt, wenn `type` `"image"` ist. In diesem Fall ist sie obligatorisch, wenn `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet wird, und optional, wenn es in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

- `items`

  - : `array` of `item`. Ein Array von Elementen, die in die Benachrichtigung aufgenommen werden sollen. Abhängig von den Einstellungen des Benachrichtigungsmechanismus des Betriebssystems können einige der von Ihnen bereitgestellten Elemente möglicherweise nicht angezeigt werden. Jedes Element wird als Objekt mit den folgenden Eigenschaften spezifiziert:

    - `title`
      - : `string`. Titel zur Anzeige im Element.
    - `message`
      - : `string`. Nachricht zur Anzeige im Element.

    _Diese Eigenschaft ist nur erlaubt, wenn `type` `"list"` ist. In diesem Fall ist sie obligatorisch, wenn `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet wird, und optional, wenn es in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

- `progress`

  - : `integer`. Eine ganze Zahl zwischen 0 und 100, die den aktuellen Fortschritt in einem Fortschrittsanzeiger darstellt.

    _Diese Eigenschaft ist nur erlaubt, wenn `type` `"progress"` ist. In diesem Fall ist sie obligatorisch, wenn `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet wird, und optional, wenn es in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

Beachten Sie, dass `appIconMaskUrl` und `isClickable` nicht unterstützt werden.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
