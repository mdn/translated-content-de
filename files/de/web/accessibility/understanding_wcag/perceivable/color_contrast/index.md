---
title: Farbkontrast
slug: Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Der [Farbkontrast](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) zwischen Hintergrund und Vordergrundinhalt (also in der Regel Text) sollte groß genug sein, um die Lesbarkeit zu gewährleisten.

Bei der Gestaltung von lesbaren Benutzeroberflächen für verschiedene Sehfähigkeiten empfehlen die WCAG-Richtlinien die folgenden Kontrastverhältnisse:

| Art des Inhalts                                                                      | Mindestverhältnis (AA-Bewertung) | Erweitertes Verhältnis (AAA-Bewertung) |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------- |
| Fließtext                                                                            | 4.5 : 1                          | 7 : 1                                  |
| Großtext (120-150% größer als Fließtext)                                             | 3 : 1                            | 4.5 : 1                                |
| Aktive Benutzeroberflächenkomponenten und grafische Objekte wie Symbole und Grafiken | 3 : 1                            | Nicht definiert                        |

Diese Verhältnisse gelten nicht für "zufälligen" Text, wie inaktive Steuerungen, Logos oder rein dekorativen Text.

Weitere Informationen finden Sie im Abschnitt [Lösung](#lösung) unten.

Ein guter Farbkontrast auf Ihrer Website kommt all Ihren Nutzern zugute, ist jedoch besonders vorteilhaft für Nutzer mit bestimmten Arten von Farbenblindheit und ähnlichen Bedingungen, die niedrigen Kontrast erleben und Schwierigkeiten haben, ähnliche Farben zu unterscheiden. Dies liegt daran, dass sie helle und dunkle Bereiche nicht so gut erkennen können wie Personen ohne solche Bedingungen und daher Schwierigkeiten haben, Kanten, Grenzen und andere Details zu sehen.

Ein cooles Design auf Ihrer Website zu haben, ist gut, aber das Design ist nutzlos, wenn Ihre Nutzer Ihre Inhalte nicht lesen können.

## Beispiele

Schauen wir uns ein paar einfache HTML- und CSS-Code-Beispiele an:

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

Beide Textstückchen haben ihre standardmäßige schwarze Farbe.

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

Das "schlechte" `<div>` hat dagegen einen sehr dunklen violetten Hintergrund, der den Text viel schwerer lesbar macht:

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

Bei der Auswahl eines Farbschemas für Ihre Website sollten Sie Vordergrund- und Hintergrundfarben wählen, die einen guten Kontrast haben. Machen Sie den Farbkontrast so gut wie möglich innerhalb Ihrer Designbeschränkungen — idealerweise streben Sie die AAA-Bewertung an (siehe 1.4.6 unten), aber mindestens sollten Sie die AA-Bewertung erreichen (siehe 1.4.3 unten).

Wenn Sie nicht-textliche Inhalte wie Videos oder Animationen einbeziehen, sollten Sie 1.4.11 folgen (siehe unten).

Um Ihren Kontrast während der Farbauswahl zu überprüfen, verwenden Sie ein Werkzeug wie den WebAIM [Color Contrast Checker](https://webaim.org/resources/contrastchecker/).

Sie können den Farbkontrast auch spontan mit den Entwickler-Tools von Firefox überprüfen – siehe den [Barrierefreiheit-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) Leitfaden, insbesondere den Abschnitt [Überprüfen Sie auf Barrierefreiheitsprobleme](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues). Versuchen Sie es mit den Live-Beispielen im Beschreibungsabschnitt.

## Verwandte WCAG-Erfolgskriterien

- [1.4.3 Mindestkontrast (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum)

  - : Der Farbkontrast zwischen Hintergrund und Vordergrundinhalt sollte ein Mindestmaß erreichen, um die Lesbarkeit zu gewährleisten:

    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 4.5:1 haben.
    - Überschriftstext (oder einfach größerer Text) sollte ein Verhältnis von mindestens 3:1 haben. Größerer Text wird definiert als mindestens 18pt oder 14pt fett.

- [1.4.6 Erhöhter Kontrast (AAA)](https://www.w3.org/TR/WCAG21/#contrast-enhanced)

  - : Dies folgt auf und baut auf Kriterium 1.4.3 auf.

    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 7:1 haben.
    - Überschriftstext (oder einfach größerer Text) sollte ein Verhältnis von mindestens 4.5:1 haben.

- [1.4.11 Nicht-Text-Kontrast (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast) (hinzugefügt in 2.1)
  - : Es sollte ein minimales Farbkontrastverhältnis von 3 zu 1 für Benutzeroberflächenkomponenten und grafische Objekte geben.

## Siehe auch

- [Farbe und Farbkontrast](/de/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
- [Mehrfache Beschriftungen](/de/docs/Learn/Forms/How_to_structure_a_web_form#multiple_labels)
- [Verstehen des Nicht-Text-Kontrasts](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
