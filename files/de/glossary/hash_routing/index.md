---
title: Hash-Routing
slug: Glossary/Hash_routing
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Hash-Routing** ist eine clientseitige Technik, die in Single-Page-Applications (SPAs) verwendet wird, um Navigationen und Zustandsänderungen zu verwalten, ohne die gesamte Seite neu zu laden.

## Historischer Kontext

Frühe SPAs konnten den [Pfad](/de/docs/Web/URI/Reference/Path) im URL nicht ändern, ohne die Seite neu zu laden. Zur Umgehung dieses Problems verwendeten Entwickler **hash-basiertes SPA-Routing**, welches die Route in dem "[Fragment](/de/docs/Web/URI/Reference/Fragment)" speichert, dem Teil der URL, der dem Symbol `#` folgt. Übliche Muster waren `#/profile` und `#!/profile`. Anwendungen überprüften kontinuierlich [`window.location.hash`](/de/docs/Web/API/Location/hash) (oder hörten auf das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis, als es später unterstützt wurde), um Fragmentänderungen während der Benutzernavigation zu erkennen; die SPA aktualisierte dann die Ansicht, wann immer sich das Fragment änderte.

## Einschränkungen

Obwohl dieser Ansatz keine Serversetup benötigte, hatte er Einschränkungen: Der {{Glossary("bfcache", "back/forward")}}-Support war begrenzt, Seiten mit hash-basierten URLs wurden nicht richtig indiziert (Suchmaschinen ignorierten das Fragment), und die resultierenden URLs wurden als unübersichtlich betrachtet.

Hash-basiertes Routing wird jetzt als eine veraltete Technik angesehen. Es wird, wenn überhaupt, nur als Fallback für sehr alte Browser oder für statische Hosts verwendet, bei denen serverseitiges Routing nicht konfiguriert werden kann.

## Moderne Alternativen

Bis 2012 unterstützten alle großen Browser (Chrome 5, Safari 5, Firefox 4) die [History API](/de/docs/Web/API/History_API). SPAs konnten nun [`pushState()`](/de/docs/Web/API/History/pushState), [`replaceState()`](/de/docs/Web/API/History/replaceState) und das [`popstate`](/de/docs/Web/API/PopStateEvent)-Ereignis nutzen, um den Verlauf des Browsers zu manipulieren, direkt zu Pfaden wie `/profile` zu wechseln und die Ansicht zu aktualisieren, ohne ein vollständiges Neuladen. Dies ermöglichten auch sauberere URLs ohne Hash-Fragmente.
