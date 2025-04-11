---
title: aria-details
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-details
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das globale `aria-details`-Attribut identifiziert das Element (oder die Elemente), die zusätzliche Informationen im Zusammenhang mit dem Objekt bereitstellen.

## Beschreibung

Das `aria-details`-Attribut kann verwendet werden, um zusätzliche Informationen oder komplexe Beschreibungen zu einem Objekt bereitzustellen. Es dient der Information von Benutzern unterstützender Technologien über den Inhalt, indem es detaillierte Informationen bietet, unabhängig davon, ob dieser Inhalt im aktuellen Dokument enthalten ist oder ein Link zu zusätzlichen Ressourcen ist.

Es gibt andere HTML- und WAI-ARIA-Eigenschaften, die ähnliche Zwecke erfüllen. Das HTML-{{HTMLElement('label')}}-Element und die Eigenschaften [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) werden verwendet, um kurze Bezeichnungen für ein Objekt bereitzustellen. Das HTML-`title`-Attribut sowie die Eigenschaften [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) bieten längere Klartextbeschreibungen eines Objekts. Wenn jedoch zusätzliche Informationen, komplexe Beschreibungen oder navigierbarer Inhalt erforderlich und verfügbar sind, sollte das `aria-details`-Attribut verwendet werden.

Das `aria-details`-Attribut dient einem ähnlichen Zweck wie das nie vollständig unterstützte HTML-`longdesc`-Attribut － eine URL einer langen Beschreibung für den Inhalt eines ersetzten Elements －, das aufgrund mangelnder Unterstützung und Fehlgebrauchs veraltet ist.

Das `aria-details`-Attribut nimmt die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) oder eine durch Leerzeichen getrennte Liste von `id`s der Elemente, um detailliertere Informationen zu erhalten, als seine Werte an. Wenn `aria-details` auf einem Element enthalten ist, informieren unterstützende Technologien die Benutzer über die Verfügbarkeit erweiterter Informationen und ermöglichen dem Benutzer, zu dem referenzierten Inhalt zu navigieren.

Elemente, die durch `aria-details` referenziert werden, sollen mehr Informationen enthalten, als normalerweise über [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) bereitgestellt würden.

Die durch `aria-details` referenzierten Elemente sollten für alle Benutzer sichtbar sein. `aria-details` informiert Benutzer, die ansonsten möglicherweise nicht in der Lage sind, einen Bildschirm zu scannen und schnell zu erkennen, dass der erklärende Inhalt verfügbar ist.

> **Hinweis:** `aria-details` hat keine Auswirkungen auf die zugängliche Beschreibung.

Im Gegensatz zu `aria-describedby` werden Elemente, die durch `aria-details` referenziert werden, nicht in zugänglichen Beschreibungen verwendet und nicht in eine einfache Zeichenkette umgewandelt, wenn sie Benutzern unterstützender Technologien präsentiert werden. Sollte der zugehörige Inhalt nicht zu lang sein und das Reduzieren des Inhalts des referenzierten Elements auf einen einfachen Textstring keinen Informationsverlust verursachen, sollten Sie stattdessen `aria-describedby` verwenden. Es ist jedoch gültig, dass ein Element sowohl `aria-details` als auch eine Beschreibung mit entweder `aria-describedby` oder `aria-description` spezifiziert besitzt.

## Beispiel

Bei Definitions- und Begriffrollen würde `aria-details` am [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)-Element mit der `id` des Elements mit einer [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role)-Rolle enthalten sein.

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
  - : Eine `id` oder eine durch Leerzeichen getrennte Liste von ids der Elemente, die zusätzliche verwandte Informationen bereitstellen oder darauf verlinken.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [id](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [Das `alt`-Attribut von Bildern](/de/docs/Web/API/HTMLImageElement/alt)
- HTML [title](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut
