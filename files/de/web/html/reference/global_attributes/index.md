---
title: Globale Attribute
slug: Web/HTML/Reference/Global_attributes
l10n:
  sourceCommit: f398f522d05bb8bfe739ac2417b00712b7888494
---

**Globale Attribute** sind Attribute, die allen HTML-Elementen gemeinsam sind; sie können bei allen Elementen verwendet werden, obwohl sie bei einigen Elementen keine Wirkung haben können.

Globale Attribute können auf allen [HTML-Elementen](/de/docs/Web/HTML/Reference/Elements) angegeben werden, _sogar auf solchen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass auch nicht-standardisierte Elemente diese Attribute zulassen müssen, auch wenn die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr HTML5-konform ist. Ein Beispiel: HTML5-konforme Browser verstecken Inhalte, die als `<foo hidden>…</foo>` markiert sind, obwohl `<foo>` kein gültiges HTML-Element ist.

Zusätzlich zu den grundlegenden HTML-Globalattributen existieren auch die folgenden globalen Attribute:

- `xml:lang` und `xml:base` — diese sind von den XHTML-Spezifikationen übernommen und veraltet, werden jedoch aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und die verschiedenen [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)-Zustände und -Eigenschaften, die zur Gewährleistung der Barrierefreiheit verwendet werden.
- Die unten aufgeführten [Event-Handler-Attribute](#liste_der_globalen_event-handler-attribute).

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)
  - : Gibt einen Hinweis darauf, eine Tastenkombination für das aktuelle Element zu generieren. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das auf der Computertastatur existiert.
- [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}
  - : Verbindet ein positioniertes Element mit einem Ankerelement. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Wert des Elements, an das das positionierte Element verankert werden soll. Das Element kann dann [mittels CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Steuert, ob der eingegebene Text automatisch großgeschrieben wird und, falls ja, in welcher Weise.
- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Steuert, ob eingegebener Text automatisch auf Rechtschreibfehler korrigiert wird. Dies kann auf Elemente angewendet werden, die bearbeitbaren Text haben, außer bei {{HTMLElement("input")}}-Elementen mit dem Attribut: [`type="password"`](/de/docs/Web/HTML/Reference/Elements/input/password), [`type="email"`](/de/docs/Web/HTML/Reference/Elements/input/email) oder [`type="url"`](/de/docs/Web/HTML/Reference/Elements/input/url).
- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald der {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, fokussiert wird. Dieses Attribut ist ein boolean, ursprünglich false.
- [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen, dass CSS und JavaScript spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auswählen und darauf zugreifen können.
- [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
  - : Ein {{Glossary("Enumerated", "enumerated")}} Attribut, das angibt, ob das Element vom Benutzer bearbeitbar sein soll. Falls ja, ändert der Browser sein Widget, um die Bearbeitung zu ermöglichen. Das Attribut muss einen der folgenden Werte annehmen:
    - `true` oder das _leere Zeichen_, das anzeigt, dass das Element bearbeitbar sein muss;
    - `false`, das anzeigt, dass das Element nicht bearbeitbar sein muss.
    - `plaintext-only`, das anzeigt, dass der Rohtext des Elements bearbeitbar ist, jedoch keine Formatierung für Rich Text möglich ist.

- [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, sogenannte benutzerdefinierte Datenattribute, die den Austausch proprietärer Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM")}}-Repräsentation, die von Skripten verwendet werden können, ermöglichen. Alle solchen benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle des Elements, auf dem das Attribut gesetzt ist, zugänglich. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft bietet Zugriff auf diese.
- [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)
  - : Ein enumeriertes Attribut, das die Richtung des Textes eines Elements angibt. Es kann die folgenden Werte haben:
    - `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, was den Benutzeragenten entscheiden lässt. Es verwendet einen einfachen Algorithmus, indem es die Zeichen innerhalb des Elements analysiert, bis es ein Zeichen mit starker Richtung findet, und diese dann auf das gesamte Element anwendet.

- [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
  - : Ein enumeriertes Attribut, das angibt, ob das Element mithilfe der [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gezogen werden kann. Es kann die folgenden Werte haben:
    - `true`, was anzeigt, dass das Element gezogen werden darf
    - `false`, was anzeigt, dass das Element nicht gezogen werden darf.

- [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
  - : Gibt einen Hinweis darauf, welches Aktionslabel (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)
  - : Wird verwendet, um Schattenbereiche von einem verschachtelten Schattenbaum in einen umgebenden Lichtbaum transitiv zu exportieren.
- [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) {{experimental_inline}}
  - : Erhöht die berechnete Überschriftenebene der [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb des Elements, ohne die Elemente zu ändern, mit denen sie geschrieben wurden.
- [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) {{experimental_inline}}
  - : Ein boolesches Attribut, das verhindert, dass die `headingoffset`-Werte von Vorfahrenelementen auf die Überschriften innerhalb des Elements angewendet werden.
- [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Ein enumeriertes Attribut, das angibt, dass das Element noch nicht, oder nicht mehr, _relevant_ ist. Beispielsweise kann es verwendet werden, um Teile der Seite zu verstecken, die nicht genutzt werden können, bis der Anmeldevorgang abgeschlossen ist. Der Browser rendert solche Elemente nicht. Dieses Attribut darf nicht verwendet werden, um Inhalte zu verstecken, die berechtigterweise angezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element beim Verlinken (unter Verwendung eines Fragmentbezeichners), Skripting oder Styling (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser dazu veranlasst, Benutzereingabeereignisse für das Element zu ignorieren. Nützlich, wenn Klickereignisse vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)
  - : Gibt den Browsern einen Hinweis auf die Konfiguration des virtuellen Tastaturtyps, der verwendet werden soll, wenn dieses Element oder dessen Inhalte bearbeitet werden. Wird hauptsächlich auf {{HTMLElement("input")}}-Elementen verwendet, kann aber auf jedem Element verwendet werden, das sich im [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Modus befindet.
- [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)
  - : Ermöglicht, anzugeben, dass ein standardmäßiges HTML-Element sich wie ein registriertes, benutzerdefiniertes, eingebautes Element verhalten soll (siehe [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) für weitere Details).

> [!NOTE]
> Die `item*`-Attribute sind Teil des [WHATWG HTML Microdata Feature](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - : Der eindeutige, globale Bezeichner eines Items.
- [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - : Wird verwendet, um einem Item Eigenschaften hinzuzufügen. Jedes HTML-Element darf ein `itemprop`-Attribut spezifiziert haben, wobei `itemprop` eine Name-Wert-Paar besteht.
- [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können mit dem `itemref`-Attribut einem Item zugeordnet werden. Es bietet eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - : `itemscope` arbeitet (normalerweise) zusammen mit [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype), um anzugeben, dass das in einem Block enthaltene HTML zu einem bestimmten Item gehört. `itemscope` erstellt das Item und definiert den Umfang des `itemtype`, das mit diesem verbunden ist. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Item und seine Eigenschaften im Kontext beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Item-Eigenschaften) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) wird verwendet, um den Umfang festzulegen, in dem in der Datenstruktur das durch `itemtype` gesetzte Vokabular aktiv sein wird.
- [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht bearbeitbare Elemente sind, oder die Sprache, in der bearbeitbare Elemente vom Benutzer geschrieben werden sollen. Das Attribut sollte ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} enthalten. `xml:lang` hat Vorrang vor ihm.
- [`nonce`](/de/docs/Web/HTML/Reference/Global_attributes/nonce)
  - : Ein kryptografischer {{Glossary("Nonce", "Nonce")}} ("Nummer, die nur einmal verwendet wird"), der von der [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob eine bestimmte Abfrage zugelassen wird oder nicht.
- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Teilnamen des Elements. Teilnamen ermöglichen es CSS, spezifische Elemente in einem Schattenbaum über das {{CSSxRef("::part")}} Pseudo-Element auszuwählen und zu stylen.
- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu kennzeichnen (siehe [Popover-API](/de/docs/Web/API/Popover_API)). Popover-Elemente werden über `display: none` verborgen, bis sie über ein aufrufendes/steuerndes Element (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten und ermöglichen es Bildschirmlesern und anderen Tools, mit einem Objekt in einer Weise zu interagieren und es zu präsentieren, die den Benutzererwartungen für diesen Objekttyp entspricht. `roles` werden HTML-Elementen mittels `role="role_type"` hinzugefügt, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem [Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Schattenbaum zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, der durch das {{HTMLElement("slot")}} Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attributswert mit dem Wert dieses `slot`-Attributs übereinstimmt.
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Ein enumeriertes Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden darf. Es kann die folgenden Werte haben:
    - leere Zeichenfolge oder `true`, was anzeigt, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden soll;
    - `false`, was anzeigt, dass das Element nicht auf Rechtschreibfehler überprüft werden soll.

- [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Stil-Deklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass empfohlen wird, Stile in einer separaten Datei oder in separaten Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich die Aufgabe, ein schnelles Styling zu ermöglichen, beispielsweise für Testzwecke.
- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
  - : Ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus erhalten kann (ist _fokussierbar_), ob es am sequentiellen Tastaturnavigation teilnimmt, und wenn ja, in welcher Position. Es kann mehrere Werte annehmen:
    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein sollte, aber nicht über die sequentielle Tastaturnavigation erreichbar sein sollte;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte, aber seine relative Reihenfolge wird durch die Plattformkonvention definiert;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte; die Reihenfolge, in der die Elemente fokussiert werden, ist der aufsteigende Wert des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex). Wenn mehrere Elemente denselben Tabindex teilen, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)
  - : Enthält einen Text, der Beratungsinformationen im Zusammenhang mit dem Element, zu dem es gehört, darstellt. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip dargestellt werden.
- [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)
  - : Ein enumeriertes Attribut, das verwendet wird, um anzugeben, ob Attributswerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knotenkinder beim Lokalisieren der Seite übersetzt werden sollen oder ob sie unverändert bleiben sollen. Es kann die folgenden Werte haben:
    - leere Zeichenfolge oder `yes`, was anzeigt, dass das Element übersetzt wird.
    - `no`, was anzeigt, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}
  - : Ein {{Glossary("enumerated", "enumerated")}} Attribut, das verwendet wird, um das Verhalten der Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen möglicherweise keine Hardwaretastatur verfügbar ist, für Elemente zu steuern, deren Inhalt bearbeitbar ist (z. B. ist es ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut).
    - `auto` oder ein _leerer String_, dass die virtuelle Tastatur automatisch angezeigt wird, wenn das Element fokussiert oder angeklickt wird.
    - `manual`, das den Fokus und das Anklicken des Elements von dem Zustand der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)
  - : Ein {{Glossary("enumerated", "enumerated")}} Attribut, das angibt, ob browsergenerierte Schreibvorschläge unter dem Bereich des Elements aktiviert sein sollen oder nicht.
    - `false`, das die Schreibvorschläge des Browsers deaktiviert.
    - `true` oder eine _leere Zeichenkette_, die Schreibvorschläge aktiviert.

## Liste der globalen Event-Handler-Attribute

HTML-Event-Handler-Attribute werden nicht empfohlen; siehe [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) für Informationen, wie sie funktionieren.

Obwohl die unten aufgeführten Attribute für alle Elemente gelten, sind sie nicht bei allen Elementen nützlich. Zum Beispiel wird das HTML-Attribut `onvolumechange` von allen Elementen akzeptiert und fügt einen Ereignislistener für `volumechange` hinzu, aber nur Medienelemente werden jemals ein vom Browser ausgelöstes `volumechange`-Ereignis erhalten. Bei anderen Elementen können Sie nur [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) verwenden, um eines manuell zu senden. [Einige Attribute](/de/docs/Web/HTML/Reference/Elements/body#event_attributes) können bei {{HTMLElement("body")}} angegeben werden, aber sie würden stattdessen die Ereignisse auf `window` hören.

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

- [`Element`](/de/docs/Web/API/Element) Schnittstelle, die die Abfrage der meisten globalen Attribute ermöglicht.
