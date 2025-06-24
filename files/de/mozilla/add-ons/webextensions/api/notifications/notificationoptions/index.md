---
title: notifications.NotificationOptions
slug: Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Dieser Typ enthält alle Daten, die benötigt werden, um:

- eine Benachrichtigung mit {{WebExtAPIRef("notifications.create()")}} zu erstellen,
- eine bestehende Benachrichtigung mit {{WebExtAPIRef("notifications.update()")}} zu aktualisieren.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die unten aufgeführten Eigenschaften.

Die ersten drei Eigenschaften - `type`, `title`, `message` - sind verpflichtend in {{WebExtAPIRef("notifications.create()")}}, aber optional in {{WebExtAPIRef("notifications.update()")}}. Firefox unterstützt derzeit nur die Eigenschaften `type`, `title`, `message` und `iconUrl`; und der einzige unterstützte Wert für `type` ist `'basic'`.

- `type`
  - : {{WebExtAPIRef("notifications.TemplateType")}}. Der Typ der gewünschten Benachrichtigung. Je nach Ihrer Wahl hier sind bestimmte andere Eigenschaften entweder obligatorisch oder nicht erlaubt.
- `message`
  - : `string`. Der Hauptinhalt der Benachrichtigung.
- `title`
  - : `string`. Der Titel der Benachrichtigung.
- `iconUrl` {{optional_inline}}
  - : `string`. Eine URL, die auf ein zu zeigendes Icon in der Benachrichtigung verweist. Die URL kann sein: eine Data-URL, eine Blob-URL, eine http- oder https-URL, oder die relative URL einer Datei innerhalb der Erweiterung. Beim Verwenden eines SVG-Bildes stellen Sie sicher, dass das Bild Höheneigenschaften und Breiteneigenschaften enthält, z.B. `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.
- `contextMessage` {{optional_inline}}
  - : `string`. Zusätzlicher Inhalt zur Anzeige.
- `priority` {{optional_inline}}
  - : `number`. Die Priorität der Benachrichtigung: kann 0, 1 oder 2 sein. Standardmäßig 0, wenn weggelassen.
- `eventTime` {{optional_inline}}
  - : `number`. Ein Zeitstempel für die Benachrichtigung in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `buttons` {{optional_inline}}

  - : `array` von `button`. Ein Array von bis zu 2 Schaltflächen zur Aufnahme in die Benachrichtigung. Sie können auf Schaltflächenklicks lauschen mit {{WebExtAPIRef("notifications.onButtonClicked")}}. Jede Schaltfläche wird als Objekt mit den folgenden Eigenschaften angegeben:
    - `title`
      - : `string`. Titel für die Schaltfläche.
    - `iconUrl` {{optional_inline}}
      - : `string`. URL, die auf ein Icon für die Schaltfläche verweist.

- `imageUrl`

  - : `string`. Eine URL, die auf ein Bild zur Verwendung in der Benachrichtigung verweist. Die URL kann sein: eine Data-URL, eine Blob-URL, oder die relative URL einer Datei innerhalb der Erweiterung. Beim Verwenden eines SVG-Bildes stellen Sie sicher, dass das Bild Höheneigenschaften und Breiteneigenschaften enthält, z.B. `<svg width="96" height="96"…`. Andernfalls wird das Bild möglicherweise nicht angezeigt.

    _Diese Eigenschaft ist nur erlaubt, wenn `type` `"image"` ist. In diesem Fall ist sie obligatorisch, wenn die `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet werden, und optional, wenn sie in {{WebExtAPIRef("notifications.update()")}} verwendet werden._

- `items`

  - : `array` von `item`. Ein Array von Elementen zur Aufnahme in die Benachrichtigung. Abhängig von den Einstellungen des Benachrichtigungsmechanismus des Betriebssystems werden einige der bereitgestellten Elemente möglicherweise nicht angezeigt. Jedes Element wird als Objekt mit den folgenden Eigenschaften angegeben:

    - `title`
      - : `string`. Titel zur Anzeige im Element.
    - `message`
      - : `string`. Nachricht zur Anzeige im Element.

    _Diese Eigenschaft ist nur erlaubt, wenn `type` `"list"` ist. In diesem Fall ist sie obligatorisch, wenn die `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet werden, und optional, wenn sie in {{WebExtAPIRef("notifications.update()")}} verwendet werden._

- `progress`

  - : `integer`. Ein ganzzahliger Wert zwischen 0 und 100, der den aktuellen Fortschritt in einem Fortschrittsindikator darstellt.

    _Diese Eigenschaft ist nur erlaubt, wenn `type` `"progress"` ist. In diesem Fall ist sie obligatorisch, wenn die `NotificationOptions` in {{WebExtAPIRef("notifications.create()")}} verwendet werden, und optional, wenn sie in {{WebExtAPIRef("notifications.update()")}} verwendet werden._

Beachten Sie, dass `appIconMaskUrl` und `isClickable` nicht unterstützt werden.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
