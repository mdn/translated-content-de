---
title: Polyfills
slug: MDN/Writing_guidelines/Page_structures/Polyfills
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Diese Seite beschreibt die Richtlinien von MDN zur Aufnahme von Polyfills in die Referenzdokumentation für [JavaScript](/de/docs/Web/JavaScript) und [Web-APIs](/de/docs/Web/API).

Ein {{Glossary("Polyfill", "Polyfill")}} ist eine Implementierung einer Webplattform-Funktion, die Websites in Browsern verwenden können, die diese Funktion nicht nativ unterstützen. Polyfills ermöglichen es Webentwicklern, eine einzige Codebasis für mehrere Browser und Browserversionen zu schreiben, selbst wenn einige dieser Browser bestimmte verwendete Funktionen nicht unterstützen.

Polyfills sind für Webentwickler wichtig, bergen aber auch Risiken: Fehlerhafte Polyfills können Websites beeinträchtigen oder Sicherheitslücken schaffen. Aus diesem Grund empfiehlt MDN bestimmte Quellen für Polyfills und ist bei der Aufnahme weiterer Quellen sehr zurückhaltend.

## Polyfills in der JavaScript-Referenz

### Ausgewählte Polyfills

Die [JavaScript-Referenzdokumentation](/de/docs/Web/JavaScript) kann auf Polyfills aus zwei Quellen verlinken:

- Die Bibliothek [core-js](https://core-js.io/).
- Die Organisation [es-shims](https://github.com/es-shims).

Die MDN-Maintainer wählen Quellen anhand der folgenden Kriterien aus:

- Konformität mit der Spezifikation der Funktion, für die sie eine Implementierung bereitstellen.
- Verbreitung in der Webentwickler-Community, erkennbar an Kennzahlen wie der Anzahl der Downloads über [npm](https://www.npmjs.com/).

### Eine zusätzliche Polyfill-Quelle vorschlagen

Jeder kann vorschlagen, dass MDN eine zusätzliche Quelle für Polyfills anerkennt, indem er [eine Diskussion im MDN-Diskussionsforum eröffnet](https://github.com/orgs/mdn/discussions). Die MDN-Maintainer gehen jedoch davon aus, dass die Zahl der von MDN verlinkten anerkannten Polyfill-Quellen sehr klein bleiben wird, um das Risiko zu verringern, Polyfills zu empfehlen, die Webentwicklern Probleme bereiten.

### Einbindung von Polyfills in Seiten

Wenn eine Seite der JavaScript-Referenzdokumentation auf einen Polyfill verlinkt, wird der Link am Ende der Seite im Abschnitt „Siehe auch“ hinzugefügt.

Der Link steht am Anfang der Liste „Siehe auch“ und hat das folgende Format:

```md
- [Polyfill for `featureName` in `project-name`](link)
```

## Polyfills in der Web-API-Referenz

### Ausgewählte Polyfills

Die [Web-API-Referenzdokumentation](/de/docs/Web/API) kann auf Polyfills verlinken, die zusammen mit der Spezifikation der jeweiligen Funktion gepflegt werden.

Beispielsweise gibt es für die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) einen Polyfill, der [im selben Repository wie die Spezifikation gepflegt wird](https://github.com/w3c/trusted-types?tab=readme-ov-file#polyfill). Daher kann die Referenzdokumentation zur Trusted Types API auf MDN auf diesen Polyfill verlinken.

### Einbindung von Polyfills in Seiten

Polyfills werden üblicherweise auf der [Übersichtsseite der API](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#web_api_page_types) eingebunden.
