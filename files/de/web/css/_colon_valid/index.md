---
title: ":valid"
slug: Web/CSS/:valid
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:valid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}} oder anderes {{HTMLElement("form")}}-Element, dessen Inhalte erfolgreich [validieren](/de/docs/Web/HTML/Constraint_validation). Dies ermöglicht es, gültige Felder einfach so zu gestalten, dass sie dem Benutzer helfen, zu bestätigen, dass ihre Daten korrekt formatiert sind.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-valid.html", "tabbed-shorter")}}

Diese Pseudoklasse ist nützlich, um korrekte Felder für den Benutzer hervorzuheben.

## Syntax

```css
:valid {
  /* ... */
}
```

## Barrierefreiheit

Die Farbe Grün wird allgemein verwendet, um gültige Eingaben anzuzeigen. Personen, die unter bestimmten Arten von Farbblindheit leiden, werden den Zustand der Eingabe nicht erkennen können, es sei denn, es gibt einen zusätzlichen Indikator, der nicht auf Farben angewiesen ist, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN Verständnis für WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis der Erfolgskriterien 1.4.1 | W3C Verständnis für WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Anzeige gültiger und ungültiger Formulareingabefelder

In diesem Beispiel verwenden wir Strukturen wie diese, die zusätzliche `<span>`s enthalten, um darauf Inhalte zu generieren; wir werden diese verwenden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

```html
<div>
  <label for="fname">First name *: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Um diese Indikatoren bereitzustellen, verwenden wir das folgende CSS:

```css
input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}
```

Wir setzen die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann absolut unterschiedliche generierte Inhalte, je nachdem, ob die Formulardaten gültig oder ungültig sind — ein grünes Häkchen oder ein rotes Kreuz. Um ungültigen Daten etwas mehr Dringlichkeit zu verleihen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir `::after` bereits für die "erforderlich"-Labels verwendeten.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas enthalten. Die E-Mail-Eingabe hingegen ist gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig, wenn sie etwas enthält, das keine gültige E-Mail-Adresse ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Validierungsbezogene Pseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
- Zugriff auf den [Gültigkeitsstatus](/de/docs/Web/API/ValidityState) über JavaScript
