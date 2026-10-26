---
title: Globale Attribute
slug: Web/HTML/Reference/Global_attributes
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

**Globale Attribute** sind Attribute, die allen HTML-Elementen gemeinsam sind. Sie können für alle Elemente verwendet werden, auch wenn sie bei manchen Elementen keine Wirkung haben.

Globale Attribute können für alle [HTML-Elemente](/de/docs/Web/HTML/Reference/Elements) angegeben werden, _auch für solche, die nicht im Standard definiert sind_. Das bedeutet, dass auch Nicht-Standard-Elemente diese Attribute zulassen müssen, obwohl das Dokument durch die Verwendung solcher Elemente nicht mehr HTML5-konform ist. Beispielsweise verbergen HTML5-konforme Browser Inhalte, die mit `<foo hidden>…</foo>` ausgezeichnet sind, obwohl `<foo>` kein gültiges HTML-Element ist.

Neben den grundlegenden globalen HTML-Attributen gibt es außerdem folgende globale Attribute:

- `xml:lang` und `xml:base` – sie stammen aus den XHTML-Spezifikationen, sind veraltet, werden aber aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) sowie die verschiedenen [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)-Zustände und -Eigenschaften, die der Barrierefreiheit dienen.
- Die unten aufgeführten [Event-Handler-Attribute](#liste_der_globalen_event-handler-attribute).

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)
  - : Gibt einen Hinweis zur Erstellung eines Tastenkürzels für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste Zeichen verwenden, das auf der Tastaturbelegung des Computers vorhanden ist.
- [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}
  - : Verknüpft ein positioniertes Element mit einem Ankerelement. Der Wert des Attributs ist der Wert des Attributs [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements, an dem das positionierte Element verankert werden soll. Anschließend kann das Element [mithilfe der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise.
- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Steuert, ob eingegebener Text automatisch auf Rechtschreibfehler korrigiert wird.
    Dies kann auf Elemente mit bearbeitbarem Text angewendet werden, mit Ausnahme von {{HTMLElement("input")}}-Elementen mit dem Attribut [`type="password"`](/de/docs/Web/HTML/Reference/Elements/input/password), [`type="email"`](/de/docs/Web/HTML/Reference/Elements/input/email) oder [`type="url"`](/de/docs/Web/HTML/Reference/Elements/input/url).
- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald das {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, den Fokus erhalten soll. Dieses Attribut ist boolesch und hat anfänglich den Wert `false`.
- [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, bestimmte Elemente über [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.
- [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming) {{Experimental_Inline}}
  - : Eine Zeichenfolge, die das Element als Containerwurzel für die Beobachtung durch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekte mit dem Typ `"container"` kennzeichnet. Ihr Wert identifiziert den Container.
- [`containertimingignore`](/de/docs/Web/HTML/Reference/Global_attributes/containertimingignore) {{Experimental_Inline}}
  - : Ein boolesches Attribut, das das Element und seine Nachfahren davon ausschließt, zum Timing eines mit `containertiming` gekennzeichneten Vorfahrenelements beizutragen.
- [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
  - : Ein {{Glossary("Enumerated", "Aufzählungsattribut")}}, das angibt, ob das Element von Benutzern bearbeitet werden können soll. Ist dies der Fall, passt der Browser seine Benutzeroberfläche an, um die Bearbeitung zu ermöglichen. Das Attribut muss einen der folgenden Werte haben:
    - `true` oder die _leere Zeichenfolge_: Das Element muss bearbeitbar sein.
    - `false`: Das Element darf nicht bearbeitbar sein.
    - `plaintext-only`: Der unformatierte Text des Elements ist bearbeitbar, aber die Rich-Text-Formatierung ist deaktiviert.

- [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, die als benutzerdefinierte Datenattribute bezeichnet werden. Sie ermöglichen den Austausch eigener Informationen zwischen [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM")}}-Repräsentation, die von Skripten verwendet werden können. Alle solchen benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle des Elements verfügbar, für das das Attribut gesetzt ist. Die Eigenschaft [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) ermöglicht den Zugriff darauf.
- [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)
  - : Ein Aufzählungsattribut, das die Schreibrichtung des Textes eines Elements angibt. Es kann folgende Werte haben:
    - `ltr` bedeutet _von links nach rechts_ und wird für Sprachen verwendet, die von links nach rechts geschrieben werden (wie Englisch).
    - `rtl` bedeutet _von rechts nach links_ und wird für Sprachen verwendet, die von rechts nach links geschrieben werden (wie Arabisch).
    - `auto` überlässt die Entscheidung dem User Agent. Dieser analysiert die Zeichen innerhalb des Elements mit einem einfachen Algorithmus, bis er ein Zeichen mit eindeutiger Schreibrichtung findet, und wendet diese Schreibrichtung dann auf das gesamte Element an.

- [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
  - : Ein Aufzählungsattribut, das angibt, ob das Element mithilfe der [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gezogen werden kann. Es kann folgende Werte haben:
    - `true` gibt an, dass das Element gezogen werden kann.
    - `false` gibt an, dass das Element nicht gezogen werden kann.

- [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
  - : Gibt einen Hinweis darauf, welche Aktionsbeschriftung oder welches Symbol für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)
  - : Wird verwendet, um Shadow Parts transitiv aus einem verschachtelten Shadow Tree in einen umgebenden Light Tree zu exportieren.
- [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) {{experimental_inline}}
  - : Erhöht die berechnete Überschriftenebene der [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb des Elements, ohne die dafür verwendeten Elemente zu ändern.
- [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) {{experimental_inline}}
  - : Ein boolesches Attribut, das verhindert, dass sich die `headingoffset`-Werte von Vorfahrenelementen auf die Überschriften innerhalb des Elements auswirken.
- [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Ein Aufzählungsattribut, das angibt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Es kann beispielsweise verwendet werden, um Seitenelemente zu verbergen, die erst nach Abschluss der Anmeldung verwendet werden können. Der Browser stellt solche Elemente nicht dar. Dieses Attribut darf nicht verwendet werden, um Inhalte zu verbergen, die berechtigterweise angezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument nur einmal vorkommen darf. Er dient dazu, das Element beim Verlinken (mithilfe eines Fragmentbezeichners), in Skripten oder bei der Gestaltung mit CSS zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
  - : Ein boolescher Wert, der bewirkt, dass der Browser Benutzereingabeereignisse für das Element ignoriert. Nützlich, wenn Klickereignisse vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)
  - : Gibt Browsern einen Hinweis darauf, welche Art von virtueller Tastatur beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Wird hauptsächlich für {{HTMLElement("input")}}-Elemente verwendet, kann aber für jedes Element im [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Modus verwendet werden.
- [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)
  - : Ermöglicht festzulegen, dass sich ein Standard-HTML-Element wie ein registriertes angepasstes integriertes Element verhalten soll (weitere Informationen finden Sie unter [Benutzerdefinierte Elemente verwenden](/de/docs/Web/API/Web_components/Using_custom_elements)).

> [!NOTE]
> Die `item*`-Attribute sind Teil der [WHATWG-HTML-Mikrodatenfunktion](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - : Der eindeutige, globale Bezeichner eines Eintrags.
- [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - : Wird verwendet, um einem Eintrag Eigenschaften hinzuzufügen. Für jedes HTML-Element kann ein `itemprop`-Attribut angegeben werden, wobei ein `itemprop` aus einem Name-Wert-Paar besteht.
- [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachfahren eines Elements mit dem Attribut `itemscope` sind, können dem Eintrag mithilfe von `itemref` zugeordnet werden. Es enthält eine Liste von Element-IDs (nicht `itemid`-Werten) mit zusätzlichen Eigenschaften an anderen Stellen im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - : `itemscope` wird (üblicherweise) zusammen mit [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype) verwendet, um anzugeben, dass sich das in einem Block enthaltene HTML auf einen bestimmten Eintrag bezieht. `itemscope` erstellt den Eintrag und definiert den Geltungsbereich des zugehörigen `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (etwa [schema.org](https://schema.org/)), das den Eintrag und den Kontext seiner Eigenschaften beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das zur Definition von `itemprop`-Eigenschaften in der Datenstruktur verwendet wird. Mit [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) wird festgelegt, in welchem Bereich der Datenstruktur das durch `itemtype` angegebene Vokabular gilt.
- [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
  - : Hilft dabei, die Sprache eines Elements festzulegen: die Sprache, in der nicht bearbeitbare Elemente verfasst sind, oder die Sprache, in der Benutzer bearbeitbare Elemente verfassen sollen. Das Attribut sollte ein gültiges {{Glossary("BCP_47_language_tag", "BCP-47-Sprachkennzeichen")}} enthalten. `xml:lang` hat Vorrang vor diesem Attribut.
- [`nonce`](/de/docs/Web/HTML/Reference/Global_attributes/nonce)
  - : Eine kryptografische {{Glossary("Nonce", "Nonce")}} („number used once“, eine nur einmal verwendete Zahl), anhand derer die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) bestimmen kann, ob ein bestimmter Abruf fortgesetzt werden darf.
- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Part-Namen des Elements. Part-Namen ermöglichen es CSS, bestimmte Elemente in einem Shadow Tree über das Pseudoelement {{CSSxRef("::part")}} auszuwählen und zu gestalten.
- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Kennzeichnet ein Element als Popover-Element (siehe [Popover-API](/de/docs/Web/API/Popover_API)). Popover-Elemente sind durch `display: none` verborgen, bis sie über ein auslösendes oder steuerndes Element (beispielsweise ein `<button>` oder `<input type="button">` mit dem Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)) oder durch einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten. Dadurch können Screenreader und andere Hilfsmittel die Interaktion mit einem Objekt entsprechend den Erwartungen der Benutzer an diesen Objekttyp darstellen und unterstützen. `roles` werden HTML-Elementen mit `role="role_type"` hinzugefügt, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem [Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Shadow-Tree zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, den das {{HTMLElement("slot")}}-Element erstellt, dessen Attribut [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name) denselben Wert wie das `slot`-Attribut hat.
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Ein Aufzählungsattribut, das festlegt, ob das Element auf Rechtschreibfehler geprüft werden darf. Es kann folgende Werte haben:
    - die leere Zeichenfolge oder `true`: Das Element sollte nach Möglichkeit auf Rechtschreibfehler geprüft werden.
    - `false`: Das Element sollte nicht auf Rechtschreibfehler geprüft werden.

- [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Gestaltungsdeklarationen, die auf das Element angewendet werden. Es wird empfohlen, Stile in einer oder mehreren separaten Dateien zu definieren. Dieses Attribut und das Element {{HTMLElement("style")}} dienen hauptsächlich dazu, eine schnelle Gestaltung zu ermöglichen, beispielsweise zu Testzwecken.
- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
  - : Ein ganzzahliges Attribut, das angibt, ob das Element den Eingabefokus erhalten kann (also _fokussierbar_ ist), ob es an der sequenziellen Tastaturnavigation teilnehmen soll und, falls ja, an welcher Position. Es kann verschiedene Werte haben:
    - Ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein soll, aber nicht über die sequenzielle Tastaturnavigation erreichbar sein soll.
    - `0` bedeutet, dass das Element fokussierbar und über die sequenzielle Tastaturnavigation erreichbar sein soll. Seine relative Reihenfolge richtet sich jedoch nach den Konventionen der Plattform.
    - Ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequenzielle Tastaturnavigation erreichbar sein soll. Die Reihenfolge, in der die Elemente fokussiert werden, richtet sich nach dem aufsteigenden Wert von [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex). Haben mehrere Elemente denselben tabindex, richtet sich ihre relative Reihenfolge nach ihrer Position im Dokument.

- [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)
  - : Enthält einen Text mit ergänzenden Informationen zu dem Element, zu dem das Attribut gehört. Solche Informationen können Benutzern typischerweise, aber nicht zwingend, als Tooltip angezeigt werden.
- [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)
  - : Ein Aufzählungsattribut, das angibt, ob die Attributwerte eines Elements und die Werte seiner untergeordneten [`Text`](/de/docs/Web/API/Text)-Knoten bei der Lokalisierung der Seite übersetzt oder unverändert gelassen werden sollen. Es kann folgende Werte haben:
    - die leere Zeichenfolge oder `yes`: Das Element wird übersetzt.
    - `no`: Das Element wird nicht übersetzt.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}
  - : Ein {{Glossary("enumerated", "Aufzählungsattribut")}}, mit dem das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten gesteuert wird, auf denen möglicherweise keine Hardwaretastatur verfügbar ist, wenn der Inhalt eines Elements bearbeitbar ist (beispielsweise bei einem {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder einem Element mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)).
    - `auto` oder die _leere Zeichenfolge_: Die virtuelle Tastatur wird automatisch angezeigt, wenn das Element fokussiert oder angetippt wird.
    - `manual`: Das Fokussieren und Antippen des Elements wird vom Zustand der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)
  - : Ein {{Glossary("enumerated", "Aufzählungsattribut")}}, das angibt, ob vom Browser bereitgestellte Schreibvorschläge im Geltungsbereich des Elements aktiviert sein sollen.
    - `false` deaktiviert die Schreibvorschläge des Browsers.
    - `true` oder die _leere Zeichenfolge_ aktiviert Schreibvorschläge.

## Liste der globalen Event-Handler-Attribute

Von der Verwendung von HTML-Event-Handler-Attributen wird abgeraten. Wie sie funktionieren, erfahren Sie in der [Referenz der HTML-Attribute](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes).

Die unten aufgeführten Attribute gelten zwar für alle Elemente, sind aber nicht für alle Elemente sinnvoll. Beispielsweise wird das HTML-Attribut `onvolumechange` von allen Elementen akzeptiert und fügt einen Event-Listener für `volumechange` hinzu. Ein vom Browser ausgelöstes `volumechange`-Ereignis empfangen jedoch nur Medienelemente. Bei anderen Elementen können Sie ein solches Ereignis nur mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) manuell auslösen. [Einige Attribute](/de/docs/Web/HTML/Reference/Elements/body#event_attributes) können für {{HTMLElement("body")}} angegeben werden, reagieren dann aber stattdessen auf Ereignisse auf `window`.

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

- Die Schnittstelle [`Element`](/de/docs/Web/API/Element), über die sich die meisten globalen Attribute abfragen lassen.
