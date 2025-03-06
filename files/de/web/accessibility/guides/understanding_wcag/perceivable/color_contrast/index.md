---
title: Farbkontrast
slug: Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Der [Farbkontrast](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) zwischen Hintergrund und Vordergrundinhalt (also in der Regel Text) sollte groß genug sein, um die Lesbarkeit zu gewährleisten.

Bei der Gestaltung von lesbaren Benutzeroberflächen für unterschiedliche Sehfähigkeiten empfehlen die WCAG-Richtlinien folgende Kontrastverhältnisse:

| Art des Inhalts                                                                       | Minimales Verhältnis (AA-Bewertung) | Erweitertes Verhältnis (AAA-Bewertung) |
| ------------------------------------------------------------------------------------- | ----------------------------------- | -------------------------------------- |
| Fließtext                                                                             | 4.5 : 1                             | 7 : 1                                  |
| Großtext (120-150% größer als Fließtext)                                              | 3 : 1                               | 4.5 : 1                                |
| Aktive Benutzeroberflächenkomponenten und grafische Objekte wie Symbole und Diagramme | 3 : 1                               | Nicht definiert                        |

Diese Verhältnisse gelten nicht für "zufälligen" Text, wie inaktive Steuerelemente, Logotypen oder rein dekorativen Text.

Weitere Informationen finden Sie im Abschnitt [Lösung](#lösung) weiter unten.

Ein guter Farbkontrast auf Ihrer Website kommt allen Benutzern zugute, insbesondere jedoch Benutzern mit bestimmten Arten von Farbenblindheit und anderen ähnlichen Bedingungen, die einen niedrigen Kontrast erfahren und Schwierigkeiten haben, zwischen ähnlichen Farben zu unterscheiden. Dies liegt daran, dass sie helle und dunkle Bereiche nicht so leicht erkennen können wie Personen ohne solche Bedingungen und daher Schwierigkeiten haben, Kanten, Ränder und andere Details zu sehen.

Es ist gut, ein cooles Design auf Ihrer Website zu haben, aber das Design ist wertlos, wenn Ihre Benutzer Ihren Inhalt nicht lesen können.

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

Beide Textstücke haben ihre Standard-Schwarzfarbe.

### Guter Kontrast

Der "gute" `<div>` hat einen neonblauen Hintergrund, was den Text leicht lesbar macht:

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

Der "schlechte" `<div>` hat hingegen einen sehr dunklen lila Hintergrund, was den Text viel schwerer lesbar macht:

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

Bei der Auswahl eines Farbschemas für Ihre Website wählen Sie Vordergrund- und Hintergrundfarben, die einen guten Kontrast aufweisen. Machen Sie den Farbkontrast so gut wie möglich innerhalb Ihrer Designbeschränkungen — idealerweise streben Sie die AAA-Bewertung an (siehe 1.4.6 unten), aber erfüllen Sie mindestens die AA-Bewertung (siehe 1.4.3 unten).

Wenn Sie nicht-textuelle Inhalte wie Videos oder Animationen einbeziehen, sollten Sie 1.4.11 befolgen (siehe unten).

Um Ihren Kontrast während der Farbauswahl zu überprüfen, verwenden Sie ein Tool wie den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM.

Sie können den Farbkontrast auch in Echtzeit mit den Entwicklerwerkzeugen von Firefox überprüfen – siehe den [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) Leitfaden, insbesondere den Abschnitt [Überprüfen von Barrierefreiheitsthemen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues). Probieren Sie dies an den Live-Beispielen im Beschreibungsabschnitt aus.

## Verwandte WCAG-Erfolgskriterien

- [1.4.3 Minimaler Kontrast (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum)

  - : Der Farbkontrast zwischen Hintergrund- und Vordergrundinhalt sollte auf einem minimalen Niveau sein, um die Lesbarkeit zu gewährleisten:

    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 4.5:1 haben.
    - Überschriftstext (oder einfach größerer Text) sollte ein Verhältnis von mindestens 3:1 haben. Größerer Text wird definiert als mindestens 18pt oder 14pt fett.

- [1.4.6 Erhöhter Kontrast (AAA)](https://www.w3.org/TR/WCAG21/#contrast-enhanced)

  - : Dies folgt auf und baut auf dem Kriterium 1.4.3 auf.

    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 7:1 haben.
    - Überschriftstext (oder einfach größerer Text) sollte ein Verhältnis von mindestens 4.5:1 haben.

- [1.4.11 Nicht-Text-Kontrast (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast) (hinzugefügt in 2.1)
  - : Es sollte ein minimales Farbkontrastverhältnis von 3 zu 1 bei Benutzeroberflächenkomponenten und grafischen Objekten geben.

## Siehe auch

- [Farbe und Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
- [Mehrere Beschriftungen](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#multiple_labels)
- [Verständnis von Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
