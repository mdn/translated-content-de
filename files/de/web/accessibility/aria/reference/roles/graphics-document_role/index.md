---
title: "ARIA: Rolle graphics-document"
short-title: graphics-document
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-document_role
l10n:
  sourceCommit: 370f1912b54d24bd7da541f8f2dd98c26d377121
---

Die Rolle `graphics-document` kennzeichnet einen Typ von [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role), bei dem das visuelle Erscheinungsbild oder die Anordnung des Inhalts eine Bedeutung vermittelt.

> [!NOTE]
> Die Rolle `graphics-document` ist in der Spezifikation des [WAI-ARIA Graphics Module](https://w3c.github.io/graphics-aria/) definiert.
> Sie ist nicht Teil der grundlegenden [WAI-ARIA](https://w3c.github.io/aria/)-Spezifikation.

## Beschreibung

Die Rolle `graphics-document` wird dem Wurzelelement einer Grafik zugewiesen, deren visuelle Darstellung, gewöhnlich in zwei Dimensionen, eine semantische Bedeutung hat. Es wird erwartet, dass Benutzer diesen Inhalt hauptsächlich erkunden, statt eine Anwendung zu steuern.

Sie wird üblicherweise für strukturierte, semantisch aussagekräftige Grafiken wie Flussdiagramme, Karten, Diagramme und technische Zeichnungen verwendet.

Die Rolle `graphics-document` unterscheidet sich von ähnlichen Rollen wie folgt:

- Anders als ein Element mit der Rolle [`img`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) kann ein Element mit der Rolle `graphics-document` untergeordnete Elemente mit semantischer Bedeutung enthalten, etwa Links und andere interaktive Widgets.
- Im Vergleich zu anderen Typen von [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role) zeichnet sich ein `graphics-document` dadurch aus, dass seine visuelle Darstellung für seine Bedeutung wesentlich ist.
- Anders als ein [`graphics-object`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role) ist ein `graphics-document` eigenständig: Seine Bedeutung hängt nicht vom umgebenden Inhalt ab, und es liefert den Kontext für die Interpretation seiner untergeordneten Elemente.

Ein `graphics-document` kann ein weiteres `graphics-document` enthalten, beispielsweise ein in eine Karte eingebettetes Balkendiagramm. Jedes verschachtelte Dokument bietet einen eigenen Kontext für die Navigation.

Wenn eine einzelne große Grafik abgegrenzte Bereiche enthält, die sich umordnen lassen, ohne ihre Bedeutung zu verändern, sollte jeder Bereich als eigenständiges `graphics-document` getrennt werden. Sie können diese Bereiche mithilfe der Rolle [`figure`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role) gruppieren.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Ein `graphics-document` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn eine sichtbare Beschriftung vorhanden ist, andernfalls `aria-label`. Bei SVG kann auch ein {{SVGElement("title")}}-Element den Namen bereitstellen.

## Beispiele

Dieses Flussdiagramm verwendet HTML-Elemente, die mit CSS angeordnet sind. Die Rolle `graphics-document` kennzeichnet das Diagramm als grafisches Dokument, weil die Anordnung seiner Knoten und Pfeile den Authentifizierungsablauf vermittelt. Das Attribut `aria-label` stellt seinen zugänglichen Namen bereit. Jeder Pfeil hat die Rolle `graphics-symbol` und eine Beschriftung, die die Verbindung beschreibt, sodass der Ablauf auch ohne Sicht auf die Anordnung verständlich ist.

Würde diese Grafik stattdessen mit {{SVGElement("svg")}} umgesetzt, wäre keine `role`-Deklaration erforderlich, da [SVG-AAM `graphics-document` als Standardrolle definiert](https://w3c.github.io/svg-aam/).

```html
<div
  class="flowchart"
  role="graphics-document"
  aria-label="User authentication flowchart">
  <div
    class="node start"
    role="graphics-object"
    aria-label="User login: Enter credentials">
    User login
  </div>
  <div
    class="arrow next"
    role="graphics-symbol"
    aria-label="After entering credentials, check whether they are valid"></div>
  <div
    class="node decision"
    role="graphics-object"
    aria-label="Valid?: Are the credentials valid?">
    <span>Valid?</span>
  </div>
  <div
    class="arrow yes"
    role="graphics-symbol"
    aria-label="Yes: If credentials are valid, grant access">
    <span>Yes</span>
  </div>
  <div class="node grant" role="graphics-object">Grant access</div>
  <div
    class="arrow no"
    role="graphics-symbol"
    aria-label="No: If credentials are invalid, deny access">
    <span>No</span>
  </div>
  <div class="node deny" role="graphics-object">Deny access</div>
</div>
```

```css
.flowchart {
  position: relative;
  width: 500px;
  height: 300px;
  color: black;
  background: white;
  font-size: large;
}

.node {
  position: absolute;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  width: 100px;
  height: 60px;
  border: 1px solid black;
}

.start {
  left: 200px;
  top: 30px;
  background: #3eca39;
}

.decision {
  left: 200px;
  top: 130px;
  border: none;
  background: black;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}

.decision::before {
  content: "";
  position: absolute;
  inset: 1px 2px;
  background: #cac539;
  clip-path: inherit;
}

.decision span {
  position: relative;
}

.grant {
  left: 290px;
  top: 220px;
  background: #86ca39;
}

.deny {
  left: 120px;
  top: 220px;
  color: white;
  background: #ca393e;
}

.arrow {
  position: absolute;
  height: 1.6px;
  background: black;
  transform-origin: left center;
}

.arrow::after {
  content: "";
  position: absolute;
  right: 0;
  top: -2.2px;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-left: 10px solid black;
}

.next {
  left: 250px;
  top: 90px;
  width: 40px;
  transform: rotate(90deg);
}

.yes {
  left: 280px;
  top: 172px;
  width: 77px;
  transform: rotate(39deg);
}

.no {
  left: 220px;
  top: 172px;
  width: 69px;
  transform: rotate(136deg);
}

.arrow span {
  position: absolute;
  left: 25px;
}

.yes span {
  top: -22px;
  transform: rotate(-39deg);
}

.no span {
  top: 8px;
  transform: rotate(-136deg);
}
```

{{EmbedLiveSample('Examples', 600, 350)}}

## Bewährte Vorgehensweisen

Fügen Sie die Rolle `graphics-document` nicht ausdrücklich hinzu, wenn das Element diese Rolle bereits durch seine native Semantik erhält, wie es bei {{SVGElement("svg")}} der Fall ist.

Verwenden Sie für dekorative SVG-Grafiken `aria-hidden="true"`. Verwenden Sie für Grafiken ohne sinnvolle interne Struktur die Rolle [`img`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) mit einem zugänglichen Namen. Verwenden Sie für HTML-Bilder das native Element {{HTMLElement("img")}} mit einem `alt`-Attribut.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{SVGElement('svg')}}
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA: Rolle `graphics-symbol`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-symbol_role)
- [ARIA: Rolle `graphics-object`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role)
- [ARIA: Rolle `figure`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
- [Hinweise zur Verwendung von ARIA in HTML](https://w3c.github.io/using-aria/)
