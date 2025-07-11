---
title: Client-side Rendering (CSR)
slug: Glossary/CSR
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Client-side Rendering** (CSR) bezieht sich auf die Praxis der Erzeugung von HTML-Inhalten mithilfe von JavaScript im Browser. CSR steht im Gegensatz zum {{Glossary("SSR", "Server-side Rendering")}}, bei dem der Server den HTML-Inhalt generiert. Beide Techniken schließen sich nicht gegenseitig aus und können in derselben Anwendung zusammen verwendet werden.

Eine reine CSR-App könnte den folgenden HTML-Inhalt zurückgeben:

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

Der eigentliche Seiteninhalt wird dann von JavaScript in `bundle.js` unter Verwendung von [DOM-Manipulation](/de/docs/Web/API/Document_Object_Model) generiert.

Vorteile von CSR umfassen:

- Interaktivität: Jede Seitenaktualisierung, einschließlich Routenübergängen, erfordert kein vollständiges Neuladen der Seite. Dies lässt die App schneller und reaktionsfähiger erscheinen.
- Leistung: Der Server muss nur die anfänglichen HTML-Inhalte und JavaScript-Ressourcen senden. Nachfolgende Seitenaktualisierungen können von einer API abgerufen werden, was schneller sein kann als das Abrufen einer ganzen HTML-Seite und weniger Serverlast verursacht.

Sowohl SSR als auch CSR haben ihre Leistungskompromisse, und eine Kombination aus SSR und CSR kann genutzt werden, um die Vorteile beider Techniken zu vereinen. Beispielsweise kann der Server ein Seitenskelett mit leeren Platzhaltern generieren, und der Client kann zusätzliche Daten abrufen und die Seite nach Bedarf aktualisieren.

Es ist zu beachten, dass {{Glossary("SPA", "Single-Page-Anwendungen")}} nicht erfordern, dass die Webseite CSR ist. Moderne Frameworks, wie [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started), [Vue](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started) und [Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started), können verwendet werden, um SPAs mit SSR-Funktionalitäten zu erstellen.

## Siehe auch

- [Einführung in Client-seitige Frameworks > server-seitiges Rendering](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#server-side_rendering)
- [Client-side Rendering](https://en.wikipedia.org/wiki/Client-side_rendering) auf Wikipedia
- {{Glossary("SSR", "Server-side Rendering")}}
- {{Glossary("SSG", "Statik-Site-Generator")}}
- {{Glossary("SPA", "Single-Page-Anwendung")}}
