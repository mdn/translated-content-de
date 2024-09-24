---
title: notifications.NotificationOptions
slug: Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieser Typ enthält alle benötigten Daten, um:

- eine Benachrichtigung mit {{WebExtAPIRef("notifications.create()")}} zu erstellen,
- eine vorhandene Benachrichtigung mit {{WebExtAPIRef("notifications.update()")}} zu aktualisieren.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die unten aufgeführten Eigenschaften.

Die ersten drei Eigenschaften - `type`, `title`, `message` - sind in {{WebExtAPIRef("notifications.create()")}} zwingend erforderlich, aber optional in {{WebExtAPIRef("notifications.update()")}}. Firefox unterstützt derzeit nur die Eigenschaften `type`, `title`, `message` und `iconUrl`; und der einzige unterstützte Wert für `type` ist `'basic'`.

- `type`
  - : {{WebExtAPIRef("notifications.TemplateType")}}. Der Typ der Benachrichtigung, den Sie verwenden möchten. Abhängig von Ihrer Auswahl hier sind bestimmte andere Eigenschaften entweder zwingend erforderlich oder nicht erlaubt.
- `message`
  - : `string`. Der Hauptinhalt der Benachrichtigung.
- `title`
  - : `string`. Der Titel der Benachrichtigung.
- `iconUrl` {{optional_inline}}
  - : `string`. Eine URL, die auf ein Symbol zur Anzeige in der Benachrichtigung verweist. Die URL kann sein: eine Daten-URL, eine Blob-URL, eine http- oder https-URL oder die [relative URL einer Datei innerhalb der Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#relative_urls). Bei Verwendung eines SVG-Bildes stellen Sie sicher, dass das Bild Höhe- und Breitenattribute enthält, zum Beispiel `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.
- `contextMessage` {{optional_inline}}
  - : `string`. Zusatzinhalt, der angezeigt werden soll.
- `priority` {{optional_inline}}
  - : `number`. Die Priorität der Benachrichtigung: kann 0, 1 oder 2 sein. Der Standardwert ist 0, wenn nicht angegeben.
- `eventTime` {{optional_inline}}
  - : `number`. Ein Zeitstempel für die Benachrichtigung in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `buttons` {{optional_inline}}

  - : `array` von `button`. Ein Array von bis zu 2 Schaltflächen, die in die Benachrichtigung aufgenommen werden. Sie können auf Schaltflächenklicks mit {{WebExtAPIRef("notifications.onButtonClicked")}} hören. Jede Schaltfläche wird als Objekt mit den folgenden Eigenschaften angegeben:

    - `title`
      - : `string`. Titel für die Schaltfläche.
    - `iconUrl` {{optional_inline}}
      - : `string`. URL, die auf ein Symbol für die Schaltfläche verweist.

- `imageUrl`

  - : `string`. Eine URL, die auf ein Bild verweist, das in der Benachrichtigung verwendet werden soll. Die URL kann sein: eine Daten-URL, eine Blob-URL oder die [relative URL](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#relative_urls) einer Datei innerhalb der Erweiterung. Bei Verwendung eines SVG-Bildes stellen Sie sicher, dass das Bild Höhe- und Breitenattribute enthält, zum Beispiel `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"image"` ist. In diesem Fall ist sie zwingend erforderlich, wenn die `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet werden, und optional, wenn sie in {{WebExtAPIRef("notifications.update()")}} verwendet werden._

- `items`

  - : `array` von `item`. Ein Array von Elementen, die in die Benachrichtigung aufgenommen werden sollen. Abhängig von den Einstellungen des Benachrichtigungsmechanismus des Betriebssystems werden möglicherweise nicht alle angegebenen Elemente angezeigt. Jedes Element wird als Objekt mit den folgenden Eigenschaften angegeben:

    - `title`
      - : `string`. Der Titel, der im Element angezeigt werden soll.
    - `message`
      - : `string`. Die Nachricht, die im Element angezeigt werden soll.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"list"` ist. In diesem Fall ist sie zwingend erforderlich, wenn die `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet werden, und optional, wenn sie in {{WebExtAPIRef("notifications.update()")}} verwendet werden._

- `progress`

  - : `integer`. Ein Ganzzahlwert zwischen 0 und 100, der den aktuellen Fortschritt in einem Fortschrittsindikator darstellt.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"progress"` ist. In diesem Fall ist sie zwingend erforderlich, wenn die `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet werden, und optional, wenn sie in {{WebExtAPIRef("notifications.update()")}} verwendet werden._

Beachten Sie, dass `appIconMaskUrl` und `isClickable` nicht unterstützt werden.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API von Chromium.
