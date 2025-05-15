---
title: "ARIA: aria-details-Attribut"
short-title: aria-details
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-details
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das globale `aria-details`-Attribut identifiziert das Element (oder die Elemente), die zusätzliche Informationen in Bezug auf das Objekt bereitstellen.

## Beschreibung

Das `aria-details`-Attribut kann verwendet werden, um zusätzliche Informationen oder komplexe Beschreibungen zu einem Objekt bereitzustellen. Es wird verwendet, um Nutzer von unterstützenden Technologien über den Inhalt zu informieren, indem es umfassendere Informationen bereitstellt, sei es, weil dieser Inhalt im aktuellen Dokument enthalten ist oder weil es sich um einen Link zu weiteren Ressourcen handelt.

Es gibt andere HTML- und WAI-ARIA-Eigenschaften mit ähnlichen Zwecken. Das HTML-{{HTMLElement('label')}}-Element sowie die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)- und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Eigenschaften werden verwendet, um kurze Beschriftungen für ein Objekt bereitzustellen. Das HTML-`title`-Attribut und die [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)- und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Eigenschaften bieten längere, unformatierte Textbeschreibungen eines Objekts an. Wenn jedoch zusätzliche Informationen, komplexe Beschreibungen oder navigierbare Inhalte in Bezug auf das Objekt notwendig und verfügbar sind, sollte das `aria-details`-Attribut verwendet werden.

Das `aria-details`-Attribut hat einen ähnlichen Zweck wie das nie vollständig unterstützte `longdesc`-Attribut von HTML – eine URL einer langen Beschreibung zum Inhalt eines ersetzten Elements –, das aufgrund mangelnder Unterstützung und Missbrauch veraltet ist.

Das `aria-details`-Attribut nimmt die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) oder eine durch Leerzeichen getrennte Liste von `id`s der Elemente, um detailliertere Informationen zu erhalten, als Werte an. Wenn `aria-details` in einem Element enthalten ist, informieren unterstützende Technologien die Nutzer über die Verfügbarkeit erweiterter Informationen, wodurch der Benutzer zum referenzierten Inhalt navigieren kann.

Die von `aria-details` referenzierten Elemente sollen mehr Informationen enthalten, als normalerweise über [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) bereitgestellt würden.

Die von `aria-details` referenzierten Elemente sollten für alle Benutzer sichtbar sein. `aria-details` informiert Benutzer, die andernfalls möglicherweise nicht in der Lage wären, schnell einen Bildschirm zu scannen und zu erkennen, dass erklärende Inhalte verfügbar sind.

> **Note:** `aria-details` hat keine Auswirkungen auf die zugängliche Beschreibung.

Im Unterschied zu `aria-describedby` werden Elemente, die von `aria-details` referenziert werden, nicht in zugängliche Beschreibungen einbezogen und werden nicht in eine einfache Zeichenkette umgewandelt, wenn sie Benutzern von unterstützenden Technologien präsentiert werden. Wenn der zugehörige Inhalt nicht zu lang ist und das Vereinfachen der Inhalte des referenzierten Elements zu einer einfachen Textzeichenkette keinen Informationsverlust verursachen würde, ziehen Sie in Betracht, stattdessen `aria-describedby` zu verwenden. Es ist jedoch gültig, dass ein Element sowohl `aria-details` als auch eine Beschreibung mit entweder `aria-describedby` oder `aria-description` spezifiziert haben kann.

## Beispiel

Bei den Rollen "definition" und "term" würde `aria-details` im [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)-Element mit der `id` des Elements mit einer [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role)-Rolle enthalten sein.

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
  - : Eine `id` oder eine durch Leerzeichen getrennte Liste von ids von Elementen, die zusätzliche oder verwandte Informationen bereitstellen oder darauf verlinken.

## Zugehörige Schnittstellen

- [`Element.ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements)
  - : Die `ariaDetailsElements`-Eigenschaft ist Teil der Schnittstelle eines jeden Elements. Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-details`-Attribut reflektieren ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements)
  - : Die `ariaDetailsElements`-Eigenschaft ist Teil der Schnittstelle eines jeden benutzerdefinierten Elements. Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-details`-Attribut reflektieren ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Wird in **allen** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-[id](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [Das Bild-`alt`-Attribut](/de/docs/Web/API/HTMLImageElement/alt)
- HTML-[title](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut
