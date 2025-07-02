---
title: Hinzufügen von Feed-Readern zu Firefox
slug: Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Ab Firefox 2 unterstützt Firefox die Auswahl verschiedener RSS- oder Atom-Feed-Reader, die Sie verwenden können, wenn Sie versuchen, einen Feed zu lesen. Dieser Artikel bietet Informationen darüber, wie Sie Unterstützung für zusätzliche Reader hinzufügen können, die standardmäßig nicht unterstützt werden.

## Hinzufügen eines neuen webbasierten Feed-Readers

### Hinzufügen eines Feed-Readers aus einer Webanwendung

Die Unterstützung für das Hinzufügen von Feed-Readern über das Web wurde aus der HTML5-Spezifikation entfernt, und die Unterstützung in Firefox ist für die Entfernung in Firefox 62 geplant. {{Deprecated_Inline}}

In älteren Versionen kann JavaScript-Code im Web einen Feed-Reader mithilfe der Funktion `navigator.registerContentHandler()` hinzufügen, so wie hier:

```js
navigator.registerContentHandler(
  "application/vnd.mozilla.maybe.feed",
  "https://www.example.com/?feed-feed=%s",
  "My Feed Reader",
);
```

Beachten Sie, dass Webinhalte darauf beschränkt sind, Handler-URLs hinzuzufügen, die den gleichen Ursprung wie die Seite haben, die den Aufruf durchführt.

### Manuelles Hinzufügen eines neuen Feed-Readers

Die Unterstützung für das Hinzufügen neuer Feed-Reader wurde in Firefox 63 entfernt. {{deprecated_inline}}.

Vor Firefox 63 mussten Sie, um Unterstützung für einen neuen webbasierten Feed-Reader hinzuzufügen, drei neue Einstellungen hinzufügen:

- `browser.contentHandlers.types.number.title`
  - : Der Name des Feed-Readers.
- `browser.contentHandlers.types.number.type`
  - : Für einen Feed-Reader sollte dies "application/vnd.mozilla.maybe.feed" sein.
- `browser.contentHandlers.types.number.uri`
  - : Die URI des Feed-Readers. Verwenden Sie "%s", wo die URL des Feeds eingefügt werden soll.

`number` sollte durch die nächsthöhere eindeutige Zahl ersetzt werden, die noch nicht verwendet wurde. Wenn Sie beispielsweise einen neuen Feed-Reader namens "Easy Reader" hinzufügen möchten und es bereits definierte Inhalts-Handler mit den Nummern 0 bis 4 gibt, sollten Sie die `number` 5 verwenden, wie hier:

- `browser.contentHandlers.types.5.title`: `Easy Reader`
- `browser.contentHandlers.types.5.type`: `application/vnd.mozilla.maybe.feed`
- `browser.contentHandlers.types.5.uri`: `http://www.theeasyreaderurl.com?feed=%s`

Sie können diese Einstellungen manuell hinzufügen, indem Sie `about:config` besuchen.

### Hinzufügen einer neuen Feed-Reader-Anwendung

Der einfachste Weg, dies zu tun, ist die Verwendung der bereitgestellten Benutzeroberfläche, indem Sie das Feeds-Panel im Fenster "Einstellungen" (oder "Optionen", je nach Plattform) verwenden.
