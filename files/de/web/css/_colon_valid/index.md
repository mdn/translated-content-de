---
title: ":valid"
slug: Web/CSS/:valid
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:valid`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}} oder ein anderes {{HTMLElement("form")}}-Element, dessen Inhalt erfolgreich [validiert](/de/docs/Web/HTML/Constraint_validation) wurde. Dies ermöglicht es, gültige Felder so zu gestalten, dass der Benutzer einfacher bestätigen kann, dass seine Daten richtig formatiert sind.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-valid.html", "tabbed-shorter")}}

Diese Pseudo-Klasse ist nützlich, um richtige Felder für den Benutzer hervorzuheben.

## Syntax

```css
:valid {
  /* ... */
}
```

## Barrierefreiheit

Die Farbe Grün wird häufig verwendet, um gültige Eingaben anzuzeigen. Menschen, die von bestimmten Arten von Farbenblindheit betroffen sind, können den Zustand der Eingabe nicht erkennen, es sei denn, es gibt einen zusätzlichen Indikator, der nicht auf Farben angewiesen ist, um Bedeutung zu vermitteln. Typischerweise werden erläuternder Text und/oder ein Symbol verwendet.

- [MDN Verständnis WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Anzeige von gültigen und ungültigen Formularfeldern

In diesem Beispiel verwenden wir Strukturen wie diese, die zusätzliche `<span>`s enthalten, um Inhalt darauf zu erzeugen. Wir verwenden diese, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wir setzen die `<span>` auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann den unterschiedlichen generierten Inhalt absolut, abhängig davon, ob die Daten des Formulars gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz. Um der ungültigen Eingabe etwas mehr Dringlichkeit zu verleihen, haben wir den Eingaben einen dicken roten Rahmen gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir `::after` bereits für die "erforderlich"-Labels verwenden.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Bemerkenswert ist, dass die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig sind, wenn sie ausgefüllt sind. Die E-Mail-Eingabe hingegen ist gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig, wenn sie etwas enthält, das keine richtige E-Mail-Adresse ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere validierungsbezogene Pseudo-Klassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [Überprüfung von Formulardaten](/de/docs/Learn/Forms/Form_validation)
- Zugriff auf den [ValidityState](/de/docs/Web/API/ValidityState) von JavaScript aus
