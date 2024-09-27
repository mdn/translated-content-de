---
title: Globale Attribute
slug: Web/MathML/Global_attributes
l10n:
  sourceCommit: 842c482a8e2861c788f3c36d6d730f21ca17a1f4
---

{{MathMLRef}}

**Globale Attribute** sind Attribute, die für alle MathML-Elemente gelten; sie können bei allen Elementen verwendet werden, obwohl sie bei einigen Elementen keinen Effekt haben können.

Globale Attribute können bei allen [MathML-Elementen](/de/docs/Web/MathML/Element) angegeben werden, _auch bei denen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass alle nicht standardmäßigen Elemente diese Attribute dennoch zulassen müssen, obwohl die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr MathML-konform ist.

Neben den grundlegenden globalen MathML-Attributen existieren folgende globale Attribute:

- Die [Event-Handler](/de/docs/Web/Events/Event_handlers)-Attribute wie **`onclick`**, **`onfocus`** usw.
- Das [`href`](/de/docs/Web/MathML/Global_attributes/href)-Attribut, um ein MathML-Element zu einem Hyperlink zu machen.

## Liste der globalen Attribute

- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)

  - : Ein booleanes Attribut, das angibt, dass das Element beim Laden der Seite fokussiert werden soll.

- [`class`](/de/docs/Web/HTML/Global_attributes/class)

  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es, dass CSS und JavaScript bestimmte Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder über Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) selektieren und darauf zugreifen können.

- [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)

  - : Bildet eine Klasse von Attributen, genannt benutzerdefinierte Datenattribute, die den Austausch von proprietären Informationen zwischen dem [MathML](/de/docs/Web/MathML) und seiner [DOM](/de/docs/Glossary/DOM)-Darstellung erlauben, die von Skripten verwendet werden können. Alle diese benutzerdefinierten Daten sind über die [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle des Elements, auf dem das Attribut festgelegt ist, verfügbar. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft bietet Zugriff darauf.

- [`dir`](/de/docs/Web/MathML/Global_attributes/dir)

  - : Ein [enumeriertes](/de/docs/Glossary/Enumerated) Attribut, das die Richtung des MathML-Elements angibt. Es kann die folgenden Werte haben:

    - `ltr`, was _links nach rechts_ bedeutet und zur Anzeige mathematischer Ausdrücke von links nach rechts verwendet wird (z.B. im englischen oder marokkanischen Stil);
    - `rtl`, was _rechts nach links_ bedeutet und zur Anzeige mathematischer Ausdrücke von rechts nach links verwendet wird (z.B. im Maghreb- oder Machrek-Stil);

- [`displaystyle`](/de/docs/Web/MathML/Global_attributes/displaystyle):

  - : Ein booleanes Attribut, das den [math-style](/de/docs/Web/CSS/math-style) für das Element festlegt.
    - `true`, was `normal` bedeutet.
    - `false`, was `kompakt` bedeutet.

- [`id`](/de/docs/Web/HTML/Global_attributes/id)

  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element beim Verlinken (unter Verwendung eines Fragmentbezeichners), beim Scripting oder beim Styling (mit CSS) zu identifizieren.

- [`mathbackground`](/de/docs/Web/MathML/Global_attributes/mathbackground)

  - : Eine [background-color](/de/docs/Web/CSS/background-color) für das Element.

- [`mathcolor`](/de/docs/Web/MathML/Global_attributes/mathcolor)

  - : Eine [color](/de/docs/Web/CSS/color) für das Element.

- [`mathsize`](/de/docs/Web/MathML/Global_attributes/mathsize)

  - : Ein {{cssxref("length-percentage")}}, das als [font-size](/de/docs/Web/CSS/font-size) für das Element verwendet wird.

- [`nonce`](/de/docs/Web/HTML/Global_attributes/nonce)

  - : Eine kryptografische Nonce ("number used once"), die von der [Content Security Policy](/de/docs/Web/HTTP/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf zugelassen wird oder nicht.

- [`scriptlevel`](/de/docs/Web/MathML/Global_attributes/scriptlevel)

  - : Gibt eine [math-depth](/de/docs/Web/CSS/math-depth) für das Element an. Siehe die [scriptlevel-Seite](/de/docs/Web/MathML/Global_attributes/scriptlevel#values) für akzeptierte Werte und Zuordnung.

- [`style`](/de/docs/Web/HTML/Global_attributes/style)

  - : Enthält [CSS](/de/docs/Web/CSS)-Styling-Deklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, Stile in einer separaten Datei oder in separaten Dateien zu definieren. Dieses Attribut und das {{MathMLElement("style")}}-Element sollen hauptsächlich eine schnelle Stilgebung ermöglichen, beispielsweise für Testzwecke.

- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)

  - : Ein Integer-Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (_fokussierbar_ ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und falls ja, an welcher Position. Es kann mehrere Werte haben:

    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein sollte, aber nicht über die sequentielle Tastaturnavigation erreichbar sein sollte;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte, aber seine relative Reihenfolge durch die Plattformkonvention definiert wird;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein soll; die Reihenfolge, in der die Elemente fokussiert werden, ist der aufsteigende Wert des [**tabindex**](#tabindex). Wenn mehrere Elemente denselben tabindex haben, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element) Schnittstelle, die das Abfragen der meisten globalen Attribute ermöglicht.
