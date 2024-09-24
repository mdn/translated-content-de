---
title: Barrierefreiheitsinformationen für Webautoren
slug: Web/Accessibility/Information_for_Web_authors
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

## Richtlinien und Vorschriften

- [<abbr>ARIA</abbr> Authoring Practices Guide (<abbr>APG</abbr>)](https://www.w3.org/WAI/ARIA/apg/)

  - : Leitfaden zu den Barrierefreiheitssemantiken, die in der Spezifikation der Accessible Rich Internet Application (<abbr>ARIA</abbr>) definiert sind, um barrierefreie Web-Erlebnisse zu schaffen. Beschreibt, wie Barrierefreiheitssemantiken auf gängige Designmuster und Widgets angewendet werden können, und bietet Designmuster und funktionale Beispiele.

- [Web Content Accessibility Guidelines (<abbr>WCAG</abbr>)](https://www.w3.org/WAI/standards-guidelines/wcag/)

  - : Ein weiterer wichtiger Satz von Richtlinien der W3C _Web Accessibility Initiative (<abbr>WAI</abbr>)_. Die Europäische Union plant, ihre kommenden Barrierefreiheitsvorschriften auf diesen Richtlinien zu basieren. Diese Richtlinien werden in der [<abbr>WAI</abbr> Interessengruppe-Diskussionsliste](https://www.w3.org/WAI/about/groups/waiig/#mailinglist) diskutiert.

- [ARIA auf dieser Seite](/de/docs/Web/Accessibility/ARIA)
  - : <abbr>MDN</abbr>-Leitfaden zu allen [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles) und [ARIA-Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes), einschließlich bewährter Praktiken, verwandter Rollen und Eigenschaften sowie Beispielen.

## Anleitungen

- [Barrierefreiheit für Teams](https://digital.gov/guides/accessibility-for-teams/)

  - : Ein kurzer Leitfaden der Technologieumwandlungsdienste der U.S. General Services Administration, der mehrere Barrierefreiheitsthemen behandelt und Links zu "How-to"-Videos sowie zu verwandten WCAG-Referenzen bietet.

- [Barrierefreies Erstellen von Webseiten](https://www.ibm.com/able/requirements/requirements/)
  - : IBM hat ihre Anforderungen an Barrierefreiheit, die erfüllt werden müssen, öffentlich und interaktiv gemacht.

## Automatisiertes Prüfen & Reparieren

Verwenden Sie ein Tool, um schnell auf häufige Fehler in Ihrem Browser zu überprüfen.

- [HTML CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- [aXe](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
- [Lighthouse Accessibility Audit](https://developer.chrome.com/docs/lighthouse/overview/)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [<abbr>WAVE</abbr>](https://wave.webaim.org/extension/)

Werkzeuge zur Integration in Ihren Build-Prozess, die programmgesteuert Barrierefreiheits-Tests hinzufügen, damit Sie Fehler erkennen können, während Sie Ihre Webanwendung entwickeln:

- [axe-core](https://github.com/dequelabs/axe-core)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Lighthouse Audits](https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md#using-programmatically)
- [AccessLint.js](https://github.com/accesslint/accesslint.js/tree/master)

Tools zur kontinuierlichen Integration, um Barrierefreiheitsprobleme in Ihren GitHub-Pull-Requests zu finden:

- [AccessLint](https://accesslint.com/)

Es ist am besten, Ihre Webanwendungen mit echten Nutzern zu testen, aber Sie können Farbenblindheit, eingeschränktes Sehen, geringe und Kontraste sowie Zoom simulieren. Sie sollten Ihre Seite immer ohne Maus und Berührung testen, um die Tastaturnavigation zu überprüfen. Vielleicht möchten Sie auch versuchen, Ihre Seite mit Sprachbefehlen zu verwenden. Versuchen Sie, Ihre Maus zu deaktivieren und verwenden Sie Browsererweiterungen wie [Web Disability Simulator](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla).
