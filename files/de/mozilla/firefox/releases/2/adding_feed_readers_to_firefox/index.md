---
title: Hinzufügen von Feed-Readern zu Firefox
slug: Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox
l10n:
  sourceCommit: def5d19048164c6f5e717bac2bdb5eeb3b9ea508
---

{{FirefoxSidebar}}

Ab Firefox 2 unterstützt Firefox die Auswahl verschiedener RSS- oder Atom-Feed-Reader, die verwendet werden sollen, wenn Sie einen Feed lesen möchten. Dieser Artikel enthält Informationen darüber, wie Sie Unterstützung für zusätzliche Reader hinzufügen können, die standardmäßig nicht unterstützt werden.

## Hinzufügen eines neuen webbasierten Feed-Readers

### Hinzufügen eines Feed-Readers aus einer Webanwendung

Die Unterstützung für das Hinzufügen von Feed-Readern aus dem Web wurde aus der HTML5-Spezifikation entfernt, und die Unterstützung in Firefox ist für die Entfernung in Firefox 62 geplant. {{Deprecated_Inline}}

In älteren Versionen kann mit JavaScript-Code im Web ein Feed-Reader mit der Funktion `navigator.registerContentHandler()` hinzugefügt werden, so:

```js
navigator.registerContentHandler(
  "application/vnd.mozilla.maybe.feed",
  "https://www.example.com/?feed-feed=%s",
  "My Feed Reader",
);
```

Beachten Sie, dass Webinhalte auf das Hinzufügen von Handler-URLs beschränkt sind, die den gleichen Ursprung wie die Seite haben, die den Aufruf ausführt.

### Manuelles Hinzufügen eines neuen Feed-Readers

Die Unterstützung für das Hinzufügen neuer Feed-Reader wurde in Firefox 63 entfernt. {{deprecated_inline}}.

Vor Firefox 63 mussten Sie, um Unterstützung für einen neuen webbasierten Feed-Reader hinzuzufügen, drei neue Einstellungen hinzufügen:

- `browser.contentHandlers.types.number.title`
  - : Der Name des Feed-Readers.
- `browser.contentHandlers.types.number.type`
  - : Für einen Feed-Reader sollte dies "application/vnd.mozilla.maybe.feed" sein.
- `browser.contentHandlers.types.number.uri`
  - : Die URI des Feed-Readers. Verwenden Sie "%s", wo die URL des Feeds eingefügt werden soll.

Das `number` sollte durch die nächsthöhere eindeutige Zahl ersetzt werden, die noch nicht verwendet wurde. Wenn Sie beispielsweise einen neuen Feed-Reader namens "Easy Reader" hinzufügen möchten und bereits Inhalts-Handler mit den Nummern 0 bis 4 definiert sind, sollten Sie eine `number` von 5 wie folgt verwenden:

- `browser.contentHandlers.types.5.title`: `Easy Reader`
- `browser.contentHandlers.types.5.type`: `application/vnd.mozilla.maybe.feed`
- `browser.contentHandlers.types.5.uri`: `http://www.theeasyreaderurl.com?feed=%s`

Diese Präferenzen können Sie manuell hinzufügen, indem Sie `about:config` aufrufen.

### Hinzufügen einer neuen Feed-Reader-Anwendung

Der einfachste Weg, dies zu tun, ist die Verwendung der bereitgestellten Benutzeroberfläche, indem Sie das Feeds-Panel im Fenster Einstellungen (oder Optionen, je nach Plattform) verwenden.
