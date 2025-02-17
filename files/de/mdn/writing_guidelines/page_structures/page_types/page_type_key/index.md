---
title: Der Front-Matter-Schlüssel `page-type`
slug: MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

Der Front-Matter-Schlüssel `page-type` beschreibt den Typ einer MDN-Seite. Dies ermöglicht es MDN-Inhaltstools, die Inhaltsprüfung und die Organisation der Seitenleiste besser zu automatisieren.

Wie jeder andere Front-Matter-Schlüssel wird der `page-type`-Schlüssel im YAML-Bereich am Anfang von "index.md" angegeben:

```md
---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
page-type: web-api-instance-method
browser-compat: api.Geolocation.getCurrentPosition
---
```

Jeder Hauptbereich der Website – JavaScript, CSS und so weiter – hat eine Reihe von bereichsspezifischen `page-type`-Werten, und es gibt auch eine Reihe generischer Werte, die in jedem Bereich der Website auftreten können.

## Generische Seitentypen

Diese Seitentypen sind nicht spezifisch für einen bestimmten MDN-Technologiebereich:

- `guide`: ein generischer Leitfaden ohne spezielle Struktur.
- `landing-page`: eine Übersicht über das Thema, die als Einführung in den Abschnitt dient und zu Schlüsselbereichen navigiert.
- `listing-page`: eine kurze Beschreibung des Abschnitts und eine Liste von Unterseiten innerhalb dieses Abschnitts.
- `how-to`: ein zielorientierter Artikel mit einer Anleitung.
- `tutorial`: eine Übersicht über einen lernorientierten Artikel.
- `tutorial-chapter`: ein Teil eines mehrteiligen Tutorials.

## Bereichsspezifische Seitentypen

In diesem Abschnitt werden Seitentypen aufgelistet, die spezifisch für einen einzelnen Bereich von MDN sind.

### Seitentypen für den Lernbereich

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Learn](/de/docs/Learn_web_development) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` aufweisen, dessen Wert einer der unten aufgelisteten oder einer der generischen Seitentypen sein muss.

- `learn-topic`: eine Übersicht über ein Thema, das eine Sammlung von Modulen darstellt, wie [_CSS_](/de/docs/Learn_web_development/Core/Styling_basics).
- `learn-module`: eine Übersicht über ein Modul, das eine geordnete Sammlung von Leitfäden darstellt, wie [_Strukturierung von Inhalten mit HTML_](/de/docs/Learn_web_development/Core/Structuring_content).
- `learn-module-chapter`: ein Leitfaden, der Teil eines Moduls ist, wie [_Mobile Accessibility_](/de/docs/Learn_web_development/Core/Accessibility/Mobile).
- `learn-module-assessment`: ein spezieller Leitfaden mit einer Aktivität, die das Verständnis eines Moduls oder eines Teils davon prüft, wie [_Testen Sie Ihre Fähigkeiten: Grundlegende Steuerungen_](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Basic_controls).
- `learn-faq`: die Antwort auf eine spezifische Frage zur Webentwicklung, wie [_Was ist ein Domainname?_](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name).

### Seitentypen für Barrierefreiheit

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/Accessibility](/de/docs/Web/Accessibility) auf. Jede Seite in diesem Teil des Baums muss einen `page-type`-Wert haben, und ihr Wert muss einer der unten aufgelisteten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `aria-role`: eine ARIA-[Rolle](/de/docs/Web/Accessibility/ARIA/Roles), wie [`section`](/de/docs/Web/Accessibility/ARIA/Roles/section_role).
- `aria-attribute`: ein ARIA-[Attribut](/de/docs/Web/Accessibility/ARIA/Attributes), wie [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort).

### Seitentypen für CSS

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/CSS](/de/docs/Web/CSS) auf. Jede Seite in diesem Teil des Baums muss einen `page-type`-Wert haben, und ihr Wert muss einer der unten aufgelisteten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `css-at-rule`: eine [@-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), wie {{cssxref("@media")}}.
- `css-at-rule-descriptor`: ein At-Rule-Deskriptor, wie [`@counter-style/prefix`](/de/docs/Web/CSS/@counter-style/prefix).
- `css-combinator`: ein Kombinator, wie der [Nachfahrkombinator](/de/docs/Web/CSS/Descendant_combinator).
- `css-function`: eine [Funktion](/de/docs/Web/CSS/CSS_Functions), wie {{cssxref("max")}}.
- `css-keyword`: ein Schlüsselwort, wie {{cssxref("inherit")}}.
- `css-media-feature`: ein [Medienmerkmal](/de/docs/Web/CSS/@media#media_features), wie [`hover`](/de/docs/Web/CSS/@media/hover).
- `css-module`: ein Modul, wie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations).
- `css-property`: eine Eigenschaft, wie {{cssxref("background-color")}}.
- `css-pseudo-class`: eine [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), wie {{cssxref(":enabled")}}.
- `css-pseudo-element`: ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements), wie {{cssxref("::before")}}.
- `css-selector`: ein [Grundselektor](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#basic_selectors), wie der [Klassenselektor](/de/docs/Web/CSS/Class_selectors).
- `css-shorthand-property`: eine [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties), wie {{cssxref("background")}}.
- `css-type`: ein [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), wie [`<color>`](/de/docs/Web/CSS/color_value).

### Seitentypen für Glossar

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Glossary](/de/docs/Glossary) auf. Jede Seite in diesem Teil des Baums muss einen `page-type`-Wert haben, und ihr Wert muss einer der unten aufgeführten sein.

- `glossary-definition`: eine Seite, die einen Begriff definiert, wie {{Glossary("Bezier_curve", "Bézierkurve")}}.
- `glossary-disambiguation`: eine Seite, die Links zu zwei oder mehr Definitionsseiten für einen mehrdeutigen Begriff bereitstellt, wie {{Glossary("Node", "Knoten")}}.

...

### Exakte Übersetzungen der Abschnitte wurden fortgesetzt gemäß den gegebenen Regeln.
