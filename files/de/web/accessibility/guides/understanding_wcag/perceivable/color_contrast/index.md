---
title: Farbkontrast
slug: Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast
l10n:
  sourceCommit: 8941e7636bfc91985ca5a486e7228b681e1aa272
---

Der [Farbkontrast](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) zwischen Hintergrund- und Vordergrundinhalten (in der Regel Text) sollte groß genug sein, um die Lesbarkeit sicherzustellen.

Beim Entwerfen von benutzerfreundlichen Oberflächen für unterschiedliche Sehfähigkeiten empfehlen die WCAG-Richtlinien folgende Kontrastverhältnisse:

| Art des Inhalts                                                                      | Mindestverhältnis (AA-Bewertung) | Erweitertes Verhältnis (AAA-Bewertung) |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------- |
| Fließtext                                                                            | 4.5 : 1                          | 7 : 1                                  |
| Großflächiger Text (120-150% größer als Fließtext)                                   | 3 : 1                            | 4.5 : 1                                |
| Aktive Benutzeroberflächenkomponenten und grafische Objekte wie Symbole und Grafiken | 3 : 1                            | Nicht definiert                        |

Diese Verhältnisse gelten nicht für "beiläufigen" Text, wie inaktive Steuerungen, Logos oder rein dekorativen Text.

Siehe den Abschnitt [Lösung](#lösung) unten für weitere Informationen.

Ein guter Farbkontrast auf Ihrer Website ist für alle Benutzer vorteilhaft, insbesondere jedoch für Benutzer mit bestimmten Arten von Farbenblindheit und ähnlichen Zuständen, die einen geringen Kontrast erleben und Schwierigkeiten haben, ähnliche Farben zu unterscheiden. Da sie helle und dunkle Bereiche nicht so gut wahrnehmen können wie Personen ohne solche Bedingungen, haben sie Schwierigkeiten, Kanten, Ränder und andere Details zu erkennen.

Ein ansprechendes Design auf Ihrer Website ist gut, aber das Design ist wertlos, wenn Ihre Benutzer Ihre Inhalte nicht lesen können.

## Beispiele

Schauen wir uns einige HTML- und CSS-Codes an:

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

Beide Textstücke haben ihre standardmäßige schwarze Farbe.

### Guter Kontrast

Die "gute" `<div>` hat einen neonblauen Hintergrund, wodurch der Text leicht zu lesen ist:

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

Die "schlechte" `<div>` hat hingegen einen sehr dunklen violetten Hintergrund, wodurch der Text viel schwerer zu lesen ist:

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

Bei der Auswahl eines Farbschemas für Ihre Website sollten Sie Vorder- und Hintergrundfarben mit gutem Kontrast wählen. Machen Sie den Farbkontrast so gut wie möglich innerhalb Ihrer Designbeschränkungen — idealerweise streben Sie die AAA-Bewertung an (siehe 1.4.6 unten), erfüllen Sie jedoch zumindest die AA-Bewertung (siehe 1.4.3 unten).

Wenn Sie nicht-Text-Inhalte wie Videos oder Animationen einbeziehen, sollten Sie 1.4.11 befolgen (siehe ebenfalls unten).

Um Ihren Kontrast während der Farbauswahl zu überprüfen, verwenden Sie ein Werkzeug wie WebAIMs [Color Contrast Checker](https://webaim.org/resources/contrastchecker/).

Sie können auch den Farbkontrast in Echtzeit mit den Entwicklertools von Firefox überprüfen – siehe den [Barrierefreiheit-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) Leitfaden, insbesondere den Abschnitt [Barrierefreiheitsprobleme überprüfen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues). Versuchen Sie, es an den Live-Beispielen im Beschreibungsabschnitt zu verwenden.

## Verwandte WCAG-Erfolgskriterien

- [1.4.3 Mindestkontrast (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum)

  - : Der Farbkontrast zwischen Hintergrund- und Vordergrundinhalten sollte ein Mindestniveau haben, um die Lesbarkeit sicherzustellen:

    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 4.5:1 haben.
    - Überschrift (oder einfach größerer) Text sollte ein Verhältnis von mindestens 3:1 haben. Größerer Text ist definiert als mindestens 18pt, oder 14pt fett.

- [1.4.6 Erweiterter Kontrast (AAA)](https://www.w3.org/TR/WCAG21/#contrast-enhanced)

  - : Dies folgt auf und baut auf Kriterium 1.4.3 auf.

    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 7:1 haben.
    - Überschrift (oder einfach größerer) Text sollte ein Verhältnis von mindestens 4.5:1 haben.

- [1.4.11 Nicht-Text-Kontrast (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast) (hinzugefügt in 2.1)
  - : Es sollte ein Mindestfarbkontrastverhältnis von 3:1 für Benutzeroberflächenkomponenten und grafische Objekte geben.

## Siehe auch

- [Farbe und Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
- [Mehrere Beschriftungen](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#multiple_labels)
- [Verständnis des Nicht-Text-Kontrasts](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
