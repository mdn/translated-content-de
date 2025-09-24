---
title: Globale Attribute
slug: Web/HTML/Reference/Global_attributes
l10n:
  sourceCommit: 1e1ac4b84b46ef34e901e22ee94e97cc749a4b3a
---

**Globale Attribute** sind Attribute, die für alle HTML-Elemente allgemein sind; sie können auf allen Elementen verwendet werden, obwohl sie auf einigen Elementen keine Wirkung haben können.

Globale Attribute können auf allen [HTML-Elementen](/de/docs/Web/HTML/Reference/Elements) angegeben werden, _selbst denen, die nicht in der Norm festgelegt sind_. Das bedeutet, dass jegliche nicht-standardmäßigen Elemente dennoch diese Attribute zulassen müssen, auch wenn durch die Verwendung dieser Elemente das Dokument nicht mehr HTML5-konform ist. Zum Beispiel verbergen HTML5-konforme Browser Inhalte, die als `<foo hidden>...</foo>` markiert sind, selbst wenn `<foo>` kein gültiges HTML-Element ist.

Zusätzlich zu den grundlegenden globalen HTML-Attributen existieren auch folgende globale Attribute:

- `xml:lang` und `xml:base` — diese stammen aus den XHTML-Spezifikationen und sind veraltet, werden aber aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und die mehreren [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Zustände und Eigenschaften, die für die Sicherstellung der Zugänglichkeit verwendet werden.
- Die unten aufgeführten [Event-Handler-Attribute](#liste_der_globalen_event-handler-attribute).

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)
  - : Bietet einen Hinweis zum Erstellen einer Tastenkombination für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das auf dem Computer-Tastaturlayout existiert.

- [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}
  - : Verknüpft ein positioniertes Element mit einem Anker-Element. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Wert des Elements, an das Sie das positionierte Element anheften möchten. Das Element kann dann [mit CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.

- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise.

- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Steuert, ob eingegebener Text automatisch auf Rechtschreibfehler korrigiert wird. Dies kann auf Elemente angewendet werden, die editierbaren Text enthalten, mit Ausnahme von {{HTMLElement("input")}}-Elementen mit dem Attribut: [`type="password"`](/de/docs/Web/HTML/Reference/Elements/input/password), [`type="email"`](/de/docs/Web/HTML/Reference/Elements/input/email) oder [`type="url"`](/de/docs/Web/HTML/Reference/Elements/input/url).

- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald der {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, fokussiert sein soll. Dieses Attribut ist ein boolesches Attribut, das anfänglich auf false gesetzt ist.

- [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen CSS und JavaScript die Auswahl und den Zugriff auf spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName).

- [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
  - : Ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das angibt, ob das Element vom Benutzer bearbeitet werden kann. Wenn ja, passt der Browser sein Widget zur Bearbeitung an. Das Attribut muss einen der folgenden Werte annehmen:
    - `true` oder der _leere String_, was anzeigt, dass das Element bearbeitbar sein muss;
    - `false`, was anzeigt, dass das Element nicht bearbeitbar sein muss;
    - `plaintext-only`, was anzeigt, dass der Rohtext des Elements bearbeitbar ist, aber die Rich-Text-Formatierung ist deaktiviert.

- [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, genannt benutzerdefinierte Daten-Attribute, die den Austausch proprietärer Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM")}}-Repräsentation ermöglichen, die von Skripten verwendet werden können. Alle solchen benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft ermöglicht den Zugriff darauf.

- [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)
  - : Ein aufzählbares Attribut, das die Richtung des Textes des Elements angibt. Es kann folgende Werte haben:
    - `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, das dem Benutzeragenten die Entscheidung überlässt. Es verwendet einen grundlegenden Algorithmus, während es die Zeichen innerhalb des Elements analysiert, bis es ein Zeichen mit starker Richtung findet, dann wendet es diese Richtung auf das gesamte Element an.

- [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
  - : Ein aufzählbares Attribut, das angibt, ob das Element gezogen werden kann, unter Verwendung der [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API). Es kann die folgenden Werte haben:
    - `true`, was anzeigt, dass das Element gezogen werden darf;
    - `false`, was anzeigt, dass das Element nicht gezogen werden darf.

- [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
  - : Gibt einen Hinweis darauf, welches Aktionslabel (oder -symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.

- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)
  - : Wird verwendet, um Schattenelemente transitiv von einem verschachtelten Schattenbaum in einen umgebenden Lichtbaum zu exportieren.

- [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Ein aufzählbares Attribut, das angibt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Es kann beispielsweise verwendet werden, um Elemente der Seite auszublenden, die nicht verwendet werden können, bis der Anmeldeprozess abgeschlossen ist. Der Browser rendert solche Elemente nicht. Dieses Attribut darf nicht verwendet werden, um Inhalte auszublenden, die legitim angezeigt werden könnten.

- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element beim Verlinken (unter Verwendung eines Fragmentidentifikators), beim Skripten oder beim Styling (mit CSS) zu identifizieren.

- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser dazu bringt, Benutzereingabeereignisse für das Element zu ignorieren. Nützlich, wenn Klickereignisse vorhanden sind.

- [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)
  - : Gibt einen Hinweis an die Browser über die Art der virtuellen Tastaturkonfiguration, die verwendet werden soll, wenn dieses Element oder dessen Inhalt bearbeitet wird. Wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann jedoch bei jedem Element im [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Modus verwendet werden.

- [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)
  - : Ermöglicht es Ihnen, anzugeben, dass ein Standard-HTML-Element wie ein registriertes, benutzerdefiniertes eingebautes Element verhalten soll (siehe [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) für mehr Details).

> [!NOTE]
> Die `item*`-Attribute sind Teil der [WHATWG HTML Microdata-Funktion](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - : Der einzigartige, globale Bezeichner eines Elements.

- [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - : Wird verwendet, um Eigenschaften zu einem Element hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut spezifiziert haben, wobei ein `itemprop` aus einem Namen-Wert-Paar besteht.

- [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können mithilfe eines `itemref` mit dem Element assoziiert werden. Es gibt eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften anderswo im Dokument.

- [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - : `itemscope` arbeitet in der Regel zusammen mit [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype), um anzugeben, dass das HTML in einem Block über ein bestimmtes Element handelt. `itemscope` erstellt das Element und definiert den Geltungsbereich des mit ihm verbundenen `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Element und seine Eigenschaften im Kontext beschreibt.

- [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Elementeigenschaften) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) wird verwendet, um den Umfang festzulegen, in dem innerhalb der Datenstruktur das durch `itemtype` festgelegte Vokabular aktiv sein wird.

- [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht bearbeitbare Elemente vorliegen, oder die Sprache, in der bearbeitbare Elemente vom Benutzer geschrieben werden sollten. Das Attribut sollte ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} enthalten. `xml:lang` hat Priorität darüber.

- [`nonce`](/de/docs/Web/HTML/Reference/Global_attributes/nonce)
  - : Ein kryptografischer Nonce („Zahl, die einmal verwendet wird“), der von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein gegebener Abruf ausgeführt werden darf.

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Teilnamen des Elements. Teilenamen ermöglichen es CSS, spezifische Elemente in einem Schattendom über das {{CSSxRef("::part")}} Pseudoelement auszuwählen und zu stylen.

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu kennzeichnen (siehe [Popover-API](/de/docs/Web/API/Popover_API)). Popover-Elemente sind via `display: none` versteckt, bis sie über ein aufrufendes/steuerndes Element (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf geöffnet werden.

- [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten und ermöglichen es Bildschirmlesern und anderen Werkzeugen, mit einem Objekt auf eine Weise zu interagieren, die den Erwartungen der Nutzer an diesen Objekttyp entspricht. `roles` werden zu HTML-Elementen hinzugefügt, indem `role="role_type"` verwendet wird, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.

- [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem [Schatten-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Schattenbaum zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, der vom {{HTMLElement("slot")}}-Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attributswert mit dem Wert des `slot`-Attributs übereinstimmt.

- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Ein aufzählbares Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden kann. Es kann folgende Werte haben:
    - leerer String oder `true`, was anzeigt, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden sollte;
    - `false`, was anzeigt, dass das Element nicht auf Rechtschreibfehler überprüft werden sollte.

- [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Stildeklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, Stile in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck, eine schnelle Stilgestaltung zu ermöglichen, beispielsweise für Testzwecke.

- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
  - : Ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus erhalten kann (ist _fokussierbar_), ob es an der sequentiellen Tastaturnavigation teilnehmen sollte und, wenn ja, an welcher Position. Es kann verschiedene Werte annehmen:
    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein sollte, aber nicht über sequenzielles Tastaturnavigation erreichbar sein sollte;
    - `0` bedeutet, dass das Element fokussierbar und über sequenzielle Tastaturnavigation erreichbar sein sollte, aber seine relative Reihenfolge wird durch die Plattformkonvention definiert;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über sequenzielle Tastaturnavigation erreichbar sein sollte; die Reihenfolge, in der die Elemente fokussiert werden, ist der zunehmende Wert des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex). Wenn mehrere Elemente den gleichen Tabindex teilen, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)
  - : Enthält einen Text, der beratende Informationen im Zusammenhang mit dem zugehörigen Element darstellt. Solche Informationen können typischerweise, aber nicht zwingend, dem Benutzer als Tooltip angezeigt werden.

- [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)
  - : Ein aufzählbares Attribut, das verwendet wird, um anzugeben, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knotenkinder beim Lokalisieren der Seite übersetzt oder unverändert gelassen werden sollen. Es kann folgende Werte annehmen:
    - leerer String oder `yes`, was anzeigt, dass das Element übersetzt wird.
    - `no`, was anzeigt, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}
  - : Ein {{Glossary("enumerated", "aufzählbares")}} Attribut, das das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen möglicherweise keine Hardware-Tastatur verfügbar ist, für Elemente steuert, deren Inhalt bearbeitbar ist (zum Beispiel ist es ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut).
    - `auto` oder ein _leerer String_, was die virtuelle Tastatur automatisch anzeigt, wenn das Element fokussiert oder angetippt wird.
    - `manual`, das den Fokus und das Antippen des Elements vom Zustand der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)
  - : Ein {{Glossary("enumerated", "aufzählbares")}} Attribut, das angibt, ob vom Browser bereitgestellte Schreibvorschläge unter dem Geltungsbereich des Elements aktiviert sein sollen.
    - `false`, was die Schreibvorschläge des Browsers deaktiviert.
    - `true` oder ein _leerer String_, was Schreibvorschläge aktiviert.

## Liste der globalen Event-Handler-Attribute

HTML-Event-Handler-Attribute sind nicht empfehlenswert; siehe [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes), um zu erfahren, wie sie funktionieren.

Obwohl die unten aufgeführten Attribute für alle Elemente gelten, sind sie nicht auf allen Elementen nützlich. Zum Beispiel wird das `onvolumechange`-HTML-Attribut von allen Elementen akzeptiert und fügt einen Ereignis-Listener für `volumechange` hinzu, aber nur Medienelemente erhalten jemals ein vom Browser ausgelöstes `volumechange`-Ereignis. Für andere Elemente können Sie nur [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) verwenden, um ein solches manuell auszulösen. [Einige Attribute](/de/docs/Web/HTML/Reference/Elements/body#event_attributes) können auf {{HTMLElement("body")}} angegeben werden, aber sie würden stattdessen auf Ereignisse auf dem `window` hören.

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

- [`Element`](/de/docs/Web/API/Element) Schnittstelle, die es ermöglicht, die meisten globalen Attribute abzufragen.
