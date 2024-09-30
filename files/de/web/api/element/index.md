---
title: Element
slug: Web/API/Element
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("DOM")}}

**`Element`** ist die allgemeinste Basisklasse, von der alle Elementobjekte (d. h. Objekte, die Elemente darstellen) in einem [`Document`](/de/docs/Web/API/Document) erben. Sie verfügt nur über Methoden und Eigenschaften, die allen Arten von Elementen gemeinsam sind. Spezifischere Klassen erben von `Element`.

Zum Beispiel ist das [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface die Basis für HTML-Elemente. Ebenso ist das [`SVGElement`](/de/docs/Web/API/SVGElement)-Interface die Grundlage für alle SVG-Elemente, und das [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Interface ist die Basisschnittstelle für MathML-Elemente. Die meiste Funktionalität wird weiter unten in der Klassenhierarchie spezifiziert.

Auch Sprachen außerhalb der Web-Plattform, wie XUL durch das `XULElement`-Interface, implementieren `Element`.

{{InheritanceDiagram}}

## Instanzeigenschaften

_`Element` erbt Eigenschaften von seiner Eltern-Schnittstelle [`Node`](/de/docs/Web/API/Node) und durch Erweiterung von dessen Mutter [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot) {{ReadOnlyInline}}
  - : Gibt ein [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zurück, das dasjenige {{htmlelement("slot")}} darstellt, in das der Knoten eingefügt wurde.
- [`Element.attributes`](/de/docs/Web/API/Element/attributes) {{ReadOnlyInline}}
  - : Gibt ein [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)-Objekt zurück, das die zugewiesenen Attribute des entsprechenden HTML-Elements enthält.
- [`Element.childElementCount`](/de/docs/Web/API/Element/childElementCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kindelemente dieses Elements zurück.
- [`Element.children`](/de/docs/Web/API/Element/children) {{ReadOnlyInline}}
  - : Gibt die Kindelemente dieses Elements zurück.
- [`Element.classList`](/de/docs/Web/API/Element/classList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die die Liste der Klassenattribute enthält.
- [`Element.className`](/de/docs/Web/API/Element/className)
  - : Eine Zeichenkette, die die Klasse des Elements darstellt.
- [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die innere Höhe des Elements darstellt.
- [`Element.clientLeft`](/de/docs/Web/API/Element/clientLeft) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite des linken Randes des Elements darstellt.
- [`Element.clientTop`](/de/docs/Web/API/Element/clientTop) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite des oberen Randes des Elements darstellt.
- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die innere Breite des Elements darstellt.
- [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) {{ReadOnlyInline}}
  - : Eine Zahl, die die effektive Zoomgröße des Elements angibt, oder 1,0, wenn das Element nicht gerendert wird.
- [`Element.elementTiming`](/de/docs/Web/API/Element/elementTiming) {{Experimental_Inline}}
  - : Eine Zeichenkette, die das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut widerspiegelt und ein Element zur Beobachtung in der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API markiert.
- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) {{ReadOnlyInline}}
  - : Gibt das erste Kindelement dieses Elements zurück.
- [`Element.id`](/de/docs/Web/API/Element/id)
  - : Eine Zeichenkette, die die ID des Elements darstellt.
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
  - : Eine Zeichenkette, die das Markup des Inhalts des Elements darstellt.
- [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild) {{ReadOnlyInline}}
  - : Gibt das letzte Kindelement dieses Elements zurück.
- [`Element.localName`](/de/docs/Web/API/Element/localName) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die den lokalen Teil des qualifizierten Namens des Elements darstellt.
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI) {{ReadOnlyInline}}

  - : Der Namensraum-URI des Elements oder `null`, wenn es keinen Namensraum gibt.

    > [!NOTE]
    > In Firefox 3.5 und früher sind HTML-Elemente in keinem Namensraum. In späteren Versionen befinden sich HTML-Elemente in beiden HTML- und XML-Bäumen im Namensraum [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/).

- [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das das unmittelbar auf das gegebene folgende Element im Baum ist, oder `null`, wenn es kein Geschwisterelement gibt.
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
  - : Eine Zeichenkette, die das Markup des Elements einschließlich seines Inhalts darstellt. Wenn als Setter verwendet, ersetzt das Element mit Knoten, die aus der angegebenen Zeichenfolge geparst wurden.
- [`Element.part`](/de/docs/Web/API/Element/part)
  - : Repräsentiert die Part-Identifier(s) des Elements (d. h. festgelegt mit dem `part`-Attribut), zurückgegeben als `DOMTokenList`.
- [`Element.prefix`](/de/docs/Web/API/Element/prefix) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die das Namensraum-Präfix des Elements darstellt, oder `null`, wenn kein Präfix angegeben ist.
- [`Element.previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das unmittelbar vor dem gegebenen Element im Baum liegt, oder `null`, wenn es kein Geschwisterelement gibt.
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scrollansichthöhe eines Elements darstellt.
- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
  - : Eine Zahl, die den linken Scroll-Offset des Elements darstellt.
- [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximal möglichen linken Scroll-Offset für das Element darstellt.
- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)
  - : Eine Zahl, die die Anzahl der Pixel darstellt, um die der obere Teil des Elements vertikal gescrollt wird.
- [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximal möglichen oberen Scroll-Offset für das Element darstellt.
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scrollansichtbreite des Elements darstellt.
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) {{ReadOnlyInline}}
  - : Gibt das offene Shadow-Root zurück, das von dem Element gehostet wird, oder null, wenn kein offenes Shadow-Root vorhanden ist.
- [`Element.slot`](/de/docs/Web/API/Element/slot)
  - : Gibt den Namen des Shadow-DOM-Slots zurück, in den das Element eingefügt wird.
- [`Element.tagName`](/de/docs/Web/API/Element/tagName) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette mit dem Namen des Tags für das gegebene Element zurück.

### Instanzeigenschaften von ARIA

_Das `Element`-Interface umfasst auch die folgenden Eigenschaften._

- [`Element.ariaAtomic`](/de/docs/Web/API/Element/ariaAtomic)
  - : Eine Zeichenkette, die das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)-Attribut widerspiegelt, das anzeigt, ob unterstützende Technologien alles oder nur Teile der geänderten Region anhand der durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Attribut definierten Änderungsbenachrichtigungen präsentieren.
- [`Element.ariaAutoComplete`](/de/docs/Web/API/Element/ariaAutoComplete)
  - : Eine Zeichenkette, die das [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)-Attribut widerspiegelt, das angibt, ob die Eingabe von Text eine oder mehrere Vorhersagen des beabsichtigten Werts des Nutzers für eine Kombinationsbox, Suchbox oder Textbox auslösen könnte und wie die Vorhersagen präsentiert würden, falls sie gemacht werden.
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel)
  - : Eine Zeichenkette, die das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel)-Attribut widerspiegelt, das das Braille-Label des Elements definiert.
- [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription)
  - : Eine Zeichenkette, die das [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription)-Attribut widerspiegelt, das die ARIA-Braille-Rollenbeschreibung des Elements definiert.
- [`Element.ariaBusy`](/de/docs/Web/API/Element/ariaBusy)
  - : Eine Zeichenkette, die das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)-Attribut widerspiegelt, das angibt, ob ein Element modifiziert wird, da unterstützende Technologien möglicherweise warten möchten, bis die Modifikationen abgeschlossen sind, bevor sie dem Benutzer präsentiert werden.
- [`Element.ariaChecked`](/de/docs/Web/API/Element/ariaChecked)
  - : Eine Zeichenkette, die das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)-Attribut widerspiegelt, das den aktuellen "geprüft" Zustand von Kontrollkästchen, Radiobuttons und anderen Widgets angibt, die einen überprüften Zustand haben.
- [`Element.ariaColCount`](/de/docs/Web/API/Element/ariaColCount)
  - : Eine Zeichenkette, die das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)-Attribut widerspiegelt, das die Anzahl der Spalten in einer Tabelle, einem Raster oder Baumraster definiert.
- [`Element.ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)
  - : Eine Zeichenkette, die das [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)-Attribut widerspiegelt, das den Spaltenindex oder die Position eines Elements im Verhältnis zur Gesamtzahl der Spalten innerhalb einer Tabelle, eines Rasters oder Baumrasters definiert.
- [`Element.ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText)
  - : Eine Zeichenkette, die das [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext)-Attribut widerspiegelt, das einen menschenlesbaren Text als Alternative zu aria-colindex definiert.
- [`Element.ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)
  - : Eine Zeichenkette, die das [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)-Attribut widerspiegelt, das die Anzahl der Spalten angibt, die von einer Zelle oder Grid-Zelle innerhalb einer Tabelle, eines Gitters oder Baumgitters umfasst werden.
- [`Element.ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent)
  - : Eine Zeichenkette, die das [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current)-Attribut widerspiegelt, das das Element angibt, das das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente darstellt.
- [`Element.ariaDescription`](/de/docs/Web/API/Element/ariaDescription)
  - : Eine Zeichenkette, die das [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)-Attribut widerspiegelt, das einen Zeichenwert definiert, der das aktuelle Element beschreibt oder annotiert.
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Eine Zeichenkette, die das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)-Attribut widerspiegelt, das anzeigt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig bedienbar ist.
- [`Element.ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)
  - : Eine Zeichenkette, die das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Attribut widerspiegelt, das angibt, ob ein Gruppierungselement, das von diesem Element besessen oder kontrolliert wird, erweitert oder reduziert ist.
- [`Element.ariaHasPopup`](/de/docs/Web/API/Element/ariaHasPopup)
  - : Eine Zeichenkette, die das [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)-Attribut widerspiegelt, das die Verfügbarkeit und den Typ eines interaktiven Popup-Elements anzeigt, wie z. B. ein Menü oder Dialog, das durch ein Element ausgelöst werden kann.
- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Eine Zeichenkette, die das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)-Attribut widerspiegelt, das angibt, ob das Element einer Barrierefreiheits-API exponiert ist.
- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Eine Zeichenkette, die das [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts)-Attribut widerspiegelt, das Tastaturkürzel angibt, die ein Autor implementiert hat, um ein Element zu aktivieren oder den Fokus darauf zu setzen.
- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Eine Zeichenkette, die das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut widerspiegelt, das einen Zeichenwert definiert, der das aktuelle Element bezeichnet.
- [`Element.ariaLevel`](/de/docs/Web/API/Element/ariaLevel)
  - : Eine Zeichenkette, die das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)-Attribut widerspiegelt, das das hierarchische Niveau eines Elements innerhalb einer Struktur definiert.
- [`Element.ariaLive`](/de/docs/Web/API/Element/ariaLive)
  - : Eine Zeichenkette, die das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Attribut widerspiegelt, das anzeigt, dass ein Element aktualisiert wird und die Art der Aktualisierungen beschreibt, die Benutzeragenten, Barrierefreiheitstechnologien und Benutzer von dem Live-Bereich erwarten können.
- [`Element.ariaModal`](/de/docs/Web/API/Element/ariaModal)
  - : Eine Zeichenkette, die das [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal)-Attribut widerspiegelt, das anzeigt, ob ein Element modal ist, wenn es angezeigt wird.
- [`Element.ariaMultiline`](/de/docs/Web/API/Element/ariaMultiline)
  - : Eine Zeichenkette, die das [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)-Attribut widerspiegelt, das angibt, ob ein Textfeld mehrere Zeilen von Eingaben oder nur eine einzelne Zeile akzeptiert.
- [`Element.ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)
  - : Eine Zeichenkette, die das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)-Attribut widerspiegelt, das angibt, dass der Benutzer mehr als ein Element aus den aktuellen auswählbaren Nachkommen auswählen darf.
- [`Element.ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)
  - : Eine Zeichenkette, die das [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Attribut widerspiegelt, das angibt, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- [`Element.ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)
  - : Eine Zeichenkette, die das [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)-Attribut widerspiegelt, das einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe helfen soll, wenn die Steuerelemente keinen Wert haben.
- [`Element.ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet)
  - : Eine Zeichenkette, die das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)-Attribut widerspiegelt, das die Nummer oder Position eines Elements in der aktuellen Gruppe von Listenelementen oder Baumelementen definiert.
- [`Element.ariaPressed`](/de/docs/Web/API/Element/ariaPressed)
  - : Eine Zeichenkette, die das [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)-Attribut widerspiegelt, das den aktuellen "gedrückt" Zustand von Umschaltknöpfen anzeigt.
- [`Element.ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly)
  - : Eine Zeichenkette, die das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)-Attribut widerspiegelt, das angibt, dass das Element nicht bearbeitbar, aber anderweitig bedienbar ist.
- [`Element.ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant) {{Non-standard_Inline}}
  - : Eine Zeichenkette, die das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Attribut widerspiegelt, das angibt, welche Benachrichtigungen der Benutzeragent auslöst, wenn der Barrierefreiheitsbaum innerhalb eines Live-Bereichs verändert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einem `aria-live`-Bereich relevant sind und angekündigt werden sollen.
- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
  - : Eine Zeichenkette, die das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)-Attribut widerspiegelt, das angibt, dass Benutzereingaben im Element erforderlich sind, bevor ein Formular eingereicht werden kann.
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Eine Zeichenkette, die das [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)-Attribut widerspiegelt, das eine menschenlesbare, autorenlokalisierte Beschreibung für die Rolle eines Elements definiert.
- [`Element.ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount)
  - : Eine Zeichenkette, die das [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)-Attribut widerspiegelt, das die Gesamtzahl der Zeilen in einer Tabelle, einem Raster oder Baumraster definiert.
- [`Element.ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)
  - : Eine Zeichenkette, die das [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)-Attribut widerspiegelt, das den Zeilenindex oder die Position eines Elements im Verhältnis zur Gesamtzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder Baumrasters definiert.
- [`Element.ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)
  - : Eine Zeichenkette, die das [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext)-Attribut widerspiegelt, das eine menschenlesbare Textalternative zu aria-rowindex definiert.
- [`Element.ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)
  - : Eine Zeichenkette, die das [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)-Attribut widerspiegelt, das die Anzahl der Zeilen angibt, die von einer Zelle oder Grid-Zelle innerhalb einer Tabelle, eines Gitters oder Baumgitters umfasst werden.
- [`Element.ariaSelected`](/de/docs/Web/API/Element/ariaSelected)
  - : Eine Zeichenkette, die das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Attribut widerspiegelt, das den aktuellen "ausgewählten" Zustand von Elementen anzeigt, die einen ausgewählten Zustand haben.
- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Eine Zeichenkette, die das [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)-Attribut widerspiegelt, das die Anzahl der Elemente in der aktuellen Gruppe von Listenelementen oder Baumelementen definiert.
- [`Element.ariaSort`](/de/docs/Web/API/Element/ariaSort)
  - : Eine Zeichenkette, die das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Attribut widerspiegelt, das anzeigt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.
- [`Element.ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax)
  - : Eine Zeichenkette, die das [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attribut widerspiegelt, das den maximal zulässigen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin)
  - : Eine Zeichenkette, die das [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)-Attribut widerspiegelt, das den minimal zulässigen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Eine Zeichenkette, die das [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)-Attribut widerspiegelt, das den aktuellen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueText`](/de/docs/Web/API/Element/ariaValueText)
  - : Eine Zeichenkette, die das [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)-Attribut widerspiegelt, das die menschenlesbare Textalternative zu aria-valuenow für ein Bereichs-Widget definiert.

## Instanzmethoden

_`Element` erbt Methoden von seinen Eltern [`Node`](/de/docs/Web/API/Node) und seinem eigenen Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.after()`](/de/docs/Web/API/Element/after)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Kindelementliste des Elternteils des `Element` unmittelbar nach dem `Element` ein.
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Abkürzungsmethode, um eine Animation auf einem Element zu erstellen und auszuführen. Gibt die erstellte Animation-Objektinstanz zurück.
- [`Element.append()`](/de/docs/Web/API/Element/append)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen nach dem letzten Kind des Elements ein.
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
  - : Befestigt einen Shadow-DOM-Baum an dem angegebenen Element und gibt eine Referenz zu seinem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.
- [`Element.before()`](/de/docs/Web/API/Element/before)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Kindelementliste des Elternteils des `Element` unmittelbar vor dem `Element` ein.
- [`Element.checkVisibility()`](/de/docs/Web/API/Element/checkVisibility)
  - : Gibt an, ob ein Element voraussichtlich sichtbar ist oder nicht, basierend auf konfigurierbaren Prüfungen.
- [`Element.closest()`](/de/docs/Web/API/Element/closest)
  - : Gibt das `Element` zurück, das der nächste Vorfahr des aktuellen Elements (oder das aktuelle Element selbst) ist und die angegebenen Selektoren im Parameter erfüllt.
- [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap)
  - : Gibt eine [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Schnittstelle zurück, die eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bietet, der eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) darstellt.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von Animation-Objekten zurück, die derzeit auf dem Element aktiv sind.
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
  - : Ruft den Wert des benannten Attributs vom aktuellen Knoten ab und gibt ihn als Zeichenfolge zurück.
- [`Element.getAttributeNames()`](/de/docs/Web/API/Element/getAttributeNames)
  - : Gibt ein Array von Attributnamen vom aktuellen Element zurück.
- [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)
  - : Ruft die Knoten- Darstellung des benannten Attributs vom aktuellen Knoten ab und gibt sie als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNodeNS()`](/de/docs/Web/API/Element/getAttributeNodeNS)
  - : Ruft die Knoten- Darstellung des Attributs mit dem angegebenen Namen und Namensraum vom aktuellen Knoten ab und gibt sie als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
  - : Ruft den Wert des Attributs mit dem angegebenen Namensraum und Namen vom aktuellen Knoten ab und gibt ihn als Zeichenfolge zurück.
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
  - : Gibt die Größe eines Elements und seine Position relativ zum Viewport zurück.
- [`Element.getBoxQuads()`](/de/docs/Web/API/Element/getBoxQuads) {{Experimental_Inline}}
  - : Gibt eine Liste von [`DOMQuad`](/de/docs/Web/API/DOMQuad)-Objekten zurück, die die CSS-Fragmente des Knotens darstellen.
- [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects)
  - : Gibt eine Sammlung von Rechtecken zurück, die die Begrenzungsrahmen für jede Textzeile in einem Client angeben.
- [`Element.getElementsByClassName()`](/de/docs/Web/API/Element/getElementsByClassName)
  - : Gibt eine lebendiges [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommen des aktuellen Elements enthält, die die im Parameter angegebene Klassenliste besitzen.
- [`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName)
  - : Gibt eine lebendiges [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommenelemente eines bestimmten Tag-Namens vom aktuellen Element enthält.
- [`Element.getElementsByTagNameNS()`](/de/docs/Web/API/Element/getElementsByTagNameNS)
  - : Gibt eine lebendiges [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommenelemente eines bestimmten Tag-Namens und Namensraums vom aktuellen Element enthält.
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
  - : Gibt den DOM-Inhalt des Elements als HTML-Zeichenkette zurück, optional einschließlich eines Shadow-DOM.
- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut besitzt oder nicht.
- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut im angegebenen Namensraum besitzt oder nicht.
- [`Element.hasAttributes()`](/de/docs/Web/API/Element/hasAttributes)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element ein oder mehrere HTML-Attribute besitzt.
- [`Element.hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, Zeigererfassung für den durch die gegebene Zeiger-ID identifizierten Zeiger hat.
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
  - : Fügt ein gegebenes Elementknoten an einer gegebenen Position relativ zu dem Element, auf dem es aufgerufen wird, ein.
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
  - : Parst den Text als HTML oder XML und fügt die resultierenden Knoten in der angegebenen Position in den Baum ein.
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
  - : Fügt einen gegebenen Textknoten an einer gegebenen Position relativ zu dem Element, auf dem es aufgerufen wird, ein.
- [`Element.matches()`](/de/docs/Web/API/Element/matches)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element durch den angegebenen Selektor-String ausgewählt würde oder nicht.
- [`Element.prepend()`](/de/docs/Web/API/Element/prepend)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen vor dem ersten Kind des Elements ein.
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
  - : Gibt den ersten [`Node`](/de/docs/Web/API/Node)-Knoten zurück, der den angegebenen Selektor-String relativ zu dem Element erfüllt.
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Knoten zurück, die den angegebenen Selektor-String relativ zu dem Element erfüllen.
- [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Löst die zuvor gesetzte Zeigererfassung für ein spezifisches [`PointerEvent`](/de/docs/Web/API/PointerEvent) auf.
- [`Element.remove()`](/de/docs/Web/API/Element/remove)
  - : Entfernt das Element aus der Kinderliste seines Elternteils.
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
  - : Entfernt das benannte Attribut vom aktuellen Knoten.
- [`Element.removeAttributeNode()`](/de/docs/Web/API/Element/removeAttributeNode)
  - : Entfernt die Knoten- Darstellung des benannten Attributs vom aktuellen Knoten.
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
  - : Entfernt das Attribut mit dem angegebenen Namen und Namensraum vom aktuellen Knoten.
- [`Element.replaceChildren()`](/de/docs/Web/API/Element/replaceChildren)
  - : Ersetzt die vorhandenen Kinder eines [`Node`](/de/docs/Web/API/Node) durch eine angegebene neue Menge an Kindern.
- [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith)
  - : Ersetzt das Element in der Kinderliste seines Elternteils durch eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen.
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fordert den Browser asynchron auf, das Element im Vollbild darzustellen.
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
  - : Ermöglicht es, asynchron nach dem Sperren des Zeigers auf dem gegebenen Element zu fragen.
- [`Element.scroll()`](/de/docs/Web/API/Element/scroll)
  - : Scrollt zu einem bestimmten Koordinatensatz innerhalb eines gegebenen Elements.
- [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy)
  - : Scrollt ein Element um den angegebenen Betrag.
- [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)
  - : Scrollt die Seite, bis das Element in den Ansichtsbereich gelangt.
- [`Element.scrollIntoViewIfNeeded()`](/de/docs/Web/API/Element/scrollIntoViewIfNeeded) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Element in den sichtbaren Bereich des Browserfensters, wenn es sich noch nicht innerhalb des sichtbaren Bereichs befindet. **Verwenden Sie stattdessen den Standard [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView).**
- [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo)
  - : Scrollt zu einem bestimmten Koordinatensatz innerhalb eines gegebenen Elements.
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
  - : Setzt den Wert eines benannten Attributs des aktuellen Knotens.
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
  - : Setzt die Knoten- Darstellung des benannten Attributs vom aktuellen Knoten.
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS)
  - : Setzt die Knoten- Darstellung des Attributs mit dem angegebenen Namen und Namensraum vom aktuellen Knoten.
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
  - : Setzt den Wert des Attributs mit dem angegebenen Namen und Namensraum vom aktuellen Knoten.
- [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Richtet die Mausklicken-Erfassung ein, indem alle Mausereignisse auf dieses Element umgeleitet werden.
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Parst eine HTML-Zeichenkette in ein Dokumentfragment, ohne sie zu säubern, das dann den ursprünglichen Unterbaum des Elements im DOM ersetzt. Die HTML-Zeichenfolge kann deklarative Schattenwurzeln enthalten, die als Vorlagenelemente geparst würden, wenn das HTML mit [`Element.innerHTML`](#element.innerhtml) gesetzt worden wäre.
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bestimmt ein bestimmtes Element als das Erfassungsziel zukünftiger [Zeigerereignisse](/de/docs/Web/API/Pointer_events).
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
  - : Schaltet ein boolesches Attribut um, entfernt es, wenn es vorhanden ist, und fügt es hinzu, wenn es nicht vorhanden ist, auf dem angegebenen Element.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` oder indem Sie einen Ereignis-Listener auf die `oneventname` Eigenschaft dieser Schnittstelle zuweisen.

- [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Skript ausgeführt wurde.
- [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
  - : Wird ausgelöst, wenn der Wert eines Eingabeelements geändert wird.
- [`beforematch`](/de/docs/Web/API/Element/beforematch_event) {{Experimental_Inline}}
  - : Wird auf einem Element ausgelöst, das sich im [versteckt bis gefunden](/de/docs/Web/HTML/Global_attributes/hidden)-Zustand befindet, wenn der Browser dabei ist, seinen Inhalt sichtbar zu machen, weil der Benutzer den Inhalt durch die "Auf der Seite suchen"-Funktion oder durch Fragmentnavigation gefunden hat.
- [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Skript dabei ist, ausgeführt zu werden.
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) {{Experimental_Inline}}
  - : Wird vor den WebXR-Auswahlereignissen ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) ausgelöst.
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
  - : Wird auf jedes Element ausgelöst, das {{cssxref("content-visibility", "content-visibility: auto")}} auf sich gesetzt hat, wenn es anfängt oder aufhört, [relevant für den Benutzer](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) zu sein und [seinen Inhalt zu überspringen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).
- [`scroll`](/de/docs/Web/API/Element/scroll_event)
  - : Wird ausgelöst, wenn das Dokumentfenster oder ein Element gescrollt wurde.
- [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
  - : Wird ausgelöst, wenn das Dokumentfenster das Scrollen beendet hat.
- [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.
- [`wheel`](/de/docs/Web/API/Element/wheel_event)
  - : Wird ausgelöst, wenn der Benutzer ein Radtaste auf einem Zeigegerät dreht (typischerweise eine Maus).

### Animationsevents

- [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)
  - : Wird ausgelöst, wenn eine Animation unerwartet abgebrochen wird.
- [`animationend`](/de/docs/Web/API/Element/animationend_event)
  - : Wird ausgelöst, wenn eine Animation normal abgeschlossen wurde.
- [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)
  - : Wird ausgelöst, wenn eine Animationswiederholung abgeschlossen ist.
- [`animationstart`](/de/docs/Web/API/Element/animationstart_event)
  - : Wird ausgelöst, wenn eine Animation startet.

### Zwischenablageereignisse

- [`copy`](/de/docs/Web/API/Element/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
- [`cut`](/de/docs/Web/API/Element/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Zerschneidungsaktion über die Benutzeroberfläche des Browsers initiiert.
- [`paste`](/de/docs/Web/API/Element/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

### Kompositionereignisse

- [`compositionend`](/de/docs/Web/API/Element/compositionend_event)
  - : Wird ausgelöst, wenn ein Textkompositionssystem wie ein [Eingabemethoden-Editor](/de/docs/Glossary/input_method_editor) die aktuelle Kompositionssitzung abschließt oder abbricht.
- [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event)
  - : Wird ausgelöst, wenn ein Textkompositionssystem wie ein [Eingabemethoden-Editor](/de/docs/Glossary/input_method_editor) eine neue Kompositionssitzung startet.
- [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event)
  - : Wird ausgelöst, wenn ein neues Zeichen im Kontext einer Textkompositionssitzung von einem Textkompositionssystem wie einem [Eingabemethoden-Editor](/de/docs/Glossary/input_method_editor) empfangen wird.

### Fokussiereignisse

- [`blur`](/de/docs/Web/API/Element/blur_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verliert.
- [`focus`](/de/docs/Web/API/Element/focus_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erhält.
- [`focusin`](/de/docs/Web/API/Element/focusin_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erhält, nach [`focus`](/de/docs/Web/API/Element/focus_event).
- [`focusout`](/de/docs/Web/API/Element/focusout_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verliert, nach [`blur`](/de/docs/Web/API/Element/blur_event).

### Vollbildevents

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein `Element` gesendet, wenn es in den [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) wechselt oder aus ihm herausgeht.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu schalten oder aus ihm heraus zu schalten.

### Tastaturereignisse

- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Wird ausgelöst, wenn eine Taste gedrückt wird.
- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn eine Taste, die einen Zeichenwert erzeugt, nach unten gedrückt wird.
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Wird ausgelöst, wenn eine Taste losgelassen wird.

### Mausereignisse

- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
  - : Wird ausgelöst, wenn eine nicht-primäre Zeigegerät-Taste (z. B. eine andere als die linke Maustaste) auf einem Element gedrückt und losgelassen wird.
- [`click`](/de/docs/Web/API/Element/click_event)
  - : Wird ausgelöst, wenn eine Zeigegerät-Taste (z. B. die primäre Taste einer Maus) auf ein einzelnes Element gedrückt und losgelassen wird.
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
  - : Wird ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
  - : Wird ausgelöst, wenn eine Zeigegerät-Taste (z. B. die primäre Taste einer Maus) zweimal auf ein einzelnes Element geklickt wird.
- [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event) {{Deprecated_Inline}}
  - : Tritt auf, wenn ein Element aktiviert wird, z. B. durch einen Mausklick oder einen Tastendruck.
- [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Tritt auf, wenn das Mausrad oder ein ähnliches Gerät verwendet wird und der kumulierte Bildlaufbetrag seit dem letzten Ereignis über 1 Zeile oder 1 Seite liegt.
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - : Wird ausgelöst, wenn eine Zeigegerät-Taste auf ein Element gedrückt wird.
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) über das Element bewegt wird, an dem der Listener angefügt ist.
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
  - : Wird ausgelöst, wenn der Zeiger eines Zeigegeräts (normalerweise eine Maus) aus einem Element bewegt wird, an dem der Listener angefügt ist.
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) über ein Element bewegt wird.
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) aus dem Element bewegt wird, an das der Listener angefügt ist, oder aus einem seiner Kinder.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
  - : Wird ausgelöst, wenn ein Zeigegerät auf das Element bewegt wird, an das der Listener angefügt ist, oder auf eines seiner Kinder.
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
  - : Wird ausgelöst, wenn eine Zeigegerät-Taste auf ein Element losgelassen wird.
- [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät verwendet wird.
- [`MozMousePixelScroll`](/de/docs/Web/API/Element/MozMousePixelScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät verwendet wird.
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event) {{Non-standard_Inline}}
  - : Wird jedes Mal ausgelöst, wenn sich der Druck auf dem Trackpadtouchscreen ändert.
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) {{Non-standard_Inline}}
  - : Wird unmittelbar nach dem `mousedown`-Ereignis ausgelöst, sobald genügend Druck angewendet wurde, um als "Force-Klick" zu qualifizieren.
- [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event) {{Non-standard_Inline}}
  - : Wird vor dem `mousedown`-Ereignis ausgelöst.
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event) {{Non-standard_Inline}}
  - : Wird unmittelbar nach dem `webkitmouseforcedown`-Ereignis ausgelöst, sobald der Druck ausreichend reduziert wurde, um den "Force-Klick" zu beenden.

### Zeigerereignisse

- [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - : Wird ausgelöst, wenn ein Element einen Zeiger mit [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture) erfasst.
- [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - : Wird ausgelöst, wenn ein [erfasster Zeiger](/de/docs/Web/API/Pointer_events#pointer_capture) freigegeben wird.
- [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - : Wird ausgelöst, wenn ein Zeigerereignis abgebrochen wird.
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - : Wird ausgelöst, wenn ein Zeiger aktiv wird.
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - : Wird ausgelöst, wenn ein Zeiger in die Hit-Test-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Wird ausgelöst, wenn ein Zeiger aus den Hit-Test-Grenzen eines Elements bewegt wird.
- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Wird ausgelöst, wenn ein Zeiger die Koordinaten ändert.
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Wird ausgelöst, wenn ein Zeiger aus den Hit-Test-Grenzen eines Elements bewegt wird (unter anderem aus anderen Gründen).
- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Wird ausgelöst, wenn ein Zeiger in die Hit-Test-Grenzen eines Elements bewegt wird.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Zeiger eine Eigenschaft ändert, die keine `pointerdown`- oder `pointerup`-Ereignisse auslöst.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Wird ausgelöst, wenn ein Zeiger nicht mehr aktiv ist.

### Berührungsereignisse

- [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich Finger während einer Berührungsgeste bewegen.
- [`gestureend`](/de/docs/Web/API/Element/gestureend_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn keine Finger mehr die Berührungsoberfläche kontaktieren und die Geste somit beendet wird.
- [`gesturestart`](/de/docs/Web/API/Element/gesturestart_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn mehrere Finger die Berührungsoberfläche kontaktieren und somit eine neue Geste starten.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)
  - : Wird ausgelöst, wenn einer oder mehrere Berührungspunkte auf eine implementierungsspezifische Weise (z. B. werden zu viele Berührungspunkte erstellt) unterbrochen werden.
- [`touchend`](/de/docs/Web/API/Element/touchend_event)
  - : Wird ausgelöst, wenn einer oder mehrere Berührungspunkte von der Berührungsoberfläche entfernt werden.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event)
  - : Wird ausgelöst, wenn einer oder mehrere Berührungspunkte entlang der Berührungsoberfläche bewegt werden.
- [`touchstart`](/de/docs/Web/API/Element/touchstart_event)
  - : Wird ausgelöst, wenn einer oder mehrere Berührungspunkte auf die Berührungsoberfläche gelegt werden.

### Übergangsevents

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) abgebrochen wurde.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) das Abspielen beendet hat.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) erstellt wird (d. h. wenn es zu einer Gruppe von laufenden Übergängen hinzugefügt wird), obwohl es nicht unbedingt gestartet wurde.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) zu Übergangsstart beginnt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
