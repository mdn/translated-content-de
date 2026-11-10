---
title: notifications.NotificationOptions
slug: Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions
l10n:
  sourceCommit: edc9ab5479d1253d9edd93bfe90dd1d100605c26
---

Dieser Typ enthält alle Daten, die benötigt werden, um:

- mit {{WebExtAPIRef("notifications.create()")}} eine Benachrichtigung zu erstellen,
- mit {{WebExtAPIRef("notifications.update()")}} eine bestehende Benachrichtigung zu aktualisieren.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die unten aufgeführten Eigenschaften.

Die ersten drei Eigenschaften – `type`, `title` und `message` – sind bei {{WebExtAPIRef("notifications.create()")}} erforderlich, bei {{WebExtAPIRef("notifications.update()")}} jedoch optional. Firefox unterstützt derzeit nur die Eigenschaften `type`, `title`, `message` und `iconUrl`. Der einzige unterstützte Wert für `type` ist `'basic'`.

- `type`
  - : {{WebExtAPIRef("notifications.TemplateType")}}. Der gewünschte Benachrichtigungstyp. Je nach Ihrer Auswahl sind bestimmte andere Eigenschaften entweder erforderlich oder nicht zulässig.
- `message`
  - : `string`. Der Hauptinhalt der Benachrichtigung.
- `title`
  - : `string`. Der Titel der Benachrichtigung.
- `iconUrl` {{optional_inline}}
  - : `string`. Eine URL, die auf ein Symbol verweist, das in der Benachrichtigung angezeigt werden soll. Die URL kann eine Data-URL, eine Blob-URL, eine HTTP- oder HTTPS-URL oder die relative URL einer Datei innerhalb der Erweiterung sein. Wenn Sie ein SVG-Bild verwenden, stellen Sie sicher, dass es Attribute für Höhe und Breite enthält, beispielsweise `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.
- `contextMessage` {{optional_inline}}
  - : `string`. Zusätzlicher Inhalt, der angezeigt werden soll.
- `priority` {{optional_inline}}
  - : `number`. Die Priorität der Benachrichtigung: Sie kann 0, 1 oder 2 sein. Wenn die Eigenschaft weggelassen wird, ist der Standardwert 0.
- `eventTime` {{optional_inline}}
  - : `number`. Ein Zeitstempel für die Benachrichtigung in [Millisekunden seit der Unix-Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `buttons` {{optional_inline}}
  - : `array` von `button`. Ein Array mit bis zu 2 Schaltflächen, die in der Benachrichtigung angezeigt werden sollen. Mit {{WebExtAPIRef("notifications.onButtonClicked")}} können Sie auf Klicks auf die Schaltflächen reagieren. Jede Schaltfläche wird als Objekt mit den folgenden Eigenschaften angegeben:
    - `title`
      - : `string`. Titel der Schaltfläche.
    - `iconUrl` {{optional_inline}}
      - : `string`. URL, die auf ein Symbol für die Schaltfläche verweist.

- `imageUrl`
  - : `string`. Eine URL, die auf ein Bild verweist, das in der Benachrichtigung verwendet werden soll. Die URL kann eine Data-URL, eine Blob-URL oder die relative URL einer Datei innerhalb der Erweiterung sein. Wenn Sie ein SVG-Bild verwenden, stellen Sie sicher, dass es Attribute für Höhe und Breite enthält, beispielsweise `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.

    _Diese Eigenschaft ist nur zulässig, wenn `type` den Wert `"image"` hat. In diesem Fall ist sie erforderlich, wenn `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet wird, und optional, wenn es in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

- `items`
  - : `array` von `item`. Ein Array von Einträgen, die in der Benachrichtigung angezeigt werden sollen. Abhängig von den Einstellungen des Benachrichtigungssystems des Betriebssystems werden möglicherweise nicht alle angegebenen Einträge angezeigt. Jeder Eintrag wird als Objekt mit den folgenden Eigenschaften angegeben:
    - `title`
      - : `string`. Titel, der im Eintrag angezeigt werden soll.
    - `message`
      - : `string`. Nachricht, die im Eintrag angezeigt werden soll.

    _Diese Eigenschaft ist nur zulässig, wenn `type` den Wert `"list"` hat. In diesem Fall ist sie erforderlich, wenn `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet wird, und optional, wenn es in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

- `progress`
  - : `integer`. Eine Ganzzahl zwischen 0 und 100, mit der der aktuelle Fortschritt in einer Fortschrittsanzeige dargestellt wird.

    _Diese Eigenschaft ist nur zulässig, wenn `type` den Wert `"progress"` hat. In diesem Fall ist sie erforderlich, wenn `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet wird, und optional, wenn es in {{WebExtAPIRef("notifications.update()")}} verwendet wird._

Beachten Sie, dass `appIconMaskUrl` und `isClickable` nicht unterstützt werden.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications).
