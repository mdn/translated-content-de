---
title: aria-details
slug: Web/Accessibility/ARIA/Attributes/aria-details
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Das globale `aria-details` Attribut identifiziert das Element (oder die Elemente), die zusätzliche Informationen in Bezug auf das Objekt bereitstellen.

## Beschreibung

Das `aria-details` Attribut kann verwendet werden, um einem Objekt zusätzliche Informationen oder komplexe Beschreibungen bereitzustellen. Es wird verwendet, um Benutzer von unterstützender Technologie über den Inhalt zu informieren, indem es detailliertere Informationen bereitstellt, unabhängig davon, ob dieser Inhalt im aktuellen Dokument oder als Link zu zusätzlichen Ressourcen vorhanden ist.

Es gibt andere HTML- und WAI-ARIA-Eigenschaften, die ähnliche Zwecke erfüllen. Das HTML-{{HTMLElement('label')}} Element und die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Eigenschaften werden verwendet, um einem Objekt kurze Bezeichnungen zu geben. Das HTML-`title` Attribut und die [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description) und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Eigenschaften bieten längere Klartextbeschreibungen eines Objekts. Wenn jedoch zusätzliche Informationen, komplexe Beschreibungen oder navigierbare Inhalte in Bezug auf das Objekt erforderlich und verfügbar sind, sollte das `aria-details` Attribut verwendet werden.

Das `aria-details` Attribut erfüllt einen ähnlichen Zweck wie das nie vollständig unterstützte `longdesc` HTML-Attribut － eine URL einer langen Beschreibung zum Inhalt eines ersetzten Elements － welches aufgrund mangelnder Unterstützung und Missbrauchs veraltet war.

Das `aria-details` Attribut nimmt die [`id`](/de/docs/Web/HTML/Global_attributes/id) oder eine durch Leerzeichen getrennte Liste von `id`s der Elemente, um detailliertere Informationen zu erhalten, als Werte. Wenn `aria-details` in einem Element enthalten ist, informiert assistierende Technologien die Benutzer über die Verfügbarkeit erweiterter Informationen und ermöglicht es dem Benutzer, zu den referenzierten Inhalten zu navigieren.

Elemente, die mit `aria-details` referenziert sind, sollen mehr Informationen enthalten, als normalerweise über [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) bereitgestellt würden.

Die Elemente, die durch `aria-details` referenziert werden, sollten für alle Benutzer sichtbar sein. `aria-details` informiert Benutzer, die ansonsten möglicherweise keinen Bildschirm absuchen und schnell erkennen könnten, dass erklärende Inhalte verfügbar sind.

> **Note:** `aria-details` hat keine Auswirkungen auf die zugängliche Beschreibung.

Im Gegensatz zu `aria-describedby` werden die durch `aria-details` referenzierten Elemente nicht in zugänglichen Beschreibungen verwendet und nicht in einen einfachen String umgewandelt, wenn sie Benutzern von unterstützender Technologie präsentiert werden. Wenn der zugehörige Inhalt nicht zu lang ist und das Umwandeln der Inhalte des referenzierten Elements in einen einfachen Text-String keinen Informationsverlust verursachen würde, ziehen Sie in Betracht, stattdessen `aria-describedby` zu verwenden. Es ist jedoch gültig, wenn ein Element sowohl `aria-details` als auch eine Beschreibung mit entweder `aria-describedby` oder `aria-description` spezifiziert hat.

## Beispiel

Bei Definitionen und Begriffrollen würde `aria-details` auf dem [`term`](/de/docs/Web/Accessibility/ARIA/Roles/term_role) Element mit der `id` des Elements mit einer [`definition`](/de/docs/Web/Accessibility/ARIA/Roles/definition_role) Rolle enthalten sein.

```html
<p>The <strong>cubic-bezier()<strong> functional notation defines a cubic
  <span role="term" aria-details="bezier bezImg">Bézier curve</span>. As
  these curves are continuous, they are often used to smooth down the start and
  end of the curve and are therefore sometimes called easing functions.
</p>

<p role="definition" id="bezier">A <strong>Bézier curve</strong>,
 (Pronounced \ ˈbe-zē-ˌā \)
 <i aria-description="English pronunciation">BEH-zee-ay</i>) is a mathematically
 described curve used in computer graphics and animation. The curve is defined
 by a set of control points with a minimum of two. Web related graphics
 and animations use Cubic Béziers, which are curves with four control
 points P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, and P<sub>3</sub>.
</p>

<a href="bezierExplanation.html" id="bezImg"
  aria-label="Explanation of Bézier curve in CSS easing functions">
  <img alt="Animated Bézier curve showing 4 control points." src="bezier.gif">
</a>
```

## Werte

- ID-Referenzliste
  - : Eine `id` oder durch Leerzeichen getrennte Liste von ids der Elemente, die zusätzliche verwandte Informationen bereitstellen oder darauf verlinken.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [id](/de/docs/Web/HTML/Global_attributes/id) Attribut
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [Das Bild `alt` Attribut](/de/docs/Web/API/HTMLImageElement/alt)
- HTML [title](/de/docs/Web/HTML/Global_attributes/title) Attribut
