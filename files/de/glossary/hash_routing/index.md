---
title: Hash-Routing
slug: Glossary/Hash_routing
l10n:
  sourceCommit: 183135f4f07714f07965e32e90532d7888a13848
---

{{GlossarySidebar}}

**Hash-Routing** ist eine clientseitige Technik, die in Single-Page-Anwendungen (SPAs) verwendet wird, um Navigation und Zustandsänderungen zu verwalten, ohne die gesamte Seite neu zu laden.

## Historischer Kontext

Frühe SPAs konnten den [Pfad](/de/docs/Web/URI/Reference/Path) Teil der URL nicht ändern, ohne die Seite neu zu laden. Um dies zu umgehen, verwendeten Entwickler das **hash-basierte SPA-Routing**, das die Route im "[Fragment](/de/docs/Web/URI/Reference/Fragment)" speichert, dem Teil der URL, der nach dem Symbol `#` folgt. Häufige Muster waren `#/profile` und `#!/profile`. Anwendungen überprüften kontinuierlich [`window.location.hash`](/de/docs/Web/API/Location/hash) (oder hörten auf das [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis, als es später unterstützt wurde), um Fragmentänderungen während der Benutzernavigation zu erkennen; die SPA aktualisierte dann die Ansicht, wann immer sich das Fragment änderte.

## Einschränkungen

Obwohl dieser Ansatz keine Server-Einrichtung benötigte, hatte er Einschränkungen: Die Unterstützung für {{Glossary("bfcache", "vorwärts/rückwärts")}} war begrenzt, Seiten mit hash-basierten URLs wurden nicht korrekt indexiert (Suchmaschinen ignorierten das Fragment), und die resultierenden URLs wurden als unordentlich angesehen.

Hash-basiertes Routing wird jetzt als veraltete Technik betrachtet. Es wird, wenn überhaupt, nur als Fallback für sehr alte Browser oder für statische Hosts verwendet, bei denen serverseitiges Routing nicht konfiguriert werden kann.

## Moderne Alternativen

Bis 2012 unterstützten alle großen Browser (Chrome 5, Safari 5, Firefox 4) die [History API](/de/docs/Web/API/History_API). SPAs konnten nun [`pushState()`](/de/docs/Web/API/History/pushState), [`replaceState()`](/de/docs/Web/API/History/replaceState) und das [`popstate`](/de/docs/Web/API/PopStateEvent) Ereignis aufrufen, um den Verlaufstack des Browsers zu manipulieren, direkt zu Pfaden wie `/profile` zu wechseln und die Ansicht ohne vollständiges Neuladen zu aktualisieren. Dies ermöglichte auch sauberere URLs ohne Hash-Fragmente.
