---
title: Barrierefreiheitsinformationen für Web-Autoren
slug: Web/Accessibility/Information_for_Web_authors
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

## Richtlinien und Vorschriften

- [<abbr>ARIA</abbr> Authoring Practices Guide (<abbr>APG</abbr>)](https://www.w3.org/WAI/ARIA/apg/)

  - : Leitfaden zu den Barrierefreiheitssemantiken, die durch die Accessible Rich Internet Application (<abbr>ARIA</abbr>)-Spezifikation definiert wurden, um barrierefreie Web-Erlebnisse zu schaffen. Beschreibt, wie Barrierefreiheitssemantiken auf gängige Designmuster und Widgets angewendet werden, und bietet Designmuster und funktionale Beispiele.

- [Web Content Accessibility Guidelines (<abbr>WCAG</abbr>)](https://www.w3.org/WAI/standards-guidelines/wcag/)

  - : Eine weitere wichtige Sammlung von Richtlinien der W3C _Web Accessibility Initiative (<abbr>WAI</abbr>)_. Die Europäische Union plant, ihre kommenden Barrierefreiheitsvorschriften auf diesen Richtlinien zu basieren. Diese Richtlinien werden auf der [<abbr>WAI</abbr> Interessen-Gruppe Diskussionsliste](https://www.w3.org/WAI/about/groups/waiig/#mailinglist) diskutiert.

- [ARIA auf dieser Seite](/de/docs/Web/Accessibility/ARIA)
  - : <abbr>MDN</abbr> Leitfaden zu allen [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles) und [ARIA-Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes), einschließlich bewährter Praktiken, verwandten Rollen und Eigenschaften sowie Beispiele.

## Anleitungen

- [Barrierefreiheit für Teams](https://digital.gov/guides/accessibility-for-teams/)

  - : Ein kurzer Leitfaden der Technology Transformation Services der U.S. General Services Administration, der mehrere Barrierefreiheitsthemen behandelt mit Links zu "How-to"-Videos und zu verwandten WCAG-Referenzen.

- [Autorenschaft barrierefreier Webseiten](https://www.ibm.com/able/requirements/requirements/)
  - : IBM hat seine Barrierefreiheitsanforderungen veröffentlicht, die erfüllt werden müssen, und sie interaktiv gestaltet.

## Automatisierte Prüfung & Reparatur

Verwenden Sie ein Tool, um schnell nach häufigen Fehlern in Ihrem Browser zu suchen.

- [HTML CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- [aXe](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
- [Lighthouse Accessibility Audit](https://developer.chrome.com/docs/lighthouse/overview/)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [<abbr>WAVE</abbr>](https://wave.webaim.org/extension/)

Tools, die in Ihren Build-Prozess integriert werden können, um programmatisch Barrierefreiheitstests hinzuzufügen, sodass Sie Fehler entdecken können, während Sie Ihre Webanwendung entwickeln:

- [axe-core](https://github.com/dequelabs/axe-core)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Lighthouse Audits](https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md#using-programmatically)
- [AccessLint.js](https://github.com/accesslint/accesslint.js/tree/master)

Kontinuierliche Integrationstools, um Barrierefreiheitsprobleme in Ihren GitHub-Pull-Anfragen zu finden:

- [AccessLint](https://accesslint.com/)

Während es am besten ist, Ihre Webanwendungen mit echten Benutzern zu testen, können Sie Farbenblindheit, eingeschränktes Sehen sowie niedrigen Kontrast und das Zoomen simulieren. Sie sollten Ihre Seite immer ohne Maus und Berührung zur Prüfung der Tastaturnavigation testen. Möglicherweise möchten Sie Ihre Seite auch mit Sprachbefehlen ausprobieren. Versuchen Sie, Ihre Maus zu deaktivieren und verwenden Sie Browser-Erweiterungen wie [Web Disability Simulator](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla).
