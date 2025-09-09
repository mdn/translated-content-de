---
title: Globale Attribute
slug: Web/HTML/Reference/Global_attributes
l10n:
  sourceCommit: 56f5609d323467cd08eeaddc57e4490a02be1889
---

**Globale Attribute** sind Attribute, die bei allen HTML-Elementen vorkommen können; sie können bei allen Elementen verwendet werden, obwohl sie bei einigen Elementen keine Wirkung haben mögen.

Globale Attribute dürfen bei allen [HTML-Elementen](/de/docs/Web/HTML/Reference/Elements) angegeben werden, _auch bei solchen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass auch nicht-standardisierte Elemente diese Attribute zulassen müssen, obwohl die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr HTML5-konform ist. Zum Beispiel verbergen HTML5-konforme Browser Inhalte, die als `<foo hidden>…</foo>` gekennzeichnet sind, obwohl `<foo>` kein gültiges HTML-Element ist.

Neben den grundlegenden globalen HTML-Attributen existieren folgende globale Attribute:

- `xml:lang` und `xml:base` — Diese stammen aus den XHTML-Spezifikationen und sind veraltet, werden jedoch aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und die verschiedenen [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Zustände und Eigenschaften, die zur Sicherstellung der Barrierefreiheit verwendet werden.
- Die [Event-Handler-](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes)Attribute: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)
  - : Bietet einen Hinweis zur Erstellung eines Tastaturkürzels für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das auf der Computertastatur vorhanden ist.
- [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}
  - : Verbindet ein positioniertes Element mit einem Ankerelement. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Wert des Elements, an das das positionierte Element verankert werden soll. Das Element kann dann [mittels CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise.
- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Steuert, ob eingegebener Text automatisch auf Rechtschreibfehler korrigiert wird. Dies kann auf Elemente angewendet werden, die bearbeitbaren Text haben, außer bei {{HTMLElement("input")}}-Elementen mit dem Attribut: [`type="password"`](/de/docs/Web/HTML/Reference/Elements/input/password), [`type="email"`](/de/docs/Web/HTML/Reference/Elements/input/email) oder [`type="url"`](/de/docs/Web/HTML/Reference/Elements/input/url).
- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Zeigt an, dass ein Element beim Laden der Seite oder sobald der {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, fokussiert werden soll. Dieses Attribut ist ein boolescher Wert, der anfänglich auf false gesetzt ist.
- [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, spezifische Elemente über [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und zuzugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
  - : Ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das angibt, ob das Element vom Benutzer bearbeitet werden können soll. In diesem Fall ändert der Browser sein Widget, um die Bearbeitung zu ermöglichen. Das Attribut muss einen der folgenden Werte annehmen:
    - `true` oder die _leere Zeichenkette_, was anzeigt, dass das Element bearbeitbar sein muss;
    - `false`, was anzeigt, dass das Element nicht bearbeitbar sein darf.
    - `plaintext-only`, was anzeigt, dass der rohe Text des Elements bearbeitbar ist, jedoch keine Formatierung im Rich-Text-Format möglich ist.

- [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, sogenannte benutzerdefinierte Dateneigenschaften, die es ermöglichen, proprietäre Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM")}}-Repräsentation auszutauschen, die von Skripten verwendet werden können. Alle diese benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft ermöglicht den Zugriff auf diese Daten.
- [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)
  - : Ein aufgezähltes Attribut, das die Leserichtung des Textes im Element angibt. Es kann die folgenden Werte haben:
    - `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet werden soll, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet werden soll, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, was dem Benutzeragenten überlassen bleibt. Es verwendet einen grundlegenden Algorithmus, indem es die Zeichen im Element analysiert, bis es ein Zeichen mit starker Leserichtung findet, und dann diese Leserichtung auf das gesamte Element anwendet.

- [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
  - : Ein aufgezähltes Attribut, das angibt, ob das Element gezogen werden kann, mit der [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API). Es kann die folgenden Werte haben:
    - `true`, was angibt, dass das Element gezogen werden darf
    - `false`, was angibt, dass das Element nicht gezogen werden darf.

- [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
  - : Gibt einen Hinweis darauf, welches Aktions-Label (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen präsentiert werden soll.
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)
  - : Wird verwendet, um Schattenbestandteile von einem verschachtelten Schattenbaum in einen enthaltenen Light-DOM transitiv zu exportieren.
- [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Ein aufgezähltes Attribut, das anzeigt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Zum Beispiel kann es verwendet werden, um Elemente der Seite auszublenden, die erst benutzt werden können, wenn der Anmeldeprozess abgeschlossen ist. Der Browser rendert solche Elemente nicht. Dieses Attribut darf nicht verwendet werden, um Inhalte auszublenden, die legitim angezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument einmalig sein muss. Sein Zweck ist es, das Element beim Verlinken (unter Verwendung eines Fragmentbezeichners), Scripting oder Styling (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser veranlasst, Benutzereingaben für das Element zu ignorieren. Nützlich, wenn Klickevents vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)
  - : Bietet einen Hinweis für Browser, welche Art von virtueller Tastaturkonfiguration verwendet werden soll, wenn dieses Element oder dessen Inhalt bearbeitet wird. Wird hauptsächlich auf {{HTMLElement("input")}}-Elemente angewendet, kann aber auf jedes Element im [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Modus angewendet werden.
- [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)
  - : Ermöglicht es, anzugeben, dass ein Standard-HTML-Element wie ein registriertes benutzerdefiniertes eingebautes Element wirken soll (siehe [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) für weitere Details).

> [!NOTE]
> Die `item*` Attribute sind Teil des [WHATWG HTML Microdata Feature](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - : Der eindeutige, globale Bezeichner eines Elements.
- [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - : Wird verwendet, um Eigenschaften zu einem Element hinzuzufügen. Jedes HTML-Element darf ein `itemprop`-Attribut besitzen, bei dem ein `itemprop` aus einem Namen-Wert-Paar besteht.
- [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können dem Element mithilfe eines `itemref` zugeordnet werden. Es bietet eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - : `itemscope` funktioniert (normalerweise) zusammen mit [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype), um anzugeben, dass das im Block enthaltene HTML sich auf ein bestimmtes Element bezieht. `itemscope` erstellt das Element und definiert den Gültigkeitsbereich des zugehörigen `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das den Kontext des Elements und seiner Eigenschaften beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Elementeigenschaften) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) legt fest, wo in der Datenstruktur das durch `itemtype` festgelegte Vokabular aktiv sein wird.
- [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht bearbeitbare Elemente sind, oder die Sprache, in der bearbeitbare Elemente vom Benutzer geschrieben werden sollten. Das Attribut enthält ein "Sprach-Tag" (bestehend aus durch Bindestriche getrennten "Sprach-Subtags") im Format, das in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} festgelegt ist. `xml:lang` hat Vorrang vor diesem.
- [`nonce`](/de/docs/Web/HTML/Reference/Global_attributes/nonce)
  - : Eine kryptographische Nonce („Nummer, die nur einmal verwendet wird“), die von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf erlaubt ist oder nicht.
- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Part-Namen des Elements. Mittels Part-Namen kann CSS spezifische Elemente in einem Schattenbaum über das {{CSSxRef("::part")}}-Pseudoelement auswählen und anpassen.
- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu kennzeichnen (siehe [Popover API](/de/docs/Web/API/Popover_API)). Popover-Elemente sind über `display: none` verborgen, bis sie über ein auslösendes Steuerungselement (z. B. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten und ermöglichen es Screenreadern und anderen Werkzeugen, mit einem Objekt auf eine Weise zu interagieren, die den Benutzererwartungen dieses Objekttyps entspricht. `roles` werden HTML-Elementen über `role="role_type"` hinzugefügt, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Schattenbaum zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, der vom {{HTMLElement("slot")}}-Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attributswert mit dem `slot`-Attributswert übereinstimmt.
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Ein aufgezähltes Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden darf. Es kann die folgenden Werte haben:
    - leere Zeichenkette oder `true`, was anzeigt, dass das Element, falls möglich, auf Rechtschreibfehler überprüft werden soll;
    - `false`, was anzeigt, dass das Element nicht auf Rechtschreibfehler überprüft werden soll.

- [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Stilangaben, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfehlenswert ist, Stile in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element dienen hauptsächlich dem Zweck, schnelles Styling zu ermöglichen, beispielsweise zu Testzwecken.
- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
  - : Ein ganzzahliges Attribut, das angibt, ob das Element auf Eingabefokus reagieren kann (fokussierbar ist), ob es an der sequentiellen Keyboard-Navigation teilnehmen soll, und falls ja, an welcher Position. Es kann verschiedene Werte annehmen:
    - ein _negativer Wert_, der bedeutet, dass das Element fokussierbar sein soll, aber nicht über die sequentielle Keyboard-Navigation erreichbar sein soll;
    - `0`, was bedeutet, dass das Element fokussierbar und über die sequentielle Keyboard-Navigation erreichbar sein soll, seine relative Reihenfolge wird jedoch durch die Plattformkonvention festgelegt;
    - ein _positiver Wert_, der bedeutet, dass das Element fokussierbar und über die sequentielle Keyboard-Navigation erreichbar sein soll; die Reihenfolge, in der die Elemente fokussiert werden, ergibt sich aus dem aufsteigenden Wert des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex). Wenn mehrere Elemente denselben Tabindex teilen, folgt die relative Reihenfolge ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)
  - : Enthält einen Text, der Informationen im Zusammenhang mit dem Element, zu dem es gehört, darstellt. Solche Informationen können typischerweise, aber nicht zwingend, dem Benutzer als Tooltip präsentiert werden.
- [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)
  - : Ein aufgezähltes Attribut, das verwendet wird, um anzugeben, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knotenkinder bei der Lokalisierung der Seite übersetzt oder unverändert gelassen werden sollen. Es kann die folgenden Werte haben:
    - leere Zeichenkette oder `yes`, was anzeigt, dass das Element übersetzt wird.
    - `no`, was anzeigt, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}
  - : Ein {{Glossary("enumerated", "aufgezähltes")}} Attribut, das verwendet wird, um das Verhalten der on-screen virtuellen Tastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten zu steuern, bei denen möglicherweise keine hardwarebasierte Tastatur verfügbar ist für Elemente, deren Inhalt bearbeitbar ist (zum Beispiel ein {{htmlelement("input")}} oder {{htmlelement("textarea")}}-Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut).
    - `auto` oder eine _leere Zeichenkette_, die die virtuelle Tastatur automatisch anzeigt, wenn das Element fokussiert oder angeklickt wird.
    - `manual`, das den Fokus und Klick auf das Element vom Status der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)
  - : Ein {{Glossary("enumerated", "aufgezähltes")}} Attribut, das angibt, ob browsergestützte Schreibvorschläge im Geltungsbereich des Elements aktiviert sein sollen oder nicht.
    - `false`, was die Schreibvorschläge des Browsers deaktiviert.
    - `true` oder eine _leere Zeichenkette_, was Schreibvorschläge ermöglicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die das Abfragen der meisten globalen Attribute ermöglicht.
