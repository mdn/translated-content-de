---
title: Server-seitiges Rendering (SSR)
slug: Glossary/SSR
l10n:
  sourceCommit: d864c4fa589174ddd906bb679576d2265a20fad1
---

{{GlossarySidebar}}

**Server-seitiges Rendering** (SSR) bezieht sich auf die Praxis, HTML-Inhalte auf dem Server zu generieren und sie an den Client zu senden. SSR steht im Gegensatz zum {{Glossary("CSR", "client-seitigen Rendering")}}, bei dem der Client die HTML-Inhalte mithilfe von JavaScript erzeugt. Beide Techniken schließen sich nicht gegenseitig aus und können in der gleichen Anwendung zusammen verwendet werden.

Eine {{Glossary("SSG", "statische Website")}} kann als SSR betrachtet werden (und kann mithilfe von SSR-Infrastruktur generiert werden), aber es gibt subtile Unterschiede. Die Inhalte einer statischen Website werden zur Build-Zeit und nicht zur Anfragezeit generiert. Statische Websites müssen oft überhaupt nicht auf einem Server bereitgestellt werden und können von einem {{Glossary("CDN", "CDN")}} ausgeliefert werden.

Der Unterschied zwischen SSR und CSR ist bedeutungsvoller für Websites mit dynamischem Inhalt, zum Beispiel für sich live-aktualisierende oder benutzerspezifische Inhalte. In diesen Fällen generiert der Server bei jeder Anfrage die HTML-Inhalte spontan, da es unrealistisch ist, jede mögliche Seite vorab zu generieren. Die HTML-Datei enthält nahezu vollständige Seiteninhalte, und JavaScript-Dateien sind nur dazu da, um Interaktivität zu ermöglichen.

Die Vorteile von SSR umfassen:

- Zugänglichkeit: Die Seite ist (irgendwie) ohne JavaScript nutzbar, zum Beispiel wenn das Internet langsam ist, der Benutzer JavaScript deaktiviert hat oder der Browser alt ist und JavaScript nicht ausführen kann. Jedoch wird jegliche Interaktivität oder client-seitige Logik nicht funktionieren.
- Crawler-Freundlichkeit: Suchmaschinen, Social-Media-Crawler und andere Bots können den Inhalt leicht lesen, ohne JavaScript ausführen zu müssen. Beachten Sie, dass große Suchmaschinen in der Lage sind, JavaScript auszuführen, sodass reine CSR-Seiten dennoch indexierbar sind, aber Social-Media-Crawler in der Regel nicht.
- Leistung: Der Server kann im Voraus wissen, welche Inhalte benötigt werden, und alle notwendigen Daten gleichzeitig abrufen, im Vergleich zu CSR, bei dem der Client oft erst beim Rendern der Anfangsseite über weitere Abhängigkeiten informiert wird, was zu einer Kaskade von Anfragen führt.

Sowohl SSR als auch CSR haben ihre Leistungsvor- und Nachteile, und eine Mischung aus SSR und CSR kann verwendet werden, um die Vorteile beider Techniken zu kombinieren. Beispielsweise kann der Server ein Seiten-Skelett mit leeren Platzhaltern generieren, und der Client kann zusätzliche Daten abrufen und die Seite bei Bedarf aktualisieren.

## Siehe auch

- [Einführung in client-seitige Frameworks > server-seitiges Rendering](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#server-side_rendering)
- [Server-seitiges Skripting](https://en.wikipedia.org/wiki/Server-side_scripting) auf Wikipedia
- {{Glossary("CSR", "Client-seitiges Rendering")}}
- {{Glossary("SSG", "Statischer Site-Generator")}}
- {{Glossary("SPA", "Single-Page-Anwendung")}}
