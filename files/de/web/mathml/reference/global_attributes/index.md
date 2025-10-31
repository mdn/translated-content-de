---
title: MathML globale Attribute
short-title: Globale Attribute
slug: Web/MathML/Reference/Global_attributes
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**Globale Attribute** sind Attribute, die für alle MathML-Elemente gelten; sie können auf allen Elementen verwendet werden, auch wenn sie auf einigen Elementen keine Wirkung haben.

Globale Attribute können auf alle [MathML-Elemente](/de/docs/Web/MathML/Reference/Element) angewendet werden, _sogar auf jene, die nicht im Standard spezifiziert sind_. Das bedeutet, dass auch nicht-standardisierte Elemente diese Attribute unterstützen müssen, obwohl die Verwendung solcher Elemente bedeutet, dass das Dokument nicht mehr MathML-konform ist.

Zusätzlich zu den grundlegenden globalen MathML-Attributen existieren auch folgende globale Attribute:

- Die [Event-Handler](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers) Attribute wie **`onclick`**, **`onfocus`** usw.
- Das [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) Attribut, um ein MathML-Element als Hyperlink zu erstellen.

## Liste der globalen Attribute

- [`autofocus`](/de/docs/Web/MathML/Reference/Global_attributes/autofocus)
  - : Ein boolesches Attribut, das angibt, dass das Element beim Laden der Seite fokussiert werden soll.
- [`class`](/de/docs/Web/MathML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es, mithilfe von CSS und JavaScript, spezifische Elemente über [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.
- [`data-*`](/de/docs/Web/MathML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, genannt benutzerdefinierte Datenattribute, die es ermöglichen, proprietäre Informationen zwischen dem [MathML](/de/docs/Web/MathML) und seiner {{Glossary("DOM", "DOM")}}-Repräsentation auszutauschen, die von Skripten genutzt werden können. Alle derartigen benutzerdefinierten Daten sind über das [`MathMLElement`](/de/docs/Web/API/MathMLElement) Interface des Elements verfügbar, auf dem das Attribut gesetzt ist. Die [`MathMLElement.dataset`](/de/docs/Web/API/MathMLElement/dataset) Eigenschaft ermöglicht den Zugriff darauf.
- [`dir`](/de/docs/Web/MathML/Reference/Global_attributes/dir)
  - : Ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das die Richtung des MathML-Elements angibt. Es kann die folgenden Werte haben:
    - `ltr`, was _links nach rechts_ bedeutet und verwendet wird, um mathematische Ausdrücke von links nach rechts darzustellen (z. B. englischer oder marokkanischer Stil);
    - `rtl`, was _rechts nach links_ bedeutet und verwendet wird, um mathematische Ausdrücke von rechts nach links darzustellen (z. B. Maghreb- oder Machrek-Stil);
- [`displaystyle`](/de/docs/Web/MathML/Reference/Global_attributes/displaystyle):
  - : Ein boolesches Attribut, das den [math-style](/de/docs/Web/CSS/Reference/Properties/math-style) für das Element festlegt.
    - `true`, was `normal` bedeutet.
    - `false`, was `compact` bedeutet.
- [`id`](/de/docs/Web/MathML/Reference/Global_attributes/id)
  - : Definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Ihr Zweck ist es, das Element bei der Verlinkung (unter Verwendung eines Fragmentbezeichners), beim Skripten oder beim Styling (mit CSS) zu identifizieren.
- [`mathbackground`](/de/docs/Web/MathML/Reference/Global_attributes/mathbackground)
  - : Eine [Hintergrundfarbe](/de/docs/Web/CSS/Reference/Properties/background-color) für das Element.
- [`mathcolor`](/de/docs/Web/MathML/Reference/Global_attributes/mathcolor)
  - : Eine [Farbe](/de/docs/Web/CSS/Reference/Properties/color) für das Element.
- [`mathsize`](/de/docs/Web/MathML/Reference/Global_attributes/mathsize)
  - : Ein {{cssxref("length-percentage")}}, der als [Schriftgröße](/de/docs/Web/CSS/Reference/Properties/font-size) für das Element verwendet wird.
- [`nonce`](/de/docs/Web/MathML/Reference/Global_attributes/nonce)
  - : Ein kryptografischer `nonce` ("number used once"), der von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf durchgeführt werden darf.
- [`scriptlevel`](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel)
  - : Gibt eine [math-depth](/de/docs/Web/CSS/Reference/Properties/math-depth) für das Element an. Siehe die [scriptlevel-Seite](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel#values) für die akzeptierten Werte und Zuordnungen.
- [`style`](/de/docs/Web/MathML/Reference/Global_attributes/style)
  - : Beinhaltet [CSS](/de/docs/Web/CSS) Stil-Deklarationen, die auf das Element angewendet werden. Es wird empfohlen, dass Stile in einer separaten Datei oder Dateien definiert werden. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck einem schnellen Styling zu erlauben, zum Beispiel für Testzwecke.
- [`tabindex`](/de/docs/Web/MathML/Reference/Global_attributes/tabindex)
  - : Ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (ist _fokussierbar_), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und, wenn ja, an welcher Position. Es kann mehrere Werte annehmen:
    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein soll, aber nicht über die sequentielle Tastaturnavigation erreichbar sein soll;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar ist, aber seine relative Ordnung durch die Plattformkonvention definiert wird;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar ist; die Reihenfolge, in der die Elemente fokussiert werden, erfolgt in der aufsteigenden Reihenfolge des `tabindex`. Wenn mehrere Elemente den gleichen `tabindex` haben, folgt ihre relative Reihenfolge ihrer relativen Position im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`Element`](/de/docs/Web/API/Element) Interface, das es ermöglicht, die meisten globalen Attribute abzufragen.
