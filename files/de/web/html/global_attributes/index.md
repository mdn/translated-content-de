---
title: Globale Attribute
slug: Web/HTML/Global_attributes
l10n:
  sourceCommit: 709d3a56661f895e5b0a67ff969e381d503ddd45
---

{{HTMLSidebar("Global_attributes")}}

**Globale Attribute** sind Attribute, die für alle HTML-Elemente gelten; sie können auf allen Elementen verwendet werden, obwohl sie bei einigen Elementen keine Wirkung haben können.

Globale Attribute können für alle [HTML-Elemente](/de/docs/Web/HTML/Element) angegeben werden, _sogar für diejenigen, die nicht im Standard festgelegt sind_. Das bedeutet, dass alle nicht-standardmäßigen Elemente diese Attribute dennoch zulassen müssen, auch wenn die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr HTML5-kompatibel ist. Beispielsweise verstecken HTML5-konforme Browser Inhalte, die als `<foo hidden>…</foo>` markiert sind, obwohl `<foo>` kein gültiges HTML-Element ist.

Zusätzlich zu den grundlegenden globalen HTML-Attributen existieren auch die folgenden globalen Attribute:

- `xml:lang` und `xml:base` — diese stammen aus den XHTML-Spezifikationen, sind veraltet, werden jedoch aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Roles) und die zahlreichen [`aria-*`](/de/docs/Web/Accessibility/ARIA/Attributes) Zustände und Eigenschaften, die zur Sicherstellung der Zugänglichkeit verwendet werden.
- Die [Ereignis-Handler](/de/docs/Web/HTML/Attributes#event_handler_attributes) Attribute: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)
  - : Gibt einen Hinweis zur Erstellung eines Tastaturkürzels für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das auf dem Tastaturlayout des Computers existiert.
- [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) {{non-standard_inline}}
  - : Verknüpft ein positioniertes Element mit einem Ankerelement. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Global_attributes/id) Wert des Elements, an das Sie das positionierte Element anheften möchten. Das Element kann dann [über CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)
  - : Bestimmt, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise.
- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)
  - : Bestimmt, ob eingegebener Text automatisch auf Rechtschreibfehler überprüft wird. Dies kann auf Elemente angewendet werden, die bearbeitbaren Text haben, außer für {{HTMLElement("input")}}-Elemente mit dem Attribut: [`type="password"`](/de/docs/Web/HTML/Element/input/password), [`type="email"`](/de/docs/Web/HTML/Element/input/email) oder [`type="url"`](/de/docs/Web/HTML/Element/input/url).
- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald der {{HTMLElement("dialog")}}, dessen Bestandteil es ist, angezeigt wird, fokussiert werden soll. Dieses Attribut ist ein boolescher Wert, der anfänglich auf false gesetzt ist.
- [`class`](/de/docs/Web/HTML/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)

  - : Ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das angibt, ob das Element vom Benutzer bearbeitet werden kann. Falls ja, ändert der Browser sein Widget, um die Bearbeitung zu ermöglichen. Das Attribut muss einen der folgenden Werte haben:

    - `true` oder den _leeren String_, was bedeutet, dass das Element bearbeitbar sein muss;
    - `false`, was bedeutet, dass das Element nicht bearbeitbar sein muss.
    - `plaintext-only`, was bedeutet, dass der rohe Text des Elements bearbeitbar ist, aber die Formatierung von Rich-Text deaktiviert ist.

- [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, die als benutzerdefinierte Datenattribute bezeichnet werden und proprietäre Informationen ermöglichen, die zwischen dem [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM")}}-Darstellung ausgetauscht werden können. Alle diese benutzerdefinierten Daten sind über das [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface des Elements, an das das Attribut gesetzt ist, verfügbar. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft bietet Zugriff darauf.
- [`dir`](/de/docs/Web/HTML/Global_attributes/dir)

  - : Ein enumeriertes Attribut, das die Textausrichtung des Elements angibt. Es kann die folgenden Werte haben:

    - `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet werden soll, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet werden soll, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, womit der Benutzer-Agent entscheiden lässt. Es verwendet einen grundlegenden Algorithmus, indem es die Zeichen im Element analysiert, bis es ein Zeichen mit starker Richtung findet, dann wendet es diese Richtung auf das ganze Element an.

- [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable)

  - : Ein enumeriertes Attribut, das angibt, ob das Element mithilfe der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) verschoben werden kann. Es kann folgende Werte haben:

    - `true`, was darauf hinweist, dass das Element verschoben werden kann;
    - `false`, was darauf hinweist, dass das Element nicht verschoben werden kann.

- [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint)
  - : Gibt einen Hinweis, welches Aktionslabel (oder Symbol) für die Enter-Taste auf virtuellen Tastaturen angezeigt werden soll.
- [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)
  - : Wird verwendet, um Schattenbestandteile von einem verschachtelten Schattenbaum in einen umgebenden Lichtraum transitiv zu exportieren.
- [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Ein enumeriertes Attribut, das angibt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Es kann zum Beispiel verwendet werden, um Elemente der Seite auszublenden, die erst nach Abschluss des Anmeldevorgangs genutzt werden können. Der Browser wird solche Elemente nicht rendern. Dieses Attribut darf nicht verwendet werden, um Inhalte zu verstecken, die legitim gezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Global_attributes/id)
  - : Definiert eine eindeutige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Ihr Zweck ist es, das Element beim Verlinken (mithilfe eines Fragment-Identifiers), beim Scripting oder bei der Gestaltung (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser veranlasst, Benutzereingabeereignisse für das Element zu ignorieren. Nützlich bei Vorhandensein von Klickereignissen.
- [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)
  - : Gibt einen Hinweis an Browser über die Art der Konfiguration der virtuellen Tastatur, die beim Bearbeiten dieses Elements oder seiner Inhalte verwendet werden soll. Wird hauptsächlich auf {{HTMLElement("input")}}-Elementen verwendet, ist aber auf jedem Element im [`contenteditable`](#contenteditable) Modus verwendbar.
- [`is`](/de/docs/Web/HTML/Global_attributes/is)
  - : Ermöglicht die Spezifizierung, dass ein Standard-HTML-Element sich wie ein registriertes, benutzerdefiniertes eingebautes Element verhalten soll (siehe [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) für mehr Details).

> [!NOTE]
> Die `item*` Attribute sind Teil des [WHATWG HTML Microdata Features](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Global_attributes/itemid)
  - : Die eindeutige, globale Kennung eines Elements.
- [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)
  - : Wird verwendet, um einem Element Eigenschaften hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut haben, wobei ein `itemprop` aus einem Namen-Wert-Paar besteht.
- [`itemref`](/de/docs/Web/HTML/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können mit dem Item über ein `itemref` verknüpft werden. Es stellt eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument bereit.
- [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope` arbeitet (meistens) zusammen mit [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype), um anzugeben, dass das HTML in einem Block sich auf ein bestimmtes Element bezieht. `itemscope` erstellt das Item und definiert den Geltungsbereich des damit verbundenen `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Element und dessen Eigenschaften beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Elementeigenschaften) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) wird verwendet, um den Geltungsbereich festzulegen, in dem das von `itemtype` festgelegte Vokabular in der Datenstruktur aktiv sein wird.
- [`lang`](/de/docs/Web/HTML/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht-bearbeitbare Elemente sind, oder die Sprache, die bearbeitbare Elemente vom Benutzer geschrieben werden sollten. Das Attribut enthält ein "Sprach-Tag" (bestehend aus durch Bindestriche getrennten "Sprach-Subtags") im Format, das in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} festgelegt ist. `xml:lang` hat Vorrang darüber.
- [`nonce`](/de/docs/Web/HTML/Global_attributes/nonce)
  - : Ein kryptografisches Nonce ("Nummer, die einmal verwendet wird"), das vom [Content Security Policy](/de/docs/Web/HTTP/CSP) verwendet werden kann, um festzustellen, ob ein bestimmter Abruf fortgesetzt werden darf.
- [`part`](/de/docs/Web/HTML/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Teilnamen des Elements. Teilnamen erlauben es CSS, spezifische Elemente in einem Schattenbaum über das {{CSSxRef("::part")}} Pseudo-Element auszuwählen und zu gestalten.
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu kennzeichnen (siehe [Popover API](/de/docs/Web/API/Popover_API)). Popover-Elemente sind über `display: none` versteckt, bis sie über ein aufrufendes/steuerndes Element (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) Aufruf geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten, sodass Screenreader und andere Tools die Interaktion mit einem Objekt in einer Weise präsentieren und unterstützen können, die den Benutzererwartungen für diesen Objekttyp entspricht. `roles` werden HTML-Elementen hinzugefügt, indem `role="role_type"` verwendet wird, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem [Schatten-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Schattenbaum zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, der vom {{HTMLElement("slot")}}-Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Element/slot#name)-Attributwert mit dem `slot`-Attributwert übereinstimmt.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Ein enumeriertes Attribut, das angibt, ob das Element auf Rechtschreibfehler überprüft werden kann. Es kann die folgenden Werte haben:

    - leerer String oder `true`, was darauf hinweist, dass das Element, falls möglich, auf Rechtschreibfehler überprüft werden sollte;
    - `false`, was darauf hinweist, dass das Element nicht auf Rechtschreibfehler überprüft werden sollte.

- [`style`](/de/docs/Web/HTML/Global_attributes/style)
  - : Beinhaltet [CSS](/de/docs/Web/CSS) Stil-Deklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, Stile in einer separaten Datei oder in mehreren Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck, schnelles Styling zu ermöglichen, zum Beispiel zu Testzwecken.
- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)

  - : Ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus aufnehmen kann (ist _fokussierbar_), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und, wenn ja, an welcher Position. Es kann mehrere Werte annehmen:

    - ein negativer Wert bedeutet, dass das Element fokussierbar sein sollte, aber nicht per sequentielle Tastaturnavigation erreichbar sein soll;
    - `0` bedeutet, dass das Element fokussierbar und per sequentielle Tastaturnavigation erreichbar sein sollte, aber seine relative Reihenfolge durch die Plattformkonvention definiert ist;
    - ein positiver Wert bedeutet, dass das Element fokussierbar und per sequentielle Tastaturnavigation erreichbar sein soll; die Reihenfolge, in der die Elemente fokussiert werden, ist der wachsende Wert von [**tabindex**](#tabindex). Wenn mehrere Elemente denselben tabindex haben, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Global_attributes/title)
  - : Enthält einen Text, der Beratungsinformationen zum zugehörigen Element darstellt. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip angezeigt werden.
- [`translate`](/de/docs/Web/HTML/Global_attributes/translate)

  - : Ein enumeriertes Attribut, das verwendet wird, um anzugeben, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text) Knoten-Kinder übersetzt werden sollen, wenn die Seite lokalisiert wird, oder ob sie unverändert gelassen werden sollen. Es kann die folgenden Werte annehmen:

    - leerer String oder `yes`, was darauf hinweist, dass das Element übersetzt wird.
    - `no`, was darauf hinweist, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}

  - : Ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das verwendet wird, um das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten zu steuern, bei denen eine Hardwaretastatur möglicherweise nicht verfügbar ist, für Elemente, deren Inhalt bearbeitbar ist (zum Beispiel ist es ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut).

    - `auto` oder ein _leerer String_, was die virtuelle Tastatur automatisch anzeigt, wenn das Element fokussiert oder angetippt wird.
    - `manual`, was den Fokus und das Tippen auf das Element vom Zustand der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Global_attributes/writingsuggestions)

  - : Wird verwendet, um das Verhalten der Schreibvorschläge des Browsers in einem Eingabefeld, einem Abschnitt einer Seite oder der gesamten Seite zu steuern.

    - `false`, was die Schreibvorschläge des Browsers deaktiviert.
    - `true` oder ein _leerer String_, was Schreibvorschläge aktiviert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element) Schnittstelle, die das Abfragen der meisten globalen Attribute erlaubt.
