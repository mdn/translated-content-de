---
title: Farbkonstrast
slug: Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Der [Farbkontrast](https://w3c.github.io/wcag/guidelines/22/#dfn-contrast-ratio) zwischen Hintergrund und Vordergrundinhalten (das ist normalerweise Text) sollte groß genug sein, um Lesbarkeit zu gewährleisten.

Beim Entwerfen von lesbaren Oberflächen für unterschiedliche Sehfähigkeiten empfehlen die WCAG-Richtlinien die folgenden Kontrastverhältnisse:

| Art des Inhalts                                                                      | Mindestverhältnis (AA-Bewertung) | Erhöhtes Verhältnis (AAA-Bewertung) |
| ------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------- |
| Fließtext                                                                            | 4,5 : 1                          | 7 : 1                               |
| Großflächiger Text (120-150 % größer als Fließtext)                                  | 3 : 1                            | 4,5 : 1                             |
| Aktive Benutzeroberflächenkomponenten und grafische Objekte wie Symbole und Grafiken | 3 : 1                            | Nicht definiert                     |

Diese Verhältnisse gelten nicht für "zufälligen" Text, wie inaktive Steuerelemente, Logos oder rein dekorativen Text.

Weitere Informationen finden Sie im untenstehenden Abschnitt [Lösung](#lösung).

Ein guter Farbkontrast auf Ihrer Website kommt all Ihren Benutzern zugute, ist jedoch besonders vorteilhaft für Benutzer mit bestimmten Arten von Farbschwäche und ähnlichen Bedingungen, die geringen Kontrast erleben und Schwierigkeiten haben, ähnliche Farben zu unterscheiden. Dies liegt daran, dass sie helle und dunkle Bereiche nicht so leicht erkennen wie Personen ohne solche Bedingungen und daher Schwierigkeiten haben, Kanten, Ränder und andere Details zu sehen.

Es ist gut, ein cooles Design auf Ihrer Website zu haben, aber das Design ist wertlos, wenn Ihre Benutzer den Inhalt nicht lesen können.

## Beispiele

Schauen wir uns etwas HTML- und CSS-Code an:

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

Das "gute" `<div>` hat einen neongrünen Hintergrund, was den Text leicht lesbar macht:

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

Das "schlechte" `<div>` hingegen hat einen sehr dunkellila Hintergrund, was den Text viel schwerer lesbar macht:

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

Wählen Sie bei der Auswahl eines Farbschemas für Ihre Website Vordergrund- und Hintergrundfarben, die einen guten Kontrast haben. Machen Sie den Farbkontrast so gut wie möglich innerhalb Ihrer Designvorgaben — streben Sie idealerweise die AAA-Bewertung an (siehe 1.4.6 unten), treffen Sie jedoch mindestens die AA-Bewertung (siehe 1.4.3 unten).

Wenn Sie nichttextliche Inhalte wie Videos oder Animationen einfügen, sollten Sie 1.4.11 befolgen (siehe unten).

Um Ihren Kontrast zu überprüfen, während Sie Ihre Farbentscheidungen treffen, verwenden Sie ein Tool wie den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM.

Sie können auch den Farbkontrast spontan mit den Entwicklertools von Firefox überprüfen — siehe den [Barrierefreiheit-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) Leitfaden, insbesondere den Abschnitt [Auf Barrierefreiheitsprobleme prüfen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues). Versuchen Sie, es an den Live-Beispielen im Beschreibungsabschnitt zu verwenden.

## Relevante WCAG-Erfolgskriterien

- [1.4.3 Minimalkontrast (AA)](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum)

  - : Der Farbkontrast zwischen Hintergrund und Vordergrund sollte auf einem Mindestniveau sein, um die Lesbarkeit sicherzustellen:

    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 4,5:1 haben.
    - Überschriftstext (oder einfach größerer Text) sollte ein Verhältnis von mindestens 3:1 haben. Größerer Text wird als mindestens 18pt oder 14pt fett definiert.

- [1.4.6 Erhöhter Kontrast (AAA)](https://w3c.github.io/wcag/guidelines/22/#contrast-enhanced)

  - : Dies folgt dem Kriterium 1.4.3 und baut darauf auf.

    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 7:1 haben.
    - Überschriftstext (oder einfach größerer Text) sollte ein Verhältnis von mindestens 4,5:1 haben.

- [1.4.11 Nicht-Text-Kontrast (AA)](https://w3c.github.io/wcag/guidelines/22/#non-text-contrast)
  - : Es sollte ein Mindestfarbkontrastverhältnis von 3 zu 1 für Benutzeroberflächenkomponenten und grafische Objekte geben.

## Siehe auch

- [Farbe und Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
- [Mehrere Bezeichnungen](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#multiple_labels)
- [Verstehen des Nicht-Text-Kontrasts](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
