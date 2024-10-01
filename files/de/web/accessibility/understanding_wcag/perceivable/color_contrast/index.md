---
title: Farbkontrast
slug: Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Der [Farbkontrast](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) zwischen Hintergrund und Vordergrundinhalt (also in der Regel Text) sollte groß genug sein, um die Lesbarkeit zu gewährleisten.

Beim Entwerfen von lesbaren Benutzeroberflächen für unterschiedliche Sehfähigkeiten empfehlen die WCAG-Richtlinien folgende Kontrastverhältnisse:

| Art des Inhalts                                                                       | Mindestverhältnis (AA-Bewertung) | Erweitertes Verhältnis (AAA-Bewertung) |
| ------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------- |
| Fließtext                                                                             | 4.5 : 1                          | 7 : 1                                  |
| Großtext (120-150% größer als Fließtext)                                              | 3 : 1                            | 4.5 : 1                                |
| Aktive Benutzeroberflächenkomponenten und grafische Objekte wie Symbole und Diagramme | 3 : 1                            | Nicht definiert                        |

Diese Verhältnisse gelten nicht für "zufälligen" Text, wie inaktive Steuerelemente, Logotypen oder rein dekorativen Text.

Siehe den Abschnitt [Lösung](#lösung) unten für weitere Informationen.

Ein guter Farbkontrast auf Ihrer Website ist für alle Benutzer von Vorteil, insbesondere jedoch für Benutzer mit bestimmten Arten von Farbenblindheit und ähnlichen Bedingungen, die niedrigen Kontrast erleben und Schwierigkeiten haben, ähnliche Farben zu unterscheiden. Dies liegt daran, dass sie helle und dunkle Bereiche nicht so gut wahrnehmen können wie Personen ohne solche Bedingungen und daher Schwierigkeiten haben, Kanten, Grenzen und andere Details zu erkennen.

Es ist gut, ein cooles Design auf Ihrer Website zu haben, aber das Design nützt nichts, wenn Ihre Benutzer den Inhalt nicht lesen können.

## Beispiele

Werfen wir einen Blick auf einige einfache HTML- und CSS-Codebeispiele:

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

Beide Textstücke haben die standardmäßige schwarze Farbe.

### Guter Kontrast

Das "gute" `<div>` hat einen neonblauen Hintergrund, der den Text leicht lesbar macht:

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

Das "schlechte" `<div>` hat hingegen einen sehr dunklen lila Hintergrund, der es viel schwieriger macht, den Text zu lesen:

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

Wenn Sie ein Farbschema für Ihre Website auswählen, wählen Sie Vorder- und Hintergrundfarben, die einen guten Kontrast haben. Machen Sie den Farbkontrast so gut wie möglich innerhalb Ihrer Designbeschränkungen – streben Sie idealerweise die AAA-Bewertung an (siehe 1.4.6 unten), erreichen Sie aber mindestens die AA-Bewertung (siehe 1.4.3 unten).

Wenn Sie nicht-textliche Inhalte wie Videos oder Animationen einschließen, sollten Sie 1.4.11 folgen (siehe erneut unten).

Um Ihren Kontrast bei der Auswahl der Farben zu überprüfen, verwenden Sie ein Werkzeug wie den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM.

Sie können den Farbkontrast auch spontan mit den Entwicklerwerkzeugen von Firefox überprüfen – siehe den [Zugänglichkeitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) Leitfaden, insbesondere den Abschnitt [Prüfen auf Zugänglichkeit](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues). Probieren Sie es bei den Live-Beispielen im Beschreibungsteil aus.

## Verwandte WCAG-Erfolgskriterien

- [1.4.3 Mindestkontrast (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum)

  - : Der Farbkontrast zwischen Hintergrund- und Vordergrundinhalt sollte ein Mindestniveau erreichen, um die Lesbarkeit zu gewährleisten:

    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 4.5:1 haben.
    - Überschriftstext (oder einfach größerer Text) sollte ein Verhältnis von mindestens 3:1 haben. Größerer Text ist definiert als mindestens 18pt oder 14pt fett.

- [1.4.6 Erweitertes Kontrastverhältnis (AAA)](https://www.w3.org/TR/WCAG21/#contrast-enhanced)

  - : Dies folgt auf und baut auf dem Kriterium 1.4.3 auf.

    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 7:1 haben.
    - Überschriftstext (oder einfach größerer Text) sollte ein Verhältnis von mindestens 4.5:1 haben.

- [1.4.11 Nicht-Text-Kontrast (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast) (hinzugefügt in 2.1)
  - : Es sollte ein Mindestfarbkontrastverhältnis von 3 zu 1 für Benutzeroberflächenkomponenten und grafische Objekte geben.

## Siehe auch

- [Farbe und Farbkontrast](/de/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
- [Mehrfachbeschriftungen](/de/docs/Learn/Forms/How_to_structure_a_web_form#multiple_labels)
- [Verstehen des Nicht-Text-Kontrasts](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
