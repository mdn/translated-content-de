---
title: Globale Attribute
slug: Web/HTML/Global_attributes
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar("Global_attributes")}}

**Globale Attribute** sind Attribute, die allen HTML-Elementen gemeinsam sind; sie können bei allen Elementen verwendet werden, obwohl sie bei einigen Elementen keine Wirkung haben können.

Globale Attribute können bei allen [HTML-Elementen](/de/docs/Web/HTML/Element) angegeben werden, _selbst bei denen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass alle nicht standardmäßigen Elemente diese Attribute dennoch zulassen müssen, obwohl die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr HTML5-konform ist. Beispielsweise verbergen HTML5-konforme Browser Inhalte, die als `<foo hidden>…</foo>` gekennzeichnet sind, obwohl `<foo>` kein gültiges HTML-Element ist.

Zusätzlich zu den grundlegenden HTML-Globalattributen existieren auch folgende globale Attribute:

- `xml:lang` und `xml:base` — Diese Attribute stammen aus den XHTML-Spezifikationen und sind veraltet, aber aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und die mehrfachen [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Zustände und Eigenschaften, die zur Sicherstellung der Barrierefreiheit verwendet werden.
- Die [Ereignis-Handler](/de/docs/Web/HTML/Attributes#event_handler_attributes) Attribute: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)
  - : Bietet einen Hinweis zum Erstellen einer Tastenkombination für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das auf dem Computertastaturlayout existiert.
- [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) {{non-standard_inline}}
  - : Verknüpft ein positioniertes Element mit einem Ankerelement. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Global_attributes/id)-Wert des Elements, das Sie mit dem positionierten Element verankern möchten. Das Element kann dann [mittels CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)
  - : Bestimmt, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise.
- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)
  - : Bestimmt, ob eingegebener Text automatisch auf Rechtschreibfehler überprüft wird. Dies kann auf Elemente angewendet werden, die bearbeitbaren Text enthalten, außer auf {{HTMLElement("input")}}-Elemente mit dem Attribut: [`type="password"`](/de/docs/Web/HTML/Element/input/password), [`type="email"`](/de/docs/Web/HTML/Element/input/email) oder [`type="url"`](/de/docs/Web/HTML/Element/input/url).
- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald der {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, fokussiert werden soll. Dieses Attribut ist ein boolescher Wert, initial auf false gesetzt.
- [`class`](/de/docs/Web/HTML/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)

  - : Ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das angibt, ob das Element vom Benutzer bearbeitbar sein soll. Wenn ja, ändert der Browser sein Widget, um die Bearbeitung zu ermöglichen. Das Attribut muss einen der folgenden Werte annehmen:

    - `true` oder der _leere String_, was bedeutet, dass das Element bearbeitbar sein muss;
    - `false`, was bedeutet, dass das Element nicht bearbeitbar sein darf.
    - `plaintext-only`, was bedeutet, dass der rohe Text des Elements bearbeitbar ist, aber keine Rich-Text-Formatierung erlaubt ist.

- [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen namens benutzerdefinierte Datenattribute, die es ermöglichen, proprietäre Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM")}} Darstellung, die von Skripten verwendet werden können, auszutauschen. Alle derartigen benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft ermöglicht den Zugriff darauf.
- [`dir`](/de/docs/Web/HTML/Global_attributes/dir)

  - : Ein enumeriertes Attribut, das die Schreibrichtung des Texts des Elements angibt. Es kann folgende Werte haben:

    - `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, bei dem der Benutzeragent entscheidet. Er verwendet einen einfachen Algorithmus, indem er die Zeichen im Element analysiert, bis er ein Zeichen mit starker Richtung findet, dann wendet er diese Richtung auf das gesamte Element an.

- [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable)

  - : Ein enumeriertes Attribut, das angibt, ob das Element gezogen werden kann, unter Verwendung der [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API). Es kann folgende Werte haben:

    - `true`, was bedeutet, dass das Element gezogen werden kann
    - `false`, was bedeutet, dass das Element nicht gezogen werden kann.

- [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint)
  - : Gibt Hinweise, welches Aktionslabel (oder Symbol) für die Enter-Taste auf virtuellen Tastaturen angezeigt werden soll.
- [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)
  - : Wird verwendet, um Schatten-Teile transitiv aus einem verschachtelten Schatten-Baum in einen umgebenden Lichtbaum zu exportieren.
- [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Ein enumeriertes Attribut, das angibt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Beispielsweise kann es verwendet werden, um Elemente der Seite zu verbergen, die nicht verwendet werden können, bis der Anmeldevorgang abgeschlossen ist. Der Browser wird solche Elemente nicht rendern. Dieses Attribut darf nicht verwendet werden, um Inhalte zu verbergen, die legitim angezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Global_attributes/id)
  - : Definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Sie dient dazu, das Element beim Verlinken (unter Verwendung eines Fragment-Identifiers), beim Skripten oder beim Stylen (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser veranlasst, Benutzereingabeereignisse für das Element zu ignorieren. Nützlich, wenn Klickereignisse vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)
  - : Gibt den Browsern einen Hinweis auf die Art der Konfiguration der virtuellen Tastatur, die beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann aber auf jedes Element im [`contenteditable`](#contenteditable) Modus angewendet werden.
- [`is`](/de/docs/Web/HTML/Global_attributes/is)
  - : Erlaubt Ihnen anzugeben, dass ein Standard-HTML-Element sich wie ein registriertes benutzerdefiniertes eingebautes Element verhalten soll (siehe [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) für weitere Details).

> [!NOTE]
> Die `item*`-Attribute sind Teil der [WHATWG HTML Microdata Funktion](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Global_attributes/itemid)
  - : Der eindeutige, globale Bezeichner eines Elements.
- [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)
  - : Wird verwendet, um einem Element Eigenschaften hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut spezifiziert haben, wobei ein `itemprop` aus einem Namen-Wert-Paar besteht.
- [`itemref`](/de/docs/Web/HTML/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können mit dem Element mithilfe eines `itemref` verknüpft werden. Es bietet eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope` funktioniert (in der Regel) zusammen mit [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype), um anzugeben, dass das in einem Block enthaltene HTML über ein bestimmtes Element handelt. `itemscope` erstellt das Element und definiert den Bereich des damit verbundenen `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das den Kontext des Elements und dessen Eigenschaften beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Eigenschaften des Elements) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) wird verwendet, um den Bereich festzulegen, in dem das durch `itemtype` festgelegte Vokabular innerhalb der Datenstruktur aktiv ist.
- [`lang`](/de/docs/Web/HTML/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nichbearbeitbare Elemente vorliegen, oder die Sprache, in der bearbeitbare Elemente vom Benutzer geschrieben werden sollen. Das Attribut enthält ein "Sprach-Tag" (bestehend aus mit einem Bindestrich getrennten "Sprach-Untertags") im Format, das in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert ist. `xml:lang` hat Vorrang vor diesem.
- [`nonce`](/de/docs/Web/HTML/Global_attributes/nonce)
  - : Ein kryptografischer Nonce ("Number used once"), der von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) dazu verwendet werden kann, zu bestimmen, ob ein bestimmter Abruf fortgesetzt werden darf.
- [`part`](/de/docs/Web/HTML/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Teilenamen des Elements. Bestandteilnamen ermöglichen es CSS, spezifische Elemente in einem Schattenbaum über das {{CSSxRef("::part")}} Pseudoelement auszuwählen und zu stylen.
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Overlay-Element zu bezeichnen (siehe [Popover API](/de/docs/Web/API/Popover_API)). Overlay-Elemente sind über `display: none` verborgen, bis sie über ein auslösendes/steuerndes Element (d. h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) Aufruf geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten und erlauben es Bildschirmlesern und anderen Werkzeugen, mit einem Objekt auf eine Weise zu interagieren, die den Benutzererwartungen für diesen Objekttyp entspricht. `roles` werden zu HTML-Elementen mit `role="role_type"` hinzugefügt, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Schattenbaum zu: Ein Element mit einem `slot` Attribut wird dem Slot zugewiesen, der vom {{HTMLElement("slot")}} Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Element/slot#name) Attribut-Wert mit dem Wert dieses `slot` Attributs übereinstimmt.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Ein enumeriertes Attribut, das bestimmt, ob das Element auf Rechtschreibfehler überprüft werden kann. Es kann folgende Werte haben:

    - Leerstring oder `true`, was bedeutet, dass das Element möglichst auf Rechtschreibfehler geprüft werden soll;
    - `false`, was bedeutet, dass das Element nicht auf Rechtschreibfehler überprüft werden soll.

- [`style`](/de/docs/Web/HTML/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS) Stil-Definitionen zur Anwendung auf das Element. Beachten Sie, dass es empfohlen wird, Stile in einer separaten Datei oder in separaten Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}} Element haben hauptsächlich zum Zweck, ein schnelles Styling zu ermöglichen, beispielsweise für Testzwecke.
- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)

  - : Ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus erhalten kann (ist _fokussierbar_), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und wenn ja, in welcher Reihenfolge. Es kann mehrere Werte annehmen:

    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein soll, aber nicht über die sequentielle Tastaturnavigation erreichbar ist;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein soll, aber seine relative Reihenfolge wird von der Plattformkonvention definiert;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein soll; die Reihenfolge, in der die Elemente fokussiert werden, ist der aufsteigende Wert des [**tabindex**](#tabindex). Wenn mehrere Elemente denselben tabindex haben, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Global_attributes/title)
  - : Enthält einen Text, der beratende Informationen zu dem Element, zu dem es gehört, darstellt. Solche Informationen können normalerweise, aber nicht unbedingt, dem Benutzer als Tooltip präsentiert werden.
- [`translate`](/de/docs/Web/HTML/Global_attributes/translate)

  - : Ein enumeriertes Attribut, das angibt, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text) Knoten-Kinder bei der Lokalisierung der Seite übersetzt werden sollen oder ob sie unverändert bleiben sollen. Es kann folgende Werte haben:

    - Leerstring oder `yes`, was bedeutet, dass das Element übersetzt wird.
    - `no`, was bedeutet, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}

  - : Ein {{Glossary("enumerated", "enumeriertes")}} Attribut, das verwendet wird, um das Verhalten der Bildschirmtastatur bei Geräten wie Tablets, Mobiltelefonen oder anderen Geräten zu steuern, auf denen möglicherweise keine Hardwaretastatur für Elemente verfügbar ist, deren Inhalt bearbeitbar ist (zum Beispiel ist es ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut gesetzt ist).

    - `auto` oder ein _Leerstring_, das die virtuelle Tastatur automatisch anzeigt, wenn das Element fokussiert oder berührt wird.
    - `manual`, das den Fokus und das Tippen auf das Element vom Status der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Global_attributes/writingsuggestions)

  - : Ein {{Glossary("enumerated", "enumeriertes")}} Attribut, das angibt, ob browsergesteuerte Schreibvorschläge unter dem Bereich des Elements aktiviert sein sollen oder nicht.

    - `false`, das die Schreibvorschläge des Browsers deaktiviert.
    - `true` oder ein _Leerstring_, das die Schreibvorschläge aktiviert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element) Schnittstelle, die es ermöglicht, die meisten globalen Attribute abzufragen.
