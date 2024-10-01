---
title: Globale Attribute
slug: Web/MathML/Global_attributes
l10n:
  sourceCommit: 842c482a8e2861c788f3c36d6d730f21ca17a1f4
---

{{MathMLRef}}

**Globale Attribute** sind Attribute, die allen MathML-Elementen gemeinsam sind; sie können auf allen Elementen verwendet werden, auch wenn sie bei einigen Elementen keine Wirkung haben.

Globale Attribute können auf allen [MathML-Elementen](/de/docs/Web/MathML/Element) angegeben werden, _auch auf solchen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass alle nicht standardmäßigen Elemente dennoch diese Attribute enthalten müssen, obwohl die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr MathML-konform ist.

Zusätzlich zu den grundlegenden globalen MathML-Attributen existieren auch folgende globale Attribute:

- Die [Event-Handler](/de/docs/Web/Events/Event_handlers) Attribute wie **`onclick`**, **`onfocus`** usw.
- Das [`href`](/de/docs/Web/MathML/Global_attributes/href) Attribut, um ein MathML-Element zu einem Hyperlink zu machen.

## Liste der globalen Attribute

- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)

  - : Ein boolesches Attribut, das angibt, dass das Element beim Laden der Seite fokussiert werden sollte.

- [`class`](/de/docs/Web/HTML/Global_attributes/class)

  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es, CSS und JavaScript, spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.

- [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)

  - : Formt eine Klasse von Attributen, genannt benutzerdefinierte Datenattribute, die den Austausch proprietärer Informationen zwischen dem [MathML](/de/docs/Web/MathML) und seiner {{Glossary("DOM", "DOM")}} Repräsentation ermöglichen, die von Skripten genutzt werden können. Alle solchen benutzerdefinierten Daten sind über die [`MathMLElement`](/de/docs/Web/API/MathMLElement) Schnittstelle des Elements zugänglich, auf dem das Attribut eingestellt ist. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft ermöglicht den Zugriff auf diese.

- [`dir`](/de/docs/Web/MathML/Global_attributes/dir)

  - : Ein {{Glossary("Enumerated", "enumiertes")}} Attribut, das die Ausrichtung des MathML-Elements angibt. Es kann folgende Werte haben:

    - `ltr`, was _von links nach rechts_ bedeutet und verwendet wird, um mathematische Ausdrücke von links nach rechts darzustellen (z.B. englisch oder marokkanischer Stil);
    - `rtl`, was _von rechts nach links_ bedeutet und verwendet wird, um mathematische Ausdrücke von rechts nach links darzustellen (z.B. Maghreb- oder Machrek-Stil);

- [`displaystyle`](/de/docs/Web/MathML/Global_attributes/displaystyle):

  - : Ein boolesches Attribut, das den [math-style](/de/docs/Web/CSS/math-style) für das Element festlegt.
    - `true`, was `normal` bedeutet.
    - `false`, was `compact` bedeutet.

- [`id`](/de/docs/Web/HTML/Global_attributes/id)

  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element beim Verlinken (mittels eines Fragmentbezeichners), Skripten oder Styling (mit CSS) zu identifizieren.

- [`mathbackground`](/de/docs/Web/MathML/Global_attributes/mathbackground)

  - : Eine [Hintergrundfarbe](/de/docs/Web/CSS/background-color) für das Element.

- [`mathcolor`](/de/docs/Web/MathML/Global_attributes/mathcolor)

  - : Eine [Farbe](/de/docs/Web/CSS/color) für das Element.

- [`mathsize`](/de/docs/Web/MathML/Global_attributes/mathsize)

  - : Ein {{cssxref("length-percentage")}}, verwendet als [Schriftgröße](/de/docs/Web/CSS/font-size) für das Element.

- [`nonce`](/de/docs/Web/HTML/Global_attributes/nonce)

  - : Ein kryptografisches Nonce ("Nummer einmal verwendet"), das von der [Content Security Policy](/de/docs/Web/HTTP/CSP) genutzt werden kann, um zu bestimmen, ob ein gegebener Abruf fortgesetzt werden darf.

- [`scriptlevel`](/de/docs/Web/MathML/Global_attributes/scriptlevel)

  - : Gibt eine [math-depth](/de/docs/Web/CSS/math-depth) für das Element an. Siehe die [scriptlevel-Seite](/de/docs/Web/MathML/Global_attributes/scriptlevel#values) für akzeptierte Werte und Zuordnungen.

- [`style`](/de/docs/Web/HTML/Global_attributes/style)

  - : Enthält [CSS](/de/docs/Web/CSS) Stil-Deklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, Stile in einer separaten Datei oder in Dateien zu definieren. Dieses Attribut und das {{MathMLElement("style")}} Element haben hauptsächlich den Zweck, schnelles Styling zu ermöglichen, beispielsweise zu Testzwecken.

- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)

  - : Ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus erhalten kann (ist _fokussierbar_), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und, wenn ja, an welcher Position. Es kann mehrere Werte annehmen:

    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein sollte, aber nicht über die sequentielle Tastaturnavigation erreichbar ist;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte, aber seine relative Reihenfolge durch die Plattformkonvention definiert wird;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein soll; die Reihenfolge, in der die Elemente fokussiert werden, ist der steigende Wert des [**tabindex**](#tabindex). Wenn mehrere Elemente den gleichen tabindex teilen, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element) Schnittstelle, die das Abfragen der meisten globalen Attribute ermöglicht.
