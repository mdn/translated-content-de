---
title: Barrierefreiheitsinformation für Webautoren
short-title: Informationen für Webautoren
slug: Web/Accessibility/Guides/Information_for_Web_authors
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Dieses Dokument listet Leitlinien und Vorschriften, Anleitungen und Werkzeuge zur Überprüfung und Behebung von Barrierefreiheitsproblemen auf Websites auf.

## Leitlinien und Vorschriften

- [<abbr>ARIA</abbr>-Autorenpraktiken-Leitfaden (<abbr>APG</abbr>)](https://www.w3.org/WAI/ARIA/apg/)
  - : Leitfaden zu Barrierefreiheitssemantiken, die in der Accessible Rich Internet Application (<abbr>ARIA</abbr>)-Spezifikation definiert sind, um barrierefreie Web-Erlebnisse zu schaffen. Beschreibt, wie Barrierefreiheitssemantiken auf gängige Designmuster und Widgets angewendet werden, und bietet Designmuster und funktionale Beispiele.
- [Web Content Accessibility Guidelines (<abbr>WCAG</abbr>)](https://www.w3.org/WAI/standards-guidelines/wcag/)
  - : Ein weiterer wichtiger Satz von Leitlinien der W3C _Web Accessibility Initiative (<abbr>WAI</abbr>)_. Die Europäische Union beabsichtigt, ihre kommenden Barrierefreiheitsvorschriften auf diesen Leitlinien zu basieren. Diese Leitlinien werden auf der [<abbr>WAI</abbr> Interessengruppen-Diskussionsliste](https://www.w3.org/WAI/about/groups/waiig/#mailinglist) diskutiert.
- [ARIA auf dieser Seite](/de/docs/Web/Accessibility/ARIA)
  - : <abbr>MDN</abbr>-Leitfaden zu allen [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und [ARIA-Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), einschließlich bewährter Praktiken, verwandter Rollen und Eigenschaften sowie Beispiele.

## Anleitungen

- [Barrierefreiheit für Teams](https://digital.gov/guides/accessibility-for-teams/)
  - : Ein kurzer Leitfaden der Technology Transformation Services der U.S. General Services Administration, der mehrere Barrierefreiheitsthemen mit Links zu "How-to"-Videos und zu verwandten WCAG-Referenzen abdeckt.
- [Barrierefreies Web-Seiten-Autorisieren](https://www.ibm.com/able/requirements/requirements/)
  - : IBM hat ihre Barrierefreiheitsanforderungen, die erfüllt werden müssen, öffentlich und interaktiv gemacht.

## Automatisierte Überprüfung & Reparatur

Verwenden Sie ein Werkzeug, um schnell nach häufigen Fehlern in Ihrem Browser zu suchen.

- [HTML CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- [aXe](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
- [Lighthouse Accessibility Audit](https://developer.chrome.com/docs/lighthouse/overview/)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [<abbr>WAVE</abbr>](https://wave.webaim.org/extension/)

Werkzeuge zur Integration in Ihren Build-Prozess, um programmatisch Barrierefreiheits-Tests hinzuzufügen, damit Sie Fehler während der Entwicklung Ihrer Webanwendung erkennen können:

- [axe-core](https://github.com/dequelabs/axe-core)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Lighthouse Audits](https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md#using-programmatically)
- [AccessLint.js](https://github.com/accesslint/accesslint.js/tree/master)

Tools für die kontinuierliche Integration, um Barrierefreiheitsprobleme in Ihren GitHub-Pull-Requests zu finden:

- [AccessLint](https://accesslint.com/)

Obwohl es am besten ist, Ihre Webanwendung mit echten Benutzern zu testen, können Sie Farbenblindheit, eingeschränktes Sehen, niedrigen Kontrast und Zoom simulieren. Sie sollten Ihre Seite immer ohne Maus und Touch testen, um die Tastaturnavigation zu prüfen. Es kann auch sinnvoll sein, Ihre Seite mit Sprachbefehlen auszuprobieren. Versuchen Sie, Ihre Maus zu deaktivieren und verwenden Sie Browsererweiterungen wie [Web Disability Simulator](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla).
