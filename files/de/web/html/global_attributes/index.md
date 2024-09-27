---
title: Globale Attribute
slug: Web/HTML/Global_attributes
l10n:
  sourceCommit: 87b1277782f71a58693aeb6a83464e3ccabbfa20
---

{{HTMLSidebar("Global_attributes")}}

**Globale Attribute** sind Attribute, die allen HTML-Elementen gemeinsam sind; sie können bei allen Elementen verwendet werden, obwohl sie bei einigen Elementen möglicherweise keine Wirkung haben.

Globale Attribute können auf alle [HTML-Elemente](/de/docs/Web/HTML/Element) angewendet werden, _auch auf solche, die nicht im Standard spezifiziert sind_. Das bedeutet, dass auch nicht standardkonforme Elemente diese Attribute erlauben müssen, obwohl die Verwendung dieser Elemente dazu führt, dass das Dokument nicht mehr HTML5-konform ist. Zum Beispiel verbergen HTML5-konforme Browser Inhalte, die als `<foo hidden>…</foo>` gekennzeichnet sind, obwohl `<foo>` kein gültiges HTML-Element ist.

Neben den grundlegenden globalen HTML-Attributen existieren auch die folgenden globalen Attribute:

- `xml:lang` und `xml:base` — diese sind aus den XHTML-Spezifikationen geerbt und veraltet, werden jedoch aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Roles) und die mehreren [`aria-*`](/de/docs/Web/Accessibility/ARIA/Attributes) Zustände und Eigenschaften, die zur Sicherstellung der Barrierefreiheit verwendet werden.
- Die [Event-Handler](/de/docs/Web/HTML/Attributes#event_handler_attributes) Attribute: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)
  - : Gibt einen Hinweis für das Erzeugen einer Tastenkombination für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das auf der Computertastatur vorhanden ist.
- [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) {{non-standard_inline}}
  - : Verknüpft ein positioniertes Element mit einem Ankerelement. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Global_attributes/id) Wert des Elements, an das das positionierte Element verankert werden soll. Das Element kann dann [unter Verwendung von CSS Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise.
- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald das {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, fokussiert wird. Dieses Attribut ist ein boolesches Attribut, das standardmäßig falsch ist.
- [`class`](/de/docs/Web/HTML/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen erlauben es CSS und JavaScript, bestimmte Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)

  - : Ein [aufzählbares](/de/docs/Glossary/Enumerated) Attribut, das anzeigt, ob das Element vom Benutzer bearbeitbar sein soll. Falls ja, ändert der Browser sein Widget, um die Bearbeitung zu erlauben. Das Attribut muss einen der folgenden Werte annehmen:

    - `true` oder der _leere String_, was bedeutet, dass das Element bearbeitbar sein muss;
    - `false`, was bedeutet, dass das Element nicht bearbeitbar sein darf.
    - `plaintext-only`, was bedeutet, dass der rohe Text des Elements bearbeitbar ist, aber die Formatierung von Rich Text deaktiviert ist.

- [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, sogenannte benutzerdefinierte Datenattribute, die den Austausch von proprietären Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner [DOM](/de/docs/Glossary/DOM) Darstellung ermöglichen, die von Skripten verwendet werden können. Alle solche benutzerdefinierten Daten sind über das [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface des Elements, auf dem das Attribut gesetzt ist, zugänglich. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft ermöglicht den Zugriff darauf.
- [`dir`](/de/docs/Web/HTML/Global_attributes/dir)

  - : Ein aufzählbares Attribut, das die Richtung des Textes des Elements angibt. Es kann die folgenden Werte haben:

    - `ltr`, was _left to right_ (von links nach rechts) bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _right to left_ (von rechts nach links) bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, was es dem User-Agent ermöglicht, zu entscheiden. Es verwendet einen grundlegenden Algorithmus, indem es die Zeichen im Element analysiert, bis es ein Zeichen mit einer starken Richtung findet, dann wird diese Richtung auf das gesamte Element angewendet.

- [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable)

  - : Ein aufzählbares Attribut, das anzeigt, ob das Element mit der [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gezogen werden kann. Es kann folgende Werte haben:

    - `true`, was bedeutet, dass das Element gezogen werden darf;
    - `false`, was bedeutet, dass das Element nicht gezogen werden darf.

- [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint)
  - : Gibt Hinweise, welches Aktionssymbol (oder welche Ikone) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.
- [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)
  - : Wird verwendet, um Schatten-Teile aus einem verschachtelten Schattendom in einen enthaltenden Lichtbaum transitiv zu exportieren.
- [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Ein aufzählbares Attribut, das anzeigt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Es kann zum Beispiel verwendet werden, um Elemente der Seite auszublenden, die erst verwendet werden können, wenn der Anmeldevorgang abgeschlossen ist. Der Browser wird solche Elemente nicht rendern. Dieses Attribut darf nicht verwendet werden, um Inhalte auszublenden, die berechtigterweise angezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Global_attributes/id)
  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument eindeutig sein muss. Sie dient dazu, das Element beim Verlinken (mittels Fragment Bezeichner), Scripten oder Stylen (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser dazu bringt, Benutzereingaben für das Element zu ignorieren. Nützlich, wenn Click-Events vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)
  - : Gibt einen Hinweis an Browser über die Art der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Wird hauptsächlich bei {{HTMLElement("input")}} Elementen verwendet, kann aber bei jedem Element im [`contenteditable`](#contenteditable) Modus genutzt werden.
- [`is`](/de/docs/Web/HTML/Global_attributes/is)
  - : Ermöglicht es Ihnen, anzugeben, dass ein standardmäßiges HTML-Element wie ein registriertes benutzerdefiniertes integriertes Element funktionieren soll (siehe [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) für weitere Details).

> [!NOTE]
> Die `item*` Attribute sind Teil des [WHATWG HTML Microdata Features](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Global_attributes/itemid)
  - : Der eindeutige, globale Bezeichner eines Elements.
- [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)
  - : Wird verwendet, um Eigenschaften zu einem Element hinzuzufügen. Jedes HTML-Element kann ein `itemprop` Attribut spezifiziert haben, wobei `itemprop` aus einem Name-Wert-Paar besteht.
- [`itemref`](/de/docs/Web/HTML/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope` Attribut sind, können mit dem `itemref` dem Element zugeordnet werden. Gibt eine Liste von Element-IDs an (nicht `itemid`s), die zusätzliche Eigenschaften an anderer Stelle im Dokument haben.
- [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope` funktioniert (normalerweise) zusammen mit [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype), um anzugeben, dass das in einem Block enthaltene HTML sich auf ein bestimmtes Element bezieht. `itemscope` erstellt das Element und definiert den Geltungsbereich des damit verbundenen `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das den Kontext des Elements und seiner Eigenschaften beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Elementeigenschaften) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) wird verwendet, um den Bereich festzulegen, in dem in der Datenstruktur das durch `itemtype` festgelegte Vokabular aktiv ist.
- [`lang`](/de/docs/Web/HTML/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht-bearbeitbare Elemente vorliegen, oder die Sprache, in der bearbeitbare Elemente von Benutzern geschrieben werden sollen. Das Attribut enthält ein "Sprach-Tag" (bestehend aus durch Bindestriche getrennten "Sprach-Untertags") im Format definiert in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}. `xml:lang` hat Vorrang vor diesem.
- [`nonce`](/de/docs/Web/HTML/Global_attributes/nonce)
  - : Eine kryptografische Zufallszahl ("number used once"), die von der [Content Security Policy](/de/docs/Web/HTTP/CSP) verwendet werden kann, um zu bestimmen, ob eine bestimmte Anforderung fortgesetzt werden darf.
- [`part`](/de/docs/Web/HTML/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Teilnamen des Elements. Teilnamen erlauben es CSS, spezifische Elemente in einem Schattendom über das {{CSSxRef("::part")}} Pseudoelement zu selektieren und zu stylen.
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu kennzeichnen (siehe [Popover API](/de/docs/Web/API/Popover_API)). Popover-Elemente sind über `display: none` verborgen, bis sie über ein einleitendes/kontrollierendes Element geöffnet werden (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) Aufruf.
- [`role`](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten, wodurch Bildschirmlesegeräte und andere Werkzeuge Inhalte in einer Weise präsentieren und unterstützen können, die den Erwartungen der Benutzer an diesen Objekttyp entspricht. `roles` werden HTML-Elementen mit `role="role_type"` hinzugefügt, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem [shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Schattendom zu: Ein Element mit einem `slot` Attribut wird dem Slot zugewiesen, der durch das {{HTMLElement("slot")}} Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Element/slot#name) Attributwert mit dem Wert des `slot` Attributs übereinstimmt.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Ein aufzählbares Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden kann. Es kann folgende Werte haben:

    - ein leerer String oder `true`, was bedeutet, dass das Element, falls möglich, auf Rechtschreibfehler überprüft werden sollte;
    - `false`, was bedeutet, dass das Element nicht auf Rechtschreibfehler überprüft werden sollte.

- [`style`](/de/docs/Web/HTML/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS) Stil-Anweisungen, die auf das Element angewendet werden sollen. Es wird jedoch empfohlen, Stile in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}} Element dienen hauptsächlich dem Zweck, schnelles Styling zu ermöglichen, zum Beispiel zu Testzwecken.
- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)

  - : Ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus annehmen kann (ist _fokusierbar_), ob es an der sequentiellen Tastennavigation teilnehmen soll, und wenn ja, an welcher Position. Es kann mehrere Werte haben:

    - ein _negativer Wert_ bedeutet, dass das Element fokusierbar, aber nicht über sequentielle Tastennavigation erreichbar sein soll;
    - `0` bedeutet, dass das Element fokusierbar und über sequentielle Tastennavigation erreichbar sein soll, aber seine relative Reihenfolge wird durch die Konvention der Plattform bestimmt;
    - ein _positiver Wert_ bedeutet, dass das Element fokusierbar und über sequentielle Tastennavigation erreichbar sein soll; die Reihenfolge, in der die Elemente fokussiert werden, ist der zunehmende Wert der [**tabindex**](#tabindex). Teilen sich mehrere Elemente denselben tabindex, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Global_attributes/title)
  - : Enthält einen Text, der beratende Informationen zum Element enthält, zu dem es gehört. Solche Informationen können typischerweise, aber nicht zwingend, dem Benutzer als Tooltip dargestellt werden.
- [`translate`](/de/docs/Web/HTML/Global_attributes/translate)

  - : Ein aufzählbares Attribut, das verwendet wird, um festzulegen, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text) Knoten-Kinder übersetzt werden sollen, wenn die Seite lokalisiert wird, oder ob sie unverändert bleiben sollen. Es kann folgende Werte haben:

    - ein leerer String oder `yes`, was bedeutet, dass das Element übersetzt wird.
    - `no`, was bedeutet, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}

  - : Ein [aufzählbares](/de/docs/Glossary/Enumerated) Attribut, das verwendet wird, um das Verhalten der Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten zu steuern, bei denen möglicherweise keine Hardwaretastatur für Elemente zur Verfügung steht, deren Inhalt bearbeitbar ist (zum Beispiel ist es ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut gesetzt).

    - `auto` oder ein _leerer String_, der die virtuelle Tastatur automatisch anzeigt, wenn das Element fokussiert oder angetippt wird.
    - `manual`, das den Fokus und das Tippen auf das Element vom Zustand der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Global_attributes/writingsuggestions)

  - : Wird verwendet, um das Verhalten der Schreibvorschläge des Browsers in einem Eingabefeld, in einem Abschnitt einer Seite oder auf der gesamten Seite zu steuern.

    - `false`, was die Schreibhilfen des Browsers deaktiviert.
    - `true` oder ein _leerer String_, was die Schreibhilfen aktiviert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element) Schnittstelle, die es erlaubt, die meisten globalen Attribute abzufragen.
