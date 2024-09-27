---
title: ":valid"
slug: Web/CSS/:valid
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:valid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}} oder andere {{HTMLElement("form")}} Element, dessen Inhalt erfolgreich [validiert](/de/docs/Web/HTML/Constraint_validation) wird. Dies ermöglicht es, dass gültige Felder ein Aussehen annehmen, das dem Benutzer hilft zu bestätigen, dass ihre Daten richtig formatiert sind.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-valid.html", "tabbed-shorter")}}

Diese Pseudoklasse ist nützlich, um dem Benutzer korrekt ausgefüllte Felder hervorzuheben.

## Syntax

```css
:valid {
  /* ... */
}
```

## Barrierefreiheit

Grün wird häufig verwendet, um gültige Eingaben anzuzeigen. Menschen, die eine bestimmte Art von Farbenblindheit haben, können den Zustand der Eingabe nicht erkennen, es sei denn, es wird ein zusätzlicher Indikator verwendet, der nicht auf Farbe angewiesen ist, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN-Verständnis der WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.1 | W3C-Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Kennzeichnung gültiger und ungültiger Formularfelder

In diesem Beispiel verwenden wir Strukturen wie diese, die zusätzliche `<span>`s enthalten, um Inhalte zu erzeugen; wir werden diese nutzen, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wir setzen die `<span>`s auf `position: relative`, sodass wir den generierten Inhalt relativ zu ihnen positionieren können. Wir platzieren dann je nach Gültigkeit der Formulardaten unterschiedlich generierte Inhalte absolut — ein grüner Haken oder ein rotes Kreuz. Um der ungültigen Eingabe mehr Dringlichkeit zu verleihen, haben wir den Eingabefeldern eine dicke rote Umrandung gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da `::after` bereits für die "erforderlich"-Labels benutzt wurde.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig werden, wenn sie ausgefüllt sind. Das E-Mail-Feld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig wird, wenn es etwas enthält, das keine gültige E-Mail-Adresse ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere validierungsbezogene Pseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
- Zugriff auf den [ValidityState](/de/docs/Web/API/ValidityState) von JavaScript aus
