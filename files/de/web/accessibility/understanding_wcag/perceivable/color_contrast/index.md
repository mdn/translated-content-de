---
title: Farbkontrast
slug: Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Der [Farbkontrast](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) zwischen Hintergrund und Vordergrund (normalerweise Text) sollte groß genug sein, um Lesbarkeit zu gewährleisten.

Bei der Gestaltung lesbarer Benutzeroberflächen für unterschiedliche Sehfähigkeiten empfehlen die WCAG-Richtlinien die folgenden Kontrastverhältnisse:

| Art des Inhalts                                                                | Minimales Verhältnis (AA-Bewertung) | Erweitertes Verhältnis (AAA-Bewertung) |
| ------------------------------------------------------------------------------ | ----------------------------------- | ------------------------------------- |
| Fließtext                                                                      | 4.5 : 1                             | 7 : 1                                 |
| Großflächiger Text (120-150% größer als Fließtext)                             | 3 : 1                               | 4.5 : 1                               |
| Aktive Benutzeroberflächenkomponenten und grafische Objekte wie Symbole und Diagramme | 3 : 1                               | Nicht definiert                       |

Diese Verhältnisse gelten nicht für "zufälligen" Text, wie inaktive Steuerelemente, Logos oder rein dekorativen Text.

Siehe den Abschnitt [Lösung](#lösung) unten für weitere Informationen.

Ein guter Farbkontrast auf Ihrer Website kommt allen Nutzern zugute, ist jedoch besonders vorteilhaft für Nutzer mit bestimmten Arten von Farbenblindheit und anderen ähnlichen Bedingungen, die niedrige Kontraste erleben und Schwierigkeiten haben, ähnliche Farben zu unterscheiden. Dies liegt daran, dass sie helle und dunkle Bereiche nicht so leicht wahrnehmen wie Personen ohne solche Bedingungen und daher Schwierigkeiten haben, Kanten, Ränder und andere Details zu erkennen.

Es ist gut, ein cooles Design auf Ihrer Website zu haben, aber das Design ist wertlos, wenn Ihre Nutzer den Inhalt nicht lesen können.

## Beispiele

Schauen wir uns einige einfache HTML- und CSS-Codes an:

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

Beide Texte haben ihre standardmäßig schwarze Farbe.

### Guter Kontrast

Die "gute" `<div>` hat einen neonblauen Hintergrund, der den Text leicht lesbar macht:

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

Das "schlechte" `<div>` hat hingegen einen sehr dunklen lila Hintergrund, was den Text schwerer lesbar macht:

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

Wenn Sie ein Farbschema für Ihre Website wählen, entscheiden Sie sich für Vorder- und Hintergrundfarben, die einen guten Kontrast aufweisen. Machen Sie den Farbkontrast innerhalb Ihrer Designbeschränkungen so gut wie möglich — idealerweise streben Sie die AAA-Bewertung an (siehe 1.4.6 unten), erreichen aber zumindest die AA-Bewertung (siehe 1.4.3 unten).

Wenn Sie nicht-textliche Inhalte wie Video oder Animation einbinden, sollten Sie sich an 1.4.11 halten (siehe wiederum unten).

Um Ihren Kontrast zu überprüfen, während Sie Ihre Farbwahl treffen, verwenden Sie ein Tool wie den [Color Contrast Checker von WebAIM](https://webaim.org/resources/contrastchecker/).

Sie können den Farbkontrast auch direkt mit den Entwicklerwerkzeugen von Firefox überprüfen — siehe den Leitfaden zum [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) und insbesondere den Abschnitt [Überprüfen auf Barrierefreiheitsprobleme](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues). Versuchen Sie es mit den Live-Beispielen im Beschreibungsabschnitt.

## Verwandte WCAG-Erfolgskriterien

- [1.4.3 Mindestkontrast (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum)

  - : Der Farbkontrast zwischen Hintergrund und Vordergrund sollte ein Mindestniveau aufweisen, um Lesbarkeit zu gewährleisten:

    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 4.5:1 haben.
    - Überschrift (oder einfach größerer Text) sollte ein Verhältnis von mindestens 3:1 haben. Größerer Text ist definiert als mindestens 18pt oder 14pt fett.

- [1.4.6 Erhöhter Kontrast (AAA)](https://www.w3.org/TR/WCAG21/#contrast-enhanced)

  - : Dies folgt auf das Kriterium 1.4.3 und baut darauf auf.

    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 7:1 haben.
    - Überschrift (oder einfach größerer Text) sollte ein Verhältnis von mindestens 4.5:1 haben.

- [1.4.11 Nicht-Text-Kontrast (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast) (hinzugefügt in 2.1)
  - : Es sollte ein minimales Farbkontrastverhältnis von 3 zu 1 für Benutzeroberflächenkomponenten und grafische Objekte geben.

## Siehe auch

- [Farbe und Farbkontrast](/de/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
- [Mehrere Labels](/de/docs/Learn/Forms/How_to_structure_a_web_form#multiple_labels)
- [Verstehen von Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
