---
title: Globale Attribute
slug: Web/HTML/Global_attributes
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar("Global_attributes")}}

**Globale Attribute** sind Attribute, die allen HTML-Elementen gemeinsam sind. Sie können bei allen Elementen verwendet werden, auch wenn sie bei einigen Elementen keinen Effekt haben.

Globale Attribute können bei allen [HTML-Elementen](/de/docs/Web/HTML/Element) angegeben werden, _sogar bei denen, die nicht im Standard angegeben sind_. Das bedeutet, dass auch nicht standardisierte Elemente diese Attribute unterstützen müssen, jedoch verliert das Dokument dadurch die HTML5-Kompatibilität. Zum Beispiel blenden HTML5-kompatible Browser Inhalte aus, die als `<foo hidden>…</foo>` markiert sind, auch wenn `<foo>` kein gültiges HTML-Element ist.

Zusätzlich zu den grundlegenden HTML-Globalattributen existieren auch die folgenden globalen Attribute:

- `xml:lang` und `xml:base` — diese stammen aus den XHTML-Spezifikationen und sind veraltet, werden aber aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und die verschiedenen [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Zustände und Eigenschaften, die zur Gewährleistung der Barrierefreiheit verwendet werden.
- Die [Ereignis-Handler](/de/docs/Web/HTML/Attributes#event_handler_attributes) Attribute: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)
  - : Bietet einen Hinweis zur Erzeugung einer Tastenkombination für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das auf der Tastatur des Computers vorhanden ist.
- [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) {{non-standard_inline}}
  - : Verbindet ein positioniertes Element mit einem Anker-Element. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Global_attributes/id)-Wert des Elements, an das Sie das positionierte Element anheften möchten. Das Element kann dann [mittels CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise.
- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)
  - : Steuert, ob eingegebener Text automatisch auf Rechtschreibfehler überprüft wird.
    Dies kann auf Elemente angewendet werden, die über editierbaren Text verfügen, ausgenommen sind {{HTMLElement("input")}}-Elemente mit den Attributen: [`type="password"`](/de/docs/Web/HTML/Element/input/password), [`type="email"`](/de/docs/Web/HTML/Element/input/email) oder [`type="url"`](/de/docs/Web/HTML/Element/input/url).
- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald das zugehörige {{HTMLElement("dialog")}} angezeigt wird, fokussiert werden soll. Dieses Attribut ist ein boolesches, ursprünglich falsches.
- [`class`](/de/docs/Web/HTML/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste von Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)

  - : Ein {{Glossary("Enumerated", "Aufzählungs-")}} Attribut, das anzeigt, ob das Element vom Benutzer bearbeitet werden kann. Wenn ja, verändert der Browser sein Widget, um eine Bearbeitung zu ermöglichen. Das Attribut muss einen der folgenden Werte haben:

    - `true` oder der _leere String_, was anzeigt, dass das Element bearbeitbar sein muss;
    - `false`, was anzeigt, dass das Element nicht bearbeitbar sein muss.
    - `plaintext-only`, was anzeigt, dass der rohe Text des Elements bearbeitbar ist, aber das Formatieren von Rich Text deaktiviert ist.

- [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, die als benutzerdefinierte Datenattribute bezeichnet werden, und es erlauben, proprietäre Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM")}}-Repräsentation auszutauschen, die von Skripten verwendet werden können. Alle solchen benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle des Elements verfügbar, auf dem das Attribut gesetzt ist. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft gibt Zugriff auf sie.
- [`dir`](/de/docs/Web/HTML/Global_attributes/dir)

  - : Ein aufgelistetetes Attribut, das die Richtung des Textes des Elements angibt. Es kann folgende Werte haben:

    - `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet werden sollte, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet werden sollte, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, was den Benutzeragent entscheiden lässt. Es verwendet einen grundlegenden Algorithmus, während es die Zeichen im Inneren des Elements analysiert, bis es ein Zeichen mit einer starken Richtung findet, dann wendet es diese Richtung auf das gesamte Element an.

- [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable)

  - : Ein aufgelistetes Attribut, das angibt, ob das Element gezogen werden kann, indem die [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) verwendet wird. Es kann folgende Werte haben:

    - `true`, was anzeigt, dass das Element gezogen werden kann;
    - `false`, was anzeigt, dass das Element nicht gezogen werden kann.

- [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint)
  - : Gibt an, welches Aktionsetikett (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.
- [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)
  - : Wird verwendet, um im transitiven Export Schattenelemente aus einem verschachtelten Schattendom in einen enthaltenen Lichtbaum zu exportieren.
- [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Ein aufgezähltes Attribut, das anzeigt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Zum Beispiel kann es verwendet werden, um Seitenelemente auszublenden, die nicht verwendet werden können, bis der Anmeldevorgang abgeschlossen ist. Der Browser rendert solche Elemente nicht. Dieses Attribut darf nicht verwendet werden, um Inhalte auszublenden, die berechtigterweise angezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Global_attributes/id)
  - : Definiert einen eindeutigen Identifikator (ID), der im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element beim Verlinken (mittels Fragment-Identifier), Skripten oder beim Designen (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser dazu bringt, Benutzer-Eingabeereignisse für das Element zu ignorieren. Nützlich, wenn Klickereignisse vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)
  - : Gibt den Browsern einen Hinweis, welche Art von virtueller Tastaturkonfiguration verwendet werden soll, wenn dieses Element oder dessen Inhalt bearbeitet wird. Wird hauptsächlich für {{HTMLElement("input")}}-Elemente verwendet, kann aber für jedes Element im [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Modus verwendet werden.
- [`is`](/de/docs/Web/HTML/Global_attributes/is)
  - : Ermöglicht es Ihnen anzugeben, dass ein Standard-HTML-Element sich wie ein registriertes benutzerdefiniertes eingebautes Element verhalten soll (siehe [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) für weitere Details).

> [!NOTE]
> Die `item*`-Attribute sind Teil des [WHATWG HTML Microdata-Features](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Global_attributes/itemid)
  - : Der eindeutige, globale Bezeichner eines Elements.
- [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)
  - : Wird verwendet, um Eigenschaften zu einem Element hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut haben, wobei ein `itemprop` aus einem Namen-Wert-Paar besteht.
- [`itemref`](/de/docs/Web/HTML/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können mit Hilfe eines `itemref` mit dem Element verknüpft werden. Es bietet eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope` arbeitet (gewöhnlich) zusammen mit [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype), um anzuzeigen, dass der HTML-Inhalt in einem Block über ein bestimmtes Element handelt. `itemscope` erstellt das Element und definiert den Umfang des damit verknüpften `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Element und seinen Kontext der Eigenschaften beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Elementeigenschaften) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) wird verwendet, um den Gültigkeitsbereich zu setzen, wo in der Datenstruktur das durch `itemtype` festgelegte Vokabular aktiv sein wird.
- [`lang`](/de/docs/Web/HTML/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht editierbare Elemente sind, oder die Sprache, in die editierbare Elemente vom Benutzer geschrieben werden sollen. Das Attribut enthält ein "Sprach-Tag" (bestehend aus durch Bindestrich getrennten "Sprachsubtags") im Format definiert in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}. `xml:lang` hat Vorrang vor ihm.
- [`nonce`](/de/docs/Web/HTML/Global_attributes/nonce)
  - : Eine kryptografische Zufallszahl ("Number used once"), die von [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein gegebener Abruf fortgesetzt werden darf.
- [`part`](/de/docs/Web/HTML/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Teilnamen des Elements. Teilnamen ermöglichen es CSS, spezifische Elemente in einem Schattenbaum mittels des {{CSSxRef("::part")}}-Pseudoelements auszuwählen und zu gestalten.
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu kennzeichnen (siehe [Popover API](/de/docs/Web/API/Popover_API)). Popover-Elemente werden über `display: none` versteckt, bis sie über ein aufrufendes/steuerndes Element (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut) oder einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten und ermöglichen es Bildschirmlesern und anderen Werkzeugen, mit einem Objekt auf eine Weise zu interagieren, die den Erwartungen der Benutzer an diesen Objekttyp entspricht. `roles` werden zu HTML-Elementen hinzugefügt, wobei `role="role_type"` verwendet wird, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Global_attributes/slot)
  - : Weist ein Element einem Slot in einem [shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Schattenbaum zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, der vom {{HTMLElement("slot")}}-Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Element/slot#name)-Attributwert mit dem `slot`-Attributwert übereinstimmt.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Ein aufgelistetes Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden kann. Es kann folgende Werte haben:

    - ein leerer String oder `true`, was anzeigt, dass das Element, wenn möglich, auf Rechtschreibfehler geprüft werden soll;
    - `false`, was anzeigt, dass das Element nicht auf Rechtschreibfehler geprüft werden soll.

- [`style`](/de/docs/Web/HTML/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Stildeklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass empfohlen wird, Styles in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element dienen hauptsächlich dazu, eine schnelle Gestaltung zu ermöglichen, zum Beispiel zu Testzwecken.
- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)

  - : Ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus erhalten kann (_fokussierbar_ ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und wenn ja, an welcher Stelle. Es kann mehrere Werte annehmen:

    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein soll, jedoch nicht über sequentielle Tastaturnavigation erreichbar sein soll;
    - `0` bedeutet, dass das Element fokussierbar und über sequentielle Tastaturnavigation erreichbar sein soll, aber seine relative Reihenfolge wird durch die Plattformkonvention festgelegt;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über sequentielle Tastaturnavigation erreichbar sein soll; die Reihenfolge, in der die Elemente fokussiert werden, folgt dem aufsteigenden Wert des [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex). Wenn mehrere Elemente denselben Tabindex teilen, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Global_attributes/title)
  - : Enthält einen Text, der beratende Informationen bezogen auf das zugehörige Element darstellt. Solche Informationen können in der Regel, aber nicht unbedingt, den Benutzern als Tooltip angezeigt werden.
- [`translate`](/de/docs/Web/HTML/Global_attributes/translate)

  - : Ein aufgelistetes Attribut, das verwendet wird, um zu spezifizieren, ob die Attributwerte eines Elements und die Werte der [`Text`](/de/docs/Web/API/Text)-Knoten seiner Kinder übersetzt werden sollen, wenn die Seite lokalisiert wird, oder ob sie unverändert bleiben sollen. Es kann folgende Werte haben:

    - ein leerer String oder `yes`, was angibt, dass das Element übersetzt wird.
    - `no`, was angibt, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}

  - : Ein {{Glossary("enumerated", "aufgezähltes")}} Attribut, das verwendet wird, um das Verhalten der Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen möglicherweise keine Hardwaretastatur verfügbar ist, für Elemente zu steuern, deren Inhalt bearbeitbar ist (zum Beispiel ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut).

    - `auto` oder ein _leerer String_, welches die virtuelle Tastatur automatisch anzeigt, wenn das Element fokussiert oder angetippt wird.
    - `manual`, das den Fokus und das Tippen auf das Element vom Zustand der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Global_attributes/writingsuggestions)

  - : Ein {{Glossary("enumerated", "aufgelistetes")}} Attribut, das angibt, ob browserbasierte Schreibvorschläge unter dem Gültigkeitsbereich des Elements aktiviert sein sollen oder nicht.

    - `false`, was die Schreibvorschläge des Browsers deaktiviert.
    - `true` oder ein _leerer String_, was die Schreibvorschläge aktiviert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die es ermöglicht, die meisten globalen Attribute abzufragen.
