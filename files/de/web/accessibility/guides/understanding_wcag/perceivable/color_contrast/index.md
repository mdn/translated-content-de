---
title: Farbkontrast
slug: Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Der [Farbkontrast](https://w3c.github.io/wcag/guidelines/22/#dfn-contrast-ratio) zwischen Hintergrund- und Vordergrundinhalt (normalerweise Text) sollte groß genug sein, um die Lesbarkeit zu gewährleisten.

Beim Entwerfen von lesbaren Oberflächen für unterschiedliche Sehkraftfähigkeiten empfehlen die WCAG-Richtlinien die folgenden Kontrastverhältnisse:

| Art des Inhalts                                                                       | Mindestverhältnis (AA-Bewertung) | Erweitertes Verhältnis (AAA-Bewertung) |
| ------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------- |
| Fließtext                                                                             | 4,5 : 1                          | 7 : 1                                  |
| Großformatiger Text (120-150% größer als Fließtext)                                   | 3 : 1                            | 4,5 : 1                                |
| Aktive Benutzeroberflächenkomponenten und grafische Objekte wie Symbole und Diagramme | 3 : 1                            | Nicht definiert                        |

Diese Verhältnisse gelten nicht für "zufälligen" Text, wie inaktive Steuerelemente, Logotypen oder rein dekorativen Text.

Weitere Informationen finden Sie im Abschnitt [Lösung](#lösung) weiter unten.

Ein guter Farbkontrast auf Ihrer Seite kommt allen Benutzern zugute, insbesondere jedoch Nutzern mit bestimmten Arten von Farbenblindheit und ähnlichen Bedingungen, die einen geringen Kontrast erfahren und Schwierigkeiten haben, ähnliche Farben zu unterscheiden. Dies liegt daran, dass sie helle und dunkle Bereiche nicht so leicht erkennen können wie Personen ohne solche Bedingungen und daher Schwierigkeiten haben, Kanten, Grenzen und andere Details zu sehen.

Ein cooles Design auf Ihrer Website ist zwar schön, aber das Design ist wertlos, wenn Ihre Nutzer Ihre Inhalte nicht lesen können.

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

Beide Textteile haben ihre standardmäßige schwarze Farbe.

### Guter Kontrast

Das "gute" `<div>` hat einen neonblauen Hintergrund, wodurch der Text gut lesbar ist:

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

Das "schlechte" `<div>` hingegen hat einen sehr dunklen violetten Hintergrund, was den Text viel schwerer lesbar macht:

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

Beim Auswählen eines Farbschemas für Ihre Website sollten Sie Vorder- und Hintergrundfarben wählen, die einen guten Kontrast bieten. Machen Sie den Farbkontrast so gut wie möglich innerhalb Ihrer Designvorgaben — idealerweise streben Sie die AAA-Bewertung an (siehe 1.4.6 unten), aber erfüllen Sie zumindest die AA-Bewertung (siehe 1.4.3 unten).

Wenn Sie nicht-textlichen Inhalt wie Videos oder Animationen einfügen, sollten Sie 1.4.11 befolgen (siehe unten).

Um den Kontrast zu überprüfen, während Sie Ihre Farbentscheidungen treffen, verwenden Sie ein Werkzeug wie WebAIM's [Color Contrast Checker](https://webaim.org/resources/contrastchecker/).

Sie können den Farbkontrast auch währenddessen mit den Entwickler-Tools von Firefox überprüfen — siehe den [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) Leitfaden, insbesondere den Abschnitt [Auf Barrierefreiheitsprobleme prüfen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues). Probieren Sie es an den Live-Beispielen im Beschreibungsabschnitt aus.

## Verwandte WCAG-Erfolgskriterien

- [1.4.3 Mindestkontrast (AA)](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum)
  - : Der Farbkontrast zwischen Hintergrund und Vordergrundinhalt sollte mindestens ein Niveau haben, um die Lesbarkeit zu gewährleisten:
    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 4,5:1 haben.
    - Überschriften (oder nur größere) Texte sollten ein Verhältnis von mindestens 3:1 haben. Größerer Text ist definiert als mindestens 18pt oder 14pt fett.

- [1.4.6 Erhöhter Kontrast (AAA)](https://w3c.github.io/wcag/guidelines/22/#contrast-enhanced)
  - : Dies baut auf dem Kriterium 1.4.3 auf.
    - Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 7:1 haben.
    - Überschriften (oder nur größere) Texte sollten ein Verhältnis von mindestens 4,5:1 haben.

- [1.4.11 Nicht-Text-Kontrast (AA)](https://w3c.github.io/wcag/guidelines/22/#non-text-contrast)
  - : Es sollte ein minimales Farbkontrastverhältnis von 3 zu 1 für Benutzeroberflächenkomponenten und grafische Objekte bestehen.

## Siehe auch

- [Farbe und Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
- [Mehrfache Beschriftungen](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#multiple_labels)
- [Understanding Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
