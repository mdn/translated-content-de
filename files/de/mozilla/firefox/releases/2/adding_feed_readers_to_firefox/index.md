---
title: Hinzufügen von Feed-Readern zu Firefox
slug: Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox
l10n:
  sourceCommit: def5d19048164c6f5e717bac2bdb5eeb3b9ea508
---

{{FirefoxSidebar}}

Ab Firefox 2 unterstützt Firefox die Auswahl verschiedener RSS- oder Atom-Feed-Reader, die Sie verwenden können, wenn Sie einen Feed lesen möchten. Dieser Artikel bietet Informationen darüber, wie Sie Unterstützung für zusätzliche Reader hinzufügen können, die standardmäßig nicht unterstützt werden.

## Hinzufügen eines neuen webbasierten Feed-Readers

### Hinzufügen eines Feed-Readers aus einer Webanwendung

Die Unterstützung für das Hinzufügen von Feed-Readern aus dem Web wurde aus der HTML5-Spezifikation entfernt, und die Firefox-Unterstützung ist zur Entfernung in Firefox 62 geplant. {{Deprecated_Inline}}

In älteren Versionen kann JavaScript-Code im Web einen Feed-Reader mit der Funktion `navigator.registerContentHandler()` hinzufügen, wie folgt:

```js
navigator.registerContentHandler(
  "application/vnd.mozilla.maybe.feed",
  "https://www.example.com/?feed-feed=%s",
  "My Feed Reader",
);
```

Beachten Sie, dass Webinhalte darauf beschränkt sind, Handler-URLs hinzuzufügen, die denselben Ursprung haben wie die Seite, die den Aufruf durchführt.

### Hinzufügen eines neuen Feed-Readers manuell

Die Unterstützung für das Hinzufügen neuer Feed-Reader wurde in Firefox 63 entfernt. {{deprecated_inline}}.

Vor Firefox 63 mussten Sie zum Hinzufügen eines neuen webbasierten Feed-Readers drei neue Präferenzen hinzufügen:

- `browser.contentHandlers.types.number.title`
  - : Der Name des Feed-Readers.
- `browser.contentHandlers.types.number.type`
  - : Für einen Feed-Reader sollte dies "application/vnd.mozilla.maybe.feed" sein.
- `browser.contentHandlers.types.number.uri`
  - : Die URI des Feed-Readers. Verwenden Sie "%s", wo die URL des Feeds eingefügt werden soll.

`number` sollte durch die nächste höchste eindeutige Nummer ersetzt werden, die noch nicht verwendet wurde. Wenn Sie beispielsweise einen neuen Feed-Reader namens "Easy Reader" hinzufügen möchten und es bereits definierte Content-Handler mit den Nummern 0 bis 4 gibt, sollten Sie eine `number` von 5 verwenden, wie folgt:

- `browser.contentHandlers.types.5.title`: `Easy Reader`
- `browser.contentHandlers.types.5.type`: `application/vnd.mozilla.maybe.feed`
- `browser.contentHandlers.types.5.uri`: `http://www.theeasyreaderurl.com?feed=%s`

Sie können diese Präferenzen manuell hinzufügen, indem Sie `about:config` besuchen.

### Hinzufügen einer neuen Feed-Reader-Anwendung

Der einfachste Weg, dies zu tun, besteht darin, die bereitgestellte Benutzeroberfläche zu verwenden, indem Sie das Feeds-Panel im Fenster Einstellungen (oder Optionen, je nach Plattform) verwenden.
