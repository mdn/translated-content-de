---
title: notifications.NotificationOptions
slug: Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions
l10n:
  sourceCommit: bb0286344d812030e05e43214159f0740828190b
---

{{AddonSidebar}}

Dieser Typ enthält alle Daten, die benötigt werden, um:

- eine Benachrichtigung mit {{WebExtAPIRef("notifications.create()")}} zu erstellen,
- eine bestehende Benachrichtigung mit {{WebExtAPIRef("notifications.update()")}} zu aktualisieren.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die unten aufgeführten Eigenschaften.

Die ersten drei Eigenschaften - `type`, `title`, `message` - sind in {{WebExtAPIRef("notifications.create()")}} erforderlich, aber optional in {{WebExtAPIRef("notifications.update()")}}. Firefox unterstützt derzeit: nur die Eigenschaften `type`, `title`, `message` und `iconUrl`; der einzige unterstützte Wert für `type` ist `'basic'`.

- `type`
  - : {{WebExtAPIRef("notifications.TemplateType")}}. Der Typ der gewünschten Benachrichtigung. Abhängig von Ihrer Wahl hier sind bestimmte andere Eigenschaften entweder erforderlich oder nicht zulässig.
- `message`
  - : `string`. Der Hauptinhalt der Benachrichtigung.
- `title`
  - : `string`. Der Titel der Benachrichtigung.
- `iconUrl` {{optional_inline}}
  - : `string`. Eine URL, die auf ein Symbol verweist, das in der Benachrichtigung angezeigt werden soll. Die URL kann eine Data-URL, eine Blob-URL, eine http- oder https-URL oder die relative URL einer Datei innerhalb der Erweiterung sein. Wenn ein SVG-Bild verwendet wird, stellen Sie sicher, dass das Bild die Attribute „height“ und „width“ enthält, zum Beispiel `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.
- `contextMessage` {{optional_inline}}
  - : `string`. Zusätzlicher Inhalt zur Anzeige.
- `priority` {{optional_inline}}
  - : `number`. Die Priorität der Benachrichtigung: kann 0, 1 oder 2 sein. Standardmäßig 0, wenn weggelassen.
- `eventTime` {{optional_inline}}
  - : `number`. Ein Zeitstempel für die Benachrichtigung in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `buttons` {{optional_inline}}

  - : `array` von `button`. Ein Array von bis zu 2 Schaltflächen, die in die Benachrichtigung aufgenommen werden sollen. Sie können auf Klicks auf die Schaltflächen mit {{WebExtAPIRef("notifications.onButtonClicked")}} reagieren. Jede Schaltfläche wird als Objekt mit den folgenden Eigenschaften angegeben:

    - `title`
      - : `string`. Titel für die Schaltfläche.
    - `iconUrl` {{optional_inline}}
      - : `string`. URL, die auf ein Symbol für die Schaltfläche verweist.

- `imageUrl`

  - : `string`. Eine URL, die auf ein Bild verweist, das in der Benachrichtigung verwendet werden soll. Die URL kann eine Data-URL, eine Blob-URL oder die relative URL einer Datei innerhalb der Erweiterung sein. Wenn ein SVG-Bild verwendet wird, stellen Sie sicher, dass das Bild die Attribute „height“ und „width“ enthält, zum Beispiel `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"image"` ist. In diesem Fall ist sie obligatorisch, wenn `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet wird, und optional, wenn es in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

- `items`

  - : `array` von `item`. Ein Array von Elementen, die in die Benachrichtigung aufgenommen werden sollen. Abhängig von den Einstellungen des Benachrichtigungsmechanismus des Betriebssystems werden möglicherweise einige der angegebenen Elemente nicht angezeigt. Jedes Element wird als Objekt mit den folgenden Eigenschaften angegeben:

    - `title`
      - : `string`. Der Titel, der im Element angezeigt werden soll.
    - `message`
      - : `string`. Die Nachricht, die im Element angezeigt werden soll.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"list"` ist. In diesem Fall ist sie obligatorisch, wenn `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet wird, und optional, wenn es in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

- `progress`

  - : `integer`. Ein ganzzahliger Wert zwischen 0 und 100, der den aktuellen Fortschritt in einem Fortschrittsanzeiger darstellt.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"progress"` ist. In diesem Fall ist sie obligatorisch, wenn `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet wird, und optional, wenn es in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

Beachten Sie, dass `appIconMaskUrl` und `isClickable` nicht unterstützt werden.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
