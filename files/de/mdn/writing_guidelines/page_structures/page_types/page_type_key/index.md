---
title: Der Front-Matter-Schlüssel `page-type`
slug: MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Der `page-type`-Schlüssel im Front Matter beschreibt den Typ einer MDN-Seite.
Dies ermöglicht es MDN-Inhaltswerkzeugen, die Inhaltsüberprüfung und die Organisation der Seitenleiste besser zu automatisieren.

Wie bei jedem anderen Front-Matter-Schlüssel wird der `page-type`-Schlüssel im YAML am Anfang von "index.md" angegeben:

```md
---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
page-type: web-api-instance-method
browser-compat: api.Geolocation.getCurrentPosition
---
```

Jeder Hauptbereich der Seite – JavaScript, CSS usw. – hat einen Satz von domänenspezifischen `page-type`-Werten. Es gibt auch eine Reihe von generischen Werten, die in jedem Bereich der Seite vorkommen können.

## Generische Seitentypen

Diese Seitentypen sind nicht spezifisch für einen bestimmten MDN-Technologiebereich:

- `guide`: ein generischer Leitfaden ohne spezifische Struktur.
- `landing-page`: eine Übersicht über das Thema, eine Einführung in den Abschnitt und die Navigation zu den Schlüsselbereichen.
- `listing-page`: eine kurze Beschreibung des Abschnitts und eine Liste von Unterseiten innerhalb dieses Abschnitts.
- `how-to`: ein zielorientierter Artikel, der eine Anleitung bietet.
- `tutorial`: ein Überblick über einen lernorientierten Artikel.
- `tutorial-chapter`: ein Teil eines mehrteiligen Tutorials.

## Domänenspezifische Seitentypen

Dieser Abschnitt listet Seitentypen auf, die spezifisch für einen einzelnen Bereich von MDN sind.

### Typen für den Bereich Lernen

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Learn](/de/docs/Learn_web_development) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der generischen Seitentypen sein.

- `learn-topic`: ein Überblick über ein Thema, also eine Sammlung von Modulen wie [_CSS_](/de/docs/Learn_web_development/Core/Styling_basics).
- `learn-module`: ein Überblick über ein Modul, das eine geordnete Sammlung von Leitfäden ist, wie [_Structuring content with HTML_](/de/docs/Learn_web_development/Core/Structuring_content).
- `learn-module-chapter`: ein Leitfaden, der Teil eines Moduls ist, wie [_Mobile accessibility_](/de/docs/Learn_web_development/Core/Accessibility/Mobile).
- `learn-module-assessment`: ein spezieller Leitfaden mit einer Aktivität, die die Kenntnisse eines Moduls oder eines Teils davon bewertet, wie [_Test your skills: basic controls_](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Basic_controls).
- `learn-faq`: die Antwort auf eine spezifische Frage zur Webentwicklung, wie [_What is a domain name?_](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name).

### Seitentypen für Barrierefreiheit

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/Accessibility](/de/docs/Web/Accessibility) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `aria-role`: eine ARIA-[Rolle](/de/docs/Web/Accessibility/ARIA/Roles), wie [`section`](/de/docs/Web/Accessibility/ARIA/Roles/section_role).
- `aria-attribute`: ein ARIA-[Attribut](/de/docs/Web/Accessibility/ARIA/Attributes), wie [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort).

### Seitentypen für CSS

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/CSS](/de/docs/Web/CSS) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `css-at-rule`: eine [At-Regel](/de/docs/Web/CSS/At-rule), wie {{cssxref("@media")}}.
- `css-at-rule-descriptor`: ein At-Regel-Descriptor, wie [`@counter-style/prefix`](/de/docs/Web/CSS/@counter-style/prefix).
- `css-combinator`: ein Kombinator, wie der [Nachfahre-Kombinator](/de/docs/Web/CSS/Descendant_combinator).
- `css-function`: eine [Funktion](/de/docs/Web/CSS/CSS_Functions), wie {{cssxref("max")}}.
- `css-keyword`: ein Schlüsselwort, wie {{cssxref("inherit")}}.
- `css-media-feature`: ein [Media-Feature](/de/docs/Web/CSS/@media#media_features), wie [`hover`](/de/docs/Web/CSS/@media/hover).
- `css-module`: ein Modul, wie [CSS Animations](/de/docs/Web/CSS/CSS_animations).
- `css-property`: eine Eigenschaft, wie {{cssxref("background-color")}}.
- `css-pseudo-class`: eine [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), wie {{cssxref(":enabled")}}.
- `css-pseudo-element`: ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements), wie {{cssxref("::before")}}.
- `css-selector`: ein [Basis-Selektor](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#basic_selectors), wie der [Klassenselektor](/de/docs/Web/CSS/Class_selectors).
- `css-shorthand-property`: eine [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties), wie {{cssxref("background")}}.
- `css-type`: ein [Datentyp](/de/docs/Web/CSS/CSS_Types), wie [`<color>`](/de/docs/Web/CSS/color_value).

### Glossar-Seitentypen

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Glossary](/de/docs/Glossary) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten sein.

- `glossary-definition`: eine Seite, die einen Begriff definiert, wie {{Glossary("Bezier_curve", "Bézier-Kurve")}}.
- `glossary-disambiguation`: eine Seite, die Links zu zwei oder mehr Definitionsseiten für einen mehrdeutigen Begriff bereitstellt, wie {{Glossary("Node", "Node")}}.

### Seitentypen für HTML

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/HTML](/de/docs/Web/HTML) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `html-attribute`: ein HTML-Attribut, wie [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete).
- `html-attribute-value`: ein einzelner Wert für ein HTML-Attribut, wie [`dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch).
- `html-element`: ein HTML-Element, wie [`<button>`](/de/docs/Web/HTML/Element/button).

... (Der Text geht ähnlich für jeden Technologiesektor weiter.) ...
