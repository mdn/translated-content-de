---
title: Client-side Rendering (CSR)
slug: Glossary/CSR
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

**Client-side Rendering** (CSR) bezieht sich auf die Praxis, HTML-Inhalte mithilfe von JavaScript im Browser zu generieren. CSR steht im Gegensatz zu {{Glossary("SSR", "Server-side Rendering")}}, bei dem der Server die HTML-Inhalte generiert. Beide Techniken schließen sich nicht gegenseitig aus und können in derselben Anwendung zusammen verwendet werden.

Eine reine CSR-Anwendung könnte den folgenden HTML-Inhalt zurückgeben:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <title>My App</title>
    <script src="bundle.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <noscript>
      <p>This app requires JavaScript to run.</p>
    </noscript>
  </body>
</html>
```

Dann wird der eigentliche Seiteninhalt von JavaScript in `bundle.js` unter Verwendung der [DOM-Manipulation](/de/docs/Web/API/Document_Object_Model) generiert.

Vorteile von CSR umfassen:

- Interaktivität: Jede Seitenaktualisierung, einschließlich Routenübergänge, erfordert kein vollständiges Neuladen der Seite. Dies lässt die Anwendung schneller und reaktionsfähiger erscheinen.
- Leistung: Der Server muss nur die initialen HTML-Inhalte und JavaScript-Ressourcen senden. Nachfolgende Seitenaktualisierungen können über eine API abgerufen werden, was schneller sein kann als das Abrufen einer vollständigen HTML-Seite und die Serverlast reduziert.

Sowohl SSR als auch CSR haben ihre Leistungskompromisse, und eine Mischung aus SSR und CSR kann verwendet werden, um die Vorteile beider Techniken zu kombinieren. Zum Beispiel kann der Server ein Seitenskelett mit leeren Platzhaltern generieren, und der Client kann zusätzliche Daten abrufen und die Seite nach Bedarf aktualisieren.

Beachten Sie, dass {{Glossary("SPA", "Single-Page-Anwendungen")}} nicht erfordern, dass die Seite CSR ist. Moderne Frameworks wie [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started), [Vue](https://vuejs.org/) und [Svelte](https://svelte.dev/) können verwendet werden, um SPAs mit SSR-Fähigkeiten zu erstellen.

## Siehe auch

- [Einführung in client-seitige Frameworks > Server-side Rendering](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#server-side_rendering)
- [Client-side Rendering](https://en.wikipedia.org/wiki/Client-side_rendering) auf Wikipedia
- {{Glossary("SSR", "Server-side Rendering")}}
- {{Glossary("SSG", "Static Site Generator")}}
- {{Glossary("SPA", "Single-Page-Anwendung")}}
