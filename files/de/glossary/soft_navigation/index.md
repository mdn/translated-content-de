---
title: Soft Navigation
slug: Glossary/Soft_navigation
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

Eine Soft-Navigation ist eine clientseitige Routing-Navigation, die von {{Glossary("SPA", "Single Page Applications (SPAs)")}} verwendet wird, um neuen Inhalt zu laden.

Normalerweise lädt das Klicken auf einen Link auf einer Webseite eine komplett neue Seite (eine "harte Navigation"), was zu erheblich unnötiger Arbeit und Verlust von Zuständen beim Navigieren zwischen ähnlichen Seiten auf einer Webseite führen kann.

Moderne JavaScript-Frameworks verwenden clientseitiges Routing, um Link-Klicks abzufangen, den Inhalt auf der aktuellen Seite zu aktualisieren (möglicherweise nach dem Ausführen von [Fetch](/de/docs/Web/API/Fetch_API)-Aufrufen), und dann die URL in der Adressleiste zu aktualisieren, während ein Historieneintrag für die resultierende Navigation erstellt wird.

Der Nettoeffekt erscheint für den Benutzer wie eine Navigation (aber hoffentlich schneller als eine harte Navigation), die der Browser als die gleiche Seite wahrnehmen wird.

Die [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation) und [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) APIs ermöglichen die Messung von Soft-Navigationen außerhalb eines Frameworks für Leistungsmetriken.

## Siehe auch

- [Single-page application](https://en.wikipedia.org/wiki/Single-page_application) (Wikipedia)
- [Verständnis von clientseitigen JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries)
- Verwandte Glossarbegriffe:
  - {{Glossary("SPA", "SPA")}}
- Beliebte SPA-Frameworks:
  - [React](https://react.dev/)
  - [Angular](https://angular.dev/)
  - [Vue.JS](https://vuejs.org/)
