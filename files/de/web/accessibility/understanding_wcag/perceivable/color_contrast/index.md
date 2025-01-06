---
title: Farbkontrast
slug: Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{AccessibilitySidebar}}

Der [Farbkontrast](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) zwischen Hintergrund und Vordergrundinhalten (also normalerweise Text) sollte groß genug sein, um die Lesbarkeit zu gewährleisten.

Bei der Gestaltung lesbarer Oberflächen für unterschiedliche Sehfähigkeiten empfehlen die WCAG-Richtlinien die folgenden Kontrastverhältnisse:

| Art des Inhalts                                                                       | Mindestverhältnis (AA-Bewertung) | Erweitertes Verhältnis (AAA-Bewertung) |
| ------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------- |
| Fließtext                                                                             | 4.5 : 1                          | 7 : 1                                  |
| Großer Text (120-150% größer als Fließtext)                                           | 3 : 1                            | 4.5 : 1                                |
| Aktive Benutzeroberflächenkomponenten und grafische Objekte wie Symbole und Diagramme | 3 : 1                            | Nicht definiert                        |

Diese Verhältnisse gelten nicht für „nebensächlichen“ Text, wie inaktive Steuerelemente, Logotypen oder rein dekorativen Text.

Siehe den Abschnitt [Lösung](#lösung) unten für weitere Informationen.

Ein guter Farbkontrast auf Ihrer Website kommt allen Nutzern zugute, ist jedoch besonders vorteilhaft für Nutzer mit bestimmten Arten von Farbfehlsichtigkeit und ähnlichen Zuständen, die einen niedrigen Kontrast erleben und Schwierigkeiten haben, ähnliche Farben zu unterscheiden. Dies liegt daran, dass sie helle und dunkle Bereiche nicht so leicht erkennen wie solche ohne derartige Bedingungen und daher Schwierigkeiten haben, Kanten, Grenzen und andere Details zu sehen.

Ein cooles Design auf Ihrer Website zu haben, ist gut, aber das Design ist wertlos, wenn Ihre Nutzer Ihre Inhalte nicht lesen können.

## Beispiele

Sehen wir uns ein paar einfache HTML- und CSS-Codebeispiele an:

```html
<div class="good">Good contrast</div>
<div class="bad">Bad contrast</div>
```

```css
div {
  /* General div styles here */
}

.good {
  background-color: #5a80a9;
}

.bad {
  background-color: #400064;
}
```

Beide Textstücke haben ihre schwarze Standardfarbe.

### Guter Kontrast

Das "gute" `<div>` hat einen neonblauen Hintergrund, was den Text leicht lesbar macht:

```html
<div class="good">Good contrast</div>
```

```css
div {
  font-family: sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: 250px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px black;
}

.good {
  background-color: #5a80a9;
}
```

{{EmbedLiveSample('Good_Contrast', '100%', '100')}}

### Schlechter Kontrast

Das "schlechte" `<div>` hingegen hat einen sehr dunklen lila Hintergrund, was den Text viel schwerer lesbar macht:

```html
<div class="bad">Bad contrast</div>
```

```css
div {
  font-family: sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: 250px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px black;
}

.bad {
  background-color: #400064;
}
```

{{EmbedLiveSample('Bad_Contrast', '100%', '100')}}

## Lösung

Wenn Sie ein Farbschema für Ihre Website wählen, sollten Sie Vorder- und Hintergrundfarben wählen, die einen guten Kontrast haben. Der Farbkontrast sollte innerhalb Ihrer Designvorgaben so gut wie möglich sein - idealerweise streben Sie die AAA-Bewertung an (siehe 1.4.6 unten), aber erfüllen Sie zumindest die AA-Bewertung (siehe 1.4.3 unten).

Wenn Sie nicht-textuelle Inhalte wie Videos oder Animationen einfügen, sollten Sie 1.4.11 beachten (siehe unten).

Um Ihren Kontrast zu überprüfen, während Sie Ihre Farbwahl treffen, verwenden Sie ein Tool wie WebAIMs [Color Contrast Checker](https://webaim.org/resources/contrastchecker/).

Sie können den Farbkontrast auch spontan mit den Entwickler-Tools von Firefox überprüfen – siehe den [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) Leitfaden, insbesondere den Abschnitt [Überprüfen auf Barrierefreiheitsprobleme](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues). Versuchen Sie es an den Live-Beispielen im Beschreibungsbereich.

## Relevante WCAG-Erfolgskriterien

- [1.4.3 Mindestkontrast (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum)

  - : Der Farbkontrast zwischen Hintergrund und Vordergrundinhalten sollte ein Mindestniveau haben, um die Lesbarkeit sicherzustellen:

    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 4.5:1 haben.
    - Überschrift (oder einfach größerer) Text sollte ein Verhältnis von mindestens 3:1 haben. Größerer Text ist definiert als mindestens 18pt oder 14pt fett.

- [1.4.6 Erhöhter Kontrast (AAA)](https://www.w3.org/TR/WCAG21/#contrast-enhanced)

  - : Dies folgt auf und baut auf dem Kriterium 1.4.3 auf.

    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 7:1 haben.
    - Überschrift (oder einfach größerer) Text sollte ein Verhältnis von mindestens 4.5:1 haben.

- [1.4.11 Nicht-Text Kontrast (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast) (hinzugefügt in 2.1)
  - : Für Benutzeroberflächenkomponenten und grafische Objekte sollte ein minimales Farbkontrastverhältnis von 3 zu 1 vorhanden sein.

## Siehe auch

- [Farbe und Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
- [Mehrere Beschriftungen](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#multiple_labels)
- [Verständnis von Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
