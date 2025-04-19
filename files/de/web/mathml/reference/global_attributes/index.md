---
title: MathML globale Attribute
short-title: Globale Attribute
slug: Web/MathML/Reference/Global_attributes
l10n:
  sourceCommit: 7ef48e3e54f5003f735eafd4bd3a0c2aedb21c27
---

**Globale Attribute** sind Attribute, die allen MathML-Elementen gemeinsam sind; sie können auf allen Elementen verwendet werden, auch wenn sie auf einigen Elementen möglicherweise keine Wirkung haben.

Globale Attribute können auf allen [MathML-Elementen](/de/docs/Web/MathML/Reference/Element) angegeben werden, _auch auf denen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass alle nicht standardmäßigen Elemente diese Attribute dennoch zulassen müssen, auch wenn die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr MathML-konform ist.

Zusätzlich zu den grundlegenden MathML-globalen Attributen existieren auch die folgenden globalen Attribute:

- Die [Ereignis-Handler](/de/docs/Web/Events/Event_handlers) Attribute wie **`onclick`**, **`onfocus`** usw.
- Das [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) Attribut, um ein MathML-Element zu einem Hyperlink zu machen.

## Liste der globalen Attribute

- [`autofocus`](/de/docs/Web/MathML/Reference/Global_attributes/autofocus)
  - : Ein Boolean-Attribut, das angibt, dass das Element beim Laden der Seite fokussiert werden soll.
- [`class`](/de/docs/Web/MathML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.
- [`data-*`](/de/docs/Web/MathML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, die als benutzerdefinierte Datenattribute bezeichnet werden und den Austausch proprietärer Informationen zwischen dem [MathML](/de/docs/Web/MathML) und seiner {{Glossary("DOM", "DOM")}}-Repräsentation ermöglichen, die von Skripten verwendet werden können. Alle diese benutzerdefinierten Daten sind über die [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle des Elements verfügbar, auf dem das Attribut gesetzt ist. Die [`MathMLElement.dataset`](/de/docs/Web/API/MathMLElement/dataset)-Eigenschaft ermöglicht den Zugriff darauf.
- [`dir`](/de/docs/Web/MathML/Reference/Global_attributes/dir)
  - : Ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das die Richtung des MathML-Elements angibt. Es kann die folgenden Werte haben:
    - `ltr`, was _von links nach rechts_ bedeutet und verwendet wird, um mathematische Ausdrücke von links nach rechts zu rendern (z. B. englischer oder marokkanischer Stil);
    - `rtl`, was _von rechts nach links_ bedeutet und verwendet wird, um mathematische Ausdrücke von rechts nach links zu rendern (z. B. Maghreb- oder Machrek-Stil);
- [`displaystyle`](/de/docs/Web/MathML/Reference/Global_attributes/displaystyle):
  - : Ein Boolean, der den [math-style](/de/docs/Web/CSS/math-style) für das Element einstellt.
    - `true`, was `normal` bedeutet.
    - `false`, was `kompakt` bedeutet.
- [`id`](/de/docs/Web/MathML/Reference/Global_attributes/id)
  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument eindeutig sein muss. Zweck ist es, das Element beim Verknüpfen (unter Verwendung eines Fragmentbezeichners), Scripting oder Styling (mit CSS) zu identifizieren.
- [`mathbackground`](/de/docs/Web/MathML/Reference/Global_attributes/mathbackground)
  - : Eine [Hintergrundfarbe](/de/docs/Web/CSS/background-color) für das Element.
- [`mathcolor`](/de/docs/Web/MathML/Reference/Global_attributes/mathcolor)
  - : Eine [Farbe](/de/docs/Web/CSS/color) für das Element.
- [`mathsize`](/de/docs/Web/MathML/Reference/Global_attributes/mathsize)
  - : Eine {{cssxref("length-percentage")}}, die als [Schriftgröße](/de/docs/Web/CSS/font-size) für das Element verwendet wird.
- [`nonce`](/de/docs/Web/MathML/Reference/Global_attributes/nonce)
  - : Eine kryptografische Nonce ("Nummer, die einmal verwendet wird"), die von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf ausgeführt werden darf.
- [`scriptlevel`](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel)
  - : Gibt eine [math-depth](/de/docs/Web/CSS/math-depth) für das Element an. Siehe die [Scriptlevel-Seite](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel#values) für akzeptierte Werte und Zuordnungen.
- [`style`](/de/docs/Web/MathML/Reference/Global_attributes/style)
  - : Beinhaltet [CSS](/de/docs/Web/CSS)-Stildeklarationen, die auf das Element angewendet werden. Beachten Sie, dass es empfohlen wird, Stile in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{MathMLElement("style")}}-Element haben hauptsächlich den Zweck, eine schnelle Stilgebung, beispielsweise für Testzwecke, zu ermöglichen.
- [`tabindex`](/de/docs/Web/MathML/Reference/Global_attributes/tabindex)
  - : Ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus erhalten kann (ob es _fokussierbar_ ist), ob es an der sequenziellen Tastaturnavigation teilnehmen soll und falls ja, an welcher Position. Es kann mehrere Werte annehmen:
    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein soll, aber nicht über die sequenzielle Tastaturnavigation erreichbar sein soll;
    - `0` bedeutet, dass das Element fokussierbar und über die sequenzielle Tastaturnavigation erreichbar sein soll, aber seine relative Reihenfolge wird durch die Plattformkonvention definiert;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequenzielle Tastaturnavigation erreichbar sein soll; die Reihenfolge, in der die Elemente fokussiert werden, ist der aufsteigende Wert des `tabindex`. Wenn mehrere Elemente denselben tabindex teilen, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die das Abfragen der meisten globalen Attribute ermöglicht.
