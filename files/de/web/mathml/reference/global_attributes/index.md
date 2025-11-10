---
title: MathML globale Attribute
short-title: Globale Attribute
slug: Web/MathML/Reference/Global_attributes
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

**Globale Attribute** sind Attribute, die allen MathML-Elementen gemeinsam sind; sie können auf allen Elementen verwendet werden, obwohl sie auf einigen Elementen keine Wirkung haben können.

Globale Attribute können auf allen [MathML-Elementen](/de/docs/Web/MathML/Reference/Element) angegeben werden, _selbst auf denen, die nicht im Standard definiert sind_. Das bedeutet, dass alle nicht standardmäßigen Elemente diese Attribute dennoch zulassen müssen, auch wenn durch die Verwendung dieser Elemente das Dokument nicht mehr MathML-konform ist.

Zusätzlich zu den grundlegenden globalen MathML-Attributen existieren auch die folgenden globalen Attribute:

- Die [Event-Handler](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers)-Attribute wie **`onclick`**, **`onfocus`** usw.
- Das [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href)-Attribut, um ein MathML-Element als Hyperlink zu gestalten.

## Liste der globalen Attribute

- [`autofocus`](/de/docs/Web/MathML/Reference/Global_attributes/autofocus)
  - : Ein boolesches Attribut, das angibt, dass das Element beim Laden der Seite fokussiert werden soll.
- [`class`](/de/docs/Web/MathML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, bestimmte Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.
- [`data-*`](/de/docs/Web/MathML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, sogenannte benutzerdefinierte Datenattribute, die es ermöglichen, proprietäre Informationen zwischen dem [MathML](/de/docs/Web/MathML) und seiner {{Glossary("DOM", "DOM")}}-Repräsentation auszutauschen, die von Skripten verwendet werden können. Alle derartigen benutzerdefinierten Daten sind über die [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle des Elements zugänglich, auf dem das Attribut gesetzt ist. Die [`MathMLElement.dataset`](/de/docs/Web/API/MathMLElement/dataset)-Eigenschaft ermöglicht den Zugriff darauf.
- [`dir`](/de/docs/Web/MathML/Reference/Global_attributes/dir)
  - : Ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das die Richtung des MathML-Elements angibt. Es kann die folgenden Werte haben:
    - `ltr`, was _von links nach rechts_ bedeutet und zur Darstellung mathematischer Ausdrücke von links nach rechts verwendet wird (z. B. Englisch oder marokkanischer Stil);
    - `rtl`, was _von rechts nach links_ bedeutet und zur Darstellung mathematischer Ausdrücke von rechts nach links verwendet wird (z. B. Maghreb- oder Machrek-Stil);
- [`displaystyle`](/de/docs/Web/MathML/Reference/Global_attributes/displaystyle):
  - : Ein boolescher Wert, der den [math-style](/de/docs/Web/CSS/Reference/Properties/math-style) für das Element festlegt.
    - `true`, was `normal` bedeutet.
    - `false`, was `compact` bedeutet.
- [`id`](/de/docs/Web/MathML/Reference/Global_attributes/id)
  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element beim Verlinken (unter Verwendung eines Fragmentidentifier), Skripten oder Stylen (mit CSS) zu identifizieren.
- [`mathbackground`](/de/docs/Web/MathML/Reference/Global_attributes/mathbackground)
  - : Eine [Hintergrundfarbe](/de/docs/Web/CSS/Reference/Properties/background-color) für das Element.
- [`mathcolor`](/de/docs/Web/MathML/Reference/Global_attributes/mathcolor)
  - : Eine [Farbe](/de/docs/Web/CSS/Reference/Properties/color) für das Element.
- [`mathsize`](/de/docs/Web/MathML/Reference/Global_attributes/mathsize)
  - : Ein {{cssxref("length-percentage")}}, das als [Schriftgröße](/de/docs/Web/CSS/Reference/Properties/font-size) für das Element verwendet wird.
- [`nonce`](/de/docs/Web/MathML/Reference/Global_attributes/nonce)
  - : Ein kryptografisches Nonce ("Zahl, die einmal verwendet wird"), das von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein gegebener Abruf durchgeführt werden darf.
- [`scriptlevel`](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel)
  - : Gibt eine [math-depth](/de/docs/Web/CSS/Reference/Properties/math-depth) für das Element an. Siehe die [Scriptlevel-Seite](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel#values) für akzeptierte Werte und Zuordnung.
- [`style`](/de/docs/Web/MathML/Reference/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Stildeklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, Styles in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck, schnelles Styling zu ermöglichen, beispielsweise zum Testen.
- [`tabindex`](/de/docs/Web/MathML/Reference/Global_attributes/tabindex)
  - : Ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll, und wenn ja, an welcher Position. Es kann mehrere Werte annehmen:
    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein sollte, aber nicht über die sequentielle Tastaturnavigation erreichbar sein sollte;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte, aber seine relative Reihenfolge wird durch die Plattformkonvention definiert;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte; die Reihenfolge, in der die Elemente fokussiert werden, ist der aufsteigende Wert des `tabindex`. Wenn mehrere Elemente den gleichen tabindex haben, folgt ihre relative Reihenfolge ihrer relativen Position im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die das Abfragen der meisten globalen Attribute ermöglicht.
