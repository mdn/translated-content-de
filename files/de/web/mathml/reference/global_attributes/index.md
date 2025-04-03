---
title: MathML Globale Attribute
short-title: Globale Attribute
slug: Web/MathML/Reference/Global_attributes
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

**Globale Attribute** sind Attribute, die allen MathML-Elementen gemeinsam sind; sie können auf alle Elemente angewendet werden, obwohl sie bei einigen Elementen keine Wirkung haben könnten.

Globale Attribute können bei allen [MathML-Elementen](/de/docs/Web/MathML/Reference/Element) angegeben werden, _auch bei solchen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass alle nicht standardmäßigen Elemente diese Attribute dennoch zulassen müssen, auch wenn die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr MathML-konform ist.

Zusätzlich zu den grundlegenden MathML-Globalen Attributen existieren auch folgende globale Attribute:

- Die [Event Handler](/de/docs/Web/Events/Event_handlers) Attribute wie **`onclick`**, **`onfocus`** usw.
- Das [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href)-Attribut, um ein MathML-Element zu einem Hyperlink zu machen.

## Liste der globalen Attribute

- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)

  - : Ein boolesches Attribut, das angibt, dass das Element beim Laden der Seite fokussiert werden soll.

- [`class`](/de/docs/Web/HTML/Global_attributes/class)

  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und zuzugreifen.

- [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)

  - : Bildet eine Klasse von Attributen, die als benutzerdefinierte Datenattribute bezeichnet werden und den Austausch proprietärer Informationen zwischen dem [MathML](/de/docs/Web/MathML) und seiner {{Glossary("DOM", "DOM")}}-Darstellung ermöglichen, die von Skripten verwendet werden können. Alle solche benutzerdefinierten Daten sind über das [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Interface des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft gibt Zugriff auf sie.

- [`dir`](/de/docs/Web/MathML/Reference/Global_attributes/dir)

  - : Ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das die Richtung des MathML-Elements angibt. Es kann folgende Werte haben:

    - `ltr`, was _von links nach rechts_ bedeutet und verwendet wird, um mathematische Ausdrücke von links nach rechts darzustellen (z.B. englischer oder marokkanischer Stil);
    - `rtl`, was _von rechts nach links_ bedeutet und verwendet wird, um mathematische Ausdrücke von rechts nach links darzustellen (z.B. Maghreb- oder Machrek-Stil);

- [`displaystyle`](/de/docs/Web/MathML/Reference/Global_attributes/displaystyle):

  - : Ein boolescher Wert, der den [math-style](/de/docs/Web/CSS/math-style) für das Element festlegt.
    - `true`, was `normal` bedeutet.
    - `false`, was `kompakt` bedeutet.

- [`id`](/de/docs/Web/HTML/Global_attributes/id)

  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss. Sein Zweck besteht darin, das Element beim Verlinken (mittels Fragment-Identifier), Skripting oder Styling (mit CSS) zu identifizieren.

- [`mathbackground`](/de/docs/Web/MathML/Reference/Global_attributes/mathbackground)

  - : Eine [Hintergrundfarbe](/de/docs/Web/CSS/background-color) für das Element.

- [`mathcolor`](/de/docs/Web/MathML/Reference/Global_attributes/mathcolor)

  - : Eine [Farbe](/de/docs/Web/CSS/color) für das Element.

- [`mathsize`](/de/docs/Web/MathML/Reference/Global_attributes/mathsize)

  - : Ein {{cssxref("length-percentage")}}, das als [Schriftgröße](/de/docs/Web/CSS/font-size) für das Element verwendet wird.

- [`nonce`](/de/docs/Web/HTML/Global_attributes/nonce)

  - : Eine kryptografische Nonce ("number used once"), die von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf ausgeführt werden darf.

- [`scriptlevel`](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel)

  - : Gibt eine [mathematische Tiefe](/de/docs/Web/CSS/math-depth) für das Element an. Siehe die [Scriptlevel-Seite](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel#values) für akzeptierte Werte und Zuordnung.

- [`style`](/de/docs/Web/HTML/Global_attributes/style)

  - : Enthält [CSS](/de/docs/Web/CSS)-Stildeklarationen, die auf das Element angewendet werden sollen. Es wird empfohlen, dass Styles in einer separaten Datei oder Dateien definiert werden. Dieses Attribut und das {{MathMLElement("style")}}-Element haben hauptsächlich den Zweck, ein schnelles Styling zu ermöglichen, beispielsweise für Testzwecke.

- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)

  - : Ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus annehmen kann (fokussierbar ist), ob es in die sequentielle Tastaturnavigation einbezogen werden soll und wenn ja, an welcher Position. Es kann mehrere Werte annehmen:

    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein soll, aber nicht über die sequentielle Tastaturnavigation erreichbar sein soll;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein soll, aber seine relative Reihenfolge wird durch die Plattformkonvention festgelegt;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein soll; die Reihenfolge, in der die Elemente fokussiert werden, ergibt sich aus dem steigenden Wert des [**tabindex**](#tabindex). Wenn mehrere Elemente denselben tabindex teilen, folgt ihre relative Ordnung ihren relativen Positionen im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)-Interface, das das Abfragen der meisten globalen Attribute ermöglicht.
