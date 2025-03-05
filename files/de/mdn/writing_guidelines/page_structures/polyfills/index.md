---
title: Polyfills
slug: MDN/Writing_guidelines/Page_structures/Polyfills
l10n:
  sourceCommit: 15be229ea1379b99a02f0c8b102f2acb5c3d6633
---

Diese Seite beschreibt MDNs Richtlinien für die Aufnahme von Polyfills in die Referenzdokumentation für [JavaScript](/de/docs/Web/JavaScript) und [Web-APIs](/de/docs/Web/API).

Ein {{Glossary("Polyfill", "Polyfill")}} ist eine Implementierung einer Webplattform-Funktion, die Websites in Browsern verwenden können, die diese Funktion nicht nativ unterstützen. Polyfills ermöglichen es Webentwicklern, eine einzige Codebasis zu erstellen, die auf mehrere Browser und Browserversionen abzielt, selbst wenn einige dieser Browser einige der verwendeten Funktionen nicht unterstützen.

Polyfills sind für Webentwickler wichtig, stellen aber auch ein Risiko dar: fehlerhafte Polyfills können Websites beschädigen oder Sicherheitslücken schaffen. Aus diesem Grund empfiehlt MDN spezielle Quellen für Polyfills und ist sehr vorsichtig bei der Aufnahme zusätzlicher Quellen.

## Polyfills in der JavaScript-Referenz

### Ausgewählte Polyfills

Die [JavaScript-Referenzdokumentation](/de/docs/Web/JavaScript) kann auf Polyfills aus zwei Quellen verlinken:

- Die [core-js](https://github.com/zloirock/core-js/tree/master) Bibliothek.
- Die [es-shims](https://github.com/es-shims) Organisation.

Quellen werden von den MDN-Maintainern nach folgenden Kriterien ausgewählt:

- Konformität zur Spezifikation der Funktion, für die sie eine Implementierung bereitstellen.
- Verbreitung in der Webentwickler-Community, basierend auf Metriken wie der Anzahl der [npm](https://www.npmjs.com/) Downloads.

### Vorschlag einer zusätzlichen Polyfill-Quelle

Jeder kann vorschlagen, dass MDN eine zusätzliche Quelle für Polyfills anerkennt, indem er [eine Diskussion im MDN-Diskussionsforum startet](https://github.com/orgs/mdn/discussions). Die MDN-Maintainer erwarten jedoch, dass die Anzahl der anerkannten Polyfills, die von MDN verlinkt werden, sehr gering bleibt, um das Risiko zu verringern, Polyfills zu empfehlen, die Probleme für Webentwickler verursachen.

### Integration von Polyfills in Seiten

Wenn eine Seite in der JavaScript-Referenzdokumentation auf ein Polyfill verlinkt, wird der Link im Abschnitt "Siehe auch" am Ende der Seite hinzugefügt.

Der Link wird am Anfang der "Siehe auch"-Liste im folgenden Format platziert:

```md
- [Polyfill for `featureName` in `project-name`](link)
```

## Polyfills in der Web-API-Referenz

### Ausgewählte Polyfills

Die [Web-API-Referenzdokumentation](/de/docs/Web/API) kann auf Polyfills verweisen, die zusammen mit der Spezifikation der Funktion selbst gepflegt werden.

Beispielsweise hat die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ein Polyfill, das [im selben Repository wie die Spezifikation gepflegt wird](https://github.com/w3c/trusted-types?tab=readme-ov-file#polyfill). Dementsprechend kann die Trusted Types API-Referenzdokumentation auf MDN auf dieses Polyfill verlinken.

### Integration von Polyfills in Seiten

Polyfills werden typischerweise in die [Übersichtsseite für die API](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#web_api_page_types) integriert.
