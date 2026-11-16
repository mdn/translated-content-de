---
title: "ARIA: aria-details-Attribut"
short-title: aria-details
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-details
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das globale Attribut `aria-details` identifiziert das Element (oder die Elemente), das zusätzliche Informationen zu einem Objekt bereitstellt.

## Beschreibung

Mit dem Attribut `aria-details` können zusätzliche Informationen oder komplexe Beschreibungen zu einem Objekt bereitgestellt werden. Es informiert Nutzende assistiver Technologien darüber, dass weiterführende Informationen verfügbar sind – unabhängig davon, ob sich diese im aktuellen Dokument befinden oder über einen Link zu zusätzlichen Ressourcen erreichbar sind.

Andere HTML- und WAI-ARIA-Eigenschaften erfüllen ähnliche Zwecke. Das HTML-Element {{HTMLElement('label')}} sowie die Eigenschaften [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) stellen kurze Beschriftungen für ein Objekt bereit. Das HTML-Attribut `title` sowie die Eigenschaften [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) stellen längere Beschreibungen als einfachen Text bereit. Wenn jedoch zusätzliche Informationen, komplexe Beschreibungen oder navigierbare Inhalte zu einem Objekt erforderlich und verfügbar sind, sollte das Attribut `aria-details` verwendet werden.

Das Attribut `aria-details` erfüllt einen ähnlichen Zweck wie das nie vollständig unterstützte HTML-Attribut `longdesc`. Dieses verwies über eine URL auf eine ausführliche Beschreibung des Inhalts eines ersetzten Elements und wurde aufgrund mangelnder Unterstützung und missbräuchlicher Verwendung als veraltet eingestuft.

Das Attribut `aria-details` akzeptiert als Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements, das detailliertere Informationen bereitstellt, oder eine durch Leerzeichen getrennte Liste solcher `id`-Werte. Wenn `aria-details` für ein Element angegeben ist, informieren assistive Technologien Nutzende über die Verfügbarkeit weiterführender Informationen und ermöglichen ihnen, zum referenzierten Inhalt zu navigieren.

Elemente, auf die `aria-details` verweist, sollen mehr Informationen enthalten, als normalerweise über [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) bereitgestellt würden.

Die Elemente, auf die `aria-details` verweist, sollten für alle Nutzenden sichtbar sein. `aria-details` informiert insbesondere Personen über die verfügbaren Erläuterungen, die einen Bildschirm möglicherweise nicht überblicken und diese Inhalte daher nicht ohne Weiteres erkennen können.

> [!NOTE]
> `aria-details` hat keinen Einfluss auf die zugängliche Beschreibung.

Anders als bei `aria-describedby` werden Elemente, auf die `aria-details` verweist, nicht für zugängliche Beschreibungen verwendet und bei der Ausgabe durch assistive Technologien nicht in eine einfache Zeichenfolge umgewandelt. Wenn der zugehörige Inhalt nicht zu lang ist und seine Umwandlung in eine einfache Zeichenfolge keinen Informationsverlust verursachen würde, sollten Sie stattdessen `aria-describedby` in Betracht ziehen. Ein Element kann jedoch sowohl `aria-details` als auch eine über `aria-describedby` oder `aria-description` festgelegte Beschreibung haben.

## Werte

- Liste von ID-Referenzen
  - : Eine `id` oder eine durch Leerzeichen getrennte Liste von `id`-Werten für Elemente, die zusätzliche Informationen bereitstellen oder darauf verlinken.

## Zugehörige Schnittstellen

- [`Element.ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements)
  - : Die Eigenschaft `ariaDetailsElements` ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im Attribut `aria-details` widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements)
  - : Die Eigenschaft `ariaDetailsElements` ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im Attribut `aria-details` widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Beispiel

Bei den Rollen `definition` und `term` wird `aria-details` auf dem Element mit der Rolle [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) angegeben. Als Wert dient die `id` des Elements mit der Rolle [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role).

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-Attribut [id](/de/docs/Web/HTML/Reference/Global_attributes/id)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [Das `alt`-Attribut für Bilder](/de/docs/Web/API/HTMLImageElement/alt)
- HTML-Attribut [title](/de/docs/Web/HTML/Reference/Global_attributes/title)
