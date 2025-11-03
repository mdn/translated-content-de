---
title: Globale Attribute
slug: Web/HTML/Reference/Global_attributes
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

**Globale Attribute** sind Attribute, die für alle HTML-Elemente gemein sind; sie können auf allen Elementen verwendet werden, obwohl sie bei manchen Elementen keine Wirkung haben.

Globale Attribute können auf allen [HTML-Elementen](/de/docs/Web/HTML/Reference/Elements) angegeben werden, _auch auf solchen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass auch nicht-standardisierte Elemente diese Attribute erlauben müssen, obwohl die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr HTML5-konform ist. Zum Beispiel verstecken HTML5-konforme Browser Inhalte, die mit `<foo hidden>...</foo>` markiert sind, obwohl `<foo>` kein gültiges HTML-Element ist.

Neben den grundlegenden globalen HTML-Attributen existieren auch die folgenden globalen Attribute:

- `xml:lang` und `xml:base` — Diese sind aus den XHTML-Spezifikationen übernommen und veraltet, werden aber aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und die mehrere [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Zustände und Eigenschaften, die zur Gewährleistung der Barrierefreiheit verwendet werden.
- Die unten aufgeführten [Event-Handler-Attribute](#liste_der_globalen_event-handler-attribute).

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)
  - : Gibt einen Hinweis zur Erstellung einer Tastenkombination für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das auf dem Tastaturlayout des Computers existiert.
- [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}
  - : Ordnet einem positionierten Element ein Ankerelement zu. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Wert des Elements, an das Sie das positionierte Element anheften möchten. Das Element kann dann [mit CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, in welcher Weise.
- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Steuert, ob eingegebener Text automatisch auf Rechtschreibfehler korrigiert wird. Dies kann auf Elemente angewendet werden, die bearbeitbaren Text enthalten, außer auf {{HTMLElement("input")}}-Elemente mit dem Attribut: [`type="password"`](/de/docs/Web/HTML/Reference/Elements/input/password), [`type="email"`](/de/docs/Web/HTML/Reference/Elements/input/email) oder [`type="url"`](/de/docs/Web/HTML/Reference/Elements/input/url).
- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald das {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, fokussiert werden soll. Dieses Attribut ist ein Boolescher Wert, der anfangs auf false gesetzt ist.
- [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen erlauben es CSS und JavaScript, spezifische Elemente über die [Class-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
  - : Ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das angibt, ob das Element vom Benutzer bearbeitet werden soll. Wenn ja, modifiziert der Browser sein Widget, um das Bearbeiten zu ermöglichen. Das Attribut muss einen der folgenden Werte annehmen:
    - `true` oder der _leere String_, was bedeutet, dass das Element bearbeitbar sein muss;
    - `false`, was bedeutet, dass das Element nicht bearbeitbar sein darf;
    - `plaintext-only`, was bedeutet, dass der Rohtext des Elements bearbeitbar ist, aber die Formatierung von Rich-Text deaktiviert ist.

- [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, die benutzerdefinierte Datenattribute genannt werden und den Austausch proprietärer Informationen zwischen den [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM")}}-Darstellung erlauben, die von Skripten verwendet werden können. Alle solchen benutzerdefinierten Daten sind über das [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface des Elements zugänglich, auf dem das Attribut gesetzt ist. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft bietet Zugriff darauf.
- [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)
  - : Ein aufgezähltes Attribut, das die Richtung des Textelements angibt. Es kann die folgenden Werte haben:
    - `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet werden soll, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet werden soll, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, was den Benutzer-Agent entscheiden lässt. Es verwendet einen einfachen Algorithmus, während es die Zeichen im Element analysiert, bis es ein Zeichen mit einer starken Richtung findet, dann wendet es diese Richtung auf das gesamte Element an.

- [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
  - : Ein aufgezähltes Attribut, das angibt, ob das Element mit der [Drag- und Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gezogen werden kann. Es kann die folgenden Werte haben:
    - `true`, was angibt, dass das Element gezogen werden darf;
    - `false`, was angibt, dass das Element nicht gezogen werden darf.

- [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
  - : Gibt Aufschluss darüber, welches Aktionslabel (oder Icon) für die Eingabetaste auf virtuellen Tastaturen angezeigt wird.
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)
  - : Wird verwendet, um Schattenteile transitiv von einem verschachtelten Schattenbaum in einen enthaltenen Lichtbaum zu exportieren.
- [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Ein aufgezähltes Attribut, das angibt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Zum Beispiel kann es verwendet werden, um Elemente der Seite zu verstecken, die nicht genutzt werden können, bis der Login-Vorgang abgeschlossen ist. Der Browser wird solche Elemente nicht rendern. Dieses Attribut darf nicht verwendet werden, um Inhalte zu verbergen, die berechtigterweise angezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element beim Verlinken (unter Verwendung eines Fragmentbezeichners), Scripting oder Styling (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser veranlasst, Benutzereingabeereignisse für das Element zu ignorieren. Nützlich, wenn Klickereignisse vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)
  - : Gibt den Browsern einen Hinweis auf die Art der virtuellen Tastatur-Konfiguration, die bei der Bearbeitung dieses Elements oder seiner Inhalte verwendet werden soll. Wird hauptsächlich auf {{HTMLElement("input")}}-Elementen verwendet, ist aber auf jedem Element im [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Modus nutzbar.
- [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)
  - : Ermöglicht es Ihnen, zu spezifizieren, dass ein Standard-HTML-Element wie ein registriertes, angepasstes eingebautes Element verhalten soll (siehe [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) für mehr Details).

> [!NOTE]
> Die `item*`-Attribute sind Teil des [WHATWG HTML Microdata Features](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - : Der eindeutige, globale Bezeichner eines Elements.
- [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - : Wird verwendet, um einem Element Eigenschaften hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut angegeben haben, wobei ein `itemprop` aus einem Namens- und Wertepaar besteht.
- [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können mit dem Element über ein `itemref` verknüpft werden. Es bietet eine Liste von Element-IDs (keine `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - : `itemscope` arbeitet (normalerweise) zusammen mit [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype), um anzugeben, dass das in einem Block enthaltene HTML sich auf ein bestimmtes Element bezieht. `itemscope` erstellt das Element und definiert den Umfang des mit ihm verknüpften `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Element und seinen Eigenschaftskontext beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Elementeigenschaften) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) wird verwendet, um den Geltungsbereich festzulegen, in dem das durch `itemtype` gesetzte Vokabular in der Datenstruktur aktiv ist.
- [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht bearbeitbare Elemente sind, oder die Sprache, in der bearbeitbare Elemente vom Benutzer geschrieben werden sollen. Das Attribut sollte einen gültigen {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} enthalten. `xml:lang` hat Vorrang vor diesem.
- [`nonce`](/de/docs/Web/HTML/Reference/Global_attributes/nonce)
  - : Eine kryptografische Randomzahl ("number used once"), die von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein gegebener Abruf fortgesetzt werden darf oder nicht.
- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Teilenamen des Elements. Teilenamen ermöglichen es CSS, spezifische Elemente in einem Schattenbaum über das {{CSSxRef("::part")}} Pseudo-Element auszuwählen und zu stylen.
- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu bezeichnen (siehe [Popover API](/de/docs/Web/API/Popover_API)). Popover-Elemente sind über `display: none` verborgen, bis sie über ein aufrufendes/steuendes Element (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten, wodurch Bildschirmleser und andere Tools die Interaktion mit einem Objekt in einer Weise präsentieren und unterstützen können, die den Erwartungen der Benutzer an diesen Objekttyp entspricht. `roles` werden durch `role="role_type"` zu HTML-Elementen hinzugefügt, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Schattenbaum zu: Ein Element mit einem `slot`-Attribut wird dem durch das {{HTMLElement("slot")}}-Element erstellten Slot zugewiesen, dessen [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attributwert mit dem `slot`-Attributwert übereinstimmt.
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Ein aufgezähltes Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden kann. Es kann die folgenden Werte haben:
    - Leeren String oder `true`, was bedeutet, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden sollte.
    - `false`, was bedeutet, dass das Element nicht auf Rechtschreibfehler überprüft werden sollte.

- [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Stildeklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, Stile in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck, ein schnelles Styling zu ermöglichen, beispielsweise zu Testzwecken.
- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
  - : Ein ganzzahliges Attribut, das angibt, ob das Element den Fokus empfangen kann (es ist _fokussierbar_), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und, wenn ja, in welcher Position. Es kann mehrere Werte annehmen:
    - Ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein soll, aber nicht über die sequentielle Tastaturnavigation erreichbar sein soll;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein soll, aber seine relative Reihenfolge wird durch die Plattform-Konvention definiert;
    - Ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein soll; Die Reihenfolge, in der die Elemente fokussiert werden, entspricht dem Aufsteigen der Werte von [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex). Wenn mehrere Elemente den gleichen Tabindex haben, folgt ihre relative Reihenfolge ihrer relativen Position im Dokument.

- [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)
  - : Enthält einen Text, der beratende Informationen zu dem Element repräsentiert, zu dem es gehört. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden.
- [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)
  - : Ein aufgezähltes Attribut, das verwendet wird, um zu spezifizieren, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Node-Kinder bei der Lokalisierung der Seite übersetzt werden sollen oder ob sie unverändert bleiben sollen. Es kann die folgenden Werte haben:
    - Leerer String oder `ja`, was bedeutet, dass das Element übersetzt wird.
    - `Nein`, was bedeutet, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}
  - : Ein {{Glossary("enumerated", "aufgezähltes")}} Attribut, das das Verhalten der virtuellen On-Screen-Tastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen möglicherweise keine Hardware-Tastatur für Elemente verfügbar ist, deren Inhalt bearbeitbar ist (zum Beispiel ist es ein {{htmlelement("input")}} oder {{htmlelement("textarea")}}-Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut gesetzt), steuern soll.
    - `auto` oder ein _leerer String_, was automatisch die virtuelle Tastatur anzeigt, wenn das Element fokussiert oder angetippt wird.
    - `manuell`, was den Fokus und das Tippen auf das Element von dem Zustand der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)
  - : Ein {{Glossary("enumerated", "aufgezähltes")}} Attribut, das angibt, ob browserbezogene Schreibvorschläge im Bereich des Elements aktiviert sein sollen oder nicht.
    - `false`, was die Schreibvorschläge des Browsers deaktiviert.
    - `true` oder ein _leerer String_, was Schreibvorschläge aktiviert.

## Liste der globalen Event-Handler-Attribute

HTML-Event-Handler-Attribute werden nicht empfohlen; siehe [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) für ihre Funktionsweise.

Obwohl die unten aufgeführten Attribute auf alle Elemente anwendbar sind, sind sie nicht bei allen Elementen nützlich. Zum Beispiel wird das `onvolumechange` HTML-Attribut von allen Elementen akzeptiert und bindet einen Event-Listener für `volumechange`, aber nur Medien-Elemente werden jemals ein vom Browser ausgelöstes `volumechange`-Ereignis empfangen. Für andere Elemente können Sie nur [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) verwenden, um eines manuell auszulösen. [Einige Attribute](/de/docs/Web/HTML/Reference/Elements/body#event_attributes) können auf {{HTMLElement("body")}} angegeben werden, aber sie würden stattdessen Ereignisse auf `window` überwachen.

- [`onabort`](/de/docs/Web/API/HTMLMediaElement/abort_event)
- [`onanimationcancel`](/de/docs/Web/API/Element/animationcancel_event)
- [`onanimationend`](/de/docs/Web/API/Element/animationend_event)
- [`onanimationiteration`](/de/docs/Web/API/Element/animationiteration_event)
- [`onanimationstart`](/de/docs/Web/API/Element/animationstart_event)
- [`onauxclick`](/de/docs/Web/API/Element/auxclick_event)
- [`onbeforeinput`](/de/docs/Web/API/Element/beforeinput_event)
- [`onbeforematch`](/de/docs/Web/API/Element/beforematch_event)
- [`onbeforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
- [`onblur`](/de/docs/Web/API/Element/blur_event)
- [`oncancel`](/de/docs/Web/API/HTMLInputElement/cancel_event)
- [`oncanplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
- [`oncanplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
- [`onchange`](/de/docs/Web/API/HTMLElement/change_event)
- [`onclick`](/de/docs/Web/API/Element/click_event)
- [`onclose`](/de/docs/Web/API/HTMLDialogElement/close_event)
- [`oncommand`](/de/docs/Web/API/HTMLElement/command_event)
- [`oncontentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [`oncontextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`oncontextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`oncontextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
- [`oncopy`](/de/docs/Web/API/Element/copy_event)
- [`oncuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)
- [`oncut`](/de/docs/Web/API/Element/cut_event)
- [`ondblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`ondrag`](/de/docs/Web/API/HTMLElement/drag_event)
- [`ondragend`](/de/docs/Web/API/HTMLElement/dragend_event)
- [`ondragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
- [`ondragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
- [`ondragover`](/de/docs/Web/API/HTMLElement/dragover_event)
- [`ondragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
- [`ondrop`](/de/docs/Web/API/HTMLElement/drop_event)
- [`ondurationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
- [`onemptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
- [`onended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
- [`onerror`](/de/docs/Web/API/HTMLElement/error_event)
- [`onfocus`](/de/docs/Web/API/Element/focus_event)
- [`onfocusin`](/de/docs/Web/API/Element/focusin_event)
- [`onfocusout`](/de/docs/Web/API/Element/focusout_event)
- [`onformdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)
- [`onfullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
- [`onfullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
- [`ongesturechange`](/de/docs/Web/API/Element/gesturechange_event) {{non-standard_inline}}
- [`ongestureend`](/de/docs/Web/API/Element/gestureend_event) {{non-standard_inline}}
- [`ongesturestart`](/de/docs/Web/API/Element/gesturestart_event) {{non-standard_inline}}
- [`ongotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
- [`oninput`](/de/docs/Web/API/Element/input_event)
- [`oninvalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)
- [`onkeydown`](/de/docs/Web/API/Element/keydown_event)
- [`onkeypress`](/de/docs/Web/API/Element/keypress_event) {{deprecated_inline}}
- [`onkeyup`](/de/docs/Web/API/Element/keyup_event)
- [`onload`](/de/docs/Web/API/HTMLElement/load_event)
- [`onloadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
- [`onloadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
- [`onloadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
- [`onlostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
- [`onmousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`onmouseenter`](/de/docs/Web/API/Element/mouseenter_event)
- [`onmouseleave`](/de/docs/Web/API/Element/mouseleave_event)
- [`onmousemove`](/de/docs/Web/API/Element/mousemove_event)
- [`onmouseout`](/de/docs/Web/API/Element/mouseout_event)
- [`onmouseover`](/de/docs/Web/API/Element/mouseover_event)
- [`onmouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`onmousewheel`](/de/docs/Web/API/Element/mousewheel_event) {{deprecated_inline}} {{non-standard_inline}}
- [`onpaste`](/de/docs/Web/API/Element/paste_event)
- [`onpause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
- [`onplay`](/de/docs/Web/API/HTMLMediaElement/play_event)
- [`onplaying`](/de/docs/Web/API/HTMLMediaElement/playing_event)
- [`onpointercancel`](/de/docs/Web/API/Element/pointercancel_event)
- [`onpointerdown`](/de/docs/Web/API/Element/pointerdown_event)
- [`onpointerenter`](/de/docs/Web/API/Element/pointerenter_event)
- [`onpointerleave`](/de/docs/Web/API/Element/pointerleave_event)
- [`onpointermove`](/de/docs/Web/API/Element/pointermove_event)
- [`onpointerout`](/de/docs/Web/API/Element/pointerout_event)
- [`onpointerover`](/de/docs/Web/API/Element/pointerover_event)
- [`onpointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
- [`onpointerup`](/de/docs/Web/API/Element/pointerup_event)
- [`onprogress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
- [`onratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
- [`onreset`](/de/docs/Web/API/HTMLFormElement/reset_event)
- [`onresize`](/de/docs/Web/API/HTMLVideoElement/resize_event)
- [`onscroll`](/de/docs/Web/API/Element/scroll_event)
- [`onscrollend`](/de/docs/Web/API/Element/scrollend_event)
- [`onscrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) {{Experimental_Inline}}
- [`onscrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) {{Experimental_Inline}}
- [`onsecuritypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)
- [`onseeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
- [`onseeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
- [`onselect`](/de/docs/Web/API/HTMLInputElement/select_event)
- [`onselectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event)
- [`onselectstart`](/de/docs/Web/API/Node/selectstart_event)
- [`onslotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)
- [`onstalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
- [`onsubmit`](/de/docs/Web/API/HTMLFormElement/submit_event)
- [`onsuspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
- [`ontimeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
- [`ontoggle`](/de/docs/Web/API/HTMLElement/toggle_event)
- [`ontouchcancel`](/de/docs/Web/API/Element/touchcancel_event)
- [`ontouchend`](/de/docs/Web/API/Element/touchend_event)
- [`ontouchmove`](/de/docs/Web/API/Element/touchmove_event)
- [`ontouchstart`](/de/docs/Web/API/Element/touchstart_event)
- [`ontransitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
- [`ontransitionend`](/de/docs/Web/API/Element/transitionend_event)
- [`ontransitionrun`](/de/docs/Web/API/Element/transitionrun_event)
- [`ontransitionstart`](/de/docs/Web/API/Element/transitionstart_event)
- [`onvolumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
- [`onwaiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
- [`onwebkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event) {{non-standard_inline}}
- [`onwebkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) {{non-standard_inline}}
- [`onwebkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event) {{non-standard_inline}}
- [`onwebkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event) {{non-standard_inline}}
- [`onwheel`](/de/docs/Web/API/Element/wheel_event)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die das Abfragen der meisten globalen Attribute ermöglicht.
