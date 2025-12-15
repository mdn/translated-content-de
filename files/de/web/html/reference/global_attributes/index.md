---
title: Globale Attribute
slug: Web/HTML/Reference/Global_attributes
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

**Globale Attribute** sind Attribute, die für alle HTML-Elemente gemeinsam sind; sie können auf allen Elementen verwendet werden, obwohl sie bei einigen Elementen keine Wirkung haben könnten.

Globale Attribute können für alle [HTML-Elemente](/de/docs/Web/HTML/Reference/Elements) angegeben werden, _auch für solche, die nicht im Standard angegeben sind_. Das bedeutet, dass auch nicht standardisierte Elemente diese Attribute zulassen müssen, auch wenn die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr HTML5-konform ist. Beispielsweise blenden HTML5-konforme Browser Inhalte aus, die als `<foo hidden>…</foo>` gekennzeichnet sind, auch wenn `<foo>` kein gültiges HTML-Element ist.

Zusätzlich zu den grundlegenden globalen HTML-Attributen existieren auch die folgenden globalen Attribute:

- `xml:lang` und `xml:base` — diese sind aus den XHTML-Spezifikationen übernommen und veraltet, werden aber aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und die verschiedenen [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Zustände und Eigenschaften, die zur Sicherstellung der Barrierefreiheit verwendet werden.
- Die unten aufgelisteten [Event-Handler-Attribute](#liste_der_globalen_event-handler-attribute).

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)
  - : Gibt einen Hinweis zur Erzeugung eines Tastaturkürzels für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste davon verwenden, das auf der Computertastatur vorhanden ist.
- [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}
  - : Verknüpft ein positioniertes Element mit einem Anker-Element. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Wert des Elements, an das das positionierte Element angedockt werden soll. Das Element kann dann [mittels CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, auf welche Weise.
- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Steuert, ob eingegebener Text automatisch auf Rechtschreibfehler korrigiert wird.
    Dies kann auf Elemente angewendet werden, die bearbeitbaren Text enthalten, mit Ausnahme von {{HTMLElement("input")}}-Elementen mit dem Attribut: [`type="password"`](/de/docs/Web/HTML/Reference/Elements/input/password), [`type="email"`](/de/docs/Web/HTML/Reference/Elements/input/email) oder [`type="url"`](/de/docs/Web/HTML/Reference/Elements/input/url).
- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald der {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, fokussiert werden soll. Dieses Attribut ist ein boolesches Attribut, das anfänglich auf `false` gesetzt ist.
- [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, bestimmte Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und zuzugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
  - : Ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das angibt, ob das Element durch den Benutzer bearbeitbar sein soll. Wenn ja, ändert der Browser sein Widget, um das Bearbeiten zu ermöglichen. Das Attribut muss einen der folgenden Werte annehmen:
    - `true` oder der _leere String_, was darauf hinweist, dass das Element bearbeitbar sein muss;
    - `false`, was darauf hinweist, dass das Element nicht bearbeitbar sein darf.
    - `plaintext-only`, was darauf hinweist, dass der rohe Text des Elements bearbeitbar ist, aber die Formatierung von Rich-Text deaktiviert ist.

- [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, sogenannte benutzerdefinierte Datenattribute, die den Austausch proprietärer Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM")}}-Darstellung ermöglichen, die von Skripten verwendet werden können. Alle solche benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle des Elements verfügbar, auf dem das Attribut gesetzt ist. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft ermöglicht den Zugriff darauf.
- [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)
  - : Ein aufzählbares Attribut, das die Leserichtung des Texts des Elements angibt. Es kann die folgenden Werte haben:
    - `ltr`, was bedeutet _von links nach rechts_ und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was bedeutet _von rechts nach links_ und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, was den Benutzeragenten entscheiden lässt. Beim Parsen der Zeichen im Element wird ein Grundalgorithmus verwendet, bis ein Zeichen mit einer starken Leserichtung gefunden wird, dann wird diese Leserichtung auf das gesamte Element angewendet.

- [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
  - : Ein aufzählbares Attribut, das angibt, ob das Element mit der [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gezogen werden kann. Es kann die folgenden Werte haben:
    - `true`, was bedeutet, dass das Element gezogen werden kann
    - `false`, was bedeutet, dass das Element nicht gezogen werden kann.

- [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
  - : Gibt an, welches Aktionslabel (oder Icon) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)
  - : Wird verwendet, um Schattenteile transitiv von einem verschachtelten Schattendokumentenbaum in einen beinhaltenden Lichtbaum zu exportieren.
- [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Ein aufzählbares Attribut, das anzeigt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Beispielsweise kann es verwendet werden, um Elemente der Seite zu verbergen, die erst nach Abschluss des Anmeldevorgangs genutzt werden können. Der Browser wird solche Elemente nicht rendern. Dieses Attribut darf nicht verwendet werden, um Inhalte zu verstecken, die eigentlich angezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Sein Zweck besteht darin, das Element beim Verknüpfen (unter Verwendung eines Fragmentkennzeichens), Skripting oder Styling (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser veranlasst, Benutzereingabeereignisse für das Element zu ignorieren. Nützlich, wenn Klickevents vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)
  - : Gibt den Browsern einen Hinweis auf die Art der virtuellen Tastaturkonfiguration, die beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Wird hauptsächlich für {{HTMLElement("input")}}-Elemente verwendet, kann aber auf jedem Element im [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Modus verwendet werden.
- [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)
  - : Ermöglicht es, anzugeben, dass ein standardmäßiges HTML-Element wie ein registriertes, angepasstes eingebautes Element funktionieren soll (siehe [Verwendung von eigenen Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) für weitere Informationen).

> [!NOTE]
> Die `item*`-Attribute sind Teil des [WHATWG HTML-Microdata-Features](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - : Die eindeutige, globale Kennung eines Items.
- [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - : Wird verwendet, um einem Item Eigenschaften hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut spezifiziert haben, wobei ein `itemprop` aus einem Namen-Wert-Paar besteht.
- [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können mit dem Item unter Verwendung eines `itemref` assoziiert werden. Es bietet eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - : `itemscope` arbeitet (normalerweise) zusammen mit [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype), um anzugeben, dass das HTML innerhalb eines Blocks über ein bestimmtes Item handelt. `itemscope` erstellt das Item und definiert den Geltungsbereich des damit verbundenen `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Item und dessen Eigenschaften im Kontext beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`'s (Item-Eigenschaften) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) wird verwendet, um den Geltungsbereich festzulegen, in dem das durch `itemtype` festgelegte Vokabular in der Datenstruktur aktiv sein wird.
- [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht bearbeitbare Elemente verfasst sind, oder die Sprache, in der bearbeitbare Elemente vom Benutzer geschrieben werden sollten. Das Attribut sollte ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}} enthalten. `xml:lang` hat Vorrang vor ihm.
- [`nonce`](/de/docs/Web/HTML/Reference/Global_attributes/nonce)
  - : Ein kryptografischer {{Glossary("Nonce", "Nonce")}} ("einmal verwendete Nummer"), der von der [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf zugelassen werden soll.
- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste von Teilnamen des Elements. Teilnamen ermöglichen es CSS, bestimmte Elemente in einem Schattenbaum über das {{CSSxRef("::part")}} Pseudoelement auszuwählen und zu stylen.
- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu kennzeichnen (siehe [Popover API](/de/docs/Web/API/Popover_API)). Popover-Elemente sind über `display: none` verborgen, bis sie über ein aufrufendes/steuerndes Element (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) Aufruf geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten, sodass Screenreader und andere Tools Inhalte anzeigen und mit ihnen interagieren können, auf eine Weise, die den Erwartungen der Benutzer an diesen Objekttyp entspricht. `roles` werden HTML-Elementen mit `role="role_type"` hinzugefügt, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem [shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Schattenbaum zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, der von dem {{HTMLElement("slot")}}-Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name) Attributwert den `slot`-Attributwert entspricht.
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Ein aufzählbares Attribut, das angibt, ob das Element auf Rechtschreibfehler überprüft werden kann. Es kann die folgenden Werte haben:
    - leerer String oder `true`, was bedeutet, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden sollte;
    - `false`, was bedeutet, dass das Element nicht auf Rechtschreibfehler überprüft werden sollte.

- [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Stylingdeklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, Stile in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}} Element haben hauptsächlich den Zweck, schnell Styling zu ermöglichen, beispielsweise zu Testzwecken.
- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
  - : Ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (ist _fokussierbar_), ob es an der sequentiellen Tastaturnavigation teilnimmt und, wenn ja, an welcher Position. Es kann mehrere Werte annehmen:
    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein sollte, aber nicht über die sequentielle Tastaturnavigation erreichbar sein sollte;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte, aber seine relative Reihenfolge durch die Plattformkonvention definiert ist;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte; die Reihenfolge, in der die Elemente fokussiert werden, ergibt sich aus dem aufsteigenden Wert des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex). Wenn mehrere Elemente denselben Tabindex haben, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)
  - : Enthält einen Text, der beratende Informationen im Zusammenhang mit dem zugehörigen Element darstellt. Solche Informationen können typischerweise, aber nicht unbedingt, dem Benutzer als Tooltip präsentiert werden.
- [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)
  - : Ein aufzählbares Attribut, das verwendet wird, um anzugeben, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knotenkinder bei der Lokalisierung der Seite übersetzt werden sollen oder ob sie unverändert bleiben sollen. Es kann die folgenden Werte haben:
    - leerer String oder `yes`, was bedeutet, dass das Element übersetzt wird.
    - `no`, was bedeutet, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}
  - : Ein {{Glossary("enumerated", "aufzählbares")}} Attribut, das verwendet wird, um das Verhalten der Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten zu steuern, bei denen möglicherweise keine Hardwaretastatur verfügbar ist, für Elemente, deren Inhalt bearbeitbar ist (zum Beispiel ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut gesetzt).
    - `auto` oder ein _leerer String_, der die virtuelle Tastatur automatisch anzeigt, wenn das Element fokussiert oder angetippt wird.
    - `manual`, das den Fokus und das Tippen auf das Element vom Zustand der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)
  - : Ein {{Glossary("enumerated", "aufzählbares")}} Attribut, das angibt, ob browserbasierte Schreibvorschläge innerhalb des Geltungsbereichs des Elements aktiviert sein sollen oder nicht.
    - `false`, was die Schreibvorschläge des Browsers deaktiviert.
    - `true` oder ein _leerer String_, was Schreibvorschläge aktiviert.

## Liste der globalen Event-Handler-Attribute

HTML-Event-Handler-Attribute werden nicht empfohlen; siehe [HTML-Attribut-Referenz](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes), um zu erfahren, wie sie funktionieren.

Obwohl die unten aufgeführten Attribute auf alle Elemente anwendbar sind, sind sie nicht auf allen Elementen nützlich. Beispielsweise wird das `onvolumechange`-HTML-Attribut von allen Elementen akzeptiert und fügt einen Event-Listener für `volumechange` hinzu, aber nur Medien-Elemente werden jemals ein vom Browser ausgelöstes `volumechange`-Ereignis empfangen. Für andere Elemente können Sie nur [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) verwenden, um ein solches manuell auszulösen. [Einige Attribute](/de/docs/Web/HTML/Reference/Elements/body#event_attributes) können auf {{HTMLElement("body")}} spezifiziert werden, aber sie würden dann stattdessen auf Ereignisse auf `window` lauschen.

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

- [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die es ermöglicht, die meisten globalen Attribute abzufragen.
