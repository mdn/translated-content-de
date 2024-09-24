---
title: Globale Attribute
slug: Web/HTML/Global_attributes
l10n:
  sourceCommit: 87b1277782f71a58693aeb6a83464e3ccabbfa20
---

{{HTMLSidebar("Global_attributes")}}

**Globale Attribute** sind Attribute, die allen HTML-Elementen gemeinsam sind; sie können auf allen Elementen verwendet werden, obwohl sie bei einigen Elementen keine Wirkung haben können.

Globale Attribute können auf allen [HTML-Elementen](/de/docs/Web/HTML/Element) spezifiziert werden, _sogar auf denen, die nicht im Standard festgelegt sind_. Das bedeutet, dass alle nicht standardisierten Elemente diese Attribute zulassen müssen, obwohl die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr HTML5-konform ist. Zum Beispiel verbergen HTML5-konforme Browser Inhalte, die mit `<foo hidden>…</foo>` gekennzeichnet sind, auch wenn `<foo>` kein gültiges HTML-Element ist.

Neben den grundlegenden globalen HTML-Attributen gibt es auch die folgenden globalen Attribute:

- `xml:lang` und `xml:base` — diese sind aus den XHTML-Spezifikationen übernommen und veraltet, werden aber aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Roles) und die verschiedenen [`aria-*`](/de/docs/Web/Accessibility/ARIA/Attributes) Zustände und Eigenschaften, die zur Sicherstellung der Barrierefreiheit verwendet werden.
- Die [Ereignishandler-](/de/docs/Web/HTML/Attributes#event_handler_attributes) Attribute: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)
  - : Bietet einen Hinweis zur Generierung einer Tastenkombination für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das im Tastaturlayout des Computers vorhanden ist.
- [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) {{non-standard_inline}}
  - : Verknüpft ein positioniertes Element mit einem Ankerelement. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Global_attributes/id)-Wert des Elements, mit dem Sie das positionierte Element verankern möchten. Das Element kann dann [mittels CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)
  - : Bestimmt, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise.
- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald das {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, fokussiert werden soll. Dieses Attribut ist ein boolesches Attribut, das standardmäßig auf false gesetzt ist.
- [`class`](/de/docs/Web/HTML/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste von Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, spezifische Elemente durch die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode {{DOMxRef("Document.getElementsByClassName()")}} auszuwählen und darauf zuzugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)

  - : Ein [aufgezähltes](/de/docs/Glossary/Enumerated) Attribut, das angibt, ob das Element von Benutzern bearbeitet werden kann. Falls dies der Fall ist, verändert der Browser sein Widget, um die Bearbeitung zu ermöglichen. Das Attribut muss einen der folgenden Werte annehmen:

    - `true` oder der _leere String_, was anzeigt, dass das Element bearbeitbar sein muss;
    - `false`, was anzeigt, dass das Element nicht bearbeitbar ist;
    - `plaintext-only`, was anzeigt, dass der Rohtext des Elements bearbeitbar ist, aber das Rich-Text-Formatieren deaktiviert ist.

- [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, die als benutzerdefinierte Datenattribute bezeichnet werden, die proprietäre Informationen zwischen der [HTML](/de/docs/Web/HTML) und ihrer {{glossary("DOM")}}-Darstellung ermöglichen, die von Skripten verwendet werden können. Alle solchen benutzerdefinierten Daten sind über die Schnittstelle {{DOMxRef("HTMLElement")}} des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die Eigenschaft {{DOMxRef("HTMLElement.dataset")}} ermöglicht den Zugriff darauf.
- [`dir`](/de/docs/Web/HTML/Global_attributes/dir)

  - : Ein aufgezähltes Attribut, das die Richtung des Textes des Elements angibt. Es kann die folgenden Werte haben:

    - `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet werden soll, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet werden soll, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, was dem Benutzeragenten die Entscheidung überlässt. Es verwendet einen einfachen Algorithmus, da es die Zeichen innerhalb des Elements analysiert, bis es ein Zeichen mit einer starken Richtung findet, und wendet dann diese Richtung auf das gesamte Element an.

- [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable)

  - : Ein aufgezähltes Attribut, das angibt, ob das Element gezogen werden kann, unter Verwendung der [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API). Es kann folgende Werte annehmen:

    - `true`, was anzeigt, dass das Element gezogen werden darf;
    - `false`, was anzeigt, dass das Element nicht gezogen werden darf.

- [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint)
  - : Gibt einen Hinweis darauf, welches Aktionslabel (oder -symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.
- [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)
  - : Wird verwendet, um Schattenbestandteile transitiv von einem geschachtelten Schattenbaum in einen umgebenden Lichtbaum zu exportieren.
- [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Ein aufgezähltes Attribut, das angibt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Es kann beispielsweise dazu verwendet werden, Elemente der Seite zu verbergen, die nicht verwendet werden können, bis der Anmeldeprozess abgeschlossen ist. Der Browser rendert solche Elemente nicht. Dieses Attribut darf nicht verwendet werden, um Inhalte zu verbergen, die berechtigterweise angezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Global_attributes/id)
  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element bei der Verlinkung (mithilfe eines Fragmentbezeichners), beim Scripting oder bei der Formatierung (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser dazu bringt, Benutzereingabeereignisse für das Element zu ignorieren. Nützlich, wenn Klickereignisse vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)
  - : Gibt einen Hinweis an die Browser über den Typ der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Wird hauptsächlich für {{HTMLElement("input")}}-Elemente verwendet, kann aber auf jedem Element verwendet werden, während es sich im [`contenteditable`](#contenteditable) Modus befindet.
- [`is`](/de/docs/Web/HTML/Global_attributes/is)
  - : Erlaubt es Ihnen anzugeben, dass ein standardmäßiges HTML-Element sich wie ein registriertes benutzerdefiniertes integriertes Element verhalten soll (siehe [Using custom elements](/de/docs/Web/API/Web_components/Using_custom_elements) für weitere Details).

> [!NOTE]
> Die `item*`-Attribute sind Teil der [WHATWG HTML Microdata-Funktion](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Global_attributes/itemid)
  - : Der einzigartige, globale Bezeichner eines Items.
- [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)
  - : Wird verwendet, um einem Item Eigenschaften hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut spezifiziert haben, wobei ein `itemprop` aus einem Namen-Wert-Paar besteht.
- [`itemref`](/de/docs/Web/HTML/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachfahren eines Elements mit dem Attribut `itemscope` sind, können dem Item mit einem `itemref` zugeordnet werden. Es liefert eine Liste von Element-IDs (keine `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope` funktioniert (meist) zusammen mit [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype), um anzugeben, dass der HTML-Inhalt in einem Block sich auf ein bestimmtes Item bezieht. `itemscope` erstellt das Item und definiert den Umfang des damit verbundenen `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Item und seinen Eigenschaftskontext beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Item-Eigenschaften) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) wird verwendet, um den Umfang zu setzen, wo in der Datenstruktur das Vokabular, das durch `itemtype` festgelegt wurde, aktiv sein wird.
- [`lang`](/de/docs/Web/HTML/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht bearbeitbare Elemente geschrieben sind, oder die Sprache, in der bearbeitbare Elemente vom Benutzer geschrieben werden sollen. Das Attribut enthält ein "Sprach-Tag" (bestehend aus durch Bindestriche getrennten "Sprach-Subtags") im Format definiert in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}. `xml:lang` hat Vorrang vor diesem Attribut.
- [`nonce`](/de/docs/Web/HTML/Global_attributes/nonce)
  - : Ein kryptografisches "Nonce" (ein einmal verwendetes Zahl), das von der [Content Security Policy](/de/docs/Web/HTTP/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf erlaubt ist oder nicht.
- [`part`](/de/docs/Web/HTML/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Teilnamen des Elements. Teilnamen ermöglichen es CSS, spezifische Elemente in einem Schattengitterbaum über das {{CSSxRef("::part")}} Pseudo-Element auszuwählen und zu stylen.
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu kennzeichnen (siehe {{domxref("Popover API", "Popover API", "", "nocode")}}). Popover-Elemente sind über `display: none` verborgen, bis sie über ein einleitendes/steuerndes Element (z. B. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) Attribut) oder einen Aufruf von {{domxref("HTMLElement.showPopover()")}} geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten und ermöglichen es Bildschirmlesegeräten und anderen Tools, mit einem Objekt in einer Weise zu interagieren und es zu präsentieren, die mit den Erwartungen der Benutzer an diese Art von Objekt übereinstimmt. `role` wird zu HTML-Elementen hinzugefügt, indem `role="role_type"` festgelegt wird, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Global_attributes/slot)
  - : Ordnet einem Element einen Slot in einem [Schatten-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Schattengitterbaum zu: Ein Element mit einem `slot` Attribut wird dem Slot zugewiesen, der durch das {{HTMLElement("slot")}}-Element erstellt wird, dessen [`name`](/de/docs/Web/HTML/Element/slot#name) Attributwert dem Wert des `slot`-Attributs entspricht.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Ein aufgezähltes Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden kann. Es kann folgende Werte haben:

    - leeres String oder `true`, was anzeigt, dass das Element, falls möglich, auf Rechtschreibfehler überprüft werden soll;
    - `false`, was anzeigt, dass das Element nicht auf Rechtschreibfehler überprüft werden soll.

- [`style`](/de/docs/Web/HTML/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS) Styles, die auf das Element angewendet werden sollen. Es wird empfohlen, Styles in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck, eine schnelle Formatierung zu ermöglichen, zum Beispiel für Testzwecke.
- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)

  - : Ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus haben kann (fokusfähig ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und falls ja, in welcher Reihenfolge. Es kann mehrere Werte annehmen:

    - ein _negativer Wert_ bedeutet, dass das Element fokusfähig sein sollte, aber nicht durch sequentielle Tastaturnavigation erreicht werden kann;
    - `0` bedeutet, dass das Element fokusfähig und durch sequentielle Tastaturnavigation erreichbar sein sollte, seine relative Reihenfolge wird durch die Plattformkonvention definiert;
    - ein _positiver Wert_ bedeutet, dass das Element fokusfähig und durch sequentielle Tastaturnavigation erreichbar sein sollte; die Reihenfolge, in der die Elemente fokussiert werden, ist der zunehmende Wert des [**tabindex**](#tabindex). Wenn mehrere Elemente denselben tabindex teilen, folgt deren relative Reihenfolge ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Global_attributes/title)
  - : Enthält einen Text, der Beratungsinformationen zu dem Element, zu dem es gehört, darstellt. Solche Informationen können typischerweise, aber nicht unbedingt, dem Benutzer als Tooltip angezeigt werden.
- [`translate`](/de/docs/Web/HTML/Global_attributes/translate)

  - : Ein aufgezähltes Attribut, das verwendet wird, um festzulegen, ob die Attributwerte eines Elements und die Werte seiner {{DOMxRef("Text")}}-Knotenkinder bei der Lokalisierung der Seite übersetzt oder unverändert gelassen werden sollen. Es kann die folgenden Werte haben:

    - leeres String oder `yes`, was angibt, dass das Element übersetzt wird.
    - `no`, was angibt, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}

  - : Ein [aufgezähltes](/de/docs/Glossary/Enumerated) Attribut, das verwendet wird, um das Verhalten der virtuellen Tastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten zu steuern, bei denen keine Hardwaretastatur für Elemente verfügbar ist, deren Inhalt bearbeitbar ist (z. B. es ist ein {{htmlelement("input")}} oder {{htmlelement("textarea")}}-Element, oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut gesetzt).

    - `auto` oder ein _leeres String_, welches automatisch die virtuelle Tastatur anzeigt, wenn das Element fokussiert oder angetippt wird.
    - `manual`, welches den Fokus und das Tippen auf dem Element vom Zustand der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Global_attributes/writingsuggestions)

  - : Wird verwendet, um das Verhalten der Schreibvorschläge des Browsers in einem Eingabefeld, einem Abschnitt einer Seite oder der gesamten Seite zu steuern.

    - `false`, was die Schreibvorschläge des Browsers deaktiviert.
    - `true` oder ein _leeres String_, was die Schreibvorschläge aktiviert.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Schnittstelle {{DOMxRef("Element")}}, die es ermöglicht, die meisten globalen Attribute abzufragen.
