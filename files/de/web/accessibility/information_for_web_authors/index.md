---
title: Barrierefreiheitsinformationen für Webautoren
slug: Web/Accessibility/Information_for_Web_authors
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

## Richtlinien und Vorschriften

- [<abbr>ARIA</abbr> Authoring Practices Guide (<abbr>APG</abbr>)](https://www.w3.org/WAI/ARIA/apg/)

  - : Leitfaden zu Zugänglichkeit-Semantiken, die durch die Accessible Rich Internet Application (<abbr>ARIA</abbr>)-Spezifikation definiert werden, um zugängliche Web-Erlebnisse zu schaffen. Beschreibt, wie Zugänglichkeit-Semantiken auf gängige Designmuster und Widgets angewendet werden, und bietet Designmuster und funktionale Beispiele.

- [Web Content Accessibility Guidelines (<abbr>WCAG</abbr>)](https://www.w3.org/WAI/standards-guidelines/wcag/)

  - : Ein weiterer wichtiger Satz von Richtlinien der W3C _Web Accessibility Initiative (<abbr>WAI</abbr>)_. Die Europäische Union plant, ihre bevorstehenden Vorschriften zur Barrierefreiheit auf diesen Richtlinien zu basieren. Diese Richtlinien werden in der [<abbr>WAI</abbr> Interessengruppe-Diskussionsliste](https://www.w3.org/WAI/about/groups/waiig/#mailinglist) erörtert.

- [ARIA auf dieser Seite](/de/docs/Web/Accessibility/ARIA)
  - : <abbr>MDN</abbr>-Leitfaden zu allen [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles) und [ARIA-Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes), einschließlich Best Practices, verwandter Rollen und Eigenschaften sowie Beispiele.

## Anleitungen

- [Barrierefreiheit für Teams](https://digital.gov/guides/accessibility-for-teams/)

  - : Ein kurzer Leitfaden von den Technology Transformation Services der US-Generaldienstverwaltung, der mehrere Themen zur Barrierefreiheit mit Links zu „How-to“-Videos und zu verwandten WCAG-Verweisen abdeckt.

- [Barrierefreies Webseiten-Authoring](https://www.ibm.com/able/requirements/requirements/)
  - : IBM hat seine Barrierefreiheitsanforderungen, die erfüllt werden müssen, öffentlich und interaktiv bereitgestellt.

## Automatisierte Prüfung & Reparatur

Verwenden Sie ein Tool, um schnell nach häufigen Fehlern in Ihrem Browser zu suchen.

- [HTML CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- [aXe](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
- [Lighthouse Accessibility Audit](https://developer.chrome.com/docs/lighthouse/overview/)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [<abbr>WAVE</abbr>](https://wave.webaim.org/extension/)

Tools zur Integration in Ihren Build-Prozess, die programmgesteuert Barrierefreiheitstests hinzufügen, sodass Fehler während der Entwicklung Ihrer Webanwendung erkannt werden können:

- [axe-core](https://github.com/dequelabs/axe-core)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Lighthouse Audits](https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md#using-programmatically)
- [AccessLint.js](https://github.com/accesslint/accesslint.js/tree/master)

Tools zur kontinuierlichen Integration zum Finden von Barrierefreiheitsproblemen in Ihren GitHub-Pull-Requests:

- [AccessLint](https://accesslint.com/)

Obwohl es am besten ist, Ihre Webanwendungen mit echten Benutzern zu testen, können Sie Farbenblindheit, schlechtes Sehvermögen, geringen Kontrast und Vergrößerung simulieren. Sie sollten Ihre Seite immer ohne Maus und Touch testen, um die Tastaturnavigation zu prüfen. Vielleicht möchten Sie Ihre Seite auch mit Sprachbefehlen ausprobieren. Versuchen Sie, Ihre Maus zu deaktivieren und Browser-Erweiterungen wie den [Web Disability Simulator](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla) zu verwenden.
