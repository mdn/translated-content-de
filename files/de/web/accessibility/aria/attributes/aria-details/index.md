---
title: aria-details
slug: Web/Accessibility/ARIA/Attributes/aria-details
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das globale `aria-details` Attribut identifiziert das Element (oder die Elemente), das zusätzliche Informationen in Bezug auf das Objekt bereitstellt.

## Beschreibung

Das `aria-details` Attribut kann verwendet werden, um einem Objekt zusätzliche Informationen oder komplexe Beschreibungen bereitzustellen. Es dient dazu, Benutzer von unterstützenden Technologien über den Inhalt zu informieren, indem es detailliertere Informationen bietet, unabhängig davon, ob dieser Inhalt im aktuellen Dokument enthalten ist oder einen Link zu zusätzlichen Ressourcen darstellt.

Es gibt andere HTML- und WAI-ARIA-Eigenschaften mit ähnlichen Zwecken. Das HTML {{HTMLElement('label')}} Element und die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Eigenschaften werden verwendet, um Objekten kurze Bezeichnungen zu geben. Das HTML `title` Attribut und die [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description) und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Eigenschaften bieten längere, klar formulierte Textbeschreibungen eines Objekts. Wenn jedoch zusätzliche Informationen, komplexe Beschreibungen oder navigierbare Inhalte in Bezug auf das Objekt notwendig und verfügbar sind, sollte das `aria-details` Attribut verwendet werden.

Das `aria-details` Attribut dient einem ähnlichen Zweck wie das nie vollständig unterstützte HTML-`longdesc` Attribut － eine URL einer langen Beschreibung des Inhalts eines ersetzten Elements －, das aufgrund fehlender Unterstützung und Fehlgebrauch als veraltet gilt.

Das `aria-details` Attribut nimmt die [`id`](/de/docs/Web/HTML/Global_attributes#id) oder eine durch Leerzeichen getrennte Liste von `id`s der Elemente, die detailliertere Informationen enthalten, als seine Werte. Wenn `aria-details` auf einem Element enthalten ist, informieren unterstützende Technologien die Benutzer über die Verfügbarkeit erweiterter Informationen und ermöglichen es dem Benutzer, zum referenzierten Inhalt zu navigieren.

Die durch `aria-details` referenzierten Elemente sollen mehr Informationen enthalten als normalerweise über [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) bereitgestellt werden.

Die durch `aria-details` referenzierten Elemente sollten für alle Benutzer sichtbar sein. `aria-details` informiert Benutzer, die andernfalls nicht in der Lage sein könnten, einen Bildschirm zu scannen und schnell zu erkennen, dass der erklärende Inhalt verfügbar ist.

> **Note:** `aria-details` hat keinen Einfluss auf die zugängliche Beschreibung.

Im Gegensatz zu `aria-describedby` werden die durch `aria-details` referenzierten Elemente nicht in zugänglichen Beschreibungen verwendet und nicht in eine einfache Zeichenkette umgewandelt, wenn sie Benutzern unterstützender Technologien präsentiert werden. Wenn der zugehörige Inhalt nicht zu lang ist und das Zusammenfassen der Inhalte des referenzierten Elements in eine einfache Textzeichenkette keinen Informationsverlust verursachen würde, ziehen Sie in Betracht, stattdessen `aria-describedby` zu verwenden. Es ist jedoch zulässig, dass ein Element sowohl `aria-details` als auch eine Beschreibung mit entweder `aria-describedby` oder `aria-description` angegeben hat.

## Beispiel

Bei Begriffs- und Definitionsrollen würde `aria-details` auf dem [`term`](/de/docs/Web/Accessibility/ARIA/Roles/term_role) Element mit der `id` des Elements mit einer [`definition`](/de/docs/Web/Accessibility/ARIA/Roles/definition_role) Rolle enthalten sein.

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
  - : Eine `id` oder durch Leerzeichen getrennte Liste von ids der Elemente, die zusätzliche verwandte Informationen bereitstellen oder darauf verweisen.

## Zugehörige Rollen

Wird in **ALLE** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [id](/de/docs/Web/HTML/Global_attributes/id) Attribut
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [Das `alt` Attribut des Bildes](/de/docs/Web/API/HTMLImageElement/alt)
- HTML [title](/de/docs/Web/HTML/Global_attributes/title) Attribut
