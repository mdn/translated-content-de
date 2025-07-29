---
title: Globale MathML-Attribute
short-title: Globale Attribute
slug: Web/MathML/Reference/Global_attributes
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

**Globale Attribute** sind Attribute, die für alle MathML-Elemente gelten; sie können auf allen Elementen verwendet werden, auch wenn sie auf einigen Elementen keine Wirkung haben.

Globale Attribute können bei allen [MathML-Elementen](/de/docs/Web/MathML/Reference/Element) angegeben werden, _auch bei solchen, die nicht im Standard definiert sind_. Das bedeutet, dass alle nicht standardisierten Elemente diese Attribute zulassen müssen, obwohl die Verwendung dieser Elemente dazu führt, dass das Dokument nicht mehr MathML-konform ist.

Zusätzlich zu den grundlegenden globalen MathML-Attributen existieren folgende globale Attribute:

- Die [Event-Handler-](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers) Attribute wie **`onclick`**, **`onfocus`** usw.
- Das [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href)-Attribut, um MathML-Elemente zu einem Hyperlink zu machen.

## Liste der globalen Attribute

- [`autofocus`](/de/docs/Web/MathML/Reference/Global_attributes/autofocus)
  - : Ein boolesches Attribut, das angibt, dass das Element beim Laden der Seite fokussiert werden soll.
- [`class`](/de/docs/Web/MathML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und zuzugreifen.
- [`data-*`](/de/docs/Web/MathML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, genannt benutzerdefinierte Datenattribute, die den Austausch von proprietären Informationen zwischen dem [MathML](/de/docs/Web/MathML) und seiner {{Glossary("DOM", "DOM")}}-Repräsentation ermöglichen, die von Skripten verwendet werden können. Alle solchen benutzerdefinierten Daten sind über die [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die [`MathMLElement.dataset`](/de/docs/Web/API/MathMLElement/dataset)-Eigenschaft bietet Zugriff darauf.
- [`dir`](/de/docs/Web/MathML/Reference/Global_attributes/dir)
  - : Ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das die Richtung des MathML-Elements angibt. Es kann folgende Werte haben:
    - `ltr`, was für _left to right_ steht und verwendet wird, um mathematische Ausdrücke von links nach rechts darzustellen (z. B. englischer oder marokkanischer Stil);
    - `rtl`, was für _right to left_ steht und verwendet wird, um mathematische Ausdrücke von rechts nach links darzustellen (z. B. maghrebinischer oder mashrekischer Stil);
- [`displaystyle`](/de/docs/Web/MathML/Reference/Global_attributes/displaystyle)
  - : Ein boolesches Attribut, das den [math-style](/de/docs/Web/CSS/math-style) für das Element festlegt.
    - `true`, was `normal` bedeutet.
    - `false`, was `compact` bedeutet.
- [`id`](/de/docs/Web/MathML/Reference/Global_attributes/id)
  - : Definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Sie dient dazu, das Element bei der Verlinkung (mit einem Fragmentbezeichner), Scripting oder Styling (mit CSS) zu identifizieren.
- [`mathbackground`](/de/docs/Web/MathML/Reference/Global_attributes/mathbackground)
  - : Eine [Hintergrundfarbe](/de/docs/Web/CSS/background-color) für das Element.
- [`mathcolor`](/de/docs/Web/MathML/Reference/Global_attributes/mathcolor)
  - : Eine [Farbe](/de/docs/Web/CSS/color) für das Element.
- [`mathsize`](/de/docs/Web/MathML/Reference/Global_attributes/mathsize)
  - : Ein {{cssxref("length-percentage")}}, das als [Schriftgröße](/de/docs/Web/CSS/font-size) für das Element verwendet wird.
- [`nonce`](/de/docs/Web/MathML/Reference/Global_attributes/nonce)
  - : Ein kryptographisches Nonce ("number used once"), das von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf fortgesetzt werden darf.
- [`scriptlevel`](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel)
  - : Gibt eine [math-depth](/de/docs/Web/CSS/math-depth) für das Element an. Siehe die [scriptlevel-Seite](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel#values) für akzeptierte Werte und Zuordnungen.
- [`style`](/de/docs/Web/MathML/Reference/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Stildeklarationen, die auf das Element angewendet werden sollen. Es wird empfohlen, dass Stile in einer separaten Datei oder Dateien definiert werden. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck, schnelle Stiländerungen zu ermöglichen, beispielsweise zu Testzwecken.
- [`tabindex`](/de/docs/Web/MathML/Reference/Global_attributes/tabindex)
  - : Ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (ist _fokussierbar_), ob es an der sequentiellen Tastaturnavigation teilnehmen sollte und falls ja, an welcher Position. Es kann mehrere Werte haben:
    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar, aber nicht über sequentielle Tastaturnavigation erreichbar sein soll;
    - `0` bedeutet, dass das Element fokussierbar und über sequentielle Tastaturnavigation erreichbar sein soll, aber seine relative Reihenfolge wird durch die Plattformkonvention bestimmt;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über sequentielle Tastaturnavigation erreichbar sein soll; Die Reihenfolge, in der die Elemente fokussiert werden, ist der aufsteigende Wert des `tabindex`. Wenn mehrere Elemente denselben tabindex haben, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element) Schnittstelle, die das Abfragen der meisten globalen Attribute ermöglicht.
