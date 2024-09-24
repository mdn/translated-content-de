---
title: aria-details
slug: Web/Accessibility/ARIA/Attributes/aria-details
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das globale `aria-details`-Attribut identifiziert das Element (oder die Elemente), die zusätzliche Informationen zum Objekt bereitstellen.

## Beschreibung

Das `aria-details`-Attribut kann verwendet werden, um einem Objekt zusätzliche Informationen oder komplexe Beschreibungen bereitzustellen. Es wird verwendet, um Benutzer von unterstützenden Technologien über den Inhalt zu informieren, indem es detailliertere Informationen bereitstellt, sei es innerhalb des aktuellen Dokuments oder als Link zu zusätzlichen Ressourcen.

Es gibt andere HTML- und WAI-ARIA-Eigenschaften, die ähnliche Zwecke erfüllen. Das HTML-Element {{HTMLElement('label')}} und die Eigenschaften [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) werden verwendet, um kurze Bezeichnungen für ein Objekt bereitzustellen. Das HTML-`title`-Attribut und die Eigenschaften [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description) und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) bieten längere Klartextbeschreibungen eines Objekts. Wenn jedoch zusätzliche Informationen, komplexe Beschreibungen oder navigierbare Inhalte in Bezug auf das Objekt notwendig und verfügbar sind, sollte das `aria-details`-Attribut verwendet werden.

Das `aria-details`-Attribut erfüllt einen ähnlichen Zweck wie das nie vollständig unterstützte HTML-`longdesc`-Attribut - eine URL einer langen Beschreibung zu dem Inhalt eines ersetzten Elements -, das aufgrund mangelnder Unterstützung und Fehlgebrauch veraltet ist.

Das `aria-details`-Attribut nimmt das [`id`](/de/docs/Web/HTML/Global_attributes#id) oder durch Leerzeichen getrennte Liste von `id`s der Elemente, um detailliertere Informationen zu erhalten, als seine Werte an. Wenn `aria-details` in einem Element enthalten ist, informieren unterstützende Technologien die Benutzer über die Verfügbarkeit erweiterter Informationen, wodurch der Benutzer zum referenzierten Inhalt navigieren kann.

Elemente, die von `aria-details` referenziert werden, sollen mehr Informationen enthalten, als normalerweise über [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) bereitgestellt werden würden.

Die von `aria-details` referenzierten Elemente sollten für alle Benutzer sichtbar sein. `aria-details` informiert Benutzer, die möglicherweise nicht in der Lage sind, einen Bildschirm zu scannen und schnell zu erkennen, dass erklärender Inhalt verfügbar ist.

> **Hinweis:** `aria-details` hat keinen Einfluss auf die barrierefreie Beschreibung.

Im Gegensatz zu `aria-describedby` werden die von `aria-details` referenzierten Elemente nicht in barrierefreien Beschreibungen verwendet und nicht in eine einfache Zeichenfolge umgewandelt, wenn sie Benutzern von unterstützenden Technologien präsentiert werden. Wenn der zugehörige Inhalt nicht zu lang ist und das Vereinfachen des Inhalts des referenzierten Elements zu einer einfachen Textzeichenfolge keinen Informationsverlust verursachen würde, ziehen Sie die Verwendung von `aria-describedby` in Betracht. Dennoch ist es gültig, dass ein Element sowohl `aria-details` als auch eine mit entweder `aria-describedby` oder `aria-description` angegebene Beschreibung hat.

## Beispiel

Bei den Rollen Definition und Begriff würde `aria-details` auf dem [`term`](/de/docs/Web/Accessibility/ARIA/Roles/term_role)-Element mit dem `id` des Elements mit einer [`definition`](/de/docs/Web/Accessibility/ARIA/Roles/definition_role)-Rolle enthalten sein.

```html
<p>Die <strong>cubic-bezier()<strong> funktionale Notation definiert eine kubische
  <span role="term" aria-details="bezier bezImg">Bézier-Kurve</span>. Da
  diese Kurven kontinuierlich sind, werden sie häufig verwendet, um den Anfang und
  das Ende der Kurve zu glätten und werden daher manchmal als Easing-Funktionen bezeichnet.
</p>

<p role="definition" id="bezier">Eine <strong>Bézier-Kurve</strong>,
 (ausgesprochen \ ˈbe-zē-ˌā \)
 <i aria-description="Englische Aussprache">BEH-zee-ay</i>) ist eine mathematisch
 beschriebene Kurve, die in Computergrafik und Animation verwendet wird. Die Kurve ist definiert
 durch eine Reihe von Kontrollpunkten mit mindestens zwei. Webbezogene Grafiken
 und Animationen verwenden kubische Béziers, das sind Kurven mit vier Kontrollpunkten
 P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub> und P<sub>3</sub>.
</p>

<a href="bezierExplanation.html" id="bezImg"
  aria-label="Explanation of Bézier curve in CSS easing functions">
  <img alt="Animierte Bézier-Kurve mit 4 Kontrollpunkten." src="bezier.gif">
</a>
```

## Werte

- ID Referenzliste
  - : Eine `id` oder durch Leerzeichen getrennte Liste von ids der Elemente, die zusätzliche zugehörige Informationen bereitstellen oder darauf verlinken.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [id](/de/docs/Web/HTML/Global_attributes/id) Attribut
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [Das Bild `alt` Attribut](/de/docs/Web/API/HTMLImageElement/alt)
- HTML [title](/de/docs/Web/HTML/Global_attributes/title) Attribut
