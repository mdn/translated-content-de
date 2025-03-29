---
title: aria-details
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-details
l10n:
  sourceCommit: 1779345247e7fb1d7987ba3b51b18d9b0187d576
---

Das globale `aria-details` Attribut identifiziert das Element (oder die Elemente), das zusätzliche Informationen in Bezug auf das Objekt bereitstellt.

## Beschreibung

Das `aria-details` Attribut kann verwendet werden, um einem Objekt zusätzliche Informationen oder komplexe Beschreibungen hinzuzufügen. Es wird verwendet, um Benutzer von unterstützenden Technologien über den Inhalt zu informieren, indem es detailliertere Informationen bereitstellt, unabhängig davon, ob dieser Inhalt innerhalb des aktuellen Dokuments liegt oder ein Link zu zusätzlichen Ressourcen ist.

Es gibt weitere HTML- und WAI-ARIA-Eigenschaften mit ähnlichen Zwecken. Das HTML {{HTMLElement('label')}} Element sowie die Eigenschaften [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) werden verwendet, um kurze Beschriftungen für ein Objekt bereitzustellen. Das HTML `title` Attribut und die Eigenschaften [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) ermöglichen längere Fließtext-Beschreibungen eines Objekts. Wenn jedoch zusätzliche Informationen, komplexe Beschreibungen oder navigierbare Inhalte in Bezug auf das Objekt erforderlich und verfügbar sind, sollte das `aria-details` Attribut verwendet werden.

Das `aria-details` Attribut erfüllt einen ähnlichen Zweck wie das HTML `longdesc` Attribut, das nie vollständig unterstützt wurde － eine URL einer langen Beschreibung zu einem ersetzten Inhaltselement －, das aufgrund mangelnder Unterstützung und Missbrauch veraltet ist.

Das `aria-details` Attribut nimmt die [`id`](/de/docs/Web/HTML/Global_attributes/id) oder eine durch Leerzeichen getrennte Liste von `id`s der Elemente als Werte, um detailliertere Informationen zu erhalten. Wenn `aria-details` auf einem Element enthalten ist, informieren unterstützende Technologien die Benutzer über die Verfügbarkeit erweiterter Informationen und ermöglichen es dem Benutzer, zu dem referenzierten Inhalt zu navigieren.

Elemente, auf die `aria-details` verweist, sollen mehr Informationen enthalten, als normalerweise über [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) bereitgestellt würden.

Die Elemente, auf die durch `aria-details` verwiesen wird, sollten für alle Benutzer sichtbar sein. `aria-details` informiert Benutzer, die andernfalls möglicherweise nicht in der Lage sind, schnell den Bildschirm zu scannen und zu erkennen, dass erklärende Inhalte verfügbar sind.

> **Note:** `aria-details` hat keinen Einfluss auf die zugängliche Beschreibung.

Im Gegensatz zu `aria-describedby` werden Elemente, auf die durch `aria-details` verwiesen wird, nicht in zugänglichen Beschreibungen verwendet und nicht in eine einfache Zeichenkette umgewandelt, wenn sie Benutzern von unterstützenden Technologien präsentiert werden. Wenn der zugehörige Inhalt nicht zu lang ist und die Reduzierung des Inhalts des referenzierten Elements zu einem einfachen Textstrang keinen Informationsverlust verursachen würde, sollten Sie stattdessen `aria-describedby` in Betracht ziehen. Dennoch ist es gültig, dass ein Element sowohl `aria-details` als auch eine Beschreibung entweder mit `aria-describedby` oder `aria-description` spezifiziert hat.

## Beispiel

Bei Definitionen und Rollen für Begriffe würde `aria-details` auf dem [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) Element mit der `id` des Elements mit einer [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) Rolle enthalten sein.

```html
<p>
  The <strong>cubic-bezier()</strong> functional notation defines a cubic
  <span role="term" aria-details="bezier bezImg">Bézier curve</span>. As these
  curves are continuous, they are often used to smooth down the start and end of
  the curve and are therefore sometimes called easing functions.
</p>

<p role="definition" id="bezier">
  A <strong>Bézier curve</strong>, (Pronounced \ ˈbe-zē-ˌā \)
  <i aria-description="English pronunciation">BEH-zee-ay</i>) is a
  mathematically described curve used in computer graphics and animation. The
  curve is defined by a set of control points with a minimum of two. Web related
  graphics and animations use Cubic Béziers, which are curves with four control
  points P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, and P<sub>3</sub>.
</p>

<a
  href="bezierExplanation.html"
  id="bezImg"
  aria-label="Explanation of Bézier curve in CSS easing functions">
  <img alt="Animated Bézier curve showing 4 control points." src="bezier.gif" />
</a>
```

## Werte

- ID-Referenzliste
  - : Eine `id` oder durch Leerzeichen getrennte Liste von ids von Elementen, die zusätzliche verwandte Informationen bereitstellen oder verlinken.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [id](/de/docs/Web/HTML/Global_attributes/id) Attribut
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [Das Bild `alt` Attribut](/de/docs/Web/API/HTMLImageElement/alt)
- HTML [title](/de/docs/Web/HTML/Global_attributes/title) Attribut
