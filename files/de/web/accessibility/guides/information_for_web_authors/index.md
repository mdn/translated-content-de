---
title: Barrierefreiheitsinformationen für Web-Autoren
short-title: Informationen für Web-Autoren
slug: Web/Accessibility/Guides/Information_for_Web_authors
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

Dieses Dokument listet Leitlinien und Vorschriften, Anleitungen und Werkzeuge zur Überprüfung und Behebung von Barrierefreiheitsproblemen auf Webseiten auf.

## Leitlinien und Vorschriften

- [<abbr>ARIA</abbr> Authoring Practices Guide (<abbr>APG</abbr>)](https://www.w3.org/WAI/ARIA/apg/)
  - : Leitfaden zu den Barrierefreiheits-Semantiken, die von der Accessible Rich Internet Application (<abbr>ARIA</abbr>)-Spezifikation definiert werden, um barrierefreie Web-Erfahrungen zu schaffen. Beschreibt, wie Barrierefreiheits-Semantiken auf gängige Designmuster und Widgets angewendet werden, und bietet Designmuster sowie funktionale Beispiele.
- [Web Content Accessibility Guidelines (<abbr>WCAG</abbr>)](https://www.w3.org/WAI/standards-guidelines/wcag/)
  - : Ein weiteres wichtiges Set von Leitlinien der W3C _Web Accessibility Initiative (<abbr>WAI</abbr>)_. Die Europäische Union plant, ihre kommenden Barrierefreiheitsvorschriften auf diesen Leitlinien zu basieren. Diese Leitlinien werden in der [<abbr>WAI</abbr> Interessensgruppen-Diskussionsliste](https://www.w3.org/WAI/about/groups/waiig/#mailinglist) besprochen.
- [ARIA auf dieser Seite](/de/docs/Web/Accessibility/ARIA)
  - : <abbr>MDN</abbr> Leitfaden zu allen [ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und [ARIA Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), einschließlich bewährter Verfahren, verwandter Rollen und Eigenschaften, sowie Beispiele.

## Anleitungen

- [Barrierefreiheit für Teams](https://digital.gov/guides/accessibility-for-teams/)
  - : Ein kurzer Leitfaden von den Technology Transformation Services der U.S. General Services Administration, der mehrere Themen zur Barrierefreiheit abdeckt, mit Links zu "How-to"-Videos und zu verwandten WCAG-Referenzen.
- [Barrierefreies Webseitenerstellen](https://www.ibm.com/able/requirements/requirements/)
  - : IBM hat seine Barrierefreiheitsanforderungen, die erfüllt werden müssen, öffentlich und interaktiv gemacht.

## Automatisierte Überprüfung & Reparatur

Verwenden Sie ein Werkzeug, um schnell nach häufigen Fehlern in Ihrem Browser zu suchen.

- [HTML CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- [aXe](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
- [Lighthouse Accessibility Audit](https://developer.chrome.com/docs/lighthouse/overview/)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [<abbr>WAVE</abbr>](https://wave.webaim.org/extension/)

Tools, die in Ihren Build-Prozess integriert werden können, um Barrierefreiheits-Tests programmgesteuert hinzuzufügen, damit Sie Fehler während der Entwicklung Ihrer Webanwendung erkennen können:

- [axe-core](https://github.com/dequelabs/axe-core)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Lighthouse Audits](https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md#using-programmatically)
- [AccessLint.js](https://github.com/accesslint/accesslint.js/tree/master)

{{Glossary("Continuous_integration", "Kontinuierliche Integrations-")}} Tools zur Erkennung von Barrierefreiheitsproblemen in Ihren GitHub Pull-Anfragen:

- [AccessLint](https://accesslint.com/)

Es ist am besten, Ihre Webanwendungen mit echten Benutzern zu testen. Sie können jedoch auch Farbenblindheit, Sehschwäche, niedrigen Kontrast und Zoom simulieren. Sie sollten Ihre Seite immer ohne Maus und Berührung testen, um die Tastaturnavigation zu prüfen. Sie könnten auch versuchen, Ihre Seite mit Sprachbefehlen zu nutzen. Versuchen Sie, Ihre Maus zu deaktivieren und verwenden Sie Browser-Erweiterungen wie den [Web Disability Simulator](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla).
