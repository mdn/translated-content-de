---
title: Der page-type Frontmatter-Schlüssel
slug: MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Der `page-type` Frontmatter-Schlüssel beschreibt den Typ einer MDN-Seite. Dadurch können MDN-Inhaltstools besser die Inhaltsprüfung und die Organisation in der Seitenleiste automatisieren.

Wie jeder andere Frontmatter-Schlüssel wird der `page-type` Schlüssel im YAML am Beginn von "index.md" spezifiziert:

```md
---
title: 100 Continue
slug: Web/HTTP/Reference/Status/100
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.100
sidebar: http
---
```

Jeder Hauptbereich der Website — JavaScript, CSS usw. — hat einen Satz von bereichsspezifischen `page-type` Werten, und es gibt auch einen Satz generischer Werte, die in jedem Bereich der Website erscheinen können.

## Generische Seitentypen

Diese Seitentypen sind nicht spezifisch für einen bestimmten MDN-Technologiebereich:

- `guide`: ein generischer Leitfaden ohne spezifische Struktur.
- `landing-page`: eine Übersicht über das Thema, Einleitung zur Sektion und Navigation zu wichtigen Bereichen.
- `listing-page`: eine kurze Beschreibung der Sektion und eine Liste von Unterseiten innerhalb dieser Sektion.
- `how-to`: eine zielorientierte Anleitung.
- `tutorial`: eine Übersicht über einen lernorientierten Artikel.
- `tutorial-chapter`: ein Teil eines mehrteiligen Tutorials.

## Bereichsspezifische Seitentypen

Dieser Abschnitt listet Seitentypen auf, die spezifisch für einen einzigen Bereich von MDN sind.

### Seitentypen für den Lernbereich

Dieser Abschnitt listet `page-type` Werte für Seiten unter [Lernen](/de/docs/Learn_web_development) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der generischen Seitentypen sein.

- `learn-topic`: eine Übersicht über ein Thema, das heißt, eine Sammlung von Modulen wie [_CSS_](/de/docs/Learn_web_development/Core/Styling_basics).
- `learn-module`: eine Übersicht über ein Modul, das heißt, eine geordnete Sammlung von Leitfäden, wie [_Strukturierung von Inhalten mit HTML_](/de/docs/Learn_web_development/Core/Structuring_content).
- `learn-module-chapter`: ein Leitfaden, der Teil eines Moduls ist, wie [_Mobile Zugänglichkeit_](/de/docs/Learn_web_development/Core/Accessibility/Mobile).
- `learn-module-assessment`: ein spezieller Leitfaden mit einer Aktivität, die es ermöglicht, das Verständnis eines Moduls oder eines Teils davon zu bewerten, wie [_Testen Sie Ihre Fähigkeiten: Formulare und Buttons_](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons).
- `learn-faq`: die Antwort auf eine spezifische Frage zur Webentwicklung, wie [_Was ist ein Domainname?_](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name).

### Seitentypen für Zugänglichkeit

Dieser Abschnitt listet `page-type` Werte für Seiten unter [Web/Accessibility](/de/docs/Web/Accessibility) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `aria-role`: eine ARIA [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles), wie [`section`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role).
- `aria-attribute`: ein ARIA [Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), wie [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort).

### CSS-Seitentypen

Dieser Abschnitt listet `page-type` Werte für Seiten unter [Web/CSS](/de/docs/Web/CSS) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `css-at-rule`: eine [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules), wie {{cssxref("@media")}}.
- `css-at-rule-descriptor`: ein at-rule Deskriptor, wie [`@counter-style/prefix`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/prefix).
- `css-combinator`: ein Kombinator, wie der [Nachfolgerkombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator).
- `css-function`: eine [Funktion](/de/docs/Web/CSS/Reference/Values/Functions), wie {{cssxref("max")}}.
- `css-keyword`: ein Schlüsselwort, wie {{cssxref("inherit")}}.
- `css-media-feature`: ein [media feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), wie {{cssxref("@media/hover")}}.
- `css-module`: ein Modul, wie [CSS Animationen](/de/docs/Web/CSS/Guides/Animations).
- `css-property`: eine Eigenschaft, wie {{cssxref("background-color")}}.
- `css-pseudo-class`: eine [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), wie {{cssxref(":enabled")}}.
- `css-pseudo-element`: ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), wie {{cssxref("::before")}}.
- `css-selector`: ein [Basis-Selektor](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#basic_selectors), wie der [Klassen-Selektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors).
- `css-shorthand-property`: eine [kurze Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties), wie {{cssxref("background")}}.
- `css-type`: ein [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types), wie {{cssxref("&lt;color&gt;")}}.
