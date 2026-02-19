---
title: Barrierefreiheitsinformationen für Webautoren
short-title: Informationen für Webautoren
slug: Web/Accessibility/Guides/Information_for_Web_authors
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

Dieses Dokument listet Richtlinien und Vorschriften, Anleitungen und Werkzeuge auf, um Barrierefreiheitsprobleme auf Webseiten zu überprüfen und zu beheben.

## Richtlinien und Vorschriften

- [Leitfaden für ARIA-Autorenpraktiken (<abbr>APG</abbr>)](https://www.w3.org/WAI/ARIA/apg/)
  - : Leitfaden zu den Barrierefreiheitssemantiken, die durch die Accessible Rich Internet Application (<abbr>ARIA</abbr>)-Spezifikation definiert sind, um barrierefreie Web-Erfahrungen zu schaffen. Beschreibt, wie man Barrierefreiheitssemantiken auf gängige Designmuster und Widgets anwendet, und bietet Designmuster sowie funktionale Beispiele.
- [Richtlinien für barrierefreie Webinhalte (<abbr>WCAG</abbr>)](https://www.w3.org/WAI/standards-guidelines/wcag/)
  - : Ein weiterer wichtiger Satz von Richtlinien der W3C _Web Accessibility Initiative (<abbr>WAI</abbr>)_. Die Europäische Union plant, ihre bevorstehenden Barrierefreiheitsvorschriften auf diesen Richtlinien zu basieren. Diese Richtlinien werden in der [Diskussionsgruppe der <abbr>WAI</abbr> Interessensgruppe](https://www.w3.org/WAI/about/groups/waiig/#mailinglist) diskutiert.
- [ARIA auf dieser Seite](/de/docs/Web/Accessibility/ARIA)
  - : <abbr>MDN</abbr>-Leitfaden zu allen [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und [ARIA-Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), einschließlich Best Practices, verwandten Rollen und Eigenschaften sowie Beispielen.

## Anleitungen

- [Barrierefreiheit für Teams](https://digital.gov/guides/accessibility-for-teams/)
  - : Ein kurzer Leitfaden von den Technology Transformation Services der U.S. General Services Administration, der mehrere Barrierefreiheitsthemen behandelt und Links zu "Anleitungs"-Videos sowie zu verwandten WCAG-Referenzen enthält.
- [Barrierefreies Webseiten-Verfassen](https://www.ibm.com/able/requirements/requirements/)
  - : IBM hat ihre Barrierefreiheitsanforderungen, die erfüllt werden müssen, öffentlich und interaktiv zugänglich gemacht.

## Automatisierte Überprüfung & Reparatur

Verwenden Sie ein Tool, um schnell nach häufigen Fehlern in Ihrem Browser zu suchen.

- [HTML CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- [aXe](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
- [Lighthouse Accessibility Audit](https://developer.chrome.com/docs/lighthouse/overview/)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [WAVE](https://wave.webaim.org/extension/)

Werkzeuge zur Integration in Ihren Build-Prozess, um programmatisch Barrierefreiheitsprüfungen hinzuzufügen, damit Sie Fehler bei der Entwicklung Ihrer Webanwendung erkennen können:

- [axe-core](https://github.com/dequelabs/axe-core)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Lighthouse Audits](https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md#using-programmatically)
- [AccessLint.js](https://github.com/accesslint/accesslint.js/tree/master)

Tools zur {{Glossary("Continuous_integration", "kontinuierlichen Integration")}}, um Barrierefreiheitsprobleme in Ihren GitHub-Pull-Requests zu finden:

- [AccessLint](https://www.accesslint.com/)

Obwohl es am besten ist, Ihre Webanwendungen mit echten Benutzern zu testen, können Sie Farbenblindheit, Sehbehinderung, geringe und hohe Kontraste sowie Zoomen simulieren. Sie sollten Ihre Seite immer ohne Maus und Touch auf Tastaturnavigation testen. Zudem könnte es interessant sein, Ihre Seite mit Sprachbefehlen auszuprobieren. Versuchen Sie, Ihre Maus zu deaktivieren und verwenden Sie Browsererweiterungen wie den [Web Disability Simulator](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla).
