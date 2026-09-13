---
title: Barrierefreiheitsinformationen für Webautoren
short-title: Informationen für Webautoren
slug: Web/Accessibility/Guides/Information_for_Web_authors
l10n:
  sourceCommit: f0179562ad8e2a4dd1f0916c529792198d7e06b2
---

Dieses Dokument listet Leitlinien und Vorschriften, Anleitungen und Werkzeuge zum Überprüfen und Beheben von Barrierefreiheitsproblemen bei Websites auf.

## Leitlinien und Vorschriften

- [<abbr>ARIA</abbr> Authoring Practices Guide (<abbr>APG</abbr>)](https://www.w3.org/WAI/ARIA/apg/)
  - : Leitfaden zu den durch die Accessible Rich Internet Application (<abbr>ARIA</abbr>) Spezifikation definierten Barrierefreiheitssemantiken, um barrierefreie Web-Erlebnisse zu schaffen. Beschreibt, wie Barrierefreiheitssemantiken auf gängige Designmuster und Widgets angewendet werden, und bietet Designmuster und funktionale Beispiele.
- [Web Content Accessibility Guidelines (<abbr>WCAG</abbr>)](https://www.w3.org/WAI/standards-guidelines/wcag/)
  - : Eine weitere wichtige Reihe von Richtlinien der W3C _Web Accessibility Initiative (<abbr>WAI</abbr>)_. Die Europäische Union plant, ihre zukünftigen Barrierefreiheitsvorschriften auf diesen Richtlinien zu basieren. Diese Richtlinien werden auf der [<abbr>WAI</abbr> Interessengruppe Diskussionsliste](https://www.w3.org/WAI/about/groups/waiig/#mailinglist) diskutiert.
- [ARIA auf dieser Seite](/de/docs/Web/Accessibility/ARIA)
  - : <abbr>MDN</abbr> Leitfaden zu allen [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und [ARIA-Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), einschließlich bewährter Praktiken, verwandte Rollen und Eigenschaften sowie Beispiele.

## Anleitungen

- [Barrierefreiheit für Teams](https://digital.gov/guides/accessibility-for-teams/)
  - : Ein kurzer Leitfaden der Technology Transformation Services der U.S. General Services Administration, der mehrere Barrierefreiheitsthemen behandelt und Links zu "wie man" Videos und zu verwandten WCAG-Referenzen enthält.
- [Barrierefreies Webseitenerstellen](https://www.ibm.com/able/requirements/requirements/)
  - : IBM hat ihre Barrierefreiheitsanforderungen, die erfüllt werden müssen, öffentlich und interaktiv bereitgestellt.

## Automatisierte Überprüfung & Reparatur

Verwenden Sie ein Werkzeug, um schnell nach häufigen Fehlern in Ihrem Browser zu suchen.

- [HTML CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- [aXe](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
- [Lighthouse Accessibility Audit](https://developer.chrome.com/docs/lighthouse/overview/)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [<abbr>WAVE</abbr>](https://wave.webaim.org/extension/)

Werkzeuge zur Integration in Ihren Build-Prozess, die programmatisch Barrierefreiheitstests hinzufügen, damit Sie Fehler beim Entwickeln Ihrer Webanwendung erkennen können:

- [axe-core](https://github.com/dequelabs/axe-core)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Lighthouse Audits](https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md#using-programmatically)
- [AccessLint.js](https://github.com/accesslint/accesslint.js/tree/master)

{{Glossary("Continuous_integration", "Kontinuierliche Integration")}} Werkzeuge, um Barrierefreiheitsprobleme in Ihren GitHub Pull-Requests zu finden:

- [AccessLint](https://www.accesslint.com/)

Obwohl es am besten ist, Ihre Webanwendungen mit echten Benutzern zu testen, können Sie Farbenblindheit, schlechtes Sehvermögen, niedrigen Kontrast und Zoomen simulieren. Sie sollten Ihre Seite immer ohne Maus und Touch testen, um die Tastaturnavigation zu testen. Vielleicht möchten Sie Ihre Seite auch mittels Sprachbefehle ausprobieren. Versuchen Sie, Ihre Maus zu deaktivieren und verwenden Sie Browser-Erweiterungen wie [Web Disability Simulator](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla).
