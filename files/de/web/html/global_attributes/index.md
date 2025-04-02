---
title: Globale Attribute
slug: Web/HTML/Global_attributes
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{HTMLSidebar("Global_attributes")}}

**Globale Attribute** sind Attribute, die für alle HTML-Elemente gelten; sie können auf alle Elemente angewendet werden, obwohl sie bei manchen Elementen keine Wirkung zeigen.

Globale Attribute können auf allen [HTML-Elementen](/de/docs/Web/HTML/Element) angegeben werden, _auch auf solchen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass alle nicht standardkonformen Elemente dennoch diese Attribute zulassen müssen, auch wenn die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr HTML5-konform ist. Zum Beispiel verbergen HTML5-konforme Browser Inhalte, die als `<foo hidden>…</foo>` markiert sind, obwohl `<foo>` kein gültiges HTML-Element ist.

Zusätzlich zu den grundlegenden globalen HTML-Attributen existieren auch folgende globale Attribute:

- `xml:lang` und `xml:base` — diese stammen aus den XHTML-Spezifikationen und sind veraltet, werden aber aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und die mehreren [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Zustände und Eigenschaften, die zur Sicherstellung der Barrierefreiheit genutzt werden.
- Die [Event-Handler](/de/docs/Web/HTML/Attributes#event_handler_attributes) Attribute: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)
  - : Bietet einen Hinweis zum Erzeugen einer Tastenkombination für das aktuelle Element. Dieses Attribut besteht aus einer Liste von Zeichen, die durch Leerzeichen getrennt sind. Der Browser sollte das erste Zeichen verwenden, das auf der Computertastatur verfügbar ist.
- [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) {{non-standard_inline}}
  - : Verknüpft ein positioniertes Element mit einem Anker-Element. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Global_attributes/id)-Wert des Elements, an das Sie das positionierte Element anheften möchten. Das Element kann dann [mithilfe der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)
  - : Kontrolliert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, in welcher Weise.
- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)
  - : Kontrolliert, ob eingegebener Text automatisch auf Rechtschreibfehler korrigiert wird. Dies kann auf Elemente angewendet werden, die editierbaren Text haben, außer bei {{HTMLElement("input")}} Elementen mit dem Attribut: [`type="password"`](/de/docs/Web/HTML/Element/input/password), [`type="email"`](/de/docs/Web/HTML/Element/input/email) oder [`type="url"`](/de/docs/Web/HTML/Element/input/url).
- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald das {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, fokussiert werden soll. Dieses Attribut ist ein boolesches Attribut, das standardmäßig auf false gesetzt ist.
- [`class`](/de/docs/Web/HTML/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen erlauben es CSS und JavaScript, spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)

  - : Ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das angibt, ob das Element vom Benutzer bearbeitet werden soll. Wenn ja, modifiziert der Browser sein Widget, um die Bearbeitung zu ermöglichen. Das Attribut muss einen der folgenden Werte annehmen:

    - `true` oder die _leere Zeichenkette_, was bedeutet, dass das Element bearbeitbar sein muss;
    - `false`, was bedeutet, dass das Element nicht bearbeitbar sein muss;
    - `plaintext-only`, was bedeutet, dass der rohe Text des Elements bearbeitbar ist, aber Rich-Text-Formatierung deaktiviert ist.

- [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, die sogenannten benutzerdefinierten Datenattribute, die den Austausch proprietärer Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM")}}-Repräsentation ermöglichen, die von Skripten verwendet werden können. Alle diese benutzerdefinierten Daten sind über das [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface des Elements, auf dem das Attribut gesetzt ist, zugänglich. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft bietet Zugriff darauf.
- [`dir`](/de/docs/Web/HTML/Global_attributes/dir)

  - : Ein enumeriertes Attribut, das die Richtung des Textes im Element angibt. Es kann die folgenden Werte haben:

    - `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, was den Benutzeragenten entscheiden lässt. Er verwendet einen einfachen Algorithmus, während er die Zeichen im Element analysiert, bis er ein Zeichen mit starker Richtung findet, und wendet dann diese Richtung auf das gesamte Element an.

- [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable)

  - : Ein enumeriertes Attribut, das angibt, ob das Element mit der [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gezogen werden kann. Es kann folgende Werte haben:

    - `true`, was bedeutet, dass das Element gezogen werden kann;
    - `false`, was bedeutet, dass das Element nicht gezogen werden kann.

- [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint)
  - : Gibt einen Hinweis darauf, welche Aktionsbezeichnung (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.
- [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)
  - : Wird verwendet, um Schattenpartien transitiv von einem verschachtelten Schattendom in einen enthaltenden Lichtbaum zu exportieren.
- [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Ein enumeriertes Attribut, das angibt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Zum Beispiel kann es verwendet werden, um Elemente der Seite zu verbergen, die bis zum Abschluss des Anmeldevorgangs nicht verwendet werden können. Der Browser rendert solche Elemente nicht. Dieses Attribut darf nicht verwendet werden, um Inhalte zu verstecken, die berechtigterweise angezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Global_attributes/id)
  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element beim Verlinken (unter Verwendung eines Fragmentbezeichners), Skripting oder Styling (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser veranlasst, Benutzereingabeereignisse für das Element zu ignorieren. Nützlich, wenn Klick-Ereignisse vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)
  - : Gibt Browsern einen Hinweis darauf, welche Art von virtueller Tastaturkonfiguration verwendet werden soll, wenn dieses Element oder seine Inhalte bearbeitet werden. Wird hauptsächlich bei {{HTMLElement("input")}} Elementen verwendet, kann aber auf jedem Element verwendet werden, während es sich im [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Modus befindet.
- [`is`](/de/docs/Web/HTML/Global_attributes/is)
  - : Ermöglicht es Ihnen, anzugeben, dass ein Standard-HTML-Element wie ein registriertes benutzerdefiniertes eingebautes Element funktionieren soll (siehe [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) für mehr Details).

> [!NOTE]
> Die `item*`-Attribute sind Teil des [WHATWG HTML Microdata-Features](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Global_attributes/itemid)
  - : Der eindeutige, globale Bezeichner eines Artikels.
- [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)
  - : Wird verwendet, um einem Artikel Eigenschaften hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut angegeben haben, wobei ein `itemprop` aus einem Namens- und Wertpaar besteht.
- [`itemref`](/de/docs/Web/HTML/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können dem Element mithilfe von `itemref` zugeordnet werden. Es bietet eine Liste von Element-IDs (nicht `itemids`) mit zusätzlichen Eigenschaften anderswo im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope` funktioniert (üblicherweise) zusammen mit [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype), um anzugeben, dass das in einem Block enthaltene HTML über ein bestimmtes Element handelt. `itemscope` erstellt das Objekt und definiert den Bereich des damit verbundenen `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das den Artikel und seine Eigenschaften im Kontext beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Elementeigenschaften) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) wird verwendet, um den Geltungsbereich festzulegen, wo in der Datenstruktur das durch `itemtype` festgelegte Vokabular aktiv wird.
- [`lang`](/de/docs/Web/HTML/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht editierbare Elemente sind, oder die Sprache, in der editierbare Elemente vom Benutzer geschrieben werden sollen. Das Attribut enthält einen „Sprach-Tag“ (bestehend aus „Sprach-Subtags“, die durch Bindestriche getrennt sind), im im {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definierten Format. `xml:lang` hat Vorrang darüber.
- [`nonce`](/de/docs/Web/HTML/Global_attributes/nonce)
  - : Eine kryptografische Zufallszahl („Nonce“ – „number used once“), die von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf fortgesetzt werden darf oder nicht.
- [`part`](/de/docs/Web/HTML/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Part-Namen des Elements. Part-Namen ermöglichen es CSS, spezifische Elemente in einem Schatten-DOM über das {{CSSxRef("::part")}} Pseudo-Element auszuwählen und zu stylen.
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu kennzeichnen (siehe [Popover API](/de/docs/Web/API/Popover_API)). Popover-Elemente sind über `display: none` verborgen, bis sie über ein aufrufendes/steuerndes Element (z.B. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten, sodass Bildschirmleser und andere Werkzeuge Objekte auf eine Weise präsentieren und mit ihnen interagieren können, die den Benutzererwartungen dieses Objekttyps entspricht. `roles` werden HTML-Elementen mit dem Format `role="role_type"` hinzugefügt, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Global_attributes/slot)
  - : Weist einem [Schatten-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Schattenbaum-Slot ein Element zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, der durch das {{HTMLElement("slot")}}-Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Element/slot#name)-Attributswert mit diesem `slot`-Attributswert übereinstimmt.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Ein enumeriertes Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden soll. Es kann die folgenden Werte haben:

    - leere Zeichenkette oder `true`, was angibt, dass das Element, falls möglich, auf Rechtschreibfehler überprüft werden soll;
    - `false`, was angibt, dass das Element nicht auf Rechtschreibfehler geprüft werden soll.

- [`style`](/de/docs/Web/HTML/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Styling-Deklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, Stile in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck, schnelles Styling zu ermöglichen, z.B. für Testzwecke.
- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)

  - : Ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus übernehmen kann (ist _fokusierbar_), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und, wenn ja, an welcher Stelle. Es kann mehrere Werte annehmen:

    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein soll, aber nicht durch sequentielle Tastaturnavigation erreichbar sein soll;
    - `0` bedeutet, dass das Element fokussierbar und durch sequentielle Tastaturnavigation erreichbar sein soll, aber die relative Reihenfolge wird durch die Plattformkonvention definiert;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und durch sequentielle Tastaturnavigation erreichbar sein soll; die Reihenfolge, in der die Elemente fokussiert werden, entspricht dem aufsteigenden Wert des [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex). Wenn mehrere Elemente denselben Tabindex teilen, folgt ihre relative Reihenfolge ihrer relativen Position im Dokument.

- [`title`](/de/docs/Web/HTML/Global_attributes/title)
  - : Enthält einen Text, der beratende Informationen im Zusammenhang mit dem Element, dem es gehört, repräsentiert. Solche Informationen können in der Regel, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden.
- [`translate`](/de/docs/Web/HTML/Global_attributes/translate)

  - : Ein enumeriertes Attribut, das verwendet wird, um anzugeben, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knoten-Kinder beim Lokalisieren der Seite übersetzt oder unverändert gelassen werden sollen. Es kann die folgenden Werte haben:

    - leere Zeichenkette oder `yes`, was angibt, dass das Element übersetzt wird.
    - `no`, was anzeigt, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}

  - : Ein {{Glossary("enumerated", "enumeriertes")}} Attribut, das verwendet wird, um das Verhalten der virtuellen Bildschirmtastatur auf Geräten zu steuern, auf denen möglicherweise keine Hardwaretastatur verfügbar ist, beispielsweise Tablets, Mobiltelefone oder andere Geräte, für Elemente, deren Inhalt editierbar ist (zum Beispiel ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element oder ein Element mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut).

    - `auto` oder eine _leere Zeichenkette_, was die virtuelle Tastatur automatisch anzeigt, wenn das Element fokussiert oder angetippt wird.
    - `manual`, was den Fokus und das Tippen auf das Element vom Zustand der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Global_attributes/writingsuggestions)

  - : Ein {{Glossary("enumerated", "enumeriertes")}} Attribut, das angibt, ob die vom Browser bereitgestellten Schreibvorschläge unter dem Geltungsbereich des Elements aktiviert werden sollen oder nicht.

    - `false`, was die Schreibvorschläge des Browsers deaktiviert.
    - `true` oder eine _leere Zeichenkette_, was die Schreibvorschläge aktiviert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die das Abfragen der meisten globalen Attribute ermöglicht.
