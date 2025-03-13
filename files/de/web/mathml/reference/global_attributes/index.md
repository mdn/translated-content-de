---
title: Globale MathML-Attribute
short-title: Globale Attribute
slug: Web/MathML/Reference/Global_attributes
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

**Globale Attribute** sind Attribute, die für alle MathML-Elemente gelten; sie können bei allen Elementen verwendet werden, obwohl sie bei einigen Elementen möglicherweise keine Wirkung zeigen.

Globale Attribute können bei allen [MathML-Elementen](/de/docs/Web/MathML/Reference/Element) angegeben werden, _auch bei jenen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass auch nicht standardisierte Elemente diese Attribute zulassen müssen, auch wenn die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr MathML-konform ist.

Zusätzlich zu den grundlegenden globalen MathML-Attributen existieren auch folgende globale Attribute:

- Die [Ereignis-Handler](/de/docs/Web/Events/Event_handlers)-Attribute wie **`onclick`**, **`onfocus`** usw.
- Das [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href)-Attribut, um ein MathML-Element zu einem Hyperlink zu machen.

## Liste der globalen Attribute

- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)

  - : Ein boolesches Attribut, das anzeigt, dass das Element beim Laden der Seite fokussiert werden soll.

- [`class`](/de/docs/Web/HTML/Global_attributes/class)

  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.

- [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)

  - : Bildet eine Klasse von Attributen, sogenannte benutzerdefinierte Datenattribute, die es ermöglichen, proprietäre Informationen zwischen dem [MathML](/de/docs/Web/MathML) und seiner {{Glossary("DOM", "DOM")}}-Repräsentation auszutauschen, die von Skripten verwendet werden können. Alle diese benutzerdefinierten Daten sind über die [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft ermöglicht den Zugriff darauf.

- [`dir`](/de/docs/Web/MathML/Reference/Global_attributes/dir)

  - : Ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das die Richtung des MathML-Elements angibt. Es kann folgende Werte haben:

    - `ltr`, was _von links nach rechts_ bedeutet und wird verwendet, um mathematische Ausdrücke von links nach rechts darzustellen (z. B. auf Englisch oder nach marokkanischem Stil);
    - `rtl`, was _von rechts nach links_ bedeutet und wird verwendet, um mathematische Ausdrücke von rechts nach links darzustellen (z. B. im Maghreb- oder Machrek-Stil);

- [`displaystyle`](/de/docs/Web/MathML/Reference/Global_attributes/displaystyle):

  - : Ein boolesches Attribut, das den [math-style](/de/docs/Web/CSS/math-style) des Elements setzt.
    - `true`, was `normal` bedeutet.
    - `false`, was `compact` bedeutet.

- [`id`](/de/docs/Web/HTML/Global_attributes/id)

  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element beim Verlinken (mithilfe eines Fragmentbezeichners), Scripting oder Styling (mit CSS) zu identifizieren.

- [`mathbackground`](/de/docs/Web/MathML/Reference/Global_attributes/mathbackground)

  - : Eine [Hintergrundfarbe](/de/docs/Web/CSS/background-color) für das Element.

- [`mathcolor`](/de/docs/Web/MathML/Reference/Global_attributes/mathcolor)

  - : Eine [Farbe](/de/docs/Web/CSS/color) für das Element.

- [`mathsize`](/de/docs/Web/MathML/Reference/Global_attributes/mathsize)

  - : Eine {{cssxref("length-percentage")}}, die als [Schriftgröße](/de/docs/Web/CSS/font-size) für das Element verwendet wird.

- [`nonce`](/de/docs/Web/HTML/Global_attributes/nonce)

  - : Ein kryptografischer Nonce („number used once“), der von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf durchgeführt werden darf.

- [`scriptlevel`](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel)

  - : Gibt eine [math-depth](/de/docs/Web/CSS/math-depth) für das Element an. Siehe die [Scriptlevel-Seite](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel#values) für akzeptierte Werte und Zuordnungen.

- [`style`](/de/docs/Web/HTML/Global_attributes/style)

  - : Enthält [CSS](/de/docs/Web/CSS)-Stil-Deklarationen, die auf das Element angewendet werden. Beachten Sie, dass empfohlen wird, Styles in einer separaten Datei oder mehreren Dateien zu definieren. Dieses Attribut und das {{MathMLElement("style")}}-Element haben hauptsächlich den Zweck, eine schnelle Stiländerung zu ermöglichen, beispielsweise zu Testzwecken.

- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)

  - : Ein Ganzzahl-Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (fokussierbar ist), ob es an der sequenziellen Tastaturnavigation teilnehmen soll und, wenn ja, in welcher Reihenfolge. Es kann mehrere Werte annehmen:

    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein sollte, aber nicht über die sequenzielle Tastaturnavigation erreichbar ist;
    - `0` bedeutet, dass das Element fokussierbar und über die sequenzielle Tastaturnavigation erreichbar sein sollte, aber seine relative Reihenfolge durch die Plattform-Konvention definiert ist;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequenzielle Tastaturnavigation erreichbar sein sollte; die Reihenfolge, in der die Elemente fokussiert werden, ist der ansteigende Wert des [**tabindex**](#tabindex). Wenn mehrere Elemente denselben Tabindex teilen, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die das Abfragen der meisten globalen Attribute ermöglicht.
