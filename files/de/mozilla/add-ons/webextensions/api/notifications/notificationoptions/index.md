---
title: notifications.NotificationOptions
slug: Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Dieser Typ enthält alle Daten, die benötigt werden, um:

- eine Benachrichtigung mit {{WebExtAPIRef("notifications.create()")}} zu erstellen,
- eine bestehende Benachrichtigung mit {{WebExtAPIRef("notifications.update()")}} zu aktualisieren.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die unten aufgeführten Eigenschaften.

Die ersten drei Eigenschaften – `type`, `title`, `message` – sind in {{WebExtAPIRef("notifications.create()")}} erforderlich, aber in {{WebExtAPIRef("notifications.update()")}} optional. Firefox unterstützt derzeit nur die Eigenschaften `type`, `title`, `message` und `iconUrl`, wobei der einzige unterstützte Wert für `type` `'basic'` ist.

- `type`
  - : {{WebExtAPIRef("notifications.TemplateType")}}. Der Typ der gewünschten Benachrichtigung. Abhängig von Ihrer Auswahl hier sind bestimmte andere Eigenschaften entweder erforderlich oder nicht erlaubt.
- `message`
  - : `string`. Der Hauptinhalt der Benachrichtigung.
- `title`
  - : `string`. Der Titel der Benachrichtigung.
- `iconUrl` {{optional_inline}}
  - : `string`. Eine URL, die auf ein Symbol verweist, das in der Benachrichtigung angezeigt werden soll. Die URL kann eine Daten-URL, eine Blob-URL, eine http- oder https-URL oder die relative URL einer Datei innerhalb der Erweiterung sein. Bei Verwendung eines SVG-Bildes stellen Sie sicher, dass das Bild Höhe und Breitenattribute enthält, zum Beispiel `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.
- `contextMessage` {{optional_inline}}
  - : `string`. Ergänzender Inhalt, der angezeigt werden soll.
- `priority` {{optional_inline}}
  - : `number`. Die Priorität der Benachrichtigung: kann 0, 1 oder 2 sein. Der Standardwert ist 0, wenn weggelassen.
- `eventTime` {{optional_inline}}
  - : `number`. Ein Zeitstempel für die Benachrichtigung in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `buttons` {{optional_inline}}
  - : `array` von `button`. Ein Array von bis zu 2 Schaltflächen, die in die Benachrichtigung aufgenommen werden sollen. Sie können auf Schaltflächenklicks mit {{WebExtAPIRef("notifications.onButtonClicked")}} reagieren. Jede Schaltfläche wird als Objekt mit den folgenden Eigenschaften angegeben:
    - `title`
      - : `string`. Titel für die Schaltfläche.
    - `iconUrl` {{optional_inline}}
      - : `string`. URL, die auf ein Symbol für die Schaltfläche verweist.

- `imageUrl`
  - : `string`. Eine URL, die auf ein Bild verweist, das in der Benachrichtigung verwendet werden soll. Die URL kann eine Daten-URL, eine Blob-URL oder die relative URL einer Datei innerhalb der Erweiterung sein. Bei Verwendung eines SVG-Bildes stellen Sie sicher, dass das Bild Höhe und Breitenattribute enthält, zum Beispiel `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"image"` ist. In diesem Fall ist sie erforderlich, wenn das `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet wird, und optional, wenn es in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

- `items`
  - : `array` von `item`. Ein Array von Elementen, die in die Benachrichtigung aufgenommen werden sollen. Abhängig von den Einstellungen des Benachrichtigungsmechanismus des Betriebssystems werden möglicherweise nicht alle bereitgestellten Elemente angezeigt. Jedes Element wird als Objekt mit den folgenden Eigenschaften angegeben:
    - `title`
      - : `string`. Titel, der im Element angezeigt werden soll.
    - `message`
      - : `string`. Nachricht, die im Element angezeigt werden soll.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"list"` ist. In diesem Fall ist sie erforderlich, wenn das `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet wird, und optional, wenn es in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

- `progress`
  - : `integer`. Eine Ganzzahl zwischen 0 und 100, die den aktuellen Fortschritt in einem Fortschrittsbalken darstellt.

    _Diese Eigenschaft ist nur zulässig, wenn `type` `"progress"` ist. In diesem Fall ist sie erforderlich, wenn das `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet wird, und optional, wenn es in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

Beachten Sie, dass `appIconMaskUrl` und `isClickable` nicht unterstützt werden.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API von Chromium.
