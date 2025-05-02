---
title: aria-details
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-details
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

Das globale `aria-details` Attribut identifiziert das Element (oder die Elemente), das zusätzliche Informationen im Zusammenhang mit dem Objekt bereitstellt.

## Beschreibung

Das `aria-details` Attribut kann verwendet werden, um einem Objekt zusätzliche Informationen oder komplexe Beschreibungen zur Verfügung zu stellen. Es dient dazu, Nutzer:innen von unterstützenden Technologien über den Inhalt zu informieren, indem es detailliertere Informationen bereitstellt, sei es innerhalb des aktuellen Dokuments oder als Link zu zusätzlichen Ressourcen.

Es gibt andere HTML- und WAI-ARIA-Eigenschaften, die ähnliche Zwecke erfüllen. Das HTML-{{HTMLElement('label')}}-Element und die Eigenschaften [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) werden verwendet, um einem Objekt kurze Beschriftungen zu geben. Das HTML `title`-Attribut und die Eigenschaften [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) bieten längere Klartextbeschreibungen eines Objekts. Wenn jedoch zusätzliche Informationen, komplexe Beschreibungen oder navigierbare Inhalte im Zusammenhang mit dem Objekt erforderlich und verfügbar sind, sollte das `aria-details` Attribut verwendet werden.

Das `aria-details` Attribut erfüllt einen ähnlichen Zweck wie das nie vollständig unterstützte HTML-Attribut `longdesc` － eine URL zu einer langen Beschreibung des Inhalts eines ersetzten Elements － das aufgrund mangelnder Unterstützung und Missbrauchs veraltet ist.

Das `aria-details` Attribut übernimmt den [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) oder eine durch Leerzeichen getrennte Liste von `id`s der Elemente, um genauere Informationen als ihre Werte zu erhalten. Wenn `aria-details` in einem Element enthalten ist, informieren unterstützende Technologien die Nutzer:innen über die Verfügbarkeit erweiterter Informationen, sodass der oder die Nutzer:in zu den referenzierten Inhalten navigieren kann.

Die durch `aria-details` referenzierten Elemente sollen mehr Informationen enthalten, als normalerweise über [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) bereitgestellt werden würden.

Die durch `aria-details` referenzierten Elemente sollten für alle Nutzer:innen sichtbar sein. `aria-details` informiert Nutzer:innen, die möglicherweise nicht in der Lage sind, einen Bildschirm zu überfliegen und schnell zu erkennen, dass erklärende Inhalte verfügbar sind.

> **Note:** `aria-details` hat keinen Einfluss auf die zugängliche Beschreibung.

Im Gegensatz zu `aria-describedby` werden durch `aria-details` referenzierte Elemente nicht in zugänglichen Beschreibungen verwendet und nicht in einen Klartext umgewandelt, wenn sie den Nutzer:innen unterstützender Technologien präsentiert werden. Wenn der zugehörige Inhalt nicht zu lang ist und das Reduzieren des Inhalts des referenzierten Elements auf einen einfachen Textstring keinen Informationsverlust verursachen würde, sollten Sie `aria-describedby` in Betracht ziehen. Es ist jedoch gültig, dass ein Element sowohl `aria-details` als auch eine Beschreibung mit entweder `aria-describedby` oder `aria-description` spezifiziert hat.

## Beispiel

Bei Definitions- und Begriffsrollen würde `aria-details` auf dem [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)-Element mit der `id` des Elements mit einer [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role)-Rolle eingefügt.

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
  - : Eine `id` oder durch Leerzeichen getrennte Liste von ids von Elementen, die zusätzliche verwandte Informationen bereitstellen oder darauf verlinken.

## Zugehörige Schnittstellen

- [`Element.ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements)
  - : Die `ariaDetailsElements` Eigenschaft ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array von Subklassen von [`Element`](/de/docs/Web/API/Element), die die `id` Referenzen im `aria-details` Attribut widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements)
  - : Die `ariaDetailsElements` Eigenschaft ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Subklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-details` Attribut widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [id](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [Das Bild-`alt`-Attribut](/de/docs/Web/API/HTMLImageElement/alt)
- HTML [title](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut
