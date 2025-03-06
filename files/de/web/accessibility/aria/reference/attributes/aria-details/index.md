---
title: aria-details
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-details
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das globale Attribut `aria-details` identifiziert das Element (oder die Elemente), die zusätzliche Informationen in Bezug auf das Objekt bereitstellen.

## Beschreibung

Das Attribut `aria-details` kann verwendet werden, um einem Objekt zusätzliche Informationen oder komplexe Beschreibungen zu geben. Es wird genutzt, um Nutzern von unterstützenden Technologien über den Inhalt mehr Informationen zu geben, sei es, dass dieser Inhalt innerhalb des aktuellen Dokuments liegt oder ein Link zu zusätzlichen Ressourcen ist.

Es gibt andere HTML- und WAI-ARIA-Eigenschaften, die ähnliche Zwecke erfüllen. Das HTML-{{HTMLElement('label')}}-Element und die Eigenschaften [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) werden verwendet, um kurze Bezeichnungen für ein Objekt bereitzustellen. Das HTML-Attribut `title` und die Eigenschaften [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) bieten längere Beschreibungen im einfachen Textformat eines Objekts. Wenn jedoch zusätzliche Informationen, komplexe Beschreibungen oder navigierbare Inhalte zu dem Objekt notwendig und verfügbar sind, sollte das Attribut `aria-details` verwendet werden.

Das Attribut `aria-details` erfüllt einen ähnlichen Zweck wie das nie vollständig unterstützte HTML-Attribut `longdesc` － eine URL einer langen Beschreibung zum Inhalt eines ersetzten Elements － das aufgrund mangelnder Unterstützung und Fehlnutzung veraltet ist.

Das Attribut `aria-details` nimmt das [`id`](/de/docs/Web/HTML/Global_attributes/id) oder eine durch Leerzeichen getrennte Liste von `id`s der Elemente zum Abrufen detaillierterer Informationen als Wert. Wenn `aria-details` auf ein Element angewendet wird, informieren unterstützende Technologien die Nutzer über die Verfügbarkeit erweiterter Informationen, sodass der Benutzer zu den referenzierten Inhalten navigieren kann.

Die durch `aria-details` referenzierten Elemente sollen mehr Informationen enthalten als diejenigen, die normalerweise über [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) bereitgestellt würden.

Die durch `aria-details` referenzierten Elemente sollten für alle Benutzer sichtbar sein. `aria-details` informiert Nutzer, die ansonsten möglicherweise nicht in der Lage sind, einen Bildschirm zu scannen und schnell zu erkennen, dass der erläuternde Inhalt verfügbar ist.

> **Hinweis:** `aria-details` hat keinen Einfluss auf die zugängliche Beschreibung.

Im Gegensatz zu `aria-describedby` werden die durch `aria-details` referenzierten Elemente nicht in zugänglichen Beschreibungen verwendet und werden nicht in einen einfachen Textstring umgewandelt, wenn sie Nutzern von unterstützenden Technologien präsentiert werden. Wenn der zugehörige Inhalt nicht zu lang ist und das Umwandeln der Inhalte des referenzierten Elements in einen einfachen Textstring nicht zum Informationsverlust führen würde, sollten Sie stattdessen `aria-describedby` verwenden. Es ist jedoch gültig, dass ein Element sowohl `aria-details` als auch eine Beschreibung, die entweder mit `aria-describedby` oder `aria-description` angegeben ist, hat.

## Beispiel

Bei Definitionen und Begriffen würde `aria-details` auf dem [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)-Element mit dem `id` des Elements mit einer [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role)-Rolle enthalten.

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
  - : Eine `id` oder eine durch Leerzeichen getrennte Liste von ids der Elemente, die zusätzliche verwandte Informationen bereitstellen oder verlinken.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-Attribut [id](/de/docs/Web/HTML/Global_attributes/id)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [Das `alt`-Attribut von Bildern](/de/docs/Web/API/HTMLImageElement/alt)
- HTML-Attribut [title](/de/docs/Web/HTML/Global_attributes/title)
